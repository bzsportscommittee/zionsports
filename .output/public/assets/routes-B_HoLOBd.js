import { a as e, i as t, n, o as r, r as i, t as a } from "./index-BH-XB7VZ.js";
var o = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  s = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  c = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  l = (e) => {
    let t = c(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  u = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  d = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  f = r(e()),
  p = (0, f.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: s,
        ...c
      },
      l,
    ) =>
      (0, f.createElement)(
        `svg`,
        {
          ref: l,
          ...u,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: o(`lucide`, i),
          ...(!a && !d(c) && { "aria-hidden": `true` }),
          ...c,
        },
        [
          ...s.map(([e, t]) => (0, f.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      ),
  ),
  m = (e, t) => {
    let n = (0, f.forwardRef)(({ className: n, ...r }, i) =>
      (0, f.createElement)(p, {
        ref: i,
        iconNode: t,
        className: o(`lucide-${s(l(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = l(e)), n);
  },
  h = m(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  g = m(`chevron-down`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]),
  _ = m(`chevron-up`, [[`path`, { d: `m18 15-6-6-6 6`, key: `153udz` }]]),
  v = m(`chevrons-up-down`, [
    [`path`, { d: `m7 15 5 5 5-5`, key: `1hf1tw` }],
    [`path`, { d: `m7 9 5-5 5 5`, key: `sgt6xg` }],
  ]),
  y = m(`circle-check`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  b = m(`loader-circle`, [
    [`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }],
  ]),
  x = m(`pencil`, [
    [
      `path`,
      {
        d: `M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,
        key: `1a8usu`,
      },
    ],
    [`path`, { d: `m15 5 4 4`, key: `1mk7zo` }],
  ]),
  S = m(`plus`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
  ]),
  C = m(`trash-2`, [
    [`path`, { d: `M10 11v6`, key: `nco0om` }],
    [`path`, { d: `M14 11v6`, key: `outv1u` }],
    [`path`, { d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`, key: `miytrc` }],
    [`path`, { d: `M3 6h18`, key: `d0wm0j` }],
    [`path`, { d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`, key: `e791ji` }],
  ]),
  w = m(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  T = r(t(), 1);
function E(e) {
  if (!e || typeof document > `u`) return;
  let t = document.head || document.getElementsByTagName(`head`)[0],
    n = document.createElement(`style`);
  ((n.type = `text/css`),
    t.appendChild(n),
    n.styleSheet
      ? (n.styleSheet.cssText = e)
      : n.appendChild(document.createTextNode(e)));
}
var D = (e) => {
    switch (e) {
      case `success`:
        return A;
      case `info`:
        return M;
      case `warning`:
        return j;
      case `error`:
        return N;
      default:
        return null;
    }
  },
  O = Array(12).fill(0),
  k = ({ visible: e, className: t }) =>
    f.createElement(
      `div`,
      {
        className: [`sonner-loading-wrapper`, t].filter(Boolean).join(` `),
        "data-visible": e,
      },
      f.createElement(
        `div`,
        { className: `sonner-spinner` },
        O.map((e, t) =>
          f.createElement(`div`, {
            className: `sonner-loading-bar`,
            key: `spinner-bar-${t}`,
          }),
        ),
      ),
    ),
  A = f.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    f.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
      clipRule: `evenodd`,
    }),
  ),
  j = f.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    f.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,
      clipRule: `evenodd`,
    }),
  ),
  M = f.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    f.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,
      clipRule: `evenodd`,
    }),
  ),
  N = f.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    f.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,
      clipRule: `evenodd`,
    }),
  ),
  P = f.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    f.createElement(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }),
    f.createElement(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` }),
  ),
  F = () => {
    let [e, t] = f.useState(document.hidden);
    return (
      f.useEffect(() => {
        let e = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener(`visibilitychange`, e),
          () => window.removeEventListener(`visibilitychange`, e)
        );
      }, []),
      e
    );
  },
  I = 1,
  L = new (class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          let { message: t, ...n } = e,
            r = typeof e?.id == `number` || e.id?.length > 0 ? e.id : I++,
            i = this.toasts.find((e) => e.id === r),
            a = e.dismissible === void 0 || e.dismissible;
          return (
            this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
            i
              ? (this.toasts = this.toasts.map((n) =>
                  n.id === r
                    ? (this.publish({ ...n, ...e, id: r, title: t }),
                      { ...n, ...e, id: r, dismissible: a, title: t })
                    : n,
                ))
              : this.addToast({ title: t, ...n, dismissible: a, id: r }),
            r
          );
        }),
        (this.dismiss = (e) => (
          e
            ? (this.dismissedToasts.add(e),
              requestAnimationFrame(() =>
                this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
              ))
            : this.toasts.forEach((e) => {
                this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
              }),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: `error` })),
        (this.success = (e, t) =>
          this.create({ ...t, type: `success`, message: e })),
        (this.info = (e, t) => this.create({ ...t, type: `info`, message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: `warning`, message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: `loading`, message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: `loading`,
              message: t.loading,
              description:
                typeof t.description == `function` ? void 0 : t.description,
            }));
          let r = Promise.resolve(e instanceof Function ? e() : e),
            i = n !== void 0,
            a,
            o = r
              .then(async (e) => {
                if (((a = [`resolve`, e]), f.isValidElement(e)))
                  ((i = !1),
                    this.create({ id: n, type: `default`, message: e }));
                else if (ee(e) && !e.ok) {
                  i = !1;
                  let r =
                      typeof t.error == `function`
                        ? await t.error(`HTTP error! status: ${e.status}`)
                        : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(`HTTP error! status: ${e.status}`)
                        : t.description,
                    o =
                      typeof r == `object` && !f.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                } else if (e instanceof Error) {
                  i = !1;
                  let r =
                      typeof t.error == `function` ? await t.error(e) : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description,
                    o =
                      typeof r == `object` && !f.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                } else if (t.success !== void 0) {
                  i = !1;
                  let r =
                      typeof t.success == `function`
                        ? await t.success(e)
                        : t.success,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description,
                    o =
                      typeof r == `object` && !f.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `success`, description: a, ...o });
                }
              })
              .catch(async (e) => {
                if (((a = [`reject`, e]), t.error !== void 0)) {
                  i = !1;
                  let r =
                      typeof t.error == `function` ? await t.error(e) : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description,
                    o =
                      typeof r == `object` && !f.isValidElement(r)
                        ? r
                        : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                }
              })
              .finally(() => {
                (i && (this.dismiss(n), (n = void 0)),
                  t.finally == null || t.finally.call(t));
              }),
            s = () =>
              new Promise((e, t) =>
                o.then(() => (a[0] === `reject` ? t(a[1]) : e(a[1]))).catch(t),
              );
          return typeof n != `string` && typeof n != `number`
            ? { unwrap: s }
            : Object.assign(n, { unwrap: s });
        }),
        (this.custom = (e, t) => {
          let n = t?.id || I++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  })(),
  R = (e, t) => {
    let n = t?.id || I++;
    return (L.addToast({ title: e, ...t, id: n }), n);
  },
  ee = (e) =>
    e &&
    typeof e == `object` &&
    `ok` in e &&
    typeof e.ok == `boolean` &&
    `status` in e &&
    typeof e.status == `number`,
  z = Object.assign(
    R,
    {
      success: L.success,
      info: L.info,
      warning: L.warning,
      error: L.error,
      custom: L.custom,
      message: L.message,
      promise: L.promise,
      dismiss: L.dismiss,
      loading: L.loading,
    },
    { getHistory: () => L.toasts, getToasts: () => L.getActiveToasts() },
  );
E(
  `[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}`,
);
function B(e) {
  return e.label !== void 0;
}
var V = 3,
  te = `24px`,
  ne = `16px`,
  H = 4e3,
  re = 356,
  ie = 14,
  ae = 45,
  oe = 200;
function U(...e) {
  return e.filter(Boolean).join(` `);
}
function se(e) {
  let [t, n] = e.split(`-`),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var ce = (e) => {
  let {
      invert: t,
      toast: n,
      unstyled: r,
      interacting: i,
      setHeights: a,
      visibleToasts: o,
      heights: s,
      index: c,
      toasts: l,
      expanded: u,
      removeToast: d,
      defaultRichColors: p,
      closeButton: m,
      style: h,
      cancelButtonStyle: g,
      actionButtonStyle: _,
      className: v = ``,
      descriptionClassName: y = ``,
      duration: b,
      position: x,
      gap: S,
      expandByDefault: C,
      classNames: w,
      icons: T,
      closeButtonAriaLabel: E = `Close toast`,
    } = e,
    [O, A] = f.useState(null),
    [j, M] = f.useState(null),
    [N, I] = f.useState(!1),
    [L, R] = f.useState(!1),
    [ee, z] = f.useState(!1),
    [V, te] = f.useState(!1),
    [ne, re] = f.useState(!1),
    [ie, ce] = f.useState(0),
    [le, ue] = f.useState(0),
    de = f.useRef(n.duration || b || H),
    fe = f.useRef(null),
    pe = f.useRef(null),
    W = c === 0,
    me = c + 1 <= o,
    he = n.type,
    ge = n.dismissible !== !1,
    _e = n.className || ``,
    ve = n.descriptionClassName || ``,
    ye = f.useMemo(
      () => s.findIndex((e) => e.toastId === n.id) || 0,
      [s, n.id],
    ),
    be = f.useMemo(() => n.closeButton ?? m, [n.closeButton, m]),
    xe = f.useMemo(() => n.duration || b || H, [n.duration, b]),
    Se = f.useRef(0),
    Ce = f.useRef(0),
    we = f.useRef(0),
    Te = f.useRef(null),
    [Ee, De] = x.split(`-`),
    Oe = f.useMemo(
      () => s.reduce((e, t, n) => (n >= ye ? e : e + t.height), 0),
      [s, ye],
    ),
    ke = F(),
    Ae = n.invert || t,
    je = he === `loading`;
  ((Ce.current = f.useMemo(() => ye * S + Oe, [ye, Oe])),
    f.useEffect(() => {
      de.current = xe;
    }, [xe]),
    f.useEffect(() => {
      I(!0);
    }, []),
    f.useEffect(() => {
      let e = pe.current;
      if (e) {
        let t = e.getBoundingClientRect().height;
        return (
          ue(t),
          a((e) => [{ toastId: n.id, height: t, position: n.position }, ...e]),
          () => a((e) => e.filter((e) => e.toastId !== n.id))
        );
      }
    }, [a, n.id]),
    f.useLayoutEffect(() => {
      if (!N) return;
      let e = pe.current,
        t = e.style.height;
      e.style.height = `auto`;
      let r = e.getBoundingClientRect().height;
      ((e.style.height = t),
        ue(r),
        a((e) =>
          e.find((e) => e.toastId === n.id)
            ? e.map((e) => (e.toastId === n.id ? { ...e, height: r } : e))
            : [{ toastId: n.id, height: r, position: n.position }, ...e],
        ));
    }, [N, n.title, n.description, a, n.id, n.jsx, n.action, n.cancel]));
  let Me = f.useCallback(() => {
    (R(!0),
      ce(Ce.current),
      a((e) => e.filter((e) => e.toastId !== n.id)),
      setTimeout(() => {
        d(n);
      }, oe));
  }, [n, d, a, Ce]);
  (f.useEffect(() => {
    if (
      (n.promise && he === `loading`) ||
      n.duration === 1 / 0 ||
      n.type === `loading`
    )
      return;
    let e;
    return (
      u || i || ke
        ? (() => {
            if (we.current < Se.current) {
              let e = new Date().getTime() - Se.current;
              de.current -= e;
            }
            we.current = new Date().getTime();
          })()
        : de.current !== 1 / 0 &&
          ((Se.current = new Date().getTime()),
          (e = setTimeout(() => {
            (n.onAutoClose == null || n.onAutoClose.call(n, n), Me());
          }, de.current))),
      () => clearTimeout(e)
    );
  }, [u, i, n, he, ke, Me]),
    f.useEffect(() => {
      n.delete && (Me(), n.onDismiss == null || n.onDismiss.call(n, n));
    }, [Me, n.delete]));
  function Ne() {
    return T?.loading
      ? f.createElement(
          `div`,
          {
            className: U(w?.loader, n?.classNames?.loader, `sonner-loader`),
            "data-visible": he === `loading`,
          },
          T.loading,
        )
      : f.createElement(k, {
          className: U(w?.loader, n?.classNames?.loader),
          visible: he === `loading`,
        });
  }
  let Pe = n.icon || T?.[he] || D(he);
  return f.createElement(
    `li`,
    {
      tabIndex: 0,
      ref: pe,
      className: U(
        v,
        _e,
        w?.toast,
        n?.classNames?.toast,
        w?.default,
        w?.[he],
        n?.classNames?.[he],
      ),
      "data-sonner-toast": ``,
      "data-rich-colors": n.richColors ?? p,
      "data-styled": !(n.jsx || n.unstyled || r),
      "data-mounted": N,
      "data-promise": !!n.promise,
      "data-swiped": ne,
      "data-removed": L,
      "data-visible": me,
      "data-y-position": Ee,
      "data-x-position": De,
      "data-index": c,
      "data-front": W,
      "data-swiping": ee,
      "data-dismissible": ge,
      "data-type": he,
      "data-invert": Ae,
      "data-swipe-out": V,
      "data-swipe-direction": j,
      "data-expanded": !!(u || (C && N)),
      "data-testid": n.testId,
      style: {
        "--index": c,
        "--toasts-before": c,
        "--z-index": l.length - c,
        "--offset": `${L ? ie : Ce.current}px`,
        "--initial-height": C ? `auto` : `${le}px`,
        ...h,
        ...n.style,
      },
      onDragEnd: () => {
        (z(!1), A(null), (Te.current = null));
      },
      onPointerDown: (e) => {
        e.button !== 2 &&
          (je ||
            !ge ||
            ((fe.current = new Date()),
            ce(Ce.current),
            e.target.setPointerCapture(e.pointerId),
            e.target.tagName !== `BUTTON` &&
              (z(!0), (Te.current = { x: e.clientX, y: e.clientY }))));
      },
      onPointerUp: () => {
        if (V || !ge) return;
        Te.current = null;
        let e = Number(
            pe.current?.style
              .getPropertyValue(`--swipe-amount-x`)
              .replace(`px`, ``) || 0,
          ),
          t = Number(
            pe.current?.style
              .getPropertyValue(`--swipe-amount-y`)
              .replace(`px`, ``) || 0,
          ),
          r = new Date().getTime() - fe.current?.getTime(),
          i = O === `x` ? e : t,
          a = Math.abs(i) / r;
        if (Math.abs(i) >= ae || a > 0.11) {
          (ce(Ce.current),
            n.onDismiss == null || n.onDismiss.call(n, n),
            M(O === `x` ? (e > 0 ? `right` : `left`) : t > 0 ? `down` : `up`),
            Me(),
            te(!0));
          return;
        } else {
          var o, s;
          ((o = pe.current) == null ||
            o.style.setProperty(`--swipe-amount-x`, `0px`),
            (s = pe.current) == null ||
              s.style.setProperty(`--swipe-amount-y`, `0px`));
        }
        (re(!1), z(!1), A(null));
      },
      onPointerMove: (t) => {
        var n, r;
        if (!Te.current || !ge || window.getSelection()?.toString().length > 0)
          return;
        let i = t.clientY - Te.current.y,
          a = t.clientX - Te.current.x,
          o = e.swipeDirections ?? se(x);
        !O &&
          (Math.abs(a) > 1 || Math.abs(i) > 1) &&
          A(Math.abs(a) > Math.abs(i) ? `x` : `y`);
        let s = { x: 0, y: 0 },
          c = (e) => 1 / (1.5 + Math.abs(e) / 20);
        if (O === `y`) {
          if (o.includes(`top`) || o.includes(`bottom`))
            if ((o.includes(`top`) && i < 0) || (o.includes(`bottom`) && i > 0))
              s.y = i;
            else {
              let e = i * c(i);
              s.y = Math.abs(e) < Math.abs(i) ? e : i;
            }
        } else if (O === `x` && (o.includes(`left`) || o.includes(`right`)))
          if ((o.includes(`left`) && a < 0) || (o.includes(`right`) && a > 0))
            s.x = a;
          else {
            let e = a * c(a);
            s.x = Math.abs(e) < Math.abs(a) ? e : a;
          }
        ((Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && re(!0),
          (n = pe.current) == null ||
            n.style.setProperty(`--swipe-amount-x`, `${s.x}px`),
          (r = pe.current) == null ||
            r.style.setProperty(`--swipe-amount-y`, `${s.y}px`));
      },
    },
    be && !n.jsx && he !== `loading`
      ? f.createElement(
          `button`,
          {
            "aria-label": E,
            "data-disabled": je,
            "data-close-button": !0,
            onClick:
              je || !ge
                ? () => {}
                : () => {
                    (Me(), n.onDismiss == null || n.onDismiss.call(n, n));
                  },
            className: U(w?.closeButton, n?.classNames?.closeButton),
          },
          T?.close ?? P,
        )
      : null,
    (he || n.icon || n.promise) &&
      n.icon !== null &&
      (T?.[he] !== null || n.icon)
      ? f.createElement(
          `div`,
          { "data-icon": ``, className: U(w?.icon, n?.classNames?.icon) },
          n.promise || (n.type === `loading` && !n.icon)
            ? n.icon || Ne()
            : null,
          n.type === `loading` ? null : Pe,
        )
      : null,
    f.createElement(
      `div`,
      { "data-content": ``, className: U(w?.content, n?.classNames?.content) },
      f.createElement(
        `div`,
        { "data-title": ``, className: U(w?.title, n?.classNames?.title) },
        n.jsx ? n.jsx : typeof n.title == `function` ? n.title() : n.title,
      ),
      n.description
        ? f.createElement(
            `div`,
            {
              "data-description": ``,
              className: U(y, ve, w?.description, n?.classNames?.description),
            },
            typeof n.description == `function`
              ? n.description()
              : n.description,
          )
        : null,
    ),
    f.isValidElement(n.cancel)
      ? n.cancel
      : n.cancel && B(n.cancel)
        ? f.createElement(
            `button`,
            {
              "data-button": !0,
              "data-cancel": !0,
              style: n.cancelButtonStyle || g,
              onClick: (e) => {
                B(n.cancel) &&
                  ge &&
                  (n.cancel.onClick == null ||
                    n.cancel.onClick.call(n.cancel, e),
                  Me());
              },
              className: U(w?.cancelButton, n?.classNames?.cancelButton),
            },
            n.cancel.label,
          )
        : null,
    f.isValidElement(n.action)
      ? n.action
      : n.action && B(n.action)
        ? f.createElement(
            `button`,
            {
              "data-button": !0,
              "data-action": !0,
              style: n.actionButtonStyle || _,
              onClick: (e) => {
                B(n.action) &&
                  (n.action.onClick == null ||
                    n.action.onClick.call(n.action, e),
                  !e.defaultPrevented && Me());
              },
              className: U(w?.actionButton, n?.classNames?.actionButton),
            },
            n.action.label,
          )
        : null,
  );
};
function le() {
  if (typeof window > `u` || typeof document > `u`) return `ltr`;
  let e = document.documentElement.getAttribute(`dir`);
  return e === `auto` || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function ue(e, t) {
  let n = {};
  return (
    [e, t].forEach((e, t) => {
      let r = t === 1,
        i = r ? `--mobile-offset` : `--offset`,
        a = r ? ne : te;
      function o(e) {
        [`top`, `right`, `bottom`, `left`].forEach((t) => {
          n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e;
        });
      }
      typeof e == `number` || typeof e == `string`
        ? o(e)
        : typeof e == `object`
          ? [`top`, `right`, `bottom`, `left`].forEach((t) => {
              e[t] === void 0
                ? (n[`${i}-${t}`] = a)
                : (n[`${i}-${t}`] =
                    typeof e[t] == `number` ? `${e[t]}px` : e[t]);
            })
          : o(a);
    }),
    n
  );
}
var de = f.forwardRef(function (e, t) {
  let {
      id: n,
      invert: r,
      position: i = `bottom-right`,
      hotkey: a = [`altKey`, `KeyT`],
      expand: o,
      closeButton: s,
      className: c,
      offset: l,
      mobileOffset: u,
      theme: d = `light`,
      richColors: p,
      duration: m,
      style: h,
      visibleToasts: g = V,
      toastOptions: _,
      dir: v = le(),
      gap: y = ie,
      icons: b,
      containerAriaLabel: x = `Notifications`,
    } = e,
    [S, C] = f.useState([]),
    w = f.useMemo(
      () =>
        n ? S.filter((e) => e.toasterId === n) : S.filter((e) => !e.toasterId),
      [S, n],
    ),
    E = f.useMemo(
      () =>
        Array.from(
          new Set(
            [i].concat(w.filter((e) => e.position).map((e) => e.position)),
          ),
        ),
      [w, i],
    ),
    [D, O] = f.useState([]),
    [k, A] = f.useState(!1),
    [j, M] = f.useState(!1),
    [N, P] = f.useState(
      d === `system`
        ? typeof window < `u` &&
          window.matchMedia &&
          window.matchMedia(`(prefers-color-scheme: dark)`).matches
          ? `dark`
          : `light`
        : d,
    ),
    F = f.useRef(null),
    I = a.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
    R = f.useRef(null),
    ee = f.useRef(!1),
    z = f.useCallback((e) => {
      C(
        (t) => (
          t.find((t) => t.id === e.id)?.delete || L.dismiss(e.id),
          t.filter(({ id: t }) => t !== e.id)
        ),
      );
    }, []);
  return (
    f.useEffect(
      () =>
        L.subscribe((e) => {
          if (e.dismiss) {
            requestAnimationFrame(() => {
              C((t) =>
                t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)),
              );
            });
            return;
          }
          setTimeout(() => {
            T.flushSync(() => {
              C((t) => {
                let n = t.findIndex((t) => t.id === e.id);
                return n === -1
                  ? [e, ...t]
                  : [...t.slice(0, n), { ...t[n], ...e }, ...t.slice(n + 1)];
              });
            });
          });
        }),
      [S],
    ),
    f.useEffect(() => {
      if (d !== `system`) {
        P(d);
        return;
      }
      if (
        (d === `system` &&
          (window.matchMedia &&
          window.matchMedia(`(prefers-color-scheme: dark)`).matches
            ? P(`dark`)
            : P(`light`)),
        typeof window > `u`)
      )
        return;
      let e = window.matchMedia(`(prefers-color-scheme: dark)`);
      try {
        e.addEventListener(`change`, ({ matches: e }) => {
          P(e ? `dark` : `light`);
        });
      } catch {
        e.addListener(({ matches: e }) => {
          try {
            P(e ? `dark` : `light`);
          } catch (e) {
            console.error(e);
          }
        });
      }
    }, [d]),
    f.useEffect(() => {
      S.length <= 1 && A(!1);
    }, [S]),
    f.useEffect(() => {
      let e = (e) => {
        if (a.every((t) => e[t] || e.code === t)) {
          var t;
          (A(!0), (t = F.current) == null || t.focus());
        }
        e.code === `Escape` &&
          (document.activeElement === F.current ||
            F.current?.contains(document.activeElement)) &&
          A(!1);
      };
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }, [a]),
    f.useEffect(() => {
      if (F.current)
        return () => {
          R.current &&
            (R.current.focus({ preventScroll: !0 }),
            (R.current = null),
            (ee.current = !1));
        };
    }, [F.current]),
    f.createElement(
      `section`,
      {
        ref: t,
        "aria-label": `${x} ${I}`,
        tabIndex: -1,
        "aria-live": `polite`,
        "aria-relevant": `additions text`,
        "aria-atomic": `false`,
        suppressHydrationWarning: !0,
      },
      E.map((t, n) => {
        let [i, a] = t.split(`-`);
        return w.length
          ? f.createElement(
              `ol`,
              {
                key: t,
                dir: v === `auto` ? le() : v,
                tabIndex: -1,
                ref: F,
                className: c,
                "data-sonner-toaster": !0,
                "data-sonner-theme": N,
                "data-y-position": i,
                "data-x-position": a,
                style: {
                  "--front-toast-height": `${D[0]?.height || 0}px`,
                  "--width": `${re}px`,
                  "--gap": `${y}px`,
                  ...h,
                  ...ue(l, u),
                },
                onBlur: (e) => {
                  ee.current &&
                    !e.currentTarget.contains(e.relatedTarget) &&
                    ((ee.current = !1),
                    (R.current &&=
                      (R.current.focus({ preventScroll: !0 }), null)));
                },
                onFocus: (e) => {
                  (e.target instanceof HTMLElement &&
                    e.target.dataset.dismissible === `false`) ||
                    ee.current ||
                    ((ee.current = !0), (R.current = e.relatedTarget));
                },
                onMouseEnter: () => A(!0),
                onMouseMove: () => A(!0),
                onMouseLeave: () => {
                  j || A(!1);
                },
                onDragEnd: () => A(!1),
                onPointerDown: (e) => {
                  (e.target instanceof HTMLElement &&
                    e.target.dataset.dismissible === `false`) ||
                    M(!0);
                },
                onPointerUp: () => M(!1),
              },
              w
                .filter((e) => (!e.position && n === 0) || e.position === t)
                .map((n, i) =>
                  f.createElement(ce, {
                    key: n.id,
                    icons: b,
                    index: i,
                    toast: n,
                    defaultRichColors: p,
                    duration: _?.duration ?? m,
                    className: _?.className,
                    descriptionClassName: _?.descriptionClassName,
                    invert: r,
                    visibleToasts: g,
                    closeButton: _?.closeButton ?? s,
                    interacting: j,
                    position: t,
                    style: _?.style,
                    unstyled: _?.unstyled,
                    classNames: _?.classNames,
                    cancelButtonStyle: _?.cancelButtonStyle,
                    actionButtonStyle: _?.actionButtonStyle,
                    closeButtonAriaLabel: _?.closeButtonAriaLabel,
                    removeToast: z,
                    toasts: w.filter((e) => e.position == n.position),
                    heights: D.filter((e) => e.position == n.position),
                    setHeights: O,
                    expandByDefault: o,
                    gap: y,
                    expanded: k,
                    swipeDirections: e.swipeDirections,
                  }),
                ),
            )
          : null;
      }),
    )
  );
});
function fe(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function pe(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = fe(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : fe(e[t], null);
        }
      };
  };
}
function W(...e) {
  return f.useCallback(pe(...e), e);
}
function me(e) {
  let t = f.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    (Se(r) && typeof Ee == `function` && (r = Ee(r._payload)),
      f.Children.forEach(r, (e) => {
        if (be(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          (Se(n) && typeof Ee == `function` && (n = Ee(n._payload)),
            (a = _e(t, n)),
            s.push(a?.props?.children));
        } else s.push(e);
      }),
      a
        ? (a = f.cloneElement(a, void 0, s))
        : !o && f.Children.count(r) === 1 && f.isValidElement(r) && (a = r));
    let c = a ? ye(a) : void 0,
      l = W(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? Te(e) : we(e));
      return r;
    }
    let u = ve(i, a.props ?? {});
    return (a.type !== f.Fragment && (u.ref = n ? l : c), f.cloneElement(a, u));
  });
  return ((t.displayName = `${e}.Slot`), t);
}
var he = me(`Slot`),
  ge = Symbol.for(`radix.slottable`),
  _e = (e, t) => {
    if (`child` in e.props) {
      let t = e.props.child;
      return f.isValidElement(t)
        ? f.cloneElement(t, void 0, e.props.children(t.props.children))
        : null;
    }
    return f.isValidElement(t) ? t : null;
  };
function ve(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
function ye(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function be(e) {
  return (
    f.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === ge
  );
}
var xe = Symbol.for(`react.lazy`);
function Se(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === xe &&
    `_payload` in e &&
    Ce(e._payload)
  );
}
function Ce(e) {
  return typeof e == `object` && !!e && `then` in e;
}
var we = (e) =>
    `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
  Te = (e) =>
    `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
  Ee = f.use;
function De(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = De(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function Oe() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = De(e)) && (r && (r += ` `), (r += t));
  return r;
}
var ke = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  Ae = Oe,
  je = (e, t) => (n) => {
    if (t?.variants == null) return Ae(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = ke(t) || ke(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return Ae(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n)
            ? n.includes({ ...i, ...o }[t])
            : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className,
    );
  },
  Me = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  Ne = (e, t) => ({ classGroupId: e, validator: t }),
  Pe = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  Fe = `-`,
  Ie = [],
  Le = `arbitrary..`,
  Re = (e) => {
    let t = Ve(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Be(e);
        let n = e.split(Fe);
        return ze(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? Me(i, t) : t) : i || Ie;
        }
        return n[e] || Ie;
      },
    };
  },
  ze = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = ze(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(Fe) : e.slice(t).join(Fe),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Be = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? Le + r : void 0;
        })(),
  Ve = (e) => {
    let { theme: t, classGroups: n } = e;
    return He(n, t);
  },
  He = (e, t) => {
    let n = Pe();
    for (let r in e) {
      let i = e[r];
      Ue(i, n, r, t);
    }
    return n;
  },
  Ue = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      We(i, t, n, r);
    }
  },
  We = (e, t, n, r) => {
    if (typeof e == `string`) {
      Ge(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      Ke(e, t, n, r);
      return;
    }
    qe(e, t, n, r);
  },
  Ge = (e, t, n) => {
    let r = e === `` ? t : Je(t, e);
    r.classGroupId = n;
  },
  Ke = (e, t, n, r) => {
    if (Ye(e)) {
      Ue(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(Ne(n, e)));
  },
  qe = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      Ue(o, Je(t, a), n, r);
    }
  },
  Je = (e, t) => {
    let n = e,
      r = t.split(Fe),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = Pe()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  Ye = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  Xe = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a),
          t++,
          t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Ze = `!`,
  Qe = `:`,
  $e = [],
  et = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  tt = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Qe) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
              ? n--
              : o === `(`
                ? r++
                : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Ze)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Ze) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return et(t, l, c, u);
      };
    if (t) {
      let e = t + Qe,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : et($e, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  nt = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  rt = (e) => ({
    cache: Xe(e.cacheSize),
    parseClassName: tt(e),
    sortModifiers: nt(e),
    postfixLookupClassGroupIds: it(e),
    ...Re(e),
  }),
  it = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  at = /\s+/,
  ot = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(at),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        v = f ? _ + Ze : _,
        y = v + g;
      if (s.indexOf(y) > -1) continue;
      s.push(y);
      let b = i(g, h);
      for (let e = 0; e < b.length; ++e) {
        let t = b[e];
        s.push(v + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  st = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length;)
      (n = e[t++]) && (r = ct(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  ct = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = ct(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  lt = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = rt(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = ot(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(st(...e)));
  },
  ut = [],
  G = (e) => {
    let t = (t) => t[e] || ut;
    return ((t.isThemeGetter = !0), t);
  },
  dt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  ft = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  pt = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  mt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ht =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  gt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  _t = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  vt =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  yt = (e) => pt.test(e),
  K = (e) => !!e && !Number.isNaN(Number(e)),
  bt = (e) => !!e && Number.isInteger(Number(e)),
  xt = (e) => e.endsWith(`%`) && K(e.slice(0, -1)),
  St = (e) => mt.test(e),
  Ct = () => !0,
  wt = (e) => ht.test(e) && !gt.test(e),
  Tt = () => !1,
  Et = (e) => _t.test(e),
  Dt = (e) => vt.test(e),
  Ot = (e) => !q(e) && !J(e),
  kt = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  At = (e) => Gt(e, Yt, Tt),
  q = (e) => dt.test(e),
  jt = (e) => Gt(e, Xt, wt),
  Mt = (e) => Gt(e, Zt, K),
  Nt = (e) => Gt(e, $t, Ct),
  Pt = (e) => Gt(e, Qt, Tt),
  Ft = (e) => Gt(e, qt, Tt),
  It = (e) => Gt(e, Jt, Dt),
  Lt = (e) => Gt(e, en, Et),
  J = (e) => ft.test(e),
  Rt = (e) => Kt(e, Xt),
  zt = (e) => Kt(e, Qt),
  Bt = (e) => Kt(e, qt),
  Vt = (e) => Kt(e, Yt),
  Ht = (e) => Kt(e, Jt),
  Ut = (e) => Kt(e, en, !0),
  Wt = (e) => Kt(e, $t, !0),
  Gt = (e, t, n) => {
    let r = dt.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Kt = (e, t, n = !1) => {
    let r = ft.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  qt = (e) => e === `position` || e === `percentage`,
  Jt = (e) => e === `image` || e === `url`,
  Yt = (e) => e === `length` || e === `size` || e === `bg-size`,
  Xt = (e) => e === `length`,
  Zt = (e) => e === `number`,
  Qt = (e) => e === `family-name`,
  $t = (e) => e === `number` || e === `weight`,
  en = (e) => e === `shadow`,
  tn = lt(() => {
    let e = G(`color`),
      t = G(`font`),
      n = G(`text`),
      r = G(`font-weight`),
      i = G(`tracking`),
      a = G(`leading`),
      o = G(`breakpoint`),
      s = G(`container`),
      c = G(`spacing`),
      l = G(`radius`),
      u = G(`shadow`),
      d = G(`inset-shadow`),
      f = G(`text-shadow`),
      p = G(`drop-shadow`),
      m = G(`blur`),
      h = G(`perspective`),
      g = G(`aspect`),
      _ = G(`ease`),
      v = G(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      x = () => [...b(), J, q],
      S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      C = () => [`auto`, `contain`, `none`],
      w = () => [J, q, c],
      T = () => [yt, `full`, `auto`, ...w()],
      E = () => [bt, `none`, `subgrid`, J, q],
      D = () => [`auto`, { span: [`full`, bt, J, q] }, bt, J, q],
      O = () => [bt, `auto`, J, q],
      k = () => [`auto`, `min`, `max`, `fr`, J, q],
      A = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      j = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      M = () => [`auto`, ...w()],
      N = () => [
        yt,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      P = () => [
        yt,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      F = () => [
        yt,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      I = () => [e, J, q],
      L = () => [...b(), Bt, Ft, { position: [J, q] }],
      R = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      ee = () => [`auto`, `cover`, `contain`, Vt, At, { size: [J, q] }],
      z = () => [xt, Rt, jt],
      B = () => [``, `none`, `full`, l, J, q],
      V = () => [``, K, Rt, jt],
      te = () => [`solid`, `dashed`, `dotted`, `double`],
      ne = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      H = () => [K, xt, Bt, Ft],
      re = () => [``, `none`, m, J, q],
      ie = () => [`none`, K, J, q],
      ae = () => [`none`, K, J, q],
      oe = () => [K, J, q],
      U = () => [yt, `full`, ...w()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [St],
        breakpoint: [St],
        color: [Ct],
        container: [St],
        "drop-shadow": [St],
        ease: [`in`, `out`, `in-out`],
        font: [Ot],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [St],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [St],
        shadow: [St],
        spacing: [`px`, K],
        text: [St],
        "text-shadow": [St],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, yt, q, J, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, J, q] }],
        "container-named": [kt],
        columns: [{ columns: [K, q, J, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: x() }],
        overflow: [{ overflow: S() }],
        "overflow-x": [{ "overflow-x": S() }],
        "overflow-y": [{ "overflow-y": S() }],
        overscroll: [{ overscroll: C() }],
        "overscroll-x": [{ "overscroll-x": C() }],
        "overscroll-y": [{ "overscroll-y": C() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: T() }],
        "inset-x": [{ "inset-x": T() }],
        "inset-y": [{ "inset-y": T() }],
        start: [{ "inset-s": T(), start: T() }],
        end: [{ "inset-e": T(), end: T() }],
        "inset-bs": [{ "inset-bs": T() }],
        "inset-be": [{ "inset-be": T() }],
        top: [{ top: T() }],
        right: [{ right: T() }],
        bottom: [{ bottom: T() }],
        left: [{ left: T() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [bt, `auto`, J, q] }],
        basis: [{ basis: [yt, `full`, `auto`, s, ...w()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [K, yt, `auto`, `initial`, `none`, q] }],
        grow: [{ grow: [``, K, J, q] }],
        shrink: [{ shrink: [``, K, J, q] }],
        order: [{ order: [bt, `first`, `last`, `none`, J, q] }],
        "grid-cols": [{ "grid-cols": E() }],
        "col-start-end": [{ col: D() }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": E() }],
        "row-start-end": [{ row: D() }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": k() }],
        "auto-rows": [{ "auto-rows": k() }],
        gap: [{ gap: w() }],
        "gap-x": [{ "gap-x": w() }],
        "gap-y": [{ "gap-y": w() }],
        "justify-content": [{ justify: [...A(), `normal`] }],
        "justify-items": [{ "justify-items": [...j(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...j()] }],
        "align-content": [{ content: [`normal`, ...A()] }],
        "align-items": [{ items: [...j(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...j(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": A() }],
        "place-items": [{ "place-items": [...j(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...j()] }],
        p: [{ p: w() }],
        px: [{ px: w() }],
        py: [{ py: w() }],
        ps: [{ ps: w() }],
        pe: [{ pe: w() }],
        pbs: [{ pbs: w() }],
        pbe: [{ pbe: w() }],
        pt: [{ pt: w() }],
        pr: [{ pr: w() }],
        pb: [{ pb: w() }],
        pl: [{ pl: w() }],
        m: [{ m: M() }],
        mx: [{ mx: M() }],
        my: [{ my: M() }],
        ms: [{ ms: M() }],
        me: [{ me: M() }],
        mbs: [{ mbs: M() }],
        mbe: [{ mbe: M() }],
        mt: [{ mt: M() }],
        mr: [{ mr: M() }],
        mb: [{ mb: M() }],
        ml: [{ ml: M() }],
        "space-x": [{ "space-x": w() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": w() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: N() }],
        "inline-size": [{ inline: [`auto`, ...P()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...P()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...P()] }],
        "block-size": [{ block: [`auto`, ...F()] }],
        "min-block-size": [{ "min-block": [`auto`, ...F()] }],
        "max-block-size": [{ "max-block": [`none`, ...F()] }],
        w: [{ w: [s, `screen`, ...N()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...N()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...N()] },
        ],
        h: [{ h: [`screen`, `lh`, ...N()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...N()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...N()] }],
        "font-size": [{ text: [`base`, n, Rt, jt] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Wt, Nt] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              xt,
              q,
            ],
          },
        ],
        "font-family": [{ font: [zt, Pt, t] }],
        "font-features": [{ "font-features": [q] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, J, q] }],
        "line-clamp": [{ "line-clamp": [K, `none`, J, Mt] }],
        leading: [{ leading: [a, ...w()] }],
        "list-image": [{ "list-image": [`none`, J, q] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, J, q] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: I() }],
        "text-color": [{ text: I() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...te(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [K, `from-font`, `auto`, J, jt] },
        ],
        "text-decoration-color": [{ decoration: I() }],
        "underline-offset": [{ "underline-offset": [K, `auto`, J, q] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: w() }],
        "tab-size": [{ tab: [bt, J, q] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              J,
              q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, J, q] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: L() }],
        "bg-repeat": [{ bg: R() }],
        "bg-size": [{ bg: ee() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  bt,
                  J,
                  q,
                ],
                radial: [``, J, q],
                conic: [bt, J, q],
              },
              Ht,
              It,
            ],
          },
        ],
        "bg-color": [{ bg: I() }],
        "gradient-from-pos": [{ from: z() }],
        "gradient-via-pos": [{ via: z() }],
        "gradient-to-pos": [{ to: z() }],
        "gradient-from": [{ from: I() }],
        "gradient-via": [{ via: I() }],
        "gradient-to": [{ to: I() }],
        rounded: [{ rounded: B() }],
        "rounded-s": [{ "rounded-s": B() }],
        "rounded-e": [{ "rounded-e": B() }],
        "rounded-t": [{ "rounded-t": B() }],
        "rounded-r": [{ "rounded-r": B() }],
        "rounded-b": [{ "rounded-b": B() }],
        "rounded-l": [{ "rounded-l": B() }],
        "rounded-ss": [{ "rounded-ss": B() }],
        "rounded-se": [{ "rounded-se": B() }],
        "rounded-ee": [{ "rounded-ee": B() }],
        "rounded-es": [{ "rounded-es": B() }],
        "rounded-tl": [{ "rounded-tl": B() }],
        "rounded-tr": [{ "rounded-tr": B() }],
        "rounded-br": [{ "rounded-br": B() }],
        "rounded-bl": [{ "rounded-bl": B() }],
        "border-w": [{ border: V() }],
        "border-w-x": [{ "border-x": V() }],
        "border-w-y": [{ "border-y": V() }],
        "border-w-s": [{ "border-s": V() }],
        "border-w-e": [{ "border-e": V() }],
        "border-w-bs": [{ "border-bs": V() }],
        "border-w-be": [{ "border-be": V() }],
        "border-w-t": [{ "border-t": V() }],
        "border-w-r": [{ "border-r": V() }],
        "border-w-b": [{ "border-b": V() }],
        "border-w-l": [{ "border-l": V() }],
        "divide-x": [{ "divide-x": V() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": V() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...te(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...te(), `hidden`, `none`] }],
        "border-color": [{ border: I() }],
        "border-color-x": [{ "border-x": I() }],
        "border-color-y": [{ "border-y": I() }],
        "border-color-s": [{ "border-s": I() }],
        "border-color-e": [{ "border-e": I() }],
        "border-color-bs": [{ "border-bs": I() }],
        "border-color-be": [{ "border-be": I() }],
        "border-color-t": [{ "border-t": I() }],
        "border-color-r": [{ "border-r": I() }],
        "border-color-b": [{ "border-b": I() }],
        "border-color-l": [{ "border-l": I() }],
        "divide-color": [{ divide: I() }],
        "outline-style": [{ outline: [...te(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [K, J, q] }],
        "outline-w": [{ outline: [``, K, Rt, jt] }],
        "outline-color": [{ outline: I() }],
        shadow: [{ shadow: [``, `none`, u, Ut, Lt] }],
        "shadow-color": [{ shadow: I() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Ut, Lt] }],
        "inset-shadow-color": [{ "inset-shadow": I() }],
        "ring-w": [{ ring: V() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: I() }],
        "ring-offset-w": [{ "ring-offset": [K, jt] }],
        "ring-offset-color": [{ "ring-offset": I() }],
        "inset-ring-w": [{ "inset-ring": V() }],
        "inset-ring-color": [{ "inset-ring": I() }],
        "text-shadow": [{ "text-shadow": [`none`, f, Ut, Lt] }],
        "text-shadow-color": [{ "text-shadow": I() }],
        opacity: [{ opacity: [K, J, q] }],
        "mix-blend": [
          { "mix-blend": [...ne(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": ne() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [K] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": H() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": H() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": I() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": I() }],
        "mask-image-t-from-pos": [{ "mask-t-from": H() }],
        "mask-image-t-to-pos": [{ "mask-t-to": H() }],
        "mask-image-t-from-color": [{ "mask-t-from": I() }],
        "mask-image-t-to-color": [{ "mask-t-to": I() }],
        "mask-image-r-from-pos": [{ "mask-r-from": H() }],
        "mask-image-r-to-pos": [{ "mask-r-to": H() }],
        "mask-image-r-from-color": [{ "mask-r-from": I() }],
        "mask-image-r-to-color": [{ "mask-r-to": I() }],
        "mask-image-b-from-pos": [{ "mask-b-from": H() }],
        "mask-image-b-to-pos": [{ "mask-b-to": H() }],
        "mask-image-b-from-color": [{ "mask-b-from": I() }],
        "mask-image-b-to-color": [{ "mask-b-to": I() }],
        "mask-image-l-from-pos": [{ "mask-l-from": H() }],
        "mask-image-l-to-pos": [{ "mask-l-to": H() }],
        "mask-image-l-from-color": [{ "mask-l-from": I() }],
        "mask-image-l-to-color": [{ "mask-l-to": I() }],
        "mask-image-x-from-pos": [{ "mask-x-from": H() }],
        "mask-image-x-to-pos": [{ "mask-x-to": H() }],
        "mask-image-x-from-color": [{ "mask-x-from": I() }],
        "mask-image-x-to-color": [{ "mask-x-to": I() }],
        "mask-image-y-from-pos": [{ "mask-y-from": H() }],
        "mask-image-y-to-pos": [{ "mask-y-to": H() }],
        "mask-image-y-from-color": [{ "mask-y-from": I() }],
        "mask-image-y-to-color": [{ "mask-y-to": I() }],
        "mask-image-radial": [{ "mask-radial": [J, q] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": H() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": H() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": I() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": I() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": b() }],
        "mask-image-conic-pos": [{ "mask-conic": [K] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": H() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": H() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": I() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": I() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: L() }],
        "mask-repeat": [{ mask: R() }],
        "mask-size": [{ mask: ee() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, J, q] }],
        filter: [{ filter: [``, `none`, J, q] }],
        blur: [{ blur: re() }],
        brightness: [{ brightness: [K, J, q] }],
        contrast: [{ contrast: [K, J, q] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, Ut, Lt] }],
        "drop-shadow-color": [{ "drop-shadow": I() }],
        grayscale: [{ grayscale: [``, K, J, q] }],
        "hue-rotate": [{ "hue-rotate": [K, J, q] }],
        invert: [{ invert: [``, K, J, q] }],
        saturate: [{ saturate: [K, J, q] }],
        sepia: [{ sepia: [``, K, J, q] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, J, q] }],
        "backdrop-blur": [{ "backdrop-blur": re() }],
        "backdrop-brightness": [{ "backdrop-brightness": [K, J, q] }],
        "backdrop-contrast": [{ "backdrop-contrast": [K, J, q] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, K, J, q] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [K, J, q] }],
        "backdrop-invert": [{ "backdrop-invert": [``, K, J, q] }],
        "backdrop-opacity": [{ "backdrop-opacity": [K, J, q] }],
        "backdrop-saturate": [{ "backdrop-saturate": [K, J, q] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, K, J, q] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": w() }],
        "border-spacing-x": [{ "border-spacing-x": w() }],
        "border-spacing-y": [{ "border-spacing-y": w() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              J,
              q,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [K, `initial`, J, q] }],
        ease: [{ ease: [`linear`, `initial`, _, J, q] }],
        delay: [{ delay: [K, J, q] }],
        animate: [{ animate: [`none`, v, J, q] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, J, q] }],
        "perspective-origin": [{ "perspective-origin": x() }],
        rotate: [{ rotate: ie() }],
        "rotate-x": [{ "rotate-x": ie() }],
        "rotate-y": [{ "rotate-y": ie() }],
        "rotate-z": [{ "rotate-z": ie() }],
        scale: [{ scale: ae() }],
        "scale-x": [{ "scale-x": ae() }],
        "scale-y": [{ "scale-y": ae() }],
        "scale-z": [{ "scale-z": ae() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: oe() }],
        "skew-x": [{ "skew-x": oe() }],
        "skew-y": [{ "skew-y": oe() }],
        transform: [{ transform: [J, q, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: x() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: U() }],
        "translate-x": [{ "translate-x": U() }],
        "translate-y": [{ "translate-y": U() }],
        "translate-z": [{ "translate-z": U() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [bt, J, q] }],
        accent: [{ accent: I() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: I() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              J,
              q,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": I() }],
        "scrollbar-track-color": [{ "scrollbar-track": I() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": w() }],
        "scroll-mx": [{ "scroll-mx": w() }],
        "scroll-my": [{ "scroll-my": w() }],
        "scroll-ms": [{ "scroll-ms": w() }],
        "scroll-me": [{ "scroll-me": w() }],
        "scroll-mbs": [{ "scroll-mbs": w() }],
        "scroll-mbe": [{ "scroll-mbe": w() }],
        "scroll-mt": [{ "scroll-mt": w() }],
        "scroll-mr": [{ "scroll-mr": w() }],
        "scroll-mb": [{ "scroll-mb": w() }],
        "scroll-ml": [{ "scroll-ml": w() }],
        "scroll-p": [{ "scroll-p": w() }],
        "scroll-px": [{ "scroll-px": w() }],
        "scroll-py": [{ "scroll-py": w() }],
        "scroll-ps": [{ "scroll-ps": w() }],
        "scroll-pe": [{ "scroll-pe": w() }],
        "scroll-pbs": [{ "scroll-pbs": w() }],
        "scroll-pbe": [{ "scroll-pbe": w() }],
        "scroll-pt": [{ "scroll-pt": w() }],
        "scroll-pr": [{ "scroll-pr": w() }],
        "scroll-pb": [{ "scroll-pb": w() }],
        "scroll-pl": [{ "scroll-pl": w() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, J, q] },
        ],
        fill: [{ fill: [`none`, ...I()] }],
        "stroke-w": [{ stroke: [K, Rt, jt, Mt] }],
        stroke: [{ stroke: [`none`, ...I()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function Y(...e) {
  return tn(Oe(e));
}
var X = i(),
  nn = je(
    `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
    {
      variants: {
        variant: {
          default: `bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.49_0.18_260/0.8)] hover:bg-primary/90`,
          destructive: `bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90`,
          outline: `border border-input bg-background/80 shadow-sm backdrop-blur hover:bg-primary/15 hover:text-foreground`,
          secondary: `bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80`,
          ghost: `hover:bg-accent hover:text-accent-foreground`,
          link: `text-primary underline-offset-4 hover:underline`,
        },
        size: {
          default: `h-9 px-4 py-2`,
          sm: `h-8 rounded-full px-3 text-xs`,
          lg: `h-10 rounded-full px-8`,
          icon: `h-9 w-9`,
        },
      },
      defaultVariants: { variant: `default`, size: `default` },
    },
  ),
  rn = f.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) =>
      (0, X.jsx)(r ? he : `button`, {
        className: Y(nn({ variant: t, size: n, className: e })),
        ref: a,
        ...i,
      }),
  );
rn.displayName = `Button`;
var an = f.forwardRef(({ className: e, type: t, ...n }, r) =>
  (0, X.jsx)(`input`, {
    type: t,
    className: Y(
      `flex h-10 w-full rounded-xl border border-input bg-background/70 px-3 py-2 text-base shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
      e,
    ),
    ref: r,
    ...n,
  }),
);
an.displayName = `Input`;
var Z = [
  `a`,
  `button`,
  `div`,
  `form`,
  `h2`,
  `h3`,
  `img`,
  `input`,
  `label`,
  `li`,
  `nav`,
  `ol`,
  `p`,
  `select`,
  `span`,
  `svg`,
  `ul`,
].reduce((e, t) => {
  let n = me(`Primitive.${t}`),
    r = f.forwardRef((e, r) => {
      let { asChild: i, ...a } = e,
        o = i ? n : t;
      return (
        typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
        (0, X.jsx)(o, { ...a, ref: r })
      );
    });
  return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
}, {});
function on(e, t) {
  e && T.flushSync(() => e.dispatchEvent(t));
}
var sn = `Label`,
  cn = f.forwardRef((e, t) =>
    (0, X.jsx)(Z.label, {
      ...e,
      ref: t,
      onMouseDown: (t) => {
        t.target.closest(`button, input, select, textarea`) ||
          (e.onMouseDown?.(t),
          !t.defaultPrevented && t.detail > 1 && t.preventDefault());
      },
    }),
  );
cn.displayName = sn;
var ln = cn,
  un = je(
    `text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,
  ),
  dn = f.forwardRef(({ className: e, ...t }, n) =>
    (0, X.jsx)(ln, { ref: n, className: Y(un(), e), ...t }),
  );
dn.displayName = ln.displayName;
var fn = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(`div`, {
    ref: n,
    className: Y(
      `rounded-2xl border border-border/70 bg-card/95 text-card-foreground shadow-[0_20px_60px_-20px_oklch(0.49_0.18_260/0.35)] backdrop-blur`,
      e,
    ),
    ...t,
  }),
);
fn.displayName = `Card`;
var pn = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(`div`, {
    ref: n,
    className: Y(`flex flex-col space-y-1.5 p-6`, e),
    ...t,
  }),
);
pn.displayName = `CardHeader`;
var mn = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(`div`, {
    ref: n,
    className: Y(`font-semibold leading-none tracking-tight`, e),
    ...t,
  }),
);
mn.displayName = `CardTitle`;
var hn = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(`div`, {
    ref: n,
    className: Y(`text-sm text-muted-foreground`, e),
    ...t,
  }),
);
hn.displayName = `CardDescription`;
var gn = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(`div`, { ref: n, className: Y(`p-6 pt-0`, e), ...t }),
);
gn.displayName = `CardContent`;
var _n = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(`div`, {
    ref: n,
    className: Y(`flex items-center p-6 pt-0`, e),
    ...t,
  }),
);
((_n.displayName = `CardFooter`),
  typeof window < `u` && window.document && window.document.createElement);
function Q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e?.(r), n === !1 || !r || !r.defaultPrevented)) return t?.(r);
  };
}
function vn(e, t = []) {
  let n = [];
  function r(t, r) {
    let i = f.createContext(r);
    i.displayName = t + `Context`;
    let a = n.length;
    n = [...n, r];
    let o = (t) => {
      let { scope: n, children: r, ...o } = t,
        s = n?.[e]?.[a] || i,
        c = f.useMemo(() => o, Object.values(o));
      return (0, X.jsx)(s.Provider, { value: c, children: r });
    };
    o.displayName = t + `Provider`;
    function s(n, o, s = {}) {
      let { optional: c = !1 } = s,
        l = o?.[e]?.[a] || i,
        u = f.useContext(l);
      if (u) return u;
      if (r !== void 0) return r;
      if (!c) throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return [o, s];
  }
  let i = () => {
    let t = n.map((e) => f.createContext(e));
    return function (n) {
      let r = n?.[e] || t;
      return f.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    };
  };
  return ((i.scopeName = e), [r, yn(i, ...t)]);
}
function yn(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = () => {
    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`];
        return { ...t, ...i };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function bn(e) {
  let t = e + `CollectionProvider`,
    [n, r] = vn(t),
    [i, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (e) => {
      let { scope: t, children: n } = e,
        r = f.useRef(null),
        a = f.useRef(new Map()).current;
      return (0, X.jsx)(i, {
        scope: t,
        itemMap: a,
        collectionRef: r,
        children: n,
      });
    };
  o.displayName = t;
  let s = e + `CollectionSlot`,
    c = me(s),
    l = f.forwardRef((e, t) => {
      let { scope: n, children: r } = e,
        i = W(t, a(s, n).collectionRef);
      return (0, X.jsx)(c, { ref: i, children: r });
    });
  l.displayName = s;
  let u = e + `CollectionItemSlot`,
    d = `data-radix-collection-item`,
    p = me(u),
    m = f.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        o = f.useRef(null),
        s = W(t, o),
        c = a(u, n);
      return (
        f.useEffect(
          () => (
            c.itemMap.set(o, { ref: o, ...i }),
            () => void c.itemMap.delete(o)
          ),
        ),
        (0, X.jsx)(p, { [d]: ``, ref: s, children: r })
      );
    });
  m.displayName = u;
  function h(t) {
    let n = a(e + `CollectionConsumer`, t);
    return f.useCallback(() => {
      let e = n.collectionRef.current;
      if (!e) return [];
      let t = Array.from(e.querySelectorAll(`[${d}]`));
      return Array.from(n.itemMap.values()).sort(
        (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
      );
    }, [n.collectionRef, n.itemMap]);
  }
  return [{ Provider: o, Slot: l, ItemSlot: m }, h, r];
}
var $ = globalThis?.document ? f.useLayoutEffect : () => {},
  xn = f.useId || (() => void 0),
  Sn = 0;
function Cn(e) {
  let [t, n] = f.useState(xn());
  return (
    $(() => {
      e || n((e) => e ?? String(Sn++));
    }, [e]),
    e || (t ? `radix-${t}` : ``)
  );
}
function wn(e) {
  let t = f.useRef(e);
  return (
    f.useEffect(() => {
      t.current = e;
    }),
    f.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
var Tn = f.useInsertionEffect || $;
function En({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  let [i, a, o] = Dn({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    c = s ? e : i;
  {
    let t = f.useRef(e !== void 0);
    f.useEffect(() => {
      let e = t.current;
      (e !== s &&
        console.warn(
          `${r} is changing from ${e ? `controlled` : `uncontrolled`} to ${s ? `controlled` : `uncontrolled`}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (t.current = s));
    }, [s, r]);
  }
  return [
    c,
    f.useCallback(
      (t) => {
        if (s) {
          let n = On(t) ? t(e) : t;
          n !== e && o.current?.(n);
        } else a(t);
      },
      [s, e, a, o],
    ),
  ];
}
function Dn({ defaultProp: e, onChange: t }) {
  let [n, r] = f.useState(e),
    i = f.useRef(n),
    a = f.useRef(t);
  return (
    Tn(() => {
      a.current = t;
    }, [t]),
    f.useEffect(() => {
      i.current !== n && (a.current?.(n), (i.current = n));
    }, [n, i]),
    [n, r, a]
  );
}
function On(e) {
  return typeof e == `function`;
}
var kn = f.createContext(void 0);
function An(e) {
  let t = f.useContext(kn);
  return e || t || `ltr`;
}
var jn = !1;
function Mn() {
  let [e, t] = f.useState(jn);
  return (
    f.useEffect(() => {
      jn || ((jn = !0), t(!0));
    }, []),
    e
  );
}
var Nn = f.useSyncExternalStore;
function Pn() {
  return () => {};
}
function Fn() {
  return Nn(
    Pn,
    () => !0,
    () => !1,
  );
}
var In = typeof Nn == `function` ? Fn : Mn,
  Ln = `rovingFocusGroup.onEntryFocus`,
  Rn = { bubbles: !1, cancelable: !0 },
  zn = `RovingFocusGroup`,
  [Bn, Vn, Hn] = bn(zn),
  [Un, Wn] = vn(zn, [Hn]),
  [Gn, Kn] = Un(zn),
  qn = f.forwardRef((e, t) =>
    (0, X.jsx)(Bn.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: (0, X.jsx)(Bn.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: (0, X.jsx)(Jn, { ...e, ref: t }),
      }),
    }),
  );
qn.displayName = zn;
var Jn = f.forwardRef((e, t) => {
    let {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: i = !1,
        dir: a,
        currentTabStopId: o,
        defaultCurrentTabStopId: s,
        onCurrentTabStopIdChange: c,
        onEntryFocus: l,
        preventScrollOnEntryFocus: u = !1,
        ...d
      } = e,
      p = f.useRef(null),
      m = W(t, p),
      h = An(a),
      [g, _] = En({ prop: o, defaultProp: s ?? null, onChange: c, caller: zn }),
      [v, y] = f.useState(!1),
      b = wn(l),
      x = Vn(n),
      S = f.useRef(!1),
      [C, w] = f.useState(0);
    return (
      f.useEffect(() => {
        let e = p.current;
        if (e)
          return (
            e.addEventListener(Ln, b),
            () => e.removeEventListener(Ln, b)
          );
      }, [b]),
      (0, X.jsx)(Gn, {
        scope: n,
        orientation: r,
        dir: h,
        loop: i,
        currentTabStopId: g,
        onItemFocus: f.useCallback((e) => _(e), [_]),
        onItemShiftTab: f.useCallback(() => y(!0), []),
        onFocusableItemAdd: f.useCallback(() => w((e) => e + 1), []),
        onFocusableItemRemove: f.useCallback(() => w((e) => e - 1), []),
        children: (0, X.jsx)(Z.div, {
          tabIndex: v || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: m,
          style: { outline: `none`, ...e.style },
          onMouseDown: Q(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: Q(e.onFocus, (e) => {
            let t = !S.current;
            if (e.target === e.currentTarget && t && !v) {
              let t = new CustomEvent(Ln, Rn);
              if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                let e = x().filter((e) => e.focusable);
                er(
                  [e.find((e) => e.active), e.find((e) => e.id === g), ...e]
                    .filter(Boolean)
                    .map((e) => e.ref.current),
                  u,
                );
              }
            }
            S.current = !1;
          }),
          onBlur: Q(e.onBlur, () => y(!1)),
        }),
      })
    );
  }),
  Yn = `RovingFocusGroupItem`,
  Xn = f.forwardRef((e, t) => {
    let {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: i = !1,
        tabStopId: a,
        children: o,
        ...s
      } = e,
      c = Cn(),
      l = a || c,
      u = Kn(Yn, n),
      d = u.currentTabStopId === l,
      p = Vn(n),
      {
        onFocusableItemAdd: m,
        onFocusableItemRemove: h,
        currentTabStopId: g,
      } = u,
      _ = In();
    return (
      $(() => {
        if (!(!_ || !r)) return (m(), () => h());
      }, [_, r, m, h]),
      f.useEffect(() => {
        if (!(_ || !r)) return (m(), () => h());
      }, [_, r, m, h]),
      (0, X.jsx)(Bn.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: i,
        children: (0, X.jsx)(Z.span, {
          tabIndex: d ? 0 : -1,
          "data-orientation": u.orientation,
          ...s,
          ref: t,
          onMouseDown: Q(e.onMouseDown, (e) => {
            r ? u.onItemFocus(l) : e.preventDefault();
          }),
          onFocus: Q(e.onFocus, () => u.onItemFocus(l)),
          onKeyDown: Q(e.onKeyDown, (e) => {
            if (e.key === `Tab` && e.shiftKey) {
              u.onItemShiftTab();
              return;
            }
            if (e.target !== e.currentTarget) return;
            let t = $n(e, u.orientation, u.dir);
            if (t !== void 0) {
              if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
              e.preventDefault();
              let n = p()
                .filter((e) => e.focusable)
                .map((e) => e.ref.current);
              if (t === `last`) n.reverse();
              else if (t === `prev` || t === `next`) {
                t === `prev` && n.reverse();
                let r = n.indexOf(e.currentTarget);
                n = u.loop ? tr(n, r + 1) : n.slice(r + 1);
              }
              setTimeout(() => er(n));
            }
          }),
          children:
            typeof o == `function`
              ? o({ isCurrentTabStop: d, hasTabStop: g != null })
              : o,
        }),
      })
    );
  });
Xn.displayName = Yn;
var Zn = {
  ArrowLeft: `prev`,
  ArrowUp: `prev`,
  ArrowRight: `next`,
  ArrowDown: `next`,
  PageUp: `first`,
  Home: `first`,
  PageDown: `last`,
  End: `last`,
};
function Qn(e, t) {
  return t === `rtl`
    ? e === `ArrowLeft`
      ? `ArrowRight`
      : e === `ArrowRight`
        ? `ArrowLeft`
        : e
    : e;
}
function $n(e, t, n) {
  let r = Qn(e.key, n);
  if (
    !(t === `vertical` && [`ArrowLeft`, `ArrowRight`].includes(r)) &&
    !(t === `horizontal` && [`ArrowUp`, `ArrowDown`].includes(r))
  )
    return Zn[r];
}
function er(e, t = !1) {
  let n = document.activeElement;
  for (let r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function tr(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var nr = qn,
  rr = Xn;
function ir(e, t) {
  return f.useReducer((e, n) => t[e][n] ?? e, e);
}
var ar = (e) => {
  let { present: t, children: n } = e,
    r = or(t),
    i =
      typeof n == `function` ? n({ present: r.isPresent }) : f.Children.only(n),
    a = cr(r.ref, ur(i));
  return typeof n == `function` || r.isPresent
    ? f.cloneElement(i, { ref: a })
    : null;
};
ar.displayName = `Presence`;
function or(e) {
  let [t, n] = f.useState(),
    r = f.useRef(null),
    i = f.useRef(e),
    a = f.useRef(`none`),
    o = f.useRef(void 0),
    [s, c] = ir(e ? `mounted` : `unmounted`, {
      mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` },
      unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
      unmounted: { MOUNT: `mounted` },
    });
  return (
    f.useEffect(() => {
      s === `mounted`
        ? ((a.current = o.current ?? lr(r.current)), (o.current = void 0))
        : (a.current = `none`);
    }, [s]),
    $(() => {
      let t = r.current,
        n = i.current;
      if (n !== e) {
        let r = a.current,
          s = lr(t);
        (e
          ? ((o.current = s), c(`MOUNT`))
          : s === `none` || t?.display === `none`
            ? c(`UNMOUNT`)
            : c(n && r !== s ? `ANIMATION_OUT` : `UNMOUNT`),
          (i.current = e));
      }
    }, [e, c]),
    $(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          o = (a) => {
            let o = lr(r.current).includes(CSS.escape(a.animationName));
            if (a.target === t && o && (c(`ANIMATION_END`), !i.current)) {
              let r = t.style.animationFillMode;
              ((t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` &&
                    (t.style.animationFillMode = r);
                })));
            }
          },
          s = (e) => {
            e.target === t && (a.current = lr(r.current));
          };
        return (
          t.addEventListener(`animationstart`, s),
          t.addEventListener(`animationcancel`, o),
          t.addEventListener(`animationend`, o),
          () => {
            (n.clearTimeout(e),
              t.removeEventListener(`animationstart`, s),
              t.removeEventListener(`animationcancel`, o),
              t.removeEventListener(`animationend`, o));
          }
        );
      } else c(`ANIMATION_END`);
    }, [t, c]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(s),
      ref: f.useCallback((e) => {
        if (e) {
          let t = getComputedStyle(e);
          ((r.current = t), (o.current = lr(t)));
        } else r.current = null;
        n(e);
      }, []),
    }
  );
}
function sr(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function cr(...e) {
  let t = f.useRef(e);
  return (
    (t.current = e),
    f.useCallback((e) => {
      let n = t.current,
        r = !1,
        i = n.map((t) => {
          let n = sr(t, e);
          return (!r && typeof n == `function` && (r = !0), n);
        });
      if (r)
        return () => {
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            typeof t == `function` ? t() : sr(n[e], null);
          }
        };
    }, [])
  );
}
function lr(e) {
  return e?.animationName || `none`;
}
function ur(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var dr = `Tabs`,
  [fr, pr] = vn(dr, [Wn]),
  mr = Wn(),
  [hr, gr] = fr(dr),
  _r = f.forwardRef((e, t) => {
    let {
        __scopeTabs: n,
        value: r,
        onValueChange: i,
        defaultValue: a,
        orientation: o = `horizontal`,
        dir: s,
        activationMode: c = `automatic`,
        ...l
      } = e,
      u = An(s),
      [d, f] = En({ prop: r, onChange: i, defaultProp: a ?? ``, caller: dr });
    return (0, X.jsx)(hr, {
      scope: n,
      baseId: Cn(),
      value: d,
      onValueChange: f,
      orientation: o,
      dir: u,
      activationMode: c,
      children: (0, X.jsx)(Z.div, {
        dir: u,
        "data-orientation": o,
        ...l,
        ref: t,
      }),
    });
  });
_r.displayName = dr;
var vr = `TabsList`,
  yr = f.forwardRef((e, t) => {
    let { __scopeTabs: n, loop: r = !0, ...i } = e,
      a = gr(vr, n),
      o = mr(n);
    return (0, X.jsx)(nr, {
      asChild: !0,
      ...o,
      orientation: a.orientation,
      dir: a.dir,
      loop: r,
      children: (0, X.jsx)(Z.div, {
        role: `tablist`,
        "aria-orientation": a.orientation,
        ...i,
        ref: t,
      }),
    });
  });
yr.displayName = vr;
var br = `TabsTrigger`,
  xr = f.forwardRef((e, t) => {
    let { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e,
      o = gr(br, n),
      s = mr(n),
      c = wr(o.baseId, r),
      l = Tr(o.baseId, r),
      u = r === o.value;
    return (0, X.jsx)(rr, {
      asChild: !0,
      ...s,
      focusable: !i,
      active: u,
      children: (0, X.jsx)(Z.button, {
        type: `button`,
        role: `tab`,
        "aria-selected": u,
        "aria-controls": l,
        "data-state": u ? `active` : `inactive`,
        "data-disabled": i ? `` : void 0,
        disabled: i,
        id: c,
        ...a,
        ref: t,
        onMouseDown: Q(e.onMouseDown, (e) => {
          !i && e.button === 0 && e.ctrlKey === !1
            ? o.onValueChange(r)
            : e.preventDefault();
        }),
        onKeyDown: Q(e.onKeyDown, (e) => {
          i ||
            e.target !== e.currentTarget ||
            ([` `, `Enter`].includes(e.key) && o.onValueChange(r));
        }),
        onFocus: Q(e.onFocus, () => {
          let e = o.activationMode !== `manual`;
          !u && !i && e && o.onValueChange(r);
        }),
      }),
    });
  });
xr.displayName = br;
var Sr = `TabsContent`,
  Cr = f.forwardRef((e, t) => {
    let { __scopeTabs: n, value: r, forceMount: i, children: a, ...o } = e,
      s = gr(Sr, n),
      c = wr(s.baseId, r),
      l = Tr(s.baseId, r),
      u = r === s.value,
      d = f.useRef(u);
    return (
      f.useEffect(() => {
        let e = requestAnimationFrame(() => (d.current = !1));
        return () => cancelAnimationFrame(e);
      }, []),
      (0, X.jsx)(ar, {
        present: i || u,
        children: ({ present: n }) =>
          (0, X.jsx)(Z.div, {
            "data-state": u ? `active` : `inactive`,
            "data-orientation": s.orientation,
            role: `tabpanel`,
            "aria-labelledby": c,
            hidden: !n,
            id: l,
            tabIndex: 0,
            ...o,
            ref: t,
            style: { ...e.style, animationDuration: d.current ? `0s` : void 0 },
            children: n && a,
          }),
      })
    );
  });
Cr.displayName = Sr;
function wr(e, t) {
  return `${e}-trigger-${t}`;
}
function Tr(e, t) {
  return `${e}-content-${t}`;
}
var Er = _r,
  Dr = yr,
  Or = xr,
  kr = Cr,
  Ar = Er,
  jr = f.forwardRef(({ className: e, ...t }, n) =>
    (0, X.jsx)(Dr, {
      ref: n,
      className: Y(
        `inline-flex h-11 items-center justify-center rounded-full bg-muted/80 p-1 text-muted-foreground shadow-inner`,
        e,
      ),
      ...t,
    }),
  );
jr.displayName = Dr.displayName;
var Mr = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(Or, {
    ref: n,
    className: Y(
      `inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background cursor-pointer transition-all hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-primary/15 data-[state=active]:text-foreground data-[state=active]:shadow-sm`,
      e,
    ),
    ...t,
  }),
);
Mr.displayName = Or.displayName;
var Nr = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(kr, {
    ref: n,
    className: Y(
      `mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
      e,
    ),
    ...t,
  }),
);
Nr.displayName = kr.displayName;
function Pr(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var Fr = `DismissableLayer`,
  Ir = `dismissableLayer.update`,
  Lr = `dismissableLayer.pointerDownOutside`,
  Rr = `dismissableLayer.focusOutside`,
  zr,
  Br = f.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  Vr = f.forwardRef((e, t) => {
    let {
        disableOutsidePointerEvents: n = !1,
        deferPointerDownOutside: r = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: o,
        onInteractOutside: s,
        onDismiss: c,
        ...l
      } = e,
      u = f.useContext(Br),
      [d, p] = f.useState(null),
      m = d?.ownerDocument ?? globalThis?.document,
      [, h] = f.useState({}),
      g = W(t, p),
      _ = Array.from(u.layers),
      [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = v ? _.indexOf(v) : -1,
      b = d ? _.indexOf(d) : -1,
      x = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = b >= y,
      C = f.useRef(!1),
      w = Kr(
        (e) => {
          (a?.(e), s?.(e), e.defaultPrevented || c?.());
        },
        {
          ownerDocument: m,
          deferPointerDownOutside: r,
          isDeferredPointerDownOutsideRef: C,
          dismissableSurfaces: u.dismissableSurfaces,
          shouldHandlePointerDownOutside: f.useCallback(
            (e) => {
              if (!(e instanceof Node)) return !1;
              let t = [...u.branches].some((t) => t.contains(e));
              return S && !t;
            },
            [u.branches, S],
          ),
        },
      ),
      T = qr((e) => {
        if (r && C.current) return;
        let t = e.target;
        [...u.branches].some((e) => e.contains(t)) ||
          (o?.(e), s?.(e), e.defaultPrevented || c?.());
      }, m),
      E = d ? b === _.length - 1 : !1,
      D = wn((e) => {
        e.key === `Escape` &&
          (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
      });
    return (
      f.useEffect(() => {
        if (E)
          return (
            m.addEventListener(`keydown`, D, { capture: !0 }),
            () => m.removeEventListener(`keydown`, D, { capture: !0 })
          );
      }, [m, E, D]),
      f.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((zr = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = `none`)),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Jr(),
            () => {
              n &&
                (u.layersWithOutsidePointerEventsDisabled.delete(d),
                u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  (m.body.style.pointerEvents = zr));
            }
          );
      }, [d, m, n, u]),
      f.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            Jr());
        },
        [d, u],
      ),
      f.useEffect(() => {
        let e = () => h({});
        return (
          document.addEventListener(Ir, e),
          () => document.removeEventListener(Ir, e)
        );
      }, []),
      (0, X.jsx)(Z.div, {
        ...l,
        ref: g,
        style: {
          pointerEvents: x ? (S ? `auto` : `none`) : void 0,
          ...e.style,
        },
        onFocusCapture: Q(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Q(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Q(e.onPointerDownCapture, w.onPointerDownCapture),
      })
    );
  });
Vr.displayName = Fr;
var Hr = `DismissableLayerBranch`,
  Ur = f.forwardRef((e, t) => {
    let n = f.useContext(Br),
      r = f.useRef(null),
      i = W(t, r);
    return (
      f.useEffect(() => {
        let e = r.current;
        if (e)
          return (
            n.branches.add(e),
            () => {
              n.branches.delete(e);
            }
          );
      }, [n.branches]),
      (0, X.jsx)(Z.div, { ...e, ref: i })
    );
  });
Ur.displayName = Hr;
function Wr() {
  let e = f.useContext(Br),
    [t, n] = f.useState(null);
  return (
    f.useEffect(() => {
      if (t)
        return (
          e.dismissableSurfaces.add(t),
          () => {
            e.dismissableSurfaces.delete(t);
          }
        );
    }, [t, e.dismissableSurfaces]),
    n
  );
}
var Gr = () => !0;
function Kr(e, t) {
  let {
      ownerDocument: n = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: i,
      dismissableSurfaces: a,
      shouldHandlePointerDownOutside: o = Gr,
    } = t,
    s = wn(e),
    c = f.useRef(!1),
    l = f.useRef(!1),
    u = f.useRef(new Map()),
    d = f.useRef(() => {});
  return (
    f.useEffect(() => {
      function e() {
        ((l.current = !1), (i.current = !1), u.current.clear());
      }
      function t() {
        return Array.from(u.current.values()).some(Boolean);
      }
      function f(e) {
        if (!l.current) return;
        let t = e.target;
        ((t instanceof Node && [...a].some((e) => e.contains(t))) ||
          u.current.set(e.type, !0),
          e.type === `click` &&
            window.setTimeout(() => {
              l.current && d.current();
            }, 0));
      }
      function p(e) {
        l.current && u.current.set(e.type, !1);
      }
      let m = (a) => {
          if (a.target && !c.current) {
            let f = function () {
              n.removeEventListener(`click`, d.current);
              let r = t();
              (e(), r || Yr(Lr, s, p, { discrete: !0 }));
            };
            if (!o(a.target)) {
              (n.removeEventListener(`click`, d.current),
                e(),
                (c.current = !1));
              return;
            }
            let p = { originalEvent: a };
            ((l.current = !0),
              (i.current = r && a.button === 0),
              u.current.clear(),
              !r || a.button !== 0
                ? f()
                : (n.removeEventListener(`click`, d.current),
                  (d.current = f),
                  n.addEventListener(`click`, d.current, { once: !0 })));
          } else (n.removeEventListener(`click`, d.current), e());
          c.current = !1;
        },
        h = [
          `pointerup`,
          `mousedown`,
          `mouseup`,
          `touchstart`,
          `touchend`,
          `click`,
        ];
      for (let e of h) (n.addEventListener(e, f, !0), n.addEventListener(e, p));
      let g = window.setTimeout(() => {
        n.addEventListener(`pointerdown`, m);
      }, 0);
      return () => {
        (window.clearTimeout(g),
          n.removeEventListener(`pointerdown`, m),
          n.removeEventListener(`click`, d.current));
        for (let e of h)
          (n.removeEventListener(e, f, !0), n.removeEventListener(e, p));
      };
    }, [n, s, r, i, a, o]),
    { onPointerDownCapture: () => (c.current = !0) }
  );
}
function qr(e, t = globalThis?.document) {
  let n = wn(e),
    r = f.useRef(!1);
  return (
    f.useEffect(() => {
      let e = (e) => {
        e.target &&
          !r.current &&
          Yr(Rr, n, { originalEvent: e }, { discrete: !1 });
      };
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Jr() {
  let e = new CustomEvent(Ir);
  document.dispatchEvent(e);
}
function Yr(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? on(i, a) : i.dispatchEvent(a));
}
var Xr = 0,
  Zr = null;
function Qr() {
  f.useEffect(() => {
    Zr ||= { start: $r(), end: $r() };
    let { start: e, end: t } = Zr;
    return (
      document.body.firstElementChild !== e &&
        document.body.insertAdjacentElement(`afterbegin`, e),
      document.body.lastElementChild !== t &&
        document.body.insertAdjacentElement(`beforeend`, t),
      Xr++,
      () => {
        (Xr === 1 && (Zr?.start.remove(), Zr?.end.remove(), (Zr = null)),
          (Xr = Math.max(0, Xr - 1)));
      }
    );
  }, []);
}
function $r() {
  let e = document.createElement(`span`);
  return (
    e.setAttribute(`data-radix-focus-guard`, ``),
    (e.tabIndex = 0),
    (e.style.outline = `none`),
    (e.style.opacity = `0`),
    (e.style.position = `fixed`),
    (e.style.pointerEvents = `none`),
    e
  );
}
var ei = `focusScope.autoFocusOnMount`,
  ti = `focusScope.autoFocusOnUnmount`,
  ni = { bubbles: !1, cancelable: !0 },
  ri = `FocusScope`,
  ii = f.forwardRef((e, t) => {
    let {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: i,
        onUnmountAutoFocus: a,
        ...o
      } = e,
      [s, c] = f.useState(null),
      l = wn(i),
      u = wn(a),
      d = f.useRef(null),
      p = W(t, c),
      m = f.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (f.useEffect(() => {
      if (r) {
        let e = function (e) {
            if (m.paused || !s) return;
            let t = e.target;
            s.contains(t) ? (d.current = t) : di(d.current, { select: !0 });
          },
          t = function (e) {
            if (m.paused || !s) return;
            let t = e.relatedTarget;
            t !== null && (s.contains(t) || di(d.current, { select: !0 }));
          },
          n = function (e) {
            if (document.activeElement === document.body)
              for (let t of e) t.removedNodes.length > 0 && di(s);
          };
        (document.addEventListener(`focusin`, e),
          document.addEventListener(`focusout`, t));
        let r = new MutationObserver(n);
        return (
          s && r.observe(s, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener(`focusin`, e),
              document.removeEventListener(`focusout`, t),
              r.disconnect());
          }
        );
      }
    }, [r, s, m.paused]),
      f.useEffect(() => {
        if (s) {
          fi.add(m);
          let e = document.activeElement;
          if (!s.contains(e)) {
            let t = new CustomEvent(ei, ni);
            (s.addEventListener(ei, l),
              s.dispatchEvent(t),
              t.defaultPrevented ||
                (ai(hi(si(s)), { select: !0 }),
                document.activeElement === e && di(s)));
          }
          return () => {
            (s.removeEventListener(ei, l),
              setTimeout(() => {
                let t = new CustomEvent(ti, ni);
                (s.addEventListener(ti, u),
                  s.dispatchEvent(t),
                  t.defaultPrevented || di(e ?? document.body, { select: !0 }),
                  s.removeEventListener(ti, u),
                  fi.remove(m));
              }, 0));
          };
        }
      }, [s, l, u, m]));
    let h = f.useCallback(
      (e) => {
        if ((!n && !r) || m.paused) return;
        let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
          i = document.activeElement;
        if (t && i) {
          let t = e.currentTarget,
            [r, a] = oi(t);
          r && a
            ? !e.shiftKey && i === a
              ? (e.preventDefault(), n && di(r, { select: !0 }))
              : e.shiftKey &&
                i === r &&
                (e.preventDefault(), n && di(a, { select: !0 }))
            : i === t && e.preventDefault();
        }
      },
      [n, r, m.paused],
    );
    return (0, X.jsx)(Z.div, { tabIndex: -1, ...o, ref: p, onKeyDown: h });
  });
ii.displayName = ri;
function ai(e, { select: t = !1 } = {}) {
  let n = document.activeElement;
  for (let r of e)
    if ((di(r, { select: t }), document.activeElement !== n)) return;
}
function oi(e) {
  let t = si(e);
  return [ci(t, e), ci(t.reverse(), e)];
}
function si(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function ci(e, t) {
  let n =
    typeof t.checkVisibility == `function` &&
    t.checkVisibility({ checkVisibilityCSS: !0 });
  for (let r of e)
    if (
      !(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : li(r, { upTo: t }))
    )
      return r;
}
function li(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === `hidden`) return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === `none`) return !0;
    e = e.parentElement;
  }
  return !1;
}
function ui(e) {
  return e instanceof HTMLInputElement && `select` in e;
}
function di(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && ui(e) && t && e.select());
  }
}
var fi = pi();
function pi() {
  let e = [];
  return {
    add(t) {
      let n = e[0];
      (t !== n && n?.pause(), (e = mi(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = mi(e, t)), e[0]?.resume());
    },
  };
}
function mi(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
function hi(e) {
  return e.filter((e) => e.tagName !== `A`);
}
var gi = [`top`, `right`, `bottom`, `left`],
  _i = Math.min,
  vi = Math.max,
  yi = Math.round,
  bi = Math.floor,
  xi = (e) => ({ x: e, y: e }),
  Si = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function Ci(e, t, n) {
  return vi(e, _i(t, n));
}
function wi(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Ti(e) {
  return e.split(`-`)[0];
}
function Ei(e) {
  return e.split(`-`)[1];
}
function Di(e) {
  return e === `x` ? `y` : `x`;
}
function Oi(e) {
  return e === `y` ? `height` : `width`;
}
function ki(e) {
  let t = e[0];
  return t === `t` || t === `b` ? `y` : `x`;
}
function Ai(e) {
  return Di(ki(e));
}
function ji(e, t, n) {
  n === void 0 && (n = !1);
  let r = Ei(e),
    i = Ai(e),
    a = Oi(i),
    o =
      i === `x`
        ? r === (n ? `end` : `start`)
          ? `right`
          : `left`
        : r === `start`
          ? `bottom`
          : `top`;
  return (t.reference[a] > t.floating[a] && (o = Bi(o)), [o, Bi(o)]);
}
function Mi(e) {
  let t = Bi(e);
  return [Ni(e), t, Ni(t)];
}
function Ni(e) {
  return e.includes(`start`)
    ? e.replace(`start`, `end`)
    : e.replace(`end`, `start`);
}
var Pi = [`left`, `right`],
  Fi = [`right`, `left`],
  Ii = [`top`, `bottom`],
  Li = [`bottom`, `top`];
function Ri(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? (t ? Fi : Pi) : t ? Pi : Fi;
    case `left`:
    case `right`:
      return t ? Ii : Li;
    default:
      return [];
  }
}
function zi(e, t, n, r) {
  let i = Ei(e),
    a = Ri(Ti(e), n === `start`, r);
  return (
    i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(Ni)))),
    a
  );
}
function Bi(e) {
  let t = Ti(e);
  return Si[t] + e.slice(t.length);
}
function Vi(e) {
  return {
    top: e.top ?? 0,
    right: e.right ?? 0,
    bottom: e.bottom ?? 0,
    left: e.left ?? 0,
  };
}
function Hi(e) {
  return typeof e == `number`
    ? { top: e, right: e, bottom: e, left: e }
    : Vi(e);
}
function Ui(e) {
  let { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function Wi(e, t, n) {
  let { reference: r, floating: i } = e,
    a = ki(t),
    o = Ai(t),
    s = Oi(o),
    c = Ti(t),
    l = a === `y`,
    u = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[s] / 2 - i[s] / 2,
    p;
  switch (c) {
    case `top`:
      p = { x: u, y: r.y - i.height };
      break;
    case `bottom`:
      p = { x: u, y: r.y + r.height };
      break;
    case `right`:
      p = { x: r.x + r.width, y: d };
      break;
    case `left`:
      p = { x: r.x - i.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  let m = Ei(t);
  return (m && (p[o] += f * (m === `end` ? 1 : -1) * (n && l ? -1 : 1)), p);
}
async function Gi(e, t) {
  t === void 0 && (t = {});
  let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
    {
      boundary: c = `clippingAncestors`,
      rootBoundary: l = `viewport`,
      elementContext: u = `floating`,
      altBoundary: d = !1,
      padding: f = 0,
    } = wi(t, e),
    p = Hi(f),
    m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
    h = Ui(
      await i.getClippingRect({
        element:
          ((await (i.isElement == null ? void 0 : i.isElement(m))) ?? !0)
            ? m
            : m.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(o.floating))),
        boundary: c,
        rootBoundary: l,
        strategy: s,
      }),
    ),
    g =
      u === `floating`
        ? { x: n, y: r, width: a.floating.width, height: a.floating.height }
        : a.reference,
    _ = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(o.floating)),
    v = ((await (i.isElement == null ? void 0 : i.isElement(_))) &&
      (await (i.getScale == null ? void 0 : i.getScale(_)))) || { x: 1, y: 1 },
    y = Ui(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: o,
            rect: g,
            offsetParent: _,
            strategy: s,
          })
        : g,
    );
  return {
    top: (h.top - y.top + p.top) / v.y,
    bottom: (y.bottom - h.bottom + p.bottom) / v.y,
    left: (h.left - y.left + p.left) / v.x,
    right: (y.right - h.right + p.right) / v.x,
  };
}
var Ki = 50,
  qi = async (e, t, n) => {
    let {
        placement: r = `bottom`,
        strategy: i = `absolute`,
        middleware: a = [],
        platform: o,
      } = n,
      s = o.detectOverflow ? o : { ...o, detectOverflow: Gi },
      c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
      l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
      { x: u, y: d } = Wi(l, r, c),
      f = r,
      p = 0,
      m = {};
    for (let n = 0; n < a.length; n++) {
      let h = a[n];
      if (!h) continue;
      let { name: g, fn: _ } = h,
        {
          x: v,
          y,
          data: b,
          reset: x,
        } = await _({
          x: u,
          y: d,
          initialPlacement: r,
          placement: f,
          strategy: i,
          middlewareData: m,
          rects: l,
          platform: s,
          elements: { reference: e, floating: t },
        });
      ((u = v ?? u),
        (d = y ?? d),
        (m[g] = { ...m[g], ...b }),
        x &&
          p < Ki &&
          (p++,
          typeof x == `object` &&
            (x.placement && (f = x.placement),
            x.rects &&
              (l =
                x.rects === !0
                  ? await o.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: i,
                    })
                  : x.rects),
            ({ x: u, y: d } = Wi(l, f, c))),
          (n = -1)));
    }
    return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
  },
  Ji = (e) => ({
    name: `arrow`,
    options: e,
    async fn(t) {
      let {
          x: n,
          y: r,
          placement: i,
          rects: a,
          platform: o,
          elements: s,
          middlewareData: c,
        } = t,
        { element: l, padding: u = 0 } = wi(e, t) || {};
      if (l == null) return {};
      let d = Hi(u),
        f = { x: n, y: r },
        p = Ai(i),
        m = Oi(p),
        h = await o.getDimensions(l),
        g = p === `y`,
        _ = g ? `top` : `left`,
        v = g ? `bottom` : `right`,
        y = g ? `clientHeight` : `clientWidth`,
        b = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
        x = f[p] - a.reference[p],
        S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)),
        C = S ? S[y] : 0;
      (!C || !(await (o.isElement == null ? void 0 : o.isElement(S)))) &&
        (C = s.floating[y] || a.floating[m]);
      let w = b / 2 - x / 2,
        T = C / 2 - h[m] / 2 - 1,
        E = _i(d[_], T),
        D = _i(d[v], T),
        O = C - h[m] - D,
        k = C / 2 - h[m] / 2 + w,
        A = Ci(E, k, O),
        j =
          !c.arrow &&
          Ei(i) != null &&
          k !== A &&
          a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0,
        M = j ? (k < E ? k - E : k - O) : 0;
      return {
        [p]: f[p] + M,
        data: {
          [p]: A,
          centerOffset: k - A - M,
          ...(j && { alignmentOffset: M }),
        },
        reset: j,
      };
    },
  }),
  Yi = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `flip`,
        options: e,
        async fn(t) {
          var n;
          let {
              placement: r,
              middlewareData: i,
              rects: a,
              initialPlacement: o,
              platform: s,
              elements: c,
            } = t,
            {
              mainAxis: l = !0,
              crossAxis: u = !0,
              fallbackPlacements: d,
              fallbackStrategy: f = `bestFit`,
              fallbackAxisSideDirection: p = `none`,
              flipAlignment: m = !0,
              ...h
            } = wi(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          let g = Ti(r),
            _ = ki(o),
            v = Ti(o) === o,
            y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
            b = d || (v || !m ? [Bi(o)] : Mi(o)),
            x = p !== `none`;
          !d && x && b.push(...zi(o, m, p, y));
          let S = [o, ...b],
            C = await s.detectOverflow(t, h),
            w = [],
            T = i.flip?.overflows || [];
          if ((l && w.push(C[g]), u)) {
            let e = ji(r, a, y);
            w.push(C[e[0]], C[e[1]]);
          }
          if (
            ((T = [...T, { placement: r, overflows: w }]),
            !w.every((e) => e <= 0))
          ) {
            let e = (i.flip?.index || 0) + 1,
              t = S[e];
            if (
              t &&
              (!(u === `alignment` && _ !== ki(t)) ||
                T.every((e) => ki(e.placement) !== _ || e.overflows[0] > 0))
            )
              return {
                data: { index: e, overflows: T },
                reset: { placement: t },
              };
            let n = T.filter((e) => e.overflows[0] <= 0).sort(
              (e, t) => e.overflows[1] - t.overflows[1],
            )[0]?.placement;
            if (!n)
              switch (f) {
                case `bestFit`: {
                  let e = T.filter((e) => {
                    if (x) {
                      let t = ki(e.placement);
                      return t === _ || t === `y`;
                    }
                    return !0;
                  })
                    .map((e) => [
                      e.placement,
                      e.overflows
                        .filter((e) => e > 0)
                        .reduce((e, t) => e + t, 0),
                    ])
                    .sort((e, t) => e[1] - t[1])[0]?.[0];
                  e && (n = e);
                  break;
                }
                case `initialPlacement`:
                  n = o;
                  break;
              }
            if (r !== n) return { reset: { placement: n } };
          }
          return {};
        },
      }
    );
  };
function Xi(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Zi(e) {
  return gi.some((t) => e[t] >= 0);
}
var Qi = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `hide`,
        options: e,
        async fn(t) {
          let { rects: n, platform: r } = t,
            { strategy: i = `referenceHidden`, ...a } = wi(e, t);
          switch (i) {
            case `referenceHidden`: {
              let e = Xi(
                await r.detectOverflow(t, {
                  ...a,
                  elementContext: `reference`,
                }),
                n.reference,
              );
              return {
                data: { referenceHiddenOffsets: e, referenceHidden: Zi(e) },
              };
            }
            case `escaped`: {
              let e = Xi(
                await r.detectOverflow(t, { ...a, altBoundary: !0 }),
                n.floating,
              );
              return { data: { escapedOffsets: e, escaped: Zi(e) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  $i = new Set([`left`, `top`]);
async function ea(e, t) {
  let { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = Ti(n),
    s = Ei(n),
    c = ki(n) === `y`,
    l = $i.has(o) ? -1 : 1,
    u = a && c ? -1 : 1,
    d = wi(t, e),
    {
      mainAxis: f,
      crossAxis: p,
      alignmentAxis: m,
    } = typeof d == `number`
      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: d.mainAxis || 0,
          crossAxis: d.crossAxis || 0,
          alignmentAxis: d.alignmentAxis,
        };
  return (
    s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
    c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
  );
}
var ta = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: `offset`,
        options: e,
        async fn(t) {
          var n;
          let { x: r, y: i, placement: a, middlewareData: o } = t,
            s = await ea(t, e);
          return a === o.offset?.placement &&
            (n = o.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
        },
      }
    );
  },
  na = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `shift`,
        options: e,
        async fn(t) {
          let { x: n, y: r, placement: i, platform: a } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (e) => {
                  let { x: t, y: n } = e;
                  return { x: t, y: n };
                },
              },
              ...l
            } = wi(e, t),
            u = { x: n, y: r },
            d = await a.detectOverflow(t, l),
            f = ki(i),
            p = Di(f),
            m = u[p],
            h = u[f],
            g = (e, t) =>
              Ci(
                t + d[e === `y` ? `top` : `left`],
                t,
                t - d[e === `y` ? `bottom` : `right`],
              );
          (o && (m = g(p, m)), s && (h = g(f, h)));
          let _ = c.fn({ ...t, [p]: m, [f]: h });
          return {
            ..._,
            data: { x: _.x - n, y: _.y - r, enabled: { [p]: o, [f]: s } },
          };
        },
      }
    );
  },
  ra = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t,
            { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = wi(e, t),
            u = { x: n, y: r },
            d = ki(i),
            f = Di(d),
            p = u[f],
            m = u[d],
            h = wi(s, t),
            g =
              typeof h == `number`
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: h.mainAxis ?? 0, crossAxis: h.crossAxis ?? 0 };
          if (c) {
            let e = f === `y` ? `height` : `width`,
              t = a.reference[f] - a.floating[e] + g.mainAxis,
              n = a.reference[f] + a.reference[e] - g.mainAxis;
            p < t ? (p = t) : p > n && (p = n);
          }
          if (l) {
            let e = f === `y` ? `width` : `height`,
              t = $i.has(Ti(i)),
              n =
                a.reference[d] -
                a.floating[e] +
                ((t && o.offset?.[d]) || 0) +
                (t ? 0 : g.crossAxis),
              r =
                a.reference[d] +
                a.reference[e] +
                (t ? 0 : o.offset?.[d] || 0) -
                (t ? g.crossAxis : 0);
            m < n ? (m = n) : m > r && (m = r);
          }
          return { [f]: p, [d]: m };
        },
      }
    );
  },
  ia = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `size`,
        options: e,
        async fn(t) {
          let { placement: n, rects: r, platform: i, elements: a } = t,
            { apply: o = () => {}, ...s } = wi(e, t),
            c = await i.detectOverflow(t, s),
            l = Ti(n),
            u = Ei(n),
            d = ki(n) === `y`,
            { width: f, height: p } = r.floating,
            m,
            h;
          l === `top` || l === `bottom`
            ? ((m = l),
              (h =
                u ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                  ? `start`
                  : `end`)
                  ? `left`
                  : `right`))
            : ((h = l), (m = u === `end` ? `top` : `bottom`));
          let g = p - c.top - c.bottom,
            _ = f - c.left - c.right,
            v = _i(p - c[m], g),
            y = _i(f - c[h], _),
            b = t.middlewareData.shift,
            x = !b,
            S = v,
            C = y;
          (b != null && b.enabled.x && (C = _),
            b != null && b.enabled.y && (S = g),
            x &&
              !u &&
              (d
                ? (C = f - 2 * vi(c.left, c.right))
                : (S = p - 2 * vi(c.top, c.bottom))),
            await o({ ...t, availableWidth: C, availableHeight: S }));
          let w = await i.getDimensions(a.floating);
          return f !== w.width || p !== w.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function aa() {
  return typeof window < `u`;
}
function oa(e) {
  return la(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function sa(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function ca(e) {
  return ((la(e) ? e.ownerDocument : e.document) || window.document)
    ?.documentElement;
}
function la(e) {
  return aa() ? e instanceof Node || e instanceof sa(e).Node : !1;
}
function ua(e) {
  return aa() ? e instanceof Element || e instanceof sa(e).Element : !1;
}
function da(e) {
  return aa() ? e instanceof HTMLElement || e instanceof sa(e).HTMLElement : !1;
}
function fa(e) {
  return !aa() || typeof ShadowRoot > `u`
    ? !1
    : e instanceof ShadowRoot || e instanceof sa(e).ShadowRoot;
}
function pa(e) {
  let { overflow: t, overflowX: n, overflowY: r, display: i } = wa(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    i !== `inline` &&
    i !== `contents`
  );
}
function ma(e) {
  return /^(table|td|th)$/.test(oa(e));
}
function ha(e) {
  try {
    if (e.matches(`:popover-open`)) return !0;
  } catch {}
  try {
    return e.matches(`:modal`);
  } catch {
    return !1;
  }
}
var ga = /transform|translate|scale|rotate|perspective|filter/,
  _a = /paint|layout|strict|content/,
  va = (e) => !!e && e !== `none`,
  ya;
function ba(e) {
  let t = ua(e) ? wa(e) : e;
  return (
    va(t.transform) ||
    va(t.translate) ||
    va(t.scale) ||
    va(t.rotate) ||
    va(t.perspective) ||
    (!Sa() && (va(t.backdropFilter) || va(t.filter))) ||
    ga.test(t.willChange || ``) ||
    _a.test(t.contain || ``)
  );
}
function xa(e) {
  let t = Ea(e);
  for (; da(t) && !Ca(t);) {
    if (ba(t)) return t;
    if (ha(t)) return null;
    t = Ea(t);
  }
  return null;
}
function Sa() {
  return (
    (ya ??=
      typeof CSS < `u` &&
      CSS.supports &&
      CSS.supports(`-webkit-backdrop-filter`, `none`)),
    ya
  );
}
function Ca(e) {
  return /^(html|body|#document)$/.test(oa(e));
}
function wa(e) {
  return sa(e).getComputedStyle(e);
}
function Ta(e) {
  return ua(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Ea(e) {
  if (oa(e) === `html`) return e;
  let t = e.assignedSlot || e.parentNode || (fa(e) && e.host) || ca(e);
  return fa(t) ? t.host : t;
}
function Da(e) {
  let t = Ea(e);
  return Ca(t) ? (e.ownerDocument || e).body : da(t) && pa(t) ? t : Da(t);
}
function Oa(e, t, n) {
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  let r = Da(e),
    i = r === e.ownerDocument?.body,
    a = sa(r);
  if (i) {
    let e = ka(a);
    return t.concat(
      a,
      a.visualViewport || [],
      pa(r) ? r : [],
      e && n ? Oa(e) : [],
    );
  } else return t.concat(r, Oa(r, [], n));
}
function ka(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Aa(e) {
  let t = wa(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = da(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = yi(n) !== a || yi(r) !== o;
  return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function ja(e) {
  return ua(e) ? e : e.contextElement;
}
function Ma(e) {
  let t = ja(e);
  if (!da(t)) return xi(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = Aa(t),
    o = (a ? yi(n.width) : n.width) / r,
    s = (a ? yi(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
var Na = xi(0);
function Pa(e) {
  let t = sa(e);
  return !Sa() || !t.visualViewport
    ? Na
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Fa(e, t, n) {
  return (t === void 0 && (t = !1), !!n && t && n === sa(e));
}
function Ia(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let i = e.getBoundingClientRect(),
    a = ja(e),
    o = xi(1);
  t && (r ? ua(r) && (o = Ma(r)) : (o = Ma(e)));
  let s = Fa(a, n, r) ? Pa(a) : xi(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (a && r) {
    let e = sa(a),
      t = ua(r) ? sa(r) : r,
      n = e,
      i = ka(n);
    for (; i && t !== n;) {
      let e = Ma(i),
        t = i.getBoundingClientRect(),
        r = wa(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      ((c *= e.x),
        (l *= e.y),
        (u *= e.x),
        (d *= e.y),
        (c += a),
        (l += o),
        (n = sa(i)),
        (i = ka(n)));
    }
  }
  return Ui({ width: u, height: d, x: c, y: l });
}
function La(e, t) {
  let n = Ta(e).scrollLeft;
  return t ? t.left + n : Ia(ca(e)).left + n;
}
function Ra(e, t) {
  let n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - La(e, n), y: n.top + t.scrollTop };
}
function za(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = ca(r),
    s = t ? ha(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = xi(1),
    u = xi(0),
    d = da(r);
  if ((d || !a) && ((oa(r) !== `body` || pa(o)) && (c = Ta(r)), d)) {
    let e = Ia(r);
    ((l = Ma(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
  }
  let f = o && !d && !a ? Ra(o, c) : xi(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function Ba(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Va(e) {
  let t = Ta(e),
    n = e.ownerDocument.body,
    r = vi(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
    i = vi(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
    a = -t.scrollLeft + La(e),
    o = -t.scrollTop;
  return (
    wa(n).direction === `rtl` && (a += vi(e.clientWidth, n.clientWidth) - r),
    { width: r, height: i, x: a, y: o }
  );
}
var Ha = 25;
function Ua(e, t, n) {
  n === void 0 && (n = `viewport`);
  let r = n === `layoutViewport`,
    i = sa(e),
    a = ca(e),
    o = i.visualViewport,
    s = a.clientWidth,
    c = a.clientHeight,
    l = 0,
    u = 0;
  if (o) {
    let e = !Sa() || t === `fixed`;
    r
      ? e || ((l = -o.offsetLeft), (u = -o.offsetTop))
      : ((s = o.width),
        (c = o.height),
        e && ((l = o.offsetLeft), (u = o.offsetTop)));
  }
  if (La(a) <= 0) {
    let e = a.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      r =
        (e.compatMode === `CSS1Compat` &&
          parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
        0,
      i = Math.abs(a.clientWidth - t.clientWidth - r),
      o =
        getComputedStyle(a).scrollbarGutter === `stable both-edges` ? i / 2 : i;
    o <= Ha && (s -= o);
  }
  return { width: s, height: c, x: l, y: u };
}
function Wa(e, t) {
  let n = Ia(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = Ma(e);
  return {
    width: e.clientWidth * a.x,
    height: e.clientHeight * a.y,
    x: i * a.x,
    y: r * a.y,
  };
}
function Ga(e, t, n) {
  let r;
  if (t === `viewport` || t === `layoutViewport`) r = Ua(e, n, t);
  else if (t === `document`) r = Va(ca(e));
  else if (ua(t)) r = Wa(t, n);
  else {
    let n = Pa(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return Ui(r);
}
function Ka(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = Oa(e, [], !1).filter((e) => ua(e) && oa(e) !== `body`),
    i = null,
    a = wa(e).position === `fixed`,
    o = a ? Ea(e) : e;
  for (; ua(o) && !Ca(o);) {
    let e = wa(o),
      t = ba(o),
      n = i ? i.position : a ? `fixed` : ``;
    (!t && (n === `fixed` || (n === `absolute` && e.position === `static`))
      ? (r = r.filter((e) => e !== o))
      : (i = e),
      (o = Ea(o)));
  }
  return (t.set(e, r), r);
}
function qa(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [
      ...(n === `clippingAncestors`
        ? ha(t)
          ? []
          : Ka(t, this._c)
        : [].concat(n)),
      r,
    ],
    o = Ga(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = Ga(t, a[e], i);
    ((s = vi(n.top, s)),
      (c = _i(n.right, c)),
      (l = _i(n.bottom, l)),
      (u = vi(n.left, u)));
  }
  return { width: c - u, height: l - s, x: u, y: s };
}
function Ja(e) {
  let { width: t, height: n } = Aa(e);
  return { width: t, height: n };
}
function Ya(e, t, n) {
  let r = da(t),
    i = ca(t),
    a = n === `fixed`,
    o = Ia(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = xi(0);
  if ((r || !a) && ((oa(t) !== `body` || pa(i)) && (s = Ta(t)), r)) {
    let e = Ia(t, !0, a, t);
    ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
  }
  !r && i && (c.x = La(i));
  let l = i && !r && !a ? Ra(i, s) : xi(0);
  return {
    x: o.left + s.scrollLeft - c.x - l.x,
    y: o.top + s.scrollTop - c.y - l.y,
    width: o.width,
    height: o.height,
  };
}
function Xa(e) {
  return wa(e).position === `static`;
}
function Za(e, t) {
  if (!da(e) || wa(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (ca(e) === n && (n = n.ownerDocument.body), n);
}
function Qa(e, t) {
  let n = sa(e);
  if (ha(e)) return n;
  if (!da(e)) {
    let t = Ea(e);
    for (; t && !Ca(t);) {
      if (ua(t) && !Xa(t)) return t;
      t = Ea(t);
    }
    return n;
  }
  let r = Za(e, t);
  for (; r && ma(r) && Xa(r);) r = Za(r, t);
  return r && Ca(r) && Xa(r) && !ba(r) ? n : r || xa(e) || n;
}
var $a = async function (e) {
  let t = this.getOffsetParent || Qa,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Ya(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function eo(e) {
  return wa(e).direction === `rtl`;
}
var to = {
  convertOffsetParentRelativeRectToViewportRelativeRect: za,
  getDocumentElement: ca,
  getClippingRect: qa,
  getOffsetParent: Qa,
  getElementRects: $a,
  getClientRects: Ba,
  getDimensions: Ja,
  getScale: Ma,
  isElement: ua,
  isRTL: eo,
};
function no(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function ro(e, t, n) {
  let r = null,
    i,
    a = ca(e);
  function o() {
    var e;
    (clearTimeout(i), (e = r) == null || e.disconnect(), (r = null));
  }
  function s(n, c) {
    (n === void 0 && (n = !1), c === void 0 && (c = 1), o());
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if ((n || t(), !f || !p)) return;
    let m = bi(d),
      h = bi(a.clientWidth - (u + f)),
      g = bi(a.clientHeight - (d + p)),
      _ = bi(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: vi(0, _i(1, c)) || 1,
      },
      y = !0;
    function b(t) {
      let n = t[0].intersectionRatio;
      if (!no(l, e.getBoundingClientRect())) return s();
      if (n !== c) {
        if (!y) return s();
        n
          ? s(!1, n)
          : (i = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      r = new IntersectionObserver(b, { ...v, root: a.ownerDocument });
    } catch {
      r = new IntersectionObserver(b, v);
    }
    r.observe(e);
  }
  let c = sa(e),
    l = () => s(n);
  return (
    c.addEventListener(`resize`, l),
    s(!0),
    () => {
      (c.removeEventListener(`resize`, l), o());
    }
  );
}
function io(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == `function`,
      layoutShift: s = typeof IntersectionObserver == `function`,
      animationFrame: c = !1,
    } = r,
    l = ja(e),
    u = i || a ? [...(l ? Oa(l) : []), ...(t ? Oa(t) : [])] : [];
  u.forEach((e) => {
    (i && e.addEventListener(`scroll`, n),
      a && e.addEventListener(`resize`, n));
  });
  let d = l && s ? ro(l, n, a) : null,
    f = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((e) => {
      let [r] = e;
      (r &&
        r.target === l &&
        p &&
        t &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var e;
          (e = p) == null || e.observe(t);
        }))),
        n());
    })),
    l && !c && p.observe(l),
    t && p.observe(t));
  let m,
    h = c ? Ia(e) : null;
  c && g();
  function g() {
    let t = Ia(e);
    (h && !no(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
  }
  return (
    n(),
    () => {
      var e;
      (u.forEach((e) => {
        (i && e.removeEventListener(`scroll`, n),
          a && e.removeEventListener(`resize`, n));
      }),
        d?.(),
        (e = p) == null || e.disconnect(),
        (p = null),
        c && cancelAnimationFrame(m));
    }
  );
}
var ao = ta,
  oo = na,
  so = Yi,
  co = ia,
  lo = Qi,
  uo = Ji,
  fo = ra,
  po = (e, t, n) => {
    let r = new Map(),
      i = n ?? {},
      a = { ...to, ...i.platform, _c: r };
    return qi(e, t, { ...i, platform: a });
  },
  mo = typeof document < `u` ? f.useLayoutEffect : function () {};
function ho(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == `function` && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0;) if (!ho(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0;) {
      let n = i[r];
      if (!(n === `_owner` && e.$$typeof) && !ho(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function go(e) {
  return typeof window > `u`
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _o(e, t) {
  let n = go(e);
  return Math.round(t * n) / n;
}
function vo(e) {
  let t = f.useRef(e);
  return (
    mo(() => {
      t.current = e;
    }),
    t
  );
}
function yo(e) {
  e === void 0 && (e = {});
  let {
      placement: t = `bottom`,
      strategy: n = `absolute`,
      middleware: r = [],
      platform: i,
      elements: { reference: a, floating: o } = {},
      transform: s = !0,
      whileElementsMounted: c,
      open: l,
    } = e,
    [u, d] = f.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [p, m] = f.useState(r);
  ho(p, r) || m(r);
  let [h, g] = f.useState(null),
    [_, v] = f.useState(null),
    y = f.useCallback((e) => {
      e !== C.current && ((C.current = e), g(e));
    }, []),
    b = f.useCallback((e) => {
      e !== w.current && ((w.current = e), v(e));
    }, []),
    x = a || h,
    S = o || _,
    C = f.useRef(null),
    w = f.useRef(null),
    E = f.useRef(u),
    D = c != null,
    O = vo(c),
    k = vo(i),
    A = vo(l),
    j = f.useCallback(() => {
      if (!C.current || !w.current) return;
      let e = { placement: t, strategy: n, middleware: p };
      (k.current && (e.platform = k.current),
        po(C.current, w.current, e).then((e) => {
          let t = { ...e, isPositioned: A.current !== !1 };
          M.current &&
            !ho(E.current, t) &&
            ((E.current = t),
            T.flushSync(() => {
              d(t);
            }));
        }));
    }, [p, t, n, k, A]);
  mo(() => {
    l === !1 &&
      E.current.isPositioned &&
      ((E.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
  }, [l]);
  let M = f.useRef(!1);
  (mo(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    [],
  ),
    mo(() => {
      if ((x && (C.current = x), S && (w.current = S), x && S)) {
        if (O.current) return O.current(x, S, j);
        j();
      }
    }, [x, S, j, O, D]));
  let N = f.useMemo(
      () => ({ reference: C, floating: w, setReference: y, setFloating: b }),
      [y, b],
    ),
    P = f.useMemo(() => ({ reference: x, floating: S }), [x, S]),
    F = f.useMemo(() => {
      let e = { position: n, left: 0, top: 0 };
      if (!P.floating) return e;
      let t = _o(P.floating, u.x),
        r = _o(P.floating, u.y);
      return s
        ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...(go(P.floating) >= 1.5 && { willChange: `transform` }),
          }
        : { position: n, left: t, top: r };
    }, [n, s, P.floating, u.x, u.y]);
  return f.useMemo(
    () => ({ ...u, update: j, refs: N, elements: P, floatingStyles: F }),
    [u, j, N, P, F],
  );
}
var bo = (e) => {
    function t(e) {
      return {}.hasOwnProperty.call(e, `current`);
    }
    return {
      name: `arrow`,
      options: e,
      fn(n) {
        let { element: r, padding: i } = typeof e == `function` ? e(n) : e;
        return r && t(r)
          ? r.current == null
            ? {}
            : uo({ element: r.current, padding: i }).fn(n)
          : r
            ? uo({ element: r, padding: i }).fn(n)
            : {};
      },
    };
  },
  xo = (e, t) => {
    let n = ao(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  So = (e, t) => {
    let n = oo(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Co = (e, t) => ({ fn: fo(e).fn, options: [e, t] }),
  wo = (e, t) => {
    let n = so(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  To = (e, t) => {
    let n = co(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Eo = (e, t) => {
    let n = lo(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Do = (e, t) => {
    let n = bo(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Oo = `Arrow`,
  ko = f.forwardRef((e, t) => {
    let { children: n, width: r = 10, height: i = 5, ...a } = e;
    return (0, X.jsx)(Z.svg, {
      ...a,
      ref: t,
      width: r,
      height: i,
      viewBox: `0 0 30 10`,
      preserveAspectRatio: `none`,
      children: e.asChild
        ? n
        : (0, X.jsx)(`polygon`, { points: `0,0 30,0 15,10` }),
    });
  });
ko.displayName = Oo;
var Ao = ko;
function jo(e) {
  let [t, n] = f.useState(void 0);
  return (
    $(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        let t = new ResizeObserver((t) => {
          if (!Array.isArray(t) || !t.length) return;
          let r = t[0],
            i,
            a;
          if (`borderBoxSize` in r) {
            let e = r.borderBoxSize,
              t = Array.isArray(e) ? e[0] : e;
            ((i = t.inlineSize), (a = t.blockSize));
          } else ((i = e.offsetWidth), (a = e.offsetHeight));
          n({ width: i, height: a });
        });
        return (t.observe(e, { box: `border-box` }), () => t.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Mo = `Popper`,
  [No, Po] = vn(Mo),
  [Fo, Io] = No(Mo),
  Lo = (e) => {
    let { __scopePopper: t, children: n } = e,
      [r, i] = f.useState(null),
      [a, o] = f.useState(void 0);
    return (0, X.jsx)(Fo, {
      scope: t,
      anchor: r,
      onAnchorChange: i,
      placementState: a,
      setPlacementState: o,
      children: n,
    });
  };
Lo.displayName = Mo;
var Ro = `PopperAnchor`,
  zo = f.forwardRef((e, t) => {
    let { __scopePopper: n, virtualRef: r, ...i } = e,
      a = Io(Ro, n),
      o = f.useRef(null),
      s = a.onAnchorChange,
      c = W(
        t,
        f.useCallback(
          (e) => {
            ((o.current = e), e && s(e));
          },
          [s],
        ),
      ),
      l = f.useRef(null);
    f.useEffect(() => {
      if (!r) return;
      let e = l.current;
      ((l.current = r.current), e !== l.current && s(l.current));
    });
    let u = a.placementState && Yo(a.placementState),
      d = u?.[0],
      p = u?.[1];
    return r
      ? null
      : (0, X.jsx)(Z.div, {
          "data-radix-popper-side": d,
          "data-radix-popper-align": p,
          ...i,
          ref: c,
        });
  });
zo.displayName = Ro;
var Bo = `PopperContent`,
  [Vo, Ho] = No(Bo),
  Uo = f.forwardRef((e, t) => {
    let {
        __scopePopper: n,
        side: r = `bottom`,
        sideOffset: i = 0,
        align: a = `center`,
        alignOffset: o = 0,
        arrowPadding: s = 0,
        avoidCollisions: c = !0,
        collisionBoundary: l = [],
        collisionPadding: u = 0,
        sticky: d = `partial`,
        hideWhenDetached: p = !1,
        updatePositionStrategy: m = `optimized`,
        onPlaced: h,
        ...g
      } = e,
      _ = Io(Bo, n),
      [v, y] = f.useState(null),
      b = W(t, y),
      [x, S] = f.useState(null),
      C = jo(x),
      w = C?.width ?? 0,
      T = C?.height ?? 0,
      E = r + (a === `center` ? `` : `-` + a),
      D =
        typeof u == `number`
          ? u
          : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      O = Array.isArray(l) ? l : [l],
      k = O.length > 0,
      A = { padding: D, boundary: O.filter(qo), altBoundary: k },
      {
        refs: j,
        floatingStyles: M,
        placement: N,
        isPositioned: P,
        middlewareData: F,
      } = yo({
        strategy: `fixed`,
        placement: E,
        whileElementsMounted: (...e) =>
          io(...e, { animationFrame: m === `always` }),
        elements: { reference: _.anchor },
        middleware: [
          xo({ mainAxis: i + T, alignmentAxis: o }),
          c &&
            So({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === `partial` ? Co() : void 0,
              ...A,
            }),
          c && wo({ ...A }),
          To({
            ...A,
            apply: ({
              elements: e,
              rects: t,
              availableWidth: n,
              availableHeight: r,
            }) => {
              let { width: i, height: a } = t.reference,
                o = e.floating.style;
              (o.setProperty(`--radix-popper-available-width`, `${n}px`),
                o.setProperty(`--radix-popper-available-height`, `${r}px`),
                o.setProperty(`--radix-popper-anchor-width`, `${i}px`),
                o.setProperty(`--radix-popper-anchor-height`, `${a}px`));
            },
          }),
          x && Do({ element: x, padding: s }),
          Jo({ arrowWidth: w, arrowHeight: T }),
          p &&
            Eo({
              strategy: `referenceHidden`,
              ...A,
              boundary: k ? A.boundary : void 0,
            }),
        ],
      }),
      I = _.setPlacementState;
    $(
      () => (
        I(N),
        () => {
          I(void 0);
        }
      ),
      [N, I],
    );
    let [L, R] = Yo(N),
      ee = wn(h);
    $(() => {
      P && ee?.();
    }, [P, ee]);
    let z = F.arrow?.x,
      B = F.arrow?.y,
      V = F.arrow?.centerOffset !== 0,
      [te, ne] = f.useState();
    return (
      $(() => {
        v && ne(window.getComputedStyle(v).zIndex);
      }, [v]),
      (0, X.jsx)(`div`, {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": ``,
        style: {
          ...M,
          transform: P ? M.transform : `translate(0, -200%)`,
          minWidth: `max-content`,
          zIndex: te,
          "--radix-popper-transform-origin": [
            F.transformOrigin?.x,
            F.transformOrigin?.y,
          ].join(` `),
          ...(F.hide?.referenceHidden && {
            visibility: `hidden`,
            pointerEvents: `none`,
          }),
        },
        dir: e.dir,
        children: (0, X.jsx)(Vo, {
          scope: n,
          placedSide: L,
          placedAlign: R,
          onArrowChange: S,
          arrowX: z,
          arrowY: B,
          shouldHideArrow: V,
          children: (0, X.jsx)(Z.div, {
            "data-side": L,
            "data-align": R,
            ...g,
            ref: b,
            style: { ...g.style, animation: P ? void 0 : `none` },
          }),
        }),
      })
    );
  });
Uo.displayName = Bo;
var Wo = `PopperArrow`,
  Go = { top: `bottom`, right: `left`, bottom: `top`, left: `right` },
  Ko = f.forwardRef(function (e, t) {
    let { __scopePopper: n, ...r } = e,
      i = Ho(Wo, n),
      a = Go[i.placedSide];
    return (0, X.jsx)(`span`, {
      ref: i.onArrowChange,
      style: {
        position: `absolute`,
        left: i.arrowX,
        top: i.arrowY,
        [a]: 0,
        transformOrigin: {
          top: ``,
          right: `0 0`,
          bottom: `center 0`,
          left: `100% 0`,
        }[i.placedSide],
        transform: {
          top: `translateY(100%)`,
          right: `translateY(50%) rotate(90deg) translateX(-50%)`,
          bottom: `rotate(180deg)`,
          left: `translateY(50%) rotate(-90deg) translateX(50%)`,
        }[i.placedSide],
        visibility: i.shouldHideArrow ? `hidden` : void 0,
      },
      children: (0, X.jsx)(Ao, {
        ...r,
        ref: t,
        style: { ...r.style, display: `block` },
      }),
    });
  });
Ko.displayName = Wo;
function qo(e) {
  return e !== null;
}
var Jo = (e) => ({
  name: `transformOrigin`,
  options: e,
  fn(t) {
    let { placement: n, rects: r, middlewareData: i } = t,
      a = i.arrow?.centerOffset !== 0,
      o = a ? 0 : e.arrowWidth,
      s = a ? 0 : e.arrowHeight,
      [c, l] = Yo(n),
      u = { start: `0%`, center: `50%`, end: `100%` }[l],
      d = (i.arrow?.x ?? 0) + o / 2,
      f = (i.arrow?.y ?? 0) + s / 2,
      p = ``,
      m = ``;
    return (
      c === `bottom`
        ? ((p = a ? u : `${d}px`), (m = `${-s}px`))
        : c === `top`
          ? ((p = a ? u : `${d}px`), (m = `${r.floating.height + s}px`))
          : c === `right`
            ? ((p = `${-s}px`), (m = a ? u : `${f}px`))
            : c === `left` &&
              ((p = `${r.floating.width + s}px`), (m = a ? u : `${f}px`)),
      { data: { x: p, y: m } }
    );
  },
});
function Yo(e) {
  let [t, n = `center`] = e.split(`-`);
  return [t, n];
}
var Xo = Lo,
  Zo = zo,
  Qo = Uo,
  $o = Ko,
  es = `Portal`,
  ts = f.forwardRef((e, t) => {
    let { container: n, ...r } = e,
      [i, a] = f.useState(!1);
    $(() => a(!0), []);
    let o = n || (i && globalThis?.document?.body);
    return o ? T.createPortal((0, X.jsx)(Z.div, { ...r, ref: t }), o) : null;
  });
ts.displayName = es;
function ns(e) {
  let t = f.useRef({ value: e, previous: e });
  return f.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var rs = Object.freeze({
    position: `absolute`,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: `hidden`,
    clip: `rect(0, 0, 0, 0)`,
    whiteSpace: `nowrap`,
    wordWrap: `normal`,
  }),
  is = `VisuallyHidden`,
  as = f.forwardRef((e, t) =>
    (0, X.jsx)(Z.span, { ...e, ref: t, style: { ...rs, ...e.style } }),
  );
as.displayName = is;
var os = function (e) {
    return typeof document > `u`
      ? null
      : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
  },
  ss = new WeakMap(),
  cs = new WeakMap(),
  ls = {},
  us = 0,
  ds = function (e) {
    return e && (e.host || ds(e.parentNode));
  },
  fs = function (e, t) {
    return t
      .map(function (t) {
        if (e.contains(t)) return t;
        var n = ds(t);
        return n && e.contains(n)
          ? n
          : (console.error(
              `aria-hidden`,
              t,
              `in not contained inside`,
              e,
              `. Doing nothing`,
            ),
            null);
      })
      .filter(function (e) {
        return !!e;
      });
  },
  ps = function (e, t, n, r) {
    var i = fs(t, Array.isArray(e) ? e : [e]);
    ls[n] || (ls[n] = new WeakMap());
    var a = ls[n],
      o = [],
      s = new Set(),
      c = new Set(i),
      l = function (e) {
        !e || s.has(e) || (s.add(e), l(e.parentNode));
      };
    i.forEach(l);
    var u = function (e) {
      !e ||
        c.has(e) ||
        Array.prototype.forEach.call(e.children, function (e) {
          if (s.has(e)) u(e);
          else
            try {
              var t = e.getAttribute(r),
                i = t !== null && t !== `false`,
                c = (ss.get(e) || 0) + 1,
                l = (a.get(e) || 0) + 1;
              (ss.set(e, c),
                a.set(e, l),
                o.push(e),
                c === 1 && i && cs.set(e, !0),
                l === 1 && e.setAttribute(n, `true`),
                i || e.setAttribute(r, `true`));
            } catch (t) {
              console.error(`aria-hidden: cannot operate on `, e, t);
            }
        });
    };
    return (
      u(t),
      s.clear(),
      us++,
      function () {
        (o.forEach(function (e) {
          var t = ss.get(e) - 1,
            i = a.get(e) - 1;
          (ss.set(e, t),
            a.set(e, i),
            t || (cs.has(e) || e.removeAttribute(r), cs.delete(e)),
            i || e.removeAttribute(n));
        }),
          us--,
          us ||
            ((ss = new WeakMap()),
            (ss = new WeakMap()),
            (cs = new WeakMap()),
            (ls = {})));
      }
    );
  },
  ms = function (e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || os(e);
    return i
      ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))),
        ps(r, i, n, `aria-hidden`))
      : function () {
          return null;
        };
  },
  hs = function () {
    return (
      (hs =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in ((t = arguments[n]), t))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }),
      hs.apply(this, arguments)
    );
  };
function gs(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function _s(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) &&
        ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var vs = `right-scroll-bar-position`,
  ys = `width-before-scroll-bar`,
  bs = `with-scroll-bars-hidden`,
  xs = `--removed-body-scroll-bar-size`;
function Ss(e, t) {
  return (typeof e == `function` ? e(t) : e && (e.current = t), e);
}
function Cs(e, t) {
  var n = (0, f.useState)(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(e) {
          var t = n.value;
          t !== e && ((n.value = e), n.callback(e, t));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var ws = typeof window < `u` ? f.useLayoutEffect : f.useEffect,
  Ts = new WeakMap();
function Es(e, t) {
  var n = Cs(t || null, function (t) {
    return e.forEach(function (e) {
      return Ss(e, t);
    });
  });
  return (
    ws(
      function () {
        var t = Ts.get(n);
        if (t) {
          var r = new Set(t),
            i = new Set(e),
            a = n.current;
          (r.forEach(function (e) {
            i.has(e) || Ss(e, null);
          }),
            i.forEach(function (e) {
              r.has(e) || Ss(e, a);
            }));
        }
        Ts.set(n, e);
      },
      [e],
    ),
    n
  );
}
function Ds(e) {
  return e;
}
function Os(e, t) {
  t === void 0 && (t = Ds);
  var n = [],
    r = !1;
  return {
    read: function () {
      if (r)
        throw Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
        );
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (e) {
      var i = t(e, r);
      return (
        n.push(i),
        function () {
          n = n.filter(function (e) {
            return e !== i;
          });
        }
      );
    },
    assignSyncMedium: function (e) {
      for (r = !0; n.length;) {
        var t = n;
        ((n = []), t.forEach(e));
      }
      n = {
        push: function (t) {
          return e(t);
        },
        filter: function () {
          return n;
        },
      };
    },
    assignMedium: function (e) {
      r = !0;
      var t = [];
      if (n.length) {
        var i = n;
        ((n = []), i.forEach(e), (t = n));
      }
      var a = function () {
          var n = t;
          ((t = []), n.forEach(e));
        },
        o = function () {
          return Promise.resolve().then(a);
        };
      (o(),
        (n = {
          push: function (e) {
            (t.push(e), o());
          },
          filter: function (e) {
            return ((t = t.filter(e)), n);
          },
        }));
    },
  };
}
function ks(e) {
  e === void 0 && (e = {});
  var t = Os(null);
  return ((t.options = hs({ async: !0, ssr: !1 }, e)), t);
}
var As = function (e) {
  var t = e.sideCar,
    n = gs(e, [`sideCar`]);
  if (!t)
    throw Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw Error(`Sidecar medium not found`);
  return f.createElement(r, hs({}, n));
};
As.isSideCarExport = !0;
function js(e, t) {
  return (e.useMedium(t), As);
}
var Ms = ks(),
  Ns = function () {},
  Ps = f.forwardRef(function (e, t) {
    var n = f.useRef(null),
      r = f.useState({
        onScrollCapture: Ns,
        onWheelCapture: Ns,
        onTouchMoveCapture: Ns,
      }),
      i = r[0],
      a = r[1],
      o = e.forwardProps,
      s = e.children,
      c = e.className,
      l = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      p = e.sideCar,
      m = e.noRelative,
      h = e.noIsolation,
      g = e.inert,
      _ = e.allowPinchZoom,
      v = e.as,
      y = v === void 0 ? `div` : v,
      b = e.gapMode,
      x = gs(e, [
        `forwardProps`,
        `children`,
        `className`,
        `removeScrollBar`,
        `enabled`,
        `shards`,
        `sideCar`,
        `noRelative`,
        `noIsolation`,
        `inert`,
        `allowPinchZoom`,
        `as`,
        `gapMode`,
      ]),
      S = p,
      C = Es([n, t]),
      w = hs(hs({}, x), i);
    return f.createElement(
      f.Fragment,
      null,
      u &&
        f.createElement(S, {
          sideCar: Ms,
          removeScrollBar: l,
          shards: d,
          noRelative: m,
          noIsolation: h,
          inert: g,
          setCallbacks: a,
          allowPinchZoom: !!_,
          lockRef: n,
          gapMode: b,
        }),
      o
        ? f.cloneElement(f.Children.only(s), hs(hs({}, w), { ref: C }))
        : f.createElement(y, hs({}, w, { className: c, ref: C }), s),
    );
  });
((Ps.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (Ps.classNames = { fullWidth: ys, zeroRight: vs }));
var Fs,
  Is = function () {
    if (Fs) return Fs;
    if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__;
  };
function Ls() {
  if (!document) return null;
  var e = document.createElement(`style`);
  e.type = `text/css`;
  var t = Is();
  return (t && e.setAttribute(`nonce`, t), e);
}
function Rs(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function zs(e) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e);
}
var Bs = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = Ls()) && (Rs(t, n), zs(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  Vs = function () {
    var e = Bs();
    return function (t, n) {
      f.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  Hs = function () {
    var e = Vs();
    return function (t) {
      var n = t.styles,
        r = t.dynamic;
      return (e(n, r), null);
    };
  },
  Us = { left: 0, top: 0, right: 0, gap: 0 },
  Ws = function (e) {
    return parseInt(e || ``, 10) || 0;
  },
  Gs = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
      r = t[e === `padding` ? `paddingTop` : `marginTop`],
      i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [Ws(n), Ws(r), Ws(i)];
  },
  Ks = function (e) {
    if ((e === void 0 && (e = `margin`), typeof window > `u`)) return Us;
    var t = Gs(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  qs = Hs(),
  Js = `data-scroll-locked`,
  Ys = function (e, t, n, r) {
    var i = e.left,
      a = e.top,
      o = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = `margin`),
      `
  .${bs} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Js}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
      t && `position: relative ${r};`,
      n === `margin` &&
        `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
      n === `padding` && `padding-right: ${s}px ${r};`,
    ]
      .filter(Boolean)
      .join(``)}
  }
  
  .${vs} {
    right: ${s}px ${r};
  }
  
  .${ys} {
    margin-right: ${s}px ${r};
  }
  
  .${vs} .${vs} {
    right: 0 ${r};
  }
  
  .${ys} .${ys} {
    margin-right: 0 ${r};
  }
  
  body[${Js}] {
    ${xs}: ${s}px;
  }
`
    );
  },
  Xs = function () {
    var e = parseInt(
      document.body.getAttribute(`data-scroll-locked`) || `0`,
      10,
    );
    return isFinite(e) ? e : 0;
  },
  Zs = function () {
    f.useEffect(function () {
      return (
        document.body.setAttribute(Js, (Xs() + 1).toString()),
        function () {
          var e = Xs() - 1;
          e <= 0
            ? document.body.removeAttribute(Js)
            : document.body.setAttribute(Js, e.toString());
        }
      );
    }, []);
  },
  Qs = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? `margin` : r;
    Zs();
    var a = f.useMemo(
      function () {
        return Ks(i);
      },
      [i],
    );
    return f.createElement(qs, { styles: Ys(a, !t, i, n ? `` : `!important`) });
  },
  $s = !1;
if (typeof window < `u`)
  try {
    var ec = Object.defineProperty({}, "passive", {
      get: function () {
        return (($s = !0), !0);
      },
    });
    (window.addEventListener(`test`, ec, ec),
      window.removeEventListener(`test`, ec, ec));
  } catch {
    $s = !1;
  }
var tc = $s ? { passive: !1 } : !1,
  nc = function (e) {
    return e.tagName === `TEXTAREA`;
  },
  rc = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== `hidden` &&
      !(n.overflowY === n.overflowX && !nc(e) && n[t] === `visible`)
    );
  },
  ic = function (e) {
    return rc(e, `overflowY`);
  },
  ac = function (e) {
    return rc(e, `overflowX`);
  },
  oc = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (
        (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host),
        lc(e, r))
      ) {
        var i = uc(e, r);
        if (i[1] > i[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  sc = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight];
  },
  cc = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth];
  },
  lc = function (e, t) {
    return e === `v` ? ic(t) : ac(t);
  },
  uc = function (e, t) {
    return e === `v` ? sc(t) : cc(t);
  },
  dc = function (e, t) {
    return e === `h` && t === `rtl` ? -1 : 1;
  },
  fc = function (e, t, n, r, i) {
    var a = dc(e, window.getComputedStyle(t).direction),
      o = a * r,
      s = n.target,
      c = t.contains(s),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      if (!s) break;
      var p = uc(e, s),
        m = p[0],
        h = p[1] - p[2] - a * m;
      (m || h) && lc(e, s) && ((d += h), (f += m));
      var g = s.parentNode;
      s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
    } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
    return (
      ((u && ((i && Math.abs(d) < 1) || (!i && o > d))) ||
        (!u && ((i && Math.abs(f) < 1) || (!i && -o > f)))) &&
        (l = !0),
      l
    );
  },
  pc = function (e) {
    return `changedTouches` in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  mc = function (e) {
    return [e.deltaX, e.deltaY];
  },
  hc = function (e) {
    return e && `current` in e ? e.current : e;
  },
  gc = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  _c = function (e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
  },
  vc = 0,
  yc = [];
function bc(e) {
  var t = f.useRef([]),
    n = f.useRef([0, 0]),
    r = f.useRef(),
    i = f.useState(vc++)[0],
    a = f.useState(Hs)[0],
    o = f.useRef(e);
  (f.useEffect(
    function () {
      o.current = e;
    },
    [e],
  ),
    f.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add(`block-interactivity-${i}`);
          var t = _s([e.lockRef.current], (e.shards || []).map(hc), !0).filter(
            Boolean,
          );
          return (
            t.forEach(function (e) {
              return e.classList.add(`allow-interactivity-${i}`);
            }),
            function () {
              (document.body.classList.remove(`block-interactivity-${i}`),
                t.forEach(function (e) {
                  return e.classList.remove(`allow-interactivity-${i}`);
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var s = f.useCallback(function (e, t) {
      if (
        (`touches` in e && e.touches.length === 2) ||
        (e.type === `wheel` && e.ctrlKey)
      )
        return !o.current.allowPinchZoom;
      var i = pc(e),
        a = n.current,
        s = `deltaX` in e ? e.deltaX : a[0] - i[0],
        c = `deltaY` in e ? e.deltaY : a[1] - i[1],
        l,
        u = e.target,
        d = Math.abs(s) > Math.abs(c) ? `h` : `v`;
      if (`touches` in e && d === `h` && u.type === `range`) return !1;
      var f = window.getSelection(),
        p = f && f.anchorNode;
      if (p && (p === u || p.contains(u))) return !1;
      var m = oc(d, u);
      if (!m) return !0;
      if ((m ? (l = d) : ((l = d === `v` ? `h` : `v`), (m = oc(d, u))), !m))
        return !1;
      if (
        (!r.current && `changedTouches` in e && (s || c) && (r.current = l), !l)
      )
        return !0;
      var h = r.current || l;
      return fc(h, t, e, h === `h` ? s : c, !0);
    }, []),
    c = f.useCallback(function (e) {
      var n = e;
      if (!(!yc.length || yc[yc.length - 1] !== a)) {
        var r = `deltaY` in n ? mc(n) : pc(n),
          i = t.current.filter(function (e) {
            return (
              e.name === n.type &&
              (e.target === n.target || n.target === e.shadowParent) &&
              gc(e.delta, r)
            );
          })[0];
        if (i && i.should) {
          n.cancelable && n.preventDefault();
          return;
        }
        if (!i) {
          var c = (o.current.shards || [])
            .map(hc)
            .filter(Boolean)
            .filter(function (e) {
              return e.contains(n.target);
            });
          (c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) &&
            n.cancelable &&
            n.preventDefault();
        }
      }
    }, []),
    l = f.useCallback(function (e, n, r, i) {
      var a = { name: e, delta: n, target: r, should: i, shadowParent: xc(r) };
      (t.current.push(a),
        setTimeout(function () {
          t.current = t.current.filter(function (e) {
            return e !== a;
          });
        }, 1));
    }, []),
    u = f.useCallback(function (e) {
      ((n.current = pc(e)), (r.current = void 0));
    }, []),
    d = f.useCallback(function (t) {
      l(t.type, mc(t), t.target, s(t, e.lockRef.current));
    }, []),
    p = f.useCallback(function (t) {
      l(t.type, pc(t), t.target, s(t, e.lockRef.current));
    }, []);
  f.useEffect(function () {
    return (
      yc.push(a),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: p,
      }),
      document.addEventListener(`wheel`, c, tc),
      document.addEventListener(`touchmove`, c, tc),
      document.addEventListener(`touchstart`, u, tc),
      function () {
        ((yc = yc.filter(function (e) {
          return e !== a;
        })),
          document.removeEventListener(`wheel`, c, tc),
          document.removeEventListener(`touchmove`, c, tc),
          document.removeEventListener(`touchstart`, u, tc));
      }
    );
  }, []);
  var m = e.removeScrollBar,
    h = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    h ? f.createElement(a, { styles: _c(i) }) : null,
    m
      ? f.createElement(Qs, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function xc(e) {
  for (var t = null; e !== null;)
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
var Sc = js(Ms, bc),
  Cc = f.forwardRef(function (e, t) {
    return f.createElement(Ps, hs({}, e, { ref: t, sideCar: Sc }));
  });
Cc.classNames = Ps.classNames;
var wc = [` `, `Enter`, `ArrowUp`, `ArrowDown`],
  Tc = [` `, `Enter`],
  Ec = `Select`,
  [Dc, Oc, kc] = bn(Ec),
  [Ac, jc] = vn(Ec, [kc, Po]),
  Mc = Po(),
  [Nc, Pc] = Ac(Ec),
  [Fc, Ic] = Ac(Ec),
  Lc = `SelectProvider`;
function Rc(e) {
  let {
      __scopeSelect: t,
      children: n,
      open: r,
      defaultOpen: i,
      onOpenChange: a,
      value: o,
      defaultValue: s,
      onValueChange: c,
      dir: l,
      name: u,
      autoComplete: d,
      disabled: p,
      required: m,
      form: h,
      internal_do_not_use_render: g,
    } = e,
    _ = Mc(t),
    [v, y] = f.useState(null),
    [b, x] = f.useState(null),
    [S, C] = f.useState(!1),
    w = An(l),
    [T, E] = En({ prop: r, defaultProp: i ?? !1, onChange: a, caller: Ec }),
    [D, O] = En({ prop: o, defaultProp: s, onChange: c, caller: Ec }),
    k = f.useRef(null),
    A = f.useRef(D);
  f.useEffect(() => {
    let e = h ? v?.ownerDocument.getElementById(h) : v?.form;
    if (e instanceof HTMLFormElement) {
      let t = () => O(A.current);
      return (
        e.addEventListener(`reset`, t),
        () => e.removeEventListener(`reset`, t)
      );
    }
  }, [h, v, O]);
  let j = !v || !!h || !!v.closest(`form`),
    [M, N] = f.useState(new Set()),
    P = Cn(),
    F = Array.from(M)
      .map((e) => e.props.value)
      .join(`;`),
    I = f.useCallback((e) => {
      N((t) => new Set(t).add(e));
    }, []),
    L = f.useCallback((e) => {
      N((t) => {
        let n = new Set(t);
        return (n.delete(e), n);
      });
    }, []),
    R = {
      required: m,
      trigger: v,
      onTriggerChange: y,
      valueNode: b,
      onValueNodeChange: x,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: C,
      contentId: P,
      value: D,
      onValueChange: O,
      open: T,
      onOpenChange: E,
      dir: w,
      triggerPointerDownPosRef: k,
      disabled: p,
      name: u,
      autoComplete: d,
      form: h,
      nativeOptions: M,
      nativeSelectKey: F,
      isFormControl: j,
    };
  return (0, X.jsx)(Xo, {
    ..._,
    children: (0, X.jsx)(Nc, {
      scope: t,
      ...R,
      children: (0, X.jsx)(Dc.Provider, {
        scope: t,
        children: (0, X.jsx)(Fc, {
          scope: t,
          onNativeOptionAdd: I,
          onNativeOptionRemove: L,
          children: Rl(g) ? g(R) : n,
        }),
      }),
    }),
  });
}
Rc.displayName = Lc;
var zc = (e) => {
  let { __scopeSelect: t, children: n, ...r } = e;
  return (0, X.jsx)(Rc, {
    __scopeSelect: t,
    ...r,
    internal_do_not_use_render: ({ isFormControl: e }) =>
      (0, X.jsxs)(X.Fragment, {
        children: [n, e ? (0, X.jsx)(Ll, { __scopeSelect: t }) : null],
      }),
  });
};
zc.displayName = Ec;
var Bc = `SelectTrigger`,
  Vc = f.forwardRef((e, t) => {
    let { __scopeSelect: n, disabled: r = !1, ...i } = e,
      a = Mc(n),
      o = Pc(Bc, n),
      s = o.disabled || r,
      c = W(t, o.onTriggerChange),
      l = Oc(n),
      u = f.useRef(`touch`),
      [d, p, m] = Bl((e) => {
        let t = l().filter((e) => !e.disabled),
          n = Vl(
            t,
            e,
            t.find((e) => e.value === o.value),
          );
        n !== void 0 && o.onValueChange(n.value);
      }),
      h = (e) => {
        (s || (o.onOpenChange(!0), m()),
          e &&
            (o.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY),
            }));
      };
    return (0, X.jsx)(Zo, {
      asChild: !0,
      ...a,
      children: (0, X.jsx)(Z.button, {
        type: `button`,
        role: `combobox`,
        "aria-controls": o.open ? o.contentId : void 0,
        "aria-expanded": o.open,
        "aria-required": o.required,
        "aria-autocomplete": `none`,
        dir: o.dir,
        "data-state": o.open ? `open` : `closed`,
        disabled: s,
        "data-disabled": s ? `` : void 0,
        "data-placeholder": zl(o.value) ? `` : void 0,
        ...i,
        ref: c,
        onClick: Q(i.onClick, (e) => {
          (e.currentTarget.focus(), u.current !== `mouse` && h(e));
        }),
        onPointerDown: Q(i.onPointerDown, (e) => {
          u.current = e.pointerType;
          let t = e.target;
          (t.hasPointerCapture(e.pointerId) &&
            t.releasePointerCapture(e.pointerId),
            e.button === 0 &&
              e.ctrlKey === !1 &&
              e.pointerType === `mouse` &&
              (h(e), e.preventDefault()));
        }),
        onKeyDown: Q(i.onKeyDown, (e) => {
          let t = d.current !== ``;
          (!(e.ctrlKey || e.altKey || e.metaKey) &&
            e.key.length === 1 &&
            p(e.key),
            !(t && e.key === ` `) &&
              wc.includes(e.key) &&
              (h(), e.preventDefault()));
        }),
      }),
    });
  });
Vc.displayName = Bc;
var Hc = `SelectValue`,
  Uc = f.forwardRef((e, t) => {
    let {
        __scopeSelect: n,
        className: r,
        style: i,
        children: a,
        placeholder: o = ``,
        ...s
      } = e,
      c = Pc(Hc, n),
      { onValueNodeHasChildrenChange: l } = c,
      u = a !== void 0,
      d = W(t, c.onValueNodeChange);
    $(() => {
      l(u);
    }, [l, u]);
    let p = zl(c.value);
    return (0, X.jsx)(Z.span, {
      ...s,
      asChild: !p && s.asChild,
      ref: d,
      style: { pointerEvents: `none` },
      children: (0, X.jsx)(
        f.Fragment,
        { children: p ? o : a },
        p ? `placeholder` : `value`,
      ),
    });
  });
Uc.displayName = Hc;
var Wc = `SelectIcon`,
  Gc = f.forwardRef((e, t) => {
    let { __scopeSelect: n, children: r, ...i } = e;
    return (0, X.jsx)(Z.span, {
      "aria-hidden": !0,
      ...i,
      ref: t,
      children: r || `▼`,
    });
  });
Gc.displayName = Wc;
var Kc = `SelectPortal`,
  [qc, Jc] = Ac(Kc, { forceMount: void 0 }),
  Yc = (e) => {
    let { __scopeSelect: t, forceMount: n, ...r } = e;
    return (0, X.jsx)(qc, {
      scope: e.__scopeSelect,
      forceMount: n,
      children: (0, X.jsx)(ts, { asChild: !0, ...r }),
    });
  };
Yc.displayName = Kc;
var Xc = `SelectContent`,
  Zc = f.forwardRef((e, t) => {
    let n = Jc(Xc, e.__scopeSelect),
      { forceMount: r = n.forceMount, ...i } = e,
      a = Pc(Xc, e.__scopeSelect),
      [o, s] = f.useState();
    return (
      $(() => {
        s(new DocumentFragment());
      }, []),
      (0, X.jsx)(ar, {
        present: r || a.open,
        children: ({ present: e }) =>
          e
            ? (0, X.jsx)(il, { ...i, ref: t })
            : (0, X.jsx)(Qc, { ...i, fragment: o }),
      })
    );
  });
Zc.displayName = Xc;
var Qc = f.forwardRef((e, t) => {
  let { __scopeSelect: n, children: r, fragment: i } = e;
  return i
    ? T.createPortal(
        (0, X.jsx)(el, {
          scope: n,
          children: (0, X.jsx)(Dc.Slot, {
            scope: n,
            children: (0, X.jsx)(`div`, { ref: t, children: r }),
          }),
        }),
        i,
      )
    : null;
});
Qc.displayName = `SelectContentFragment`;
var $c = 10,
  [el, tl] = Ac(Xc),
  nl = `SelectContentImpl`,
  rl = me(`SelectContent.RemoveScroll`),
  il = f.forwardRef((e, t) => {
    let { __scopeSelect: n } = e,
      {
        position: r = `item-aligned`,
        onCloseAutoFocus: i,
        onEscapeKeyDown: a,
        onPointerDownOutside: o,
        side: s,
        sideOffset: c,
        align: l,
        alignOffset: u,
        arrowPadding: d,
        collisionBoundary: p,
        collisionPadding: m,
        sticky: h,
        hideWhenDetached: g,
        avoidCollisions: _,
        ...v
      } = e,
      y = Pc(Xc, n),
      [b, x] = f.useState(null),
      [S, C] = f.useState(null),
      w = W(t, x),
      [T, E] = f.useState(null),
      [D, O] = f.useState(null),
      k = Oc(n),
      [A, j] = f.useState(!1),
      M = f.useRef(!1);
    (f.useEffect(() => {
      if (b) return ms(b);
    }, [b]),
      Qr());
    let N = f.useCallback(
        (e) => {
          let [t, ...n] = k().map((e) => e.ref.current),
            [r] = n.slice(-1),
            i = document.activeElement;
          for (let n of e)
            if (
              n === i ||
              (n?.scrollIntoView({ block: `nearest` }),
              n === t && S && (S.scrollTop = 0),
              n === r && S && (S.scrollTop = S.scrollHeight),
              n?.focus(),
              document.activeElement !== i)
            )
              return;
        },
        [k, S],
      ),
      P = f.useCallback(() => N([T, b]), [N, T, b]);
    f.useEffect(() => {
      A && P();
    }, [A, P]);
    let { onOpenChange: F, triggerPointerDownPosRef: I } = y;
    (f.useEffect(() => {
      if (b) {
        let e = { x: 0, y: 0 },
          t = (t) => {
            e = {
              x: Math.abs(Math.round(t.pageX) - (I.current?.x ?? 0)),
              y: Math.abs(Math.round(t.pageY) - (I.current?.y ?? 0)),
            };
          },
          n = (n) => {
            (e.x <= 10 && e.y <= 10
              ? n.preventDefault()
              : n.composedPath().includes(b) || F(!1),
              document.removeEventListener(`pointermove`, t),
              (I.current = null));
          };
        return (
          I.current !== null &&
            (document.addEventListener(`pointermove`, t),
            document.addEventListener(`pointerup`, n, {
              capture: !0,
              once: !0,
            })),
          () => {
            (document.removeEventListener(`pointermove`, t),
              document.removeEventListener(`pointerup`, n, { capture: !0 }));
          }
        );
      }
    }, [b, F, I]),
      f.useEffect(() => {
        let e = () => F(!1);
        return (
          window.addEventListener(`blur`, e),
          window.addEventListener(`resize`, e),
          () => {
            (window.removeEventListener(`blur`, e),
              window.removeEventListener(`resize`, e));
          }
        );
      }, [F]));
    let [L, R] = Bl((e) => {
        let t = k().filter((e) => !e.disabled),
          n = Vl(
            t,
            e,
            t.find((e) => e.ref.current === document.activeElement),
          );
        n && setTimeout(() => n.ref.current?.focus());
      }),
      ee = f.useCallback(
        (e, t, n) => {
          let r = !M.current && !n;
          ((y.value !== void 0 && y.value === t) || r) &&
            (E(e), r && (M.current = !0));
        },
        [y.value],
      ),
      z = f.useCallback(() => b?.focus(), [b]),
      B = f.useCallback(
        (e, t, n) => {
          let r = !M.current && !n;
          ((y.value !== void 0 && y.value === t) || r) && O(e);
        },
        [y.value],
      ),
      V = r === `popper` ? cl : ol,
      te =
        V === cl
          ? {
              side: s,
              sideOffset: c,
              align: l,
              alignOffset: u,
              arrowPadding: d,
              collisionBoundary: p,
              collisionPadding: m,
              sticky: h,
              hideWhenDetached: g,
              avoidCollisions: _,
            }
          : {};
    return (0, X.jsx)(el, {
      scope: n,
      content: b,
      viewport: S,
      onViewportChange: C,
      itemRefCallback: ee,
      selectedItem: T,
      onItemLeave: z,
      itemTextRefCallback: B,
      focusSelectedItem: P,
      selectedItemText: D,
      position: r,
      isPositioned: A,
      searchRef: L,
      children: (0, X.jsx)(Cc, {
        as: rl,
        allowPinchZoom: !0,
        children: (0, X.jsx)(ii, {
          asChild: !0,
          trapped: y.open,
          onMountAutoFocus: (e) => {
            e.preventDefault();
          },
          onUnmountAutoFocus: Q(i, (e) => {
            (y.trigger?.focus({ preventScroll: !0 }), e.preventDefault());
          }),
          children: (0, X.jsx)(Vr, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: a,
            onPointerDownOutside: o,
            onFocusOutside: (e) => e.preventDefault(),
            onDismiss: () => y.onOpenChange(!1),
            children: (0, X.jsx)(V, {
              role: `listbox`,
              id: y.contentId,
              "data-state": y.open ? `open` : `closed`,
              dir: y.dir,
              onContextMenu: (e) => e.preventDefault(),
              ...v,
              ...te,
              onPlaced: () => j(!0),
              ref: w,
              style: {
                display: `flex`,
                flexDirection: `column`,
                outline: `none`,
                ...v.style,
              },
              onKeyDown: Q(v.onKeyDown, (e) => {
                let t = e.ctrlKey || e.altKey || e.metaKey;
                if (
                  (e.key === `Tab` && e.preventDefault(),
                  !t && e.key.length === 1 && R(e.key),
                  [`ArrowUp`, `ArrowDown`, `Home`, `End`].includes(e.key))
                ) {
                  let t = k()
                    .filter((e) => !e.disabled)
                    .map((e) => e.ref.current);
                  if (
                    ([`ArrowUp`, `End`].includes(e.key) &&
                      (t = t.slice().reverse()),
                    [`ArrowUp`, `ArrowDown`].includes(e.key))
                  ) {
                    let n = e.target,
                      r = t.indexOf(n);
                    t = t.slice(r + 1);
                  }
                  (setTimeout(() => N(t)), e.preventDefault());
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
il.displayName = nl;
var al = `SelectItemAlignedPosition`,
  ol = f.forwardRef((e, t) => {
    let { __scopeSelect: n, onPlaced: r, ...i } = e,
      a = Pc(Xc, n),
      o = tl(Xc, n),
      [s, c] = f.useState(null),
      [l, u] = f.useState(null),
      d = W(t, u),
      p = Oc(n),
      m = f.useRef(!1),
      h = f.useRef(!0),
      {
        viewport: g,
        selectedItem: _,
        selectedItemText: v,
        focusSelectedItem: y,
      } = o,
      b = f.useCallback(() => {
        if (a.trigger && a.valueNode && s && l && g && _ && v) {
          let e = a.trigger.getBoundingClientRect(),
            t = l.getBoundingClientRect(),
            n = a.valueNode.getBoundingClientRect(),
            i = v.getBoundingClientRect();
          if (a.dir !== `rtl`) {
            let r = i.left - t.left,
              a = n.left - r,
              o = e.left - a,
              c = e.width + o,
              l = Math.max(c, t.width),
              u = window.innerWidth - $c,
              d = Pr(a, [$c, Math.max($c, u - l)]);
            ((s.style.minWidth = c + `px`), (s.style.left = d + `px`));
          } else {
            let r = t.right - i.right,
              a = window.innerWidth - n.right - r,
              o = window.innerWidth - e.right - a,
              c = e.width + o,
              l = Math.max(c, t.width),
              u = window.innerWidth - $c,
              d = Pr(a, [$c, Math.max($c, u - l)]);
            ((s.style.minWidth = c + `px`), (s.style.right = d + `px`));
          }
          let o = p(),
            c = window.innerHeight - $c * 2,
            u = g.scrollHeight,
            d = window.getComputedStyle(l),
            f = parseInt(d.borderTopWidth, 10),
            h = parseInt(d.paddingTop, 10),
            y = parseInt(d.borderBottomWidth, 10),
            b = parseInt(d.paddingBottom, 10),
            x = f + h + u + b + y,
            S = Math.min(_.offsetHeight * 5, x),
            C = window.getComputedStyle(g),
            w = parseInt(C.paddingTop, 10),
            T = parseInt(C.paddingBottom, 10),
            E = e.top + e.height / 2 - $c,
            D = c - E,
            O = _.offsetHeight / 2,
            k = _.offsetTop + O,
            A = f + h + k,
            j = x - A;
          if (A <= E) {
            let e = o.length > 0 && _ === o[o.length - 1].ref.current;
            s.style.bottom = `0px`;
            let t = l.clientHeight - g.offsetTop - g.offsetHeight,
              n = A + Math.max(D, O + (e ? T : 0) + t + y);
            s.style.height = n + `px`;
          } else {
            let e = o.length > 0 && _ === o[0].ref.current;
            s.style.top = `0px`;
            let t = Math.max(E, f + g.offsetTop + (e ? w : 0) + O) + j;
            ((s.style.height = t + `px`), (g.scrollTop = A - E + g.offsetTop));
          }
          ((s.style.margin = `${$c}px 0`),
            (s.style.minHeight = S + `px`),
            (s.style.maxHeight = c + `px`),
            r?.(),
            requestAnimationFrame(() => (m.current = !0)));
        }
      }, [p, a.trigger, a.valueNode, s, l, g, _, v, a.dir, r]);
    $(() => b(), [b]);
    let [x, S] = f.useState();
    return (
      $(() => {
        l && S(window.getComputedStyle(l).zIndex);
      }, [l]),
      (0, X.jsx)(ll, {
        scope: n,
        contentWrapper: s,
        shouldExpandOnScrollRef: m,
        onScrollButtonChange: f.useCallback(
          (e) => {
            e && h.current === !0 && (b(), y?.(), (h.current = !1));
          },
          [b, y],
        ),
        children: (0, X.jsx)(`div`, {
          ref: c,
          style: {
            display: `flex`,
            flexDirection: `column`,
            position: `fixed`,
            zIndex: x,
          },
          children: (0, X.jsx)(Z.div, {
            ...i,
            ref: d,
            style: { boxSizing: `border-box`, maxHeight: `100%`, ...i.style },
          }),
        }),
      })
    );
  });
ol.displayName = al;
var sl = `SelectPopperPosition`,
  cl = f.forwardRef((e, t) => {
    let {
        __scopeSelect: n,
        align: r = `start`,
        collisionPadding: i = $c,
        ...a
      } = e,
      o = Mc(n);
    return (0, X.jsx)(Qo, {
      ...o,
      ...a,
      ref: t,
      align: r,
      collisionPadding: i,
      style: {
        boxSizing: `border-box`,
        ...a.style,
        "--radix-select-content-transform-origin": `var(--radix-popper-transform-origin)`,
        "--radix-select-content-available-width": `var(--radix-popper-available-width)`,
        "--radix-select-content-available-height": `var(--radix-popper-available-height)`,
        "--radix-select-trigger-width": `var(--radix-popper-anchor-width)`,
        "--radix-select-trigger-height": `var(--radix-popper-anchor-height)`,
      },
    });
  });
cl.displayName = sl;
var [ll, ul] = Ac(Xc, {}),
  dl = `SelectViewport`,
  fl = f.forwardRef((e, t) => {
    let { __scopeSelect: n, nonce: r, ...i } = e,
      a = tl(dl, n),
      o = ul(dl, n),
      s = W(t, a.onViewportChange),
      c = f.useRef(0);
    return (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(`style`, {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`,
          },
          nonce: r,
        }),
        (0, X.jsx)(Dc.Slot, {
          scope: n,
          children: (0, X.jsx)(Z.div, {
            "data-radix-select-viewport": ``,
            role: `presentation`,
            ...i,
            ref: s,
            style: {
              position: `relative`,
              flex: 1,
              overflow: `hidden auto`,
              ...i.style,
            },
            onScroll: Q(i.onScroll, (e) => {
              let t = e.currentTarget,
                { contentWrapper: n, shouldExpandOnScrollRef: r } = o;
              if (r?.current && n) {
                let e = Math.abs(c.current - t.scrollTop);
                if (e > 0) {
                  let r = window.innerHeight - $c * 2,
                    i = parseFloat(n.style.minHeight),
                    a = parseFloat(n.style.height),
                    o = Math.max(i, a);
                  if (o < r) {
                    let i = o + e,
                      a = Math.min(r, i),
                      s = i - a;
                    ((n.style.height = a + `px`),
                      n.style.bottom === `0px` &&
                        ((t.scrollTop = s > 0 ? s : 0),
                        (n.style.justifyContent = `flex-end`)));
                  }
                }
              }
              c.current = t.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
fl.displayName = dl;
var pl = `SelectGroup`,
  [ml, hl] = Ac(pl),
  gl = f.forwardRef((e, t) => {
    let { __scopeSelect: n, ...r } = e,
      i = Cn();
    return (0, X.jsx)(ml, {
      scope: n,
      id: i,
      children: (0, X.jsx)(Z.div, {
        role: `group`,
        "aria-labelledby": i,
        ...r,
        ref: t,
      }),
    });
  });
gl.displayName = pl;
var _l = `SelectLabel`,
  vl = f.forwardRef((e, t) => {
    let { __scopeSelect: n, ...r } = e,
      i = hl(_l, n);
    return (0, X.jsx)(Z.div, { id: i.id, ...r, ref: t });
  });
vl.displayName = _l;
var yl = `SelectItem`,
  [bl, xl] = Ac(yl),
  Sl = f.forwardRef((e, t) => {
    let {
        __scopeSelect: n,
        value: r,
        disabled: i = !1,
        textValue: a,
        ...o
      } = e,
      s = Pc(yl, n),
      c = tl(yl, n),
      l = s.value === r,
      [u, d] = f.useState(a ?? ``),
      [p, m] = f.useState(!1),
      h = W(
        t,
        wn((e) => c.itemRefCallback?.(e, r, i)),
      ),
      g = Cn(),
      _ = f.useRef(`touch`),
      v = () => {
        i || (s.onValueChange(r), s.onOpenChange(!1));
      };
    return (0, X.jsx)(bl, {
      scope: n,
      value: r,
      disabled: i,
      textId: g,
      isSelected: l,
      onItemTextChange: f.useCallback((e) => {
        d((t) => t || (e?.textContent ?? ``).trim());
      }, []),
      children: (0, X.jsx)(Dc.ItemSlot, {
        scope: n,
        value: r,
        disabled: i,
        textValue: u,
        children: (0, X.jsx)(Z.div, {
          role: `option`,
          "aria-labelledby": g,
          "data-highlighted": p ? `` : void 0,
          "aria-selected": l && p,
          "data-state": l ? `checked` : `unchecked`,
          "aria-disabled": i || void 0,
          "data-disabled": i ? `` : void 0,
          tabIndex: i ? void 0 : -1,
          ...o,
          ref: h,
          onFocus: Q(o.onFocus, () => m(!0)),
          onBlur: Q(o.onBlur, () => m(!1)),
          onClick: Q(o.onClick, () => {
            _.current !== `mouse` && v();
          }),
          onPointerUp: Q(o.onPointerUp, () => {
            _.current === `mouse` && v();
          }),
          onPointerDown: Q(o.onPointerDown, (e) => {
            _.current = e.pointerType;
          }),
          onPointerMove: Q(o.onPointerMove, (e) => {
            ((_.current = e.pointerType),
              i
                ? c.onItemLeave?.()
                : _.current === `mouse` &&
                  e.currentTarget.focus({ preventScroll: !0 }));
          }),
          onPointerLeave: Q(o.onPointerLeave, (e) => {
            e.currentTarget === document.activeElement && c.onItemLeave?.();
          }),
          onKeyDown: Q(o.onKeyDown, (e) => {
            i ||
              e.target !== e.currentTarget ||
              (c.searchRef?.current !== `` && e.key === ` `) ||
              (Tc.includes(e.key) && v(), e.key === ` ` && e.preventDefault());
          }),
        }),
      }),
    });
  });
Sl.displayName = yl;
var Cl = `SelectItemText`,
  wl = f.forwardRef((e, t) => {
    let { __scopeSelect: n, className: r, style: i, ...a } = e,
      o = Pc(Cl, n),
      s = tl(Cl, n),
      c = xl(Cl, n),
      l = Ic(Cl, n),
      [u, d] = f.useState(null),
      p = wn((e) => s.itemTextRefCallback?.(e, c.value, c.disabled)),
      m = W(t, d, c.onItemTextChange, p),
      h = u?.textContent,
      g = f.useMemo(
        () =>
          (0, X.jsx)(
            `option`,
            { value: c.value, disabled: c.disabled, children: h },
            c.value,
          ),
        [c.disabled, c.value, h],
      ),
      { onNativeOptionAdd: _, onNativeOptionRemove: v } = l;
    return (
      $(() => (_(g), () => v(g)), [_, v, g]),
      (0, X.jsxs)(X.Fragment, {
        children: [
          (0, X.jsx)(Z.span, { id: c.textId, ...a, ref: m }),
          c.isSelected && o.valueNode && !o.valueNodeHasChildren && !zl(o.value)
            ? T.createPortal(a.children, o.valueNode)
            : null,
        ],
      })
    );
  });
wl.displayName = Cl;
var Tl = `SelectItemIndicator`,
  El = f.forwardRef((e, t) => {
    let { __scopeSelect: n, ...r } = e;
    return xl(Tl, n).isSelected
      ? (0, X.jsx)(Z.span, { "aria-hidden": !0, ...r, ref: t })
      : null;
  });
El.displayName = Tl;
var Dl = `SelectScrollUpButton`,
  Ol = f.forwardRef((e, t) => {
    let n = tl(Dl, e.__scopeSelect),
      r = ul(Dl, e.__scopeSelect),
      [i, a] = f.useState(!1),
      o = W(t, r.onScrollButtonChange);
    return (
      $(() => {
        if (n.viewport && n.isPositioned) {
          let e = function () {
              let e = t.scrollTop > 0;
              a(e);
            },
            t = n.viewport;
          return (
            e(),
            t.addEventListener(`scroll`, e),
            () => t.removeEventListener(`scroll`, e)
          );
        }
      }, [n.viewport, n.isPositioned]),
      i
        ? (0, X.jsx)(jl, {
            ...e,
            ref: o,
            onAutoScroll: () => {
              let { viewport: e, selectedItem: t } = n;
              e && t && (e.scrollTop -= t.offsetHeight);
            },
          })
        : null
    );
  });
Ol.displayName = Dl;
var kl = `SelectScrollDownButton`,
  Al = f.forwardRef((e, t) => {
    let n = tl(kl, e.__scopeSelect),
      r = ul(kl, e.__scopeSelect),
      [i, a] = f.useState(!1),
      o = W(t, r.onScrollButtonChange);
    return (
      $(() => {
        if (n.viewport && n.isPositioned) {
          let e = function () {
              let e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              a(n);
            },
            t = n.viewport;
          return (
            e(),
            t.addEventListener(`scroll`, e),
            () => t.removeEventListener(`scroll`, e)
          );
        }
      }, [n.viewport, n.isPositioned]),
      i
        ? (0, X.jsx)(jl, {
            ...e,
            ref: o,
            onAutoScroll: () => {
              let { viewport: e, selectedItem: t } = n;
              e && t && (e.scrollTop += t.offsetHeight);
            },
          })
        : null
    );
  });
Al.displayName = kl;
var jl = f.forwardRef((e, t) => {
    let { __scopeSelect: n, onAutoScroll: r, ...i } = e,
      a = tl(`SelectScrollButton`, n),
      o = f.useRef(null),
      s = Oc(n),
      c = f.useCallback(() => {
        o.current !== null &&
          (window.clearInterval(o.current), (o.current = null));
      }, []);
    return (
      f.useEffect(() => () => c(), [c]),
      $(() => {
        s()
          .find((e) => e.ref.current === document.activeElement)
          ?.ref.current?.scrollIntoView({ block: `nearest` });
      }, [s]),
      (0, X.jsx)(Z.div, {
        "aria-hidden": !0,
        ...i,
        ref: t,
        style: { flexShrink: 0, ...i.style },
        onPointerDown: Q(i.onPointerDown, () => {
          o.current === null && (o.current = window.setInterval(r, 50));
        }),
        onPointerMove: Q(i.onPointerMove, () => {
          (a.onItemLeave?.(),
            o.current === null && (o.current = window.setInterval(r, 50)));
        }),
        onPointerLeave: Q(i.onPointerLeave, () => {
          c();
        }),
      })
    );
  }),
  Ml = `SelectSeparator`,
  Nl = f.forwardRef((e, t) => {
    let { __scopeSelect: n, ...r } = e;
    return (0, X.jsx)(Z.div, { "aria-hidden": !0, ...r, ref: t });
  });
Nl.displayName = Ml;
var Pl = `SelectArrow`,
  Fl = f.forwardRef((e, t) => {
    let { __scopeSelect: n, ...r } = e,
      i = Mc(n);
    return tl(Pl, n).position === `popper`
      ? (0, X.jsx)($o, { ...i, ...r, ref: t })
      : null;
  });
Fl.displayName = Pl;
var Il = `SelectBubbleInput`,
  Ll = f.forwardRef(({ __scopeSelect: e, ...t }, n) => {
    let r = Pc(Il, e),
      {
        value: i,
        onValueChange: a,
        required: o,
        disabled: s,
        name: c,
        autoComplete: l,
        form: u,
      } = r,
      { nativeOptions: d, nativeSelectKey: p } = r,
      m = f.useRef(null),
      h = W(n, m),
      g = i ?? ``,
      _ = ns(g),
      v = Array.from(d).some((e) => (e.props.value ?? ``) === ``);
    return (
      f.useEffect(() => {
        let e = m.current;
        if (!e) return;
        let t = window.HTMLSelectElement.prototype,
          n = Object.getOwnPropertyDescriptor(t, `value`).set;
        if (_ !== g && n) {
          let t = new Event(`change`, { bubbles: !0 });
          (n.call(e, g), e.dispatchEvent(t));
        }
      }, [_, g]),
      (0, X.jsxs)(
        Z.select,
        {
          "aria-hidden": !0,
          required: o,
          tabIndex: -1,
          name: c,
          autoComplete: l,
          disabled: s,
          form: u,
          onChange: (e) => a(e.target.value),
          ...t,
          style: { ...rs, ...t.style },
          ref: h,
          defaultValue: g,
          children: [
            zl(i) && !v ? (0, X.jsx)(`option`, { value: `` }) : null,
            Array.from(d),
          ],
        },
        p,
      )
    );
  });
Ll.displayName = Il;
function Rl(e) {
  return typeof e == `function`;
}
function zl(e) {
  return e === `` || e === void 0;
}
function Bl(e) {
  let t = wn(e),
    n = f.useRef(``),
    r = f.useRef(0),
    i = f.useCallback(
      (e) => {
        let i = n.current + e;
        (t(i),
          (function e(t) {
            ((n.current = t),
              window.clearTimeout(r.current),
              t !== `` && (r.current = window.setTimeout(() => e(``), 1e3)));
          })(i));
      },
      [t],
    ),
    a = f.useCallback(() => {
      ((n.current = ``), window.clearTimeout(r.current));
    }, []);
  return (
    f.useEffect(() => () => window.clearTimeout(r.current), []),
    [n, i, a]
  );
}
function Vl(e, t, n) {
  let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1,
    a = Hl(e, Math.max(i, 0));
  r.length === 1 && (a = a.filter((e) => e !== n));
  let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
  return o === n ? void 0 : o;
}
function Hl(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Ul = zc,
  Wl = Uc,
  Gl = f.forwardRef(({ className: e, children: t, ...n }, r) =>
    (0, X.jsxs)(Vc, {
      ref: r,
      className: Y(
        `flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`,
        e,
      ),
      ...n,
      children: [
        t,
        (0, X.jsx)(Gc, {
          asChild: !0,
          children: (0, X.jsx)(g, { className: `h-4 w-4 opacity-50` }),
        }),
      ],
    }),
  );
Gl.displayName = Vc.displayName;
var Kl = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(Ol, {
    ref: n,
    className: Y(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, X.jsx)(_, { className: `h-4 w-4` }),
  }),
);
Kl.displayName = Ol.displayName;
var ql = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(Al, {
    ref: n,
    className: Y(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, X.jsx)(g, { className: `h-4 w-4` }),
  }),
);
ql.displayName = Al.displayName;
var Jl = f.forwardRef(
  ({ className: e, children: t, position: n = `popper`, ...r }, i) =>
    (0, X.jsx)(Yc, {
      children: (0, X.jsxs)(Zc, {
        ref: i,
        className: Y(
          `relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)`,
          n === `popper` &&
            `data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,
          e,
        ),
        position: n,
        ...r,
        children: [
          (0, X.jsx)(Kl, {}),
          (0, X.jsx)(fl, {
            className: Y(
              `p-1`,
              n === `popper` &&
                `h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]`,
            ),
            children: t,
          }),
          (0, X.jsx)(ql, {}),
        ],
      }),
    }),
);
Jl.displayName = Zc.displayName;
var Yl = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(vl, {
    ref: n,
    className: Y(`px-2 py-1.5 text-sm font-semibold`, e),
    ...t,
  }),
);
Yl.displayName = vl.displayName;
var Xl = f.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, X.jsxs)(Sl, {
    ref: r,
    className: Y(
      `relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-primary/15 focus:bg-primary/15 focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    ...n,
    children: [
      (0, X.jsx)(`span`, {
        className: `absolute right-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, X.jsx)(El, {
          children: (0, X.jsx)(h, { className: `h-4 w-4` }),
        }),
      }),
      (0, X.jsx)(wl, { children: t }),
    ],
  }),
);
Xl.displayName = Sl.displayName;
var Zl = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(Nl, { ref: n, className: Y(`-mx-1 my-1 h-px bg-muted`, e), ...t }),
);
Zl.displayName = Nl.displayName;
var Ql = `Popover`,
  [$l, eu] = vn(Ql, [Po]),
  tu = Po(),
  [nu, ru] = $l(Ql),
  iu = (e) => {
    let {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        modal: o = !1,
      } = e,
      s = tu(t),
      c = f.useRef(null),
      [l, u] = f.useState(!1),
      [d, p] = En({ prop: r, defaultProp: i ?? !1, onChange: a, caller: Ql });
    return (0, X.jsx)(Xo, {
      ...s,
      children: (0, X.jsx)(nu, {
        scope: t,
        contentId: Cn(),
        triggerRef: c,
        open: d,
        onOpenChange: p,
        onOpenToggle: f.useCallback(() => p((e) => !e), [p]),
        hasCustomAnchor: l,
        onCustomAnchorAdd: f.useCallback(() => u(!0), []),
        onCustomAnchorRemove: f.useCallback(() => u(!1), []),
        modal: o,
        children: n,
      }),
    });
  };
iu.displayName = Ql;
var au = `PopoverAnchor`,
  ou = f.forwardRef((e, t) => {
    let { __scopePopover: n, ...r } = e,
      i = ru(au, n),
      a = tu(n),
      { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
    return (
      f.useEffect(() => (o(), () => s()), [o, s]),
      (0, X.jsx)(Zo, { ...a, ...r, ref: t })
    );
  });
ou.displayName = au;
var su = `PopoverTrigger`,
  cu = f.forwardRef((e, t) => {
    let { __scopePopover: n, ...r } = e,
      i = ru(su, n),
      a = tu(n),
      o = W(t, i.triggerRef),
      s = (0, X.jsx)(Z.button, {
        type: `button`,
        "aria-haspopup": `dialog`,
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": Cu(i.open),
        ...r,
        ref: o,
        onClick: Q(e.onClick, i.onOpenToggle),
      });
    return i.hasCustomAnchor
      ? s
      : (0, X.jsx)(Zo, { asChild: !0, ...a, children: s });
  });
cu.displayName = su;
var lu = `PopoverPortal`,
  [uu, du] = $l(lu, { forceMount: void 0 }),
  fu = (e) => {
    let { __scopePopover: t, forceMount: n, children: r, container: i } = e,
      a = ru(lu, t);
    return (0, X.jsx)(uu, {
      scope: t,
      forceMount: n,
      children: (0, X.jsx)(ar, {
        present: n || a.open,
        children: (0, X.jsx)(ts, { asChild: !0, container: i, children: r }),
      }),
    });
  };
fu.displayName = lu;
var pu = `PopoverContent`,
  mu = f.forwardRef((e, t) => {
    let n = du(pu, e.__scopePopover),
      { forceMount: r = n.forceMount, ...i } = e,
      a = ru(pu, e.__scopePopover);
    return (0, X.jsx)(ar, {
      present: r || a.open,
      children: a.modal
        ? (0, X.jsx)(gu, { ...i, ref: t })
        : (0, X.jsx)(_u, { ...i, ref: t }),
    });
  });
mu.displayName = pu;
var hu = me(`PopoverContent.RemoveScroll`),
  gu = f.forwardRef((e, t) => {
    let n = ru(pu, e.__scopePopover),
      r = f.useRef(null),
      i = W(t, r),
      a = f.useRef(!1);
    return (
      f.useEffect(() => {
        let e = r.current;
        if (e) return ms(e);
      }, []),
      (0, X.jsx)(Cc, {
        as: hu,
        allowPinchZoom: !0,
        children: (0, X.jsx)(vu, {
          ...e,
          ref: i,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: Q(e.onCloseAutoFocus, (e) => {
            (e.preventDefault(), a.current || n.triggerRef.current?.focus());
          }),
          onPointerDownOutside: Q(
            e.onPointerDownOutside,
            (e) => {
              let t = e.detail.originalEvent,
                n = t.button === 0 && t.ctrlKey === !0,
                r = t.button === 2 || n;
              a.current = r;
            },
            { checkForDefaultPrevented: !1 },
          ),
          onFocusOutside: Q(e.onFocusOutside, (e) => e.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  _u = f.forwardRef((e, t) => {
    let n = ru(pu, e.__scopePopover),
      r = f.useRef(!1),
      i = f.useRef(!1);
    return (0, X.jsx)(vu, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (t) => {
        (e.onCloseAutoFocus?.(t),
          t.defaultPrevented ||
            (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
          (r.current = !1),
          (i.current = !1));
      },
      onInteractOutside: (t) => {
        (e.onInteractOutside?.(t),
          t.defaultPrevented ||
            ((r.current = !0),
            t.detail.originalEvent.type === `pointerdown` && (i.current = !0)));
        let a = t.target;
        (n.triggerRef.current?.contains(a) && t.preventDefault(),
          t.detail.originalEvent.type === `focusin` &&
            i.current &&
            t.preventDefault());
      },
    });
  }),
  vu = f.forwardRef((e, t) => {
    let {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: i,
        onCloseAutoFocus: a,
        disableOutsidePointerEvents: o,
        onEscapeKeyDown: s,
        onPointerDownOutside: c,
        onFocusOutside: l,
        onInteractOutside: u,
        ...d
      } = e,
      f = ru(pu, n),
      p = tu(n);
    return (
      Qr(),
      (0, X.jsx)(ii, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: i,
        onUnmountAutoFocus: a,
        children: (0, X.jsx)(Vr, {
          asChild: !0,
          disableOutsidePointerEvents: o,
          onInteractOutside: u,
          onEscapeKeyDown: s,
          onPointerDownOutside: c,
          onFocusOutside: l,
          onDismiss: () => f.onOpenChange(!1),
          deferPointerDownOutside: !0,
          children: (0, X.jsx)(Qo, {
            "data-state": Cu(f.open),
            role: `dialog`,
            id: f.contentId,
            ...p,
            ...d,
            ref: t,
            style: {
              ...d.style,
              "--radix-popover-content-transform-origin": `var(--radix-popper-transform-origin)`,
              "--radix-popover-content-available-width": `var(--radix-popper-available-width)`,
              "--radix-popover-content-available-height": `var(--radix-popper-available-height)`,
              "--radix-popover-trigger-width": `var(--radix-popper-anchor-width)`,
              "--radix-popover-trigger-height": `var(--radix-popper-anchor-height)`,
            },
          }),
        }),
      })
    );
  }),
  yu = `PopoverClose`,
  bu = f.forwardRef((e, t) => {
    let { __scopePopover: n, ...r } = e,
      i = ru(yu, n);
    return (0, X.jsx)(Z.button, {
      type: `button`,
      ...r,
      ref: t,
      onClick: Q(e.onClick, () => i.onOpenChange(!1)),
    });
  });
bu.displayName = yu;
var xu = `PopoverArrow`,
  Su = f.forwardRef((e, t) => {
    let { __scopePopover: n, ...r } = e,
      i = tu(n);
    return (0, X.jsx)($o, { ...i, ...r, ref: t });
  });
Su.displayName = xu;
function Cu(e) {
  return e ? `open` : `closed`;
}
var wu = iu,
  Tu = cu,
  Eu = fu,
  Du = mu,
  Ou = wu,
  ku = Tu,
  Au = f.forwardRef(
    ({ className: e, align: t = `center`, sideOffset: n = 4, ...r }, i) =>
      (0, X.jsx)(Eu, {
        children: (0, X.jsx)(Du, {
          ref: i,
          align: t,
          sideOffset: n,
          className: Y(
            `z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)`,
            e,
          ),
          ...r,
        }),
      }),
  );
Au.displayName = Du.displayName;
var ju = `Checkbox`,
  [Mu, Nu] = vn(ju),
  [Pu, Fu] = Mu(ju);
function Iu(e) {
  let {
      __scopeCheckbox: t,
      checked: n,
      children: r,
      defaultChecked: i,
      disabled: a,
      form: o,
      name: s,
      onCheckedChange: c,
      required: l,
      value: u = `on`,
      internal_do_not_use_render: d,
    } = e,
    [p, m] = En({ prop: n, defaultProp: i ?? !1, onChange: c, caller: ju }),
    [h, g] = f.useState(null),
    [_, v] = f.useState(null),
    y = f.useRef(!1),
    b = !h || !!o || !!h.closest(`form`),
    x = {
      checked: p,
      disabled: a,
      setChecked: m,
      control: h,
      setControl: g,
      name: s,
      form: o,
      value: u,
      hasConsumerStoppedPropagationRef: y,
      required: l,
      defaultChecked: !Gu(i) && i,
      isFormControl: b,
      bubbleInput: _,
      setBubbleInput: v,
    };
  return (0, X.jsx)(Pu, { scope: t, ...x, children: Wu(d) ? d(x) : r });
}
var Lu = `CheckboxTrigger`,
  Ru = f.forwardRef(
    ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, i) => {
      let {
          control: a,
          value: o,
          disabled: s,
          checked: c,
          required: l,
          setControl: u,
          setChecked: d,
          hasConsumerStoppedPropagationRef: p,
          isFormControl: m,
          bubbleInput: h,
        } = Fu(Lu, e),
        g = W(i, u),
        _ = f.useRef(c);
      return (
        f.useEffect(() => {
          let e = a?.form;
          if (e) {
            let t = () => d(_.current);
            return (
              e.addEventListener(`reset`, t),
              () => e.removeEventListener(`reset`, t)
            );
          }
        }, [a, d]),
        (0, X.jsx)(Z.button, {
          type: `button`,
          role: `checkbox`,
          "aria-checked": Gu(c) ? `mixed` : c,
          "aria-required": l,
          "data-state": Ku(c),
          "data-disabled": s ? `` : void 0,
          disabled: s,
          value: o,
          ...r,
          ref: g,
          onKeyDown: Q(t, (e) => {
            e.key === `Enter` && e.preventDefault();
          }),
          onClick: Q(n, (e) => {
            (d((e) => (Gu(e) ? !0 : !e)),
              h &&
                m &&
                ((p.current = e.isPropagationStopped()),
                p.current || e.stopPropagation()));
          }),
        })
      );
    },
  );
Ru.displayName = Lu;
var zu = f.forwardRef((e, t) => {
  let {
    __scopeCheckbox: n,
    name: r,
    checked: i,
    defaultChecked: a,
    required: o,
    disabled: s,
    value: c,
    onCheckedChange: l,
    form: u,
    ...d
  } = e;
  return (0, X.jsx)(Iu, {
    __scopeCheckbox: n,
    checked: i,
    defaultChecked: a,
    disabled: s,
    required: o,
    onCheckedChange: l,
    name: r,
    form: u,
    value: c,
    internal_do_not_use_render: ({ isFormControl: e }) =>
      (0, X.jsxs)(X.Fragment, {
        children: [
          (0, X.jsx)(Ru, { ...d, ref: t, __scopeCheckbox: n }),
          e && (0, X.jsx)(Uu, { __scopeCheckbox: n }),
        ],
      }),
  });
});
zu.displayName = ju;
var Bu = `CheckboxIndicator`,
  Vu = f.forwardRef((e, t) => {
    let { __scopeCheckbox: n, forceMount: r, ...i } = e,
      a = Fu(Bu, n);
    return (0, X.jsx)(ar, {
      present: r || Gu(a.checked) || a.checked === !0,
      children: (0, X.jsx)(Z.span, {
        "data-state": Ku(a.checked),
        "data-disabled": a.disabled ? `` : void 0,
        ...i,
        ref: t,
        style: { pointerEvents: `none`, ...e.style },
      }),
    });
  });
Vu.displayName = Bu;
var Hu = `CheckboxBubbleInput`,
  Uu = f.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
    let {
        control: r,
        hasConsumerStoppedPropagationRef: i,
        checked: a,
        defaultChecked: o,
        required: s,
        disabled: c,
        name: l,
        value: u,
        form: d,
        bubbleInput: p,
        setBubbleInput: m,
      } = Fu(Hu, e),
      h = W(n, m),
      g = ns(a),
      _ = jo(r);
    f.useEffect(() => {
      let e = p;
      if (!e) return;
      let t = window.HTMLInputElement.prototype,
        n = Object.getOwnPropertyDescriptor(t, `checked`).set,
        r = !i.current;
      if (g !== a && n) {
        let t = new Event(`click`, { bubbles: r });
        ((e.indeterminate = Gu(a)), n.call(e, !Gu(a) && a), e.dispatchEvent(t));
      }
    }, [p, g, a, i]);
    let v = f.useRef(!Gu(a) && a);
    return (0, X.jsx)(Z.input, {
      type: `checkbox`,
      "aria-hidden": !0,
      defaultChecked: o ?? v.current,
      required: s,
      disabled: c,
      name: l,
      value: u,
      form: d,
      ...t,
      tabIndex: -1,
      ref: h,
      style: {
        ...t.style,
        ..._,
        position: `absolute`,
        pointerEvents: `none`,
        opacity: 0,
        margin: 0,
        transform: `translateX(-100%)`,
      },
    });
  });
Uu.displayName = Hu;
function Wu(e) {
  return typeof e == `function`;
}
function Gu(e) {
  return e === `indeterminate`;
}
function Ku(e) {
  return Gu(e) ? `indeterminate` : e ? `checked` : `unchecked`;
}
var qu = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(zu, {
    ref: n,
    className: Y(
      `grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground`,
      e,
    ),
    ...t,
    children: (0, X.jsx)(Vu, {
      className: Y(`grid place-content-center text-current`),
      children: (0, X.jsx)(h, { className: `h-4 w-4` }),
    }),
  }),
);
qu.displayName = zu.displayName;
var Ju = ({ ...e }) =>
    (0, X.jsx)(de, {
      className: `toaster group`,
      toastOptions: {
        classNames: {
          toast: `group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg`,
          description: `group-[.toast]:text-muted-foreground`,
          actionButton: `group-[.toast]:bg-primary group-[.toast]:text-primary-foreground`,
          cancelButton: `group-[.toast]:bg-muted group-[.toast]:text-muted-foreground`,
        },
      },
      ...e,
    }),
  Yu = je(
    `inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`,
    {
      variants: {
        variant: {
          default: `border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80`,
          secondary: `border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80`,
          destructive: `border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80`,
          outline: `text-foreground`,
        },
      },
      defaultVariants: { variant: `default` },
    },
  );
function Xu({ className: e, variant: t, ...n }) {
  return (0, X.jsx)(`div`, { className: Y(Yu({ variant: t }), e), ...n });
}
var Zu = `Dialog`,
  [Qu, $u] = vn(Zu),
  [ed, td] = Qu(Zu),
  nd = (e) => {
    let {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        modal: o = !0,
      } = e,
      s = f.useRef(null),
      c = f.useRef(null),
      [l, u] = En({ prop: r, defaultProp: i ?? !1, onChange: a, caller: Zu });
    return (0, X.jsx)(ed, {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: Cn(),
      titleId: Cn(),
      descriptionId: Cn(),
      open: l,
      onOpenChange: u,
      onOpenToggle: f.useCallback(() => u((e) => !e), [u]),
      modal: o,
      children: n,
    });
  };
nd.displayName = Zu;
var rd = `DialogTrigger`,
  id = f.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = td(rd, n),
      a = W(t, i.triggerRef);
    return (0, X.jsx)(Z.button, {
      type: `button`,
      "aria-haspopup": `dialog`,
      "aria-expanded": i.open,
      "aria-controls": i.open ? i.contentId : void 0,
      "data-state": wd(i.open),
      ...r,
      ref: a,
      onClick: Q(e.onClick, i.onOpenToggle),
    });
  });
id.displayName = rd;
var ad = `DialogPortal`,
  [od, sd] = Qu(ad, { forceMount: void 0 }),
  cd = (e) => {
    let { __scopeDialog: t, forceMount: n, children: r, container: i } = e,
      a = td(ad, t);
    return (0, X.jsx)(od, {
      scope: t,
      forceMount: n,
      children: f.Children.map(r, (e) =>
        (0, X.jsx)(ar, {
          present: n || a.open,
          children: (0, X.jsx)(ts, { asChild: !0, container: i, children: e }),
        }),
      ),
    });
  };
cd.displayName = ad;
var ld = `DialogOverlay`,
  ud = f.forwardRef((e, t) => {
    let n = sd(ld, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...i } = e,
      a = td(ld, e.__scopeDialog);
    return a.modal
      ? (0, X.jsx)(ar, {
          present: r || a.open,
          children: (0, X.jsx)(fd, { ...i, ref: t }),
        })
      : null;
  });
ud.displayName = ld;
var dd = me(`DialogOverlay.RemoveScroll`),
  fd = f.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = td(ld, n),
      a = W(t, Wr());
    return (0, X.jsx)(Cc, {
      as: dd,
      allowPinchZoom: !0,
      shards: [i.contentRef],
      children: (0, X.jsx)(Z.div, {
        "data-state": wd(i.open),
        ...r,
        ref: a,
        style: { pointerEvents: `auto`, ...r.style },
      }),
    });
  }),
  pd = `DialogContent`,
  md = f.forwardRef((e, t) => {
    let n = sd(pd, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...i } = e,
      a = td(pd, e.__scopeDialog);
    return (0, X.jsx)(ar, {
      present: r || a.open,
      children: a.modal
        ? (0, X.jsx)(hd, { ...i, ref: t })
        : (0, X.jsx)(gd, { ...i, ref: t }),
    });
  });
md.displayName = pd;
var hd = f.forwardRef((e, t) => {
    let n = td(pd, e.__scopeDialog),
      r = f.useRef(null),
      i = W(t, n.contentRef, r);
    return (
      f.useEffect(() => {
        let e = r.current;
        if (e) return ms(e);
      }, []),
      (0, X.jsx)(_d, {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        onCloseAutoFocus: Q(e.onCloseAutoFocus, (e) => {
          (e.preventDefault(), n.triggerRef.current?.focus());
        }),
        onPointerDownOutside: Q(e.onPointerDownOutside, (e) => {
          let t = e.detail.originalEvent,
            n = t.button === 0 && t.ctrlKey === !0;
          (t.button === 2 || n) && e.preventDefault();
        }),
        onFocusOutside: Q(e.onFocusOutside, (e) => e.preventDefault()),
      })
    );
  }),
  gd = f.forwardRef((e, t) => {
    let n = td(pd, e.__scopeDialog),
      r = f.useRef(!1),
      i = f.useRef(!1);
    return (0, X.jsx)(_d, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (t) => {
        (e.onCloseAutoFocus?.(t),
          t.defaultPrevented ||
            (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
          (r.current = !1),
          (i.current = !1));
      },
      onInteractOutside: (t) => {
        (e.onInteractOutside?.(t),
          t.defaultPrevented ||
            ((r.current = !0),
            t.detail.originalEvent.type === `pointerdown` && (i.current = !0)));
        let a = t.target;
        (n.triggerRef.current?.contains(a) && t.preventDefault(),
          t.detail.originalEvent.type === `focusin` &&
            i.current &&
            t.preventDefault());
      },
    });
  }),
  _d = f.forwardRef((e, t) => {
    let {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: i,
        onCloseAutoFocus: a,
        ...o
      } = e,
      s = td(pd, n);
    return (
      Qr(),
      (0, X.jsx)(X.Fragment, {
        children: (0, X.jsx)(ii, {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          children: (0, X.jsx)(Vr, {
            role: `dialog`,
            id: s.contentId,
            "aria-describedby": s.descriptionId,
            "aria-labelledby": s.titleId,
            "data-state": wd(s.open),
            ...o,
            ref: t,
            deferPointerDownOutside: !0,
            onDismiss: () => s.onOpenChange(!1),
          }),
        }),
      })
    );
  }),
  vd = `DialogTitle`,
  yd = f.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = td(vd, n);
    return (0, X.jsx)(Z.h2, { id: i.titleId, ...r, ref: t });
  });
yd.displayName = vd;
var bd = `DialogDescription`,
  xd = f.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = td(bd, n);
    return (0, X.jsx)(Z.p, { id: i.descriptionId, ...r, ref: t });
  });
xd.displayName = bd;
var Sd = `DialogClose`,
  Cd = f.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = td(Sd, n);
    return (0, X.jsx)(Z.button, {
      type: `button`,
      ...r,
      ref: t,
      onClick: Q(e.onClick, () => i.onOpenChange(!1)),
    });
  });
Cd.displayName = Sd;
function wd(e) {
  return e ? `open` : `closed`;
}
var Td = `AlertDialog`,
  [Ed, Dd] = vn(Td, [$u]),
  Od = $u(),
  kd = (e) => {
    let { __scopeAlertDialog: t, ...n } = e,
      r = Od(t);
    return (0, X.jsx)(nd, { ...r, ...n, modal: !0 });
  };
kd.displayName = Td;
var Ad = `AlertDialogTrigger`,
  jd = f.forwardRef((e, t) => {
    let { __scopeAlertDialog: n, ...r } = e,
      i = Od(n);
    return (0, X.jsx)(id, { ...i, ...r, ref: t });
  });
jd.displayName = Ad;
var Md = `AlertDialogPortal`,
  Nd = (e) => {
    let { __scopeAlertDialog: t, ...n } = e,
      r = Od(t);
    return (0, X.jsx)(cd, { ...r, ...n });
  };
Nd.displayName = Md;
var Pd = `AlertDialogOverlay`,
  Fd = f.forwardRef((e, t) => {
    let { __scopeAlertDialog: n, ...r } = e,
      i = Od(n);
    return (0, X.jsx)(ud, { ...i, ...r, ref: t });
  });
Fd.displayName = Pd;
var Id = `AlertDialogContent`,
  [Ld, Rd] = Ed(Id),
  zd = f.forwardRef((e, t) => {
    let { __scopeAlertDialog: n, children: r, ...i } = e,
      a = Od(n),
      o = W(t, f.useRef(null)),
      s = f.useRef(null);
    return (0, X.jsx)(Ld, {
      scope: n,
      cancelRef: s,
      children: (0, X.jsx)(md, {
        role: `alertdialog`,
        ...a,
        ...i,
        ref: o,
        onOpenAutoFocus: Q(i.onOpenAutoFocus, (e) => {
          (e.preventDefault(), s.current?.focus({ preventScroll: !0 }));
        }),
        onPointerDownOutside: (e) => e.preventDefault(),
        onInteractOutside: (e) => e.preventDefault(),
        children: r,
      }),
    });
  });
zd.displayName = Id;
var Bd = `AlertDialogTitle`,
  Vd = f.forwardRef((e, t) => {
    let { __scopeAlertDialog: n, ...r } = e,
      i = Od(n);
    return (0, X.jsx)(yd, { ...i, ...r, ref: t });
  });
Vd.displayName = Bd;
var Hd = `AlertDialogDescription`,
  Ud = f.forwardRef((e, t) => {
    let { __scopeAlertDialog: n, ...r } = e,
      i = Od(n);
    return (0, X.jsx)(xd, { ...i, ...r, ref: t });
  });
Ud.displayName = Hd;
var Wd = `AlertDialogAction`,
  Gd = f.forwardRef((e, t) => {
    let { __scopeAlertDialog: n, ...r } = e,
      i = Od(n);
    return (0, X.jsx)(Cd, { ...i, ...r, ref: t });
  });
Gd.displayName = Wd;
var Kd = `AlertDialogCancel`,
  qd = f.forwardRef((e, t) => {
    let { __scopeAlertDialog: n, ...r } = e,
      { cancelRef: i } = Rd(Kd, n),
      a = Od(n),
      o = W(t, i);
    return (0, X.jsx)(Cd, { ...a, ...r, ref: o });
  });
qd.displayName = Kd;
var Jd = kd,
  Yd = Nd,
  Xd = Fd,
  Zd = zd,
  Qd = Gd,
  $d = qd,
  ef = Vd,
  tf = Ud,
  nf = Jd,
  rf = Yd,
  af = f.forwardRef(({ className: e, ...t }, n) =>
    (0, X.jsx)(Xd, {
      className: Y(
        `fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
        e,
      ),
      ...t,
      ref: n,
    }),
  );
af.displayName = Xd.displayName;
var of = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsxs)(rf, {
    children: [
      (0, X.jsx)(af, {}),
      (0, X.jsx)(Zd, {
        ref: n,
        className: Y(
          `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg`,
          e,
        ),
        ...t,
      }),
    ],
  }),
);
of.displayName = Zd.displayName;
var sf = ({ className: e, ...t }) =>
  (0, X.jsx)(`div`, {
    className: Y(`flex flex-col space-y-2 text-center sm:text-left`, e),
    ...t,
  });
sf.displayName = `AlertDialogHeader`;
var cf = ({ className: e, ...t }) =>
  (0, X.jsx)(`div`, {
    className: Y(
      `flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`,
      e,
    ),
    ...t,
  });
cf.displayName = `AlertDialogFooter`;
var lf = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(ef, { ref: n, className: Y(`text-lg font-semibold`, e), ...t }),
);
lf.displayName = ef.displayName;
var uf = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(tf, {
    ref: n,
    className: Y(`text-sm text-muted-foreground`, e),
    ...t,
  }),
);
uf.displayName = tf.displayName;
var df = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)(Qd, { ref: n, className: Y(nn(), e), ...t }),
);
df.displayName = Qd.displayName;
var ff = f.forwardRef(({ className: e, ...t }, n) =>
  (0, X.jsx)($d, {
    ref: n,
    className: Y(nn({ variant: `outline` }), `mt-2 sm:mt-0`, e),
    ...t,
  }),
);
ff.displayName = $d.displayName;
var pf = `ZSINDAUG2026`,
  mf = [`A`, `B`, `C`],
  hf = `http://zionsports.runasp.net`,
  gf = new Map(),
  _f = new Map();
function vf() {
  (gf.clear(), _f.clear());
}
async function yf(e, t = {}) {
  let r = `${hf.replace(/\/$/, ``)}/${e.replace(/^\//, ``)}`,
    i = {
      "content-type": `application/json`,
      ...(t.headers instanceof Headers
        ? Object.fromEntries(t.headers.entries())
        : (t.headers ?? {})),
    };
  try {
    let e = await n.currentUser?.getIdToken();
    e && (i.Authorization = `Bearer ${e}`);
  } catch {}
  let a = await fetch(r, { ...t, headers: i, mode: `cors` });
  if (!a.ok) {
    let e = await a.text().catch(() => ``);
    throw Error(`API request failed ${a.status} ${a.statusText}: ${e}`);
  }
  return (a.headers.get(`content-type`) || ``).includes(`application/json`)
    ? await a.json()
    : await a.text();
}
function bf(e) {
  if (Array.isArray(e)) return e;
  if (!e || typeof e != `object`) return [];
  let t = e;
  if (Array.isArray(t.data)) return t.data;
  if (Array.isArray(t.items)) return t.items;
  if (Array.isArray(t.registrations)) return t.registrations;
  if (`registrationGuid` in t) return [t];
  let n = Object.values(t).find(Array.isArray);
  return Array.isArray(n) ? n : [];
}
async function xf(e) {
  let t = e ?? `__all__`,
    n = gf.get(t);
  if (n) return n;
  let r = _f.get(t);
  if (r) return r;
  let i = (async () => {
    let n = bf(
      e
        ? await yf(`api/Registration/email/${encodeURIComponent(e)}`)
        : await yf(`api/Registration`),
    );
    return (gf.set(t, n), n);
  })();
  _f.set(t, i);
  try {
    return await i;
  } finally {
    _f.delete(t);
  }
}
async function Sf(e) {
  let t = { ...e, eventName: pf },
    n = await yf(`api/Registration`, {
      method: `POST`,
      body: JSON.stringify(t),
    });
  return (vf(), n);
}
async function Cf(e, t) {
  let n = { ...t, eventName: pf },
    r = await yf(`api/Registration/${encodeURIComponent(e)}`, {
      method: `PUT`,
      body: JSON.stringify(n),
    });
  return (vf(), r);
}
async function wf(e) {
  (await yf(`api/Registration/${encodeURIComponent(e)}`, { method: `DELETE` }),
    vf());
}
function Tf(e, t) {
  if (e === `` || !Number.isFinite(Number(e))) return [];
  let n = Number(e),
    r = [];
  return (
    n >= 3 && n <= 5 && r.push(`25m Running Race`),
    n >= 6 &&
      n <= 9 &&
      r.push(`100 Meters Running`, `Memory Tray Game`, `Lemon in the spoon`),
    n >= 10 &&
      n <= 13 &&
      r.push(
        `200 Meters Running Race`,
        `Football Penalty Kick`,
        `Memory Tray Game`,
      ),
    n >= 14 && n <= 17 && r.push(`Football Penalty Kick`, `Plank Challenge`),
    n >= 18 &&
      n <= 40 &&
      r.push(`Basketball Free Throw Challenge`, `Wall Sit Challenge`),
    n >= 5 && r.push(`Chess Tournament [Fees Rs.100]`),
    n >= 7 &&
      n <= 15 &&
      r.push(
        `Kids Cricket Match [Fees Rs.100]`,
        `Kids Football Match [Fees Rs.100]`,
      ),
    n >= 16 &&
      t === `Female` &&
      r.push(`Women's Cricket [Fees Rs.100]`, `Womens Throwball [Fees Rs.100]`),
    r.sort()
  );
}
var Ef = () => ({
    participantGuid: crypto.randomUUID(),
    participantName: ``,
    age: ``,
    gender: ``,
    sportsParticipatingIn: [],
  }),
  Df = () => ({
    mobileNumber: ``,
    tower: ``,
    flatNo: ``,
    participants: [Ef()],
  }),
  Of = (e) => {
    if (typeof e == `string`) {
      let t = e
        .trim()
        .toUpperCase()
        .replace(/^TOWER[\s-]*/, ``);
      if (t === `A` || t === `B` || t === `C`) return t;
    }
    if (typeof e == `number`) {
      if (e === 1) return `A`;
      if (e === 2) return `B`;
      if (e === 3) return `C`;
    }
    return ``;
  };
function kf() {
  let { user: e, loading: t, signInWithGoogle: n, logout: r } = a(),
    [i, o] = (0, f.useState)(`list`),
    [s, c] = (0, f.useState)(null),
    [l, u] = (0, f.useState)(!1),
    [d, p] = (0, f.useState)(!1),
    m = !d,
    h = async () => {
      u(!0);
      try {
        await n();
      } catch (e) {
        (console.error(e), z.error(`Sign-in failed. Please try again.`));
      } finally {
        u(!1);
      }
    };
  if (t)
    return (0, X.jsxs)(`div`, {
      className: `flex min-h-screen items-center justify-center bg-background`,
      children: [
        (0, X.jsx)(Ju, { richColors: !0, position: `top-right` }),
        (0, X.jsx)(b, {
          className: `h-6 w-6 animate-spin text-muted-foreground`,
        }),
      ],
    });
  if (!e)
    return (0, X.jsxs)(`div`, {
      className: `flex min-h-screen items-center justify-center bg-background px-4`,
      children: [
        (0, X.jsx)(Ju, { richColors: !0, position: `top-right` }),
        (0, X.jsxs)(fn, {
          className: `w-full max-w-md`,
          children: [
            (0, X.jsxs)(pn, {
              children: [
                (0, X.jsx)(mn, {
                  children: `Zion Sports Event Registration - Aug 2026`,
                }),
                (0, X.jsx)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children: `Sign in with Google to register participants from family and manage your registrations.`,
                }),
              ],
            }),
            (0, X.jsx)(gn, {
              children: (0, X.jsxs)(rn, {
                onClick: h,
                disabled: l,
                className: `w-full`,
                children: [
                  l
                    ? (0, X.jsx)(b, { className: `mr-2 h-4 w-4 animate-spin` })
                    : null,
                  `Sign in with Google`,
                ],
              }),
            }),
          ],
        }),
      ],
    });
  let g = e.email ?? ``,
    _ = e.photoURL ?? ``,
    v = (e.displayName ?? g ?? `U`)
      .split(` `)
      .map((e) => e[0])
      .join(``)
      .slice(0, 2)
      .toUpperCase();
  return (0, X.jsxs)(`div`, {
    className: `min-h-screen bg-background`,
    children: [
      (0, X.jsx)(Ju, { richColors: !0, position: `top-right` }),
      (0, X.jsx)(`header`, {
        className: `border-b border-border/60 bg-card/80 backdrop-blur`,
        children: (0, X.jsxs)(`div`, {
          className: `mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8`,
          children: [
            (0, X.jsxs)(`div`, {
              className: `max-w-2xl`,
              children: [
                (0, X.jsx)(`div`, {
                  className: `mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-primary`,
                  children: `Bollineni Zion Sports Committee`,
                }),
                (0, X.jsx)(`h4`, {
                  className: `text-2xl font-semibold tracking-tight sm:text-2xl`,
                  children: `Zion Sports Event Registration - Aug 2026`,
                }),
                (0, X.jsxs)(`p`, {
                  className: `mt-2 text-sm text-muted-foreground sm:text-base`,
                  children: [
                    `All these events are planned to happen on any weekend of August 2026 [ Dates will be announced soon ].`,
                    (0, X.jsx)(`br`, {}),
                    `Assistance : `,
                    (0, X.jsxs)(`a`, {
                      href: `tel:+919597971915`,
                      children: [` `, `📞 Krishna Kumar`],
                    }),
                    ` | `,
                    (0, X.jsx)(`a`, {
                      href: `tel:+919003099645`,
                      children: ` 📞 Saravanan`,
                    }),
                    ` |`,
                    ` `,
                    (0, X.jsx)(`a`, {
                      href: `tel:+919003014921`,
                      children: ` 📞 Praveen`,
                    }),
                  ],
                }),
              ],
            }),
            (0, X.jsxs)(`div`, {
              className: `flex flex-wrap items-center gap-3 rounded-2xl border border-border/70 bg-background/70 px-4 py-3 shadow-sm`,
              children: [
                (0, X.jsxs)(`div`, {
                  className: `flex items-center gap-3`,
                  children: [
                    (0, X.jsx)(`div`, {
                      className: `flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/40 ring-2 ring-primary/20`,
                      children: _
                        ? (0, X.jsx)(`img`, {
                            src: _,
                            alt: e.displayName ?? `Profile`,
                            className: `h-full w-full object-cover`,
                          })
                        : (0, X.jsx)(`span`, {
                            className: `text-sm font-semibold text-foreground`,
                            children: v,
                          }),
                    }),
                    (0, X.jsxs)(`div`, {
                      className: `text-left text-xs text-muted-foreground sm:text-right`,
                      children: [
                        (0, X.jsx)(`div`, {
                          className: `font-semibold text-foreground`,
                          children: e.displayName ?? `User`,
                        }),
                        (0, X.jsx)(`div`, { children: g }),
                      ],
                    }),
                  ],
                }),
                (0, X.jsx)(rn, {
                  variant: `outline`,
                  size: `sm`,
                  onClick: () => r(),
                  children: `Sign out`,
                }),
              ],
            }),
          ],
        }),
      }),
      (0, X.jsx)(`main`, {
        className: `mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8`,
        children: (0, X.jsxs)(Ar, {
          value: i,
          onValueChange: (e) => o(e),
          children: [
            (0, X.jsxs)(jr, {
              className: `flex w-full flex-wrap justify-start rounded-full border border-border/70 bg-background/70 p-1 shadow-sm sm:w-auto`,
              children: [
                (0, X.jsx)(Mr, {
                  value: `list`,
                  className: `rounded-full px-4`,
                  children: `My Registrations`,
                }),
                m
                  ? (0, X.jsx)(Mr, {
                      value: `register`,
                      className: `flex-1 rounded-full px-4 sm:flex-none`,
                      children: s ? `Edit Registration` : `New Registration`,
                    })
                  : null,
              ],
            }),
            (0, X.jsx)(Nr, {
              value: `list`,
              className: `mt-6`,
              children: (0, X.jsx)(Af, {
                email: g,
                onEdit: (e) => {
                  (c(e), o(`register`));
                },
                onNoRegistrations: () => {
                  (p(!1), o(`register`));
                },
                onRegistrationsChange: p,
              }),
            }),
            (0, X.jsx)(Nr, {
              value: `register`,
              className: `mt-6`,
              children: (0, X.jsx)(Mf, {
                email: g,
                editing: s,
                onDone: () => {
                  (c(null), p(!0), o(`list`));
                },
                onCancelEdit: () => {
                  (c(null), p(!0), o(`list`));
                },
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Af({
  email: e,
  onEdit: t,
  onNoRegistrations: n,
  onRegistrationsChange: r,
}) {
  let [i, a] = (0, f.useState)(null),
    [o, s] = (0, f.useState)(null),
    [c, l] = (0, f.useState)(null),
    u = (0, f.useRef)(null),
    d = (0, f.useRef)(null),
    p = async () => {
      if (e && !(u.current === e && i !== null) && d.current !== e) {
        ((d.current = e), a(null));
        try {
          let t = await xf(e),
            n = Array.isArray(t) ? t : [];
          ((u.current = e), a(n), r(n.length > 0));
        } catch (e) {
          let t = String(e);
          if (t.includes(`API request failed 404`) || t.includes(`404`)) {
            (n(), r(!1));
            return;
          }
          (z.error(`Failed to load registrations`), a([]), r(!1));
        } finally {
          d.current === e && (d.current = null);
        }
      }
    };
  (0, f.useEffect)(() => {
    p();
  }, [e]);
  let m = async (e) => {
    s(e);
    try {
      (await wf(e),
        z.success(`Registration deleted`),
        a((t) => {
          let n = t?.filter((t) => t.registrationGuid !== e) ?? [];
          return (r(n.length > 0), n);
        }));
    } catch {
      z.error(`Failed to delete`);
    } finally {
      (s(null), l(null));
    }
  };
  return i === null
    ? (0, X.jsxs)(`div`, {
        className: `flex items-center justify-center py-20 text-muted-foreground`,
        children: [
          (0, X.jsx)(b, { className: `mr-2 h-5 w-5 animate-spin` }),
          `Loading registrations...`,
        ],
      })
    : (Array.isArray(i) ? i : []).length === 0
      ? (0, X.jsx)(fn, {
          children: (0, X.jsxs)(gn, {
            className: `flex flex-col items-center justify-center py-16 text-center`,
            children: [
              (0, X.jsx)(`p`, {
                className: `text-muted-foreground`,
                children: `No registrations yet.`,
              }),
              (0, X.jsx)(`p`, {
                className: `mt-1 text-sm text-muted-foreground`,
                children: `Head over to the New Registration tab to add one.`,
              }),
            ],
          }),
        })
      : (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(`div`, {
              className: `space-y-4`,
              children: i.map((e) =>
                (0, X.jsxs)(
                  fn,
                  {
                    children: [
                      (0, X.jsxs)(pn, {
                        className: `flex flex-row items-start justify-between gap-4 space-y-0`,
                        children: [
                          (0, X.jsxs)(`div`, {
                            children: [
                              (0, X.jsxs)(mn, {
                                className: `text-lg`,
                                children: [
                                  `Tower `,
                                  e.tower,
                                  ` · Flat `,
                                  e.flatNo,
                                ],
                              }),
                              (0, X.jsxs)(`p`, {
                                className: `mt-1 text-sm text-muted-foreground`,
                                children: [`Mobile: `, e.mobileNumber],
                              }),
                            ],
                          }),
                          (0, X.jsxs)(`div`, {
                            className: `flex gap-2`,
                            children: [
                              (0, X.jsxs)(rn, {
                                variant: `outline`,
                                size: `sm`,
                                onClick: () => t(e),
                                children: [
                                  (0, X.jsx)(x, { className: `mr-1 h-4 w-4` }),
                                  ` Edit`,
                                ],
                              }),
                              (0, X.jsxs)(rn, {
                                variant: `destructive`,
                                size: `sm`,
                                onClick: () => l(e.registrationGuid),
                                disabled: o === e.registrationGuid,
                                children: [
                                  o === e.registrationGuid
                                    ? (0, X.jsx)(b, {
                                        className: `mr-1 h-4 w-4 animate-spin`,
                                      })
                                    : (0, X.jsx)(C, {
                                        className: `mr-1 h-4 w-4`,
                                      }),
                                  `Delete`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, X.jsx)(gn, {
                        children: (0, X.jsx)(`div`, {
                          className: `grid gap-3 sm:grid-cols-2 lg:grid-cols-3`,
                          children: e.participants.map((e) =>
                            (0, X.jsxs)(
                              `div`,
                              {
                                className: `rounded-lg border bg-muted/30 p-3 text-sm`,
                                children: [
                                  (0, X.jsx)(`div`, {
                                    className: `font-medium`,
                                    children: e.participantName,
                                  }),
                                  (0, X.jsxs)(`div`, {
                                    className: `mt-1 text-muted-foreground`,
                                    children: [
                                      `Age `,
                                      e.age,
                                      ` · `,
                                      e.gender || `Not specified`,
                                    ],
                                  }),
                                  (0, X.jsx)(`div`, {
                                    className: `mt-2 flex flex-wrap gap-1`,
                                    children: e.sportsParticipatingIn.map((t) =>
                                      (0, X.jsx)(
                                        Xu,
                                        { variant: `secondary`, children: t },
                                        `${e.participantGuid}-${t}`,
                                      ),
                                    ),
                                  }),
                                ],
                              },
                              e.participantGuid,
                            ),
                          ),
                        }),
                      }),
                    ],
                  },
                  e.registrationGuid,
                ),
              ),
            }),
            (0, X.jsx)(nf, {
              open: c !== null,
              onOpenChange: (e) => !e && l(null),
              children: (0, X.jsxs)(of, {
                children: [
                  (0, X.jsxs)(sf, {
                    children: [
                      (0, X.jsx)(lf, { children: `Delete this registration?` }),
                      (0, X.jsx)(uf, {
                        children: `This action cannot be undone.`,
                      }),
                    ],
                  }),
                  (0, X.jsxs)(cf, {
                    children: [
                      (0, X.jsx)(ff, { children: `Cancel` }),
                      (0, X.jsx)(df, {
                        onClick: () => c && m(c),
                        children: `Delete`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
}
function jf({ value: e, options: t, onChange: n, disabled: r }) {
  let [i, a] = (0, f.useState)(!1),
    o = (t) => {
      n(e.includes(t) ? e.filter((e) => e !== t) : [...e, t]);
    },
    s =
      e.length === 0
        ? t.length === 0
          ? `Enter age first`
          : `Select sports`
        : `${e.length} selected`;
  return (0, X.jsxs)(Ou, {
    open: i,
    onOpenChange: a,
    children: [
      (0, X.jsx)(ku, {
        asChild: !0,
        children: (0, X.jsxs)(rn, {
          type: `button`,
          variant: `outline`,
          role: `combobox`,
          disabled: r || t.length === 0,
          className: `w-full justify-between font-normal`,
          children: [
            (0, X.jsx)(`span`, {
              className: e.length === 0 ? `text-muted-foreground` : ``,
              children: s,
            }),
            (0, X.jsx)(v, { className: `ml-2 h-4 w-4 opacity-50` }),
          ],
        }),
      }),
      (0, X.jsx)(Au, {
        className: `w-[--radix-popover-trigger-width] p-1`,
        align: `start`,
        children: (0, X.jsx)(`div`, {
          className: `max-h-64 overflow-auto`,
          children: t.map((t) => {
            let n = e.includes(t);
            return (0, X.jsxs)(
              `div`,
              {
                role: `button`,
                tabIndex: 0,
                onClick: () => o(t),
                onKeyDown: (e) => {
                  (e.key === `Enter` || e.key === ` `) &&
                    (e.preventDefault(), o(t));
                },
                className: `flex w-full items-center gap-2 rounded-sm px-2 py-2 text-left text-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`,
                children: [
                  (0, X.jsx)(qu, {
                    checked: n,
                    className: `pointer-events-none`,
                  }),
                  (0, X.jsx)(`span`, { className: `flex-1`, children: t }),
                  n && (0, X.jsx)(h, { className: `h-4 w-4 opacity-70` }),
                ],
              },
              t,
            );
          }),
        }),
      }),
    ],
  });
}
function Mf({ email: e, editing: t, onDone: n, onCancelEdit: r }) {
  let [i, a] = (0, f.useState)(Df()),
    [o, s] = (0, f.useState)(!1),
    [c, l] = (0, f.useState)({}),
    u = (0, f.useRef)(!1);
  (0, f.useEffect)(() => {
    if (t) {
      let e = Array.isArray(t.participants)
          ? t.participants
          : Array.isArray(t.participation)
            ? t.participation
            : [],
        n = Of(t.tower ?? t.towerName ?? t.towerCode ?? t.towerId ?? ``);
      a({
        mobileNumber: t.mobileNumber ?? ``,
        tower: n,
        flatNo:
          t.flatNo === void 0 || t.flatNo === null ? `` : String(t.flatNo),
        participants:
          e.length > 0
            ? e.map((e) => ({
                participantGuid: e.participantGuid ?? crypto.randomUUID(),
                participantName: e.participantName ?? ``,
                age: e.age === void 0 || e.age === null ? `` : e.age,
                gender: e.gender ?? ``,
                sportsParticipatingIn: Array.isArray(e.sportsParticipatingIn)
                  ? e.sportsParticipatingIn
                  : [],
              }))
            : [Ef()],
      });
    } else a(Df());
    l({});
  }, [t]);
  let d = (e, t) => a((n) => ({ ...n, [e]: t })),
    p = (e, t) =>
      a((n) => ({
        ...n,
        participants: n.participants.map((n) => {
          if (n.participantGuid !== e) return n;
          let r = { ...n, ...t };
          if (`age` in t || `gender` in t) {
            let e = Tf(r.age, r.gender);
            r.sportsParticipatingIn = r.sportsParticipatingIn.filter((t) =>
              e.includes(t),
            );
          }
          return r;
        }),
      })),
    m = () =>
      a((e) =>
        e.participants.length >= 5
          ? e
          : { ...e, participants: [...e.participants, Ef()] },
      ),
    h = (e) =>
      a((t) => ({
        ...t,
        participants:
          t.participants.length === 1
            ? t.participants
            : t.participants.filter((t) => t.participantGuid !== e),
      })),
    g = () => {
      let e = {};
      return (
        i.mobileNumber.trim()
          ? /^\d{10}$/.test(i.mobileNumber.trim()) ||
            (e.mobileNumber = `Enter a valid 10-digit mobile number`)
          : (e.mobileNumber = `Field is mandatory`),
        i.tower || (e.tower = `Field is mandatory`),
        i.flatNo.trim()
          ? /^\d+$/.test(i.flatNo.trim()) ||
            (e.flatNo = `Enter a valid flat number`)
          : (e.flatNo = `Field is mandatory`),
        i.participants.forEach((t, n) => {
          (t.participantName.trim() ||
            (e[`p_${n}_name`] = `Field is mandatory`),
            t.age === `` || t.age === null || t.age === void 0
              ? (e[`p_${n}_age`] = `Field is mandatory`)
              : Number(t.age) <= 0 && (e[`p_${n}_age`] = `Enter valid age`),
            t.gender || (e[`p_${n}_gender`] = `Field is mandatory`),
            (!t.sportsParticipatingIn ||
              t.sportsParticipatingIn.length === 0) &&
              (e[`p_${n}_sport`] = `Field is mandatory`));
        }),
        l(e),
        Object.keys(e).length === 0
      );
    },
    _ = async (r) => {
      if ((r.preventDefault(), !u.current)) {
        if (!g()) {
          z.error(`Please fix the errors in the form`);
          return;
        }
        ((u.current = !0), s(!0));
        try {
          let r = {
            email: e,
            mobileNumber: i.mobileNumber.trim(),
            tower: i.tower,
            flatNo: Number(i.flatNo.trim()),
            participants: i.participants.map((e) => ({
              ...e,
              participantName: e.participantName.trim(),
              age: Number(e.age),
            })),
          };
          (t
            ? (await Cf(t.registrationGuid, r),
              z.success(`Registration updated successfully`, {
                icon: (0, X.jsx)(y, { className: `h-4 w-4` }),
              }))
            : (await Sf(r),
              z.success(`Registration submitted successfully!`, {
                icon: (0, X.jsx)(y, { className: `h-4 w-4` }),
              })),
            n());
        } catch (e) {
          (console.error(e),
            z.error(
              String(e?.message ?? `Something went wrong. Please try again.`),
            ));
        } finally {
          (s(!1), (u.current = !1));
        }
      }
    },
    v = i.participants.length < 5;
  return (0, X.jsxs)(`form`, {
    onSubmit: _,
    className: `space-y-6`,
    children: [
      (0, X.jsxs)(fn, {
        children: [
          (0, X.jsx)(pn, {
            children: (0, X.jsx)(mn, { children: `Contact & Residence` }),
          }),
          (0, X.jsxs)(gn, {
            className: `grid gap-4 md:grid-cols-3`,
            children: [
              (0, X.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, X.jsxs)(dn, {
                    htmlFor: `mobile`,
                    className: `flex items-center gap-1`,
                    children: [
                      (0, X.jsx)(`span`, { children: `Mobile Number` }),
                      (0, X.jsx)(`span`, {
                        className: `text-destructive`,
                        children: `*`,
                      }),
                    ],
                  }),
                  (0, X.jsx)(an, {
                    id: `mobile`,
                    inputMode: `tel`,
                    maxLength: 10,
                    autoComplete: `new-password`,
                    autoCorrect: `off`,
                    spellCheck: !1,
                    placeholder: `10-digit number`,
                    value: i.mobileNumber,
                    onChange: (e) =>
                      d(`mobileNumber`, e.target.value.replace(/\D/g, ``)),
                    disabled: o,
                  }),
                  c.mobileNumber &&
                    (0, X.jsx)(`p`, {
                      className: `text-xs text-destructive`,
                      children: c.mobileNumber,
                    }),
                ],
              }),
              (0, X.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, X.jsxs)(dn, {
                    htmlFor: `tower`,
                    className: `flex items-center gap-1`,
                    children: [
                      (0, X.jsx)(`span`, { children: `Tower Name` }),
                      (0, X.jsx)(`span`, {
                        className: `text-destructive`,
                        children: `*`,
                      }),
                    ],
                  }),
                  (0, X.jsxs)(
                    Ul,
                    {
                      value: i.tower || void 0,
                      onValueChange: (e) => d(`tower`, e),
                      disabled: o,
                      children: [
                        (0, X.jsx)(Gl, {
                          id: `tower`,
                          children: (0, X.jsx)(Wl, {
                            placeholder: `Select tower`,
                          }),
                        }),
                        (0, X.jsx)(Jl, {
                          children: mf.map((e) =>
                            (0, X.jsxs)(
                              Xl,
                              { value: e, children: [`Tower `, e] },
                              e,
                            ),
                          ),
                        }),
                      ],
                    },
                    i.tower || `empty`,
                  ),
                  c.tower &&
                    (0, X.jsx)(`p`, {
                      className: `text-xs text-destructive`,
                      children: c.tower,
                    }),
                ],
              }),
              (0, X.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, X.jsxs)(dn, {
                    htmlFor: `flat`,
                    className: `flex items-center gap-1`,
                    children: [
                      (0, X.jsx)(`span`, { children: `Flat Number` }),
                      (0, X.jsx)(`span`, {
                        className: `text-destructive`,
                        children: `*`,
                      }),
                    ],
                  }),
                  (0, X.jsx)(an, {
                    id: `flat`,
                    inputMode: `numeric`,
                    autoComplete: `new-password`,
                    autoCorrect: `off`,
                    spellCheck: !1,
                    placeholder: `e.g. 1204`,
                    value: i.flatNo,
                    onChange: (e) =>
                      d(`flatNo`, e.target.value.replace(/\D/g, ``)),
                    disabled: o,
                  }),
                  c.flatNo &&
                    (0, X.jsx)(`p`, {
                      className: `text-xs text-destructive`,
                      children: c.flatNo,
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, X.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background/70 px-4 py-3 shadow-sm`,
        children: [
          (0, X.jsxs)(`div`, {
            children: [
              (0, X.jsx)(`h2`, {
                className: `text-lg font-semibold`,
                children: `Participants`,
              }),
              (0, X.jsxs)(`p`, {
                className: `text-xs text-muted-foreground`,
                children: [`Up to `, 5, ` participants per family.`],
              }),
            ],
          }),
          (0, X.jsxs)(rn, {
            type: `button`,
            variant: `outline`,
            onClick: m,
            disabled: o || !v,
            children: [
              (0, X.jsx)(S, { className: `mr-1 h-4 w-4` }),
              ` Add Participant`,
            ],
          }),
        ],
      }),
      (0, X.jsx)(`div`, {
        className: `grid gap-4`,
        children: i.participants.map((e, t) =>
          (0, X.jsx)(
            Nf,
            {
              index: t,
              participant: e,
              canRemove: i.participants.length > 1,
              errors: c,
              saving: o,
              onChange: (t) => p(e.participantGuid, t),
              onRemove: () => h(e.participantGuid),
            },
            e.participantGuid,
          ),
        ),
      }),
      (0, X.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-end gap-2`,
        children: [
          t &&
            (0, X.jsx)(rn, {
              type: `button`,
              variant: `outline`,
              onClick: r,
              disabled: o,
              children: `Cancel Edit`,
            }),
          (0, X.jsx)(rn, {
            type: `submit`,
            disabled: o,
            className: `min-w-40`,
            children: o
              ? (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsx)(b, { className: `mr-2 h-4 w-4 animate-spin` }),
                    `Saving...`,
                  ],
                })
              : t
                ? `Update Registration`
                : `Submit Registration`,
          }),
        ],
      }),
    ],
  });
}
function Nf({
  index: e,
  participant: t,
  canRemove: n,
  errors: r,
  saving: i,
  onChange: a,
  onRemove: o,
}) {
  let s = (0, f.useMemo)(() => Tf(t.age, t.gender), [t.age, t.gender]);
  return (0, X.jsxs)(fn, {
    children: [
      (0, X.jsxs)(pn, {
        className: `flex flex-row items-center justify-between space-y-0`,
        children: [
          (0, X.jsxs)(mn, {
            className: `text-base`,
            children: [`Participant `, e + 1],
          }),
          n &&
            (0, X.jsx)(rn, {
              type: `button`,
              variant: `ghost`,
              size: `sm`,
              onClick: o,
              disabled: i,
              children: (0, X.jsx)(w, { className: `h-4 w-4` }),
            }),
        ],
      }),
      (0, X.jsxs)(gn, {
        className: `grid gap-4 sm:grid-cols-2 lg:grid-cols-4`,
        children: [
          (0, X.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, X.jsxs)(dn, {
                className: `flex items-center gap-1`,
                children: [
                  (0, X.jsx)(`span`, { children: `Name` }),
                  (0, X.jsx)(`span`, {
                    className: `text-destructive`,
                    children: `*`,
                  }),
                ],
              }),
              (0, X.jsx)(an, {
                placeholder: `Full name`,
                autoComplete: `new-password`,
                autoCorrect: `off`,
                spellCheck: !1,
                value: t.participantName,
                onChange: (e) => a({ participantName: e.target.value }),
                disabled: i,
              }),
              r[`p_${e}_name`] &&
                (0, X.jsx)(`p`, {
                  className: `text-xs text-destructive`,
                  children: r[`p_${e}_name`],
                }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, X.jsxs)(dn, {
                className: `flex items-center gap-1`,
                children: [
                  (0, X.jsx)(`span`, { children: `Age` }),
                  (0, X.jsx)(`span`, {
                    className: `text-destructive`,
                    children: `*`,
                  }),
                ],
              }),
              (0, X.jsx)(an, {
                type: `number`,
                min: 1,
                max: 120,
                autoComplete: `new-password`,
                autoCorrect: `off`,
                spellCheck: !1,
                value: t.age,
                onChange: (e) =>
                  a({
                    age: e.target.value === `` ? `` : Number(e.target.value),
                  }),
                disabled: i,
              }),
              r[`p_${e}_age`] &&
                (0, X.jsx)(`p`, {
                  className: `text-xs text-destructive`,
                  children: r[`p_${e}_age`],
                }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, X.jsxs)(dn, {
                className: `flex items-center gap-1`,
                children: [
                  (0, X.jsx)(`span`, { children: `Gender` }),
                  (0, X.jsx)(`span`, {
                    className: `text-destructive`,
                    children: `*`,
                  }),
                ],
              }),
              (0, X.jsxs)(Ul, {
                value: t.gender || void 0,
                onValueChange: (e) => a({ gender: e }),
                disabled: i,
                children: [
                  (0, X.jsx)(Gl, {
                    children: (0, X.jsx)(Wl, { placeholder: `Select` }),
                  }),
                  (0, X.jsxs)(Jl, {
                    children: [
                      (0, X.jsx)(Xl, { value: `Male`, children: `Male` }),
                      (0, X.jsx)(Xl, { value: `Female`, children: `Female` }),
                    ],
                  }),
                ],
              }),
              r[`p_${e}_gender`] &&
                (0, X.jsx)(`p`, {
                  className: `text-xs text-destructive`,
                  children: r[`p_${e}_gender`],
                }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, X.jsxs)(dn, {
                className: `flex items-center gap-1`,
                children: [
                  (0, X.jsx)(`span`, { children: `Sports` }),
                  (0, X.jsx)(`span`, {
                    className: `text-destructive`,
                    children: `*`,
                  }),
                ],
              }),
              (0, X.jsx)(jf, {
                value: t.sportsParticipatingIn,
                options: s,
                onChange: (e) => a({ sportsParticipatingIn: e }),
                disabled: i,
              }),
              t.sportsParticipatingIn.length > 0 &&
                (0, X.jsx)(`div`, {
                  className: `flex flex-wrap gap-1 pt-1`,
                  children: t.sportsParticipatingIn.map((e) =>
                    (0, X.jsxs)(
                      Xu,
                      {
                        variant: `secondary`,
                        className: `gap-1`,
                        children: [
                          e,
                          (0, X.jsx)(`button`, {
                            type: `button`,
                            onClick: () =>
                              a({
                                sportsParticipatingIn:
                                  t.sportsParticipatingIn.filter(
                                    (t) => t !== e,
                                  ),
                              }),
                            className: `ml-1 opacity-70 hover:opacity-100`,
                            "aria-label": `Remove ${e}`,
                            children: (0, X.jsx)(w, { className: `h-3 w-3` }),
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              r[`p_${e}_sport`] &&
                (0, X.jsx)(`p`, {
                  className: `text-xs text-destructive`,
                  children: r[`p_${e}_sport`],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { kf as component };
