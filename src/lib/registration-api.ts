import { firebaseAuth } from "./firebase";

export type Gender = "Male" | "Female";
export type Tower = "A" | "B" | "C";

export interface Participant {
  participantGuid: string;
  participantName: string;
  age: number | "";
  gender: Gender | "";
  sportsParticipatingIn: string[];
}

export interface Registration {
  registrationId: number;
  registrationGuid: string;
  tower: Tower | "";
  flatNo: number | "";
  email: string;
  mobileNumber: string;
  eventName: string;
  createdDateTime: string;
  isActive: boolean;
  participants: Participant[];
}

export const EVENT_NAME = "ZSINDAUG2026";
export const TOWERS: Tower[] = ["A", "B", "C"];
export const MAX_PARTICIPANTS = 5;

const API_BASE = "https://zionsports.runasp.net";
// const API_BASE = "https://localhost:7017";

const registrationListCache = new Map<string, Registration[]>();
const registrationListInFlight = new Map<string, Promise<Registration[]>>();

function invalidateRegistrationListCache() {
  registrationListCache.clear();
  registrationListInFlight.clear();
}

async function apiFetch<T = unknown>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const url = `${API_BASE.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  const existingHeaders =
    options.headers instanceof Headers
      ? Object.fromEntries(options.headers.entries())
      : ((options.headers as Record<string, string> | undefined) ?? {});
  const headers: Record<string, string> = {
    "content-type": "application/json",
    ...existingHeaders,
  };

  try {
    const token = await firebaseAuth.currentUser?.getIdToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  } catch {
    // Ignore token lookup errors and continue without auth headers.
  }

  const res = await fetch(url, { ...options, headers, mode: "cors" });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `API request failed ${res.status} ${res.statusText}: ${text}`,
    );
  }
  // Some endpoints may return empty body
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("application/json"))
    return (await res.text()) as unknown as T;
  return (await res.json()) as T;
}

export type RegistrationPayload = Omit<
  Registration,
  | "registrationId"
  | "registrationGuid"
  | "createdDateTime"
  | "eventName"
  | "isActive"
>;

function normalizeRegistrationsResponse(response: unknown): Registration[] {
  if (Array.isArray(response)) return response;
  if (!response || typeof response !== "object") return [];

  const data = response as Record<string, unknown>;
  if (Array.isArray(data.data)) return data.data as Registration[];
  if (Array.isArray(data.items)) return data.items as Registration[];
  if (Array.isArray(data.registrations))
    return data.registrations as Registration[];
  if ("registrationGuid" in data) return [data as unknown as Registration];

  const firstArray = Object.values(data).find(Array.isArray);
  if (Array.isArray(firstArray)) return firstArray as Registration[];

  return [];
}

export async function listRegistrations(
  email?: string,
): Promise<Registration[]> {
  const cacheKey = email ?? "__all__";
  const cached = registrationListCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const inFlight = registrationListInFlight.get(cacheKey);
  if (inFlight) {
    return inFlight;
  }

  const request = (async () => {
    const response = email
      ? await apiFetch<Registration | Registration[]>(
          `api/Registration/email/${encodeURIComponent(email)}`,
        )
      : await apiFetch<Registration[]>(`api/Registration`);

    const normalized = normalizeRegistrationsResponse(response);
    registrationListCache.set(cacheKey, normalized);
    return normalized;
  })();

  registrationListInFlight.set(cacheKey, request);

  try {
    return await request;
  } finally {
    registrationListInFlight.delete(cacheKey);
  }
}

export async function createRegistration(
  data: RegistrationPayload,
): Promise<Registration> {
  const payload = { ...data, eventName: EVENT_NAME };
  const result = await apiFetch<Registration>(`api/Registration`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  invalidateRegistrationListCache();
  return result;
}

export async function updateRegistration(
  registrationGuid: string,
  data: RegistrationPayload,
): Promise<Registration> {
  const payload = { ...data, eventName: EVENT_NAME };
  const result = await apiFetch<Registration>(
    `api/Registration/${encodeURIComponent(registrationGuid)}`,
    {
      method: "PUT",
      body: JSON.stringify(payload),
    },
  );
  invalidateRegistrationListCache();
  return result;
}

export async function deleteRegistration(
  registrationGuid: string,
): Promise<void> {
  await apiFetch<void>(
    `api/Registration/${encodeURIComponent(registrationGuid)}`,
    {
      method: "DELETE",
    },
  );
  invalidateRegistrationListCache();
}

export function getSportsForAge(
  age: number | "",
  gender?: Gender | "",
): string[] {
  if (age === "" || !Number.isFinite(Number(age))) return [];
  const a = Number(age);
  const sports: string[] = [];
  if (a >= 3 && a <= 5) sports.push("25m Running Race");
  if (a >= 6 && a <= 9)
    sports.push("100 Meters Running", "Memory Tray Game", "Lemon in the spoon");
  if (a >= 10 && a <= 13)
    sports.push(
      "200 Meters Running Race",
      "Football Penalty Kick",
      "Memory Tray Game",
    );
  if (a >= 14 && a <= 17)
    sports.push("Football Penalty Kick", "Plank Challenge");
  if (a >= 18 && a <= 40)
    sports.push("Basketball Free Throw Challenge", "Wall Sit Challenge");
  if (a >= 5) sports.push("Chess Tournament [Fees Rs.100]");
  if (a >= 7 && a <= 15)
    sports.push(
      "Kids Cricket Match [Fees Rs.100]",
      "Kids Football Match [Fees Rs.100]",
    );
  if (a >= 16 && gender === "Female")
    sports.push(
      "Women's Cricket [Fees Rs.100]",
      "Womens Throwball [Fees Rs.100]",
    );
  return sports.sort();
}
