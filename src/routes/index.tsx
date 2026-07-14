import { useEffect, useMemo, useRef, useState } from "react";
import {
  Loader2,
  Plus,
  Trash2,
  Pencil,
  CheckCircle2,
  X,
  Check,
  ChevronsUpDown,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Toaster } from "@/components/ui/sonner";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
  createRegistration,
  deleteRegistration,
  listRegistrations,
  updateRegistration,
  getSportsForAge,
  TOWERS,
  MAX_PARTICIPANTS,
  type Participant,
  type Registration,
  type Tower,
} from "@/lib/registration-api";
import { useAuth } from "@/lib/auth-context";

const emptyParticipant = (): Participant => ({
  participantGuid: crypto.randomUUID(),
  participantName: "",
  age: "",
  gender: "",
  sportsParticipatingIn: [],
});

interface FormState {
  mobileNumber: string;
  tower: Tower | "";
  flatNo: string;
  participants: Participant[];
}

const emptyForm = (): FormState => ({
  mobileNumber: "",
  tower: "",
  flatNo: "",
  participants: [emptyParticipant()],
});

const normalizeTowerValue = (value: unknown): Tower | "" => {
  if (typeof value === "string") {
    const cleaned = value
      .trim()
      .toUpperCase()
      .replace(/^TOWER[\s-]*/, "");
    if (cleaned === "A" || cleaned === "B" || cleaned === "C") {
      return cleaned as Tower;
    }
  }

  if (typeof value === "number") {
    if (value === 1) return "A";
    if (value === 2) return "B";
    if (value === 3) return "C";
  }

  return "";
};

// Detect if user is in WhatsApp or other in-app browser
function isInAppBrowser(): boolean {
  const ua = navigator.userAgent.toLowerCase();
  return (
    ua.includes("whatsapp") ||
    ua.includes("instagram") ||
    ua.includes("facebook") ||
    ua.includes("fban") ||
    ua.includes("fbav") ||
    ua.includes("line ") ||
    ua.includes("telegram")
  );
}

// Get available browsers with intent schemes
interface Browser {
  name: string;
  scheme: string;
  fallbackUrl: string;
}

function getAvailableBrowsers(): Browser[] {
  const isAndroid = navigator.userAgent.includes("Android");

  if (isAndroid) {
    return [
      {
        name: "Chrome",
        scheme:
          "intent://{url}#Intent;package=com.android.chrome;scheme=https;end;",
        fallbackUrl:
          "https://play.google.com/store/apps/details?id=com.android.chrome",
      },
      {
        name: "Firefox",
        scheme:
          "intent://{url}#Intent;package=org.mozilla.firefox;scheme=https;end;",
        fallbackUrl:
          "https://play.google.com/store/apps/details?id=org.mozilla.firefox",
      },
      {
        name: "Edge",
        scheme:
          "intent://{url}#Intent;package=com.microsoft.emmx;scheme=https;end;",
        fallbackUrl:
          "https://play.google.com/store/apps/details?id=com.microsoft.emmx",
      },
      {
        name: "Opera",
        scheme:
          "intent://{url}#Intent;package=com.opera.browser;scheme=https;end;",
        fallbackUrl:
          "https://play.google.com/store/apps/details?id=com.opera.browser",
      },
    ];
  } else {
    // iOS
    return [
      {
        name: "Safari (Default)",
        scheme: "",
        fallbackUrl: window.location.href,
      },
      {
        name: "Chrome",
        scheme: "googlechrome://openurl?url={url}",
        fallbackUrl: "https://apps.apple.com/app/google-chrome/id535886823",
      },
      {
        name: "Firefox",
        scheme: "firefox://open-url?url={url}",
        fallbackUrl:
          "https://apps.apple.com/app/firefox-private-safe-browser/id989673669",
      },
      {
        name: "Edge",
        scheme: "microsoft-edge-https://{url}",
        fallbackUrl: "https://apps.apple.com/app/microsoft-edge/id1288723196",
      },
    ];
  }
}

function openInBrowser(browser: Browser, url: string) {
  try {
    if (!browser.scheme) {
      // Safari default
      window.location.href = url;
      return;
    }

    const processedScheme = browser.scheme.replace(
      /{url}/g,
      encodeURIComponent(url),
    );
    window.location.href = processedScheme;

    // Fallback after 1 second if app not found
    setTimeout(() => {
      window.location.href = browser.fallbackUrl;
    }, 1000);
  } catch (error) {
    console.error("Error opening browser:", error);
    window.location.href = browser.fallbackUrl;
  }
}

function Index() {
  const { user, loading, signInWithGoogle, logout } = useAuth();
  const [tab, setTab] = useState<"list" | "register">("list");
  const [editing, setEditing] = useState<Registration | null>(null);
  const [signingIn, setSigningIn] = useState(false);
  const [hasRegistrations, setHasRegistrations] = useState(false);
  const [showBrowserSelection, setShowBrowserSelection] = useState(false);
  const showRegisterTab = !hasRegistrations;

  const handleSignIn = async () => {
    // Normal sign-in flow
    setSigningIn(true);
    try {
      await signInWithGoogle();
    } catch (e) {
      console.error(e);
      toast.error("Sign-in failed. Please try again.");
    } finally {
      setSigningIn(false);
    }
  };

  const handleBrowserSelect = (browser: Browser) => {
    const currentUrl = window.location.href;
    openInBrowser(browser, currentUrl);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Toaster richColors position="top-right" />
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <Toaster richColors position="top-right" />
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Zion Sports Event Registration - Aug 2026</CardTitle>
            <p className="text-sm text-muted-foreground">
              Sign in with Google to register participants from family and
              manage your registrations.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={handleSignIn}
              disabled={signingIn}
              className="w-full"
            >
              {signingIn ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Sign in with Gmail Account
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const email = user.email ?? "";
  const profileImage = user.photoURL ?? "";
  const profileInitials = (user.displayName ?? email ?? "U")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="min-h-screen bg-background">
      <Toaster richColors position="top-right" />
      <header className="border-b border-border/35 bg-card/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-primary">
              Bollineni Zion Sports Committee
            </div>
            <h4 className="text-2xl font-semibold tracking-tight sm:text-2xl">
              Zion Sports Event Registration - Aug 2026
            </h4>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              All events will be held on weekends in August 1st/2nd and 8th/9th.
              Use this form to register your entire family, single participant
              can participate in multiple events.
              <br />
              Assistance : <a href="tel:+919597971915">
                {" "}
                📞 Krishna Kumar
              </a> | <a href="tel:+919003099645"> 📞 Saravanan</a> |{" "}
              <a href="tel:+919003014921"> 📞 Praveen</a>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border/70 bg-background/70 px-4 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/40 ring-2 ring-primary/20">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt={user.displayName ?? "Profile"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-semibold text-foreground">
                    {profileInitials}
                  </span>
                )}
              </div>
              <div className="text-left text-xs text-muted-foreground sm:text-right">
                <div className="font-semibold text-foreground">
                  {user.displayName ?? "User"}
                </div>
                <div>{email}</div>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={() => logout()}>
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <Tabs
          value={tab}
          onValueChange={(v) => setTab(v as "list" | "register")}
        >
          <TabsList className="flex w-full flex-wrap justify-start rounded-full border border-border/70 bg-background/70 p-1 shadow-sm sm:w-auto">
            <TabsTrigger value="list" className="rounded-full px-4">
              My Registrations
            </TabsTrigger>
            {showRegisterTab ? (
              <TabsTrigger
                value="register"
                className="flex-1 rounded-full px-4 sm:flex-none"
              >
                {editing ? "Edit Registration" : "New Registration"}
              </TabsTrigger>
            ) : null}
          </TabsList>

          <TabsContent value="list" className="mt-6">
            <RegistrationsList
              email={email}
              onEdit={(r) => {
                setEditing(r);
                setTab("register");
              }}
              onNoRegistrations={() => {
                setHasRegistrations(false);
                setTab("register");
              }}
              onRegistrationsChange={setHasRegistrations}
            />
          </TabsContent>
          <TabsContent value="register" className="mt-6">
            <RegistrationForm
              email={email}
              editing={editing}
              onDone={() => {
                setEditing(null);
                setHasRegistrations(true);
                setTab("list");
              }}
              onCancelEdit={() => {
                setEditing(null);
                setHasRegistrations(true);
                setTab("list");
              }}
            />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default Index;

function RegistrationsList({
  email,
  onEdit,
  onNoRegistrations,
  onRegistrationsChange,
}: {
  email: string;
  onEdit: (r: Registration) => void;
  onNoRegistrations: () => void;
  onRegistrationsChange: (hasItems: boolean) => void;
}) {
  const [items, setItems] = useState<Registration[] | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const loadedEmailRef = useRef<string | null>(null);
  const loadingEmailRef = useRef<string | null>(null);

  const load = async () => {
    if (!email) return;
    if (loadedEmailRef.current === email && items !== null) return;
    if (loadingEmailRef.current === email) return;

    loadingEmailRef.current = email;
    setItems(null);
    try {
      const data = await listRegistrations(email);
      const normalized = Array.isArray(data) ? data : [];
      loadedEmailRef.current = email;
      setItems(normalized);
      if (normalized.length === 0) {
        onNoRegistrations();
        onRegistrationsChange(false);
      } else {
        onRegistrationsChange(true);
      }
    } catch (error) {
      const message = String(error);
      if (
        message.includes("API request failed 404") ||
        message.includes("404")
      ) {
        onNoRegistrations();
        onRegistrationsChange(false);
        return;
      }
      toast.error("Failed to load registrations");
      setItems([]);
      onRegistrationsChange(false);
    } finally {
      if (loadingEmailRef.current === email) {
        loadingEmailRef.current = null;
      }
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  const handleDelete = async (registrationGuid: string) => {
    setDeletingId(registrationGuid);
    try {
      await deleteRegistration(registrationGuid);
      toast.success("Registration deleted");
      setItems((prev) => {
        const next =
          prev?.filter((r) => r.registrationGuid !== registrationGuid) ?? [];
        onRegistrationsChange(next.length > 0);
        return next;
      });
    } catch {
      toast.error("Failed to delete");
    } finally {
      setDeletingId(null);
      setConfirmId(null);
    }
  };

  if (items === null) {
    return (
      <div className="flex items-center justify-center py-20 text-muted-foreground">
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        Loading registrations...
      </div>
    );
  }

  const safeItems = Array.isArray(items) ? items : [];

  if (safeItems.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-muted-foreground">No registrations yet.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Head over to the New Registration tab to add one.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {items.map((r) => (
          <Card key={r.registrationGuid}>
            <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => onEdit(r)}>
                  <Pencil className="mr-1 h-4 w-4" /> Edit Registration
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setConfirmId(r.registrationGuid)}
                  disabled={deletingId === r.registrationGuid}
                >
                  {deletingId === r.registrationGuid ? (
                    <Loader2 className="mr-1 h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="mr-1 h-4 w-4" />
                  )}
                  Delete
                </Button>
                <div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {r.tower} {r.flatNo} | {r.mobileNumber}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {r.participants.map((p) => (
                  <div
                    key={p.participantGuid}
                    className="rounded-lg border bg-muted/30 p-3 text-sm"
                  >
                    <div className="text-base font-semibold text-slate-900 sm:text-lg">
                      {p.participantName}
                    </div>
                    <div className="mt-1 text-muted-foreground">
                      Age {p.age} · {p.gender || "Not specified"}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {p.sportsParticipatingIn.map((s) => (
                        <Badge
                          key={`${p.participantGuid}-${s}`}
                          variant="secondary"
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AlertDialog
        open={confirmId !== null}
        onOpenChange={(o) => !o && setConfirmId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this registration?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => confirmId && handleDelete(confirmId)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function SportsMultiSelect({
  value,
  options,
  onChange,
  disabled,
}: {
  value: string[];
  options: string[];
  onChange: (next: string[]) => void;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const toggle = (opt: string) => {
    onChange(
      value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt],
    );
  };
  const label =
    value.length === 0
      ? options.length === 0
        ? "Enter age and gender first"
        : "Select sports"
      : `${value.length} selected`;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          disabled={disabled || options.length === 0}
          className="h-12 w-full justify-between rounded-none border-0 border-b border-border/35 bg-transparent px-0 py-2 text-left text-base font-medium"
        >
          <span className={value.length === 0 ? "text-muted-foreground" : ""}>
            {label}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[--radix-popover-trigger-width] p-1"
        align="start"
      >
        <div className="max-h-64 overflow-auto">
          {options.map((opt) => {
            const checked = value.includes(opt);
            return (
              <div
                key={opt}
                role="button"
                tabIndex={0}
                onClick={() => toggle(opt)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggle(opt);
                  }
                }}
                className="flex w-full items-center gap-2 rounded-sm px-2 py-2 text-left text-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <Checkbox checked={checked} className="pointer-events-none" />
                <span className="flex-1">{opt}</span>
                {checked && <Check className="h-4 w-4 opacity-70" />}
              </div>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function RegistrationForm({
  email,
  editing,
  onDone,
  onCancelEdit,
}: {
  email: string;
  editing: Registration | null;
  onDone: () => void;
  onCancelEdit: () => void;
}) {
  const [form, setForm] = useState<FormState>(emptyForm());
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmFeeAccepted, setConfirmFeeAccepted] = useState(false);
  const isSubmittingRef = useRef(false);

  useEffect(() => {
    if (editing) {
      const editingRecord = editing as Partial<Registration> &
        Record<string, unknown>;
      const returnedParticipants = Array.isArray(editing.participants)
        ? editing.participants
        : Array.isArray(editingRecord.participation)
          ? (editingRecord.participation as Participant[])
          : [];
      const towerValue = normalizeTowerValue(
        String(
          editingRecord.tower ??
            editingRecord.towerName ??
            editingRecord.towerCode ??
            editingRecord.towerId ??
            "",
        ),
      );

      setForm({
        mobileNumber: editing.mobileNumber ?? "",
        tower: towerValue,
        flatNo:
          editing.flatNo === undefined || editing.flatNo === null
            ? ""
            : String(editing.flatNo),
        participants:
          returnedParticipants.length > 0
            ? returnedParticipants.map((p: Participant) => ({
                participantGuid: p.participantGuid ?? crypto.randomUUID(),
                participantName: p.participantName ?? "",
                age: p.age === undefined || p.age === null ? "" : p.age,
                gender: p.gender ?? "",
                sportsParticipatingIn: Array.isArray(p.sportsParticipatingIn)
                  ? p.sportsParticipatingIn
                  : [],
              }))
            : [emptyParticipant()],
      });
    } else {
      setForm(emptyForm());
    }
    setErrors({});
    setConfirmFeeAccepted(false);
  }, [editing]);

  const updateField = <K extends keyof FormState>(
    key: K,
    value: FormState[K],
  ) => setForm((f) => ({ ...f, [key]: value }));

  const updateParticipant = (id: string, patch: Partial<Participant>) =>
    setForm((f) => ({
      ...f,
      participants: f.participants.map((p) => {
        if (p.participantGuid !== id) return p;
        const next = { ...p, ...patch };
        if ("age" in patch || "gender" in patch) {
          const allowed = getSportsForAge(next.age, next.gender);
          next.sportsParticipatingIn = next.sportsParticipatingIn.filter((s) =>
            allowed.includes(s),
          );
        }
        return next;
      }),
    }));

  const addParticipant = () =>
    setForm((f) =>
      f.participants.length >= MAX_PARTICIPANTS
        ? f
        : { ...f, participants: [...f.participants, emptyParticipant()] },
    );

  const removeParticipant = (id: string) =>
    setForm((f) => ({
      ...f,
      participants:
        f.participants.length === 1
          ? f.participants
          : f.participants.filter((p) => p.participantGuid !== id),
    }));

  const validate = (): boolean => {
    const e: Record<string, string> = {};

    if (!form.mobileNumber.trim()) {
      e.mobileNumber = "Field is mandatory";
    } else if (!/^\d{10}$/.test(form.mobileNumber.trim())) {
      e.mobileNumber = "Enter a valid 10-digit mobile number";
    }

    if (!form.tower) {
      e.tower = "Field is mandatory";
    }

    if (!form.flatNo.trim()) {
      e.flatNo = "Field is mandatory";
    } else if (!/^\d+$/.test(form.flatNo.trim())) {
      e.flatNo = "Enter a valid flat number";
    }

    form.participants.forEach((p, i) => {
      if (!p.participantName.trim()) {
        e[`p_${i}_name`] = "Field is mandatory";
      }
      if (p.age === "" || p.age === null || p.age === undefined) {
        e[`p_${i}_age`] = "Field is mandatory";
      } else if (Number(p.age) <= 0) {
        e[`p_${i}_age`] = "Enter valid age";
      }
      if (!p.gender) {
        e[`p_${i}_gender`] = "Field is mandatory";
      }
      if (!p.sportsParticipatingIn || p.sportsParticipatingIn.length === 0) {
        e[`p_${i}_sport`] = "Field is mandatory";
      }
    });

    if (totalRegistrationFee > 0 && !confirmFeeAccepted) {
      e.confirm = "Required";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (isSubmittingRef.current) return;
    if (!validate()) {
      toast.error("Few mandatory fields in the form are missing or invalid.");
      return;
    }
    isSubmittingRef.current = true;
    setSaving(true);
    try {
      const payload = {
        email,
        mobileNumber: form.mobileNumber.trim(),
        tower: form.tower as Tower,
        flatNo: Number(form.flatNo.trim()),
        participants: form.participants.map((p) => ({
          ...p,
          participantName: p.participantName.trim(),
          age: Number(p.age),
        })),
      };

      if (editing) {
        await updateRegistration(editing.registrationGuid, payload);
        toast.success("Registration updated successfully", {
          icon: <CheckCircle2 className="h-4 w-4" />,
        });
      } else {
        await createRegistration(payload);
        toast.success("Registration submitted successfully!", {
          icon: <CheckCircle2 className="h-4 w-4" />,
        });
      }
      onDone();
    } catch (e) {
      console.error(e);
      toast.error(
        String(
          (e as Error)?.message ?? "Something went wrong. Please try again.",
        ),
      );
    } finally {
      setSaving(false);
      isSubmittingRef.current = false;
    }
  };

  const canAdd = form.participants.length < MAX_PARTICIPANTS;

  const totalRegistrationFee = useMemo(() => {
    const feeRegex = /\[Fees\s*Rs\.?\s*([0-9,]+)\]/i;
    let total = 0;
    for (const p of form.participants) {
      const sports = Array.isArray(p.sportsParticipatingIn)
        ? p.sportsParticipatingIn
        : [];
      for (const s of sports) {
        const m = String(s).match(feeRegex);
        if (m) {
          const n = Number(m[1].replace(/,/g, ""));
          if (!Number.isNaN(n)) total += n;
        }
      }
    }
    return total;
  }, [form.participants]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="border border-border/60 bg-card/90 shadow-[0_6px_20px_rgba(15,23,42,0.04)]">
        <CardHeader className="px-4 pb-3 pt-5 sm:px-6">
          <CardTitle className="text-lg sm:text-xl">
            Contact & Residence
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 px-4 pb-5 sm:px-6 md:grid-cols-3 md:gap-5">
          <div className="space-y-3 rounded-2xl border border-border/40 bg-background/80 p-4 shadow-[0_4px_16px_rgba(15,23,42,0.04)] sm:p-5">
            <Label htmlFor="mobile" className="mb-0">
              <span>Mobile Number</span>
              <span className="ml-1 text-destructive">*</span>
            </Label>
            <Input
              id="mobile"
              inputMode="tel"
              maxLength={10}
              autoComplete="new-password"
              autoCorrect="off"
              spellCheck={false}
              placeholder="10-digit number"
              value={form.mobileNumber}
              onChange={(e) =>
                updateField("mobileNumber", e.target.value.replace(/\D/g, ""))
              }
              disabled={saving}
            />
            {errors.mobileNumber && (
              <p className="text-xs text-destructive">{errors.mobileNumber}</p>
            )}
          </div>
          <div className="space-y-3 rounded-2xl border border-border/40 bg-background/80 p-4 shadow-[0_4px_16px_rgba(15,23,42,0.04)] sm:p-5">
            <Label htmlFor="tower" className="mb-0">
              <span>Tower</span>
              <span className="ml-1 text-destructive">*</span>
            </Label>
            <Select
              key={form.tower || "empty"}
              value={form.tower || undefined}
              onValueChange={(v) => updateField("tower", v as Tower)}
              disabled={saving}
            >
              <SelectTrigger id="tower">
                <SelectValue placeholder="Select tower" />
              </SelectTrigger>
              <SelectContent>
                {TOWERS.map((t) => (
                  <SelectItem key={t} value={t}>
                    Tower {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.tower && (
              <p className="text-xs text-destructive">{errors.tower}</p>
            )}
          </div>
          <div className="space-y-3 rounded-2xl border border-border/40 bg-background/80 p-4 shadow-[0_4px_16px_rgba(15,23,42,0.04)] sm:p-5">
            <Label htmlFor="flat" className="mb-0">
              <span>Flat Number</span>
              <span className="ml-1 text-destructive">*</span>
            </Label>
            <Input
              id="flat"
              inputMode="numeric"
              autoComplete="new-password"
              autoCorrect="off"
              spellCheck={false}
              placeholder="e.g. 1204"
              value={form.flatNo}
              onChange={(e) =>
                updateField("flatNo", e.target.value.replace(/\D/g, ""))
              }
              disabled={saving}
            />
            {errors.flatNo && (
              <p className="text-xs text-destructive">{errors.flatNo}</p>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/35 bg-card/90 px-4 py-4 shadow-[0_6px_18px_rgba(15,23,42,0.04)] sm:px-5">
        <div>
          <h2 className="text-lg font-semibold sm:text-xl">Participants</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Up to {MAX_PARTICIPANTS} participants per family.
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {form.participants.map((p, i) => (
          <ParticipantCard
            key={p.participantGuid}
            index={i}
            participant={p}
            canRemove={form.participants.length > 1}
            errors={errors}
            saving={saving}
            onChange={(patch) => updateParticipant(p.participantGuid, patch)}
            onRemove={() => removeParticipant(p.participantGuid)}
          />
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addParticipant}
          disabled={saving || !canAdd}
          className="border-primary/20 bg-primary/10 text-primary hover:bg-primary/15"
        >
          <Plus className="mr-1 h-4 w-4" /> Add Participant
        </Button>
      </div>
      {totalRegistrationFee > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <Checkbox
            id="confirmfeepayment"
            checked={confirmFeeAccepted}
            onCheckedChange={(v) => setConfirmFeeAccepted(!!v)}
            disabled={saving}
          />
          <Label htmlFor="confirmfeepayment" className="text-sm">
            I confirm to pay The Total Registration Fee of{" "}
            <b>₹{totalRegistrationFee}</b> for the above participants.
          </Label>
          {errors.confirm && (
            <p className="text-xs text-destructive">{errors.confirm}</p>
          )}
        </div>
      )}
      <div className="flex flex-wrap items-center justify-end gap-2">
        {editing && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancelEdit}
            disabled={saving}
          >
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={saving} className="min-w-40">
          {saving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : editing ? (
            "Update Registration"
          ) : (
            "Submit Registration"
          )}
        </Button>
      </div>
    </form>
  );
}

function ParticipantCard({
  index,
  participant,
  canRemove,
  errors,
  saving,
  onChange,
  onRemove,
}: {
  index: number;
  participant: Participant;
  canRemove: boolean;
  errors: Record<string, string>;
  saving: boolean;
  onChange: (patch: Partial<Participant>) => void;
  onRemove: () => void;
}) {
  const sportOptions = useMemo(
    () => getSportsForAge(participant.age, participant.gender),
    [participant.age, participant.gender],
  );

  return (
    <Card className="border border-border/35 bg-card/90 shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 px-4 pb-3 pt-5 sm:px-6">
        <CardTitle className="text-base sm:text-lg">
          Participant {index + 1}
        </CardTitle>
        {canRemove && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onRemove}
            disabled={saving}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent className="grid gap-4 px-4 pb-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-5">
        <div className="space-y-3 rounded-2xl border border-border/35 bg-background/80 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.02)] sm:p-5">
          <Label className="mb-0">
            <span>Name</span>
            <span className="ml-1 text-destructive">*</span>
          </Label>
          <Input
            placeholder="Full name"
            autoComplete="new-password"
            autoCorrect="off"
            spellCheck={false}
            value={participant.participantName}
            onChange={(e) => onChange({ participantName: e.target.value })}
            disabled={saving}
          />
          {errors[`p_${index}_name`] && (
            <p className="text-xs text-destructive">
              {errors[`p_${index}_name`]}
            </p>
          )}
        </div>
        <div className="space-y-3 rounded-2xl border border-border/35 bg-card/80 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.02)]">
          <Label className="mb-0">
            <span>Age</span>
            <span className="ml-1 text-destructive">*</span>
          </Label>
          <Input
            type="number"
            min={1}
            max={120}
            autoComplete="new-password"
            autoCorrect="off"
            spellCheck={false}
            value={participant.age}
            onChange={(e) =>
              onChange({
                age: e.target.value === "" ? "" : Number(e.target.value),
              })
            }
            disabled={saving}
          />
          {errors[`p_${index}_age`] && (
            <p className="text-xs text-destructive">
              {errors[`p_${index}_age`]}
            </p>
          )}
        </div>
        <div className="space-y-3 rounded-2xl border border-border/35 bg-card/80 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.02)]">
          <Label className="mb-0">
            <span>Gender</span>
            <span className="ml-1 text-destructive">*</span>
          </Label>
          <Select
            value={participant.gender || undefined}
            onValueChange={(v) =>
              onChange({ gender: v as Participant["gender"] })
            }
            disabled={saving}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectContent>
          </Select>
          {errors[`p_${index}_gender`] && (
            <p className="text-xs text-destructive">
              {errors[`p_${index}_gender`]}
            </p>
          )}
        </div>
        <div className="space-y-3 rounded-2xl border border-border/35 bg-card/80 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.02)]">
          <Label className="mb-0">
            <span>Sports</span>
            <span className="ml-1 text-destructive">*</span>
          </Label>
          <SportsMultiSelect
            value={participant.sportsParticipatingIn}
            options={sportOptions}
            onChange={(next) => onChange({ sportsParticipatingIn: next })}
            disabled={saving}
          />
          {participant.sportsParticipatingIn.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {participant.sportsParticipatingIn.map((s) => (
                <Badge key={s} variant="secondary" className="gap-1">
                  {s}
                  <button
                    type="button"
                    onClick={() =>
                      onChange({
                        sportsParticipatingIn:
                          participant.sportsParticipatingIn.filter(
                            (x) => x !== s,
                          ),
                      })
                    }
                    className="ml-1 opacity-70 hover:opacity-100"
                    aria-label={`Remove ${s}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
          {errors[`p_${index}_sport`] && (
            <p className="text-xs text-destructive">
              {errors[`p_${index}_sport`]}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
