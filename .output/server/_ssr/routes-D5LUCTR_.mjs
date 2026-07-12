import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import {
  S as Slot,
  T as require_jsx_runtime,
  a as Overlay2,
  c as Title2,
  i as Description2,
  n as Cancel,
  o as Portal2,
  r as Content2,
  s as Root2,
  t as Action,
} from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as firebaseAuth, r as useAuth } from "./auth-context-DeDpfuaR.mjs";
import {
  a as LoaderCircle,
  c as ChevronUp,
  i as Pencil,
  l as ChevronDown,
  n as Trash2,
  o as CircleCheck,
  r as Plus,
  s as ChevronsUpDown,
  t as X,
  u as Check,
} from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import {
  n as clsx,
  t as cva,
} from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import {
  i as Trigger,
  n as List,
  r as Root2$1,
  t as Content,
} from "../_libs/radix-ui__react-tabs.mjs";
import {
  n as CheckboxIndicator,
  t as Checkbox$1,
} from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import {
  i as Trigger$1,
  n as Portal,
  r as Root2$2,
  t as Content2$1,
} from "../_libs/@radix-ui/react-popover+[...].mjs";
import {
  a as SelectItemIndicator,
  c as SelectPortal,
  d as SelectSeparator$1,
  f as SelectTrigger$1,
  i as SelectItem$1,
  l as SelectScrollDownButton$1,
  m as SelectViewport,
  n as SelectContent$1,
  o as SelectItemText,
  p as SelectValue$1,
  r as SelectIcon,
  s as SelectLabel$1,
  t as Select$1,
  u as SelectScrollUpButton$1,
} from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D5LUCTR_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.49_0.18_260/0.8)] hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background/80 shadow-sm backdrop-blur hover:bg-primary/15 hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-full px-3 text-xs",
        lg: "h-10 rounded-full px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
var Button = import_react.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      asChild ? Slot : "button",
      {
        className: cn(
          buttonVariants({
            variant,
            size,
            className,
          }),
        ),
        ref,
        ...props,
      },
    );
  },
);
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
    type,
    className: cn(
      "flex h-10 w-full rounded-xl border border-input bg-background/70 px-3 py-2 text-base shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      className,
    ),
    ref,
    ...props,
  });
});
Input.displayName = "Input";
var labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);
var Label = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
    ref,
    className: cn(labelVariants(), className),
    ...props,
  }),
);
Label.displayName = Root.displayName;
var Card = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref,
    className: cn(
      "rounded-2xl border border-border/70 bg-card/95 text-card-foreground shadow-[0_20px_60px_-20px_oklch(0.49_0.18_260/0.35)] backdrop-blur",
      className,
    ),
    ...props,
  }),
);
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props,
  }),
);
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props,
  }),
);
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props,
  }),
);
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref,
    className: cn("p-6 pt-0", className),
    ...props,
  }),
);
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props,
  }),
);
CardFooter.displayName = "CardFooter";
var Tabs = Root2$1;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
    ref,
    className: cn(
      "inline-flex h-11 items-center justify-center rounded-full bg-muted/80 p-1 text-muted-foreground shadow-inner",
      className,
    ),
    ...props,
  }),
);
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background cursor-pointer transition-all hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-primary/15 data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className,
    ),
    ...props,
  }),
);
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    ),
    ...props,
  }),
);
TabsContent.displayName = Content.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(
  ({ className, children, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
      ref,
      className: cn(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className,
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
          asChild: true,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
            className: "h-4 w-4 opacity-50",
          }),
        }),
      ],
    }),
);
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(
  ({ className, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className,
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, {
        className: "h-4 w-4",
      }),
    }),
);
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(
  ({ className, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className,
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
        className: "h-4 w-4",
      }),
    }),
);
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(
  ({ className, children, position = "popper", ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
        ref,
        className: cn(
          "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        ),
        position,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
            className: cn(
              "p-1",
              position === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            SelectScrollDownButton,
            {},
          ),
        ],
      }),
    }),
);
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props,
  }),
);
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(
  ({ className, children, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
      ref,
      className: cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-primary/15 focus:bg-primary/15 focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className:
            "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            SelectItemIndicator,
            {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
                className: "h-4 w-4",
              }),
            },
          ),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, {
          children,
        }),
      ],
    }),
);
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props,
  }),
);
SelectSeparator.displayName = SelectSeparator$1.displayName;
var Popover = Root2$2;
var PopoverTrigger = Trigger$1;
var PopoverContent = import_react.forwardRef(
  ({ className, align = "center", sideOffset = 4, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
        ref,
        align,
        sideOffset,
        className: cn(
          "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
          className,
        ),
        ...props,
      }),
    }),
);
PopoverContent.displayName = Content2$1.displayName;
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
    ref,
    className: cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
      className: cn("grid place-content-center text-current"),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
        className: "h-4 w-4",
      }),
    }),
  }),
);
Checkbox.displayName = Checkbox$1.displayName;
var Toaster$1 = ({ ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...props,
  });
};
var badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn(badgeVariants({ variant }), className),
    ...props,
  });
}
var AlertDialog = Root2;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(
  ({ className, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
      className: cn(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      ),
      ...props,
      ref,
    }),
);
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(
  ({ className, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
          ref,
          className: cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
            className,
          ),
          ...props,
        }),
      ],
    }),
);
AlertDialogContent.displayName = Content2.displayName;
var AlertDialogHeader = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    ),
    ...props,
  });
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    ),
    ...props,
  });
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props,
  }),
);
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(
  ({ className, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
      ref,
      className: cn("text-sm text-muted-foreground", className),
      ...props,
    }),
);
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(
  ({ className, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
      ref,
      className: cn(buttonVariants(), className),
      ...props,
    }),
);
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(
  ({ className, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
      ref,
      className: cn(
        buttonVariants({ variant: "outline" }),
        "mt-2 sm:mt-0",
        className,
      ),
      ...props,
    }),
);
AlertDialogCancel.displayName = Cancel.displayName;
var EVENT_NAME = "ZSINDAUG2026";
var TOWERS = ["A", "B", "C"];
var API_BASE = "http://zionsports.runasp.net";
var registrationListCache = /* @__PURE__ */ new Map();
var registrationListInFlight = /* @__PURE__ */ new Map();
function invalidateRegistrationListCache() {
  registrationListCache.clear();
  registrationListInFlight.clear();
}
async function apiFetch(path, options = {}) {
  const url = `${API_BASE.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  const headers = {
    "content-type": "application/json",
    ...(options.headers instanceof Headers
      ? Object.fromEntries(options.headers.entries())
      : (options.headers ?? {})),
  };
  try {
    const token = await firebaseAuth.currentUser?.getIdToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  } catch {}
  const res = await fetch(url, {
    ...options,
    headers,
    mode: "cors",
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `API request failed ${res.status} ${res.statusText}: ${text}`,
    );
  }
  if (!(res.headers.get("content-type") || "").includes("application/json"))
    return await res.text();
  return await res.json();
}
function normalizeRegistrationsResponse(response) {
  if (Array.isArray(response)) return response;
  if (!response || typeof response !== "object") return [];
  const data = response;
  if (Array.isArray(data.data)) return data.data;
  if (Array.isArray(data.items)) return data.items;
  if (Array.isArray(data.registrations)) return data.registrations;
  if ("registrationGuid" in data) return [data];
  const firstArray = Object.values(data).find(Array.isArray);
  if (Array.isArray(firstArray)) return firstArray;
  return [];
}
async function listRegistrations(email) {
  const cacheKey = email ?? "__all__";
  const cached = registrationListCache.get(cacheKey);
  if (cached) return cached;
  const inFlight = registrationListInFlight.get(cacheKey);
  if (inFlight) return inFlight;
  const request = (async () => {
    const normalized = normalizeRegistrationsResponse(
      email
        ? await apiFetch(`api/Registration/email/${encodeURIComponent(email)}`)
        : await apiFetch(`api/Registration`),
    );
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
async function createRegistration(data) {
  const payload = {
    ...data,
    eventName: EVENT_NAME,
  };
  const result = await apiFetch(`api/Registration`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  invalidateRegistrationListCache();
  return result;
}
async function updateRegistration(registrationGuid, data) {
  const payload = {
    ...data,
    eventName: EVENT_NAME,
  };
  const result = await apiFetch(
    `api/Registration/${encodeURIComponent(registrationGuid)}`,
    {
      method: "PUT",
      body: JSON.stringify(payload),
    },
  );
  invalidateRegistrationListCache();
  return result;
}
async function deleteRegistration(registrationGuid) {
  await apiFetch(`api/Registration/${encodeURIComponent(registrationGuid)}`, {
    method: "DELETE",
  });
  invalidateRegistrationListCache();
}
function getSportsForAge(age, gender) {
  if (age === "" || !Number.isFinite(Number(age))) return [];
  const a = Number(age);
  const sports = [];
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
var emptyParticipant = () => ({
  participantGuid: crypto.randomUUID(),
  participantName: "",
  age: "",
  gender: "",
  sportsParticipatingIn: [],
});
var emptyForm = () => ({
  mobileNumber: "",
  tower: "",
  flatNo: "",
  participants: [emptyParticipant()],
});
var normalizeTowerValue = (value) => {
  if (typeof value === "string") {
    const cleaned = value
      .trim()
      .toUpperCase()
      .replace(/^TOWER[\s-]*/, "");
    if (cleaned === "A" || cleaned === "B" || cleaned === "C") return cleaned;
  }
  if (typeof value === "number") {
    if (value === 1) return "A";
    if (value === 2) return "B";
    if (value === 3) return "C";
  }
  return "";
};
function Index() {
  const { user, loading, signInWithGoogle, logout } = useAuth();
  const [tab, setTab] = (0, import_react.useState)("list");
  const [editing, setEditing] = (0, import_react.useState)(null);
  const [signingIn, setSigningIn] = (0, import_react.useState)(false);
  const [hasRegistrations, setHasRegistrations] = (0, import_react.useState)(
    false,
  );
  const showRegisterTab = !hasRegistrations;
  const handleSignIn = async () => {
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
  if (loading)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "flex min-h-screen items-center justify-center bg-background",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
          richColors: true,
          position: "top-right",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
          className: "h-6 w-6 animate-spin text-muted-foreground",
        }),
      ],
    });
  if (!user)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className:
        "flex min-h-screen items-center justify-center bg-background px-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
          richColors: true,
          position: "top-right",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
          className: "w-full max-w-md",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
                  children: "Zion Sports Event Registration - Aug 2026",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-sm text-muted-foreground",
                  children:
                    "Sign in with Google to register participants from family and manage your registrations.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                onClick: handleSignIn,
                disabled: signingIn,
                className: "w-full",
                children: [
                  signingIn
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        LoaderCircle,
                        { className: "mr-2 h-4 w-4 animate-spin" },
                      )
                    : null,
                  "Sign in with Google",
                ],
              }),
            }),
          ],
        }),
      ],
    });
  const email = user.email ?? "";
  const profileImage = user.photoURL ?? "";
  const profileInitials = (user.displayName ?? email ?? "U")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "min-h-screen bg-background",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
        richColors: true,
        position: "top-right",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
        className: "border-b border-border/60 bg-card/80 backdrop-blur",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "max-w-2xl",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className:
                    "mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-primary",
                  children: "Bollineni Zion Sports Committee",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                  className:
                    "text-2xl font-semibold tracking-tight sm:text-2xl",
                  children: "Zion Sports Event Registration - Aug 2026",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  className: "mt-2 text-sm text-muted-foreground sm:text-base",
                  children: [
                    "All these events are planned to happen on any weekend of August 2026 [ Dates will be announced soon ].",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                    "Assistance : ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                      href: "tel:+919597971915",
                      children: [" ", "📞 Krishna Kumar"],
                    }),
                    " | ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                      href: "tel:+919003099645",
                      children: " 📞 Saravanan",
                    }),
                    " |",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                      href: "tel:+919003014921",
                      children: " 📞 Praveen",
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "flex flex-wrap items-center gap-3 rounded-2xl border border-border/70 bg-background/70 px-4 py-3 shadow-sm",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/40 ring-2 ring-primary/20",
                      children: profileImage
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                            src: profileImage,
                            alt: user.displayName ?? "Profile",
                            className: "h-full w-full object-cover",
                          })
                        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "text-sm font-semibold text-foreground",
                            children: profileInitials,
                          }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "text-left text-xs text-muted-foreground sm:text-right",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "font-semibold text-foreground",
                          children: user.displayName ?? "User",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          children: email,
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                  variant: "outline",
                  size: "sm",
                  onClick: () => logout(),
                  children: "Sign out",
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
        className: "mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
          value: tab,
          onValueChange: (v) => setTab(v),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
              className:
                "flex w-full flex-wrap justify-start rounded-full border border-border/70 bg-background/70 p-1 shadow-sm sm:w-auto",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
                  value: "list",
                  className: "rounded-full px-4",
                  children: "My Registrations",
                }),
                showRegisterTab
                  ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
                      value: "register",
                      className: "flex-1 rounded-full px-4 sm:flex-none",
                      children: editing
                        ? "Edit Registration"
                        : "New Registration",
                    })
                  : null,
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
              value: "list",
              className: "mt-6",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                RegistrationsList,
                {
                  email,
                  onEdit: (r) => {
                    setEditing(r);
                    setTab("register");
                  },
                  onNoRegistrations: () => {
                    setHasRegistrations(false);
                    setTab("register");
                  },
                  onRegistrationsChange: setHasRegistrations,
                },
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
              value: "register",
              className: "mt-6",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                RegistrationForm,
                {
                  email,
                  editing,
                  onDone: () => {
                    setEditing(null);
                    setHasRegistrations(true);
                    setTab("list");
                  },
                  onCancelEdit: () => {
                    setEditing(null);
                    setHasRegistrations(true);
                    setTab("list");
                  },
                },
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function RegistrationsList({
  email,
  onEdit,
  onNoRegistrations,
  onRegistrationsChange,
}) {
  const [items, setItems] = (0, import_react.useState)(null);
  const [deletingId, setDeletingId] = (0, import_react.useState)(null);
  const [confirmId, setConfirmId] = (0, import_react.useState)(null);
  const loadedEmailRef = (0, import_react.useRef)(null);
  const loadingEmailRef = (0, import_react.useRef)(null);
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
      onRegistrationsChange(normalized.length > 0);
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
      if (loadingEmailRef.current === email) loadingEmailRef.current = null;
    }
  };
  (0, import_react.useEffect)(() => {
    load();
  }, [email]);
  const handleDelete = async (registrationGuid) => {
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
  if (items === null)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "flex items-center justify-center py-20 text-muted-foreground",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
          className: "mr-2 h-5 w-5 animate-spin",
        }),
        "Loading registrations...",
      ],
    });
  if ((Array.isArray(items) ? items : []).length === 0)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
        className:
          "flex flex-col items-center justify-center py-16 text-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "text-muted-foreground",
            children: "No registrations yet.",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "mt-1 text-sm text-muted-foreground",
            children: "Head over to the New Registration tab to add one.",
          }),
        ],
      }),
    });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "space-y-4",
          children: items.map((r) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              Card,
              {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
                    className:
                      "flex flex-row items-start justify-between gap-4 space-y-0",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            CardTitle,
                            {
                              className: "text-lg",
                              children: [
                                "Tower ",
                                r.tower,
                                " · Flat ",
                                r.flatNo,
                              ],
                            },
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                            className: "mt-1 text-sm text-muted-foreground",
                            children: ["Mobile: ", r.mobileNumber],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                            variant: "outline",
                            size: "sm",
                            onClick: () => onEdit(r),
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                Pencil,
                                { className: "mr-1 h-4 w-4" },
                              ),
                              " Edit",
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                            variant: "destructive",
                            size: "sm",
                            onClick: () => setConfirmId(r.registrationGuid),
                            disabled: deletingId === r.registrationGuid,
                            children: [
                              deletingId === r.registrationGuid
                                ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    LoaderCircle,
                                    { className: "mr-1 h-4 w-4 animate-spin" },
                                  )
                                : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    Trash2,
                                    { className: "mr-1 h-4 w-4" },
                                  ),
                              "Delete",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "div",
                      {
                        className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                        children: r.participants.map((p) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            "div",
                            {
                              className:
                                "rounded-lg border bg-muted/30 p-3 text-sm",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "div",
                                  {
                                    className: "font-medium",
                                    children: p.participantName,
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "div",
                                  {
                                    className: "mt-1 text-muted-foreground",
                                    children: [
                                      "Age ",
                                      p.age,
                                      " · ",
                                      p.gender || "Not specified",
                                    ],
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "div",
                                  {
                                    className: "mt-2 flex flex-wrap gap-1",
                                    children: p.sportsParticipatingIn.map((s) =>
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)(
                                        Badge,
                                        {
                                          variant: "secondary",
                                          children: s,
                                        },
                                        `${p.participantGuid}-${s}`,
                                      ),
                                    ),
                                  },
                                ),
                              ],
                            },
                            p.participantGuid,
                          ),
                        ),
                      },
                    ),
                  }),
                ],
              },
              r.registrationGuid,
            ),
          ),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
          open: confirmId !== null,
          onOpenChange: (o) => !o && setConfirmId(null),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            AlertDialogContent,
            {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  AlertDialogHeader,
                  {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        AlertDialogTitle,
                        { children: "Delete this registration?" },
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        AlertDialogDescription,
                        { children: "This action cannot be undone." },
                      ),
                    ],
                  },
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  AlertDialogFooter,
                  {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        AlertDialogCancel,
                        { children: "Cancel" },
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        AlertDialogAction,
                        {
                          onClick: () => confirmId && handleDelete(confirmId),
                          children: "Delete",
                        },
                      ),
                    ],
                  },
                ),
              ],
            },
          ),
        }),
      ],
    },
  );
}
function SportsMultiSelect({ value, options, onChange, disabled }) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const toggle = (opt) => {
    onChange(
      value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt],
    );
  };
  const label =
    value.length === 0
      ? options.length === 0
        ? "Enter age first"
        : "Select sports"
      : `${value.length} selected`;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
    open,
    onOpenChange: setOpen,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
        asChild: true,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
          type: "button",
          variant: "outline",
          role: "combobox",
          disabled: disabled || options.length === 0,
          className: "w-full justify-between font-normal",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: value.length === 0 ? "text-muted-foreground" : "",
              children: label,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, {
              className: "ml-2 h-4 w-4 opacity-50",
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
        className: "w-[--radix-popover-trigger-width] p-1",
        align: "start",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "max-h-64 overflow-auto",
          children: options.map((opt) => {
            const checked = value.includes(opt);
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "div",
              {
                role: "button",
                tabIndex: 0,
                onClick: () => toggle(opt),
                onKeyDown: (event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggle(opt);
                  }
                },
                className:
                  "flex w-full items-center gap-2 rounded-sm px-2 py-2 text-left text-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
                    checked,
                    className: "pointer-events-none",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "flex-1",
                    children: opt,
                  }),
                  checked &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
                      className: "h-4 w-4 opacity-70",
                    }),
                ],
              },
              opt,
            );
          }),
        }),
      }),
    ],
  });
}
function RegistrationForm({ email, editing, onDone, onCancelEdit }) {
  const [form, setForm] = (0, import_react.useState)(emptyForm());
  const [saving, setSaving] = (0, import_react.useState)(false);
  const [errors, setErrors] = (0, import_react.useState)({});
  const isSubmittingRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    if (editing) {
      const returnedParticipants = Array.isArray(editing.participants)
        ? editing.participants
        : Array.isArray(editing.participation)
          ? editing.participation
          : [];
      const towerValue = normalizeTowerValue(
        editing.tower ??
          editing.towerName ??
          editing.towerCode ??
          editing.towerId ??
          "",
      );
      setForm({
        mobileNumber: editing.mobileNumber ?? "",
        tower: towerValue,
        flatNo:
          editing.flatNo === void 0 || editing.flatNo === null
            ? ""
            : String(editing.flatNo),
        participants:
          returnedParticipants.length > 0
            ? returnedParticipants.map((p) => ({
                participantGuid: p.participantGuid ?? crypto.randomUUID(),
                participantName: p.participantName ?? "",
                age: p.age === void 0 || p.age === null ? "" : p.age,
                gender: p.gender ?? "",
                sportsParticipatingIn: Array.isArray(p.sportsParticipatingIn)
                  ? p.sportsParticipatingIn
                  : [],
              }))
            : [emptyParticipant()],
      });
    } else setForm(emptyForm());
    setErrors({});
  }, [editing]);
  const updateField = (key, value) =>
    setForm((f) => ({
      ...f,
      [key]: value,
    }));
  const updateParticipant = (id, patch) =>
    setForm((f) => ({
      ...f,
      participants: f.participants.map((p) => {
        if (p.participantGuid !== id) return p;
        const next = {
          ...p,
          ...patch,
        };
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
      f.participants.length >= 5
        ? f
        : {
            ...f,
            participants: [...f.participants, emptyParticipant()],
          },
    );
  const removeParticipant = (id) =>
    setForm((f) => ({
      ...f,
      participants:
        f.participants.length === 1
          ? f.participants
          : f.participants.filter((p) => p.participantGuid !== id),
    }));
  const validate = () => {
    const e = {};
    if (!form.mobileNumber.trim()) e.mobileNumber = "Field is mandatory";
    else if (!/^\d{10}$/.test(form.mobileNumber.trim()))
      e.mobileNumber = "Enter a valid 10-digit mobile number";
    if (!form.tower) e.tower = "Field is mandatory";
    if (!form.flatNo.trim()) e.flatNo = "Field is mandatory";
    else if (!/^\d+$/.test(form.flatNo.trim()))
      e.flatNo = "Enter a valid flat number";
    form.participants.forEach((p, i) => {
      if (!p.participantName.trim()) e[`p_${i}_name`] = "Field is mandatory";
      if (p.age === "" || p.age === null || p.age === void 0)
        e[`p_${i}_age`] = "Field is mandatory";
      else if (Number(p.age) <= 0) e[`p_${i}_age`] = "Enter valid age";
      if (!p.gender) e[`p_${i}_gender`] = "Field is mandatory";
      if (!p.sportsParticipatingIn || p.sportsParticipatingIn.length === 0)
        e[`p_${i}_sport`] = "Field is mandatory";
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (isSubmittingRef.current) return;
    if (!validate()) {
      toast.error("Please fix the errors in the form");
      return;
    }
    isSubmittingRef.current = true;
    setSaving(true);
    try {
      const payload = {
        email,
        mobileNumber: form.mobileNumber.trim(),
        tower: form.tower,
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
          icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
            className: "h-4 w-4",
          }),
        });
      } else {
        await createRegistration(payload);
        toast.success("Registration submitted successfully!", {
          icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
            className: "h-4 w-4",
          }),
        });
      }
      onDone();
    } catch (e) {
      console.error(e);
      toast.error(
        String(e?.message ?? "Something went wrong. Please try again."),
      );
    } finally {
      setSaving(false);
      isSubmittingRef.current = false;
    }
  };
  const canAdd = form.participants.length < 5;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
    onSubmit: handleSubmit,
    className: "space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
              children: "Contact & Residence",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
            className: "grid gap-4 md:grid-cols-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "space-y-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
                    htmlFor: "mobile",
                    className: "flex items-center gap-1",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "Mobile Number",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-destructive",
                        children: "*",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                    id: "mobile",
                    inputMode: "tel",
                    maxLength: 10,
                    autoComplete: "new-password",
                    autoCorrect: "off",
                    spellCheck: false,
                    placeholder: "10-digit number",
                    value: form.mobileNumber,
                    onChange: (e) =>
                      updateField(
                        "mobileNumber",
                        e.target.value.replace(/\D/g, ""),
                      ),
                    disabled: saving,
                  }),
                  errors.mobileNumber &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-xs text-destructive",
                      children: errors.mobileNumber,
                    }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "space-y-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
                    htmlFor: "tower",
                    className: "flex items-center gap-1",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "Tower Name",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-destructive",
                        children: "*",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    Select,
                    {
                      value: form.tower || void 0,
                      onValueChange: (v) => updateField("tower", v),
                      disabled: saving,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          SelectTrigger,
                          {
                            id: "tower",
                            children: /* @__PURE__ */ (0,
                            import_jsx_runtime.jsx)(SelectValue, {
                              placeholder: "Select tower",
                            }),
                          },
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          SelectContent,
                          {
                            children: TOWERS.map((t) =>
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                SelectItem,
                                {
                                  value: t,
                                  children: ["Tower ", t],
                                },
                                t,
                              ),
                            ),
                          },
                        ),
                      ],
                    },
                    form.tower || "empty",
                  ),
                  errors.tower &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-xs text-destructive",
                      children: errors.tower,
                    }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "space-y-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
                    htmlFor: "flat",
                    className: "flex items-center gap-1",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "Flat Number",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-destructive",
                        children: "*",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                    id: "flat",
                    inputMode: "numeric",
                    autoComplete: "new-password",
                    autoCorrect: "off",
                    spellCheck: false,
                    placeholder: "e.g. 1204",
                    value: form.flatNo,
                    onChange: (e) =>
                      updateField("flatNo", e.target.value.replace(/\D/g, "")),
                    disabled: saving,
                  }),
                  errors.flatNo &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-xs text-destructive",
                      children: errors.flatNo,
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background/70 px-4 py-3 shadow-sm",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                className: "text-lg font-semibold",
                children: "Participants",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "text-xs text-muted-foreground",
                children: ["Up to ", 5, " participants per family."],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
            type: "button",
            variant: "outline",
            onClick: addParticipant,
            disabled: saving || !canAdd,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
                className: "mr-1 h-4 w-4",
              }),
              " Add Participant",
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "grid gap-4",
        children: form.participants.map((p, i) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            ParticipantCard,
            {
              index: i,
              participant: p,
              canRemove: form.participants.length > 1,
              errors,
              saving,
              onChange: (patch) => updateParticipant(p.participantGuid, patch),
              onRemove: () => removeParticipant(p.participantGuid),
            },
            p.participantGuid,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex flex-wrap items-center justify-end gap-2",
        children: [
          editing &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              type: "button",
              variant: "outline",
              onClick: onCancelEdit,
              disabled: saving,
              children: "Cancel Edit",
            }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            type: "submit",
            disabled: saving,
            className: "min-w-40",
            children: saving
              ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  import_jsx_runtime.Fragment,
                  {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        LoaderCircle,
                        { className: "mr-2 h-4 w-4 animate-spin" },
                      ),
                      "Saving...",
                    ],
                  },
                )
              : editing
                ? "Update Registration"
                : "Submit Registration",
          }),
        ],
      }),
    ],
  });
}
function ParticipantCard({
  index,
  participant,
  canRemove,
  errors,
  saving,
  onChange,
  onRemove,
}) {
  const sportOptions = (0, import_react.useMemo)(
    () => getSportsForAge(participant.age, participant.gender),
    [participant.age, participant.gender],
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
        className: "flex flex-row items-center justify-between space-y-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
            className: "text-base",
            children: ["Participant ", index + 1],
          }),
          canRemove &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: onRemove,
              disabled: saving,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                className: "h-4 w-4",
              }),
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
                className: "flex items-center gap-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: "Name",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-destructive",
                    children: "*",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                placeholder: "Full name",
                autoComplete: "new-password",
                autoCorrect: "off",
                spellCheck: false,
                value: participant.participantName,
                onChange: (e) => onChange({ participantName: e.target.value }),
                disabled: saving,
              }),
              errors[`p_${index}_name`] &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-xs text-destructive",
                  children: errors[`p_${index}_name`],
                }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
                className: "flex items-center gap-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: "Age",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-destructive",
                    children: "*",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                type: "number",
                min: 1,
                max: 120,
                autoComplete: "new-password",
                autoCorrect: "off",
                spellCheck: false,
                value: participant.age,
                onChange: (e) =>
                  onChange({
                    age: e.target.value === "" ? "" : Number(e.target.value),
                  }),
                disabled: saving,
              }),
              errors[`p_${index}_age`] &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-xs text-destructive",
                  children: errors[`p_${index}_age`],
                }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
                className: "flex items-center gap-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: "Gender",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-destructive",
                    children: "*",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
                value: participant.gender || void 0,
                onValueChange: (v) => onChange({ gender: v }),
                disabled: saving,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      SelectValue,
                      { placeholder: "Select" },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                        value: "Male",
                        children: "Male",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                        value: "Female",
                        children: "Female",
                      }),
                    ],
                  }),
                ],
              }),
              errors[`p_${index}_gender`] &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-xs text-destructive",
                  children: errors[`p_${index}_gender`],
                }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
                className: "flex items-center gap-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: "Sports",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-destructive",
                    children: "*",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SportsMultiSelect, {
                value: participant.sportsParticipatingIn,
                options: sportOptions,
                onChange: (next) => onChange({ sportsParticipatingIn: next }),
                disabled: saving,
              }),
              participant.sportsParticipatingIn.length > 0 &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "flex flex-wrap gap-1 pt-1",
                  children: participant.sportsParticipatingIn.map((s) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      Badge,
                      {
                        variant: "secondary",
                        className: "gap-1",
                        children: [
                          s,
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "button",
                            {
                              type: "button",
                              onClick: () =>
                                onChange({
                                  sportsParticipatingIn:
                                    participant.sportsParticipatingIn.filter(
                                      (x) => x !== s,
                                    ),
                                }),
                              className: "ml-1 opacity-70 hover:opacity-100",
                              "aria-label": `Remove ${s}`,
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)(X, {
                                className: "h-3 w-3",
                              }),
                            },
                          ),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
              errors[`p_${index}_sport`] &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-xs text-destructive",
                  children: errors[`p_${index}_sport`],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
//#endregion
export { Index as component };
