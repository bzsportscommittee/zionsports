var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  c = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule
        ? t(a, `default`, { value: n, enumerable: !0 })
        : a,
      n,
    )
  ),
  l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    ((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    var x = (b.prototype = new y());
    ((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0));
    var ee = Array.isArray;
    function S() {}
    var C = { H: null, A: null, T: null, S: null },
      te = Object.prototype.hasOwnProperty;
    function ne(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function re(e, t) {
      return ne(e.type, t, e.props);
    }
    function ie(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function ae(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var oe = /\/+/g;
    function se(e, t) {
      return typeof e == `object` && e && e.key != null
        ? ae(`` + e.key)
        : t.toString(36);
    }
    function ce(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(S, S)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function le(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), le(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + se(e, 0) : a),
          ee(o)
            ? ((i = ``),
              c != null && (i = c.replace(oe, `$&/`) + `/`),
              le(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (ie(o) &&
                (o = re(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(oe, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (ee(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + se(a, u)), (c += le(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + se(a, u++)), (c += le(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return le(ce(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function ue(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        le(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function de(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var w =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      E = {
        map: ue,
        forEach: function (e, t, n) {
          ue(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            ue(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            ue(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!ie(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`,
            );
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = E),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return C.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !te.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return ne(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            te.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return ne(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = ie),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: de,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = C.T,
          n = {};
        C.T = n;
        try {
          var r = e(),
            i = C.S;
          (i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(S, w));
        } catch (e) {
          w(e);
        } finally {
          (t !== null && n.types !== null && (t.types = n.types), (C.T = t));
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return C.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return C.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return C.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return C.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return C.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return C.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return C.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return C.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return C.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return C.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return C.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return C.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return C.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return C.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return C.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return C.H.useRef(e);
      }),
      (e.useState = function (e) {
        return C.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return C.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return C.H.useTransition();
      }),
      (e.version = `19.2.7`));
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), ee || ((ee = !0), ie()));
        else {
          var t = n(l);
          t !== null && se(x, t.startTime - e);
        }
    }
    var ee = !1,
      S = -1,
      C = 5,
      te = -1;
    function ne() {
      return g ? !0 : !(e.unstable_now() - te < C);
    }
    function re() {
      if (((g = !1), ee)) {
        var t = e.unstable_now();
        te = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(S), (S = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && ne());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && se(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? ie() : (ee = !1);
        }
      }
    }
    var ie;
    if (typeof y == `function`)
      ie = function () {
        y(re);
      };
    else if (typeof MessageChannel < `u`) {
      var ae = new MessageChannel(),
        oe = ae.port2;
      ((ae.port1.onmessage = re),
        (ie = function () {
          oe.postMessage(null);
        }));
    } else
      ie = function () {
        _(re, 0);
      };
    function se(t, n) {
      S = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (C = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(S), (S = -1)) : (h = !0), se(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), ee || ((ee = !0), ie()))),
          r
        );
      }),
      (e.unstable_shouldYield = ne),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  f = o((e, t) => {
    t.exports = d();
  }),
  p = o((e) => {
    var t = u();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          ((s.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.7`));
  }),
  m = o((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = p()));
  }),
  h = o((e) => {
    var t = f(),
      n = u(),
      r = m();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function d(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s;) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u;) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u;) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var h = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      ee = Symbol.for(`react.consumer`),
      S = Symbol.for(`react.context`),
      C = Symbol.for(`react.forward_ref`),
      te = Symbol.for(`react.suspense`),
      ne = Symbol.for(`react.suspense_list`),
      re = Symbol.for(`react.memo`),
      ie = Symbol.for(`react.lazy`),
      ae = Symbol.for(`react.activity`),
      oe = Symbol.for(`react.memo_cache_sentinel`),
      se = Symbol.iterator;
    function ce(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (se && e[se]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var le = Symbol.for(`react.client.reference`);
    function ue(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === le ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case te:
          return `Suspense`;
        case ne:
          return `SuspenseList`;
        case ae:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case S:
            return e.displayName || `Context`;
          case ee:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case C:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case re:
            return (
              (t = e.displayName || null),
              t === null ? ue(e.type) || `Memo` : t
            );
          case ie:
            ((t = e._payload), (e = e._init));
            try {
              return ue(e(t));
            } catch {}
        }
      return null;
    }
    var de = Array.isArray,
      w = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      E = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      fe = { pending: !1, data: null, method: null, action: null },
      pe = [],
      me = -1;
    function he(e) {
      return { current: e };
    }
    function D(e) {
      0 > me || ((e.current = pe[me]), (pe[me] = null), me--);
    }
    function O(e, t) {
      (me++, (pe[me] = e.current), (e.current = t));
    }
    var ge = he(null),
      _e = he(null),
      ve = he(null),
      ye = he(null);
    function be(e, t) {
      switch ((O(ve, t), O(_e, e), O(ge, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Ud(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = Ud(t)), (e = Wd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (D(ge), O(ge, e));
    }
    function xe() {
      (D(ge), D(_e), D(ve));
    }
    function Se(e) {
      e.memoizedState !== null && O(ye, e);
      var t = ge.current,
        n = Wd(t, e.type);
      t !== n && (O(_e, e), O(ge, n));
    }
    function Ce(e) {
      (_e.current === e && (D(ge), D(_e)),
        ye.current === e && (D(ye), ($f._currentValue = fe)));
    }
    var we, Te;
    function Ee(e) {
      if (we === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((we = (t && t[1]) || ``),
            (Te =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        we +
        e +
        Te
      );
    }
    var De = !1;
    function Oe(e, t) {
      if (!e || De) return ``;
      De = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);)
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((De = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? Ee(n) : ``;
    }
    function ke(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Ee(e.type);
        case 16:
          return Ee(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? Ee(`Suspense Fallback`)
            : Ee(`Suspense`);
        case 19:
          return Ee(`SuspenseList`);
        case 0:
        case 15:
          return Oe(e.type, !1);
        case 11:
          return Oe(e.type.render, !1);
        case 1:
          return Oe(e.type, !0);
        case 31:
          return Ee(`Activity`);
        default:
          return ``;
      }
    }
    function Ae(e) {
      try {
        var t = ``,
          n = null;
        do ((t += ke(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var je = Object.prototype.hasOwnProperty,
      Me = t.unstable_scheduleCallback,
      Ne = t.unstable_cancelCallback,
      Pe = t.unstable_shouldYield,
      Fe = t.unstable_requestPaint,
      Ie = t.unstable_now,
      Le = t.unstable_getCurrentPriorityLevel,
      Re = t.unstable_ImmediatePriority,
      ze = t.unstable_UserBlockingPriority,
      Be = t.unstable_NormalPriority,
      Ve = t.unstable_LowPriority,
      He = t.unstable_IdlePriority,
      Ue = t.log,
      We = t.unstable_setDisableYieldValue,
      Ge = null,
      Ke = null;
    function qe(e) {
      if (
        (typeof Ue == `function` && We(e),
        Ke && typeof Ke.setStrictMode == `function`)
      )
        try {
          Ke.setStrictMode(Ge, e);
        } catch {}
    }
    var Je = Math.clz32 ? Math.clz32 : Ze,
      Ye = Math.log,
      Xe = Math.LN2;
    function Ze(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ye(e) / Xe) | 0)) | 0);
    }
    var Qe = 256,
      $e = 262144,
      et = 4194304;
    function tt(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function nt(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = tt(n)))
                : (i = tt(o))
              : (i = tt(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = tt(n)))
                  : (i = tt(o)))
              : (i = tt(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function rt(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function it(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function at() {
      var e = et;
      return ((et <<= 1), !(et & 62914560) && (et = 4194304), e);
    }
    function ot(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function st(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function ct(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - Je(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && lt(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function lt(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Je(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function ut(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - Je(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function dt(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : ft(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function ft(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function pt(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function mt() {
      var e = E.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : hp(e.type)) : e;
    }
    function ht(e, t) {
      var n = E.p;
      try {
        return ((E.p = e), t());
      } finally {
        E.p = n;
      }
    }
    var gt = Math.random().toString(36).slice(2),
      _t = `__reactFiber$` + gt,
      vt = `__reactProps$` + gt,
      yt = `__reactContainer$` + gt,
      bt = `__reactEvents$` + gt,
      xt = `__reactListeners$` + gt,
      St = `__reactHandles$` + gt,
      Ct = `__reactResources$` + gt,
      wt = `__reactMarker$` + gt;
    function Tt(e) {
      (delete e[_t], delete e[vt], delete e[bt], delete e[xt], delete e[St]);
    }
    function Et(e) {
      var t = e[_t];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[yt] || n[_t])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = pf(e); e !== null;) {
              if ((n = e[_t])) return n;
              e = pf(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Dt(e) {
      if ((e = e[_t] || e[yt])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function Ot(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function kt(e) {
      var t = e[Ct];
      return (
        (t ||= e[Ct] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function At(e) {
      e[wt] = !0;
    }
    var jt = new Set(),
      Mt = {};
    function Nt(e, t) {
      (Pt(e, t), Pt(e + `Capture`, t));
    }
    function Pt(e, t) {
      for (Mt[e] = t, e = 0; e < t.length; e++) jt.add(t[e]);
    }
    var Ft = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      It = {},
      Lt = {};
    function Rt(e) {
      return je.call(Lt, e)
        ? !0
        : je.call(It, e)
          ? !1
          : Ft.test(e)
            ? (Lt[e] = !0)
            : ((It[e] = !0), !1);
    }
    function zt(e, t, n) {
      if (Rt(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function Bt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Vt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function Ht(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Ut(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function Wt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Gt(e) {
      if (!e._valueTracker) {
        var t = Ut(e) ? `checked` : `value`;
        e._valueTracker = Wt(e, t, `` + e[t]);
      }
    }
    function Kt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Ut(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      );
    }
    function qt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Jt = /[\n"\\]/g;
    function Yt(e) {
      return e.replace(Jt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Xt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + Ht(t))
            : e.value !== `` + Ht(t) && (e.value = `` + Ht(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Qt(e, o, Ht(n))
          : Qt(e, o, Ht(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + Ht(s))
          : e.removeAttribute(`name`));
    }
    function Zt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Gt(e);
          return;
        }
        ((n = n == null ? `` : `` + Ht(n)),
          (t = t == null ? n : `` + Ht(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Gt(e));
    }
    function Qt(e, t, n) {
      (t === `number` && qt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function $t(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + Ht(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function en(e, t, n) {
      if (
        t != null &&
        ((t = `` + Ht(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Ht(n);
    }
    function tn(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (de(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = Ht(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Gt(e));
    }
    function nn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var rn = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function an(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || rn.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function on(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var a in t)
          ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && an(e, a, r));
      } else for (var o in t) t.hasOwnProperty(o) && an(e, o, t[o]);
    }
    function sn(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var cn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      ln =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function un(e) {
      return ln.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function dn() {}
    var fn = null;
    function pn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var mn = null,
      hn = null;
    function gn(e) {
      var t = Dt(e);
      if (t && (e = t.stateNode)) {
        var n = e[vt] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Xt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + Yt(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[vt] || null;
                  if (!a) throw Error(i(90));
                  Xt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && Kt(r));
            }
            break a;
          case `textarea`:
            en(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && $t(e, !!n.multiple, t, !1));
        }
      }
    }
    var _n = !1;
    function vn(e, t, n) {
      if (_n) return e(t, n);
      _n = !0;
      try {
        return e(t);
      } finally {
        if (
          ((_n = !1),
          (mn !== null || hn !== null) &&
            (Cu(), mn && ((t = mn), (e = hn), (hn = mn = null), gn(t), e)))
        )
          for (t = 0; t < e.length; t++) gn(e[t]);
      }
    }
    function yn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[vt] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === `button` ||
              e === `input` ||
              e === `select` ||
              e === `textarea`
            ))),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var bn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      xn = !1;
    if (bn)
      try {
        var Sn = {};
        (Object.defineProperty(Sn, "passive", {
          get: function () {
            xn = !0;
          },
        }),
          window.addEventListener(`test`, Sn, Sn),
          window.removeEventListener(`test`, Sn, Sn));
      } catch {
        xn = !1;
      }
    var Cn = null,
      wn = null,
      Tn = null;
    function En() {
      if (Tn) return Tn;
      var e,
        t = wn,
        n = t.length,
        r,
        i = `value` in Cn ? Cn.value : Cn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Tn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Dn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function On() {
      return !0;
    }
    function kn() {
      return !1;
    }
    function An(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? On
            : kn),
          (this.isPropagationStopped = kn),
          this
        );
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = On));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = On));
          },
          persist: function () {},
          isPersistent: On,
        }),
        t
      );
    }
    var jn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Mn = An(jn),
      Nn = h({}, jn, { view: 0, detail: 0 }),
      Pn = An(Nn),
      Fn,
      In,
      Ln,
      Rn = h({}, Nn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Yn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Ln &&
                (Ln && e.type === `mousemove`
                  ? ((Fn = e.screenX - Ln.screenX),
                    (In = e.screenY - Ln.screenY))
                  : (In = Fn = 0),
                (Ln = e)),
              Fn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : In;
        },
      }),
      zn = An(Rn),
      Bn = An(h({}, Rn, { dataTransfer: 0 })),
      Vn = An(h({}, Nn, { relatedTarget: 0 })),
      Hn = An(
        h({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      Un = An(
        h({}, jn, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      Wn = An(h({}, jn, { data: 0 })),
      Gn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Kn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      qn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function Jn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = qn[e])
          ? !!t[e]
          : !1;
    }
    function Yn() {
      return Jn;
    }
    var Xn = An(
        h({}, Nn, {
          key: function (e) {
            if (e.key) {
              var t = Gn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = Dn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Kn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Yn,
          charCode: function (e) {
            return e.type === `keypress` ? Dn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? Dn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Zn = An(
        h({}, Rn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Qn = An(
        h({}, Nn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Yn,
        }),
      ),
      $n = An(h({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      er = An(
        h({}, Rn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      tr = An(h({}, jn, { newState: 0, oldState: 0 })),
      nr = [9, 13, 27, 32],
      rr = bn && `CompositionEvent` in window,
      ir = null;
    bn && `documentMode` in document && (ir = document.documentMode);
    var ar = bn && `TextEvent` in window && !ir,
      k = bn && (!rr || (ir && 8 < ir && 11 >= ir)),
      or = ` `,
      sr = !1;
    function cr(e, t) {
      switch (e) {
        case `keyup`:
          return nr.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function A(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var lr = !1;
    function ur(e, t) {
      switch (e) {
        case `compositionend`:
          return A(t);
        case `keypress`:
          return t.which === 32 ? ((sr = !0), or) : null;
        case `textInput`:
          return ((e = t.data), e === or && sr ? null : e);
        default:
          return null;
      }
    }
    function dr(e, t) {
      if (lr)
        return e === `compositionend` || (!rr && cr(e, t))
          ? ((e = En()), (Tn = wn = Cn = null), (lr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return k && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var fr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function pr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!fr[e.type] : t === `textarea`;
    }
    function mr(e, t, n, r) {
      (mn ? (hn ? hn.push(r) : (hn = [r])) : (mn = r),
        (t = Od(t, `onChange`)),
        0 < t.length &&
          ((n = new Mn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var hr = null,
      gr = null;
    function _r(e) {
      xd(e, 0);
    }
    function vr(e) {
      if (Kt(Ot(e))) return e;
    }
    function yr(e, t) {
      if (e === `change`) return t;
    }
    var br = !1;
    if (bn) {
      var xr;
      if (bn) {
        var Sr = `oninput` in document;
        if (!Sr) {
          var Cr = document.createElement(`div`);
          (Cr.setAttribute(`oninput`, `return;`),
            (Sr = typeof Cr.oninput == `function`));
        }
        xr = Sr;
      } else xr = !1;
      br = xr && (!document.documentMode || 9 < document.documentMode);
    }
    function wr() {
      hr && (hr.detachEvent(`onpropertychange`, Tr), (gr = hr = null));
    }
    function Tr(e) {
      if (e.propertyName === `value` && vr(gr)) {
        var t = [];
        (mr(t, gr, e, pn(e)), vn(_r, t));
      }
    }
    function Er(e, t, n) {
      e === `focusin`
        ? (wr(), (hr = t), (gr = n), hr.attachEvent(`onpropertychange`, Tr))
        : e === `focusout` && wr();
    }
    function Dr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return vr(gr);
    }
    function Or(e, t) {
      if (e === `click`) return vr(t);
    }
    function kr(e, t) {
      if (e === `input` || e === `change`) return vr(t);
    }
    function Ar(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var jr = typeof Object.is == `function` ? Object.is : Ar;
    function Mr(e, t) {
      if (jr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!je.call(t, i) || !jr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Nr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function Pr(e, t) {
      var n = Nr(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Nr(n);
      }
    }
    function Fr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Fr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Ir(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = qt(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = qt(e.document);
      }
      return t;
    }
    function Lr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Rr = bn && `documentMode` in document && 11 >= document.documentMode,
      zr = null,
      Br = null,
      Vr = null,
      Hr = !1;
    function Ur(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Hr ||
        zr == null ||
        zr !== qt(r) ||
        ((r = zr),
        `selectionStart` in r && Lr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Vr && Mr(Vr, r)) ||
          ((Vr = r),
          (r = Od(Br, `onSelect`)),
          0 < r.length &&
            ((t = new Mn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = zr))));
    }
    function Wr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Gr = {
        animationend: Wr(`Animation`, `AnimationEnd`),
        animationiteration: Wr(`Animation`, `AnimationIteration`),
        animationstart: Wr(`Animation`, `AnimationStart`),
        transitionrun: Wr(`Transition`, `TransitionRun`),
        transitionstart: Wr(`Transition`, `TransitionStart`),
        transitioncancel: Wr(`Transition`, `TransitionCancel`),
        transitionend: Wr(`Transition`, `TransitionEnd`),
      },
      Kr = {},
      qr = {};
    bn &&
      ((qr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Gr.animationend.animation,
        delete Gr.animationiteration.animation,
        delete Gr.animationstart.animation),
      `TransitionEvent` in window || delete Gr.transitionend.transition);
    function Jr(e) {
      if (Kr[e]) return Kr[e];
      if (!Gr[e]) return e;
      var t = Gr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in qr) return (Kr[e] = t[n]);
      return e;
    }
    var Yr = Jr(`animationend`),
      Xr = Jr(`animationiteration`),
      Zr = Jr(`animationstart`),
      Qr = Jr(`transitionrun`),
      $r = Jr(`transitionstart`),
      ei = Jr(`transitioncancel`),
      ti = Jr(`transitionend`),
      ni = new Map(),
      ri =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    ri.push(`scrollEnd`);
    function ii(e, t) {
      (ni.set(e, t), Nt(t, [e]));
    }
    var ai =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      oi = [],
      si = 0,
      ci = 0;
    function li() {
      for (var e = si, t = (ci = si = 0); t < e;) {
        var n = oi[t];
        oi[t++] = null;
        var r = oi[t];
        oi[t++] = null;
        var i = oi[t];
        oi[t++] = null;
        var a = oi[t];
        if (((oi[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && pi(n, i, a);
      }
    }
    function ui(e, t, n, r) {
      ((oi[si++] = e),
        (oi[si++] = t),
        (oi[si++] = n),
        (oi[si++] = r),
        (ci |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function di(e, t, n, r) {
      return (ui(e, t, n, r), mi(e));
    }
    function fi(e, t) {
      return (ui(e, null, null, t), mi(e));
    }
    function pi(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Je(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function mi(e) {
      if (50 < mu) throw ((mu = 0), (hu = null), Error(i(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var hi = {};
    function gi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function _i(e, t, n, r) {
      return new gi(e, t, n, r);
    }
    function vi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function yi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = _i(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function bi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function xi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) vi(e) && (s = 1);
      else if (typeof e == `string`)
        s = Gf(e, n, ge.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (e) {
          case ae:
            return (
              (e = _i(31, n, t, a)),
              (e.elementType = ae),
              (e.lanes = o),
              e
            );
          case y:
            return Si(n.children, a, o, t);
          case b:
            ((s = 8), (a |= 24));
            break;
          case x:
            return (
              (e = _i(12, n, t, a | 2)),
              (e.elementType = x),
              (e.lanes = o),
              e
            );
          case te:
            return (
              (e = _i(13, n, t, a)),
              (e.elementType = te),
              (e.lanes = o),
              e
            );
          case ne:
            return (
              (e = _i(19, n, t, a)),
              (e.elementType = ne),
              (e.lanes = o),
              e
            );
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case S:
                  s = 10;
                  break a;
                case ee:
                  s = 9;
                  break a;
                case C:
                  s = 11;
                  break a;
                case re:
                  s = 14;
                  break a;
                case ie:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = _i(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function Si(e, t, n, r) {
      return ((e = _i(7, e, r, t)), (e.lanes = n), e);
    }
    function Ci(e, t, n) {
      return ((e = _i(6, e, null, t)), (e.lanes = n), e);
    }
    function wi(e) {
      var t = _i(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function Ti(e, t, n) {
      return (
        (t = _i(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Ei = new WeakMap();
    function Di(e, t) {
      if (typeof e == `object` && e) {
        var n = Ei.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: Ae(t) }), Ei.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: Ae(t) };
    }
    var Oi = [],
      ki = 0,
      Ai = null,
      ji = 0,
      Mi = [],
      Ni = 0,
      Pi = null,
      Fi = 1,
      Ii = ``;
    function Li(e, t) {
      ((Oi[ki++] = ji), (Oi[ki++] = Ai), (Ai = e), (ji = t));
    }
    function Ri(e, t, n) {
      ((Mi[Ni++] = Fi), (Mi[Ni++] = Ii), (Mi[Ni++] = Pi), (Pi = e));
      var r = Fi;
      e = Ii;
      var i = 32 - Je(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Je(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Fi = (1 << (32 - Je(t) + i)) | (n << i) | r),
          (Ii = a + e));
      } else ((Fi = (1 << a) | (n << i) | r), (Ii = e));
    }
    function zi(e) {
      e.return !== null && (Li(e, 1), Ri(e, 1, 0));
    }
    function Bi(e) {
      for (; e === Ai;)
        ((Ai = Oi[--ki]), (Oi[ki] = null), (ji = Oi[--ki]), (Oi[ki] = null));
      for (; e === Pi;)
        ((Pi = Mi[--Ni]),
          (Mi[Ni] = null),
          (Ii = Mi[--Ni]),
          (Mi[Ni] = null),
          (Fi = Mi[--Ni]),
          (Mi[Ni] = null));
    }
    function Vi(e, t) {
      ((Mi[Ni++] = Fi),
        (Mi[Ni++] = Ii),
        (Mi[Ni++] = Pi),
        (Fi = t.id),
        (Ii = t.overflow),
        (Pi = e));
    }
    var Hi = null,
      j = null,
      M = !1,
      Ui = null,
      Wi = !1,
      Gi = Error(i(519));
    function Ki(e) {
      throw (
        Qi(
          Di(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Gi
      );
    }
    function qi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[_t] = e), (t[vt] = r), n)) {
        case `dialog`:
          (Z(`cancel`, t), Z(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Z(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < yd.length; n++) Z(yd[n], t);
          break;
        case `source`:
          Z(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Z(`error`, t), Z(`load`, t));
          break;
        case `details`:
          Z(`toggle`, t);
          break;
        case `input`:
          (Z(`invalid`, t),
            Zt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ));
          break;
        case `select`:
          Z(`invalid`, t);
          break;
        case `textarea`:
          (Z(`invalid`, t), tn(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Pd(t.textContent, n)
          ? (r.popover != null && (Z(`beforetoggle`, t), Z(`toggle`, t)),
            r.onScroll != null && Z(`scroll`, t),
            r.onScrollEnd != null && Z(`scrollend`, t),
            r.onClick != null && (t.onclick = dn),
            (t = !0))
          : (t = !1),
        t || Ki(e, !0));
    }
    function Ji(e) {
      for (Hi = e.return; Hi;)
        switch (Hi.tag) {
          case 5:
          case 31:
          case 13:
            Wi = !1;
            return;
          case 27:
          case 3:
            Wi = !0;
            return;
          default:
            Hi = Hi.return;
        }
    }
    function Yi(e) {
      if (e !== Hi) return !1;
      if (!M) return (Ji(e), (M = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              !(n !== `form` && n !== `button`) ||
              Gd(e.type, e.memoizedProps))),
          (n = !n)),
        n && j && Ki(e),
        Ji(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        j = ff(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        j = ff(e);
      } else
        t === 27
          ? ((t = j), $d(e.type) ? ((e = df), (df = null), (j = e)) : (j = t))
          : (j = Hi ? uf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Xi() {
      ((j = Hi = null), (M = !1));
    }
    function Zi() {
      var e = Ui;
      return (
        e !== null &&
          (eu === null ? (eu = e) : eu.push.apply(eu, e), (Ui = null)),
        e
      );
    }
    function Qi(e) {
      Ui === null ? (Ui = [e]) : Ui.push(e);
    }
    var $i = he(null),
      ea = null,
      ta = null;
    function na(e, t, n) {
      (O($i, t._currentValue), (t._currentValue = n));
    }
    function ra(e) {
      ((e._currentValue = $i.current), D($i));
    }
    function ia(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function aa(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null;) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  ia(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            ia(s, n, e),
            (s = null));
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null;) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function oa(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null;) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            jr(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === ye.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [$f]) : e.push($f));
        }
        a = a.return;
      }
      (e !== null && aa(t, e, n, r), (t.flags |= 262144));
    }
    function sa(e) {
      for (e = e.firstContext; e !== null;) {
        if (!jr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ca(e) {
      ((ea = e),
        (ta = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function la(e) {
      return da(ea, e);
    }
    function ua(e, t) {
      return (ea === null && ca(e), da(e, t));
    }
    function da(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), ta === null)) {
        if (e === null) throw Error(i(308));
        ((ta = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else ta = ta.next = t;
      return n;
    }
    var fa =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      pa = t.unstable_scheduleCallback,
      ma = t.unstable_NormalPriority,
      ha = {
        $$typeof: S,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function ga() {
      return { controller: new fa(), data: new Map(), refCount: 0 };
    }
    function N(e) {
      (e.refCount--,
        e.refCount === 0 &&
          pa(ma, function () {
            e.controller.abort();
          }));
    }
    var _a = null,
      va = 0,
      ya = 0,
      ba = null;
    function xa(e, t) {
      if (_a === null) {
        var n = (_a = []);
        ((va = 0),
          (ya = pd()),
          (ba = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (va++, t.then(Sa, Sa), t);
    }
    function Sa() {
      if (--va === 0 && _a !== null) {
        ba !== null && (ba.status = `fulfilled`);
        var e = _a;
        ((_a = null), (ya = 0), (ba = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Ca(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var wa = w.S;
    w.S = function (e, t) {
      ((ru = Ie()),
        typeof t == `object` && t && typeof t.then == `function` && xa(e, t),
        wa !== null && wa(e, t));
    };
    var Ta = he(null);
    function Ea() {
      var e = Ta.current;
      return e === null ? G.pooledCache : e;
    }
    function Da(e, t) {
      t === null ? O(Ta, Ta.current) : O(Ta, t.pool);
    }
    function Oa() {
      var e = Ea();
      return e === null ? null : { parent: ha._currentValue, pool: e };
    }
    var ka = Error(i(460)),
      Aa = Error(i(474)),
      ja = Error(i(542)),
      Ma = { then: function () {} };
    function Na(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Pa(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(dn, dn), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), La(e), e);
        default:
          if (typeof t.status == `string`) t.then(dn, dn);
          else {
            if (((e = G), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), La(e), e);
          }
          throw ((P = t), ka);
      }
    }
    function Fa(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((P = e), ka)
          : e;
      }
    }
    var P = null;
    function Ia() {
      if (P === null) throw Error(i(459));
      var e = P;
      return ((P = null), e);
    }
    function La(e) {
      if (e === ka || e === ja) throw Error(i(483));
    }
    var Ra = null,
      za = 0;
    function Ba(e) {
      var t = za;
      return ((za += 1), Ra === null && (Ra = []), Pa(Ra, e, t));
    }
    function Va(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Ha(e, t) {
      throw t.$$typeof === g
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function Ua(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = yi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = Ci(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === ie &&
                  Fa(i) === t.type))
            ? ((t = a(t, n.props)), Va(t, n), (t.return = e), t)
            : ((t = xi(n.type, n.key, n.props, null, e.mode, r)),
              Va(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = Ti(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = Si(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = Ci(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = xi(t.type, t.key, t.props, null, e.mode, n)),
                Va(n, t),
                (n.return = e),
                n
              );
            case v:
              return ((t = Ti(t, e.mode, n)), (t.return = e), t);
            case ie:
              return ((t = Fa(t)), f(e, t, n));
          }
          if (de(t) || ce(t))
            return ((t = Si(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, Ba(t), n);
          if (t.$$typeof === S) return f(e, ua(e, t), n);
          Ha(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case ie:
              return ((n = Fa(n)), p(e, t, n, r));
          }
          if (de(n) || ce(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Ba(n), r);
          if (n.$$typeof === S) return p(e, t, ua(e, n), r);
          Ha(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case v:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case ie:
              return ((r = Fa(r)), m(e, t, n, r, i));
          }
          if (de(r) || ce(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, Ba(r), i);
          if (r.$$typeof === S) return m(e, t, n, ua(t, r), i);
          Ha(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), M && Li(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (M && Li(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          M && Li(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), M && Li(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (M && Li(a, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          M && Li(a, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === y &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case _:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === ie &&
                        Fa(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.props)),
                        Va(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  } else t(e, r);
                  r = r.sibling;
                }
                o.type === y
                  ? ((c = Si(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = xi(o.type, o.key, o.props, null, e.mode, c)),
                    Va(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case v:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  else t(e, r);
                  r = r.sibling;
                }
                ((c = Ti(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case ie:
              return ((o = Fa(o)), b(e, r, o, c));
          }
          if (de(o)) return h(e, r, o, c);
          if (ce(o)) {
            if (((l = ce(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return b(e, r, Ba(o), c);
          if (o.$$typeof === S) return b(e, r, ua(e, o), c);
          Ha(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = Ci(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          za = 0;
          var i = b(e, t, n, r);
          return ((Ra = null), i);
        } catch (t) {
          if (t === ka || t === ja) throw t;
          var a = _i(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Wa = Ua(!0),
      Ga = Ua(!1),
      Ka = !1;
    function qa(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Ja(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Ya(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Xa(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), W & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = mi(e)),
          pi(e, null, n),
          t
        );
      }
      return (ui(e, r, t, n), mi(e));
    }
    function Za(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ut(e, n));
      }
    }
    function Qa(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var $a = !1;
    function eo() {
      if ($a) {
        var e = ba;
        if (e !== null) throw e;
      }
    }
    function to(e, t, n, r) {
      $a = !1;
      var i = e.updateQueue;
      Ka = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (q & f) === f : (r & f) === f) {
            (f !== 0 && f === ya && ($a = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var m = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((m = g.payload), typeof m == `function`)) {
                    d = m.call(_, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = g.payload),
                    (f = typeof m == `function` ? m.call(_, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = h({}, d, f);
                  break a;
                case 2:
                  Ka = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Jl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function no(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function ro(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) no(n[e], t);
    }
    var io = he(null),
      ao = he(0);
    function oo(e, t) {
      ((e = Kl), O(ao, e), O(io, t), (Kl = e | t.baseLanes));
    }
    function so() {
      (O(ao, Kl), O(io, io.current));
    }
    function co() {
      ((Kl = ao.current), D(io), D(ao));
    }
    var lo = he(null),
      uo = null;
    function fo(e) {
      var t = e.alternate;
      (O(F, F.current & 1),
        O(lo, e),
        uo === null &&
          (t === null || io.current !== null || t.memoizedState !== null) &&
          (uo = e));
    }
    function po(e) {
      (O(F, F.current), O(lo, e), uo === null && (uo = e));
    }
    function mo(e) {
      e.tag === 22
        ? (O(F, F.current), O(lo, e), uo === null && (uo = e))
        : ho(e);
    }
    function ho() {
      (O(F, F.current), O(lo, lo.current));
    }
    function go(e) {
      (D(lo), uo === e && (uo = null), D(F));
    }
    var F = he(0);
    function _o(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || sf(n) || cf(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var vo = 0,
      I = null,
      L = null,
      yo = null,
      bo = !1,
      xo = !1,
      So = !1,
      Co = 0,
      wo = 0,
      To = null,
      Eo = 0;
    function R() {
      throw Error(i(321));
    }
    function Do(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!jr(e[n], t[n])) return !1;
      return !0;
    }
    function Oo(e, t, n, r, i, a) {
      return (
        (vo = a),
        (I = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (w.H = e === null || e.memoizedState === null ? Hs : Us),
        (So = !1),
        (a = n(r, i)),
        (So = !1),
        xo && (a = Ao(t, n, r, i)),
        ko(e),
        a
      );
    }
    function ko(e) {
      w.H = Vs;
      var t = L !== null && L.next !== null;
      if (((vo = 0), (yo = L = I = null), (bo = !1), (wo = 0), (To = null), t))
        throw Error(i(300));
      e === null ||
        oc ||
        ((e = e.dependencies), e !== null && sa(e) && (oc = !0));
    }
    function Ao(e, t, n, r) {
      I = e;
      var a = 0;
      do {
        if ((xo && (To = null), (wo = 0), (xo = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (yo = L = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((w.H = Ws), (o = t(n, r)));
      } while (xo);
      return o;
    }
    function jo() {
      var e = w.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Ro(t) : t),
        (e = e.useState()[0]),
        (L === null ? null : L.memoizedState) !== e && (I.flags |= 1024),
        t
      );
    }
    function Mo() {
      var e = Co !== 0;
      return ((Co = 0), e);
    }
    function No(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function Po(e) {
      if (bo) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        bo = !1;
      }
      ((vo = 0), (yo = L = I = null), (xo = !1), (wo = Co = 0), (To = null));
    }
    function Fo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        yo === null ? (I.memoizedState = yo = e) : (yo = yo.next = e),
        yo
      );
    }
    function Io() {
      if (L === null) {
        var e = I.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = L.next;
      var t = yo === null ? I.memoizedState : yo.next;
      if (t !== null) ((yo = t), (L = e));
      else {
        if (e === null)
          throw I.alternate === null ? Error(i(467)) : Error(i(310));
        ((L = e),
          (e = {
            memoizedState: L.memoizedState,
            baseState: L.baseState,
            baseQueue: L.baseQueue,
            queue: L.queue,
            next: null,
          }),
          yo === null ? (I.memoizedState = yo = e) : (yo = yo.next = e));
      }
      return yo;
    }
    function Lo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Ro(e) {
      var t = wo;
      return (
        (wo += 1),
        To === null && (To = []),
        (e = Pa(To, e, t)),
        (t = I),
        (yo === null ? t.memoizedState : yo.next) === null &&
          ((t = t.alternate),
          (w.H = t === null || t.memoizedState === null ? Hs : Us)),
        e
      );
    }
    function zo(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Ro(e);
        if (e.$$typeof === S) return la(e);
      }
      throw Error(i(438, String(e)));
    }
    function Bo(e) {
      var t = null,
        n = I.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = I.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Lo()), (I.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = oe;
      return (t.index++, n);
    }
    function Vo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Ho(e) {
      return Uo(Io(), L, e);
    }
    function Uo(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (vo & f) === f : (q & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === ya && (d = !0));
            else if ((vo & p) === p) {
              ((u = u.next), p === ya && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (I.lanes |= p),
                (Jl |= p));
            ((f = u.action),
              So && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (I.lanes |= f),
              (Jl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !jr(o, e.memoizedState) && ((oc = !0), d && ((n = ba), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Wo(e) {
      var t = Io(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (jr(o, t.memoizedState) || (oc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Go(e, t, n) {
      var r = I,
        a = Io(),
        o = M;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !jr((L || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (oc = !0)),
        (a = a.queue),
        hs(Jo.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (yo !== null && yo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          ds(9, { destroy: void 0 }, qo.bind(null, r, a, n, t), null),
          G === null)
        )
          throw Error(i(349));
        o || vo & 127 || Ko(r, t, n);
      }
      return n;
    }
    function Ko(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = I.updateQueue),
        t === null
          ? ((t = Lo()), (I.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function qo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Yo(t) && Xo(e));
    }
    function Jo(e, t, n) {
      return n(function () {
        Yo(t) && Xo(e);
      });
    }
    function Yo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !jr(e, n);
      } catch {
        return !0;
      }
    }
    function Xo(e) {
      var t = fi(e, 2);
      t !== null && vu(t, e, 2);
    }
    function Zo(e) {
      var t = Fo();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), So)) {
          qe(!0);
          try {
            n();
          } finally {
            qe(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vo,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Qo(e, t, n, r) {
      return ((e.baseState = n), Uo(e, L, typeof r == `function` ? r : Vo));
    }
    function $o(e, t, n, r, a) {
      if (Rs(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (w.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), es(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function es(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = w.T,
          o = {};
        w.T = o;
        try {
          var s = n(i, r),
            c = w.S;
          (c !== null && c(o, s), ts(e, t, s));
        } catch (n) {
          rs(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (w.T = a));
        }
      } else
        try {
          ((a = n(i, r)), ts(e, t, a));
        } catch (n) {
          rs(e, t, n);
        }
    }
    function ts(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              ns(e, t, n);
            },
            function (n) {
              return rs(e, t, n);
            },
          )
        : ns(e, t, n);
    }
    function ns(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        is(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), es(e, n))));
    }
    function rs(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), is(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function is(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function as(e, t) {
      return t;
    }
    function os(e, t) {
      if (M) {
        var n = G.formState;
        if (n !== null) {
          a: {
            var r = I;
            if (M) {
              if (j) {
                b: {
                  for (var i = j, a = Wi; i.nodeType !== 8;) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = uf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((j = uf(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Ki(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Fo()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: as,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Fs.bind(null, I, r)),
        (r.dispatch = n),
        (r = Zo(!1)),
        (a = Ls.bind(null, I, !1, r.queue)),
        (r = Fo()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = $o.bind(null, I, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function ss(e) {
      return cs(Io(), L, e);
    }
    function cs(e, t, n) {
      if (
        ((t = Uo(e, t, as)[0]),
        (e = Ho(Vo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Ro(t);
        } catch (e) {
          throw e === ka ? ja : e;
        }
      else r = t;
      t = Io();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((I.flags |= 2048),
          ds(9, { destroy: void 0 }, ls.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function ls(e, t) {
      e.action = t;
    }
    function us(e) {
      var t = Io(),
        n = L;
      if (n !== null) return cs(t, n, e);
      (Io(), (t = t.memoizedState), (n = Io()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function ds(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = I.updateQueue),
        t === null && ((t = Lo()), (I.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function fs() {
      return Io().memoizedState;
    }
    function z(e, t, n, r) {
      var i = Fo();
      ((I.flags |= e),
        (i.memoizedState = ds(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )));
    }
    function ps(e, t, n, r) {
      var i = Io();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      L !== null && r !== null && Do(r, L.memoizedState.deps)
        ? (i.memoizedState = ds(t, a, n, r))
        : ((I.flags |= e), (i.memoizedState = ds(1 | t, a, n, r)));
    }
    function ms(e, t) {
      z(8390656, 8, e, t);
    }
    function hs(e, t) {
      ps(2048, 8, e, t);
    }
    function gs(e) {
      I.flags |= 4;
      var t = I.updateQueue;
      if (t === null) ((t = Lo()), (I.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function _s(e) {
      var t = Io().memoizedState;
      return (
        gs({ ref: t, nextImpl: e }),
        function () {
          if (W & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function vs(e, t) {
      return ps(4, 2, e, t);
    }
    function ys(e, t) {
      return ps(4, 4, e, t);
    }
    function B(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function bs(e, t, n) {
      ((n = n == null ? null : n.concat([e])), ps(4, 4, B.bind(null, t, e), n));
    }
    function xs() {}
    function Ss(e, t) {
      var n = Io();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && Do(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Cs(e, t) {
      var n = Io();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && Do(t, r[1])) return r[0];
      if (((r = e()), So)) {
        qe(!0);
        try {
          e();
        } finally {
          qe(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function ws(e, t, n) {
      return n === void 0 || (vo & 1073741824 && !(q & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = _u()), (I.lanes |= e), (Jl |= e), n);
    }
    function Ts(e, t, n, r) {
      return jr(n, t)
        ? n
        : io.current === null
          ? !(vo & 42) || (vo & 1073741824 && !(q & 261930))
            ? ((oc = !0), (e.memoizedState = n))
            : ((e = _u()), (I.lanes |= e), (Jl |= e), t)
          : ((e = ws(e, n, r)), jr(e, t) || (oc = !0), e);
    }
    function Es(e, t, n, r, i) {
      var a = E.p;
      E.p = a !== 0 && 8 > a ? a : 8;
      var o = w.T,
        s = {};
      ((w.T = s), Ls(e, !1, t, n));
      try {
        var c = i(),
          l = w.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Is(e, t, Ca(c, r), gu(e))
            : Is(e, t, r, gu(e)));
      } catch (n) {
        Is(e, t, { then: function () {}, status: `rejected`, reason: n }, gu());
      } finally {
        ((E.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (w.T = o));
      }
    }
    function Ds() {}
    function Os(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = ks(e).queue;
      Es(
        e,
        a,
        t,
        fe,
        n === null
          ? Ds
          : function () {
              return (As(e), n(r));
            },
      );
    }
    function ks(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: fe,
        baseState: fe,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vo,
          lastRenderedState: fe,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function As(e) {
      var t = ks(e);
      (t.next === null && (t = e.alternate.memoizedState),
        Is(e, t.next.queue, {}, gu()));
    }
    function js() {
      return la($f);
    }
    function Ms() {
      return Io().memoizedState;
    }
    function V() {
      return Io().memoizedState;
    }
    function Ns(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = gu();
            e = Ya(n);
            var r = Xa(t, e, n);
            (r !== null && (vu(r, t, n), Za(r, t, n)),
              (t = { cache: ga() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Ps(e, t, n) {
      var r = gu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Rs(e)
          ? zs(t, n)
          : ((n = di(e, t, n, r)), n !== null && (vu(n, e, r), Bs(n, t, r))));
    }
    function Fs(e, t, n) {
      Is(e, t, n, gu());
    }
    function Is(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Rs(e)) zs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), jr(s, o)))
              return (ui(e, t, i, 0), G === null && li(), !1);
          } catch {}
        if (((n = di(e, t, i, r)), n !== null))
          return (vu(n, e, r), Bs(n, t, r), !0);
      }
      return !1;
    }
    function Ls(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: pd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Rs(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = di(e, n, r, 2)), t !== null && vu(t, e, 2));
    }
    function Rs(e) {
      var t = e.alternate;
      return e === I || (t !== null && t === I);
    }
    function zs(e, t) {
      xo = bo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function Bs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ut(e, n));
      }
    }
    var Vs = {
      readContext: la,
      use: zo,
      useCallback: R,
      useContext: R,
      useEffect: R,
      useImperativeHandle: R,
      useLayoutEffect: R,
      useInsertionEffect: R,
      useMemo: R,
      useReducer: R,
      useRef: R,
      useState: R,
      useDebugValue: R,
      useDeferredValue: R,
      useTransition: R,
      useSyncExternalStore: R,
      useId: R,
      useHostTransitionStatus: R,
      useFormState: R,
      useActionState: R,
      useOptimistic: R,
      useMemoCache: R,
      useCacheRefresh: R,
    };
    Vs.useEffectEvent = R;
    var Hs = {
        readContext: la,
        use: zo,
        useCallback: function (e, t) {
          return ((Fo().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: la,
        useEffect: ms,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            z(4194308, 4, B.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return z(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          z(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Fo();
          t = t === void 0 ? null : t;
          var r = e();
          if (So) {
            qe(!0);
            try {
              e();
            } finally {
              qe(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Fo();
          if (n !== void 0) {
            var i = n(t);
            if (So) {
              qe(!0);
              try {
                n(t);
              } finally {
                qe(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ps.bind(null, I, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Fo();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Zo(e);
          var t = e.queue,
            n = Fs.bind(null, I, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: xs,
        useDeferredValue: function (e, t) {
          return ws(Fo(), e, t);
        },
        useTransition: function () {
          var e = Zo(!1);
          return (
            (e = Es.bind(null, I, e.queue, !0, !1)),
            (Fo().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = I,
            a = Fo();
          if (M) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), G === null)) throw Error(i(349));
            q & 127 || Ko(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            ms(Jo.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            ds(9, { destroy: void 0 }, qo.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Fo(),
            t = G.identifierPrefix;
          if (M) {
            var n = Ii,
              r = Fi;
            ((n = (r & ~(1 << (32 - Je(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = Co++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = Eo++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: js,
        useFormState: os,
        useActionState: os,
        useOptimistic: function (e) {
          var t = Fo();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Ls.bind(null, I, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Bo,
        useCacheRefresh: function () {
          return (Fo().memoizedState = Ns.bind(null, I));
        },
        useEffectEvent: function (e) {
          var t = Fo(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (W & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Us = {
        readContext: la,
        use: zo,
        useCallback: Ss,
        useContext: la,
        useEffect: hs,
        useImperativeHandle: bs,
        useInsertionEffect: vs,
        useLayoutEffect: ys,
        useMemo: Cs,
        useReducer: Ho,
        useRef: fs,
        useState: function () {
          return Ho(Vo);
        },
        useDebugValue: xs,
        useDeferredValue: function (e, t) {
          return Ts(Io(), L.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Ho(Vo)[0],
            t = Io().memoizedState;
          return [typeof e == `boolean` ? e : Ro(e), t];
        },
        useSyncExternalStore: Go,
        useId: Ms,
        useHostTransitionStatus: js,
        useFormState: ss,
        useActionState: ss,
        useOptimistic: function (e, t) {
          return Qo(Io(), L, e, t);
        },
        useMemoCache: Bo,
        useCacheRefresh: V,
      };
    Us.useEffectEvent = _s;
    var Ws = {
      readContext: la,
      use: zo,
      useCallback: Ss,
      useContext: la,
      useEffect: hs,
      useImperativeHandle: bs,
      useInsertionEffect: vs,
      useLayoutEffect: ys,
      useMemo: Cs,
      useReducer: Wo,
      useRef: fs,
      useState: function () {
        return Wo(Vo);
      },
      useDebugValue: xs,
      useDeferredValue: function (e, t) {
        var n = Io();
        return L === null ? ws(n, e, t) : Ts(n, L.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Wo(Vo)[0],
          t = Io().memoizedState;
        return [typeof e == `boolean` ? e : Ro(e), t];
      },
      useSyncExternalStore: Go,
      useId: Ms,
      useHostTransitionStatus: js,
      useFormState: us,
      useActionState: us,
      useOptimistic: function (e, t) {
        var n = Io();
        return L === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Qo(n, L, e, t);
      },
      useMemoCache: Bo,
      useCacheRefresh: V,
    };
    Ws.useEffectEvent = _s;
    function Gs(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : h({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Ks = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = gu(),
          i = Ya(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Xa(e, i, r)),
          t !== null && (vu(t, e, r), Za(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = gu(),
          i = Ya(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Xa(e, i, r)),
          t !== null && (vu(t, e, r), Za(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = gu(),
          r = Ya(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Xa(e, r, n)),
          t !== null && (vu(t, e, n), Za(t, e, n)));
      },
    };
    function qs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Mr(n, r) || !Mr(i, a)
            : !0
      );
    }
    function Js(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ks.enqueueReplaceState(t, t.state, null));
    }
    function Ys(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Xs(e) {
      ai(e);
    }
    function Zs(e) {
      console.error(e);
    }
    function Qs(e) {
      ai(e);
    }
    function $s(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function ec(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function tc(e, t, n) {
      return (
        (n = Ya(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          $s(e, t);
        }),
        n
      );
    }
    function nc(e) {
      return ((e = Ya(e)), (e.tag = 3), e);
    }
    function rc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            ec(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (ec(t, n, r),
            typeof i != `function` &&
              (ou === null ? (ou = new Set([this])) : ou.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function ic(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && oa(t, n, a, !0),
          (n = lo.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                uo === null
                  ? Au()
                  : n.alternate === null && ql === 0 && (ql = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Ma
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Ju(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Ma
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Ju(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (Ju(e, r, a), Au(), !1);
      }
      if (M)
        return (
          (t = lo.current),
          t === null
            ? (r !== Gi && ((t = Error(i(423), { cause: r })), Qi(Di(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = Di(r, n)),
              (a = tc(e.stateNode, r, a)),
              Qa(e, a),
              ql !== 4 && (ql = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Gi && ((e = Error(i(422), { cause: r })), Qi(Di(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = Di(o, n)),
        $l === null ? ($l = [o]) : $l.push(o),
        ql !== 4 && (ql = 2),
        t === null)
      )
        return !0;
      ((r = Di(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = tc(n.stateNode, r, e)),
              Qa(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (ou === null || !ou.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = nc(a)),
                rc(a, e, n, r),
                Qa(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var ac = Error(i(461)),
      oc = !1;
    function sc(e, t, n, r) {
      t.child = e === null ? Ga(t, null, n, r) : Wa(t, e.child, n, r);
    }
    function cc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ca(t),
        (r = Oo(e, t, n, o, a, i)),
        (s = Mo()),
        e !== null && !oc
          ? (No(e, t, i), Mc(e, t, i))
          : (M && s && zi(t), (t.flags |= 1), sc(e, t, r, i), t.child)
      );
    }
    function lc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !vi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), uc(e, t, a, r, i))
          : ((e = xi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Nc(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? Mr : n),
          n(o, r) && e.ref === t.ref)
        )
          return Mc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = yi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function uc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Mr(a, r) && e.ref === t.ref)
          if (((oc = !1), (t.pendingProps = r = a), Nc(e, i)))
            e.flags & 131072 && (oc = !0);
          else return ((t.lanes = e.lanes), Mc(e, t, i));
      }
      return vc(e, t, n, r, i);
    }
    function dc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return pc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Da(t, a === null ? null : a.cachePool),
            a === null ? so() : oo(t, a),
            mo(t));
        else
          return (
            (r = t.lanes = 536870912),
            pc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && Da(t, null), so(), ho(t))
          : (Da(t, a.cachePool), oo(t, a), ho(t), (t.memoizedState = null));
      return (sc(e, t, i, n), t.child);
    }
    function fc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function pc(e, t, n, r, i) {
      var a = Ea();
      return (
        (a = a === null ? null : { parent: ha._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Da(t, null),
        so(),
        mo(t),
        e !== null && oa(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function mc(e, t) {
      return (
        (t = Dc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function hc(e, t, n) {
      return (
        Wa(t, e.child, null, n),
        (e = mc(t, t.pendingProps)),
        (e.flags |= 2),
        go(t),
        (t.memoizedState = null),
        e
      );
    }
    function gc(e, t, n) {
      var r = t.pendingProps,
        a = (t.flags & 128) != 0;
      if (((t.flags &= -129), e === null)) {
        if (M) {
          if (r.mode === `hidden`)
            return ((e = mc(t, r)), (t.lanes = 536870912), fc(null, e));
          if (
            (po(t),
            (e = j)
              ? ((e = of(e, Wi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Pi === null ? null : { id: Fi, overflow: Ii },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Hi = t),
                  (j = null)))
              : (e = null),
            e === null)
          )
            throw Ki(t);
          return ((t.lanes = 536870912), null);
        }
        return mc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((po(t), a))
          if (t.flags & 256) ((t.flags &= -257), (t = hc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        else if (
          (oc || oa(e, t, n, !1), (a = (n & e.childLanes) !== 0), oc || a)
        ) {
          if (
            ((r = G),
            r !== null && ((s = dt(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), fi(e, s), vu(r, e, s), ac);
          (Au(), (t = hc(e, t, n)));
        } else
          ((e = o.treeContext),
            (j = uf(s.nextSibling)),
            (Hi = t),
            (M = !0),
            (Ui = null),
            (Wi = !1),
            e !== null && Vi(t, e),
            (t = mc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = yi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function _c(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function vc(e, t, n, r, i) {
      return (
        ca(t),
        (n = Oo(e, t, n, r, void 0, i)),
        (r = Mo()),
        e !== null && !oc
          ? (No(e, t, i), Mc(e, t, i))
          : (M && r && zi(t), (t.flags |= 1), sc(e, t, n, i), t.child)
      );
    }
    function yc(e, t, n, r, i, a) {
      return (
        ca(t),
        (t.updateQueue = null),
        (n = Ao(t, r, n, i)),
        ko(e),
        (r = Mo()),
        e !== null && !oc
          ? (No(e, t, a), Mc(e, t, a))
          : (M && r && zi(t), (t.flags |= 1), sc(e, t, n, a), t.child)
      );
    }
    function bc(e, t, n, r, i) {
      if ((ca(t), t.stateNode === null)) {
        var a = hi,
          o = n.contextType;
        (typeof o == `object` && o && (a = la(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Ks),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          qa(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? la(o) : hi),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Gs(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Ks.enqueueReplaceState(a, a.state, null),
            to(t, r, a, i),
            eo(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Ys(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = hi), typeof u == `object` && u && (o = la(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Js(t, a, r, o)),
          (Ka = !1));
        var f = t.memoizedState;
        ((a.state = f),
          to(t, r, a, i),
          eo(),
          (l = t.memoizedState),
          s || f !== l || Ka
            ? (typeof d == `function` &&
                (Gs(t, n, d, r), (l = t.memoizedState)),
              (c = Ka || qs(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          Ja(e, t),
          (o = t.memoizedProps),
          (u = Ys(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = hi),
          typeof l == `object` && l && (c = la(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Js(t, a, r, c)),
          (Ka = !1),
          (f = t.memoizedState),
          (a.state = f),
          to(t, r, a, i),
          eo());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        Ka ||
        (e !== null && e.dependencies !== null && sa(e.dependencies))
          ? (typeof s == `function` && (Gs(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ka ||
              qs(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && sa(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        _c(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Wa(t, e.child, null, i)),
                (t.child = Wa(t, null, n, i)))
              : sc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Mc(e, t, i)),
        e
      );
    }
    function xc(e, t, n, r) {
      return (Xi(), (t.flags |= 256), sc(e, t, n, r), t.child);
    }
    var Sc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function Cc(e) {
      return { baseLanes: e, cachePool: Oa() };
    }
    function wc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Zl), e);
    }
    function Tc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null ? !1 : (F.current & 2) != 0),
        s && ((a = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (M) {
          if (
            (a ? fo(t) : ho(t),
            (e = j)
              ? ((e = of(e, Wi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Pi === null ? null : { id: Fi, overflow: Ii },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Hi = t),
                  (j = null)))
              : (e = null),
            e === null)
          )
            throw Ki(t);
          return (cf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (ho(t),
              (a = t.mode),
              (c = Dc({ mode: `hidden`, children: c }, a)),
              (r = Si(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = Cc(n)),
              (r.childLanes = wc(e, s, n)),
              (t.memoizedState = Sc),
              fc(null, r))
            : (fo(t), Ec(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (fo(t), (t.flags &= -257), (t = Oc(e, t, n)))
            : t.memoizedState === null
              ? (ho(t),
                (c = r.fallback),
                (a = t.mode),
                (r = Dc({ mode: `visible`, children: r.children }, a)),
                (c = Si(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Wa(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = Cc(n)),
                (r.childLanes = wc(e, s, n)),
                (t.memoizedState = Sc),
                (t = fc(null, r)))
              : (ho(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((fo(t), cf(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Qi({ value: r, source: null, stack: null }),
            (t = Oc(e, t, n)));
        } else if (
          (oc || oa(e, t, n, !1), (s = (n & e.childLanes) !== 0), oc || s)
        ) {
          if (
            ((s = G),
            s !== null && ((r = dt(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), fi(e, r), vu(s, e, r), ac);
          (sf(c) || Au(), (t = Oc(e, t, n)));
        } else
          sf(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (j = uf(c.nextSibling)),
              (Hi = t),
              (M = !0),
              (Ui = null),
              (Wi = !1),
              e !== null && Vi(t, e),
              (t = Ec(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (ho(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = yi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = Si(c, a, n, null)), (c.flags |= 2))
            : (c = yi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          fc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = Cc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = Oa())
                : ((l = ha._currentValue),
                  (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = wc(e, s, n)),
          (t.memoizedState = Sc),
          fc(e.child, r))
        : (fo(t),
          (n = e.child),
          (e = n.sibling),
          (n = yi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Ec(e, t) {
      return (
        (t = Dc({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Dc(e, t) {
      return ((e = _i(22, e, null, t)), (e.lanes = 0), e);
    }
    function Oc(e, t, n) {
      return (
        Wa(t, e.child, null, n),
        (e = Ec(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function kc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), ia(e.return, t, n));
    }
    function Ac(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function jc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = F.current,
        s = (o & 2) != 0;
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        O(F, o),
        sc(e, t, r, n),
        (r = M ? ji : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
          else if (e.tag === 19) kc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null;)
            ((e = n.alternate),
              e !== null && _o(e) === null && (i = n),
              (n = n.sibling));
          ((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Ac(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && _o(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          Ac(t, !0, n, null, a, r);
          break;
        case `together`:
          Ac(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Mc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Jl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((oa(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = yi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = yi(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function Nc(e, t) {
      return (e.lanes & t) === 0
        ? ((e = e.dependencies), !!(e !== null && sa(e)))
        : !0;
    }
    function Pc(e, t, n) {
      switch (t.tag) {
        case 3:
          (be(t, t.stateNode.containerInfo),
            na(t, ha, e.memoizedState.cache),
            Xi());
          break;
        case 27:
        case 5:
          Se(t);
          break;
        case 4:
          be(t, t.stateNode.containerInfo);
          break;
        case 10:
          na(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), po(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (fo(t), (e = Mc(e, t, n)), e === null ? null : e.sibling)
                : Tc(e, t, n)
              : (fo(t), (t.flags |= 128), null);
          fo(t);
          break;
        case 19:
          var i = (e.flags & 128) != 0;
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (oa(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return jc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            O(F, F.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), dc(e, t, n, t.pendingProps));
        case 24:
          na(t, ha, e.memoizedState.cache);
      }
      return Mc(e, t, n);
    }
    function Fc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) oc = !0;
        else {
          if (!Nc(e, n) && !(t.flags & 128)) return ((oc = !1), Pc(e, t, n));
          oc = !!(e.flags & 131072);
        }
      else ((oc = !1), M && t.flags & 1048576 && Ri(t, ji, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Fa(t.elementType)), (t.type = e), typeof e == `function`))
              vi(e)
                ? ((r = Ys(e, r)), (t.tag = 1), (t = bc(null, t, e, r, n)))
                : ((t.tag = 0), (t = vc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === C) {
                  ((t.tag = 11), (t = cc(null, t, e, r, n)));
                  break a;
                } else if (a === re) {
                  ((t.tag = 14), (t = lc(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = ue(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return vc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Ys(r, t.pendingProps)), bc(e, t, r, a, n));
        case 3:
          a: {
            if ((be(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), Ja(e, t), to(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              na(t, ha, r),
              r !== o.cache && aa(t, [ha], n, !0),
              eo(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = xc(e, t, r, n);
                break a;
              } else if (r !== a) {
                ((a = Di(Error(i(424)), t)), Qi(a), (t = xc(e, t, r, n)));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  j = uf(e.firstChild),
                    Hi = t,
                    M = !0,
                    Ui = null,
                    Wi = !0,
                    n = Ga(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
              }
            else {
              if ((Xi(), r === a)) {
                t = Mc(e, t, n);
                break a;
              }
              sc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            _c(e, t),
            e === null
              ? (n = jf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : M ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Hd(ve.current).createElement(n)),
                  (r[_t] = t),
                  (r[vt] = e),
                  Id(r, n, e),
                  At(r),
                  (t.stateNode = r))
              : (t.memoizedState = jf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            Se(t),
            e === null &&
              M &&
              ((r = t.stateNode = mf(t.type, t.pendingProps, ve.current)),
              (Hi = t),
              (Wi = !0),
              (a = j),
              $d(t.type) ? ((df = a), (j = uf(r.firstChild))) : (j = a)),
            sc(e, t, t.pendingProps.children, n),
            _c(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              M &&
              ((a = r = j) &&
                ((r = rf(r, t.type, t.pendingProps, Wi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (Hi = t),
                    (j = uf(r.firstChild)),
                    (Wi = !1),
                    (a = !0))),
              a || Ki(t)),
            Se(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Gd(a, o) ? (r = null) : s !== null && Gd(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = Oo(e, t, jo, null, null, n)), ($f._currentValue = a)),
            _c(e, t),
            sc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              M &&
              ((e = n = j) &&
                ((n = af(n, t.pendingProps, Wi)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (Hi = t), (j = null), (e = !0))),
              e || Ki(t)),
            null
          );
        case 13:
          return Tc(e, t, n);
        case 4:
          return (
            be(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Wa(t, null, r, n)) : sc(e, t, r, n),
            t.child
          );
        case 11:
          return cc(e, t, t.type, t.pendingProps, n);
        case 7:
          return (sc(e, t, t.pendingProps, n), t.child);
        case 8:
          return (sc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (sc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return (
            (r = t.pendingProps),
            na(t, t.type, r.value),
            sc(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            ca(t),
            (a = la(a)),
            (r = r(a)),
            (t.flags |= 1),
            sc(e, t, r, n),
            t.child
          );
        case 14:
          return lc(e, t, t.type, t.pendingProps, n);
        case 15:
          return uc(e, t, t.type, t.pendingProps, n);
        case 19:
          return jc(e, t, n);
        case 31:
          return gc(e, t, n);
        case 22:
          return dc(e, t, n, t.pendingProps);
        case 24:
          return (
            ca(t),
            (r = la(ha)),
            e === null
              ? ((a = Ea()),
                a === null &&
                  ((a = G),
                  (o = ga()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                qa(t),
                na(t, ha, a))
              : ((e.lanes & n) !== 0 && (Ja(e, t), to(t, null, null, n), eo()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    na(t, ha, r),
                    r !== a.cache && aa(t, [ha], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    na(t, ha, r))),
            sc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Ic(e) {
      e.flags |= 4;
    }
    function Lc(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Du()) e.flags |= 8192;
          else throw ((P = Ma), Aa);
      } else e.flags &= -16777217;
    }
    function Rc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Kf(t)))
        if (Du()) e.flags |= 8192;
        else throw ((P = Ma), Aa);
    }
    function zc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : at()), (e.lanes |= t), (Ql |= t)));
    }
    function Bc(e, t) {
      if (!M)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null;)
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null;)
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function H(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function Vc(e, t, n) {
      var r = t.pendingProps;
      switch ((Bi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (H(t), null);
        case 1:
          return (H(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            ra(ha),
            xe(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Yi(t)
                ? Ic(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Zi())),
            H(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Ic(t),
                o === null ? (H(t), Lc(t, a, null, r, n)) : (H(t), Rc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (H(t), (t.flags &= -16777217))
                  : (Ic(t), H(t), Rc(t, o))
                : ((e = e.memoizedProps),
                  e !== r && Ic(t),
                  H(t),
                  Lc(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (Ce(t),
            (n = ve.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Ic(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (H(t), null);
            }
            ((e = ge.current),
              Yi(t) ? qi(t, e) : ((e = mf(a, r, n)), (t.stateNode = e), Ic(t)));
          }
          return (H(t), null);
        case 5:
          if ((Ce(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Ic(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (H(t), null);
            }
            if (((o = ge.current), Yi(t))) qi(t, o);
            else {
              var s = Hd(ve.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[_t] = t), (o[vt] = r));
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((Id(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Ic(t);
            }
          }
          return (
            H(t),
            Lc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Ic(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = ve.current), Yi(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = Hi),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[_t] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Pd(e.nodeValue, n)
                )),
                e || Ki(t, !0));
            } else
              ((e = Hd(e).createTextNode(r)), (e[_t] = t), (t.stateNode = e));
          }
          return (H(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Yi(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[_t] = t;
              } else
                (Xi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (H(t), (e = !1));
            } else
              ((n = Zi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (go(t), t) : (go(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (H(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Yi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[_t] = t;
              } else
                (Xi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (H(t), (a = !1));
            } else
              ((a = Zi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (go(t), t) : (go(t), null);
          }
          return (
            go(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                zc(t, t.updateQueue),
                H(t),
                null)
          );
        case 4:
          return (
            xe(),
            e === null && wd(t.stateNode.containerInfo),
            H(t),
            null
          );
        case 10:
          return (ra(t.type), H(t), null);
        case 19:
          if ((D(F), (r = t.memoizedState), r === null)) return (H(t), null);
          if (((a = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (a) Bc(r, !1);
            else {
              if (ql !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = _o(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Bc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        zc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (bi(n, e), (n = n.sibling));
                    return (
                      O(F, (F.current & 1) | 2),
                      M && Li(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Ie() > iu &&
                ((t.flags |= 128), (a = !0), Bc(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = _o(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  zc(t, e),
                  Bc(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !M)
                )
                  return (H(t), null);
              } else
                2 * Ie() - r.renderingStartTime > iu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Bc(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          return r.tail === null
            ? (H(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Ie()),
              (e.sibling = null),
              (n = F.current),
              O(F, a ? (n & 1) | 2 : n & 1),
              M && Li(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            go(t),
            co(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (H(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : H(t),
            (n = t.updateQueue),
            n !== null && zc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && D(Ta),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            ra(ha),
            H(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function Hc(e, t) {
      switch ((Bi(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            ra(ha),
            xe(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (Ce(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((go(t), t.alternate === null)) throw Error(i(340));
            Xi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (go(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            Xi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (D(F), null);
        case 4:
          return (xe(), null);
        case 10:
          return (ra(t.type), null);
        case 22:
        case 23:
          return (
            go(t),
            co(),
            e !== null && D(Ta),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (ra(ha), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Uc(e, t) {
      switch ((Bi(t), t.tag)) {
        case 3:
          (ra(ha), xe());
          break;
        case 26:
        case 27:
        case 5:
          Ce(t);
          break;
        case 4:
          xe();
          break;
        case 31:
          t.memoizedState !== null && go(t);
          break;
        case 13:
          go(t);
          break;
        case 19:
          D(F);
          break;
        case 10:
          ra(t.type);
          break;
        case 22:
        case 23:
          (go(t), co(), e !== null && D(Ta));
          break;
        case 24:
          ra(ha);
      }
    }
    function Wc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Y(t, t.return, e);
      }
    }
    function Gc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Y(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Y(t, t.return, e);
      }
    }
    function Kc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          ro(t, n);
        } catch (t) {
          Y(e, e.return, t);
        }
      }
    }
    function qc(e, t, n) {
      ((n.props = Ys(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Y(e, t, n);
      }
    }
    function Jc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Y(e, t, n);
      }
    }
    function Yc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Y(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Y(e, t, n);
          }
        else n.current = null;
    }
    function Xc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Y(e, e.return, t);
      }
    }
    function Zc(e, t, n) {
      try {
        var r = e.stateNode;
        (Ld(r, e.type, n, t), (r[vt] = t));
      } catch (t) {
        Y(e, e.return, t);
      }
    }
    function Qc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && $d(e.type)) ||
        e.tag === 4
      );
    }
    function $c(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Qc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && $d(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function el(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = dn)));
      else if (
        r !== 4 &&
        (r === 27 && $d(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (el(e, t, n), e = e.sibling; e !== null;)
          (el(e, t, n), (e = e.sibling));
    }
    function tl(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (
        r !== 4 &&
        (r === 27 && $d(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (tl(e, t, n), e = e.sibling; e !== null;)
          (tl(e, t, n), (e = e.sibling));
    }
    function nl(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;)
          t.removeAttributeNode(i[0]);
        (Id(t, r, n), (t[_t] = e), (t[vt] = n));
      } catch (t) {
        Y(e, e.return, t);
      }
    }
    var rl = !1,
      il = !1,
      al = !1,
      ol = typeof WeakSet == `function` ? WeakSet : Set,
      sl = null;
    function cl(e, t) {
      if (((e = e.containerInfo), (Bd = cp), (e = Ir(e)), Lr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        Vd = { focusedElem: e, selectionRange: n }, cp = !1, sl = t;
        sl !== null;
      )
        if (((t = sl), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (sl = e));
        else
          for (; sl !== null;) {
            switch (((t = sl), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    ((a = e[n]), (a.ref.impl = a.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Ys(n.type, a);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    Y(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    nf(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        nf(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (sl = e));
              break;
            }
            sl = t.return;
          }
    }
    function ll(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Cl(e, n), r & 4 && Wc(5, n));
          break;
        case 1:
          if ((Cl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Y(n, n.return, e);
              }
            else {
              var i = Ys(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                Y(n, n.return, e);
              }
            }
          (r & 64 && Kc(n), r & 512 && Jc(n, n.return));
          break;
        case 3:
          if ((Cl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              ro(e, t);
            } catch (e) {
              Y(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && nl(n);
        case 26:
        case 5:
          (Cl(e, n), t === null && r & 4 && Xc(n), r & 512 && Jc(n, n.return));
          break;
        case 12:
          Cl(e, n);
          break;
        case 31:
          (Cl(e, n), r & 4 && ml(e, n));
          break;
        case 13:
          (Cl(e, n),
            r & 4 && hl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Zu.bind(null, n)), lf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || rl), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || il), (i = rl));
            var a = il;
            ((rl = r),
              (il = t) && !a
                ? Tl(e, n, (n.subtreeFlags & 8772) != 0)
                : Cl(e, n),
              (rl = i),
              (il = a));
          }
          break;
        case 30:
          break;
        default:
          Cl(e, n);
      }
    }
    function ul(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), ul(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && Tt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var U = null,
      dl = !1;
    function fl(e, t, n) {
      for (n = n.child; n !== null;) (pl(e, t, n), (n = n.sibling));
    }
    function pl(e, t, n) {
      if (Ke && typeof Ke.onCommitFiberUnmount == `function`)
        try {
          Ke.onCommitFiberUnmount(Ge, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (il || Yc(n, t),
            fl(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          il || Yc(n, t);
          var r = U,
            i = dl;
          ($d(n.type) && ((U = n.stateNode), (dl = !1)),
            fl(e, t, n),
            hf(n.stateNode),
            (U = r),
            (dl = i));
          break;
        case 5:
          il || Yc(n, t);
        case 6:
          if (
            ((r = U),
            (i = dl),
            (U = null),
            fl(e, t, n),
            (U = r),
            (dl = i),
            U !== null)
          )
            if (dl)
              try {
                (U.nodeType === 9
                  ? U.body
                  : U.nodeName === `HTML`
                    ? U.ownerDocument.body
                    : U
                ).removeChild(n.stateNode);
              } catch (e) {
                Y(n, t, e);
              }
            else
              try {
                U.removeChild(n.stateNode);
              } catch (e) {
                Y(n, t, e);
              }
          break;
        case 18:
          U !== null &&
            (dl
              ? ((e = U),
                ef(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Pp(e))
              : ef(U, n.stateNode));
          break;
        case 4:
          ((r = U),
            (i = dl),
            (U = n.stateNode.containerInfo),
            (dl = !0),
            fl(e, t, n),
            (U = r),
            (dl = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Gc(2, n, t), il || Gc(4, n, t), fl(e, t, n));
          break;
        case 1:
          (il ||
            (Yc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && qc(n, t, r)),
            fl(e, t, n));
          break;
        case 21:
          fl(e, t, n);
          break;
        case 22:
          ((il = (r = il) || n.memoizedState !== null), fl(e, t, n), (il = r));
          break;
        default:
          fl(e, t, n);
      }
    }
    function ml(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Pp(e);
        } catch (e) {
          Y(t, t.return, e);
        }
      }
    }
    function hl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Pp(e);
        } catch (e) {
          Y(t, t.return, e);
        }
    }
    function gl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new ol()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new ol()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function _l(e, t) {
      var n = gl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Qu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function vl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null;) {
            switch (c.tag) {
              case 27:
                if ($d(c.type)) {
                  ((U = c.stateNode), (dl = !1));
                  break a;
                }
                break;
              case 5:
                ((U = c.stateNode), (dl = !1));
                break a;
              case 3:
              case 4:
                ((U = c.stateNode.containerInfo), (dl = !0));
                break a;
            }
            c = c.return;
          }
          if (U === null) throw Error(i(160));
          (pl(o, s, a),
            (U = null),
            (dl = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null;) (bl(t, e), (t = t.sibling));
    }
    var yl = null;
    function bl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (vl(t, e),
            xl(e),
            r & 4 && (Gc(3, e, e.return), Wc(3, e), Gc(5, e, e.return)));
          break;
        case 1:
          (vl(t, e),
            xl(e),
            r & 512 && (il || n === null || Yc(n, n.return)),
            r & 64 &&
              rl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var a = yl;
          if (
            (vl(t, e),
            xl(e),
            r & 512 && (il || n === null || Yc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type),
                      (n = e.memoizedProps),
                      (a = a.ownerDocument || a));
                    b: switch (r) {
                      case `title`:
                        ((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[wt] ||
                            o[_t] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(
                              o,
                              a.querySelector(`head > title`),
                            )),
                          Id(o, r, n),
                          (o[_t] = e),
                          At(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Uf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Id(o, r, n),
                          a.head.appendChild(o));
                        break;
                      case `meta`:
                        if (
                          (s = Uf(`meta`, `content`, a).get(
                            r + (n.content || ``),
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Id(o, r, n),
                          a.head.appendChild(o));
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    ((o[_t] = e), At(o), (r = o));
                  }
                  e.stateNode = r;
                } else Wf(a, e.type, e.stateNode);
              else e.stateNode = Rf(a, r, e.memoizedProps);
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  Zc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Wf(a, e.type, e.stateNode)
                    : Rf(a, r, e.memoizedProps));
          }
          break;
        case 27:
          (vl(t, e),
            xl(e),
            r & 512 && (il || n === null || Yc(n, n.return)),
            n !== null && r & 4 && Zc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if (
            (vl(t, e),
            xl(e),
            r & 512 && (il || n === null || Yc(n, n.return)),
            e.flags & 32)
          ) {
            a = e.stateNode;
            try {
              nn(a, ``);
            } catch (t) {
              Y(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Zc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (al = !0));
          break;
        case 6:
          if ((vl(t, e), xl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              Y(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Hf = null),
            (a = yl),
            (yl = vf(t.containerInfo)),
            vl(t, e),
            (yl = a),
            xl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Pp(t.containerInfo);
            } catch (t) {
              Y(e, e.return, t);
            }
          al && ((al = !1), Sl(e));
          break;
        case 4:
          ((r = yl),
            (yl = vf(e.stateNode.containerInfo)),
            vl(t, e),
            xl(e),
            (yl = r));
          break;
        case 12:
          (vl(t, e), xl(e));
          break;
        case 31:
          (vl(t, e),
            xl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), _l(e, r))));
          break;
        case 13:
          (vl(t, e),
            xl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              (nu = Ie()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), _l(e, r))));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = rl,
            d = il;
          if (
            ((rl = u || a),
            (il = d || l),
            vl(t, e),
            (il = d),
            (rl = u),
            xl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || rl || il || wl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    Y(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    Y(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? tf(m, !0) : tf(l.stateNode, !1);
                  } catch (e) {
                    Y(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), _l(e, n))));
          break;
        case 19:
          (vl(t, e),
            xl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), _l(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (vl(t, e), xl(e));
      }
    }
    function xl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Qc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              tl(e, $c(e), a);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (nn(o, ``), (n.flags &= -33)), tl(e, $c(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              el(e, $c(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Y(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Sl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (Sl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling));
        }
    }
    function Cl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (ll(e, t.alternate, t), (t = t.sibling));
    }
    function wl(e) {
      for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Gc(4, t, t.return), wl(t));
            break;
          case 1:
            Yc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && qc(t, t.return, n),
              wl(t));
            break;
          case 27:
            hf(t.stateNode);
          case 26:
          case 5:
            (Yc(t, t.return), wl(t));
            break;
          case 22:
            t.memoizedState === null && wl(t);
            break;
          case 30:
            wl(t);
            break;
          default:
            wl(t);
        }
        e = e.sibling;
      }
    }
    function Tl(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Tl(i, a, n), Wc(4, a));
            break;
          case 1:
            if (
              (Tl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Y(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    no(c[i], s);
              } catch (e) {
                Y(r, r.return, e);
              }
            }
            (n && o & 64 && Kc(a), Jc(a, a.return));
            break;
          case 27:
            nl(a);
          case 26:
          case 5:
            (Tl(i, a, n), n && r === null && o & 4 && Xc(a), Jc(a, a.return));
            break;
          case 12:
            Tl(i, a, n);
            break;
          case 31:
            (Tl(i, a, n), n && o & 4 && ml(i, a));
            break;
          case 13:
            (Tl(i, a, n), n && o & 4 && hl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Tl(i, a, n), Jc(a, a.return));
            break;
          case 30:
            break;
          default:
            Tl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function El(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && N(n)));
    }
    function Dl(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && N(e)));
    }
    function Ol(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) (kl(e, t, n, r), (t = t.sibling));
    }
    function kl(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Ol(e, t, n, r), i & 2048 && Wc(9, t));
          break;
        case 1:
          Ol(e, t, n, r);
          break;
        case 3:
          (Ol(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && N(e))));
          break;
        case 12:
          if (i & 2048) {
            (Ol(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              Y(t, t.return, e);
            }
          } else Ol(e, t, n, r);
          break;
        case 31:
          Ol(e, t, n, r);
          break;
        case 13:
          Ol(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Ol(e, t, n, r)
                : ((a._visibility |= 2),
                  Al(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
                ? Ol(e, t, n, r)
                : jl(e, t),
            i & 2048 && El(o, t));
          break;
        case 24:
          (Ol(e, t, n, r), i & 2048 && Dl(t.alternate, t));
          break;
        default:
          Ol(e, t, n, r);
      }
    }
    function Al(e, t, n, r, i) {
      for (
        i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child;
        t !== null;
      ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Al(a, o, s, c, i), Wc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Al(a, o, s, c, i))
              : u._visibility & 2
                ? Al(a, o, s, c, i)
                : jl(a, o),
              i && l & 2048 && El(o.alternate, o));
            break;
          case 24:
            (Al(a, o, s, c, i), i && l & 2048 && Dl(o.alternate, o));
            break;
          default:
            Al(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function jl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (jl(n, r), i & 2048 && El(r.alternate, r));
              break;
            case 24:
              (jl(n, r), i & 2048 && Dl(r.alternate, r));
              break;
            default:
              jl(n, r);
          }
          t = t.sibling;
        }
    }
    var Ml = 8192;
    function Nl(e, t, n) {
      if (e.subtreeFlags & Ml)
        for (e = e.child; e !== null;) (Pl(e, t, n), (e = e.sibling));
    }
    function Pl(e, t, n) {
      switch (e.tag) {
        case 26:
          (Nl(e, t, n),
            e.flags & Ml &&
              e.memoizedState !== null &&
              qf(n, yl, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          Nl(e, t, n);
          break;
        case 3:
        case 4:
          var r = yl;
          ((yl = vf(e.stateNode.containerInfo)), Nl(e, t, n), (yl = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Ml), (Ml = 16777216), Nl(e, t, n), (Ml = r))
              : Nl(e, t, n));
          break;
        default:
          Nl(e, t, n);
      }
    }
    function Fl(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Il(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((sl = r), zl(r, e));
          }
        Fl(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;) (Ll(e), (e = e.sibling));
    }
    function Ll(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Il(e), e.flags & 2048 && Gc(9, e, e.return));
          break;
        case 3:
          Il(e);
          break;
        case 12:
          Il(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Rl(e))
            : Il(e);
          break;
        default:
          Il(e);
      }
    }
    function Rl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((sl = r), zl(r, e));
          }
        Fl(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Gc(8, t, t.return), Rl(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Rl(t)));
            break;
          default:
            Rl(t);
        }
        e = e.sibling;
      }
    }
    function zl(e, t) {
      for (; sl !== null;) {
        var n = sl;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Gc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            N(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (sl = r));
        else
          a: for (n = e; sl !== null;) {
            r = sl;
            var i = r.sibling,
              a = r.return;
            if ((ul(r), r === n)) {
              sl = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (sl = i));
              break a;
            }
            sl = a;
          }
      }
    }
    var Bl = {
        getCacheForType: function (e) {
          var t = la(ha),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return la(ha).controller.signal;
        },
      },
      Vl = typeof WeakMap == `function` ? WeakMap : Map,
      W = 0,
      G = null,
      K = null,
      q = 0,
      J = 0,
      Hl = null,
      Ul = !1,
      Wl = !1,
      Gl = !1,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = 0,
      Zl = 0,
      Ql = 0,
      $l = null,
      eu = null,
      tu = !1,
      nu = 0,
      ru = 0,
      iu = 1 / 0,
      au = null,
      ou = null,
      su = 0,
      cu = null,
      lu = null,
      uu = 0,
      du = 0,
      fu = null,
      pu = null,
      mu = 0,
      hu = null;
    function gu() {
      return W & 2 && q !== 0 ? q & -q : w.T === null ? mt() : pd();
    }
    function _u() {
      if (Zl === 0)
        if (!(q & 536870912) || M) {
          var e = $e;
          (($e <<= 1), !($e & 3932160) && ($e = 262144), (Zl = e));
        } else Zl = 536870912;
      return ((e = lo.current), e !== null && (e.flags |= 32), Zl);
    }
    function vu(e, t, n) {
      (((e === G && (J === 2 || J === 9)) || e.cancelPendingCommit !== null) &&
        (Tu(e, 0), Su(e, q, Zl, !1)),
        st(e, n),
        (!(W & 2) || e !== G) &&
          (e === G && (!(W & 2) && (Yl |= n), ql === 4 && Su(e, q, Zl, !1)),
          ad(e)));
    }
    function yu(e, t, n) {
      if (W & 6) throw Error(i(327));
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || rt(e, t),
        a = r ? Nu(e, t) : ju(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Wl && !r && Su(e, t, 0, !1);
          break;
        } else {
          if (((n = e.current.alternate), o && !xu(n))) {
            ((a = ju(e, t, !1)), (o = !1));
            continue;
          }
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                a = $l;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (Tu(c, s).flags |= 256), (s = ju(c, s, !1)), s !== 2)
                ) {
                  if (Gl && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (Yl |= o), (a = 4));
                    break a;
                  }
                  ((o = eu),
                    (eu = a),
                    o !== null &&
                      (eu === null ? (eu = o) : eu.push.apply(eu, o)));
                }
                a = s;
              }
              if (((o = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            (Tu(e, 0), Su(e, t, 0, !0));
            break;
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                Su(r, t, Zl, !Ul);
                break a;
              case 2:
                eu = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((t & 62914560) === t && ((a = nu + 300 - Ie()), 10 < a)) {
              if ((Su(r, t, Zl, !Ul), nt(r, 0, !0) !== 0)) break a;
              ((uu = t),
                (r.timeoutHandle = Jd(
                  bu.bind(
                    null,
                    r,
                    n,
                    eu,
                    au,
                    tu,
                    t,
                    Zl,
                    Yl,
                    Ql,
                    Ul,
                    o,
                    `Throttled`,
                    -0,
                    0,
                  ),
                  a,
                )));
              break a;
            }
            bu(r, n, eu, au, tu, t, Zl, Yl, Ql, Ul, o, null, -0, 0);
          }
        }
        break;
      } while (1);
      ad(e);
    }
    function bu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: dn,
        }),
          Pl(t, a, d));
        var m =
          (a & 62914560) === a
            ? nu - Ie()
            : (a & 4194048) === a
              ? ru - Ie()
              : 0;
        if (((m = Yf(d, m)), m !== null)) {
          ((uu = a),
            (e.cancelPendingCommit = m(
              Bu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p),
            )),
            Su(e, a, o, !l));
          return;
        }
      }
      Bu(e, t, a, n, r, i, o, s, c);
    }
    function xu(e) {
      for (var t = e; ;) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!jr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function Su(e, t, n, r) {
      ((t &= ~Xl),
        (t &= ~Yl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - Je(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && lt(e, n, t);
    }
    function Cu() {
      return W & 6 ? !0 : (od(0, !1), !1);
    }
    function wu() {
      if (K !== null) {
        if (J === 0) var e = K.return;
        else ((e = K), (ta = ea = null), Po(e), (Ra = null), (za = 0), (e = K));
        for (; e !== null;) (Uc(e.alternate, e), (e = e.return));
        K = null;
      }
    }
    function Tu(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), Yd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (uu = 0),
        wu(),
        (G = e),
        (K = n = yi(e.current, null)),
        (q = t),
        (J = 0),
        (Hl = null),
        (Ul = !1),
        (Wl = rt(e, t)),
        (Gl = !1),
        (Ql = Zl = Xl = Yl = Jl = ql = 0),
        (eu = $l = null),
        (tu = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - Je(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Kl = t), li(), n);
    }
    function Eu(e, t) {
      ((I = null),
        (w.H = Vs),
        t === ka || t === ja
          ? ((t = Ia()), (J = 3))
          : t === Aa
            ? ((t = Ia()), (J = 4))
            : (J =
                t === ac
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (Hl = t),
        K === null && ((ql = 1), $s(e, Di(t, e.current))));
    }
    function Du() {
      var e = lo.current;
      return e === null
        ? !0
        : (q & 4194048) === q
          ? uo === null
          : (q & 62914560) === q || q & 536870912
            ? e === uo
            : !1;
    }
    function Ou() {
      var e = w.H;
      return ((w.H = Vs), e === null ? Vs : e);
    }
    function ku() {
      var e = w.A;
      return ((w.A = Bl), e);
    }
    function Au() {
      ((ql = 4),
        Ul || ((q & 4194048) !== q && lo.current !== null) || (Wl = !0),
        (!(Jl & 134217727) && !(Yl & 134217727)) ||
          G === null ||
          Su(G, q, Zl, !1));
    }
    function ju(e, t, n) {
      var r = W;
      W |= 2;
      var i = Ou(),
        a = ku();
      ((G !== e || q !== t) && ((au = null), Tu(e, t)), (t = !1));
      var o = ql;
      a: do
        try {
          if (J !== 0 && K !== null) {
            var s = K,
              c = Hl;
            switch (J) {
              case 8:
                (wu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                lo.current === null && (t = !0);
                var l = J;
                if (((J = 0), (Hl = null), Lu(e, s, c, l), n && Wl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = J), (J = 0), (Hl = null), Lu(e, s, c, l));
            }
          }
          (Mu(), (o = ql));
          break;
        } catch (t) {
          Eu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (ta = ea = null),
        (W = r),
        (w.H = i),
        (w.A = a),
        K === null && ((G = null), (q = 0), li()),
        o
      );
    }
    function Mu() {
      for (; K !== null;) Fu(K);
    }
    function Nu(e, t) {
      var n = W;
      W |= 2;
      var r = Ou(),
        a = ku();
      G !== e || q !== t
        ? ((au = null), (iu = Ie() + 500), Tu(e, t))
        : (Wl = rt(e, t));
      a: do
        try {
          if (J !== 0 && K !== null) {
            t = K;
            var o = Hl;
            b: switch (J) {
              case 1:
                ((J = 0), (Hl = null), Lu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (Na(o)) {
                  ((J = 0), (Hl = null), Iu(t));
                  break;
                }
                ((t = function () {
                  ((J !== 2 && J !== 9) || G !== e || (J = 7), ad(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                J = 7;
                break a;
              case 4:
                J = 5;
                break a;
              case 7:
                Na(o)
                  ? ((J = 0), (Hl = null), Iu(t))
                  : ((J = 0), (Hl = null), Lu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (K.tag) {
                  case 26:
                    s = K.memoizedState;
                  case 5:
                  case 27:
                    var c = K;
                    if (s ? Kf(s) : c.stateNode.complete) {
                      ((J = 0), (Hl = null));
                      var l = c.sibling;
                      if (l !== null) K = l;
                      else {
                        var u = c.return;
                        u === null ? (K = null) : ((K = u), Ru(u));
                      }
                      break b;
                    }
                }
                ((J = 0), (Hl = null), Lu(e, t, o, 5));
                break;
              case 6:
                ((J = 0), (Hl = null), Lu(e, t, o, 6));
                break;
              case 8:
                (wu(), (ql = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          Pu();
          break;
        } catch (t) {
          Eu(e, t);
        }
      while (1);
      return (
        (ta = ea = null),
        (w.H = r),
        (w.A = a),
        (W = n),
        K === null ? ((G = null), (q = 0), li(), ql) : 0
      );
    }
    function Pu() {
      for (; K !== null && !Pe();) Fu(K);
    }
    function Fu(e) {
      var t = Fc(e.alternate, e, Kl);
      ((e.memoizedProps = e.pendingProps), t === null ? Ru(e) : (K = t));
    }
    function Iu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = yc(n, t, t.pendingProps, t.type, void 0, q);
          break;
        case 11:
          t = yc(n, t, t.pendingProps, t.type.render, t.ref, q);
          break;
        case 5:
          Po(t);
        default:
          (Uc(n, t), (t = K = bi(t, Kl)), (t = Fc(n, t, Kl)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Ru(e) : (K = t));
    }
    function Lu(e, t, n, r) {
      ((ta = ea = null), Po(t), (Ra = null), (za = 0));
      var i = t.return;
      try {
        if (ic(e, i, t, n, q)) {
          ((ql = 1), $s(e, Di(n, e.current)), (K = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((K = i), t);
        ((ql = 1), $s(e, Di(n, e.current)), (K = null));
        return;
      }
      t.flags & 32768
        ? (M || r === 1
            ? (e = !0)
            : Wl || q & 536870912
              ? (e = !1)
              : ((Ul = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = lo.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          zu(t, e))
        : Ru(t);
    }
    function Ru(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          zu(t, Ul);
          return;
        }
        e = t.return;
        var n = Vc(t.alternate, t, Kl);
        if (n !== null) {
          K = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          K = t;
          return;
        }
        K = t = e;
      } while (t !== null);
      ql === 0 && (ql = 5);
    }
    function zu(e, t) {
      do {
        var n = Hc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (K = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          K = e;
          return;
        }
        K = e = n;
      } while (e !== null);
      ((ql = 6), (K = null));
    }
    function Bu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Gu();
      while (su !== 0);
      if (W & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ci),
          ct(e, n, o, s, c, l),
          e === G && ((K = G = null), (q = 0)),
          (lu = t),
          (cu = e),
          (uu = n),
          (du = o),
          (fu = a),
          (pu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              $u(Be, function () {
                return (Ku(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = w.T), (w.T = null), (a = E.p), (E.p = 2), (s = W), (W |= 4));
          try {
            cl(e, t, n);
          } finally {
            ((W = s), (E.p = a), (w.T = r));
          }
        }
        ((su = 1), Vu(), Hu(), Uu());
      }
    }
    function Vu() {
      if (su === 1) {
        su = 0;
        var e = cu,
          t = lu,
          n = (t.flags & 13878) != 0;
        if (t.subtreeFlags & 13878 || n) {
          ((n = w.T), (w.T = null));
          var r = E.p;
          E.p = 2;
          var i = W;
          W |= 4;
          try {
            bl(t, e);
            var a = Vd,
              o = Ir(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Fr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && Lr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Pr(s, h),
                      v = Pr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((cp = !!Bd), (Vd = Bd = null));
          } finally {
            ((W = i), (E.p = r), (w.T = n));
          }
        }
        ((e.current = t), (su = 2));
      }
    }
    function Hu() {
      if (su === 2) {
        su = 0;
        var e = cu,
          t = lu,
          n = (t.flags & 8772) != 0;
        if (t.subtreeFlags & 8772 || n) {
          ((n = w.T), (w.T = null));
          var r = E.p;
          E.p = 2;
          var i = W;
          W |= 4;
          try {
            ll(e, t.alternate, t);
          } finally {
            ((W = i), (E.p = r), (w.T = n));
          }
        }
        su = 3;
      }
    }
    function Uu() {
      if (su === 4 || su === 3) {
        ((su = 0), Fe());
        var e = cu,
          t = lu,
          n = uu,
          r = pu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (su = 5)
          : ((su = 0), (lu = cu = null), Wu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (ou = null),
          pt(n),
          (t = t.stateNode),
          Ke && typeof Ke.onCommitFiberRoot == `function`)
        )
          try {
            Ke.onCommitFiberRoot(Ge, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = w.T), (i = E.p), (E.p = 2), (w.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((w.T = t), (E.p = i));
          }
        }
        (uu & 3 && Gu(),
          ad(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === hu
              ? mu++
              : ((mu = 0), (hu = e))
            : (mu = 0),
          od(0, !1));
      }
    }
    function Wu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), N(t)));
    }
    function Gu() {
      return (Vu(), Hu(), Uu(), Ku());
    }
    function Ku() {
      if (su !== 5) return !1;
      var e = cu,
        t = du;
      du = 0;
      var n = pt(uu),
        r = w.T,
        a = E.p;
      try {
        ((E.p = 32 > n ? 32 : n), (w.T = null), (n = fu), (fu = null));
        var o = cu,
          s = uu;
        if (((su = 0), (lu = cu = null), (uu = 0), W & 6)) throw Error(i(331));
        var c = W;
        if (
          ((W |= 4),
          Ll(o.current),
          kl(o, o.current, s, n),
          (W = c),
          od(0, !1),
          Ke && typeof Ke.onPostCommitFiberRoot == `function`)
        )
          try {
            Ke.onPostCommitFiberRoot(Ge, o);
          } catch {}
        return !0;
      } finally {
        ((E.p = a), (w.T = r), Wu(e, t));
      }
    }
    function qu(e, t, n) {
      ((t = Di(n, t)),
        (t = tc(e.stateNode, t, 2)),
        (e = Xa(e, t, 2)),
        e !== null && (st(e, 2), ad(e)));
    }
    function Y(e, t, n) {
      if (e.tag === 3) qu(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            qu(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (ou === null || !ou.has(r)))
            ) {
              ((e = Di(n, e)),
                (n = nc(2)),
                (r = Xa(t, n, 2)),
                r !== null && (rc(n, r, t, e), st(r, 2), ad(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Ju(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Vl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((Gl = !0), i.add(n), (e = Yu.bind(null, e, t, n)), t.then(e, e));
    }
    function Yu(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        G === e &&
          (q & n) === n &&
          (ql === 4 || (ql === 3 && (q & 62914560) === q && 300 > Ie() - nu)
            ? !(W & 2) && Tu(e, 0)
            : (Xl |= n),
          Ql === q && (Ql = 0)),
        ad(e));
    }
    function Xu(e, t) {
      (t === 0 && (t = at()), (e = fi(e, t)), e !== null && (st(e, t), ad(e)));
    }
    function Zu(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Xu(e, n));
    }
    function Qu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), Xu(e, n));
    }
    function $u(e, t) {
      return Me(e, t);
    }
    var ed = null,
      td = null,
      X = !1,
      nd = !1,
      rd = !1,
      id = 0;
    function ad(e) {
      (e !== td &&
        e.next === null &&
        (td === null ? (ed = td = e) : (td = td.next = e)),
        (nd = !0),
        X || ((X = !0), fd()));
    }
    function od(e, t) {
      if (!rd && nd) {
        rd = !0;
        do
          for (var n = !1, r = ed; r !== null;) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Je(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), dd(r, a));
              } else
                ((a = q),
                  (a = nt(
                    r,
                    r === G ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || rt(r, a) || ((n = !0), dd(r, a)));
            r = r.next;
          }
        while (n);
        rd = !1;
      }
    }
    function sd() {
      cd();
    }
    function cd() {
      nd = X = !1;
      var e = 0;
      id !== 0 && qd() && (e = id);
      for (var t = Ie(), n = null, r = ed; r !== null;) {
        var i = r.next,
          a = ld(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (ed = i) : (n.next = i),
            i === null && (td = n))
          : ((n = r), (e !== 0 || a & 3) && (nd = !0)),
          (r = i));
      }
      ((su !== 0 && su !== 5) || od(e, !1), id !== 0 && (id = 0));
    }
    function ld(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Je(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = it(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = G),
        (n = q),
        (n = nt(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (J === 2 || J === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Ne(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || rt(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Ne(r), pt(n))) {
          case 2:
          case 8:
            n = ze;
            break;
          case 32:
            n = Be;
            break;
          case 268435456:
            n = He;
            break;
          default:
            n = Be;
        }
        return (
          (r = ud.bind(null, e)),
          (n = Me(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Ne(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function ud(e, t) {
      if (su !== 0 && su !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Gu() && e.callbackNode !== n) return null;
      var r = q;
      return (
        (r = nt(
          e,
          e === G ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (yu(e, r, t),
            ld(e, Ie()),
            e.callbackNode != null && e.callbackNode === n
              ? ud.bind(null, e)
              : null)
      );
    }
    function dd(e, t) {
      if (Gu()) return null;
      yu(e, t, !0);
    }
    function fd() {
      Zd(function () {
        W & 6 ? Me(Re, sd) : cd();
      });
    }
    function pd() {
      if (id === 0) {
        var e = ya;
        (e === 0 && ((e = Qe), (Qe <<= 1), !(Qe & 261888) && (Qe = 256)),
          (id = e));
      }
      return id;
    }
    function md(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : un(`` + e);
    }
    function hd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function gd(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = md((i[vt] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[vt] || null)
            ? md(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new Mn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (id !== 0) {
                    var e = o ? hd(i, o) : new FormData(i);
                    Os(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? hd(i, o) : new FormData(i)),
                    Os(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var _d = 0; _d < ri.length; _d++) {
      var vd = ri[_d];
      ii(vd.toLowerCase(), `on` + (vd[0].toUpperCase() + vd.slice(1)));
    }
    (ii(Yr, `onAnimationEnd`),
      ii(Xr, `onAnimationIteration`),
      ii(Zr, `onAnimationStart`),
      ii(`dblclick`, `onDoubleClick`),
      ii(`focusin`, `onFocus`),
      ii(`focusout`, `onBlur`),
      ii(Qr, `onTransitionRun`),
      ii($r, `onTransitionStart`),
      ii(ei, `onTransitionCancel`),
      ii(ti, `onTransitionEnd`),
      Pt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Pt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Pt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Pt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Nt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      Nt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      Nt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Nt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Nt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Nt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var yd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      bd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(yd),
      );
    function xd(e, t) {
      t = (t & 4) != 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ai(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ai(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Z(e, t) {
      var n = t[bt];
      n === void 0 && (n = t[bt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Td(t, e, 2, !1), n.add(r));
    }
    function Sd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Td(n, e, r, t));
    }
    var Cd = `_reactListening` + Math.random().toString(36).slice(2);
    function wd(e) {
      if (!e[Cd]) {
        ((e[Cd] = !0),
          jt.forEach(function (t) {
            t !== `selectionchange` &&
              (bd.has(t) || Sd(t, !1, e), Sd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Cd] || ((t[Cd] = !0), Sd(`selectionchange`, !1, t));
      }
    }
    function Td(e, t, n, r) {
      switch (hp(t)) {
        case 2:
          var i = lp;
          break;
        case 8:
          i = up;
          break;
        default:
          i = dp;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !xn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Ed(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null;) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null;) {
              if (((s = Et(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      vn(function () {
        var r = a,
          i = pn(n),
          s = [];
        a: {
          var c = ni.get(e);
          if (c !== void 0) {
            var l = Mn,
              u = e;
            switch (e) {
              case `keypress`:
                if (Dn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Xn;
                break;
              case `focusin`:
                ((u = `focus`), (l = Vn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Vn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Vn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = zn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Bn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Qn;
                break;
              case Yr:
              case Xr:
              case Zr:
                l = Hn;
                break;
              case ti:
                l = $n;
                break;
              case `scroll`:
              case `scrollend`:
                l = Pn;
                break;
              case `wheel`:
                l = er;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Un;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Zn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = tr;
            }
            var d = (t & 4) != 0,
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = yn(m, p)), g != null && d.push(Dd(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== fn &&
                (u = n.relatedTarget || n.fromElement) &&
                (Et(u) || u[yt]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? Et(u) : null),
                  u !== null &&
                    ((f = o(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = zn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Zn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : Ot(l)),
                (h = u == null ? c : Ot(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                Et(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = kd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g;) ((p = d(p)), h--);
                  for (; 0 < g - h;) ((m = d(m)), g--);
                  for (; h--;) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && Ad(s, c, l, d, !1),
                u !== null && f !== null && Ad(s, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? Ot(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = yr;
            else if (pr(c))
              if (br) v = kr;
              else {
                v = Dr;
                var y = Er;
              }
            else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && sn(r.elementType) && (v = yr)
                  : (v = Or));
            if ((v &&= v(e, r))) {
              mr(s, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Qt(c, `number`, c.value));
          }
          switch (((y = r ? Ot(r) : window), e)) {
            case `focusin`:
              (pr(y) || y.contentEditable === `true`) &&
                ((zr = y), (Br = r), (Vr = null));
              break;
            case `focusout`:
              Vr = Br = zr = null;
              break;
            case `mousedown`:
              Hr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Hr = !1), Ur(s, n, i));
              break;
            case `selectionchange`:
              if (Rr) break;
            case `keydown`:
            case `keyup`:
              Ur(s, n, i);
          }
          var b;
          if (rr)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            lr
              ? cr(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          (x &&
            (k &&
              n.locale !== `ko` &&
              (lr || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && lr && (b = En())
                : ((Cn = i),
                  (wn = `value` in Cn ? Cn.value : Cn.textContent),
                  (lr = !0))),
            (y = Od(r, x)),
            0 < y.length &&
              ((x = new Wn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = A(n)), b !== null && (x.data = b)))),
            (b = ar ? ur(e, n) : dr(e, n)) &&
              ((x = Od(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Wn(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            gd(s, e, r, n, i));
        }
        xd(s, t);
      });
    }
    function Dd(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Od(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = yn(e, n)),
            i != null && r.unshift(Dd(e, i, a)),
            (i = yn(e, t)),
            i != null && r.push(Dd(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function kd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Ad(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = yn(n, a)), l != null && o.unshift(Dd(n, l, c)))
            : i || ((l = yn(n, a)), l != null && o.push(Dd(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var jd = /\r\n?/g,
      Md = /\u0000|\uFFFD/g;
    function Nd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          jd,
          `
`,
        )
        .replace(Md, ``);
    }
    function Pd(e, t) {
      return ((t = Nd(t)), Nd(e) === t);
    }
    function Q(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || nn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              nn(e, `` + r);
          break;
        case `className`:
          Bt(e, `class`, r);
          break;
        case `tabIndex`:
          Bt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Bt(e, n, r);
          break;
        case `style`:
          on(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Bt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = un(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && Q(e, t, `name`, a.name, a, null),
                  Q(e, t, `formEncType`, a.formEncType, a, null),
                  Q(e, t, `formMethod`, a.formMethod, a, null),
                  Q(e, t, `formTarget`, a.formTarget, a, null))
                : (Q(e, t, `encType`, a.encType, a, null),
                  Q(e, t, `method`, a.method, a, null),
                  Q(e, t, `target`, a.target, a, null)));
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          ((r = un(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = dn);
          break;
        case `onScroll`:
          r != null && Z(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Z(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = un(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Z(`beforetoggle`, e), Z(`toggle`, e), zt(e, `popover`, r));
          break;
        case `xlinkActuate`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Vt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Vt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Vt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          zt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = cn.get(n) || n), zt(e, n, r));
      }
    }
    function Fd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          on(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? nn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && nn(e, `` + r);
          break;
        case `onScroll`:
          r != null && Z(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Z(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = dn);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!Mt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[vt] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a));
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : zt(e, n, r);
            }
      }
    }
    function Id(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Z(`error`, e), Z(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    Q(e, t, o, s, n, null);
                }
            }
          (a && Q(e, t, `srcSet`, n.srcSet, n, null),
            r && Q(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Z(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    Q(e, t, r, d, n, null);
                }
            }
          Zt(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (Z(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  Q(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && $t(e, !!r, n, !0) : $t(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Z(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  Q(e, t, s, c, n, null);
              }
          tn(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  Q(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Z(`beforetoggle`, e), Z(`toggle`, e), Z(`cancel`, e), Z(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Z(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < yd.length; r++) Z(yd[r], e);
          break;
        case `image`:
          (Z(`error`, e), Z(`load`, e));
          break;
        case `details`:
          Z(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Z(`error`, e), Z(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  Q(e, t, u, r, n, null);
              }
          return;
        default:
          if (sn(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Fd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && Q(e, t, c, r, n, null));
    }
    function Ld(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || Q(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && Q(e, t, p, m, r, f);
              }
          }
          Xt(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || Q(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && Q(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? $t(e, !!n, n ? [] : ``, !1) : $t(e, !!n, t, !0))
              : $t(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  Q(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && Q(e, t, s, a, r, o);
              }
          en(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  Q(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  Q(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                Q(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  Q(e, t, u, p, r, m);
              }
          return;
        default:
          if (sn(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Fd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Fd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            Q(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            Q(e, t, f, p, r, m));
    }
    function Rd(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function zd() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Rd(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Rd(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Bd = null,
      Vd = null;
    function Hd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Ud(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Wd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Gd(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Kd = null;
    function qd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e === Kd
          ? !1
          : ((Kd = e), !0)
        : ((Kd = null), !1);
    }
    var Jd = typeof setTimeout == `function` ? setTimeout : void 0,
      Yd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Xd = typeof Promise == `function` ? Promise : void 0,
      Zd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Xd === void 0
            ? Jd
            : function (e) {
                return Xd.resolve(null).then(e).catch(Qd);
              };
    function Qd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function $d(e) {
      return e === `head`;
    }
    function ef(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Pp(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) hf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), hf(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[wt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && hf(e.ownerDocument.body);
        n = i;
      } while (n);
      Pp(t);
    }
    function tf(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function nf(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (nf(n), Tt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function rf(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[wt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = uf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function af(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = uf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function of(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = uf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function sf(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function cf(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function lf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function uf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var df = null;
    function ff(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return uf(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function pf(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function mf(e, t, n) {
      switch (((t = Hd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function hf(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      Tt(e);
    }
    var gf = new Map(),
      _f = new Set();
    function vf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var yf = E.d;
    E.d = { f: bf, r: xf, D: wf, C: Tf, L: Ef, m: Df, X: kf, S: Of, M: Af };
    function bf() {
      var e = yf.f(),
        t = Cu();
      return e || t;
    }
    function xf(e) {
      var t = Dt(e);
      t !== null && t.tag === 5 && t.type === `form` ? As(t) : yf.r(e);
    }
    var Sf = typeof document > `u` ? null : document;
    function Cf(e, t, n) {
      var r = Sf;
      if (r && typeof t == `string` && t) {
        var i = Yt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          _f.has(i) ||
            (_f.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Id(t, `link`, e),
              At(t),
              r.head.appendChild(t))));
      }
    }
    function wf(e) {
      (yf.D(e), Cf(`dns-prefetch`, e, null));
    }
    function Tf(e, t) {
      (yf.C(e, t), Cf(`preconnect`, e, t));
    }
    function Ef(e, t, n) {
      yf.L(e, t, n);
      var r = Sf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Yt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Yt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Yt(n.imageSizes) + `"]`))
          : (i += `[href="` + Yt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Mf(e);
            break;
          case `script`:
            a = If(e);
        }
        gf.has(a) ||
          ((e = h(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          gf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Nf(a))) ||
            (t === `script` && r.querySelector(Lf(a))) ||
            ((t = r.createElement(`link`)),
            Id(t, `link`, e),
            At(t),
            r.head.appendChild(t)));
      }
    }
    function Df(e, t) {
      yf.m(e, t);
      var n = Sf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Yt(r) +
            `"][href="` +
            Yt(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = If(e);
        }
        if (
          !gf.has(a) &&
          ((e = h({ rel: `modulepreload`, href: e }, t)),
          gf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Lf(a))) return;
          }
          ((r = n.createElement(`link`)),
            Id(r, `link`, e),
            At(r),
            n.head.appendChild(r));
        }
      }
    }
    function Of(e, t, n) {
      yf.S(e, t, n);
      var r = Sf;
      if (r && e) {
        var i = kt(r).hoistableStyles,
          a = Mf(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Nf(a)))) s.loading = 5;
          else {
            ((e = h({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = gf.get(a)) && Bf(e, n));
            var c = (o = r.createElement(`link`));
            (At(c),
              Id(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              zf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function kf(e, t) {
      yf.X(e, t);
      var n = Sf;
      if (n && e) {
        var r = kt(n).hoistableScripts,
          i = If(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Lf(i))),
          a ||
            ((e = h({ src: e, async: !0 }, t)),
            (t = gf.get(i)) && Vf(e, t),
            (a = n.createElement(`script`)),
            At(a),
            Id(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Af(e, t) {
      yf.M(e, t);
      var n = Sf;
      if (n && e) {
        var r = kt(n).hoistableScripts,
          i = If(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Lf(i))),
          a ||
            ((e = h({ src: e, async: !0, type: `module` }, t)),
            (t = gf.get(i)) && Vf(e, t),
            (a = n.createElement(`script`)),
            At(a),
            Id(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function jf(e, t, n, r) {
      var a = (a = ve.current) ? vf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Mf(n.href)),
              (n = kt(a).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Mf(n.href);
            var o = kt(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(Nf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                gf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  gf.set(e, n),
                  o || Ff(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = If(n)),
                (n = kt(a).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Mf(e) {
      return `href="` + Yt(e) + `"`;
    }
    function Nf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Pf(e) {
      return h({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Ff(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Id(t, `link`, n),
          At(t),
          e.head.appendChild(t));
    }
    function If(e) {
      return `[src="` + Yt(e) + `"]`;
    }
    function Lf(e) {
      return `script[async]` + e;
    }
    function Rf(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Yt(n.href) + `"]`);
            if (r) return ((t.instance = r), At(r), r);
            var a = h({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              At(r),
              Id(r, `style`, a),
              zf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Mf(n.href);
            var o = e.querySelector(Nf(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), At(o), o);
            ((r = Pf(n)),
              (a = gf.get(a)) && Bf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              At(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Id(o, `link`, r),
              (t.state.loading |= 4),
              zf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = If(n.src)),
              (a = e.querySelector(Lf(o)))
                ? ((t.instance = a), At(a), a)
                : ((r = n),
                  (a = gf.get(o)) && ((r = h({}, n)), Vf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  At(a),
                  Id(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), zf(r, n.precedence, e));
      return t.instance;
    }
    function zf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Bf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function Vf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Hf = null;
    function Uf(e, t, n) {
      if (Hf === null) {
        var r = new Map(),
          i = (Hf = new Map());
        i.set(n, r);
      } else ((i = Hf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[wt] ||
            a[_t] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Wf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function Gf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Kf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function qf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Mf(r.href),
            a = t.querySelector(Nf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Xf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              At(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Pf(r)),
            (i = gf.get(i)) && Bf(r, i),
            (a = a.createElement(`link`)),
            At(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Id(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Xf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Jf = 0;
    function Yf(e, t) {
      return (
        e.stylesheets && e.count === 0 && $(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && $(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Jf === 0 && (Jf = 62500 * zd());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && $(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Jf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Xf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) $(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var Zf = null;
    function $(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Zf = new Map()),
          t.forEach(Qf, e),
          (Zf = null),
          Xf.call(e)));
    }
    function Qf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Zf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), Zf.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Xf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var $f = {
      $$typeof: S,
      Provider: null,
      Consumer: null,
      _currentValue: fe,
      _currentValue2: fe,
      _threadCount: 0,
    };
    function ep(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = ot(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = ot(0)),
        (this.hiddenUpdates = ot(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function tp(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new ep(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = _i(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = ga()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        qa(a),
        e
      );
    }
    function np(e) {
      return e ? ((e = hi), e) : hi;
    }
    function rp(e, t, n, r, i, a) {
      ((i = np(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ya(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Xa(e, r, t)),
        n !== null && (vu(n, e, t), Za(n, e, t)));
    }
    function ip(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ap(e, t) {
      (ip(e, t), (e = e.alternate) && ip(e, t));
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = fi(e, 67108864);
        (t !== null && vu(t, e, 67108864), ap(e, 67108864));
      }
    }
    function sp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = gu();
        t = ft(t);
        var n = fi(e, t);
        (n !== null && vu(n, e, t), ap(e, t));
      }
    }
    var cp = !0;
    function lp(e, t, n, r) {
      var i = w.T;
      w.T = null;
      var a = E.p;
      try {
        ((E.p = 2), dp(e, t, n, r));
      } finally {
        ((E.p = a), (w.T = i));
      }
    }
    function up(e, t, n, r) {
      var i = w.T;
      w.T = null;
      var a = E.p;
      try {
        ((E.p = 8), dp(e, t, n, r));
      } finally {
        ((E.p = a), (w.T = i));
      }
    }
    function dp(e, t, n, r) {
      if (cp) {
        var i = fp(r);
        if (i === null) (Ed(e, t, r, pp, n), wp(e, r));
        else if (Ep(i, e, t, n, r)) r.stopPropagation();
        else if ((wp(e, r), t & 4 && -1 < Cp.indexOf(e))) {
          for (; i !== null;) {
            var a = Dt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = tt(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - Je(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (ad(a), !(W & 6) && ((iu = Ie() + 500), od(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = fi(a, 2)), s !== null && vu(s, a, 2), Cu(), ap(a, 2));
              }
            if (((a = fp(r)), a === null && Ed(e, t, r, pp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Ed(e, t, r, null, n);
      }
    }
    function fp(e) {
      return ((e = pn(e)), mp(e));
    }
    var pp = null;
    function mp(e) {
      if (((pp = null), (e = Et(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((pp = e), null);
    }
    function hp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Le()) {
            case Re:
              return 2;
            case ze:
              return 8;
            case Be:
            case Ve:
              return 32;
            case He:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var gp = !1,
      _p = null,
      vp = null,
      yp = null,
      bp = new Map(),
      xp = new Map(),
      Sp = [],
      Cp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function wp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          _p = null;
          break;
        case `dragenter`:
        case `dragleave`:
          vp = null;
          break;
        case `mouseover`:
        case `mouseout`:
          yp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          bp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          xp.delete(t.pointerId);
      }
    }
    function Tp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Dt(t)), t !== null && op(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Ep(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((_p = Tp(_p, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((vp = Tp(vp, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((yp = Tp(yp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (bp.set(a, Tp(bp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            xp.set(a, Tp(xp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Dp(e) {
      var t = Et(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                ht(e.priority, function () {
                  sp(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                ht(e.priority, function () {
                  sp(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Op(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = fp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((fn = r), n.target.dispatchEvent(r), (fn = null));
        } else return ((t = Dt(n)), t !== null && op(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function kp(e, t, n) {
      Op(e) && n.delete(t);
    }
    function Ap() {
      ((gp = !1),
        _p !== null && Op(_p) && (_p = null),
        vp !== null && Op(vp) && (vp = null),
        yp !== null && Op(yp) && (yp = null),
        bp.forEach(kp),
        xp.forEach(kp));
    }
    function jp(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        gp ||
          ((gp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, Ap)));
    }
    var Mp = null;
    function Np(e) {
      Mp !== e &&
        ((Mp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Mp === e && (Mp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (mp(r || n) === null) continue;
              break;
            }
            var a = Dt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Os(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function Pp(e) {
      function t(t) {
        return jp(t, e);
      }
      (_p !== null && jp(_p, e),
        vp !== null && jp(vp, e),
        yp !== null && jp(yp, e),
        bp.forEach(t),
        xp.forEach(t));
      for (var n = 0; n < Sp.length; n++) {
        var r = Sp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < Sp.length && ((n = Sp[0]), n.blockedOn === null);)
        (Dp(n), n.blockedOn === null && Sp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[vt] || null;
          if (typeof a == `function`) o || Np(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[vt] || null))) s = o.formAction;
              else if (mp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Np(n));
          }
        }
    }
    function Fp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Ip(e) {
      this._internalRoot = e;
    }
    ((Lp.prototype.render = Ip.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        rp(n, gu(), e, t, null, null);
      }),
      (Lp.prototype.unmount = Ip.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (rp(e.current, 2, null, e, null, null), Cu(), (t[yt] = null));
          }
        }));
    function Lp(e) {
      this._internalRoot = e;
    }
    Lp.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = mt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Sp.length && t !== 0 && t < Sp[n].priority; n++);
        (Sp.splice(n, 0, e), n === 0 && Dp(e));
      }
    };
    var Rp = n.version;
    if (Rp !== `19.2.7`) throw Error(i(527, Rp, `19.2.7`));
    E.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = d(t)),
        (e = e === null ? null : p(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var zp = {
      bundleType: 0,
      version: `19.2.7`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: w,
      reconcilerVersion: `19.2.7`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Bp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Bp.isDisabled && Bp.supportsFiber)
        try {
          ((Ge = Bp.inject(zp)), (Ke = Bp));
        } catch {}
    }
    e.hydrateRoot = function (e, t, n) {
      if (!a(e)) throw Error(i(299));
      var r = !1,
        o = ``,
        s = Xs,
        c = Zs,
        l = Qs,
        u = null;
      return (
        n != null &&
          (!0 === n.unstable_strictMode && (r = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (c = n.onCaughtError),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError),
          n.formState !== void 0 && (u = n.formState)),
        (t = tp(e, 1, !0, t, n ?? null, r, o, u, s, c, l, Fp)),
        (t.context = np(null)),
        (n = t.current),
        (r = gu()),
        (r = ft(r)),
        (o = Ya(r)),
        (o.callback = null),
        Xa(n, o, r),
        (n = r),
        (t.current.lanes = n),
        st(t, n),
        ad(t),
        (e[yt] = t.current),
        wd(e),
        new Lp(t)
      );
    };
  }),
  g = o((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = h()));
  }),
  _ = `__TSS_CONTEXT`,
  v = Symbol.for(`TSS_SERVER_FUNCTION`),
  y = `application/x-tss-framed`,
  b = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 };
`${y}`;
var x = /;\s*v=(\d+)/;
function ee(e) {
  let t = e.match(x);
  return t ? parseInt(t[1], 10) : void 0;
}
function S(e) {
  let t = ee(e);
  if (t !== void 0 && t !== 1)
    throw Error(
      `Incompatible framed protocol version: server=${t}, client=1. Please ensure client and server are using compatible versions.`,
    );
}
var C = () => window.__TSS_START_OPTIONS__;
function te(e) {
  return e[e.length - 1];
}
function ne(e) {
  return typeof e == `function`;
}
function re(e, t) {
  return ne(e) ? e(t) : e;
}
var ie = Object.prototype.hasOwnProperty,
  ae = Object.prototype.propertyIsEnumerable;
function oe(e) {
  for (let t in e) if (ie.call(e, t)) return !0;
  return !1;
}
var se = () => Object.create(null),
  ce = (e, t) => le(e, t, se);
function le(e, t, n = () => ({}), r = 0) {
  if (e === t) return e;
  if (r > 500) return t;
  let i = t,
    a = E(e) && E(i);
  if (!a && !(de(e) && de(i))) return i;
  let o = a ? e : ue(e);
  if (!o) return i;
  let s = a ? i : ue(i);
  if (!s) return i;
  let c = o.length,
    l = s.length,
    u = a ? Array(l) : n(),
    d = 0;
  for (let t = 0; t < l; t++) {
    let o = a ? t : s[t],
      l = e[o],
      f = i[o];
    if (l === f) {
      ((u[o] = l), (a ? t < c : ie.call(e, o)) && d++);
      continue;
    }
    if (
      l === null ||
      f === null ||
      typeof l != `object` ||
      typeof f != `object`
    ) {
      u[o] = f;
      continue;
    }
    let p = le(l, f, n, r + 1);
    ((u[o] = p), p === l && d++);
  }
  return c === l && d === c ? e : u;
}
function ue(e) {
  let t = Object.getOwnPropertyNames(e);
  for (let n of t) if (!ae.call(e, n)) return !1;
  let n = Object.getOwnPropertySymbols(e);
  if (n.length === 0) return t;
  let r = t;
  for (let t of n) {
    if (!ae.call(e, t)) return !1;
    r.push(t);
  }
  return r;
}
function de(e) {
  if (!w(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(!w(n) || !n.hasOwnProperty(`isPrototypeOf`));
}
function w(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function E(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function fe(e, t, n) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    for (let r = 0, i = e.length; r < i; r++) if (!fe(e[r], t[r], n)) return !1;
    return !0;
  }
  if (de(e) && de(t)) {
    let r = n?.ignoreUndefined ?? !0;
    if (n?.partial) {
      for (let i in t)
        if ((!r || t[i] !== void 0) && !fe(e[i], t[i], n)) return !1;
      return !0;
    }
    let i = 0;
    if (!r) i = Object.keys(e).length;
    else for (let t in e) e[t] !== void 0 && i++;
    let a = 0;
    for (let o in t)
      if ((!r || t[o] !== void 0) && (a++, a > i || !fe(e[o], t[o], n)))
        return !1;
    return i === a;
  }
  return !1;
}
function pe(e) {
  let t,
    n,
    r = new Promise((e, r) => {
      ((t = e), (n = r));
    });
  return (
    (r.status = `pending`),
    (r.resolve = (n) => {
      ((r.status = `resolved`), (r.value = n), t(n), e?.(n));
    }),
    (r.reject = (e) => {
      ((r.status = `rejected`), n(e));
    }),
    r
  );
}
function me(e) {
  return typeof e?.message == `string`
    ? e.message.startsWith(`Failed to fetch dynamically imported module`) ||
        e.message.startsWith(`error loading dynamically imported module`) ||
        e.message.startsWith(`Importing a module script failed`)
    : !1;
}
function he(e) {
  return !!(e && typeof e == `object` && typeof e.then == `function`);
}
var D = /[\x00-\x1f\x7f"<>`{}]/g;
function O(e) {
  return e.replace(
    D,
    (e) => `%` + e.charCodeAt(0).toString(16).toUpperCase().padStart(2, `0`),
  );
}
function ge(e) {
  let t;
  try {
    t = decodeURI(e);
  } catch {
    t = e.replaceAll(/%[0-9A-F]{2}/gi, (e) => {
      try {
        return decodeURI(e);
      } catch {
        return e;
      }
    });
  }
  return O(t);
}
var _e = [`http:`, `https:`, `mailto:`, `tel:`];
function ve(e, t) {
  if (!e) return !1;
  try {
    let n = new URL(e);
    return !t.has(n.protocol);
  } catch {
    return !1;
  }
}
var ye = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  be = /[&><\u2028\u2029]/g;
function xe(e) {
  return e.replace(be, (e) => ye[e]);
}
function Se(e) {
  if (!e || (!/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith(`//`)))
    return { path: e, handledProtocolRelativeURL: !1 };
  let t = /%25|%5C/gi,
    n = 0,
    r = ``,
    i;
  for (; (i = t.exec(e)) !== null;)
    ((r += ge(e.slice(n, i.index)) + i[0]), (n = t.lastIndex));
  r += ge(n ? e.slice(n) : e);
  let a = !1;
  return (
    r.startsWith(`//`) && ((a = !0), (r = `/` + r.replace(/^\/+/, ``))),
    { path: r, handledProtocolRelativeURL: a }
  );
}
function Ce(e) {
  return /\s|[^\u0000-\u007F]/.test(e)
    ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent)
    : e;
}
function we(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function Te() {
  throw Error(`Invariant failed`);
}
function Ee(e) {
  let t = new Map(),
    n,
    r,
    i = (e) => {
      e.next &&
        (e.prev
          ? ((e.prev.next = e.next),
            (e.next.prev = e.prev),
            (e.next = void 0),
            r && ((r.next = e), (e.prev = r)))
          : ((e.next.prev = void 0),
            (n = e.next),
            (e.next = void 0),
            r && ((e.prev = r), (r.next = e))),
        (r = e));
    };
  return {
    get(e) {
      let n = t.get(e);
      if (n) return (i(n), n.value);
    },
    set(a, o) {
      if (t.size >= e && n) {
        let e = n;
        (t.delete(e.key),
          e.next && ((n = e.next), (e.next.prev = void 0)),
          e === r && (r = void 0));
      }
      let s = t.get(a);
      if (s) ((s.value = o), i(s));
      else {
        let e = { key: a, value: o, prev: r };
        (r && (r.next = e), (r = e), (n ||= e), t.set(a, e));
      }
    },
    clear() {
      (t.clear(), (n = void 0), (r = void 0));
    },
  };
}
var De = 4,
  Oe = 5;
function ke(e) {
  let t = e.indexOf(`{`);
  if (t === -1) return null;
  let n = e.indexOf(`}`, t);
  return n === -1 || t + 1 >= e.length ? null : [t, n];
}
function Ae(e, t, n = new Uint16Array(6)) {
  let r = e.indexOf(`/`, t),
    i = r === -1 ? e.length : r,
    a = e.substring(t, i);
  if (!a || !a.includes(`$`))
    return (
      (n[0] = 0),
      (n[1] = t),
      (n[2] = t),
      (n[3] = i),
      (n[4] = i),
      (n[5] = i),
      n
    );
  if (a === `$`) {
    let r = e.length;
    return (
      (n[0] = 2),
      (n[1] = t),
      (n[2] = t),
      (n[3] = r),
      (n[4] = r),
      (n[5] = r),
      n
    );
  }
  if (a.charCodeAt(0) === 36)
    return (
      (n[0] = 1),
      (n[1] = t),
      (n[2] = t + 1),
      (n[3] = i),
      (n[4] = i),
      (n[5] = i),
      n
    );
  let o = ke(a);
  if (o) {
    let [r, s] = o,
      c = a.charCodeAt(r + 1);
    if (c === 45) {
      if (r + 2 < a.length && a.charCodeAt(r + 2) === 36) {
        let e = r + 3,
          a = s;
        if (e < a)
          return (
            (n[0] = 3),
            (n[1] = t + r),
            (n[2] = t + e),
            (n[3] = t + a),
            (n[4] = t + s + 1),
            (n[5] = i),
            n
          );
      }
    } else if (c === 36) {
      let a = r + 1,
        o = r + 2;
      return o === s
        ? ((n[0] = 2),
          (n[1] = t + r),
          (n[2] = t + a),
          (n[3] = t + o),
          (n[4] = t + s + 1),
          (n[5] = e.length),
          n)
        : ((n[0] = 1),
          (n[1] = t + r),
          (n[2] = t + o),
          (n[3] = t + s),
          (n[4] = t + s + 1),
          (n[5] = i),
          n);
    }
  }
  return (
    (n[0] = 0),
    (n[1] = t),
    (n[2] = t),
    (n[3] = i),
    (n[4] = i),
    (n[5] = i),
    n
  );
}
function je(e, t, n, r, i, a, o) {
  o?.(n);
  let s = r;
  {
    let r = n.fullPath ?? n.from,
      o = r.length,
      c = n.options?.caseSensitive ?? e,
      l = n.options?.params?.parse ?? n.options?.parseParams;
    for (; s < o;) {
      let e = Ae(r, s, t),
        o,
        u = s,
        d = e[5];
      switch (((s = d + 1), a++, e[0])) {
        case 0: {
          let t = r.substring(e[2], e[3]);
          if (c) {
            let e = i.static?.get(t);
            if (e) o = e;
            else {
              i.static ??= new Map();
              let e = Pe(n.fullPath ?? n.from);
              ((e.parent = i), (e.depth = a), (o = e), i.static.set(t, e));
            }
          } else {
            let e = t.toLowerCase(),
              r = i.staticInsensitive?.get(e);
            if (r) o = r;
            else {
              i.staticInsensitive ??= new Map();
              let t = Pe(n.fullPath ?? n.from);
              ((t.parent = i),
                (t.depth = a),
                (o = t),
                i.staticInsensitive.set(e, t));
            }
          }
          break;
        }
        case 1: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            f = c && !!(t || s),
            p = t ? (f ? t : t.toLowerCase()) : void 0,
            m = s ? (f ? s : s.toLowerCase()) : void 0,
            h =
              !l &&
              i.dynamic?.find(
                (e) =>
                  !e.parse &&
                  e.caseSensitive === f &&
                  e.prefix === p &&
                  e.suffix === m,
              );
          if (h) o = h;
          else {
            let e = Fe(1, n.fullPath ?? n.from, f, p, m);
            ((o = e),
              (e.depth = a),
              (e.parent = i),
              (i.dynamic ??= []),
              i.dynamic.push(e));
          }
          break;
        }
        case 3: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            f = c && !!(t || s),
            p = t ? (f ? t : t.toLowerCase()) : void 0,
            m = s ? (f ? s : s.toLowerCase()) : void 0,
            h =
              !l &&
              i.optional?.find(
                (e) =>
                  !e.parse &&
                  e.caseSensitive === f &&
                  e.prefix === p &&
                  e.suffix === m,
              );
          if (h) o = h;
          else {
            let e = Fe(3, n.fullPath ?? n.from, f, p, m);
            ((o = e),
              (e.parent = i),
              (e.depth = a),
              (i.optional ??= []),
              i.optional.push(e));
          }
          break;
        }
        case 2: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            l = c && !!(t || s),
            f = t ? (l ? t : t.toLowerCase()) : void 0,
            p = s ? (l ? s : s.toLowerCase()) : void 0,
            m = Fe(2, n.fullPath ?? n.from, l, f, p);
          ((o = m),
            (m.parent = i),
            (m.depth = a),
            (i.wildcard ??= []),
            i.wildcard.push(m));
        }
      }
      i = o;
    }
    if (
      l &&
      n.children &&
      !n.isRoot &&
      n.id &&
      n.id.charCodeAt(n.id.lastIndexOf(`/`) + 1) === 95
    ) {
      let e = Pe(n.fullPath ?? n.from);
      ((e.kind = Oe),
        (e.parent = i),
        a++,
        (e.depth = a),
        (i.pathless ??= []),
        i.pathless.push(e),
        (i = e));
    }
    let u = (n.path || !n.children) && !n.isRoot;
    if (u && r.endsWith(`/`)) {
      let e = Pe(n.fullPath ?? n.from);
      ((e.kind = De),
        (e.parent = i),
        a++,
        (e.depth = a),
        (i.index = e),
        (i = e));
    }
    ((i.parse = l ?? null),
      (i.priority = n.options?.params?.priority ?? 0),
      u && !i.route && ((i.route = n), (i.fullPath = n.fullPath ?? n.from)));
  }
  if (n.children) for (let r of n.children) je(e, t, r, s, i, a, o);
}
function Me(e, t) {
  if (e.parse && !t.parse) return -1;
  if (!e.parse && t.parse) return 1;
  if (e.parse && t.parse && (e.priority || t.priority))
    return t.priority - e.priority;
  if (e.prefix && t.prefix && e.prefix !== t.prefix) {
    if (e.prefix.startsWith(t.prefix)) return -1;
    if (t.prefix.startsWith(e.prefix)) return 1;
  }
  if (e.suffix && t.suffix && e.suffix !== t.suffix) {
    if (e.suffix.endsWith(t.suffix)) return -1;
    if (t.suffix.endsWith(e.suffix)) return 1;
  }
  return e.prefix && !t.prefix
    ? -1
    : !e.prefix && t.prefix
      ? 1
      : e.suffix && !t.suffix
        ? -1
        : !e.suffix && t.suffix
          ? 1
          : e.caseSensitive && !t.caseSensitive
            ? -1
            : !e.caseSensitive && t.caseSensitive
              ? 1
              : 0;
}
function Ne(e) {
  if (e.pathless) for (let t of e.pathless) Ne(t);
  if (e.static) for (let t of e.static.values()) Ne(t);
  if (e.staticInsensitive) for (let t of e.staticInsensitive.values()) Ne(t);
  if (e.dynamic?.length) {
    e.dynamic.sort(Me);
    for (let t of e.dynamic) Ne(t);
  }
  if (e.optional?.length) {
    e.optional.sort(Me);
    for (let t of e.optional) Ne(t);
  }
  if (e.wildcard?.length) {
    e.wildcard.sort(Me);
    for (let t of e.wildcard) Ne(t);
  }
}
function Pe(e) {
  return {
    kind: 0,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: e,
    parent: null,
    parse: null,
    priority: 0,
  };
}
function Fe(e, t, n, r, i) {
  return {
    kind: e,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: t,
    parent: null,
    parse: null,
    priority: 0,
    caseSensitive: n,
    prefix: r,
    suffix: i,
  };
}
function Ie(e, t) {
  let n = Pe(`/`),
    r = new Uint16Array(6);
  for (let t of e) je(!1, r, t, 1, n, 0);
  (Ne(n), (t.masksTree = n), (t.flatCache = Ee(1e3)));
}
function Le(e, t) {
  e ||= `/`;
  let n = t.flatCache.get(e);
  if (n) return n;
  let r = He(e, t.masksTree);
  return (t.flatCache.set(e, r), r);
}
function Re(e, t, n, r, i) {
  ((e ||= `/`), (r ||= `/`));
  let a = t ? `case\0${e}` : e,
    o = i.singleCache.get(a);
  return (
    o ||
      ((o = Pe(`/`)),
      je(t, new Uint16Array(6), { from: e }, 1, o, 0),
      i.singleCache.set(a, o)),
    He(r, o, n)
  );
}
function ze(e, t, n = !1) {
  let r = n ? e : `nofuzz\0${e}`,
    i = t.matchCache.get(r);
  if (i !== void 0) return i;
  e ||= `/`;
  let a;
  try {
    a = He(e, t.segmentTree, n);
  } catch (e) {
    if (e instanceof URIError) a = null;
    else throw e;
  }
  return (a && (a.branch = We(a.route)), t.matchCache.set(r, a), a);
}
function Be(e) {
  return e === `/` ? e : e.replace(/\/{1,}$/, ``);
}
function Ve(e, t = !1, n) {
  let r = Pe(e.fullPath),
    i = new Uint16Array(6),
    a = {},
    o = {},
    s = 0;
  return (
    je(t, i, e, 1, r, 0, (e) => {
      if ((n?.(e, s), e.id in a && Te(), (a[e.id] = e), s !== 0 && e.path)) {
        let t = Be(e.fullPath);
        (!o[t] || e.fullPath.endsWith(`/`)) && (o[t] = e);
      }
      s++;
    }),
    Ne(r),
    {
      processedTree: {
        segmentTree: r,
        singleCache: Ee(1e3),
        matchCache: Ee(1e3),
        flatCache: null,
        masksTree: null,
      },
      routesById: a,
      routesByPath: o,
    }
  );
}
function He(e, t, n = !1) {
  let r = e.split(`/`),
    i = Ke(e, r, t, n);
  if (!i) return null;
  let [a] = Ue(e, r, i);
  return { route: i.node.route, rawParams: a };
}
function Ue(e, t, n) {
  let r = Ge(n.node),
    i = null,
    a = Object.create(null),
    o = n.extract?.part ?? 0,
    s = n.extract?.node ?? 0,
    c = n.extract?.path ?? 0,
    l = n.extract?.segment ?? 0;
  for (; s < r.length; o++, s++, c++, l++) {
    let u = r[s];
    if (u.kind === De) break;
    if (u.kind === Oe) {
      (l--, o--, c--);
      continue;
    }
    let d = t[o],
      f = c;
    if ((d && (c += d.length), u.kind === 1)) {
      i ??= n.node.fullPath.split(`/`);
      let e = i[l],
        t = u.prefix?.length ?? 0;
      if (e.charCodeAt(t) === 123) {
        let n = u.suffix?.length ?? 0,
          r = e.substring(t + 2, e.length - n - 1),
          i = d.substring(t, d.length - n);
        a[r] = decodeURIComponent(i);
      } else {
        let t = e.substring(1);
        a[t] = decodeURIComponent(d);
      }
    } else if (u.kind === 3) {
      if (n.skipped & (1 << s)) {
        (o--, (c = f - 1));
        continue;
      }
      i ??= n.node.fullPath.split(`/`);
      let e = i[l],
        t = u.prefix?.length ?? 0,
        r = u.suffix?.length ?? 0,
        p = e.substring(t + 3, e.length - r - 1),
        m = u.suffix || u.prefix ? d.substring(t, d.length - r) : d;
      m && (a[p] = decodeURIComponent(m));
    } else if (u.kind === 2) {
      let t = u,
        n = e.substring(
          f + (t.prefix?.length ?? 0),
          e.length - (t.suffix?.length ?? 0),
        ),
        r = decodeURIComponent(n);
      ((a[`*`] = r), (a._splat = r));
      break;
    }
  }
  return (
    n.rawParams && Object.assign(a, n.rawParams),
    [a, { part: o, node: s, path: c, segment: l }]
  );
}
function We(e) {
  let t = [e];
  for (; e.parentRoute;) ((e = e.parentRoute), t.push(e));
  return (t.reverse(), t);
}
function Ge(e) {
  let t = Array(e.depth + 1);
  do ((t[e.depth] = e), (e = e.parent));
  while (e);
  return t;
}
function Ke(e, t, n, r) {
  if (e === `/` && n.index) return { node: n.index, skipped: 0 };
  let i = !te(t),
    a = i && e !== `/`,
    o = t.length - +!!i,
    s = [
      {
        node: n,
        index: 1,
        skipped: 0,
        depth: 1,
        statics: 0,
        dynamics: 0,
        optionals: 0,
      },
    ],
    c = null,
    l = null;
  for (; s.length;) {
    let n = s.pop(),
      {
        node: i,
        index: u,
        skipped: d,
        depth: f,
        statics: p,
        dynamics: m,
        optionals: h,
      } = n,
      { extract: g, rawParams: _ } = n;
    if (i.kind === 2 && i.route && !Xe(l, n)) continue;
    if (i.parse) {
      if (!Ye(e, t, n)) continue;
      ((_ = n.rawParams), (g = n.extract));
    }
    r && i.route && i.kind !== De && Xe(c, n) && (c = n);
    let v = u === o;
    if (
      v &&
      (i.route && (!a || i.kind === De || i.kind === 2) && Xe(l, n) && (l = n),
      !i.optional && !i.wildcard && !i.index && !i.pathless)
    )
      continue;
    let y = v ? void 0 : t[u],
      b;
    if (v && i.index) {
      let n = {
          node: i.index,
          index: u,
          skipped: d,
          depth: f + 1,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        },
        r = !0;
      if ((i.index.parse && (Ye(e, t, n) || (r = !1)), r)) {
        if (!m && !h && !d && Je(p, o)) return n;
        Xe(l, n) && (l = n);
      }
    }
    if (i.wildcard)
      for (let e = i.wildcard.length - 1; e >= 0; e--) {
        let n = i.wildcard[e],
          { prefix: r, suffix: a } = n;
        if (!(
          r &&
          (v || !(n.caseSensitive ? y : (b ??= y.toLowerCase())).startsWith(r))
        )) {
          if (a) {
            if (v) continue;
            let e = t.slice(u).join(`/`).slice(-a.length);
            if ((n.caseSensitive ? e : e.toLowerCase()) !== a) continue;
          }
          s.push({
            node: n,
            index: o,
            skipped: d,
            depth: f + 1,
            statics: p,
            dynamics: m,
            optionals: h,
            extract: g,
            rawParams: _,
          });
        }
      }
    if (i.optional) {
      let e = d | (1 << f),
        t = f + 1;
      for (let n = i.optional.length - 1; n >= 0; n--) {
        let r = i.optional[n];
        s.push({
          node: r,
          index: u,
          skipped: e,
          depth: t,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
      if (!v)
        for (let e = i.optional.length - 1; e >= 0; e--) {
          let n = i.optional[e],
            { prefix: r, suffix: a } = n;
          if (r || a) {
            let e = n.caseSensitive ? y : (b ??= y.toLowerCase());
            if ((r && !e.startsWith(r)) || (a && !e.endsWith(a))) continue;
          }
          s.push({
            node: n,
            index: u + 1,
            skipped: d,
            depth: t,
            statics: p,
            dynamics: m,
            optionals: h + qe(o, u),
            extract: g,
            rawParams: _,
          });
        }
    }
    if (!v && i.dynamic && y)
      for (let e = i.dynamic.length - 1; e >= 0; e--) {
        let t = i.dynamic[e],
          { prefix: n, suffix: r } = t;
        if (n || r) {
          let e = t.caseSensitive ? y : (b ??= y.toLowerCase());
          if ((n && !e.startsWith(n)) || (r && !e.endsWith(r))) continue;
        }
        s.push({
          node: t,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p,
          dynamics: m + qe(o, u),
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
    if (!v && i.staticInsensitive) {
      let e = i.staticInsensitive.get((b ??= y.toLowerCase()));
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p + qe(o, u),
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
    }
    if (!v && i.static) {
      let e = i.static.get(y);
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p + qe(o, u),
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
    }
    if (i.pathless) {
      let e = f + 1;
      for (let t = i.pathless.length - 1; t >= 0; t--) {
        let n = i.pathless[t];
        s.push({
          node: n,
          index: u,
          skipped: d,
          depth: e,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
    }
  }
  if (l) return l;
  if (r && c) {
    let n = c.index;
    for (let e = 0; e < c.index; e++) n += t[e].length;
    let r = n === e.length ? `/` : e.slice(n);
    return (
      (c.rawParams ??= Object.create(null)),
      (c.rawParams[`**`] = decodeURIComponent(r)),
      c
    );
  }
  return null;
}
function qe(e, t) {
  return 2 ** (e - t - 1);
}
function Je(e, t) {
  return e === 2 ** (t - 1) - 1;
}
function Ye(e, t, n) {
  let r, i;
  try {
    [r, i] = Ue(e, t, n);
  } catch {
    return null;
  }
  if (((n.rawParams = r), (n.extract = i), !n.node.parse)) return !0;
  try {
    if (n.node.parse(r) === !1) return null;
  } catch {}
  return !0;
}
function Xe(e, t) {
  return (
    !e ||
    t.statics > e.statics ||
    (t.statics === e.statics &&
      (t.dynamics > e.dynamics ||
        (t.dynamics === e.dynamics &&
          (t.optionals > e.optionals ||
            (t.optionals === e.optionals &&
              ((t.node.kind === De) > (e.node.kind === De) ||
                ((t.node.kind === De) == (e.node.kind === De) &&
                  t.depth > e.depth)))))))
  );
}
function Ze(e) {
  return Qe(e.filter((e) => e !== void 0).join(`/`));
}
function Qe(e) {
  return e.replace(/\/{2,}/g, `/`);
}
function $e(e) {
  return e === `/` ? e : e.replace(/^\/{1,}/, ``);
}
function et(e) {
  let t = e.length;
  return t > 1 && e[t - 1] === `/` ? e.replace(/\/{1,}$/, ``) : e;
}
function tt(e) {
  return et($e(e));
}
function nt(e, t) {
  return e?.endsWith(`/`) && e !== `/` && e !== `${t}/` ? e.slice(0, -1) : e;
}
function rt(e, t, n) {
  return nt(e, n) === nt(t, n);
}
function it({ base: e, to: t, trailingSlash: n = `never`, cache: r }) {
  let i = t.startsWith(`/`),
    a = !i && t === `.`,
    o;
  if (r) {
    o = i ? t : a ? e : e + `\0` + t;
    let n = r.get(o);
    if (n) return n;
  }
  let s;
  if (a) s = e.split(`/`);
  else if (i) s = t.split(`/`);
  else {
    for (s = e.split(`/`); s.length > 1 && te(s) === ``;) s.pop();
    let n = t.split(`/`);
    for (let e = 0, t = n.length; e < t; e++) {
      let r = n[e];
      r === ``
        ? e
          ? e === t - 1 && s.push(r)
          : (s = [r])
        : r === `..`
          ? s.pop()
          : r === `.` || s.push(r);
    }
  }
  s.length > 1 &&
    (te(s) === `` ? n === `never` && s.pop() : n === `always` && s.push(``));
  let c = Qe(s.join(`/`)) || `/`;
  return (o && r && r.set(o, c), c);
}
function at(e) {
  let t = new Map(e.map((e) => [encodeURIComponent(e), e])),
    n = Array.from(t.keys())
      .map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`))
      .join(`|`),
    r = new RegExp(n, `g`);
  return (e) => e.replace(r, (e) => t.get(e) ?? e);
}
function ot(e, t, n) {
  let r = t[e];
  return typeof r == `string`
    ? e === `_splat`
      ? /^[a-zA-Z0-9\-._~!/]*$/.test(r)
        ? r
        : r
            .split(`/`)
            .map((e) => ct(e, n))
            .join(`/`)
      : ct(r, n)
    : r;
}
function st({ path: e, params: t, decoder: n, ...r }) {
  let i = !1,
    a = Object.create(null);
  if (!e || e === `/`)
    return { interpolatedPath: `/`, usedParams: a, isMissingParams: i };
  if (!e.includes(`$`))
    return { interpolatedPath: e, usedParams: a, isMissingParams: i };
  let o = e.length,
    s = 0,
    c,
    l = ``;
  for (; s < o;) {
    let r = s;
    c = Ae(e, r, c);
    let o = c[5];
    if (((s = o + 1), r === o)) continue;
    let u = c[0];
    if (u === 0) {
      l += `/` + e.substring(r, o);
      continue;
    }
    if (u === 2) {
      let s = t._splat;
      ((a._splat = s), (a[`*`] = s));
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o);
      if (!s) {
        ((i = !0), (u || d) && (l += `/` + u + d));
        continue;
      }
      let f = ot(`_splat`, t, n);
      l += `/` + u + f + d;
      continue;
    }
    if (u === 1) {
      let s = e.substring(c[2], c[3]);
      (!i && !(s in t) && (i = !0), (a[s] = t[s]));
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o),
        f = ot(s, t, n) ?? `undefined`;
      l += `/` + u + f + d;
      continue;
    }
    if (u === 3) {
      let i = e.substring(c[2], c[3]),
        s = t[i];
      if (s == null) continue;
      a[i] = s;
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o),
        f = ot(i, t, n) ?? ``;
      l += `/` + u + f + d;
      continue;
    }
  }
  return (
    e.endsWith(`/`) && (l += `/`),
    { usedParams: a, interpolatedPath: l || `/`, isMissingParams: i }
  );
}
function ct(e, t) {
  let n = encodeURIComponent(e);
  return t?.(n) ?? n;
}
function lt(e) {
  return e?.isNotFound === !0;
}
function ut(e, t = String) {
  let n = new URLSearchParams();
  for (let r in e) {
    let i = e[r];
    i !== void 0 && n.set(r, t(i));
  }
  return n.toString();
}
function dt(e) {
  return e
    ? e === `false`
      ? !1
      : e === `true`
        ? !0
        : e * 0 == 0 && +e + `` === e
          ? +e
          : e
    : ``;
}
function ft(e) {
  let t = new URLSearchParams(e),
    n = Object.create(null);
  for (let [e, r] of t.entries()) {
    let t = n[e];
    t == null
      ? (n[e] = dt(r))
      : Array.isArray(t)
        ? t.push(dt(r))
        : (n[e] = [t, dt(r)]);
  }
  return n;
}
var pt = ht(JSON.parse),
  mt = gt(JSON.stringify, JSON.parse);
function ht(e) {
  return (t) => {
    t[0] === `?` && (t = t.substring(1));
    let n = ft(t);
    for (let t in n) {
      let r = n[t];
      if (typeof r == `string`)
        try {
          n[t] = e(r);
        } catch {}
    }
    return n;
  };
}
function gt(e, t) {
  let n = typeof t == `function`;
  function r(r) {
    if (typeof r == `object` && r)
      try {
        return e(r);
      } catch {}
    else if (n && typeof r == `string`)
      try {
        return (t(r), e(r));
      } catch {}
    return r;
  }
  return (e) => {
    let t = ut(e, r);
    return t ? `?${t}` : ``;
  };
}
var _t = `__root__`;
function vt(e) {
  if (
    ((e.statusCode = e.statusCode || e.code || 307),
    !e._builtLocation && !e.reloadDocument && typeof e.href == `string`)
  )
    try {
      (new URL(e.href), (e.reloadDocument = !0));
    } catch {}
  let t = new Headers(e.headers);
  e.href && t.get(`Location`) === null && t.set(`Location`, e.href);
  let n = new Response(null, { status: e.statusCode, headers: t });
  if (((n.options = e), e.throw)) throw n;
  return n;
}
function yt(e) {
  return e instanceof Response && !!e.options;
}
function bt(e) {
  if (typeof e == `object` && e && e.isSerializedRedirect) return vt(e);
}
var xt = (e) => {
    if (!e.rendered) return ((e.rendered = !0), e.onReady?.());
  },
  St = (e) =>
    e.stores.matchesId
      .get()
      .some((t) => e.stores.matchStores.get(t)?.get()._forcePending),
  Ct = (e, t) => !!(e.preload && !e.router.stores.matchStores.has(t)),
  wt = (e, t, n = !0) => {
    let r = { ...(e.router.options.context ?? {}) },
      i = n ? t : t - 1;
    for (let t = 0; t <= i; t++) {
      let n = e.matches[t];
      if (!n) continue;
      let i = e.router.getMatch(n.id);
      i && Object.assign(r, i.__routeContext, i.__beforeLoadContext);
    }
    return r;
  },
  Tt = (e, t) => {
    if (!e.matches.length) return;
    let n = t.routeId,
      r = e.matches.findIndex((t) => t.routeId === e.router.routeTree.id),
      i = r >= 0 ? r : 0,
      a = n
        ? e.matches.findIndex((e) => e.routeId === n)
        : (e.firstBadMatchIndex ?? e.matches.length - 1);
    a < 0 && (a = i);
    for (let t = a; t >= 0; t--) {
      let n = e.matches[t];
      if (e.router.looseRoutesById[n.routeId].options.notFoundComponent)
        return t;
    }
    return n ? a : i;
  },
  Et = (e, t, n) => {
    if (!(!yt(n) && !lt(n)))
      throw yt(n) && n.redirectHandled && !n.options.reloadDocument
        ? n
        : (t &&
            (t._nonReactive.beforeLoadPromise?.resolve(),
            t._nonReactive.loaderPromise?.resolve(),
            (t._nonReactive.beforeLoadPromise = void 0),
            (t._nonReactive.loaderPromise = void 0),
            (t._nonReactive.error = n),
            e.updateMatch(t.id, (r) => ({
              ...r,
              status: yt(n)
                ? `redirected`
                : lt(n)
                  ? `notFound`
                  : r.status === `pending`
                    ? `success`
                    : r.status,
              context: wt(e, t.index),
              isFetching: !1,
              error: n,
            })),
            lt(n) && !n.routeId && (n.routeId = t.routeId),
            t._nonReactive.loadPromise?.resolve()),
          yt(n) &&
            ((e.rendered = !0),
            (n.options._fromLocation = e.location),
            (n.redirectHandled = !0),
            (n = e.router.resolveRedirect(n))),
          n);
  },
  Dt = (e, t) => {
    let n = e.router.getMatch(t);
    return !!(!n || n._nonReactive.dehydrated);
  },
  Ot = (e, t, n) => {
    let r = wt(e, n);
    e.updateMatch(t, (e) => ({ ...e, context: r }));
  },
  kt = (e, t, n) => {
    let { id: r, routeId: i } = e.matches[t],
      a = e.router.looseRoutesById[i];
    if (n instanceof Promise) throw n;
    ((e.firstBadMatchIndex ??= t), Et(e, e.router.getMatch(r), n));
    try {
      a.options.onError?.(n);
    } catch (t) {
      ((n = t), Et(e, e.router.getMatch(r), n));
    }
    (e.updateMatch(
      r,
      (e) => (
        e._nonReactive.beforeLoadPromise?.resolve(),
        (e._nonReactive.beforeLoadPromise = void 0),
        e._nonReactive.loadPromise?.resolve(),
        {
          ...e,
          error: n,
          status: `error`,
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      ),
    ),
      !e.preload && !yt(n) && !lt(n) && (e.serialError ??= n));
  },
  At = (e, t, n, r) => {
    if (r._nonReactive.pendingTimeout !== void 0) return;
    let i = n.options.pendingMs ?? e.router.options.defaultPendingMs;
    if (
      e.onReady &&
      !Ct(e, t) &&
      (n.options.loader || n.options.beforeLoad || Vt(n)) &&
      typeof i == `number` &&
      i !== 1 / 0 &&
      (n.options.pendingComponent ?? e.router.options?.defaultPendingComponent)
    ) {
      let t = setTimeout(() => {
        xt(e);
      }, i);
      r._nonReactive.pendingTimeout = t;
    }
  },
  jt = (e, t, n) => {
    let r = e.router.getMatch(t);
    if (!r._nonReactive.beforeLoadPromise && !r._nonReactive.loaderPromise)
      return;
    At(e, t, n, r);
    let i = () => {
      let n = e.router.getMatch(t);
      n.preload &&
        (n.status === `redirected` || n.status === `notFound`) &&
        Et(e, n, n.error);
    };
    return r._nonReactive.beforeLoadPromise
      ? r._nonReactive.beforeLoadPromise.then(i)
      : i();
  },
  Mt = (e, t, n, r) => {
    let i = e.router.getMatch(t),
      a = i._nonReactive.loadPromise;
    i._nonReactive.loadPromise = pe(() => {
      (a?.resolve(), (a = void 0));
    });
    let { paramsError: o, searchError: s } = i;
    (o && kt(e, n, o), s && kt(e, n, s), At(e, t, r, i));
    let c = new AbortController(),
      l = !1,
      u = () => {
        l ||
          ((l = !0),
          e.updateMatch(t, (e) => ({
            ...e,
            isFetching: `beforeLoad`,
            fetchCount: e.fetchCount + 1,
            abortController: c,
          })));
      },
      d = () => {
        (i._nonReactive.beforeLoadPromise?.resolve(),
          (i._nonReactive.beforeLoadPromise = void 0),
          e.updateMatch(t, (e) => ({ ...e, isFetching: !1 })));
      };
    if (!r.options.beforeLoad) {
      e.router.batch(() => {
        (u(), d());
      });
      return;
    }
    i._nonReactive.beforeLoadPromise = pe();
    let f = { ...wt(e, n, !1), ...i.__routeContext },
      { search: p, params: m, cause: h } = i,
      g = Ct(e, t),
      _ = {
        search: p,
        abortController: c,
        params: m,
        preload: g,
        context: f,
        location: e.location,
        navigate: (t) => e.router.navigate({ ...t, _fromLocation: e.location }),
        buildLocation: e.router.buildLocation,
        cause: g ? `preload` : h,
        matches: e.matches,
        routeId: r.id,
        ...e.router.options.additionalContext,
      },
      v = (r) => {
        if (r === void 0) {
          e.router.batch(() => {
            (u(), d());
          });
          return;
        }
        ((yt(r) || lt(r)) && (u(), kt(e, n, r)),
          e.router.batch(() => {
            (u(),
              e.updateMatch(t, (e) => ({ ...e, __beforeLoadContext: r })),
              d());
          }));
      },
      y;
    try {
      if (((y = r.options.beforeLoad(_)), he(y)))
        return (
          u(),
          y
            .catch((t) => {
              kt(e, n, t);
            })
            .then(v)
        );
    } catch (t) {
      (u(), kt(e, n, t));
    }
    v(y);
  },
  Nt = (e, t) => {
    let { id: n, routeId: r } = e.matches[t],
      i = e.router.looseRoutesById[r],
      a = () => s(),
      o = () => Mt(e, n, t, i),
      s = () => {
        if (Dt(e, n)) return;
        let t = jt(e, n, i);
        return he(t) ? t.then(o) : o();
      };
    return a();
  },
  Pt = (e, t, n) => {
    let r = e.router.getMatch(t);
    if (!r || (!n.options.head && !n.options.scripts && !n.options.headers))
      return;
    let i = {
      ssr: e.router.options.ssr,
      matches: e.matches,
      match: r,
      params: r.params,
      loaderData: r.loaderData,
    };
    return Promise.all([
      n.options.head?.(i),
      n.options.scripts?.(i),
      n.options.headers?.(i),
    ]).then(([e, t, n]) => ({
      meta: e?.meta,
      links: e?.links,
      headScripts: e?.scripts,
      headers: n,
      scripts: t,
      styles: e?.styles,
    }));
  },
  Ft = (e, t, n, r, i) => {
    let a = t[r - 1],
      {
        params: o,
        loaderDeps: s,
        abortController: c,
        cause: l,
      } = e.router.getMatch(n),
      u = wt(e, r),
      d = Ct(e, n);
    return {
      params: o,
      deps: s,
      preload: !!d,
      parentMatchPromise: a,
      abortController: c,
      context: u,
      location: e.location,
      navigate: (t) => e.router.navigate({ ...t, _fromLocation: e.location }),
      cause: d ? `preload` : l,
      route: i,
      ...e.router.options.additionalContext,
    };
  },
  It = async (e, t, n, r, i) => {
    try {
      let a = e.router.getMatch(n);
      try {
        Bt(i);
        let o = i.options.loader,
          s = typeof o == `function` ? o : o?.handler,
          c = s?.(Ft(e, t, n, r, i)),
          l = !!s && he(c);
        if (
          ((l ||
            i._lazyPromise ||
            i._componentsPromise ||
            i.options.head ||
            i.options.scripts ||
            i.options.headers ||
            a._nonReactive.minPendingPromise) &&
            e.updateMatch(n, (e) => ({ ...e, isFetching: `loader` })),
          s)
        ) {
          let t = l ? await c : c;
          (Et(e, e.router.getMatch(n), t),
            t !== void 0 && e.updateMatch(n, (e) => ({ ...e, loaderData: t })));
        }
        i._lazyPromise && (await i._lazyPromise);
        let u = a._nonReactive.minPendingPromise;
        (u && (await u),
          i._componentsPromise && (await i._componentsPromise),
          e.updateMatch(n, (t) => ({
            ...t,
            error: void 0,
            context: wt(e, r),
            status: `success`,
            isFetching: !1,
            updatedAt: Date.now(),
          })));
      } catch (t) {
        let o = t;
        if (o?.name === `AbortError`) {
          if (a.abortController.signal.aborted) {
            (a._nonReactive.loaderPromise?.resolve(),
              (a._nonReactive.loaderPromise = void 0));
            return;
          }
          e.updateMatch(n, (t) => ({
            ...t,
            status: t.status === `pending` ? `success` : t.status,
            isFetching: !1,
            context: wt(e, r),
          }));
          return;
        }
        let s = a._nonReactive.minPendingPromise;
        (s && (await s),
          lt(t) && (await i.options.notFoundComponent?.preload?.()),
          Et(e, e.router.getMatch(n), t));
        try {
          i.options.onError?.(t);
        } catch (t) {
          ((o = t), Et(e, e.router.getMatch(n), t));
        }
        (!yt(o) && !lt(o) && (await Bt(i, [`errorComponent`])),
          e.updateMatch(n, (t) => ({
            ...t,
            error: o,
            context: wt(e, r),
            status: `error`,
            isFetching: !1,
          })));
      }
    } catch (t) {
      let r = e.router.getMatch(n);
      (r && (r._nonReactive.loaderPromise = void 0), Et(e, r, t));
    }
  },
  Lt = async (e, t, n) => {
    async function r(r, a, c, l, d) {
      let f = Date.now() - a.updatedAt,
        p = r
          ? (d.options.preloadStaleTime ??
            e.router.options.defaultPreloadStaleTime ??
            3e4)
          : (d.options.staleTime ?? e.router.options.defaultStaleTime ?? 0),
        m = d.options.shouldReload,
        h = typeof m == `function` ? m(Ft(e, t, i, n, d)) : m,
        { status: g, invalid: _ } = l,
        v =
          f >= p &&
          (!!e.forceStaleReload ||
            l.cause === `enter` ||
            (c !== void 0 && c !== l.id));
      ((o = g === `success` && (_ || (h ?? v))),
        (r && d.options.preload === !1) ||
          (o && !e.sync && u
            ? ((s = !0),
              (async () => {
                try {
                  await It(e, t, i, n, d);
                  let r = e.router.getMatch(i);
                  (r._nonReactive.loaderPromise?.resolve(),
                    r._nonReactive.loadPromise?.resolve(),
                    (r._nonReactive.loaderPromise = void 0),
                    (r._nonReactive.loadPromise = void 0));
                } catch (t) {
                  yt(t) && (await e.router.navigate(t.options));
                }
              })())
            : g !== `success` || o
              ? await It(e, t, i, n, d)
              : Ot(e, i, n)));
    }
    let { id: i, routeId: a } = e.matches[n],
      o = !1,
      s = !1,
      c = e.router.looseRoutesById[a],
      l = c.options.loader,
      u =
        ((typeof l == `function` ? void 0 : l?.staleReloadMode) ??
          e.router.options.defaultStaleReloadMode) !== `blocking`;
    if (Dt(e, i)) {
      if (!e.router.getMatch(i)) return e.matches[n];
      Ot(e, i, n);
    } else {
      let t = e.router.getMatch(i),
        o = e.router.stores.matchesId.get()[n],
        s =
          ((o && e.router.stores.matchStores.get(o)) || null)?.routeId === a
            ? o
            : e.router.stores.matches.get().find((e) => e.routeId === a)?.id,
        l = Ct(e, i);
      if (t._nonReactive.loaderPromise) {
        if (t.status === `success` && !e.sync && !t.preload && u) return t;
        await t._nonReactive.loaderPromise;
        let n = e.router.getMatch(i),
          a = n._nonReactive.error || n.error;
        (a && Et(e, n, a), n.status === `pending` && (await r(l, t, s, n, c)));
      } else {
        let n = l && !e.router.stores.matchStores.has(i),
          a = e.router.getMatch(i);
        ((a._nonReactive.loaderPromise = pe()),
          n !== a.preload && e.updateMatch(i, (e) => ({ ...e, preload: n })),
          await r(l, t, s, a, c));
      }
    }
    let d = e.router.getMatch(i);
    (s ||
      (d._nonReactive.loaderPromise?.resolve(),
      d._nonReactive.loadPromise?.resolve(),
      (d._nonReactive.loadPromise = void 0)),
      clearTimeout(d._nonReactive.pendingTimeout),
      (d._nonReactive.pendingTimeout = void 0),
      s || (d._nonReactive.loaderPromise = void 0),
      (d._nonReactive.dehydrated = void 0));
    let f = s ? d.isFetching : !1;
    return f !== d.isFetching || d.invalid !== !1
      ? (e.updateMatch(i, (e) => ({ ...e, isFetching: f, invalid: !1 })),
        e.router.getMatch(i))
      : d;
  };
async function Rt(e) {
  let t = e,
    n = [];
  St(t.router) && xt(t);
  let r;
  for (let e = 0; e < t.matches.length; e++) {
    try {
      let n = Nt(t, e);
      he(n) && (await n);
    } catch (e) {
      if (yt(e)) throw e;
      if (lt(e)) r = e;
      else if (!t.preload) throw e;
      break;
    }
    if (t.serialError || t.firstBadMatchIndex != null) break;
  }
  let i = t.firstBadMatchIndex ?? t.matches.length,
    a = r && !t.preload ? Tt(t, r) : void 0,
    o = r && t.preload ? 0 : a === void 0 ? i : Math.min(a + 1, i),
    s,
    c;
  for (let e = 0; e < o; e++) n.push(Lt(t, n, e));
  try {
    await Promise.all(n);
  } catch {
    let e = await Promise.allSettled(n);
    for (let t of e) {
      if (t.status !== `rejected`) continue;
      let e = t.reason;
      if (yt(e)) throw e;
      lt(e) ? (s ??= e) : (c ??= e);
    }
    if (c !== void 0) throw c;
  }
  let l = s ?? (r && !t.preload ? r : void 0),
    u =
      t.firstBadMatchIndex === void 0
        ? t.matches.length - 1
        : t.firstBadMatchIndex;
  if (!l && r && t.preload) return t.matches;
  if (l) {
    let e = Tt(t, l);
    e === void 0 && Te();
    let n = t.matches[e],
      r = t.router.looseRoutesById[n.routeId],
      i = t.router.options?.defaultNotFoundComponent;
    (!r.options.notFoundComponent && i && (r.options.notFoundComponent = i),
      (l.routeId = n.routeId));
    let a = n.routeId === t.router.routeTree.id;
    (t.updateMatch(n.id, (e) => ({
      ...e,
      ...(a
        ? { status: `success`, globalNotFound: !0, error: void 0 }
        : { status: `notFound`, error: l }),
      isFetching: !1,
    })),
      (u = e),
      await Bt(r, [`notFoundComponent`]));
  } else if (!t.preload) {
    let e = t.matches[0];
    e.globalNotFound ||
      (t.router.getMatch(e.id)?.globalNotFound &&
        t.updateMatch(e.id, (e) => ({
          ...e,
          globalNotFound: !1,
          error: void 0,
        })));
  }
  if (t.serialError && t.firstBadMatchIndex !== void 0) {
    let e = t.router.looseRoutesById[t.matches[t.firstBadMatchIndex].routeId];
    await Bt(e, [`errorComponent`]);
  }
  for (let e = 0; e <= u; e++) {
    let { id: n, routeId: r } = t.matches[e],
      i = t.router.looseRoutesById[r];
    try {
      let e = Pt(t, n, i);
      if (e) {
        let r = await e;
        t.updateMatch(n, (e) => ({ ...e, ...r }));
      }
    } catch (e) {
      console.error(`Error executing head for route ${r}:`, e);
    }
  }
  let d = xt(t);
  if ((he(d) && (await d), l)) throw l;
  if (t.serialError && !t.preload && !t.onReady) throw t.serialError;
  return t.matches;
}
function zt(e, t) {
  let n = t.map((t) => e.options[t]?.preload?.()).filter(Boolean);
  if (n.length !== 0) return Promise.all(n);
}
function Bt(e, t = Ht) {
  !e._lazyLoaded &&
    e._lazyPromise === void 0 &&
    (e.lazyFn
      ? (e._lazyPromise = e.lazyFn().then((t) => {
          let { id: n, ...r } = t.options;
          (Object.assign(e.options, r),
            (e._lazyLoaded = !0),
            (e._lazyPromise = void 0));
        }))
      : (e._lazyLoaded = !0));
  let n = () =>
    e._componentsLoaded
      ? void 0
      : t === Ht
        ? (() => {
            if (e._componentsPromise === void 0) {
              let t = zt(e, Ht);
              t
                ? (e._componentsPromise = t.then(() => {
                    ((e._componentsLoaded = !0),
                      (e._componentsPromise = void 0));
                  }))
                : (e._componentsLoaded = !0);
            }
            return e._componentsPromise;
          })()
        : zt(e, t);
  return e._lazyPromise ? e._lazyPromise.then(n) : n();
}
function Vt(e) {
  for (let t of Ht) if (e.options[t]?.preload) return !0;
  return !1;
}
var Ht = [
  `component`,
  `errorComponent`,
  `pendingComponent`,
  `notFoundComponent`,
];
function Ut(e) {
  return {
    input: ({ url: t }) => {
      for (let n of e) t = Gt(n, t);
      return t;
    },
    output: ({ url: t }) => {
      for (let n = e.length - 1; n >= 0; n--) t = Kt(e[n], t);
      return t;
    },
  };
}
function Wt(e) {
  let t = tt(e.basepath),
    n = `/${t}`,
    r = e.caseSensitive ? n : n.toLowerCase(),
    i = `${r}/`;
  return {
    input: ({ url: t }) => {
      let a = e.caseSensitive ? t.pathname : t.pathname.toLowerCase();
      return (
        a === r
          ? (t.pathname = `/`)
          : a.startsWith(i) && (t.pathname = t.pathname.slice(n.length)),
        t
      );
    },
    output: ({ url: e }) => ((e.pathname = Ze([`/`, t, e.pathname])), e),
  };
}
function Gt(e, t) {
  let n = e?.input?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function Kt(e, t) {
  let n = e?.output?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function qt(e, t) {
  let { createMutableStore: n, createReadonlyStore: r, batch: i, init: a } = t,
    o = new Map(),
    s = new Map(),
    c = new Map(),
    l = n(e.status),
    u = n(e.loadedAt),
    d = n(e.isLoading),
    f = n(e.isTransitioning),
    p = n(e.location),
    m = n(e.resolvedLocation),
    h = n(e.statusCode),
    g = n(e.redirect),
    _ = n([]),
    v = n([]),
    y = n([]),
    b = r(() => Jt(o, _.get())),
    x = r(() => Jt(s, v.get())),
    ee = r(() => Jt(c, y.get())),
    S = r(() => _.get()[0]),
    C = r(() => _.get().some((e) => o.get(e)?.get().status === `pending`)),
    te = r(() => ({
      locationHref: p.get().href,
      resolvedLocationHref: m.get()?.href,
      status: l.get(),
    })),
    ne = r(() => ({
      status: l.get(),
      loadedAt: u.get(),
      isLoading: d.get(),
      isTransitioning: f.get(),
      matches: b.get(),
      location: p.get(),
      resolvedLocation: m.get(),
      statusCode: h.get(),
      redirect: g.get(),
    })),
    re = Ee(64);
  function ie(e) {
    let t = re.get(e);
    return (
      t ||
        ((t = r(() => {
          let t = _.get();
          for (let n of t) {
            let t = o.get(n);
            if (t && t.routeId === e) return t.get();
          }
        })),
        re.set(e, t)),
      t
    );
  }
  let ae = {
    status: l,
    loadedAt: u,
    isLoading: d,
    isTransitioning: f,
    location: p,
    resolvedLocation: m,
    statusCode: h,
    redirect: g,
    matchesId: _,
    pendingIds: v,
    cachedIds: y,
    matches: b,
    pendingMatches: x,
    cachedMatches: ee,
    firstId: S,
    hasPending: C,
    matchRouteDeps: te,
    matchStores: o,
    pendingMatchStores: s,
    cachedMatchStores: c,
    __store: ne,
    getRouteMatchStore: ie,
    setMatches: oe,
    setPending: se,
    setCached: ce,
  };
  (oe(e.matches), a?.(ae));
  function oe(e) {
    Yt(e, o, _, n, i);
  }
  function se(e) {
    Yt(e, s, v, n, i);
  }
  function ce(e) {
    Yt(e, c, y, n, i);
  }
  return ae;
}
function Jt(e, t) {
  let n = [];
  for (let r of t) {
    let t = e.get(r);
    t && n.push(t.get());
  }
  return n;
}
function Yt(e, t, n, r, i) {
  let a = e.map((e) => e.id),
    o = new Set(a);
  i(() => {
    for (let e of t.keys()) o.has(e) || t.delete(e);
    for (let n of e) {
      let e = t.get(n.id);
      if (!e) {
        let e = r(n);
        ((e.routeId = n.routeId), t.set(n.id, e));
        continue;
      }
      ((e.routeId = n.routeId), e.get() !== n && e.set(n));
    }
    we(n.get(), a) || n.set(a);
  });
}
var Xt = `__TSR_index`,
  Zt = `popstate`,
  Qt = `beforeunload`;
function $t(e) {
  let t = e.getLocation(),
    n = new Set(),
    r = (r) => {
      ((t = e.getLocation()), n.forEach((e) => e({ location: t, action: r })));
    },
    i = (n) => {
      (e.notifyOnIndexChange ?? !0) ? r(n) : (t = e.getLocation());
    },
    a = async ({ task: n, navigateOpts: r, ...i }) => {
      if (r?.ignoreBlocker ?? !1) {
        n();
        return;
      }
      let a = e.getBlockers?.() ?? [],
        o = i.type === `PUSH` || i.type === `REPLACE`;
      if (typeof document < `u` && a.length && o)
        for (let n of a) {
          let r = rn(i.path, i.state);
          if (
            await n.blockerFn({
              currentLocation: t,
              nextLocation: r,
              action: i.type,
            })
          ) {
            e.onBlocked?.();
            return;
          }
        }
      n();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (e) => (
      n.add(e),
      () => {
        n.delete(e);
      }
    ),
    push: (n, i, o) => {
      let s = t.state[Xt];
      ((i = en(s + 1, i)),
        a({
          task: () => {
            (e.pushState(n, i), r({ type: `PUSH` }));
          },
          navigateOpts: o,
          type: `PUSH`,
          path: n,
          state: i,
        }));
    },
    replace: (n, i, o) => {
      let s = t.state[Xt];
      ((i = en(s, i)),
        a({
          task: () => {
            (e.replaceState(n, i), r({ type: `REPLACE` }));
          },
          navigateOpts: o,
          type: `REPLACE`,
          path: n,
          state: i,
        }));
    },
    go: (t, n) => {
      a({
        task: () => {
          (e.go(t), i({ type: `GO`, index: t }));
        },
        navigateOpts: n,
        type: `GO`,
      });
    },
    back: (t) => {
      a({
        task: () => {
          (e.back(t?.ignoreBlocker ?? !1), i({ type: `BACK` }));
        },
        navigateOpts: t,
        type: `BACK`,
      });
    },
    forward: (t) => {
      a({
        task: () => {
          (e.forward(t?.ignoreBlocker ?? !1), i({ type: `FORWARD` }));
        },
        navigateOpts: t,
        type: `FORWARD`,
      });
    },
    canGoBack: () => t.state[Xt] !== 0,
    createHref: (t) => e.createHref(t),
    block: (t) => {
      if (!e.setBlockers) return () => {};
      let n = e.getBlockers?.() ?? [];
      return (
        e.setBlockers([...n, t]),
        () => {
          let n = e.getBlockers?.() ?? [];
          e.setBlockers?.(n.filter((e) => e !== t));
        }
      );
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: r,
  };
}
function en(e, t) {
  t ||= {};
  let n = an();
  return { ...t, key: n, __TSR_key: n, [Xt]: e };
}
function tn(e) {
  let t = e?.window ?? (typeof document < `u` ? window : void 0),
    n = t.history.pushState,
    r = t.history.replaceState,
    i = [],
    a = () => i,
    o = (e) => (i = e),
    s = e?.createHref ?? ((e) => e),
    c =
      e?.parseLocation ??
      (() =>
        rn(
          `${t.location.pathname}${t.location.search}${t.location.hash}`,
          t.history.state,
        ));
  if (!t.history.state?.__TSR_key && !t.history.state?.key) {
    let e = an();
    t.history.replaceState({ [Xt]: 0, key: e, __TSR_key: e }, ``);
  }
  let l = c(),
    u,
    d = !1,
    f = !1,
    p = !1,
    m = !1,
    h = () => l,
    g,
    _,
    v = () => {
      g &&
        ((S._ignoreSubscribers = !0),
        (g.isPush ? t.history.pushState : t.history.replaceState)(
          g.state,
          ``,
          g.href,
        ),
        (S._ignoreSubscribers = !1),
        (g = void 0),
        (_ = void 0),
        (u = void 0));
    },
    y = (e, t, n) => {
      let r = s(t);
      (_ || (u = l),
        (l = rn(t, n)),
        (g = { href: r, state: n, isPush: g?.isPush || e === `push` }),
        (_ ||= Promise.resolve().then(() => v())));
    },
    b = (e) => {
      ((l = c()), S.notify({ type: e }));
    },
    x = async () => {
      if (f) {
        f = !1;
        return;
      }
      let e = c(),
        n = e.state[Xt] - l.state[Xt],
        r = n === 1,
        i = n === -1,
        o = (!r && !i) || d;
      d = !1;
      let s = o ? `GO` : i ? `BACK` : `FORWARD`,
        u = o ? { type: `GO`, index: n } : { type: i ? `BACK` : `FORWARD` };
      if (p) p = !1;
      else {
        let n = a();
        if (typeof document < `u` && n.length) {
          for (let r of n)
            if (
              await r.blockerFn({
                currentLocation: l,
                nextLocation: e,
                action: s,
              })
            ) {
              ((f = !0), t.history.go(1), S.notify(u));
              return;
            }
        }
      }
      ((l = c()), S.notify(u));
    },
    ee = (e) => {
      if (m) {
        m = !1;
        return;
      }
      let t = !1,
        n = a();
      if (typeof document < `u` && n.length)
        for (let e of n) {
          let n = e.enableBeforeUnload ?? !0;
          if (n === !0) {
            t = !0;
            break;
          }
          if (typeof n == `function` && n() === !0) {
            t = !0;
            break;
          }
        }
      if (t) return (e.preventDefault(), (e.returnValue = ``));
    },
    S = $t({
      getLocation: h,
      getLength: () => t.history.length,
      pushState: (e, t) => y(`push`, e, t),
      replaceState: (e, t) => y(`replace`, e, t),
      back: (e) => (e && (p = !0), (m = !0), t.history.back()),
      forward: (e) => {
        (e && (p = !0), (m = !0), t.history.forward());
      },
      go: (e) => {
        ((d = !0), t.history.go(e));
      },
      createHref: (e) => s(e),
      flush: v,
      destroy: () => {
        ((t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(Qt, ee, { capture: !0 }),
          t.removeEventListener(Zt, x));
      },
      onBlocked: () => {
        u && l !== u && (l = u);
      },
      getBlockers: a,
      setBlockers: o,
      notifyOnIndexChange: !1,
    });
  return (
    t.addEventListener(Qt, ee, { capture: !0 }),
    t.addEventListener(Zt, x),
    (t.history.pushState = function (...e) {
      let r = n.apply(t.history, e);
      return (S._ignoreSubscribers || b(`PUSH`), r);
    }),
    (t.history.replaceState = function (...e) {
      let n = r.apply(t.history, e);
      return (S._ignoreSubscribers || b(`REPLACE`), n);
    }),
    S
  );
}
function nn(e) {
  let t = e.replace(/[\x00-\x1f\x7f]/g, ``);
  return (t.startsWith(`//`) && (t = `/` + t.replace(/^\/+/, ``)), t);
}
function rn(e, t) {
  let n = nn(e),
    r = n.indexOf(`#`),
    i = n.indexOf(`?`),
    a = an();
  return {
    href: n,
    pathname: n.substring(
      0,
      r > 0 ? (i > 0 ? Math.min(r, i) : r) : i > 0 ? i : n.length,
    ),
    hash: r > -1 ? n.substring(r) : ``,
    search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : ``,
    state: t || { [Xt]: 0, key: a, __TSR_key: a },
  };
}
function an() {
  return (Math.random() + 1).toString(36).substring(7);
}
function on(e) {
  return e instanceof Error
    ? { name: e.name, message: e.message }
    : { data: e };
}
function sn(e, t) {
  let n = t,
    r = e;
  return {
    fromLocation: n,
    toLocation: r,
    pathChanged: n?.pathname !== r.pathname,
    hrefChanged: n?.href !== r.href,
    hashChanged: n?.hash !== r.hash,
  };
}
var cn = new WeakMap(),
  ln = class {
    constructor(e, t) {
      ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this._scroll = { next: !0 }),
        (this.shouldViewTransition = void 0),
        (this.isViewTransitionTypesSupported = void 0),
        (this.subscribers = new Set()),
        (this.routeBranchCache = new WeakMap()),
        (this.lightweightCache = new WeakMap()),
        (this.startTransition = (e) => e()),
        (this.update = (e) => {
          let t = this.options,
            n = this.basepath ?? t?.basepath ?? `/`,
            r = this.basepath === void 0,
            i = t?.rewrite;
          if (
            ((this.options = { ...t, ...e }),
            (this.isServer = this.options.isServer ?? typeof document > `u`),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = at(
                this.options.pathParamsAllowedCharacters,
              )),
            (!this.history ||
              (this.options.history &&
                this.options.history !== this.history)) &&
              (this.options.history
                ? (this.history = this.options.history)
                : (this.history = tn())),
            (this.origin = this.options.origin),
            this.origin ||
              (window?.origin && window.origin !== `null`
                ? (this.origin = window.origin)
                : (this.origin = `http://localhost`)),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let e;
            ((this.resolvePathCache = Ee(1e3)),
              (e = this.buildRouteTree()),
              this.setRoutes(e));
          }
          if (!this.stores && this.latestLocation) {
            let e = this.getStoreConfig(this);
            ((this.batch = e.batch),
              (this.stores = qt(fn(this.latestLocation), e)),
              Mn(this));
          }
          let a = !1,
            o = this.options.basepath ?? `/`,
            s = this.options.rewrite;
          if (r || n !== o || i !== s) {
            this.basepath = o;
            let e = [],
              t = tt(o);
            (t && t !== `/` && e.push(Wt({ basepath: o })),
              s && e.push(s),
              (this.rewrite =
                e.length === 0 ? void 0 : e.length === 1 ? e[0] : Ut(e)),
              this.history && this.updateLatestLocation(),
              (a = !0));
          }
          (a && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < `u` &&
              `CSS` in window &&
              typeof window.CSS?.supports == `function` &&
              (this.isViewTransitionTypesSupported = window.CSS.supports(
                `selector(:active-view-transition-type(a))`,
              )));
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(
            this.history.location,
            this.latestLocation,
          );
        }),
        (this.buildRouteTree = () => {
          let e = Ve(this.routeTree, this.options.caseSensitive, (e, t) => {
            e.init({ originalIndex: t });
          });
          return (
            this.options.routeMasks &&
              Ie(this.options.routeMasks, e.processedTree),
            e
          );
        }),
        (this.subscribe = (e, t) => {
          let n = { eventType: e, fn: t };
          return (
            this.subscribers.add(n),
            () => {
              this.subscribers.delete(n);
            }
          );
        }),
        (this.emit = (e) => {
          this.subscribers.forEach((t) => {
            t.eventType === e.type && t.fn(e);
          });
        }),
        (this.parseLocation = (e, t) => {
          let n = ({ pathname: e, search: n, hash: r, href: i, state: a }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
                let i = this.options.parseSearch(n),
                  o = this.options.stringifySearch(i);
                return {
                  href: e + o + r,
                  publicHref: e + o + r,
                  pathname: Se(e).path,
                  external: !1,
                  searchStr: o,
                  search: ce(t?.search, i),
                  hash: Se(r.slice(1)).path,
                  state: le(t?.state, a),
                };
              }
              let o = new URL(i, this.origin),
                s = Gt(this.rewrite, o),
                c = this.options.parseSearch(s.search),
                l = this.options.stringifySearch(c);
              return (
                (s.search = l),
                {
                  href: s.href.replace(s.origin, ``),
                  publicHref: i,
                  pathname: Se(s.pathname).path,
                  external: !!this.rewrite && s.origin !== this.origin,
                  searchStr: l,
                  search: ce(t?.search, c),
                  hash: Se(s.hash.slice(1)).path,
                  state: le(t?.state, a),
                }
              );
            },
            r = n(e),
            { __tempLocation: i, __tempKey: a } = r.state;
          if (i && (!a || a === this.tempLocationKey)) {
            let e = n(i);
            return (
              (e.state.key = r.state.key),
              (e.state.__TSR_key = r.state.__TSR_key),
              delete e.state.__tempLocation,
              { ...e, maskedLocation: r }
            );
          }
          return r;
        }),
        (this.resolvePathWithBase = (e, t) =>
          it({
            base: e,
            to: t.includes(`//`) ? Qe(t) : t,
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (e, t, n) =>
          typeof e == `string`
            ? this.matchRoutesInternal({ pathname: e, search: t }, n)
            : this.matchRoutesInternal(e, t)),
        (this.getMatchedRoutes = (e) =>
          mn({
            pathname: e,
            routesById: this.routesById,
            processedTree: this.processedTree,
          })),
        (this.cancelMatch = (e) => {
          let t = this.getMatch(e);
          t &&
            (t.abortController.abort(),
            clearTimeout(t._nonReactive.pendingTimeout),
            (t._nonReactive.pendingTimeout = void 0));
        }),
        (this.cancelMatches = () => {
          (this.stores.pendingIds.get().forEach((e) => {
            this.cancelMatch(e);
          }),
            this.stores.matchesId.get().forEach((e) => {
              if (this.stores.pendingMatchStores.has(e)) return;
              let t = this.stores.matchStores.get(e)?.get();
              t &&
                (t.status === `pending` || t.isFetching === `loader`) &&
                this.cancelMatch(e);
            }));
        }),
        (this.buildLocation = (e) => {
          let t = (t = {}) => {
              let n =
                  t._fromLocation ||
                  this.pendingBuiltLocation ||
                  this.latestLocation,
                r = this.matchRoutesLightweight(n);
              t.from;
              let i =
                  t.unsafeRelative === `path`
                    ? n.pathname
                    : (t.from ?? r.fullPath),
                a = t.to ? `${t.to}` : void 0,
                o = r.search,
                s = Object.assign(Object.create(null), r.params),
                c =
                  a?.charCodeAt(0) === 47
                    ? `/`
                    : this.resolvePathWithBase(i, `.`),
                l = a ? this.resolvePathWithBase(c, a) : c,
                u =
                  t.params === !1 || t.params === null
                    ? Object.create(null)
                    : (t.params ?? !0) === !0
                      ? s
                      : Object.assign(s, re(t.params, s)),
                d = this.routesByPath[et(l)],
                f;
              if (d) f = this.getRouteBranch(d);
              else if (l.includes(`$`)) f = [];
              else {
                let e = this.getMatchedRoutes(l);
                ((f = e.matchedRoutes),
                  this.options.notFoundRoute &&
                    (!e.foundRoute ||
                      (e.foundRoute.path !== `/` && e.routeParams[`**`])) &&
                    (f = [...f, this.options.notFoundRoute]));
              }
              if (f.length && oe(u))
                for (let e of f) {
                  let t =
                    e.options.params?.stringify ?? e.options.stringifyParams;
                  if (t)
                    try {
                      Object.assign(u, t(u));
                    } catch {}
                }
              let p = e.leaveParams
                  ? l
                  : Se(
                      st({
                        path: l,
                        params: u,
                        decoder: this.pathParamsDecoder,
                        server: this.isServer,
                      }).interpolatedPath,
                    ).path,
                m = o;
              if (e._includeValidateSearch && this.options.search?.strict) {
                let e = {};
                (f.forEach((t) => {
                  if (t.options.validateSearch)
                    try {
                      Object.assign(
                        e,
                        pn(t.options.validateSearch, { ...e, ...m }),
                      );
                    } catch {}
                }),
                  (m = e));
              }
              ((m = hn({
                search: m,
                dest: t,
                destRoutes: f,
                _includeValidateSearch: e._includeValidateSearch,
              })),
                (m = ce(o, m)));
              let h = this.options.stringifySearch(m),
                g =
                  t.hash === !0 ? n.hash : t.hash ? re(t.hash, n.hash) : void 0,
                _ = g ? `#${g}` : ``,
                v =
                  t.state === !0
                    ? n.state
                    : t.state
                      ? re(t.state, n.state)
                      : {};
              v = le(n.state, v);
              let y = `${p}${h}${_}`,
                b,
                x,
                ee = !1;
              if (this.rewrite) {
                let e = new URL(y, this.origin),
                  t = Kt(this.rewrite, e);
                ((b = e.href.replace(e.origin, ``)),
                  t.origin === this.origin
                    ? (x = t.pathname + t.search + t.hash)
                    : ((x = t.href), (ee = !0)));
              } else ((b = Ce(y)), (x = b));
              return {
                publicHref: x,
                href: b,
                pathname: p,
                search: m,
                searchStr: h,
                state: v,
                hash: g ?? ``,
                external: ee,
                unmaskOnReload: t.unmaskOnReload,
              };
            },
            n = (n = {}, r) => {
              let i = t(n),
                a = r ? t(r) : void 0;
              if (!a) {
                let n = Object.create(null);
                if (this.options.routeMasks) {
                  let o = Le(i.pathname, this.processedTree);
                  if (o) {
                    Object.assign(n, o.rawParams);
                    let { from: i, params: s, ...c } = o.route,
                      l =
                        s === !1 || s === null
                          ? Object.create(null)
                          : (s ?? !0) === !0
                            ? n
                            : Object.assign(n, re(s, n));
                    ((r = { from: e.from, ...c, params: l }), (a = t(r)));
                  }
                }
              }
              return (a && (i.maskedLocation = a), i);
            };
          return e.mask ? n(e, { from: e.from, ...e.mask }) : n(e);
        }),
        (this.commitLocation = async ({
          viewTransition: e,
          ignoreBlocker: t,
          ...n
        }) => {
          let r,
            i = () => {
              let e = [
                `key`,
                `__TSR_key`,
                `__TSR_index`,
                `__hashScrollIntoViewOptions`,
              ];
              e.forEach((e) => {
                n.state[e] = this.latestLocation.state[e];
              });
              let t = fe(n.state, this.latestLocation.state);
              return (
                e.forEach((e) => {
                  delete n.state[e];
                }),
                t
              );
            },
            a = et(this.latestLocation.href) === et(n.href),
            o = this.commitLocationPromise;
          if (
            ((this.commitLocationPromise = pe(() => {
              (o?.resolve(), (o = void 0));
            })),
            a && i())
          )
            this.load();
          else {
            let { maskedLocation: i, hashScrollIntoView: a, ...o } = n;
            (i &&
              ((o = {
                ...i,
                state: {
                  ...i.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...o,
                    search: o.searchStr,
                    state: {
                      ...o.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (o.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (o.state.__tempKey = this.tempLocationKey)),
              (o.state.__hashScrollIntoViewOptions =
                a ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = e),
              (r = n.replace ? `REPLACE` : `PUSH`),
              this.history[r === `REPLACE` ? `replace` : `push`](
                o.publicHref,
                o.state,
                { ignoreBlocker: t },
              ));
          }
          return (
            (this._scroll.next = n.resetScroll ?? !0),
            this.history.subscribers.size ||
              this.load(r ? { action: { type: r } } : void 0),
            this.commitLocationPromise
          );
        }),
        (this.buildAndCommitLocation = ({
          replace: e,
          resetScroll: t,
          hashScrollIntoView: n,
          viewTransition: r,
          ignoreBlocker: i,
          href: a,
          ...o
        } = {}) => {
          if (a) {
            let t = this.history.location.state.__TSR_index,
              n = rn(a, { __TSR_index: e ? t : t + 1 }),
              r = new URL(n.pathname, this.origin);
            ((o.to = Gt(this.rewrite, r).pathname),
              (o.search = this.options.parseSearch(n.search)),
              (o.hash = n.hash.slice(1)));
          }
          let s = this.buildLocation({ ...o, _includeValidateSearch: !0 });
          this.pendingBuiltLocation = s;
          let c = this.commitLocation({
            ...s,
            viewTransition: r,
            replace: e,
            resetScroll: t,
            hashScrollIntoView: n,
            ignoreBlocker: i,
          });
          return (
            queueMicrotask(() => {
              this.pendingBuiltLocation === s &&
                (this.pendingBuiltLocation = void 0);
            }),
            c
          );
        }),
        (this.navigate = async ({
          to: e,
          reloadDocument: t,
          href: n,
          publicHref: r,
          ...i
        }) => {
          let a = !1;
          if (n)
            try {
              (new URL(`${n}`), (a = !0));
            } catch {}
          if ((a && !t && (t = !0), t)) {
            if (e !== void 0 || !n) {
              let t = this.buildLocation({ to: e, ...i });
              ((n ??= t.publicHref), (r ??= t.publicHref));
            }
            let t = !a && r ? r : n;
            if (ve(t, this.protocolAllowlist)) return;
            if (!i.ignoreBlocker) {
              let e = this.history.getBlockers?.() ?? [];
              for (let t of e)
                if (
                  t?.blockerFn &&
                  (await t.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: `PUSH`,
                  }))
                )
                  return;
            }
            i.replace ? window.location.replace(t) : (window.location.href = t);
            return;
          }
          return this.buildAndCommitLocation({
            ...i,
            href: n,
            to: e,
            _isNavigate: !0,
          });
        }),
        (this.beforeLoad = () => {
          (this.cancelMatches(), this.updateLatestLocation());
          let e = this.matchRoutes(this.latestLocation),
            t = this.stores.cachedMatches
              .get()
              .filter((t) => !e.some((e) => e.id === t.id));
          this.batch(() => {
            (this.stores.status.set(`pending`),
              this.stores.statusCode.set(200),
              this.stores.isLoading.set(!0),
              this.stores.location.set(this.latestLocation),
              this.stores.setPending(e),
              this.stores.setCached(t));
          });
        }),
        (this.load = async (e) => {
          let t = e?.action?.type,
            n,
            r,
            i,
            a =
              this.stores.resolvedLocation.get() ?? this.stores.location.get();
          for (
            i = new Promise((o) => {
              this.startTransition(async () => {
                try {
                  (this.beforeLoad(),
                    t
                      ? cn.set(this.latestLocation, t)
                      : cn.delete(this.latestLocation));
                  let n = this.latestLocation,
                    r = sn(n, this.stores.resolvedLocation.get());
                  (this.stores.redirect.get() ||
                    this.emit({ type: `onBeforeNavigate`, ...r }),
                    this.emit({ type: `onBeforeLoad`, ...r }),
                    await Rt({
                      router: this,
                      sync: e?.sync,
                      forceStaleReload: a.href === n.href,
                      matches: this.stores.pendingMatches.get(),
                      location: n,
                      updateMatch: this.updateMatch,
                      onReady: async () => {
                        this.startTransition(() => {
                          this.startViewTransition(async () => {
                            let e = null,
                              t = null,
                              n = null,
                              r = null;
                            this.batch(() => {
                              let i = this.stores.pendingMatches.get(),
                                a = i.length,
                                o = this.stores.matches.get();
                              e = a
                                ? o.filter(
                                    (e) =>
                                      !this.stores.pendingMatchStores.has(e.id),
                                  )
                                : null;
                              let s = new Set();
                              for (let e of this.stores.pendingMatchStores.values())
                                e.routeId && s.add(e.routeId);
                              let c = new Set();
                              for (let e of this.stores.matchStores.values())
                                e.routeId && c.add(e.routeId);
                              ((t = a
                                ? o.filter((e) => !s.has(e.routeId))
                                : null),
                                (n = a
                                  ? i.filter((e) => !c.has(e.routeId))
                                  : null),
                                (r = a ? i.filter((e) => c.has(e.routeId)) : o),
                                this.stores.isLoading.set(!1),
                                this.stores.loadedAt.set(Date.now()),
                                a &&
                                  (this.stores.setMatches(i),
                                  this.stores.setPending([]),
                                  this.stores.setCached([
                                    ...this.stores.cachedMatches.get(),
                                    ...e.filter(
                                      (e) =>
                                        e.status !== `error` &&
                                        e.status !== `notFound` &&
                                        e.status !== `redirected`,
                                    ),
                                  ]),
                                  this.clearExpiredCache()));
                            });
                            for (let [e, i] of [
                              [t, `onLeave`],
                              [n, `onEnter`],
                              [r, `onStay`],
                            ])
                              if (e)
                                for (let t of e)
                                  this.looseRoutesById[t.routeId].options[i]?.(
                                    t,
                                  );
                          });
                        });
                      },
                    }));
                } catch (e) {
                  yt(e)
                    ? ((n = e),
                      this.navigate({
                        ...n.options,
                        replace: !0,
                        ignoreBlocker: !0,
                      }))
                    : lt(e) && (r = e);
                  let t = n
                    ? n.status
                    : r
                      ? 404
                      : this.stores.matches
                            .get()
                            .some((e) => e.status === `error`)
                        ? 500
                        : 200;
                  this.batch(() => {
                    (this.stores.statusCode.set(t),
                      this.stores.redirect.set(n));
                  });
                }
                (this.latestLoadPromise === i &&
                  (this.commitLocationPromise?.resolve(),
                  (this.latestLoadPromise = void 0),
                  (this.commitLocationPromise = void 0)),
                  o());
              });
            }),
              this.latestLoadPromise = i,
              await i;
            this.latestLoadPromise && i !== this.latestLoadPromise;
          )
            await this.latestLoadPromise;
          let o;
          (this.hasNotFoundMatch()
            ? (o = 404)
            : this.stores.matches.get().some((e) => e.status === `error`) &&
              (o = 500),
            o !== void 0 && this.stores.statusCode.set(o));
        }),
        (this.startViewTransition = (e) => {
          let t =
            this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            t &&
              typeof document < `u` &&
              `startViewTransition` in document &&
              typeof document.startViewTransition == `function`)
          ) {
            let n;
            if (typeof t == `object` && this.isViewTransitionTypesSupported) {
              let r = this.latestLocation,
                i = this.stores.resolvedLocation.get(),
                a = typeof t.types == `function` ? t.types(sn(r, i)) : t.types;
              if (a === !1) {
                e();
                return;
              }
              n = { update: e, types: a };
            } else n = e;
            document.startViewTransition(n);
          } else e();
        }),
        (this.updateMatch = (e, t) => {
          this.startTransition(() => {
            let n = this.stores.pendingMatchStores.get(e);
            if (n) {
              n.set(t);
              return;
            }
            let r = this.stores.matchStores.get(e);
            if (r) {
              r.set(t);
              return;
            }
            let i = this.stores.cachedMatchStores.get(e);
            if (i) {
              let n = t(i.get());
              n.status === `redirected`
                ? this.stores.cachedMatchStores.delete(e) &&
                  this.stores.cachedIds.set((t) => t.filter((t) => t !== e))
                : i.set(n);
            }
          });
        }),
        (this.getMatch = (e) =>
          this.stores.cachedMatchStores.get(e)?.get() ??
          this.stores.pendingMatchStores.get(e)?.get() ??
          this.stores.matchStores.get(e)?.get()),
        (this.invalidate = (e) => {
          let t = (t) =>
            (e?.filter?.(t) ?? !0)
              ? {
                  ...t,
                  invalid: !0,
                  ...(e?.forcePending ||
                  t.status === `error` ||
                  t.status === `notFound`
                    ? { status: `pending`, error: void 0 }
                    : void 0),
                }
              : t;
          return (
            this.batch(() => {
              (this.stores.setMatches(this.stores.matches.get().map(t)),
                this.stores.setCached(this.stores.cachedMatches.get().map(t)),
                this.stores.setPending(
                  this.stores.pendingMatches.get().map(t),
                ));
            }),
            (this.shouldViewTransition = !1),
            this.load({ sync: e?.sync })
          );
        }),
        (this.getParsedLocationHref = (e) => e.publicHref || `/`),
        (this.resolveRedirect = (e) => {
          let t = e.headers.get(`Location`);
          if (!e.options.href || e.options._builtLocation) {
            let t = e.options._builtLocation ?? this.buildLocation(e.options),
              n = this.getParsedLocationHref(t);
            ((e.options.href = n), e.headers.set(`Location`, n));
          } else if (t)
            try {
              let n = new URL(t);
              if (this.origin && n.origin === this.origin) {
                let t = n.pathname + n.search + n.hash;
                ((e.options.href = t), e.headers.set(`Location`, t));
              }
            } catch {}
          if (
            e.options.href &&
            !e.options._builtLocation &&
            ve(e.options.href, this.protocolAllowlist)
          )
            throw Error(`Redirect blocked: unsafe protocol`);
          return (
            e.headers.get(`Location`) ||
              e.headers.set(`Location`, e.options.href),
            e
          );
        }),
        (this.clearCache = (e) => {
          let t = e?.filter;
          t === void 0
            ? this.stores.setCached([])
            : this.stores.setCached(
                this.stores.cachedMatches.get().filter((e) => !t(e)),
              );
        }),
        (this.clearExpiredCache = () => {
          let e = Date.now();
          this.clearCache({
            filter: (t) => {
              let n = this.looseRoutesById[t.routeId];
              if (!n.options.loader) return !0;
              let r =
                (t.preload
                  ? (n.options.preloadGcTime ??
                    this.options.defaultPreloadGcTime)
                  : (n.options.gcTime ?? this.options.defaultGcTime)) ??
                300 * 1e3;
              return t.status === `error` || e - t.updatedAt >= r;
            },
          });
        }),
        (this.loadRouteChunk = Bt),
        (this.preloadRoute = async (e) => {
          let t = e._builtLocation ?? this.buildLocation(e),
            n = this.matchRoutes(t, { throwOnError: !0, preload: !0, dest: e }),
            r = new Set([
              ...this.stores.matchesId.get(),
              ...this.stores.pendingIds.get(),
            ]),
            i = new Set([...r, ...this.stores.cachedIds.get()]),
            a = n.filter((e) => !i.has(e.id));
          if (a.length) {
            let e = this.stores.cachedMatches.get();
            this.stores.setCached([...e, ...a]);
          }
          try {
            return (
              (n = await Rt({
                router: this,
                matches: n,
                location: t,
                preload: !0,
                updateMatch: (e, t) => {
                  r.has(e)
                    ? (n = n.map((n) => (n.id === e ? t(n) : n)))
                    : this.updateMatch(e, t);
                },
              })),
              n
            );
          } catch (e) {
            if (yt(e))
              return e.options.reloadDocument
                ? void 0
                : await this.preloadRoute({ ...e.options, _fromLocation: t });
            lt(e) || console.error(e);
            return;
          }
        }),
        (this.matchRoute = (e, t) => {
          let n = {
              ...e,
              to: e.to ? this.resolvePathWithBase(e.from || ``, e.to) : void 0,
              params: e.params || {},
              leaveParams: !0,
            },
            r = this.buildLocation(n);
          if (t?.pending && this.stores.status.get() !== `pending`) return !1;
          let i = (
              t?.pending === void 0 ? !this.stores.isLoading.get() : t.pending
            )
              ? this.latestLocation
              : this.stores.resolvedLocation.get() ||
                this.stores.location.get(),
            a = Re(
              r.pathname,
              t?.caseSensitive ?? !1,
              t?.fuzzy ?? !1,
              i.pathname,
              this.processedTree,
            );
          return !a || (e.params && !fe(a.rawParams, e.params, { partial: !0 }))
            ? !1
            : (t?.includeSearch ?? !0)
              ? fe(i.search, r.search, { partial: !0 })
                ? a.rawParams
                : !1
              : a.rawParams;
        }),
        (this.hasNotFoundMatch = () =>
          this.stores.matches
            .get()
            .some((e) => e.status === `notFound` || e.globalNotFound)),
        (this.getStoreConfig = t),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...e,
          caseSensitive: e.caseSensitive ?? !1,
          notFoundMode: e.notFoundMode ?? `fuzzy`,
          stringifySearch: e.stringifySearch ?? mt,
          parseSearch: e.parseSearch ?? pt,
          protocolAllowlist: e.protocolAllowlist ?? _e,
        }),
        typeof document < `u` && (self.__TSR_ROUTER__ = this));
    }
    isShell() {
      return !!this.options.isShell;
    }
    isPrerendering() {
      return !!this.options.isPrerendering;
    }
    get state() {
      return this.stores.__store.get();
    }
    setRoutes({ routesById: e, routesByPath: t, processedTree: n }) {
      ((this.routesById = e),
        (this.routesByPath = t),
        (this.processedTree = n));
      let r = this.options.notFoundRoute;
      r &&
        (r.init({ originalIndex: 99999999999 }), (this.routesById[r.id] = r));
    }
    getRouteBranch(e) {
      let t = this.routeBranchCache.get(e);
      return (t || ((t = We(e)), this.routeBranchCache.set(e, t)), t);
    }
    get looseRoutesById() {
      return this.routesById;
    }
    getParentContext(e) {
      return e?.id
        ? (e.context ?? this.options.context ?? void 0)
        : (this.options.context ?? void 0);
    }
    matchRoutesInternal(e, t) {
      let n = this.getMatchedRoutes(e.pathname),
        { foundRoute: r, routeParams: i } = n,
        { matchedRoutes: a } = n,
        o = !1;
      (r ? r.path !== `/` && i[`**`] : et(e.pathname)) &&
        (this.options.notFoundRoute
          ? (a = [...a, this.options.notFoundRoute])
          : (o = !0));
      let s = o ? _n(this.options.notFoundMode, a) : void 0,
        c = Array(a.length),
        l = new Map();
      for (let e of this.stores.matchStores.values())
        e.routeId && l.set(e.routeId, e.get());
      for (let n = 0; n < a.length; n++) {
        let r = a[n],
          o = c[n - 1],
          u,
          d,
          f;
        {
          let n = o?.search ?? e.search,
            i = o?._strictSearch ?? void 0;
          try {
            let e = pn(r.options.validateSearch, { ...n }) ?? void 0;
            ((u = { ...n, ...e }), (d = { ...i, ...e }), (f = void 0));
          } catch (e) {
            let r = e;
            if (
              (e instanceof un || (r = new un(e.message, { cause: e })),
              t?.throwOnError)
            )
              throw r;
            ((u = n), (d = {}), (f = r));
          }
        }
        let p = r.options.loaderDeps?.({ search: u }) ?? ``,
          m = p ? JSON.stringify(p) : ``,
          { interpolatedPath: h, usedParams: g } = st({
            path: r.fullPath,
            params: i,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          _ = r.id + h + m,
          v = this.getMatch(_),
          y = l.get(r.id),
          b = v?._strictParams ?? g,
          x;
        if (!v)
          try {
            vn(r, b);
          } catch (e) {
            if (
              ((x = lt(e) || yt(e) ? e : new dn(e.message, { cause: e })),
              t?.throwOnError)
            )
              throw x;
          }
        Object.assign(i, b);
        let ee = y ? `stay` : `enter`,
          S;
        if (v)
          S = {
            ...v,
            cause: ee,
            params: y?.params ?? i,
            _strictParams: b,
            search: ce(y ? y.search : v.search, u),
            _strictSearch: d,
          };
        else {
          let e =
            r.options.loader || r.options.beforeLoad || r.lazyFn || Vt(r)
              ? `pending`
              : `success`;
          S = {
            id: _,
            ssr: r.options.ssr,
            index: n,
            routeId: r.id,
            params: y?.params ?? i,
            _strictParams: b,
            pathname: h,
            updatedAt: Date.now(),
            search: y ? ce(y.search, u) : u,
            _strictSearch: d,
            searchError: void 0,
            status: e,
            isFetching: !1,
            error: void 0,
            paramsError: x,
            __routeContext: void 0,
            _nonReactive: { loadPromise: pe() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: ee,
            loaderDeps: y ? le(y.loaderDeps, p) : p,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: r.options.staticData || {},
            fullPath: r.fullPath,
          };
        }
        (t?.preload || (S.globalNotFound = s === r.id), (S.searchError = f));
        let C = this.getParentContext(o);
        ((S.context = { ...C, ...S.__routeContext, ...S.__beforeLoadContext }),
          (c[n] = S));
      }
      for (let t = 0; t < c.length; t++) {
        let n = c[t],
          r = this.looseRoutesById[n.routeId],
          a = this.getMatch(n.id),
          o = l.get(n.routeId);
        if (((n.params = o ? ce(o.params, i) : i), !a)) {
          let i = c[t - 1],
            a = this.getParentContext(i);
          if (r.options.context) {
            let t = {
              deps: n.loaderDeps,
              params: n.params,
              context: a ?? {},
              location: e,
              navigate: (t) => this.navigate({ ...t, _fromLocation: e }),
              buildLocation: this.buildLocation,
              cause: n.cause,
              abortController: n.abortController,
              preload: !!n.preload,
              matches: c,
              routeId: r.id,
            };
            n.__routeContext = r.options.context(t) ?? void 0;
          }
          n.context = { ...a, ...n.__routeContext, ...n.__beforeLoadContext };
        }
      }
      return c;
    }
    matchRoutesLightweight(e) {
      let t = te(this.stores.matchesId.get()),
        n = this.lightweightCache.get(e);
      if (n && n[0] === t) return n[1];
      let { matchedRoutes: r, routeParams: i } = this.getMatchedRoutes(
          e.pathname,
        ),
        a = te(r),
        o = { ...e.search };
      for (let e of r)
        try {
          Object.assign(o, pn(e.options.validateSearch, o));
        } catch {}
      let s = t && this.stores.matchStores.get(t)?.get(),
        c = s && s.routeId === a.id && s.pathname === e.pathname,
        l;
      if (c) l = s.params;
      else {
        let e = Object.assign(Object.create(null), i);
        for (let t of r)
          try {
            vn(t, e);
          } catch {}
        l = e;
      }
      let u = { matchedRoutes: r, fullPath: a.fullPath, search: o, params: l };
      return (this.lightweightCache.set(e, [t, u]), u);
    }
  },
  un = class extends Error {},
  dn = class extends Error {};
function fn(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: `idle`,
    resolvedLocation: void 0,
    location: e,
    matches: [],
    statusCode: 200,
  };
}
function pn(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = e[`~standard`].validate(t);
    if (n instanceof Promise) throw new un(`Async validation not supported`);
    if (n.issues)
      throw new un(JSON.stringify(n.issues, void 0, 2), { cause: n });
    return n.value;
  }
  return `parse` in e ? e.parse(t) : typeof e == `function` ? e(t) : {};
}
function mn({ pathname: e, routesById: t, processedTree: n }) {
  let r = Object.create(null),
    i = et(e),
    a,
    o = ze(i, n, !0);
  return (
    o && ((a = o.route), Object.assign(r, o.rawParams)),
    { matchedRoutes: o?.branch || [t.__root__], routeParams: r, foundRoute: a }
  );
}
function hn({ search: e, dest: t, destRoutes: n, _includeValidateSearch: r }) {
  return gn(n)(e, t, r ?? !1);
}
function gn(e) {
  let t,
    n,
    r = [];
  for (let t of e) {
    let e = t.options;
    `search` in e
      ? e.search?.middlewares && r.push(...e.search.middlewares)
      : (e.preSearchFilters || e.postSearchFilters) &&
        r.push(({ search: t, next: n }) => {
          let r = n(
            e.preSearchFilters
              ? e.preSearchFilters.reduce((e, t) => t(e), t)
              : t,
          );
          return e.postSearchFilters
            ? e.postSearchFilters.reduce((e, t) => t(e), r)
            : r;
        });
    let i = e.validateSearch;
    i &&
      r.push(({ search: e, next: t, meta: r }) => {
        let a = t(e);
        if (n)
          try {
            let e = pn(i, a);
            if (r && e)
              for (let t in e)
                t in a || (r.defaulted ||= new Map()).set(t, e[t]);
            return { ...a, ...e };
          } catch {}
        return a;
      });
  }
  let i = (e, n, a) => {
    if (e >= r.length) {
      if (!t.search) return {};
      if (t.search === !0) return n;
      let e = re(t.search, n);
      return (a && (a.explicit = e), e);
    }
    return r[e]({
      search: n,
      next: (t, n) => {
        if (n) {
          let n = a || {};
          return { search: i(e + 1, t, n), meta: n };
        }
        return i(e + 1, t, a);
      },
      meta: a,
    });
  };
  return function (e, r, a) {
    return ((t = r), (n = a), i(0, e));
  };
}
function _n(e, t) {
  if (e !== `root`)
    for (let e = t.length - 1; e >= 0; e--) {
      let n = t[e];
      if (n.children) return n.id;
    }
  return _t;
}
function vn(e, t) {
  let n = e.options.params?.parse ?? e.options.parseParams;
  if (n) {
    let e = n(t);
    if (e === !1)
      throw Error(`Route params.parse returned false for a matched route`);
    Object.assign(t, e);
  }
}
function yn() {
  try {
    return sessionStorage;
  } catch {
    return;
  }
}
var bn = `tsr-scroll-restoration-v1_3`,
  xn = yn();
function Sn() {
  try {
    return JSON.parse(xn?.getItem(`tsr-scroll-restoration-v1_3`) || `{}`);
  } catch {
    return {};
  }
}
function Cn() {
  try {
    xn?.setItem(bn, JSON.stringify(wn));
  } catch {}
}
var wn = Sn(),
  Tn = `data-scroll-restoration-id`,
  En = (e) => e.state.__TSR_key || e.href;
function Dn(e) {
  let t = e.getAttribute(Tn);
  if (t) return `[${Tn}="${t}"]`;
  let n = ``,
    r = e,
    i;
  for (; (i = r.parentNode);) {
    let e = 1,
      t = r;
    for (; (t = t.previousElementSibling);) e++;
    let a = `${r.localName}:nth-child(${e})`;
    ((n = n ? `${a} > ${n}` : a), (r = i));
  }
  return n;
}
var On = !1,
  kn = `window`;
function An(e) {
  try {
    return typeof e == `function` ? e() : document.querySelector(e);
  } catch {}
}
function jn(e) {
  let t = [];
  for (let n of e) {
    if (n === kn) continue;
    let e = An(n);
    e && t.push(e);
  }
  return t;
}
function Mn(e, t) {
  let n = t ?? e.options.scrollRestoration,
    r = e._scroll;
  n && (r.restoring = !0);
  let i = e.options.getScrollRestorationKey || En,
    a = new Map(),
    o = (e, t, n) => {
      let r = a.get(e) || {};
      ((r.scrollX = t), (r.scrollY = n), a.set(e, r));
    },
    s = (e) => {
      if (!(On || !r.restoring))
        if (e.target === document) o(kn, scrollX, scrollY);
        else {
          let t = e.target;
          o(t, t.scrollLeft, t.scrollTop);
        }
    },
    c = (e) => {
      if (!r.restoring) return;
      let t = (wn[e] ||= {});
      for (let [e, n] of a)
        e === kn ? (t[kn] = n) : e.isConnected && (t[Dn(e)] = n);
    };
  (n &&
    !r.restoration &&
    ((r.restoration = !0),
    (On = !1),
    (history.scrollRestoration = `manual`),
    document.addEventListener(`scroll`, s, !0),
    e.subscribe(`onBeforeLoad`, (e) => {
      (e.fromLocation && c(i(e.fromLocation)), a.clear());
    }),
    addEventListener(`pagehide`, () => {
      (c(i(e.stores.resolvedLocation.get() ?? e.stores.location.get())), Cn());
    })),
    !r.reset &&
      ((r.reset = !0),
      e.subscribe(`onRendered`, (t) => {
        let n = e.options.scrollRestorationBehavior,
          o = e.options.scrollToTopSelectors,
          s = r.next,
          c;
        if (
          (a.clear(),
          s || (r.next = !0),
          typeof e.options.scrollRestoration == `function` &&
            !e.options.scrollRestoration({ location: e.latestLocation }))
        )
          return;
        let l = i(t.toLocation),
          u = t.fromLocation && i(t.fromLocation);
        if (r.restoring && u && u !== l) {
          let e = wn[u];
          if (e) {
            let t = wn[l];
            for (let n in e) {
              if (n === kn) {
                if (s) continue;
              } else {
                let e = An(n);
                if (!e || (s && o && ((c ??= jn(o)), c.includes(e)))) continue;
              }
              ((t ||= wn[l] = {}), (t[n] ??= e[n]));
            }
          }
        }
        On = !0;
        try {
          let e = t.toLocation.hash,
            i = t.toLocation.state.__hashScrollIntoViewOptions ?? !0,
            a = !1;
          if (s) {
            let s = cn.get(t.toLocation),
              u = e && i && (s === `PUSH` || s === `REPLACE`),
              d = r.restoring ? wn[l] : void 0;
            if (d)
              for (let e in d) {
                let { scrollX: t, scrollY: r } = d[e];
                if (e === kn) {
                  if (u) continue;
                  (scrollTo({ top: r, left: t, behavior: n }), (a = !0));
                } else {
                  let n = An(e);
                  n && ((n.scrollLeft = t), (n.scrollTop = r));
                }
              }
            if (!a && !e) {
              let e = { top: 0, left: 0, behavior: n };
              if ((scrollTo(e), o)) {
                c ??= jn(o);
                for (let t of c) t.scrollTo(e);
              }
            }
          }
          !a && e && i && document.getElementById(e)?.scrollIntoView(i);
        } finally {
          On = !1;
        }
      })));
}
var Nn = Symbol.for(`TSR_DEFERRED_PROMISE`);
function Pn(e, t) {
  let n = e;
  return n[Nn]
    ? n
    : ((n[Nn] = { status: `pending` }),
      n
        .then((e) => {
          ((n[Nn].status = `success`), (n[Nn].data = e));
        })
        .catch((e) => {
          ((n[Nn].status = `error`),
            (n[Nn].error = {
              data: (t?.serializeError ?? on)(e),
              __isServerError: !0,
            }));
        }),
      n);
}
var Fn = `Error preloading route! ☝️`;
function In(e, t) {
  if (e) return typeof e == `string` ? e : e[t];
}
function Ln(e) {
  return e?.scriptFormat ?? `module`;
}
function Rn(e, t, n) {
  let r = zn(t),
    i = In(n, `script`) ?? r.crossOrigin;
  return {
    ...(Ln(e) === `iife`
      ? { rel: `preload`, as: `script` }
      : { rel: `modulepreload` }),
    href: r.href,
    ...(i ? { crossOrigin: i } : {}),
  };
}
function zn(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
function Bn(e, t) {
  if (t.length === 0) return;
  if (t.length === 1) {
    e.push(t[0]);
    return;
  }
  let n = new Set();
  for (let r of t) {
    let t = JSON.stringify(r);
    n.has(t) || (n.add(t), e.push(r));
  }
}
function Vn(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
var Hn = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (e) => {
          this.originalIndex = e.originalIndex;
          let t = this.options,
            n = !t?.path && !t?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            n ? (this._path = _t) : this.parentRoute || Te());
          let r = n ? _t : t?.path;
          r && r !== `/` && (r = $e(r));
          let i = t?.id || r,
            a = n
              ? _t
              : Ze([
                  this.parentRoute.id === `__root__` ? `` : this.parentRoute.id,
                  i,
                ]);
          (r === `__root__` && (r = `/`),
            a !== `__root__` && (a = Ze([`/`, a])));
          let o = a === `__root__` ? `/` : Ze([this.parentRoute.fullPath, r]);
          ((this._path = r),
            (this._id = a),
            (this._fullPath = o),
            (this._to = et(o)));
        }),
        (this.addChildren = (e) => this._addFileChildren(e)),
        (this._addFileChildren = (e) => (
          Array.isArray(e) && (this.children = e),
          typeof e == `object` && e && (this.children = Object.values(e)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (e) => (Object.assign(this.options, e), this)),
        (this.update = (e) => (Object.assign(this.options, e), this)),
        (this.lazy = (e) => ((this.lazyFn = e), this)),
        (this.redirect = (e) => vt({ from: this.fullPath, ...e })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw Error(`Route cannot have both an 'id' and a 'path' option.`);
    }
  },
  Un = class extends Hn {
    constructor(e) {
      super(e);
    }
  },
  Wn = ((e) => (
    (e[(e.AggregateError = 1)] = `AggregateError`),
    (e[(e.ArrowFunction = 2)] = `ArrowFunction`),
    (e[(e.ErrorPrototypeStack = 4)] = `ErrorPrototypeStack`),
    (e[(e.ObjectAssign = 8)] = `ObjectAssign`),
    (e[(e.BigIntTypedArray = 16)] = `BigIntTypedArray`),
    (e[(e.RegExp = 32)] = `RegExp`),
    e
  ))(Wn || {}),
  Gn = Symbol.asyncIterator,
  Kn = Symbol.hasInstance,
  qn = Symbol.isConcatSpreadable,
  Jn = Symbol.iterator,
  Yn = Symbol.match,
  Xn = Symbol.matchAll,
  Zn = Symbol.replace,
  Qn = Symbol.search,
  $n = Symbol.species,
  er = Symbol.split,
  tr = Symbol.toPrimitive,
  nr = Symbol.toStringTag,
  rr = Symbol.unscopables,
  ir = {
    [Gn]: 0,
    [Kn]: 1,
    [qn]: 2,
    [Jn]: 3,
    [Yn]: 4,
    [Xn]: 5,
    [Zn]: 6,
    [Qn]: 7,
    [$n]: 8,
    [er]: 9,
    [tr]: 10,
    [nr]: 11,
    [rr]: 12,
  },
  ar = {
    0: Gn,
    1: Kn,
    2: qn,
    3: Jn,
    4: Yn,
    5: Xn,
    6: Zn,
    7: Qn,
    8: $n,
    9: er,
    10: tr,
    11: nr,
    12: rr,
  },
  k = void 0,
  or = { 2: !0, 3: !1, 1: k, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN },
  sr = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`,
  },
  cr = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function A(e, t, n, r, i, a, o, s, c, l, u, d) {
  return {
    t: e,
    i: t,
    s: n,
    c: r,
    m: i,
    p: a,
    e: o,
    a: s,
    f: c,
    b: l,
    o: u,
    l: d,
  };
}
function lr(e) {
  return A(2, k, e, k, k, k, k, k, k, k, k, k);
}
var ur = lr(2),
  dr = lr(3),
  fr = lr(1),
  pr = lr(0),
  mr = lr(4),
  hr = lr(5),
  gr = lr(6),
  _r = lr(7);
function vr(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `\b`:
      return `\\b`;
    case `	`:
      return `\\t`;
    case `\f`:
      return `\\f`;
    case `<`:
      return `\\x3C`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return k;
  }
}
function yr(e) {
  let t = ``,
    n = 0,
    r;
  for (let i = 0, a = e.length; i < a; i++)
    ((r = vr(e[i])), r && ((t += e.slice(n, i) + r), (n = i + 1)));
  return (n === 0 ? (t = e) : (t += e.slice(n)), t);
}
function br(e) {
  switch (e) {
    case `\\\\`:
      return `\\`;
    case `\\"`:
      return `"`;
    case `\\n`:
      return `
`;
    case `\\r`:
      return `\r`;
    case `\\b`:
      return `\b`;
    case `\\t`:
      return `	`;
    case `\\f`:
      return `\f`;
    case `\\x3C`:
      return `<`;
    case `\\u2028`:
      return `\u2028`;
    case `\\u2029`:
      return `\u2029`;
    default:
      return e;
  }
}
function xr(e) {
  return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, br);
}
var Sr = `__SEROVAL_REFS__`,
  Cr = new Map(),
  wr = new Map();
function Tr(e) {
  return Cr.has(e);
}
function Er(e) {
  return wr.has(e);
}
function Dr(e) {
  if (Tr(e)) return Cr.get(e);
  throw new hi(e);
}
function Or(e) {
  if (Er(e)) return wr.get(e);
  throw new gi(e);
}
typeof globalThis < `u`
  ? Object.defineProperty(globalThis, Sr, {
      value: wr,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < `u`
    ? Object.defineProperty(window, Sr, {
        value: wr,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < `u`
      ? Object.defineProperty(self, Sr, {
          value: wr,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < `u` &&
        Object.defineProperty(global, Sr, {
          value: wr,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function kr(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0;
}
function Ar(e) {
  let t = sr[kr(e)];
  return e.name === t
    ? e.constructor.name === t
      ? {}
      : { name: e.constructor.name }
    : { name: e.name };
}
function jr(e, t) {
  let n = Ar(e),
    r = Object.getOwnPropertyNames(e);
  for (let i = 0, a = r.length, o; i < a; i++)
    ((o = r[i]),
      o !== `name` &&
        o !== `message` &&
        (o === `stack`
          ? t & 4 && ((n ||= {}), (n[o] = e[o]))
          : ((n ||= {}), (n[o] = e[o]))));
  return n;
}
function Mr(e) {
  return Object.isFrozen(e)
    ? 3
    : Object.isSealed(e)
      ? 2
      : +!Object.isExtensible(e);
}
function Nr(e) {
  switch (e) {
    case 1 / 0:
      return hr;
    case -1 / 0:
      return gr;
  }
  return e === e
    ? Object.is(e, -0)
      ? mr
      : A(0, k, e, k, k, k, k, k, k, k, k, k)
    : _r;
}
function Pr(e) {
  return A(1, k, yr(e), k, k, k, k, k, k, k, k, k);
}
function Fr(e) {
  return A(3, k, `` + e, k, k, k, k, k, k, k, k, k);
}
function Ir(e) {
  return A(4, e, k, k, k, k, k, k, k, k, k, k);
}
function Lr(e, t) {
  let n = t.valueOf();
  return A(5, e, n === n ? t.toISOString() : ``, k, k, k, k, k, k, k, k, k);
}
function Rr(e, t) {
  return A(6, e, k, yr(t.source), t.flags, k, k, k, k, k, k, k);
}
function zr(e, t) {
  return A(17, e, ir[t], k, k, k, k, k, k, k, k, k);
}
function Br(e, t) {
  return A(18, e, yr(Dr(t)), k, k, k, k, k, k, k, k, k);
}
function Vr(e, t, n) {
  return A(25, e, n, yr(t), k, k, k, k, k, k, k, k);
}
function Hr(e, t, n) {
  return A(9, e, k, k, k, k, k, n, k, k, Mr(t), k);
}
function Ur(e, t) {
  return A(21, e, k, k, k, k, k, k, t, k, k, k);
}
function Wr(e, t, n) {
  return A(
    15,
    e,
    k,
    t.constructor.name,
    k,
    k,
    k,
    k,
    n,
    t.byteOffset,
    k,
    t.length,
  );
}
function Gr(e, t, n) {
  return A(
    16,
    e,
    k,
    t.constructor.name,
    k,
    k,
    k,
    k,
    n,
    t.byteOffset,
    k,
    t.length,
  );
}
function Kr(e, t, n) {
  return A(20, e, k, k, k, k, k, k, n, t.byteOffset, k, t.byteLength);
}
function qr(e, t, n) {
  return A(13, e, kr(t), k, yr(t.message), n, k, k, k, k, k, k);
}
function Jr(e, t, n) {
  return A(14, e, kr(t), k, yr(t.message), n, k, k, k, k, k, k);
}
function Yr(e, t) {
  return A(7, e, k, k, k, k, k, t, k, k, k, k);
}
function Xr(e, t) {
  return A(28, k, k, k, k, k, k, [e, t], k, k, k, k);
}
function Zr(e, t) {
  return A(30, k, k, k, k, k, k, [e, t], k, k, k, k);
}
function Qr(e, t, n) {
  return A(31, e, k, k, k, k, k, n, t, k, k, k);
}
function $r(e, t) {
  return A(32, e, k, k, k, k, k, k, t, k, k, k);
}
function ei(e, t) {
  return A(33, e, k, k, k, k, k, k, t, k, k, k);
}
function ti(e, t) {
  return A(34, e, k, k, k, k, k, k, t, k, k, k);
}
function ni(e, t, n, r) {
  return A(35, e, n, k, k, k, k, t, k, k, k, r);
}
var { toString: ri } = Object.prototype,
  ii = { parsing: 1, serialization: 2, deserialization: 3 };
function ai(e) {
  return `Seroval Error (step: ${ii[e]})`;
}
var oi = (e, t) => ai(e),
  si = class extends Error {
    constructor(e, t) {
      (super(oi(e, t)), (this.cause = t));
    }
  },
  ci = class extends si {
    constructor(e) {
      super(`parsing`, e);
    }
  },
  li = class extends si {
    constructor(e) {
      super(`deserialization`, e);
    }
  };
function ui(e) {
  return `Seroval Error (specific: ${e})`;
}
var di = class extends Error {
    constructor(e) {
      (super(ui(1)), (this.value = e));
    }
  },
  fi = class extends Error {
    constructor(e) {
      super(ui(2));
    }
  },
  pi = class extends Error {
    constructor(e) {
      super(ui(3));
    }
  },
  mi = class extends Error {
    constructor(e) {
      super(ui(4));
    }
  },
  hi = class extends Error {
    constructor(e) {
      (super(ui(5)), (this.value = e));
    }
  },
  gi = class extends Error {
    constructor(e) {
      super(ui(6));
    }
  },
  _i = class extends Error {
    constructor(e) {
      super(ui(7));
    }
  },
  vi = class extends Error {
    constructor(e) {
      super(ui(8));
    }
  },
  yi = class extends Error {
    constructor(e) {
      super(ui(9));
    }
  },
  bi = class {
    constructor(e, t) {
      ((this.value = e), (this.replacement = t));
    }
  },
  xi = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, n) => {
        ((e.s = t), (e.f = n));
      })),
      e
    );
  };
(xi.toString(),
  ((e, t) => {
    (e.s(t), (e.p.s = 1), (e.p.v = t));
  }).toString(),
  ((e, t) => {
    (e.f(t), (e.p.s = 2), (e.p.v = t));
  }).toString());
var Si = () => {
  let e = [],
    t = [],
    n = !0,
    r = !1,
    i = 0,
    a = (e, n, r) => {
      for (r = 0; r < i; r++) t[r] && t[r][n](e);
    },
    o = (t, i, a, o) => {
      for (i = 0, a = e.length; i < a; i++)
        ((o = e[i]),
          !n && i === a - 1 ? t[r ? `return` : `throw`](o) : t.next(o));
    },
    s = (e, r) => (
      n && ((r = i++), (t[r] = e)),
      o(e),
      () => {
        n && ((t[r] = t[i]), (t[i--] = void 0));
      }
    );
  return {
    __SEROVAL_STREAM__: !0,
    on: (e) => s(e),
    next: (t) => {
      n && (e.push(t), a(t, `next`));
    },
    throw: (i) => {
      n && (e.push(i), a(i, `throw`), (n = !1), (r = !1), (t.length = 0));
    },
    return: (i) => {
      n && (e.push(i), a(i, `return`), (n = !1), (r = !0), (t.length = 0));
    },
  };
};
Si.toString();
var Ci = (e) => (t) => () => {
  let n = 0,
    r = {
      [e]: () => r,
      next: () => {
        if (n > t.d) return { done: !0, value: void 0 };
        let e = n++,
          r = t.v[e];
        if (e === t.t) throw r;
        return { done: e === t.d, value: r };
      },
    };
  return r;
};
Ci.toString();
var wi = (e, t) => (n) => () => {
  let r = 0,
    i = -1,
    a = !1,
    o = [],
    s = [],
    c = (e = 0, t = s.length) => {
      for (; e < t; e++) s[e].s({ done: !0, value: void 0 });
    };
  n.on({
    next: (e) => {
      let t = s.shift();
      (t && t.s({ done: !1, value: e }), o.push(e));
    },
    throw: (e) => {
      let t = s.shift();
      (t && t.f(e), c(), (i = o.length), (a = !0), o.push(e));
    },
    return: (e) => {
      let t = s.shift();
      (t && t.s({ done: !0, value: e }), c(), (i = o.length), o.push(e));
    },
  });
  let l = {
    [e]: () => l,
    next: () => {
      if (i === -1) {
        let e = r++;
        if (e >= o.length) {
          let e = t();
          return (s.push(e), e.p);
        }
        return { done: !1, value: o[e] };
      }
      if (r > i) return { done: !0, value: void 0 };
      let e = r++,
        n = o[e];
      if (e !== i) return { done: !1, value: n };
      if (a) throw n;
      return { done: !0, value: n };
    },
  };
  return l;
};
wi.toString();
var Ti = (e) => {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
};
Ti.toString();
function Ei(e) {
  return `__SEROVAL_SEQUENCE__` in e;
}
function Di(e, t, n) {
  return { __SEROVAL_SEQUENCE__: !0, v: e, t, d: n };
}
function Oi(e) {
  let t = [],
    n = -1,
    r = -1,
    i = e[Jn]();
  for (;;)
    try {
      let e = i.next();
      if ((t.push(e.value), e.done)) {
        r = t.length - 1;
        break;
      }
    } catch (e) {
      ((n = t.length), t.push(e));
    }
  return Di(t, n, r);
}
var ki = Ci(Jn);
function Ai(e) {
  return ki(e);
}
var ji = {},
  Mi = {},
  Ni = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function Pi(e) {
  return `__SEROVAL_STREAM__` in e;
}
function Fi() {
  return Si();
}
function Ii(e) {
  let t = Fi(),
    n = e[Gn]();
  async function r() {
    try {
      let e = await n.next();
      e.done ? t.return(e.value) : (t.next(e.value), await r());
    } catch (e) {
      t.throw(e);
    }
  }
  return (r().catch(() => {}), t);
}
var Li = wi(Gn, xi);
function Ri(e) {
  return Li(e);
}
async function zi(e) {
  try {
    return [1, await e];
  } catch (e) {
    return [0, e];
  }
}
function Bi(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 63 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
  };
}
function Vi(e, t) {
  e.marked.add(t);
}
function Hi(e, t) {
  let n = e.refs.size;
  return (e.refs.set(t, n), n);
}
function j(e, t) {
  let n = e.refs.get(t);
  return n == null
    ? { type: 0, value: Hi(e, t) }
    : (Vi(e, n), { type: 1, value: Ir(n) });
}
function M(e, t) {
  let n = j(e, t);
  return n.type === 1 ? n : Tr(t) ? { type: 2, value: Br(n.value, t) } : n;
}
function Ui(e, t) {
  let n = M(e, t);
  if (n.type !== 0) return n.value;
  if (t in ir) return zr(n.value, t);
  throw new di(t);
}
function Wi(e, t) {
  let n = j(e, Ni[t]);
  return n.type === 1 ? n.value : A(26, n.value, t, k, k, k, k, k, k, k, k, k);
}
function Gi(e) {
  let t = j(e, ji);
  return t.type === 1
    ? t.value
    : A(27, t.value, k, k, k, k, k, k, Ui(e, Jn), k, k, k);
}
function Ki(e) {
  let t = j(e, Mi);
  return t.type === 1
    ? t.value
    : A(29, t.value, k, k, k, k, k, [Wi(e, 1), Ui(e, Gn)], k, k, k, k);
}
function qi(e, t, n, r) {
  return A(n ? 11 : 10, e, k, k, k, r, k, k, k, k, Mr(t), k);
}
function Ji(e, t, n, r) {
  return A(8, t, k, k, k, k, { k: n, v: r }, k, Wi(e, 0), k, k, k);
}
function Yi(e, t, n) {
  let r = new Uint8Array(n),
    i = ``;
  for (let e = 0, t = r.length; e < t; e++) i += String.fromCharCode(r[e]);
  return A(19, t, yr(btoa(i)), k, k, k, k, k, Wi(e, 5), k, k, k);
}
function Xi(e, t) {
  return { base: Bi(e, t), child: void 0 };
}
var Zi = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  parse(e) {
    return N(this._p, this.depth, e);
  }
};
async function Qi(e, t, n) {
  let r = [];
  for (let i = 0, a = n.length; i < a; i++)
    i in n ? (r[i] = await N(e, t, n[i])) : (r[i] = 0);
  return r;
}
async function $i(e, t, n, r) {
  return Hr(n, r, await Qi(e, t, r));
}
async function ea(e, t, n) {
  let r = Object.entries(n),
    i = [],
    a = [];
  for (let n = 0, o = r.length; n < o; n++)
    (i.push(yr(r[n][0])), a.push(await N(e, t, r[n][1])));
  return (
    Jn in n &&
      (i.push(Ui(e.base, Jn)), a.push(Xr(Gi(e.base), await N(e, t, Oi(n))))),
    Gn in n &&
      (i.push(Ui(e.base, Gn)), a.push(Zr(Ki(e.base), await N(e, t, Ii(n))))),
    nr in n && (i.push(Ui(e.base, nr)), a.push(Pr(n[nr]))),
    qn in n && (i.push(Ui(e.base, qn)), a.push(n[qn] ? ur : dr)),
    { k: i, v: a }
  );
}
async function ta(e, t, n, r, i) {
  return qi(n, r, i, await ea(e, t, r));
}
async function na(e, t, n, r) {
  return Ur(n, await N(e, t, r.valueOf()));
}
async function ra(e, t, n, r) {
  return Wr(n, r, await N(e, t, r.buffer));
}
async function ia(e, t, n, r) {
  return Gr(n, r, await N(e, t, r.buffer));
}
async function aa(e, t, n, r) {
  return Kr(n, r, await N(e, t, r.buffer));
}
async function oa(e, t, n, r) {
  let i = jr(r, e.base.features);
  return qr(n, r, i ? await ea(e, t, i) : k);
}
async function sa(e, t, n, r) {
  let i = jr(r, e.base.features);
  return Jr(n, r, i ? await ea(e, t, i) : k);
}
async function ca(e, t, n, r) {
  let i = [],
    a = [];
  for (let [n, o] of r.entries())
    (i.push(await N(e, t, n)), a.push(await N(e, t, o)));
  return Ji(e.base, n, i, a);
}
async function la(e, t, n, r) {
  let i = [];
  for (let n of r.keys()) i.push(await N(e, t, n));
  return Yr(n, i);
}
async function ua(e, t, n, r) {
  let i = e.base.plugins;
  if (i)
    for (let a = 0, o = i.length; a < o; a++) {
      let o = i[a];
      if (o.parse.async && o.test(r))
        return Vr(n, o.tag, await o.parse.async(r, new Zi(e, t), { id: n }));
    }
  return k;
}
async function da(e, t, n, r) {
  let [i, a] = await zi(r);
  return A(12, n, i, k, k, k, k, k, await N(e, t, a), k, k, k);
}
function fa(e, t, n, r, i) {
  let a = [],
    o = n.on({
      next: (n) => {
        (Vi(this.base, t),
          N(this, e, n).then(
            (e) => {
              a.push($r(t, e));
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      throw: (n) => {
        (Vi(this.base, t),
          N(this, e, n).then(
            (e) => {
              (a.push(ei(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      return: (n) => {
        (Vi(this.base, t),
          N(this, e, n).then(
            (e) => {
              (a.push(ti(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
    });
}
async function pa(e, t, n, r) {
  return Qr(n, Wi(e.base, 4), await new Promise(fa.bind(e, t, n, r)));
}
async function ma(e, t, n, r) {
  let i = [];
  for (let n = 0, a = r.v.length; n < a; n++) i[n] = await N(e, t, r.v[n]);
  return ni(n, i, r.t, r.d);
}
async function ha(e, t, n, r) {
  if (Array.isArray(r)) return $i(e, t, n, r);
  if (Pi(r)) return pa(e, t, n, r);
  if (Ei(r)) return ma(e, t, n, r);
  let i = r.constructor;
  if (i === bi) return N(e, t, r.replacement);
  let a = await ua(e, t, n, r);
  if (a) return a;
  switch (i) {
    case Object:
      return ta(e, t, n, r, !1);
    case k:
      return ta(e, t, n, r, !0);
    case Date:
      return Lr(n, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return oa(e, t, n, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return na(e, t, n, r);
    case ArrayBuffer:
      return Yi(e.base, n, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return ra(e, t, n, r);
    case DataView:
      return aa(e, t, n, r);
    case Map:
      return ca(e, t, n, r);
    case Set:
      return la(e, t, n, r);
    default:
      break;
  }
  if (i === Promise || r instanceof Promise) return da(e, t, n, r);
  let o = e.base.features;
  if (o & 32 && i === RegExp) return Rr(n, r);
  if (o & 16)
    switch (i) {
      case BigInt64Array:
      case BigUint64Array:
        return ia(e, t, n, r);
      default:
        break;
    }
  if (
    o & 1 &&
    typeof AggregateError < `u` &&
    (i === AggregateError || r instanceof AggregateError)
  )
    return sa(e, t, n, r);
  if (r instanceof Error) return oa(e, t, n, r);
  if (Jn in r || Gn in r) return ta(e, t, n, r, !!i);
  throw new di(r);
}
async function ga(e, t, n) {
  let r = M(e.base, n);
  if (r.type !== 0) return r.value;
  let i = await ua(e, t, r.value, n);
  if (i) return i;
  throw new di(n);
}
async function N(e, t, n) {
  switch (typeof n) {
    case `boolean`:
      return n ? ur : dr;
    case `undefined`:
      return fr;
    case `string`:
      return Pr(n);
    case `number`:
      return Nr(n);
    case `bigint`:
      return Fr(n);
    case `object`:
      if (n) {
        let r = M(e.base, n);
        return r.type === 0 ? await ha(e, t + 1, r.value, n) : r.value;
      }
      return pr;
    case `symbol`:
      return Ui(e.base, n);
    case `function`:
      return ga(e, t, n);
    default:
      throw new di(n);
  }
}
async function _a(e, t) {
  try {
    return await N(e, 0, t);
  } catch (e) {
    throw e instanceof ci ? e : new ci(e);
  }
}
var va = ((e) => (
  (e[(e.Vanilla = 1)] = `Vanilla`),
  (e[(e.Cross = 2)] = `Cross`),
  e
))(va || {});
function ya(e) {
  return e;
}
function ba(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && ba(e, r.extends));
  }
}
function xa(e) {
  if (e) {
    let t = new Set();
    return (ba(t, e), [...t]);
  }
}
function Sa(e) {
  switch (e) {
    case `Int8Array`:
      return Int8Array;
    case `Int16Array`:
      return Int16Array;
    case `Int32Array`:
      return Int32Array;
    case `Uint8Array`:
      return Uint8Array;
    case `Uint16Array`:
      return Uint16Array;
    case `Uint32Array`:
      return Uint32Array;
    case `Uint8ClampedArray`:
      return Uint8ClampedArray;
    case `Float32Array`:
      return Float32Array;
    case `Float64Array`:
      return Float64Array;
    case `BigInt64Array`:
      return BigInt64Array;
    case `BigUint64Array`:
      return BigUint64Array;
    default:
      throw new _i(e);
  }
}
function Ca(e) {
  switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
      return !1;
    default:
      return !0;
  }
}
function wa(e) {
  switch (e) {
    case Gn:
    case qn:
    case nr:
    case Jn:
      return !0;
    default:
      return !1;
  }
}
var Ta = 1e6,
  Ea = 1e4,
  Da = 2e4;
function Oa(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var ka = 1e3;
function Aa(e, t) {
  let n = t.refs || new Map();
  return (
    `types` in n || Object.assign(n, { types: new Map() }),
    {
      mode: e,
      plugins: t.plugins,
      refs: n,
      features: t.features ?? 63 ^ (t.disabledFeatures || 0),
      depthLimit: t.depthLimit || ka,
    }
  );
}
function ja(e) {
  return { mode: 2, base: Aa(2, e), child: k };
}
var Ma = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  deserialize(e) {
    return F(this._p, this.depth, e);
  }
};
function Na(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t))
    throw new vi({ t: 4, i: t });
  if (e.refs.has(t)) throw Error(`Conflicted ref id: ` + t);
}
function Pa(e, t, n) {
  return (Na(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, n), n);
}
function Fa(e, t, n) {
  return (Na(e.base, t), e.base.refs.set(t, n), n);
}
function P(e, t, n) {
  return e.mode === 1 ? Pa(e, t, n) : Fa(e, t, n);
}
function Ia(e, t, n) {
  if (Object.hasOwn(t, n)) return t[n];
  throw new vi(e);
}
function La(e, t) {
  return P(e, t.i, Or(xr(t.s)));
}
function Ra(e, t, n) {
  let r = n.a,
    i = r.length,
    a = P(e, n.i, Array(i));
  for (let n = 0, o; n < i; n++) ((o = r[n]), o && (a[n] = F(e, t, o)));
  return (Oa(a, n.o), a);
}
function za(e, t, n) {
  Ca(t)
    ? (e[t] = n)
    : Object.defineProperty(e, t, {
        value: n,
        configurable: !0,
        enumerable: !0,
        writable: !0,
      });
}
function Ba(e, t, n, r, i) {
  if (typeof r == `string`) za(n, xr(r), F(e, t, i));
  else {
    let a = F(e, t, r);
    switch (typeof a) {
      case `string`:
        za(n, a, F(e, t, i));
        break;
      case `symbol`:
        wa(a) && (n[a] = F(e, t, i));
        break;
      default:
        throw new vi(r);
    }
  }
}
function Va(e, t, n) {
  e.base.refs.types.set(t, n);
}
function Ha(e, t, n, r) {
  if (e.base.refs.types.get(n) !== r) throw new vi(t);
}
function Ua(e, t, n, r) {
  let i = n.k;
  if (i.length > 0)
    for (let a = 0, o = n.v, s = i.length; a < s; a++) Ba(e, t, r, i[a], o[a]);
  return r;
}
function Wa(e, t, n) {
  let r = P(e, n.i, n.t === 10 ? {} : Object.create(null));
  return (Ua(e, t, n.p, r), Oa(r, n.o), r);
}
function Ga(e, t) {
  return P(e, t.i, new Date(t.s));
}
function Ka(e, t) {
  if (e.base.features & 32) {
    let n = xr(t.c);
    if (n.length > Da) throw new vi(t);
    return P(e, t.i, new RegExp(n, t.m));
  }
  throw new fi(t);
}
function qa(e, t, n) {
  let r = P(e, n.i, new Set());
  for (let i = 0, a = n.a, o = a.length; i < o; i++) r.add(F(e, t, a[i]));
  return r;
}
function Ja(e, t, n) {
  let r = P(e, n.i, new Map());
  for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
    r.set(F(e, t, a[i]), F(e, t, o[i]));
  return r;
}
function Ya(e, t) {
  if (t.s.length > Ta) throw new vi(t);
  return P(e, t.i, Ti(xr(t.s)));
}
function Xa(e, t, n) {
  let r = Sa(n.c),
    i = F(e, t, n.f),
    a = n.b ?? 0;
  if (a < 0 || a > i.byteLength) throw new vi(n);
  return P(e, n.i, new r(i, a, n.l));
}
function Za(e, t, n) {
  let r = F(e, t, n.f),
    i = n.b ?? 0;
  if (i < 0 || i > r.byteLength) throw new vi(n);
  return P(e, n.i, new DataView(r, i, n.l));
}
function Qa(e, t, n, r) {
  if (n.p) {
    let i = Ua(e, t, n.p, {});
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(i));
  }
  return r;
}
function $a(e, t, n) {
  return Qa(e, t, n, P(e, n.i, AggregateError([], xr(n.m))));
}
function eo(e, t, n) {
  let r = Ia(n, cr, n.s);
  return Qa(e, t, n, P(e, n.i, new r(xr(n.m))));
}
function to(e, t, n) {
  let r = xi(),
    i = P(e, n.i, r.p),
    a = F(e, t, n.f);
  return (n.s ? r.s(a) : r.f(a), i);
}
function no(e, t, n) {
  return P(e, n.i, Object(F(e, t, n.f)));
}
function ro(e, t, n) {
  let r = e.base.plugins;
  if (r) {
    let i = xr(n.c);
    for (let a = 0, o = r.length; a < o; a++) {
      let o = r[a];
      if (o.tag === i)
        return P(e, n.i, o.deserialize(n.s, new Ma(e, t), { id: n.i }));
    }
  }
  throw new pi(n.c);
}
function io(e, t) {
  let n = P(e, t.i, P(e, t.s, xi()).p);
  return (Va(e, t.s, 22), n);
}
function ao(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Ha(e, n, n.i, 22), r.s(F(e, t, n.a[1])), k);
  throw new mi(`Promise`);
}
function oo(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Ha(e, n, n.i, 22), r.f(F(e, t, n.a[1])), k);
  throw new mi(`Promise`);
}
function so(e, t, n) {
  return (F(e, t, n.a[0]), Ai(F(e, t, n.a[1])));
}
function co(e, t, n) {
  return (F(e, t, n.a[0]), Ri(F(e, t, n.a[1])));
}
function lo(e, t, n) {
  let r = P(e, n.i, Fi());
  Va(e, n.i, 31);
  let i = n.a,
    a = i.length;
  if (a) for (let n = 0; n < a; n++) F(e, t, i[n]);
  return r;
}
function uo(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Ha(e, n, n.i, 31), r.next(F(e, t, n.f)), k);
  throw new mi(`Stream`);
}
function fo(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Ha(e, n, n.i, 31), r.throw(F(e, t, n.f)), k);
  throw new mi(`Stream`);
}
function po(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Ha(e, n, n.i, 31), r.return(F(e, t, n.f)), k);
  throw new mi(`Stream`);
}
function mo(e, t, n) {
  return (F(e, t, n.f), k);
}
function ho(e, t, n) {
  return (F(e, t, n.a[1]), k);
}
function go(e, t, n) {
  let r = P(e, n.i, Di([], n.s, n.l));
  for (let i = 0, a = n.a.length; i < a; i++) r.v[i] = F(e, t, n.a[i]);
  return r;
}
function F(e, t, n) {
  if (t > e.base.depthLimit) throw new yi(e.base.depthLimit);
  switch (((t += 1), n.t)) {
    case 2:
      return Ia(n, or, n.s);
    case 0:
      return Number(n.s);
    case 1:
      return xr(String(n.s));
    case 3:
      if (String(n.s).length > Ea) throw new vi(n);
      return BigInt(n.s);
    case 4:
      return e.base.refs.get(n.i);
    case 18:
      return La(e, n);
    case 9:
      return Ra(e, t, n);
    case 10:
    case 11:
      return Wa(e, t, n);
    case 5:
      return Ga(e, n);
    case 6:
      return Ka(e, n);
    case 7:
      return qa(e, t, n);
    case 8:
      return Ja(e, t, n);
    case 19:
      return Ya(e, n);
    case 16:
    case 15:
      return Xa(e, t, n);
    case 20:
      return Za(e, t, n);
    case 14:
      return $a(e, t, n);
    case 13:
      return eo(e, t, n);
    case 12:
      return to(e, t, n);
    case 17:
      return Ia(n, ar, n.s);
    case 21:
      return no(e, t, n);
    case 25:
      return ro(e, t, n);
    case 22:
      return io(e, n);
    case 23:
      return ao(e, t, n);
    case 24:
      return oo(e, t, n);
    case 28:
      return so(e, t, n);
    case 30:
      return co(e, t, n);
    case 31:
      return lo(e, t, n);
    case 32:
      return uo(e, t, n);
    case 33:
      return fo(e, t, n);
    case 34:
      return po(e, t, n);
    case 27:
      return mo(e, t, n);
    case 29:
      return ho(e, t, n);
    case 35:
      return go(e, t, n);
    default:
      throw new fi(n);
  }
}
function _o(e, t) {
  try {
    return F(e, 0, t);
  } catch (e) {
    throw new li(e);
  }
}
var vo = (() => T).toString();
/=>/.test(vo);
function I(e, t) {
  return _o(
    ja({
      plugins: xa(t.plugins),
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    }),
    e,
  );
}
async function L(e, t = {}) {
  let n = Xi(1, {
    plugins: xa(t.plugins),
    disabledFeatures: t.disabledFeatures,
  });
  return {
    t: await _a(n, e),
    f: n.base.features,
    m: Array.from(n.base.marked),
  };
}
function yo(e) {
  return e;
}
function bo(e) {
  return ya({
    tag: `$TSR/t/` + e.key,
    test: e.test,
    parse: {
      sync(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
      async async(t, n, r) {
        return { v: await n.parse(e.toSerializable(t)) };
      },
      stream(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
    },
    serialize: void 0,
    deserialize(t, n, r) {
      return e.fromSerializable(n.deserialize(t.v));
    },
  });
}
var xo = class {
    constructor(e, t) {
      ((this.stream = e), (this.hint = t?.hint ?? `binary`));
    }
  },
  So = globalThis.Buffer,
  Co = !!So && typeof So.from == `function`;
function wo(e) {
  if (e.length === 0) return ``;
  if (Co) return So.from(e).toString(`base64`);
  let t = 32768,
    n = [];
  for (let r = 0; r < e.length; r += t) {
    let i = e.subarray(r, r + t);
    n.push(String.fromCharCode.apply(null, i));
  }
  return btoa(n.join(``));
}
function To(e) {
  if (e.length === 0) return new Uint8Array();
  if (Co) {
    let t = So.from(e, `base64`);
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n;
}
var Eo = Object.create(null),
  R = Object.create(null),
  Do = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(To(e));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Oo = new TextEncoder(),
  ko = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              typeof e == `string`
                ? t.enqueue(Oo.encode(e))
                : t.enqueue(To(e.$b64));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Ao = `(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))`,
  jo = `(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})`;
function Mo(e) {
  let t = Fi(),
    n = e.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: r } = await n.read();
          if (e) {
            t.return(void 0);
            break;
          }
          t.next(wo(r));
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
function No(e) {
  let t = Fi(),
    n = e.getReader(),
    r = new TextDecoder(`utf-8`, { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: i } = await n.read();
          if (e) {
            try {
              let e = r.decode();
              e.length > 0 && t.next(e);
            } catch {}
            t.return(void 0);
            break;
          }
          try {
            let e = r.decode(i, { stream: !0 });
            e.length > 0 && t.next(e);
          } catch {
            t.next({ $b64: wo(i) });
          }
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
var Po = ya({
  tag: `tss/RawStream`,
  extends: [
    ya({
      tag: `tss/RawStreamFactory`,
      test(e) {
        return e === Eo;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return Ao;
      },
      deserialize(e, t, n) {
        return Eo;
      },
    }),
    ya({
      tag: `tss/RawStreamFactoryText`,
      test(e) {
        return e === R;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return jo;
      },
      deserialize(e, t, n) {
        return R;
      },
    }),
  ],
  test(e) {
    return e instanceof xo;
  },
  parse: {
    sync(e, t, n) {
      let r = e.hint === `text` ? R : Eo;
      return {
        hint: t.parse(e.hint),
        factory: t.parse(r),
        stream: t.parse(Fi()),
      };
    },
    async async(e, t, n) {
      let r = e.hint === `text` ? R : Eo,
        i = e.hint === `text` ? No(e.stream) : Mo(e.stream);
      return {
        hint: await t.parse(e.hint),
        factory: await t.parse(r),
        stream: await t.parse(i),
      };
    },
    stream(e, t, n) {
      let r = e.hint === `text` ? R : Eo,
        i = e.hint === `text` ? No(e.stream) : Mo(e.stream);
      return { hint: t.parse(e.hint), factory: t.parse(r), stream: t.parse(i) };
    },
  },
  serialize(e, t, n) {
    return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
  },
  deserialize(e, t, n) {
    let r = t.deserialize(e.stream);
    return t.deserialize(e.hint) === `text` ? ko(r) : Do(r);
  },
});
function Fo(e) {
  return ya({
    tag: `tss/RawStream`,
    test: () => !1,
    parse: {},
    serialize() {
      throw Error(
        `RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.`,
      );
    },
    deserialize(t, n, r) {
      return e(
        typeof n?.deserialize == `function`
          ? n.deserialize(t.streamId)
          : t.streamId,
      );
    },
  });
}
var Io = ya({
    tag: `$TSR/Error`,
    test(e) {
      return e instanceof Error;
    },
    parse: {
      sync(e, t) {
        return { message: t.parse(e.message) };
      },
      async async(e, t) {
        return { message: await t.parse(e.message) };
      },
      stream(e, t) {
        return { message: t.parse(e.message) };
      },
    },
    serialize(e, t) {
      return `new Error(` + t.serialize(e.message) + `)`;
    },
    deserialize(e, t) {
      return Error(t.deserialize(e.message));
    },
  }),
  Lo = {},
  Ro = (e) =>
    new ReadableStream({
      start: (t) => {
        e.on({
          next: (e) => {
            try {
              t.enqueue(e);
            } catch {}
          },
          throw: (e) => {
            t.error(e);
          },
          return: () => {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  zo = ya({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
      return e === Lo;
    },
    parse: {
      sync() {
        return Lo;
      },
      async async() {
        return await Promise.resolve(Lo);
      },
      stream() {
        return Lo;
      },
    },
    serialize() {
      return Ro.toString();
    },
    deserialize() {
      return Lo;
    },
  });
async function Bo(e, t) {
  try {
    let n = await t.read();
    n.done
      ? (e.return(n.value), t.releaseLock())
      : (e.next(n.value), await Bo(e, t));
  } catch (t) {
    e.throw(t);
  }
}
function Vo(e) {
  (e.cancel().catch(() => {}), e.releaseLock());
}
function Ho(e) {
  let t = Fi(),
    n = e.getReader(),
    r = Vo.bind(null, n);
  return (Bo(t, n).catch(r), [t, r]);
}
var Uo = [
  Io,
  Po,
  ya({
    tag: `seroval/plugins/web/ReadableStream`,
    extends: [zo],
    test(e) {
      return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream;
    },
    parse: {
      sync(e, t) {
        return { factory: t.parse(Lo), stream: t.parse(Fi()) };
      },
      async async(e, t) {
        return { factory: await t.parse(Lo), stream: await t.parse(Ho(e)[0]) };
      },
      stream(e, t) {
        let [n, r] = Ho(e);
        return (t.addCleanup(r), { factory: t.parse(Lo), stream: t.parse(n) });
      },
    },
    serialize(e, t) {
      return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
    },
    deserialize(e, t) {
      return Ro(t.deserialize(e.stream));
    },
  }),
];
function Wo() {
  return [...(C()?.serializationAdapters?.map(bo) ?? []), ...Uo];
}
var Go = new TextDecoder(),
  Ko = new Uint8Array(),
  qo = 16 * 1024 * 1024,
  Jo = 32 * 1024 * 1024,
  Yo = 1024,
  Xo = 1e5;
function Zo(e) {
  let t = new Map(),
    n = new Map(),
    r = new Set(),
    i = !1,
    a = null,
    o = 0,
    s,
    c = new ReadableStream({
      start(e) {
        s = e;
      },
      cancel() {
        i = !0;
        try {
          a?.cancel();
        } catch {}
        (t.forEach((e) => {
          try {
            e.error(Error(`Framed response cancelled`));
          } catch {}
        }),
          t.clear(),
          n.clear(),
          r.clear());
      },
    });
  function l(e) {
    let i = n.get(e);
    if (i) return i;
    if (r.has(e))
      return new ReadableStream({
        start(e) {
          e.close();
        },
      });
    if (n.size >= Yo)
      throw Error(`Too many raw streams in framed response (max ${Yo})`);
    let a = new ReadableStream({
      start(n) {
        t.set(e, n);
      },
      cancel() {
        (r.add(e), t.delete(e), n.delete(e));
      },
    });
    return (n.set(e, a), a);
  }
  function u(e) {
    return (l(e), t.get(e));
  }
  return (
    (async () => {
      let n = e.getReader();
      a = n;
      let c = [],
        l = 0;
      function d() {
        if (l < 9) return null;
        let e = c[0];
        if (e.length >= 9)
          return {
            type: e[0],
            streamId: ((e[1] << 24) | (e[2] << 16) | (e[3] << 8) | e[4]) >>> 0,
            length: ((e[5] << 24) | (e[6] << 16) | (e[7] << 8) | e[8]) >>> 0,
          };
        let t = new Uint8Array(9),
          n = 0,
          r = 9;
        for (let e = 0; e < c.length && r > 0; e++) {
          let i = c[e],
            a = Math.min(i.length, r);
          (t.set(i.subarray(0, a), n), (n += a), (r -= a));
        }
        return {
          type: t[0],
          streamId: ((t[1] << 24) | (t[2] << 16) | (t[3] << 8) | t[4]) >>> 0,
          length: ((t[5] << 24) | (t[6] << 16) | (t[7] << 8) | t[8]) >>> 0,
        };
      }
      function f(e) {
        if (e === 0) return Ko;
        let t = c[0];
        if (t && t.length >= e) {
          let n = t.subarray(0, e);
          return (
            t.length === e ? c.shift() : (c[0] = t.subarray(e)),
            (l -= e),
            n
          );
        }
        let n = new Uint8Array(e),
          r = 0,
          i = e;
        for (; i > 0 && c.length > 0;) {
          let e = c[0];
          if (!e) break;
          let t = Math.min(e.length, i);
          (n.set(e.subarray(0, t), r),
            (r += t),
            (i -= t),
            t === e.length ? c.shift() : (c[0] = e.subarray(t)));
        }
        return ((l -= e), n);
      }
      try {
        for (;;) {
          let { done: e, value: a } = await n.read();
          if (i || e) break;
          if (a) {
            if (l + a.length > Jo)
              throw Error(`Framed response buffer exceeded ${Jo} bytes`);
            for (c.push(a), l += a.length; ;) {
              let e = d();
              if (!e) break;
              let { type: n, streamId: i, length: a } = e;
              if (n !== b.JSON && n !== b.CHUNK && n !== b.END && n !== b.ERROR)
                throw Error(`Unknown frame type: ${n}`);
              if (n === b.JSON) {
                if (i !== 0)
                  throw Error(`Invalid JSON frame streamId (expected 0)`);
              } else if (i === 0)
                throw Error(`Invalid raw frame streamId (expected non-zero)`);
              if (a > qo)
                throw Error(`Frame payload too large: ${a} bytes (max ${qo})`);
              let c = 9 + a;
              if (l < c) break;
              if (++o > Xo)
                throw Error(`Too many frames in framed response (max ${Xo})`);
              f(9);
              let p = f(a);
              switch (n) {
                case b.JSON:
                  try {
                    s.enqueue(Go.decode(p));
                  } catch {}
                  break;
                case b.CHUNK: {
                  let e = u(i);
                  e && e.enqueue(p);
                  break;
                }
                case b.END: {
                  let e = u(i);
                  if ((r.add(i), e)) {
                    try {
                      e.close();
                    } catch {}
                    t.delete(i);
                  }
                  break;
                }
                case b.ERROR: {
                  let e = u(i);
                  if ((r.add(i), e)) {
                    let n = Go.decode(p);
                    (e.error(Error(n)), t.delete(i));
                  }
                  break;
                }
              }
            }
          }
        }
        if (l !== 0) throw Error(`Incomplete frame at end of framed response`);
        try {
          s.close();
        } catch {}
        (t.forEach((e) => {
          try {
            e.close();
          } catch {}
        }),
          t.clear());
      } catch (e) {
        try {
          s.error(e);
        } catch {}
        (t.forEach((t) => {
          try {
            t.error(e);
          } catch {}
        }),
          t.clear());
      } finally {
        try {
          n.releaseLock();
        } catch {}
        a = null;
      }
    })(),
    { getOrCreateStream: l, jsonChunks: c }
  );
}
var Qo = null;
async function $o(e) {
  e.length > 0 && (await Promise.allSettled(e));
}
var es = Object.prototype.hasOwnProperty;
function ts(e) {
  for (let t in e) if (es.call(e, t)) return !0;
  return !1;
}
async function ns(e, t, n) {
  Qo ||= Wo();
  let r = t[0],
    i = r.fetch ?? n,
    a = r.data instanceof FormData ? `formData` : `payload`,
    o = r.headers ? new Headers(r.headers) : new Headers();
  if (
    (o.set(`x-tsr-serverFn`, `true`),
    a === `payload` &&
      o.set(`accept`, `${y}, application/x-ndjson, application/json`),
    r.method === `GET`)
  ) {
    if (a === `formData`)
      throw Error(`FormData is not supported with GET requests`);
    let t = await rs(r);
    if (t !== void 0) {
      let n = ut({ payload: t });
      e.includes(`?`) ? (e += `&${n}`) : (e += `?${n}`);
    }
  }
  let s;
  if (r.method === `POST`) {
    let e = await as(r);
    (e?.contentType && o.set(`content-type`, e.contentType), (s = e?.body));
  }
  return await os(async () =>
    i(e, { method: r.method, headers: o, signal: r.signal, body: s }),
  );
}
async function rs(e) {
  let t = !1,
    n = {};
  if (
    (e.data !== void 0 && ((t = !0), (n.data = e.data)),
    e.context && ts(e.context) && ((t = !0), (n.context = e.context)),
    t)
  )
    return is(n);
}
async function is(e) {
  return JSON.stringify(await Promise.resolve(L(e, { plugins: Qo })));
}
async function as(e) {
  if (e.data instanceof FormData) {
    let t;
    return (
      e.context && ts(e.context) && (t = await is(e.context)),
      t !== void 0 && e.data.set(_, t),
      { body: e.data }
    );
  }
  let t = await rs(e);
  if (t) return { body: t, contentType: `application/json` };
}
async function os(e) {
  let t;
  try {
    t = await e();
  } catch (e) {
    if (e instanceof Response) t = e;
    else throw (console.log(e), e);
  }
  if (t.headers.get(`x-tss-raw`) === `true`) return t;
  let n = t.headers.get(`content-type`);
  if ((n || Te(), t.headers.get(`x-tss-serialized`))) {
    let e;
    if (n.includes(`application/x-tss-framed`)) {
      if ((S(n), !t.body)) throw Error(`No response body for framed response`);
      let { getOrCreateStream: r, jsonChunks: i } = Zo(t.body),
        a = [Fo(r), ...(Qo || [])],
        o = new Map();
      e = await ss({
        jsonStream: i,
        onMessage: (e) => I(e, { refs: o, plugins: a }),
        onError(e, t) {
          console.error(e, t);
        },
      });
    } else if (n.includes(`application/json`)) {
      let n = await t.json(),
        r = [];
      try {
        e = I(n, { plugins: Qo });
      } finally {
      }
      await $o(r);
    }
    if ((e || Te(), e instanceof Error)) throw e;
    return e;
  }
  if (n.includes(`application/json`)) {
    let e = await t.json(),
      n = bt(e);
    if (n) throw n;
    if (lt(e)) throw e;
    return e;
  }
  if (!t.ok) throw Error(await t.text());
  return t;
}
async function ss({ jsonStream: e, onMessage: t, onError: n }) {
  let r = e.getReader(),
    { value: i, done: a } = await r.read();
  if (a || !i) throw Error(`Stream ended before first object`);
  let o = JSON.parse(i),
    s = !1,
    c = (async () => {
      try {
        for (;;) {
          let { value: e, done: i } = await r.read();
          if (i) break;
          if (e)
            try {
              let n = [];
              try {
                t(JSON.parse(e));
              } finally {
              }
              await $o(n);
            } catch (t) {
              n?.(`Invalid JSON: ${e}`, t);
            }
        }
      } catch (e) {
        s || n?.(`Stream processing error:`, e);
      }
    })(),
    l,
    u = [];
  try {
    l = t(o);
  } catch (e) {
    throw ((s = !0), r.cancel().catch(() => {}), e);
  }
  return (
    await $o(u),
    Promise.resolve(l).catch(() => {
      ((s = !0), r.cancel().catch(() => {}));
    }),
    c.finally(() => {
      try {
        r.releaseLock();
      } catch {}
    }),
    l
  );
}
function cs(e) {
  let t = `/_serverFn/` + e;
  return Object.assign(
    (...e) => {
      let n = C()?.serverFns?.fetch;
      return ns(t, e, n ?? fetch);
    },
    { url: t, serverFnMeta: { id: e }, [v]: !0 },
  );
}
var ls = yo({
  key: `$TSS/serverfn`,
  test: (e) => (typeof e != `function` || !(v in e) ? !1 : !!e[v]),
  toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
  fromSerializable: ({ functionId: e }) => cs(e),
});
function us(e) {
  return e.replaceAll(`\0`, `/`).replaceAll(`�`, `/`);
}
function ds(e, t) {
  ((e.id = t.i),
    (e.__beforeLoadContext = t.b),
    (e.loaderData = t.l),
    (e.status = t.s),
    (e.ssr = t.ssr),
    (e.updatedAt = t.u),
    (e.error = t.e),
    t.g !== void 0 && (e.globalNotFound = t.g));
}
async function fs(e) {
  window.$_TSR || Te();
  let t = e.options.serializationAdapters;
  if (t?.length) {
    let e = new Map();
    (t.forEach((t) => {
      e.set(t.key, t.fromSerializable);
    }),
      (window.$_TSR.t = e),
      window.$_TSR.buffer.forEach((e) => e()));
  }
  ((window.$_TSR.initialized = !0), window.$_TSR.router || Te());
  let n = window.$_TSR.router;
  (n.matches.forEach((e) => {
    e.i = us(e.i);
  }),
    (n.lastMatchId &&= us(n.lastMatchId)));
  let { manifest: r, dehydratedData: i, lastMatchId: a } = n;
  e.ssr = { manifest: r };
  let o = document.querySelector(`meta[property="csp-nonce"]`)?.content;
  ((e.options.ssr = { nonce: o }), await e.options.hydrate?.(i));
  let s = e.matchRoutes(e.stores.location.get()),
    c = Promise.all(
      s.map((t) => e.loadRouteChunk(e.looseRoutesById[t.routeId])),
    );
  function l(t) {
    let n =
      e.looseRoutesById[t.routeId].options.pendingMinMs ??
      e.options.defaultPendingMinMs;
    if (n) {
      let r = pe();
      ((t._nonReactive.minPendingPromise = r),
        (t._forcePending = !0),
        setTimeout(() => {
          (r.resolve(),
            e.updateMatch(
              t.id,
              (e) => (
                (e._nonReactive.minPendingPromise = void 0),
                { ...e, _forcePending: void 0 }
              ),
            ));
        }, n));
    }
  }
  function u(t) {
    let n = e.looseRoutesById[t.routeId];
    n && (n.options.ssr = t.ssr);
  }
  let d;
  (s.forEach((e) => {
    let t = n.matches.find((t) => t.i === e.id);
    if (!t) {
      ((e._nonReactive.dehydrated = !1), (e.ssr = !1), u(e));
      return;
    }
    (ds(e, t),
      u(e),
      (e._nonReactive.dehydrated = e.ssr !== !1),
      (e.ssr === `data-only` || e.ssr === !1) &&
        d === void 0 &&
        ((d = e.index), l(e)));
  }),
    e.stores.setMatches(s));
  let f = e.stores.matches.get(),
    p = e.stores.location.get();
  await Promise.all(
    f.map(async (t) => {
      try {
        let n = e.looseRoutesById[t.routeId],
          r = f[t.index - 1]?.context ?? e.options.context;
        if (n.options.context) {
          let i = {
            deps: t.loaderDeps,
            params: t.params,
            context: r ?? {},
            location: p,
            navigate: (t) => e.navigate({ ...t, _fromLocation: p }),
            buildLocation: e.buildLocation,
            cause: t.cause,
            abortController: t.abortController,
            preload: !1,
            matches: s,
            routeId: n.id,
          };
          t.__routeContext = n.options.context(i) ?? void 0;
        }
        t.context = { ...r, ...t.__routeContext, ...t.__beforeLoadContext };
        let i = {
            ssr: e.options.ssr,
            matches: f,
            match: t,
            params: t.params,
            loaderData: t.loaderData,
          },
          a = await n.options.head?.(i),
          o = await n.options.scripts?.(i);
        ((t.meta = a?.meta),
          (t.links = a?.links),
          (t.headScripts = a?.scripts),
          (t.styles = a?.styles),
          (t.scripts = o));
      } catch (e) {
        if (lt(e))
          ((t.error = { isNotFound: !0 }),
            console.error(
              `NotFound error during hydration for routeId: ${t.routeId}`,
              e,
            ));
        else
          throw (
            (t.error = e),
            console.error(`Error during hydration for route ${t.routeId}:`, e),
            e
          );
      }
    }),
  );
  let m = s[s.length - 1].id !== a;
  if (!s.some((e) => e.ssr === !1) && !m)
    return (
      s.forEach((e) => {
        e._nonReactive.dehydrated = void 0;
      }),
      e.stores.resolvedLocation.set(e.stores.location.get()),
      c
    );
  let h = Promise.resolve()
    .then(() => e.load())
    .catch((e) => {
      console.error(`Error during router hydration:`, e);
    });
  if (m) {
    let t = s[1];
    (t || Te(),
      l(t),
      (t._displayPending = !0),
      (t._nonReactive.displayPendingPromise = h),
      h.then(() => {
        e.batch(() => {
          (e.stores.status.get() === `pending` &&
            (e.stores.status.set(`idle`),
            e.stores.resolvedLocation.set(e.stores.location.get())),
            e.updateMatch(t.id, (e) => ({
              ...e,
              _displayPending: void 0,
              displayPendingPromise: void 0,
            })));
        });
      }));
  }
  return c;
}
var z = c(u(), 1),
  ps = z.use,
  ms = typeof window < `u` ? z.useLayoutEffect : z.useEffect;
function hs(e) {
  let t = z.useRef({ value: e, prev: null }),
    n = t.current.value;
  return (e !== n && (t.current = { value: e, prev: n }), t.current.prev);
}
function gs(e, t, n = {}, r = {}) {
  z.useEffect(() => {
    if (!e.current || r.disabled || typeof IntersectionObserver != `function`)
      return;
    let i = new IntersectionObserver(([e]) => {
      t(e);
    }, n);
    return (
      i.observe(e.current),
      () => {
        i.disconnect();
      }
    );
  }, [t, n, r.disabled, e]);
}
function _s(e) {
  let t = z.useRef(null);
  return (z.useImperativeHandle(e, () => t.current, []), t);
}
var vs = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  ys = o((e, t) => {
    t.exports = vs();
  }),
  B = ys();
function bs({ promise: e }) {
  if (ps) return ps(e);
  let t = Pn(e);
  if (t[Nn].status === `pending`) throw t;
  if (t[Nn].status === `error`) throw t[Nn].error;
  return t[Nn].data;
}
function xs(e) {
  let t = (0, B.jsx)(Ss, { ...e });
  return e.fallback
    ? (0, B.jsx)(z.Suspense, { fallback: e.fallback, children: t })
    : t;
}
function Ss(e) {
  let t = bs(e);
  return e.children(t);
}
function Cs(e) {
  let t = e.errorComponent ?? Ts;
  return (0, B.jsx)(ws, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) =>
      n ? z.createElement(t, { error: n, reset: r }) : e.children,
  });
}
var ws = class extends z.Component {
  constructor(...e) {
    (super(...e), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(e, t) {
    let n = e.getResetKey();
    return t.error && t.resetKey !== n
      ? { resetKey: n, error: null }
      : { resetKey: n };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidCatch(e, t) {
    this.props.onCatch && this.props.onCatch(e, t);
  }
  render() {
    return this.props.children({
      error: this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
};
function Ts({ error: e }) {
  let [t, n] = z.useState(!1);
  return (0, B.jsxs)(`div`, {
    style: { padding: `.5rem`, maxWidth: `100%` },
    children: [
      (0, B.jsxs)(`div`, {
        style: { display: `flex`, alignItems: `center`, gap: `.5rem` },
        children: [
          (0, B.jsx)(`strong`, {
            style: { fontSize: `1rem` },
            children: `Something went wrong!`,
          }),
          (0, B.jsx)(`button`, {
            style: {
              appearance: `none`,
              fontSize: `.6em`,
              border: `1px solid currentColor`,
              padding: `.1rem .2rem`,
              fontWeight: `bold`,
              borderRadius: `.25rem`,
            },
            onClick: () => n((e) => !e),
            children: t ? `Hide Error` : `Show Error`,
          }),
        ],
      }),
      (0, B.jsx)(`div`, { style: { height: `.25rem` } }),
      t
        ? (0, B.jsx)(`div`, {
            children: (0, B.jsx)(`pre`, {
              style: {
                fontSize: `.7em`,
                border: `1px solid red`,
                borderRadius: `.25rem`,
                padding: `.3rem`,
                color: `red`,
                overflow: `auto`,
              },
              children: e.message
                ? (0, B.jsx)(`code`, { children: e.message })
                : null,
            }),
          })
        : null,
    ],
  });
}
function Es({ children: e, fallback: t = null }) {
  return Ds()
    ? (0, B.jsx)(z.Fragment, { children: e })
    : (0, B.jsx)(z.Fragment, { children: t });
}
function Ds() {
  return z.useSyncExternalStore(
    Os,
    () => !0,
    () => !1,
  );
}
function Os() {
  return () => {};
}
var ks = z.createContext(null);
function As(e) {
  return z.useContext(ks);
}
var js = z.createContext(void 0),
  Ms = z.createContext(void 0),
  V = ((e) => (
    (e[(e.None = 0)] = `None`),
    (e[(e.Mutable = 1)] = `Mutable`),
    (e[(e.Watching = 2)] = `Watching`),
    (e[(e.RecursedCheck = 4)] = `RecursedCheck`),
    (e[(e.Recursed = 8)] = `Recursed`),
    (e[(e.Dirty = 16)] = `Dirty`),
    (e[(e.Pending = 32)] = `Pending`),
    e
  ))(V || {});
function Ns({ update: e, notify: t, unwatched: n }) {
  return {
    link: r,
    unlink: i,
    propagate: a,
    checkDirty: o,
    shallowPropagate: s,
  };
  function r(e, t, n) {
    let r = t.depsTail;
    if (r !== void 0 && r.dep === e) return;
    let i = r === void 0 ? t.deps : r.nextDep;
    if (i !== void 0 && i.dep === e) {
      ((i.version = n), (t.depsTail = i));
      return;
    }
    let a = e.subsTail;
    if (a !== void 0 && a.version === n && a.sub === t) return;
    let o =
      (t.depsTail =
      e.subsTail =
        {
          version: n,
          dep: e,
          sub: t,
          prevDep: r,
          nextDep: i,
          prevSub: a,
          nextSub: void 0,
        });
    (i !== void 0 && (i.prevDep = o),
      r === void 0 ? (t.deps = o) : (r.nextDep = o),
      a === void 0 ? (e.subs = o) : (a.nextSub = o));
  }
  function i(e, t = e.sub) {
    let r = e.dep,
      i = e.prevDep,
      a = e.nextDep,
      o = e.nextSub,
      s = e.prevSub;
    return (
      a === void 0 ? (t.depsTail = i) : (a.prevDep = i),
      i === void 0 ? (t.deps = a) : (i.nextDep = a),
      o === void 0 ? (r.subsTail = s) : (o.prevSub = s),
      s === void 0 ? (r.subs = o) === void 0 && n(r) : (s.nextSub = o),
      a
    );
  }
  function a(e) {
    let n = e.nextSub,
      r;
    top: do {
      let i = e.sub,
        a = i.flags;
      if (
        (a & 60
          ? a & 12
            ? a & 4
              ? !(a & 48) && c(e, i)
                ? ((i.flags = a | 40), (a &= 1))
                : (a = 0)
              : (i.flags = (a & -9) | 32)
            : (a = 0)
          : (i.flags = a | 32),
        a & 2 && t(i),
        a & 1)
      ) {
        let t = i.subs;
        if (t !== void 0) {
          let i = (e = t).nextSub;
          i !== void 0 && ((r = { value: n, prev: r }), (n = i));
          continue;
        }
      }
      if ((e = n) !== void 0) {
        n = e.nextSub;
        continue;
      }
      for (; r !== void 0;)
        if (((e = r.value), (r = r.prev), e !== void 0)) {
          n = e.nextSub;
          continue top;
        }
      break;
    } while (!0);
  }
  function o(t, n) {
    let r,
      i = 0,
      a = !1;
    top: do {
      let o = t.dep,
        c = o.flags;
      if (n.flags & 16) a = !0;
      else if ((c & 17) == 17) {
        if (e(o)) {
          let e = o.subs;
          (e.nextSub !== void 0 && s(e), (a = !0));
        }
      } else if ((c & 33) == 33) {
        ((t.nextSub !== void 0 || t.prevSub !== void 0) &&
          (r = { value: t, prev: r }),
          (t = o.deps),
          (n = o),
          ++i);
        continue;
      }
      if (!a) {
        let e = t.nextDep;
        if (e !== void 0) {
          t = e;
          continue;
        }
      }
      for (; i--;) {
        let i = n.subs,
          o = i.nextSub !== void 0;
        if ((o ? ((t = r.value), (r = r.prev)) : (t = i), a)) {
          if (e(n)) {
            (o && s(i), (n = t.sub));
            continue;
          }
          a = !1;
        } else n.flags &= -33;
        n = t.sub;
        let c = t.nextDep;
        if (c !== void 0) {
          t = c;
          continue top;
        }
      }
      return a;
    } while (!0);
  }
  function s(e) {
    do {
      let n = e.sub,
        r = n.flags;
      (r & 48) == 32 && ((n.flags = r | 16), (r & 6) == 2 && t(n));
    } while ((e = e.nextSub) !== void 0);
  }
  function c(e, t) {
    let n = t.depsTail;
    for (; n !== void 0;) {
      if (n === e) return !0;
      n = n.prevDep;
    }
    return !1;
  }
}
function Ps(e, t, n) {
  let r = typeof e == `object`,
    i = r ? e : void 0;
  return {
    next: (r ? e.next : e)?.bind(i),
    error: (r ? e.error : t)?.bind(i),
    complete: (r ? e.complete : n)?.bind(i),
  };
}
var Fs = [],
  Is = 0,
  {
    link: Ls,
    unlink: Rs,
    propagate: zs,
    checkDirty: Bs,
    shallowPropagate: Vs,
  } = Ns({
    update(e) {
      return e._update();
    },
    notify(e) {
      ((Fs[Us++] = e), (e.flags &= ~V.Watching));
    },
    unwatched(e) {
      e.depsTail !== void 0 &&
        ((e.depsTail = void 0), (e.flags = V.Mutable | V.Dirty), qs(e));
    },
  }),
  Hs = 0,
  Us = 0,
  Ws,
  Gs = 0;
function Ks(e) {
  try {
    (++Gs, e());
  } finally {
    --Gs || Js();
  }
}
function qs(e) {
  let t = e.depsTail,
    n = t === void 0 ? e.deps : t.nextDep;
  for (; n !== void 0;) n = Rs(n, e);
}
function Js() {
  if (!(Gs > 0)) {
    for (; Hs < Us;) {
      let e = Fs[Hs];
      ((Fs[Hs++] = void 0), e.notify());
    }
    ((Hs = 0), (Us = 0));
  }
}
function Ys(e, t) {
  let n = typeof e == `function`,
    r = e,
    i = {
      _snapshot: n ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: n ? V.None : V.Mutable,
      get() {
        return (Ws !== void 0 && Ls(i, Ws, Is), i._snapshot);
      },
      subscribe(e) {
        let t = Ps(e),
          n = { current: !1 },
          r = Xs(() => {
            (i.get(), n.current ? t.next?.(i._snapshot) : (n.current = !0));
          });
        return {
          unsubscribe: () => {
            r.stop();
          },
        };
      },
      _update(e) {
        let a = Ws,
          o = t?.compare ?? Object.is;
        if (n) ((Ws = i), ++Is, (i.depsTail = void 0));
        else if (e === void 0) return !1;
        n && (i.flags = V.Mutable | V.RecursedCheck);
        try {
          let t = i._snapshot,
            a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e;
          return t === void 0 || !o(t, a) ? ((i._snapshot = a), !0) : !1;
        } finally {
          ((Ws = a), n && (i.flags &= ~V.RecursedCheck), qs(i));
        }
      },
    };
  return (
    n
      ? ((i.flags = V.Mutable | V.Dirty),
        (i.get = function () {
          let e = i.flags;
          if (e & V.Dirty || (e & V.Pending && Bs(i.deps, i))) {
            if (i._update()) {
              let e = i.subs;
              e !== void 0 && Vs(e);
            }
          } else e & V.Pending && (i.flags = e & ~V.Pending);
          return (Ws !== void 0 && Ls(i, Ws, Is), i._snapshot);
        }))
      : (i.set = function (e) {
          if (i._update(e)) {
            let e = i.subs;
            e !== void 0 && (zs(e), Vs(e), Js());
          }
        }),
    i
  );
}
function Xs(e) {
  let t = () => {
      let t = Ws;
      ((Ws = n),
        ++Is,
        (n.depsTail = void 0),
        (n.flags = V.Watching | V.RecursedCheck));
      try {
        return e();
      } finally {
        ((Ws = t), (n.flags &= ~V.RecursedCheck), qs(n));
      }
    },
    n = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: V.Watching | V.RecursedCheck,
      notify() {
        let e = this.flags;
        e & V.Dirty || (e & V.Pending && Bs(this.deps, this))
          ? t()
          : (this.flags = V.Watching);
      },
      stop() {
        ((this.flags = V.None), (this.depsTail = void 0), qs(this));
      },
    };
  return (t(), n);
}
var Zs = o((e) => {
    var t = u();
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var r = typeof Object.is == `function` ? Object.is : n,
      i = t.useState,
      a = t.useEffect,
      o = t.useLayoutEffect,
      s = t.useDebugValue;
    function c(e, t) {
      var n = t(),
        r = i({ inst: { value: n, getSnapshot: t } }),
        c = r[0].inst,
        u = r[1];
      return (
        o(
          function () {
            ((c.value = n), (c.getSnapshot = t), l(c) && u({ inst: c }));
          },
          [e, n, t],
        ),
        a(
          function () {
            return (
              l(c) && u({ inst: c }),
              e(function () {
                l(c) && u({ inst: c });
              })
            );
          },
          [e],
        ),
        s(n),
        n
      );
    }
    function l(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !r(e, n);
      } catch {
        return !0;
      }
    }
    function d(e, t) {
      return t();
    }
    var f =
      typeof window > `u` ||
      window.document === void 0 ||
      window.document.createElement === void 0
        ? d
        : c;
    e.useSyncExternalStore =
      t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
  }),
  Qs = o((e, t) => {
    t.exports = Zs();
  }),
  $s = o((e) => {
    var t = u(),
      n = Qs();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : r,
      a = n.useSyncExternalStore,
      o = t.useRef,
      s = t.useEffect,
      c = t.useMemo,
      l = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, u) {
      var d = o(null);
      if (d.current === null) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      d = c(
        function () {
          function e(e) {
            if (!a) {
              if (((a = !0), (o = e), (e = r(e)), u !== void 0 && f.hasValue)) {
                var t = f.value;
                if (u(t, e)) return (s = t);
              }
              return (s = e);
            }
            if (((t = s), i(o, e))) return t;
            var n = r(e);
            return u !== void 0 && u(t, n) ? ((o = e), t) : ((o = e), (s = n));
          }
          var a = !1,
            o,
            s,
            c = n === void 0 ? null : n;
          return [
            function () {
              return e(t());
            },
            c === null
              ? void 0
              : function () {
                  return e(c());
                },
          ];
        },
        [t, n, r, u],
      );
      var p = a(e, d[0], d[1]);
      return (
        s(
          function () {
            ((f.hasValue = !0), (f.value = p));
          },
          [p],
        ),
        l(p),
        p
      );
    };
  }),
  ec = o((e, t) => {
    t.exports = $s();
  })();
function tc(e, t) {
  return e === t;
}
function nc(e, t, n = tc) {
  let r = (0, z.useCallback)(
      (t) => {
        if (!e) return () => {};
        let { unsubscribe: n } = e.subscribe(t);
        return n;
      },
      [e],
    ),
    i = (0, z.useCallback)(() => e?.get(), [e]);
  return (0, ec.useSyncExternalStoreWithSelector)(r, i, i, t, n);
}
var rc = {
  get() {},
  subscribe() {
    return { unsubscribe() {} };
  },
};
function ic(e, t) {
  let n = z.useRef();
  return (r) => {
    let i = e?.select ? e.select(r) : r;
    return (e?.structuralSharing ?? t.options.defaultStructuralSharing)
      ? (n.current = le(n.current, i))
      : i;
  };
}
function ac(e) {
  let t = As(),
    n = z.useContext(e.from ? Ms : js),
    r = e.from
      ? t.stores.getRouteMatchStore(e.from)
      : t.stores.matchStores.get(n),
    i = ic(e, t),
    a = nc(r ?? rc, (e) => (e ? i(e) : rc));
  if (a !== rc) return a;
  (e.shouldThrow ?? !0) && Te();
}
function oc(e) {
  return ac({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function sc(e) {
  let { select: t, ...n } = e;
  return ac({ ...n, select: (e) => (t ? t(e.loaderDeps) : e.loaderDeps) });
}
function cc(e) {
  return ac({
    from: e.from,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    strict: e.strict,
    select: (t) => {
      let n = e.strict === !1 ? t.params : t._strictParams;
      return e.select ? e.select(n) : n;
    },
  });
}
function lc(e) {
  return ac({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function uc(e) {
  let t = As();
  return z.useCallback(
    (n) => t.navigate({ ...n, from: n.from ?? e?.from }),
    [e?.from, t],
  );
}
function dc(e) {
  return ac({
    ...e,
    select: (t) => (e.select ? e.select(t.context) : t.context),
  });
}
var fc = c(m(), 1);
function pc(e, t) {
  let n = As(),
    r = _s(t),
    {
      activeProps: i,
      inactiveProps: a,
      activeOptions: o,
      to: s,
      preload: c,
      preloadDelay: l,
      preloadIntentProximity: u,
      hashScrollIntoView: d,
      replace: f,
      startTransition: p,
      resetScroll: m,
      viewTransition: h,
      children: g,
      target: _,
      disabled: v,
      style: y,
      className: b,
      onClick: x,
      onBlur: ee,
      onFocus: S,
      onMouseEnter: C,
      onMouseLeave: te,
      onTouchStart: ne,
      ignoreBlocker: ie,
      params: ae,
      search: oe,
      hash: se,
      state: ce,
      mask: le,
      reloadDocument: ue,
      unsafeRelative: de,
      from: w,
      _fromLocation: E,
      ...pe
    } = e,
    me = Ds(),
    he = z.useMemo(
      () => e,
      [
        n,
        e.from,
        e._fromLocation,
        e.hash,
        e.to,
        e.search,
        e.params,
        e.state,
        e.mask,
        e.unsafeRelative,
      ],
    ),
    D = nc(
      n.stores.location,
      (e) => e,
      (e, t) => e.href === t.href,
    ),
    O = z.useMemo(() => {
      let e = { _fromLocation: D, ...he };
      return n.buildLocation(e);
    }, [n, D, he]),
    ge = O.maskedLocation ? O.maskedLocation.publicHref : O.publicHref,
    _e = O.maskedLocation ? O.maskedLocation.external : O.external,
    ye = z.useMemo(() => Sc(ge, _e, n.history, v), [v, _e, ge, n.history]),
    be = z.useMemo(() => {
      if (ye?.external)
        return ve(ye.href, n.protocolAllowlist) ? void 0 : ye.href;
      if (!Cc(s) && !(typeof s != `string` || s.indexOf(`:`) === -1))
        try {
          return (new URL(s), ve(s, n.protocolAllowlist) ? void 0 : s);
        } catch {}
    }, [s, ye, n.protocolAllowlist]),
    xe = z.useMemo(() => {
      if (be) return !1;
      if (o?.exact) {
        if (!rt(D.pathname, O.pathname, n.basepath)) return !1;
      } else {
        let e = nt(D.pathname, n.basepath),
          t = nt(O.pathname, n.basepath);
        if (!(
          e.startsWith(t) &&
          (e.length === t.length || e[t.length] === `/`)
        ))
          return !1;
      }
      return (o?.includeSearch ?? !0) &&
        !fe(D.search, O.search, {
          partial: !o?.exact,
          ignoreUndefined: !o?.explicitUndefined,
        })
        ? !1
        : !o?.includeHash || (me && D.hash === O.hash);
    }, [
      o?.exact,
      o?.explicitUndefined,
      o?.includeHash,
      o?.includeSearch,
      D,
      be,
      me,
      O.hash,
      O.pathname,
      O.search,
      n.basepath,
    ]),
    Se = xe ? (re(i, {}) ?? hc) : mc,
    Ce = xe ? mc : (re(a, {}) ?? mc),
    we = [b, Se.className, Ce.className].filter(Boolean).join(` `),
    Te = (y || Se.style || Ce.style) && { ...y, ...Se.style, ...Ce.style },
    [Ee, De] = z.useState(!1),
    Oe = z.useRef(!1),
    ke = e.reloadDocument || be ? !1 : (c ?? n.options.defaultPreload),
    Ae = l ?? n.options.defaultPreloadDelay ?? 0,
    je = z.useCallback(() => {
      n.preloadRoute({ ...he, _builtLocation: O }).catch((e) => {
        (console.warn(e), console.warn(Fn));
      });
    }, [n, he, O]);
  (gs(
    r,
    z.useCallback(
      (e) => {
        e?.isIntersecting && je();
      },
      [je],
    ),
    bc,
    { disabled: !!v || ke !== `viewport` },
  ),
    z.useEffect(() => {
      Oe.current || (!v && ke === `render` && (je(), (Oe.current = !0)));
    }, [v, je, ke]));
  let Me = (e) => {
    let t = e.currentTarget.getAttribute(`target`),
      r = _ === void 0 ? t : _;
    if (
      !v &&
      !Tc(e) &&
      !e.defaultPrevented &&
      (!r || r === `_self`) &&
      e.button === 0
    ) {
      (e.preventDefault(),
        (0, fc.flushSync)(() => {
          De(!0);
        }));
      let t = n.subscribe(`onResolved`, () => {
        (t(), De(!1));
      });
      n.navigate({
        ...he,
        replace: f,
        resetScroll: m,
        hashScrollIntoView: d,
        startTransition: p,
        viewTransition: h,
        ignoreBlocker: ie,
      });
    }
  };
  if (be)
    return {
      ...pe,
      ref: r,
      href: be,
      ...(g && { children: g }),
      ...(_ && { target: _ }),
      ...(v && { disabled: v }),
      ...(y && { style: y }),
      ...(b && { className: b }),
      ...(x && { onClick: x }),
      ...(ee && { onBlur: ee }),
      ...(S && { onFocus: S }),
      ...(C && { onMouseEnter: C }),
      ...(te && { onMouseLeave: te }),
      ...(ne && { onTouchStart: ne }),
    };
  let Ne = (e) => {
      if (v || ke !== `intent`) return;
      if (!Ae) {
        je();
        return;
      }
      let t = e.currentTarget;
      if (yc.has(t)) return;
      let n = setTimeout(() => {
        (yc.delete(t), je());
      }, Ae);
      yc.set(t, n);
    },
    Pe = (e) => {
      v || ke !== `intent` || je();
    },
    Fe = (e) => {
      if (v || !ke || !Ae) return;
      let t = e.currentTarget,
        n = yc.get(t);
      n && (clearTimeout(n), yc.delete(t));
    };
  return {
    ...pe,
    ...Se,
    ...Ce,
    href: ye?.href,
    ref: r,
    onClick: xc([x, Me]),
    onBlur: xc([ee, Fe]),
    onFocus: xc([S, Ne]),
    onMouseEnter: xc([C, Ne]),
    onMouseLeave: xc([te, Fe]),
    onTouchStart: xc([ne, Pe]),
    disabled: !!v,
    target: _,
    ...(Te && { style: Te }),
    ...(we && { className: we }),
    ...(v && gc),
    ...(xe && _c),
    ...(me && Ee && vc),
  };
}
var mc = {},
  hc = { className: `active` },
  gc = { role: `link`, "aria-disabled": !0 },
  _c = { "data-status": `active`, "aria-current": `page` },
  vc = { "data-transitioning": `transitioning` },
  yc = new WeakMap(),
  bc = { rootMargin: `100px` },
  xc = (e) => (t) => {
    for (let n of e)
      if (n) {
        if (t.defaultPrevented) return;
        n(t);
      }
  };
function Sc(e, t, n, r) {
  if (!r)
    return t
      ? { href: e, external: !0 }
      : { href: n.createHref(e) || `/`, external: !1 };
}
function Cc(e) {
  if (typeof e != `string`) return !1;
  let t = e.charCodeAt(0);
  return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var wc = z.forwardRef((e, t) => {
  let { _asChild: n, ...r } = e,
    { type: i, ...a } = pc(r, t),
    o =
      typeof r.children == `function`
        ? r.children({ isActive: a[`data-status`] === `active` })
        : r.children;
  if (!n) {
    let { disabled: e, ...t } = a;
    return z.createElement(`a`, t, o);
  }
  return z.createElement(n, a, o);
});
function Tc(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Ec = class extends Hn {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        ac({
          select: e?.select,
          from: this.id,
          structuralSharing: e?.structuralSharing,
        })),
      (this.useRouteContext = (e) => dc({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        lc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (e) =>
        cc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (e) => sc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => oc({ ...e, from: this.id })),
      (this.useNavigate = () => uc({ from: this.fullPath })),
      (this.Link = z.forwardRef((e, t) =>
        (0, B.jsx)(wc, { ref: t, from: this.fullPath, ...e }),
      )));
  }
};
function Dc(e) {
  return new Ec(e);
}
function Oc() {
  return (e) => Ac(e);
}
var kc = class extends Un {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        ac({
          select: e?.select,
          from: this.id,
          structuralSharing: e?.structuralSharing,
        })),
      (this.useRouteContext = (e) => dc({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        lc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (e) =>
        cc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (e) => sc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => oc({ ...e, from: this.id })),
      (this.useNavigate = () => uc({ from: this.fullPath })),
      (this.Link = z.forwardRef((e, t) =>
        (0, B.jsx)(wc, { ref: t, from: this.fullPath, ...e }),
      )));
  }
};
function Ac(e) {
  return new kc(e);
}
function jc(e) {
  return new Mc(e, { silent: !0 }).createRoute;
}
var Mc = class {
  constructor(e, t) {
    ((this.path = e),
      (this.createRoute = (e) => {
        let t = Dc(e);
        return ((t.isRoot = !1), t);
      }),
      (this.silent = t?.silent));
  }
};
function Nc(e, t) {
  let n,
    r,
    i,
    a,
    o = () => (
      (n ||= e()
        .then((e) => {
          ((n = void 0), (r = e[t ?? `default`]));
        })
        .catch((e) => {
          if (
            ((i = e),
            me(i) &&
              i instanceof Error &&
              typeof window < `u` &&
              typeof sessionStorage < `u`)
          ) {
            let e = `tanstack_router_reload:${i.message}`;
            sessionStorage.getItem(e) ||
              (sessionStorage.setItem(e, `1`), (a = !0));
          }
        })),
      n
    ),
    s = function (e) {
      if (a) throw (window.location.reload(), new Promise(() => {}));
      if (i) throw i;
      if (!r)
        if (ps) ps(o());
        else throw o();
      return z.createElement(r, e);
    };
  return ((s.preload = o), s);
}
function Pc(e) {
  let t = As(),
    n = `not-found-${nc(t.stores.location, (e) => e.pathname)}-${nc(t.stores.status, (e) => e)}`;
  return (0, B.jsx)(Cs, {
    getResetKey: () => n,
    onCatch: (t, n) => {
      if (lt(t)) e.onCatch?.(t, n);
      else throw t;
    },
    errorComponent: ({ error: t }) => {
      if (lt(t)) return e.fallback?.(t);
      throw t;
    },
    children: e.children,
  });
}
function Fc() {
  return (0, B.jsx)(`p`, { children: `Not Found` });
}
function Ic(e) {
  return (0, B.jsx)(B.Fragment, { children: e.children });
}
function Lc(e, t, n) {
  return t.options.notFoundComponent
    ? (0, B.jsx)(t.options.notFoundComponent, { ...n })
    : e.options.defaultNotFoundComponent
      ? (0, B.jsx)(e.options.defaultNotFoundComponent, { ...n })
      : (0, B.jsx)(Fc, {});
}
var Rc = (e, t) =>
    e.routeId === t.routeId && e._displayPending === t._displayPending,
  zc = (e, t) => e[0] === t[0] && e[1] === t[1],
  Bc = z.memo(function ({ matchId: e }) {
    let t = As(),
      n = t.stores.matchStores.get(e);
    n || Te();
    let r = nc(t.stores.loadedAt, (e) => e),
      i = nc(n, (e) => e, Rc);
    return (0, B.jsx)(H, {
      router: t,
      matchId: e,
      resetKey: r,
      matchState: z.useMemo(() => {
        let e = i.routeId,
          n = t.routesById[e].parentRoute?.id;
        return {
          routeId: e,
          ssr: i.ssr,
          _displayPending: i._displayPending,
          parentRouteId: n,
        };
      }, [i._displayPending, i.routeId, i.ssr, t.routesById]),
    });
  });
function H({ router: e, matchId: t, resetKey: n, matchState: r }) {
  let i = e.routesById[r.routeId],
    a = i.options.pendingComponent ?? e.options.defaultPendingComponent,
    o = a ? (0, B.jsx)(a, {}) : null,
    s = i.options.errorComponent ?? e.options.defaultErrorComponent,
    c = i.options.onCatch ?? e.options.defaultOnCatch,
    l = i.isRoot
      ? (i.options.notFoundComponent ??
        e.options.notFoundRoute?.options.component)
      : i.options.notFoundComponent,
    u = r.ssr === !1 || r.ssr === `data-only`,
    d =
      (!i.isRoot || i.options.wrapInSuspense || u) &&
      (i.options.wrapInSuspense ??
        a ??
        (i.options.errorComponent?.preload || u))
        ? z.Suspense
        : Ic,
    f = s ? Cs : Ic,
    p = l ? Pc : Ic;
  return (0, B.jsxs)(i.isRoot ? (i.options.shellComponent ?? Ic) : Ic, {
    children: [
      (0, B.jsx)(js.Provider, {
        value: t,
        children: (0, B.jsx)(d, {
          fallback: o,
          children: (0, B.jsx)(f, {
            getResetKey: () => n,
            errorComponent: s || Ts,
            onCatch: (e, t) => {
              if (lt(e)) throw ((e.routeId ??= r.routeId), e);
              c?.(e, t);
            },
            children: (0, B.jsx)(p, {
              fallback: (e) => {
                if (
                  ((e.routeId ??= r.routeId),
                  !l ||
                    (e.routeId && e.routeId !== r.routeId) ||
                    (!e.routeId && !i.isRoot))
                )
                  throw e;
                return z.createElement(l, e);
              },
              children:
                u || r._displayPending
                  ? (0, B.jsx)(Es, {
                      fallback: o,
                      children: (0, B.jsx)(Hc, { matchId: t }),
                    })
                  : (0, B.jsx)(Hc, { matchId: t }),
            }),
          }),
        }),
      }),
      r.parentRouteId === `__root__`
        ? (0, B.jsxs)(B.Fragment, {
            children: [(0, B.jsx)(Vc, {}), (e.options.scrollRestoration, null)],
          })
        : null,
    ],
  });
}
function Vc() {
  let e = As(),
    t = z.useRef();
  return (
    ms(() => {
      let n = e.stores.resolvedLocation.get(),
        r = t.current;
      (n &&
        (!r || r.href !== n.href) &&
        e.emit({ type: `onRendered`, ...sn(e.stores.location.get(), r ?? n) }),
        (t.current = n));
    }, [nc(e.stores.resolvedLocation, (e) => e?.state.__TSR_key), e]),
    null
  );
}
var Hc = z.memo(function ({ matchId: e }) {
    let t = As(),
      n = (e, n) => t.getMatch(e.id)?._nonReactive[n] ?? e._nonReactive[n],
      r = t.stores.matchStores.get(e);
    r || Te();
    let i = nc(r, (e) => e),
      a = i.routeId,
      o = t.routesById[a],
      s = z.useMemo(() => {
        let e = (
          t.routesById[a].options.remountDeps ?? t.options.defaultRemountDeps
        )?.({
          routeId: a,
          loaderDeps: i.loaderDeps,
          params: i._strictParams,
          search: i._strictSearch,
        });
        return e ? JSON.stringify(e) : void 0;
      }, [
        a,
        i.loaderDeps,
        i._strictParams,
        i._strictSearch,
        t.options.defaultRemountDeps,
        t.routesById,
      ]),
      c = z.useMemo(() => {
        let e = o.options.component ?? t.options.defaultComponent;
        return e ? (0, B.jsx)(e, {}, s) : (0, B.jsx)(Uc, {});
      }, [s, o.options.component, t.options.defaultComponent]);
    if (i._displayPending) throw n(i, `displayPendingPromise`);
    if (i._forcePending) throw n(i, `minPendingPromise`);
    if (i.status === `pending`) {
      let e = o.options.pendingMinMs ?? t.options.defaultPendingMinMs;
      if (e) {
        let n = t.getMatch(i.id);
        if (n && !n._nonReactive.minPendingPromise) {
          let t = pe();
          ((n._nonReactive.minPendingPromise = t),
            setTimeout(() => {
              (t.resolve(), (n._nonReactive.minPendingPromise = void 0));
            }, e));
        }
      }
      throw n(i, `loadPromise`);
    }
    if (i.status === `notFound`)
      return (lt(i.error) || Te(), Lc(t, o, i.error));
    if (i.status === `redirected`)
      throw (yt(i.error) || Te(), n(i, `loadPromise`));
    if (i.status === `error`) throw i.error;
    return c;
  }),
  Uc = z.memo(function () {
    let e = As(),
      t = z.useContext(js),
      n,
      r = !1,
      i;
    {
      let a = t ? e.stores.matchStores.get(t) : void 0;
      (([n, r] = nc(a, (e) => [e?.routeId, e?.globalNotFound ?? !1], zc)),
        (i = nc(
          e.stores.matchesId,
          (e) => e[e.findIndex((e) => e === t) + 1],
        )));
    }
    let a = n ? e.routesById[n] : void 0,
      o = e.options.defaultPendingComponent
        ? (0, B.jsx)(e.options.defaultPendingComponent, {})
        : null;
    if (r) return (a || Te(), Lc(e, a, void 0));
    if (!i) return null;
    let s = (0, B.jsx)(Bc, { matchId: i });
    return n === `__root__`
      ? (0, B.jsx)(z.Suspense, { fallback: o, children: s })
      : s;
  });
function Wc() {
  let e = As(),
    t = z.useRef({ router: e, mounted: !1 }),
    [n, r] = z.useState(!1),
    i = nc(e.stores.isLoading, (e) => e),
    a = nc(e.stores.hasPending, (e) => e),
    o = hs(i),
    s = i || n || a,
    c = hs(s),
    l = i || a,
    u = hs(l);
  return (
    (e.startTransition = (e) => {
      (r(!0),
        z.startTransition(() => {
          (e(), r(!1));
        }));
    }),
    z.useEffect(() => {
      let t = e.history.subscribe(e.load),
        n = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        et(e.latestLocation.publicHref) !== et(n.publicHref) &&
          e.commitLocation({ ...n, replace: !0 }),
        () => {
          t();
        }
      );
    }, [e, e.history]),
    ms(() => {
      (typeof window < `u` && e.ssr) ||
        (t.current.router === e && t.current.mounted) ||
        ((t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (e) {
            console.error(e);
          }
        })());
    }, [e]),
    ms(() => {
      o &&
        !i &&
        e.emit({
          type: `onLoad`,
          ...sn(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [o, e, i]),
    ms(() => {
      u &&
        !l &&
        e.emit({
          type: `onBeforeRouteMount`,
          ...sn(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [l, u, e]),
    ms(() => {
      if (c && !s) {
        let t = sn(e.stores.location.get(), e.stores.resolvedLocation.get());
        (e.emit({ type: `onResolved`, ...t }),
          Ks(() => {
            (e.stores.status.set(`idle`),
              e.stores.resolvedLocation.set(e.stores.location.get()));
          }));
      }
    }, [s, c, e]),
    null
  );
}
function Gc() {
  let e = As(),
    t =
      e.routesById.__root__.options.pendingComponent ??
      e.options.defaultPendingComponent,
    n = t ? (0, B.jsx)(t, {}) : null,
    r = (0, B.jsxs)(typeof document < `u` && e.ssr ? Ic : z.Suspense, {
      fallback: n,
      children: [(0, B.jsx)(Wc, {}), (0, B.jsx)(Kc, {})],
    });
  return e.options.InnerWrap
    ? (0, B.jsx)(e.options.InnerWrap, { children: r })
    : r;
}
function Kc() {
  let e = As(),
    t = nc(e.stores.firstId, (e) => e),
    n = nc(e.stores.loadedAt, (e) => e),
    r = t ? (0, B.jsx)(Bc, { matchId: t }) : null;
  return (0, B.jsx)(js.Provider, {
    value: t,
    children: e.options.disableGlobalCatchBoundary
      ? r
      : (0, B.jsx)(Cs, {
          getResetKey: () => n,
          errorComponent: Ts,
          onCatch: void 0,
          children: r,
        }),
  });
}
var qc = (e) => ({
    createMutableStore: Ys,
    createReadonlyStore: Ys,
    batch: Ks,
  }),
  Jc = (e) => new Yc(e),
  Yc = class extends ln {
    constructor(e) {
      super(e, qc);
    }
  };
function Xc({ router: e, children: t, ...n }) {
  oe(n) &&
    e.update({
      ...e.options,
      ...n,
      context: { ...e.options.context, ...n.context },
    });
  let r = (0, B.jsx)(ks.Provider, { value: e, children: t });
  return e.options.Wrap ? (0, B.jsx)(e.options.Wrap, { children: r }) : r;
}
function Zc({ router: e, ...t }) {
  return (0, B.jsx)(Xc, { router: e, ...t, children: (0, B.jsx)(Gc, {}) });
}
function Qc(e, t) {
  if (t)
    for (let [n, r] of Object.entries(t))
      n !== `suppressHydrationWarning` &&
        r !== void 0 &&
        r !== !1 &&
        e.setAttribute(n, typeof r == `boolean` ? `` : String(r));
}
function $c(e) {
  let { attrs: t, children: n, nonce: r, preventScriptHoist: i } = e;
  switch (e.tag) {
    case `title`:
      return (0, B.jsx)(`title`, {
        ...t,
        suppressHydrationWarning: !0,
        children: n,
      });
    case `meta`:
      return (0, B.jsx)(`meta`, { ...t, suppressHydrationWarning: !0 });
    case `link`:
      return (0, B.jsx)(`link`, {
        ...t,
        precedence:
          t?.precedence ?? (t?.rel === `stylesheet` ? `default` : void 0),
        nonce: r,
        suppressHydrationWarning: !0,
      });
    case `style`:
      return (
        e.inlineCss,
        (0, B.jsx)(`style`, {
          ...t,
          dangerouslySetInnerHTML: { __html: n },
          nonce: r,
        })
      );
    case `script`:
      return (0, B.jsx)(el, { attrs: t, preventScriptHoist: i, children: n });
    default:
      return null;
  }
}
function el({ attrs: e, children: t, preventScriptHoist: n }) {
  As();
  let r = Ds(),
    i =
      typeof e?.type == `string` &&
      e.type !== `` &&
      e.type !== `text/javascript` &&
      e.type !== `module`;
  if (
    (z.useEffect(() => {
      if (!i) {
        if (e?.src) {
          let t = (() => {
            try {
              let t = document.baseURI || window.location.href;
              return new URL(e.src, t).href;
            } catch {
              return e.src;
            }
          })();
          for (let e of document.querySelectorAll(`script[src]`))
            if (e.src === t) return;
          let n = document.createElement(`script`);
          return (Qc(n, e), document.head.appendChild(n), () => n.remove());
        }
        if (typeof t == `string`) {
          let n = typeof e?.type == `string` ? e.type : `text/javascript`,
            r = typeof e?.nonce == `string` ? e.nonce : void 0;
          for (let e of document.querySelectorAll(`script:not([src])`)) {
            if (!(e instanceof HTMLScriptElement)) continue;
            let i = e.getAttribute(`type`) ?? `text/javascript`,
              a = e.getAttribute(`nonce`) ?? void 0;
            if (e.textContent === t && i === n && a === r) return;
          }
          let i = document.createElement(`script`);
          return (
            (i.textContent = t),
            Qc(i, e),
            document.head.appendChild(i),
            () => i.remove()
          );
        }
      }
    }, [e, t, i]),
    i && typeof t == `string`)
  )
    return (0, B.jsx)(`script`, {
      ...e,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: t },
    });
  if (!r) {
    if (e?.src)
      return (0, B.jsx)(`script`, { ...e, suppressHydrationWarning: !0 });
    if (typeof t == `string`)
      return (0, B.jsx)(`script`, {
        ...e,
        dangerouslySetInnerHTML: { __html: t },
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
var tl = (e) => {
  let t = As(),
    n = t.options.ssr?.nonce,
    r = nc(
      t.stores.matches,
      (e) => e.map((e) => e.meta).filter((e) => e !== void 0),
      fe,
    ),
    i = z.useMemo(() => {
      let e = [],
        t = {},
        i;
      for (let a = r.length - 1; a >= 0; a--) {
        let o = r[a];
        for (let r = o.length - 1; r >= 0; r--) {
          let a = o[r];
          if (a)
            if (a.title) i ||= { tag: `title`, children: a.title };
            else if (`script:ld+json` in a)
              try {
                let t = JSON.stringify(a[`script:ld+json`]);
                e.push({
                  tag: `script`,
                  attrs: { type: `application/ld+json` },
                  children: xe(t),
                });
              } catch {}
            else {
              let r = a.name ?? a.property;
              if (r) {
                if (t[r]) continue;
                t[r] = !0;
              }
              e.push({ tag: `meta`, attrs: { ...a, nonce: n } });
            }
        }
      }
      return (
        i && e.push(i),
        n &&
          e.push({ tag: `meta`, attrs: { property: `csp-nonce`, content: n } }),
        e.reverse(),
        e
      );
    }, [r, n]),
    a = nc(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.links ?? [])
          .filter((e) => e !== void 0)
          .map((e) => ({ tag: `link`, attrs: { ...e, nonce: n } })),
      fe,
    ),
    o = nc(
      t.stores.matches,
      (r) => {
        let i = t.ssr?.manifest,
          a = [];
        return i
          ? (r.forEach((t) => {
              i.routes[t.routeId]?.css?.forEach((t) => {
                let r = Vn(t);
                a.push({
                  tag: `link`,
                  attrs: {
                    rel: `stylesheet`,
                    ...r,
                    crossOrigin: In(e, `stylesheet`) ?? r.crossOrigin,
                    suppressHydrationWarning: !0,
                    nonce: n,
                  },
                });
              });
            }),
            i.inlineStyle &&
              a.push({
                tag: `style`,
                attrs: { ...i.inlineStyle.attrs, nonce: n },
                children: i.inlineStyle.children,
                inlineCss: !0,
              }),
            a)
          : a;
      },
      fe,
    ),
    s = nc(
      t.stores.matches,
      (r) => {
        let i = [],
          a = t.ssr?.manifest;
        return (
          a &&
            r.forEach((t) => {
              a.routes[t.routeId]?.preloads?.forEach((t) => {
                i.push({ tag: `link`, attrs: { ...Rn(a, t, e), nonce: n } });
              });
            }),
          i
        );
      },
      fe,
    ),
    c = nc(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.styles ?? [])
          .filter((e) => e !== void 0)
          .map(({ children: e, ...t }) => ({
            tag: `style`,
            attrs: { ...t, nonce: n },
            children: e,
          })),
      fe,
    ),
    l = nc(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.headScripts ?? [])
          .filter((e) => e !== void 0)
          .map(({ children: e, ...t }) => ({
            tag: `script`,
            attrs: { ...t, nonce: n },
            children: e,
          })),
      fe,
    ),
    u = [];
  return (
    Bn(u, i),
    u.push(...s),
    Bn(u, a),
    u.push(...o),
    Bn(u, c),
    Bn(u, l),
    u
  );
};
function nl(e) {
  let t = tl(e.assetCrossOrigin),
    n = As().options.ssr?.nonce;
  return (0, B.jsx)(B.Fragment, {
    children: t.map((e) =>
      (0, z.createElement)($c, {
        ...e,
        key: `tsr-meta-${JSON.stringify(e)}`,
        nonce: n,
      }),
    ),
  });
}
var rl = () => {
  let e = As(),
    t = e.options.ssr?.nonce,
    n = (n) => {
      let r = [],
        i = e.ssr?.manifest;
      if (!i) return [];
      for (let e of n) {
        let n = i.routes[e.routeId]?.scripts;
        if (n)
          for (let e of n)
            r.push({
              tag: `script`,
              attrs: { ...e.attrs, nonce: t },
              children: e.children,
              ...(typeof e.attrs?.src == `string`
                ? { preventScriptHoist: !0 }
                : {}),
            });
      }
      return r;
    },
    r = (e) =>
      e
        .map((e) => e.scripts)
        .flat(1)
        .filter(Boolean)
        .map(({ children: e, ...n }) => ({
          tag: `script`,
          attrs: { ...n, suppressHydrationWarning: !0, nonce: t },
          children: e,
        })),
    i = nc(e.stores.matches, n, fe);
  return il(e, nc(e.stores.matches, r, fe), i);
};
function il(e, t, n) {
  let r = [...t, ...n];
  return (0, B.jsx)(B.Fragment, {
    children: r.map((e, t) =>
      (0, z.createElement)($c, { ...e, key: `tsr-scripts-${e.tag}-${t}` }),
    ),
  });
}
var al = (e, t) => {
  let n = { type: `request`, ...(t || e) },
    r = (e) => al({}, Object.assign(n, { validator: e, inputValidator: e }));
  return {
    options: n,
    middleware: (e) => al({}, Object.assign(n, { middleware: e })),
    validator: r,
    inputValidator: r,
    client: (e) => al({}, Object.assign(n, { client: e })),
    server: (e) => al({}, Object.assign(n, { server: e })),
  };
};
function ol(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && ol(e, r.extends));
  }
}
var sl = (e) => ({
    getOptions: async () => {
      let t = await e();
      if (t.serializationAdapters) {
        let e = new Set();
        (ol(e, t.serializationAdapters),
          (t.serializationAdapters = Array.from(e)));
      }
      return t;
    },
    createMiddleware: al,
  }),
  cl = al(),
  ll = sl(() => ({ requestMiddleware: [cl] })),
  ul = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  U = new (class extends ul {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  dl = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  fl = new (class {
    #e = dl;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function pl(e) {
  setTimeout(e, 0);
}
var ml = typeof window > `u` || `Deno` in globalThis;
function hl() {}
function gl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function _l(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function vl(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function yl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function bl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function xl(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Cl(o, t.options)) return !1;
    } else if (!Tl(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function Sl(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (wl(t.options.mutationKey) !== wl(a)) return !1;
    } else if (!Tl(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Cl(e, t) {
  return (t?.queryKeyHashFn || wl)(e);
}
function wl(e) {
  return JSON.stringify(e, (e, t) =>
    kl(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function Tl(e, t) {
  return e === t
    ? !0
    : typeof e == typeof t &&
        e &&
        t &&
        typeof e == `object` &&
        typeof t == `object`
      ? Object.keys(t).every((n) => Tl(e[n], t[n]))
      : !1;
}
var El = Object.prototype.hasOwnProperty;
function Dl(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = Ol(e) && Ol(t);
  if (!r && !(kl(e) && kl(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : El.call(e, o)) && c++);
      continue;
    }
    if (
      u === null ||
      d === null ||
      typeof u != `object` ||
      typeof d != `object`
    ) {
      s[o] = d;
      continue;
    }
    let f = Dl(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function Ol(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function kl(e) {
  if (!Al(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !Al(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Al(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function jl(e) {
  return new Promise((t) => {
    fl.setTimeout(t, e);
  });
}
function Ml(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : Dl(e, t);
}
function Nl(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Pl(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Fl = Symbol();
function Il(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Fl
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function Ll(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r
          ? i
          : ((r = !0),
            i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }),
            i)
      ),
    }),
    e
  );
}
var Rl = (() => {
  let e = () => ml;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function zl() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
var Bl = pl;
function Vl() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = Bl,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var W = Vl(),
  G = new (class extends ul {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function K(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function q(e) {
  return (e ?? `online`) !== `online` || G.isOnline();
}
var J = class extends Error {
  constructor(e) {
    (super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function Hl(e) {
  let t = !1,
    n = 0,
    r,
    i = zl(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new J(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () =>
      U.isFocused() &&
      (e.networkMode === `always` || G.isOnline()) &&
      e.canRun(),
    u = () => q(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (Rl.isServer() ? 0 : 3),
            o = e.retryDelay ?? K,
            s = typeof o == `function` ? o(n, r) : o,
            c =
              i === !0 ||
              (typeof i == `number` && n < i) ||
              (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            jl(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var Ul = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      _l(this.gcTime) &&
        (this.#e = fl.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Rl.isServer() ? 1 / 0 : 300 * 1e3),
    );
  }
  clearGcTimeout() {
    this.#e !== void 0 && (fl.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function Wl(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              Ll(
                e,
                () => t.signal,
                () => (n = !0),
              );
            },
            u = Il(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason);
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = (() => {
                  let e = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: r,
                    direction: i ? `backward` : `forward`,
                    meta: t.options.meta,
                  };
                  return (l(e), e);
                })(),
                o = await u(a),
                { maxPages: s } = t.options,
                c = i ? Pl : Nl;
              return {
                pages: c(e.pages, o, s),
                pageParams: c(e.pageParams, r, s),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? Kl : Gl,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : Gl(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              l,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            ))
        : (t.fetchFn = l);
    },
  };
}
function Gl(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Kl(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var ql = class extends Ul {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(e) {
    (super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = Xl(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      let e = Xl(this.options);
      e.data !== void 0 &&
        (this.setState(Yl(e.data, e.dataUpdatedAt)), (this.#t = e));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === `idle` &&
      this.#r.remove(this);
  }
  setData(e, t) {
    let n = Ml(this.state.data, e, this.options);
    return (
      this.#l({
        data: n,
        type: `success`,
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      n
    );
  }
  setState(e) {
    this.#l({ type: `setState`, state: e });
  }
  cancel(e) {
    let t = this.#a?.promise;
    return (this.#a?.cancel(e), t ? t.then(hl).catch(hl) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => bl(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === Fl || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return (
      this.getObserversCount() > 0 &&
      this.observers.some((e) => yl(e.options.staleTime, this) === `static`)
    );
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
        ? !1
        : this.state.isInvalidated
          ? !0
          : !vl(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers
      .find((e) => e.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  onOnline() {
    (this.observers
      .find((e) => e.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#a &&
          (this.#s || this.#c()
            ? this.#a.cancel({ revert: !0 })
            : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #c() {
    return (
      this.state.fetchStatus === `paused` && this.state.status === `pending`
    );
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: `invalidate` });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let e = this.observers.find((e) => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    let n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        });
      },
      i = () => {
        let e = Il(this.options, t),
          n = (() => {
            let e = {
              client: this.#i,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return (r(e), e);
          })();
        return (
          (this.#s = !1),
          this.options.persister ? this.options.persister(e, n, this) : e(n)
        );
      },
      a = (() => {
        let e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        };
        return (r(e), e);
      })();
    ((this.#e === `infinite`
      ? Wl(this.options.pages)
      : this.options.behavior
    )?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` ||
        this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#l({ type: `fetch`, meta: a.fetchOptions?.meta }),
      (this.#a = Hl({
        initialPromise: t?.initialPromise,
        fn: a.fetchFn,
        onCancel: (e) => {
          (e instanceof J &&
            e.revert &&
            this.setState({ ...this.#n, fetchStatus: `idle` }),
            n.abort());
        },
        onFail: (e, t) => {
          this.#l({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#l({ type: `pause` });
        },
        onContinue: () => {
          this.#l({ type: `continue` });
        },
        retry: a.options.retry,
        retryDelay: a.options.retryDelay,
        networkMode: a.options.networkMode,
        canRun: () => !0,
      })));
    try {
      let e = await this.#a.start();
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      );
    } catch (e) {
      if (e instanceof J) {
        if (e.silent) return this.#a.promise;
        if (e.revert) {
          if (this.state.data === void 0) throw e;
          return this.state.data;
        }
      }
      throw (
        this.#l({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e
      );
    } finally {
      this.scheduleGc();
    }
  }
  #l(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return {
            ...t,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case `pause`:
          return { ...t, fetchStatus: `paused` };
        case `continue`:
          return { ...t, fetchStatus: `fetching` };
        case `fetch`:
          return {
            ...t,
            ...Jl(t.data, this.options),
            fetchMeta: e.meta ?? null,
          };
        case `success`:
          let n = {
            ...t,
            ...Yl(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = e.manual ? n : void 0), n);
        case `error`:
          let r = e.error;
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          };
        case `invalidate`:
          return { ...t, isInvalidated: !0 };
        case `setState`:
          return { ...t, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      W.batch(() => {
        (this.observers.forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: `updated`, action: e }));
      }));
  }
};
function Jl(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: q(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function Yl(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function Xl(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var Zl = class extends Ul {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || Ql()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = Hl({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#i({ type: `pause` });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    let r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        (this.#i({ type: `pending`, variables: e, isPaused: i }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, n)));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i });
      }
      let a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n,
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    ((this.state = t(this.state)),
      W.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function Ql() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var $l = class extends ul {
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new Zl({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = eu(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = eu(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n)
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = eu(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    } else return !0;
  }
  runNext(e) {
    let t = eu(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    W.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => Sl(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => Sl(e, t));
  }
  notify(e) {
    W.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return W.batch(() => Promise.all(e.map((e) => e.continue().catch(hl))));
  }
};
function eu(e) {
  return e.options.scope?.id;
}
var tu = class extends ul {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? Cl(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new ql({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      W.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => xl(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => xl(e, t)) : t;
    }
    notify(e) {
      W.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      W.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      W.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  nu = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new tu()),
        (this.#t = e.mutationCache || new $l()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = U.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = G.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime(yl(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = gl(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return W.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      W.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return W.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = W.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(hl).catch(hl);
    }
    invalidateQueries(e, t = {}) {
      return W.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? `active` },
                t,
              )
        ),
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = W.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(hl)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(hl);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(yl(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(hl).catch(hl);
    }
    fetchInfiniteQuery(e) {
      return ((e._type = `infinite`), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(hl).catch(hl);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = `infinite`), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return G.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(wl(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          Tl(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(wl(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          Tl(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= Cl(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === Fl && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  ru = z.createContext(void 0),
  iu = ({ client: e, children: t }) => (
    z.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, B.jsx)(ru.Provider, { value: e, children: t })
  ),
  au = `/assets/styles-CregLkgo.css`;
function ou(e, t = {}) {
  typeof window > `u` ||
    window.__lovableEvents?.captureException?.(
      e,
      { source: `react_error_boundary`, route: window.location.pathname, ...t },
      { mechanism: `react_error_boundary`, handled: !1, severity: `error` },
    );
}
var su = () => void 0,
  cu = function (e) {
    let t = [],
      n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
          ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
          : (i & 64512) == 55296 &&
              r + 1 < e.length &&
              (e.charCodeAt(r + 1) & 64512) == 56320
            ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
              (t[n++] = (i >> 18) | 240),
              (t[n++] = ((i >> 12) & 63) | 128),
              (t[n++] = ((i >> 6) & 63) | 128),
              (t[n++] = (i & 63) | 128))
            : ((t[n++] = (i >> 12) | 224),
              (t[n++] = ((i >> 6) & 63) | 128),
              (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  lu = function (e) {
    let t = [],
      n = 0,
      r = 0;
    for (; n < e.length;) {
      let i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        let a = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (a & 63));
      } else if (i > 239 && i < 365) {
        let a = e[n++],
          o = e[n++],
          s = e[n++],
          c =
            (((i & 7) << 18) | ((a & 63) << 12) | ((o & 63) << 6) | (s & 63)) -
            65536;
        ((t[r++] = String.fromCharCode(55296 + (c >> 10))),
          (t[r++] = String.fromCharCode(56320 + (c & 1023))));
      } else {
        let a = e[n++],
          o = e[n++];
        t[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((a & 63) << 6) | (o & 63),
        );
      }
    }
    return t.join(``);
  },
  uu = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + `+/=`;
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + `-_.`;
    },
    HAS_NATIVE_SUPPORT: typeof atob == `function`,
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error(`encodeByteArray takes an array as a parameter`);
      this.init_();
      let n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let t = 0; t < e.length; t += 3) {
        let i = e[t],
          a = t + 1 < e.length,
          o = a ? e[t + 1] : 0,
          s = t + 2 < e.length,
          c = s ? e[t + 2] : 0,
          l = i >> 2,
          u = ((i & 3) << 4) | (o >> 4),
          d = ((o & 15) << 2) | (c >> 6),
          f = c & 63;
        (s || ((f = 64), a || (d = 64)), r.push(n[l], n[u], n[d], n[f]));
      }
      return r.join(``);
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(cu(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : lu(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      let n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let t = 0; t < e.length;) {
        let i = n[e.charAt(t++)],
          a = t < e.length ? n[e.charAt(t)] : 0;
        ++t;
        let o = t < e.length ? n[e.charAt(t)] : 64;
        ++t;
        let s = t < e.length ? n[e.charAt(t)] : 64;
        if ((++t, i == null || a == null || o == null || s == null))
          throw new du();
        let c = (i << 2) | (a >> 4);
        if ((r.push(c), o !== 64)) {
          let e = ((a << 4) & 240) | (o >> 2);
          if ((r.push(e), s !== 64)) {
            let e = ((o << 6) & 192) | s;
            r.push(e);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        ((this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {}));
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          ((this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)));
      }
    },
  },
  du = class extends Error {
    constructor() {
      (super(...arguments), (this.name = `DecodeBase64StringError`));
    }
  },
  fu = function (e) {
    let t = cu(e);
    return uu.encodeByteArray(t, !0);
  },
  pu = function (e) {
    return fu(e).replace(/\./g, ``);
  },
  mu = function (e) {
    try {
      return uu.decodeString(e, !0);
    } catch (e) {
      console.error(`base64Decode failed: `, e);
    }
    return null;
  };
function hu() {
  if (typeof self < `u`) return self;
  if (typeof window < `u`) return window;
  if (typeof global < `u`) return global;
  throw Error(`Unable to locate global object.`);
}
var gu = () => hu().__FIREBASE_DEFAULTS__,
  _u = () => {
    if (typeof process > `u`) return;
    let e = {}.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  vu = () => {
    if (typeof document > `u`) return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    let t = e && mu(e[1]);
    return t && JSON.parse(t);
  },
  yu = () => {
    try {
      return su() || gu() || _u() || vu();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  bu = (e) => yu()?.emulatorHosts?.[e],
  xu = () => yu()?.config,
  Su = (e) => yu()?.[`_${e}`],
  Cu = class {
    constructor() {
      ((this.reject = () => {}),
        (this.resolve = () => {}),
        (this.promise = new Promise((e, t) => {
          ((this.resolve = e), (this.reject = t));
        })));
    }
    wrapCallback(e) {
      return (t, n) => {
        (t ? this.reject(t) : this.resolve(n),
          typeof e == `function` &&
            (this.promise.catch(() => {}), e.length === 1 ? e(t) : e(t, n)));
      };
    }
  };
function wu() {
  return typeof navigator < `u` && typeof navigator.userAgent == `string`
    ? navigator.userAgent
    : ``;
}
function Tu() {
  return (
    typeof window < `u` &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wu())
  );
}
function Eu() {
  return typeof navigator < `u` && navigator.userAgent === `Cloudflare-Workers`;
}
function Du() {
  let e =
    typeof chrome == `object`
      ? chrome.runtime
      : typeof browser == `object`
        ? browser.runtime
        : void 0;
  return typeof e == `object` && e.id !== void 0;
}
function Ou() {
  return typeof navigator == `object` && navigator.product === `ReactNative`;
}
function ku() {
  let e = wu();
  return e.indexOf(`MSIE `) >= 0 || e.indexOf(`Trident/`) >= 0;
}
function Au() {
  try {
    return typeof indexedDB == `object`;
  } catch {
    return !1;
  }
}
function ju() {
  return new Promise((e, t) => {
    try {
      let n = !0,
        r = `validate-browser-context-for-indexeddb-analytics-module`,
        i = self.indexedDB.open(r);
      ((i.onsuccess = () => {
        (i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0));
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          t(i.error?.message || ``);
        }));
    } catch (e) {
      t(e);
    }
  });
}
var Mu = `FirebaseError`,
  Nu = class e extends Error {
    constructor(t, n, r) {
      (super(n),
        (this.code = t),
        (this.customData = r),
        (this.name = Mu),
        Object.setPrototypeOf(this, e.prototype),
        Error.captureStackTrace &&
          Error.captureStackTrace(this, Pu.prototype.create));
    }
  },
  Pu = class {
    constructor(e, t, n) {
      ((this.service = e), (this.serviceName = t), (this.errors = n));
    }
    create(e, ...t) {
      let n = t[0] || {},
        r = `${this.service}/${e}`,
        i = this.errors[e],
        a = i ? Fu(i, n) : `Error`;
      return new Nu(r, `${this.serviceName}: ${a} (${r}).`, n);
    }
  };
function Fu(e, t) {
  return e.replace(Iu, (e, n) => {
    let r = t[n];
    return r == null ? `<${n}?>` : String(r);
  });
}
var Iu = /\{\$([^}]+)}/g;
function Lu(e) {
  for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function Ru(e, t) {
  if (e === t) return !0;
  let n = Object.keys(e),
    r = Object.keys(t);
  for (let i of n) {
    if (!r.includes(i)) return !1;
    let n = e[i],
      a = t[i];
    if (zu(n) && zu(a)) {
      if (!Ru(n, a)) return !1;
    } else if (n !== a) return !1;
  }
  for (let e of r) if (!n.includes(e)) return !1;
  return !0;
}
function zu(e) {
  return typeof e == `object` && !!e;
}
function Bu(e) {
  let t = [];
  for (let [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((e) => {
          t.push(encodeURIComponent(n) + `=` + encodeURIComponent(e));
        })
      : t.push(encodeURIComponent(n) + `=` + encodeURIComponent(r));
  return t.length ? `&` + t.join(`&`) : ``;
}
function Vu(e) {
  let t = {};
  return (
    e
      .replace(/^\?/, ``)
      .split(`&`)
      .forEach((e) => {
        if (e) {
          let [n, r] = e.split(`=`);
          t[decodeURIComponent(n)] = decodeURIComponent(r);
        }
      }),
    t
  );
}
function Hu(e) {
  let t = e.indexOf(`?`);
  if (!t) return ``;
  let n = e.indexOf(`#`, t);
  return e.substring(t, n > 0 ? n : void 0);
}
function Uu(e, t) {
  let n = new Wu(e, t);
  return n.subscribe.bind(n);
}
var Wu = class {
  constructor(e, t) {
    ((this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = t),
      this.task
        .then(() => {
          e(this);
        })
        .catch((e) => {
          this.error(e);
        }));
  }
  next(e) {
    this.forEachObserver((t) => {
      t.next(e);
    });
  }
  error(e) {
    (this.forEachObserver((t) => {
      t.error(e);
    }),
      this.close(e));
  }
  complete() {
    (this.forEachObserver((e) => {
      e.complete();
    }),
      this.close());
  }
  subscribe(e, t, n) {
    let r;
    if (e === void 0 && t === void 0 && n === void 0)
      throw Error(`Missing Observer.`);
    ((r = Gu(e, [`next`, `error`, `complete`])
      ? e
      : { next: e, error: t, complete: n }),
      r.next === void 0 && (r.next = Ku),
      r.error === void 0 && (r.error = Ku),
      r.complete === void 0 && (r.complete = Ku));
    let i = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? r.error(this.finalError) : r.complete();
          } catch {}
        }),
      this.observers.push(r),
      i
    );
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      --this.observerCount,
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
  }
  sendOne(e, t) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          t(this.observers[e]);
        } catch (e) {
          typeof console < `u` && console.error && console.error(e);
        }
    });
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        ((this.observers = void 0), (this.onNoObservers = void 0));
      }));
  }
};
function Gu(e, t) {
  if (typeof e != `object` || !e) return !1;
  for (let n of t) if (n in e && typeof e[n] == `function`) return !0;
  return !1;
}
function Ku() {}
function qu(e) {
  return e && e._delegate ? e._delegate : e;
}
function Y(e) {
  try {
    return (
      e.startsWith(`http://`) || e.startsWith(`https://`)
        ? new URL(e).hostname
        : e
    ).endsWith(`.cloudworkstations.dev`);
  } catch {
    return !1;
  }
}
async function Ju(e) {
  return (await fetch(e, { credentials: `include` })).ok;
}
var Yu = class {
    constructor(e, t, n) {
      ((this.name = e),
        (this.instanceFactory = t),
        (this.type = n),
        (this.multipleInstances = !1),
        (this.serviceProps = {}),
        (this.instantiationMode = `LAZY`),
        (this.onInstanceCreated = null));
    }
    setInstantiationMode(e) {
      return ((this.instantiationMode = e), this);
    }
    setMultipleInstances(e) {
      return ((this.multipleInstances = e), this);
    }
    setServiceProps(e) {
      return ((this.serviceProps = e), this);
    }
    setInstanceCreatedCallback(e) {
      return ((this.onInstanceCreated = e), this);
    }
  },
  Xu = `[DEFAULT]`,
  Zu = class {
    constructor(e, t) {
      ((this.name = e),
        (this.container = t),
        (this.component = null),
        (this.instances = new Map()),
        (this.instancesDeferred = new Map()),
        (this.instancesOptions = new Map()),
        (this.onInitCallbacks = new Map()));
    }
    get(e) {
      let t = this.normalizeInstanceIdentifier(e);
      if (!this.instancesDeferred.has(t)) {
        let e = new Cu();
        if (
          (this.instancesDeferred.set(t, e),
          this.isInitialized(t) || this.shouldAutoInitialize())
        )
          try {
            let n = this.getOrInitializeService({ instanceIdentifier: t });
            n && e.resolve(n);
          } catch {}
      }
      return this.instancesDeferred.get(t).promise;
    }
    getImmediate(e) {
      let t = this.normalizeInstanceIdentifier(e?.identifier),
        n = e?.optional ?? !1;
      if (this.isInitialized(t) || this.shouldAutoInitialize())
        try {
          return this.getOrInitializeService({ instanceIdentifier: t });
        } catch (e) {
          if (n) return null;
          throw e;
        }
      else if (n) return null;
      else throw Error(`Service ${this.name} is not available`);
    }
    getComponent() {
      return this.component;
    }
    setComponent(e) {
      if (e.name !== this.name)
        throw Error(
          `Mismatching Component ${e.name} for Provider ${this.name}.`,
        );
      if (this.component)
        throw Error(`Component for ${this.name} has already been provided`);
      if (((this.component = e), this.shouldAutoInitialize())) {
        if ($u(e))
          try {
            this.getOrInitializeService({ instanceIdentifier: Xu });
          } catch {}
        for (let [e, t] of this.instancesDeferred.entries()) {
          let n = this.normalizeInstanceIdentifier(e);
          try {
            let e = this.getOrInitializeService({ instanceIdentifier: n });
            t.resolve(e);
          } catch {}
        }
      }
    }
    clearInstance(e = Xu) {
      (this.instancesDeferred.delete(e),
        this.instancesOptions.delete(e),
        this.instances.delete(e));
    }
    async delete() {
      let e = Array.from(this.instances.values());
      await Promise.all([
        ...e.filter((e) => `INTERNAL` in e).map((e) => e.INTERNAL.delete()),
        ...e.filter((e) => `_delete` in e).map((e) => e._delete()),
      ]);
    }
    isComponentSet() {
      return this.component != null;
    }
    isInitialized(e = Xu) {
      return this.instances.has(e);
    }
    getOptions(e = Xu) {
      return this.instancesOptions.get(e) || {};
    }
    initialize(e = {}) {
      let { options: t = {} } = e,
        n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
      if (this.isInitialized(n))
        throw Error(`${this.name}(${n}) has already been initialized`);
      if (!this.isComponentSet())
        throw Error(`Component ${this.name} has not been registered yet`);
      let r = this.getOrInitializeService({
        instanceIdentifier: n,
        options: t,
      });
      for (let [e, t] of this.instancesDeferred.entries())
        n === this.normalizeInstanceIdentifier(e) && t.resolve(r);
      return r;
    }
    onInit(e, t) {
      let n = this.normalizeInstanceIdentifier(t),
        r = this.onInitCallbacks.get(n) ?? new Set();
      (r.add(e), this.onInitCallbacks.set(n, r));
      let i = this.instances.get(n);
      return (
        i && e(i, n),
        () => {
          r.delete(e);
        }
      );
    }
    invokeOnInitCallbacks(e, t) {
      let n = this.onInitCallbacks.get(t);
      if (n)
        for (let r of n)
          try {
            r(e, t);
          } catch {}
    }
    getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
      let n = this.instances.get(e);
      if (
        !n &&
        this.component &&
        ((n = this.component.instanceFactory(this.container, {
          instanceIdentifier: Qu(e),
          options: t,
        })),
        this.instances.set(e, n),
        this.instancesOptions.set(e, t),
        this.invokeOnInitCallbacks(n, e),
        this.component.onInstanceCreated)
      )
        try {
          this.component.onInstanceCreated(this.container, e, n);
        } catch {}
      return n || null;
    }
    normalizeInstanceIdentifier(e = Xu) {
      return this.component ? (this.component.multipleInstances ? e : Xu) : e;
    }
    shouldAutoInitialize() {
      return (
        !!this.component && this.component.instantiationMode !== `EXPLICIT`
      );
    }
  };
function Qu(e) {
  return e === Xu ? void 0 : e;
}
function $u(e) {
  return e.instantiationMode === `EAGER`;
}
var ed = class {
    constructor(e) {
      ((this.name = e), (this.providers = new Map()));
    }
    addComponent(e) {
      let t = this.getProvider(e.name);
      if (t.isComponentSet())
        throw Error(
          `Component ${e.name} has already been registered with ${this.name}`,
        );
      t.setComponent(e);
    }
    addOrOverwriteComponent(e) {
      (this.getProvider(e.name).isComponentSet() &&
        this.providers.delete(e.name),
        this.addComponent(e));
    }
    getProvider(e) {
      if (this.providers.has(e)) return this.providers.get(e);
      let t = new Zu(e, this);
      return (this.providers.set(e, t), t);
    }
    getProviders() {
      return Array.from(this.providers.values());
    }
  },
  td = [],
  X;
(function (e) {
  ((e[(e.DEBUG = 0)] = `DEBUG`),
    (e[(e.VERBOSE = 1)] = `VERBOSE`),
    (e[(e.INFO = 2)] = `INFO`),
    (e[(e.WARN = 3)] = `WARN`),
    (e[(e.ERROR = 4)] = `ERROR`),
    (e[(e.SILENT = 5)] = `SILENT`));
})((X ||= {}));
var nd = {
    debug: X.DEBUG,
    verbose: X.VERBOSE,
    info: X.INFO,
    warn: X.WARN,
    error: X.ERROR,
    silent: X.SILENT,
  },
  rd = X.INFO,
  id = {
    [X.DEBUG]: `log`,
    [X.VERBOSE]: `log`,
    [X.INFO]: `info`,
    [X.WARN]: `warn`,
    [X.ERROR]: `error`,
  },
  ad = (e, t, ...n) => {
    if (t < e.logLevel) return;
    let r = new Date().toISOString(),
      i = id[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw Error(
        `Attempted to log a message with an invalid logType (value: ${t})`,
      );
  },
  od = class {
    constructor(e) {
      ((this.name = e),
        (this._logLevel = rd),
        (this._logHandler = ad),
        (this._userLogHandler = null),
        td.push(this));
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(e) {
      if (!(e in X))
        throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
      this._logLevel = e;
    }
    setLogLevel(e) {
      this._logLevel = typeof e == `string` ? nd[e] : e;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(e) {
      if (typeof e != `function`)
        throw TypeError("Value assigned to `logHandler` must be a function");
      this._logHandler = e;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(e) {
      this._userLogHandler = e;
    }
    debug(...e) {
      (this._userLogHandler && this._userLogHandler(this, X.DEBUG, ...e),
        this._logHandler(this, X.DEBUG, ...e));
    }
    log(...e) {
      (this._userLogHandler && this._userLogHandler(this, X.VERBOSE, ...e),
        this._logHandler(this, X.VERBOSE, ...e));
    }
    info(...e) {
      (this._userLogHandler && this._userLogHandler(this, X.INFO, ...e),
        this._logHandler(this, X.INFO, ...e));
    }
    warn(...e) {
      (this._userLogHandler && this._userLogHandler(this, X.WARN, ...e),
        this._logHandler(this, X.WARN, ...e));
    }
    error(...e) {
      (this._userLogHandler && this._userLogHandler(this, X.ERROR, ...e),
        this._logHandler(this, X.ERROR, ...e));
    }
  },
  sd = (e, t) => t.some((t) => e instanceof t),
  cd,
  ld;
function ud() {
  return (cd ||= [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction,
  ]);
}
function dd() {
  return (ld ||= [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey,
  ]);
}
var fd = new WeakMap(),
  pd = new WeakMap(),
  md = new WeakMap(),
  hd = new WeakMap(),
  gd = new WeakMap();
function _d(e) {
  let t = new Promise((t, n) => {
    let r = () => {
        (e.removeEventListener(`success`, i),
          e.removeEventListener(`error`, a));
      },
      i = () => {
        (t(Sd(e.result)), r());
      },
      a = () => {
        (n(e.error), r());
      };
    (e.addEventListener(`success`, i), e.addEventListener(`error`, a));
  });
  return (
    t
      .then((t) => {
        t instanceof IDBCursor && fd.set(t, e);
      })
      .catch(() => {}),
    gd.set(t, e),
    t
  );
}
function vd(e) {
  if (pd.has(e)) return;
  let t = new Promise((t, n) => {
    let r = () => {
        (e.removeEventListener(`complete`, i),
          e.removeEventListener(`error`, a),
          e.removeEventListener(`abort`, a));
      },
      i = () => {
        (t(), r());
      },
      a = () => {
        (n(e.error || new DOMException(`AbortError`, `AbortError`)), r());
      };
    (e.addEventListener(`complete`, i),
      e.addEventListener(`error`, a),
      e.addEventListener(`abort`, a));
  });
  pd.set(e, t);
}
var yd = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === `done`) return pd.get(e);
      if (t === `objectStoreNames`) return e.objectStoreNames || md.get(e);
      if (t === `store`)
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return Sd(e[t]);
  },
  set(e, t, n) {
    return ((e[t] = n), !0);
  },
  has(e, t) {
    return (
      (e instanceof IDBTransaction && (t === `done` || t === `store`)) || t in e
    );
  },
};
function bd(e) {
  yd = e(yd);
}
function xd(e) {
  return e === IDBDatabase.prototype.transaction &&
    !(`objectStoreNames` in IDBTransaction.prototype)
    ? function (t, ...n) {
        let r = e.call(Cd(this), t, ...n);
        return (md.set(r, t.sort ? t.sort() : [t]), Sd(r));
      }
    : dd().includes(e)
      ? function (...t) {
          return (e.apply(Cd(this), t), Sd(fd.get(this)));
        }
      : function (...t) {
          return Sd(e.apply(Cd(this), t));
        };
}
function Z(e) {
  return typeof e == `function`
    ? xd(e)
    : (e instanceof IDBTransaction && vd(e),
      sd(e, ud()) ? new Proxy(e, yd) : e);
}
function Sd(e) {
  if (e instanceof IDBRequest) return _d(e);
  if (hd.has(e)) return hd.get(e);
  let t = Z(e);
  return (t !== e && (hd.set(e, t), gd.set(t, e)), t);
}
var Cd = (e) => gd.get(e);
function wd(e, t, { blocked: n, upgrade: r, blocking: i, terminated: a } = {}) {
  let o = indexedDB.open(e, t),
    s = Sd(o);
  return (
    r &&
      o.addEventListener(`upgradeneeded`, (e) => {
        r(Sd(o.result), e.oldVersion, e.newVersion, Sd(o.transaction), e);
      }),
    n && o.addEventListener(`blocked`, (e) => n(e.oldVersion, e.newVersion, e)),
    s
      .then((e) => {
        (a && e.addEventListener(`close`, () => a()),
          i &&
            e.addEventListener(`versionchange`, (e) =>
              i(e.oldVersion, e.newVersion, e),
            ));
      })
      .catch(() => {}),
    s
  );
}
var Td = [`get`, `getKey`, `getAll`, `getAllKeys`, `count`],
  Ed = [`put`, `add`, `delete`, `clear`],
  Dd = new Map();
function Od(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == `string`)) return;
  if (Dd.get(t)) return Dd.get(t);
  let n = t.replace(/FromIndex$/, ``),
    r = t !== n,
    i = Ed.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || Td.includes(n))
  )
    return;
  let a = async function (e, ...t) {
    let a = this.transaction(e, i ? `readwrite` : `readonly`),
      o = a.store;
    return (
      r && (o = o.index(t.shift())),
      (await Promise.all([o[n](...t), i && a.done]))[0]
    );
  };
  return (Dd.set(t, a), a);
}
bd((e) => ({
  ...e,
  get: (t, n, r) => Od(t, n) || e.get(t, n, r),
  has: (t, n) => !!Od(t, n) || e.has(t, n),
}));
var kd = class {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((e) => {
        if (Ad(e)) {
          let t = e.getImmediate();
          return `${t.library}/${t.version}`;
        } else return null;
      })
      .filter((e) => e)
      .join(` `);
  }
};
function Ad(e) {
  return e.getComponent()?.type === `VERSION`;
}
var jd = `@firebase/app`,
  Md = `0.15.1`,
  Nd = new od(`@firebase/app`),
  Pd = `@firebase/app-compat`,
  Q = `@firebase/analytics-compat`,
  Fd = `@firebase/analytics`,
  Id = `@firebase/app-check-compat`,
  Ld = `@firebase/app-check`,
  Rd = `@firebase/auth`,
  zd = `@firebase/auth-compat`,
  Bd = `@firebase/database`,
  Vd = `@firebase/data-connect`,
  Hd = `@firebase/database-compat`,
  Ud = `@firebase/functions`,
  Wd = `@firebase/functions-compat`,
  Gd = `@firebase/installations`,
  Kd = `@firebase/installations-compat`,
  qd = `@firebase/messaging`,
  Jd = `@firebase/messaging-compat`,
  Yd = `@firebase/performance`,
  Xd = `@firebase/performance-compat`,
  Zd = `@firebase/remote-config`,
  Qd = `@firebase/remote-config-compat`,
  $d = `@firebase/storage`,
  ef = `@firebase/storage-compat`,
  tf = `@firebase/firestore`,
  nf = `@firebase/ai`,
  rf = `@firebase/firestore-compat`,
  af = `firebase`,
  of = `12.16.0`,
  sf = `[DEFAULT]`,
  cf = {
    [jd]: `fire-core`,
    [Pd]: `fire-core-compat`,
    [Fd]: `fire-analytics`,
    [Q]: `fire-analytics-compat`,
    [Ld]: `fire-app-check`,
    [Id]: `fire-app-check-compat`,
    [Rd]: `fire-auth`,
    [zd]: `fire-auth-compat`,
    [Bd]: `fire-rtdb`,
    [Vd]: `fire-data-connect`,
    [Hd]: `fire-rtdb-compat`,
    [Ud]: `fire-fn`,
    [Wd]: `fire-fn-compat`,
    [Gd]: `fire-iid`,
    [Kd]: `fire-iid-compat`,
    [qd]: `fire-fcm`,
    [Jd]: `fire-fcm-compat`,
    [Yd]: `fire-perf`,
    [Xd]: `fire-perf-compat`,
    [Zd]: `fire-rc`,
    [Qd]: `fire-rc-compat`,
    [$d]: `fire-gcs`,
    [ef]: `fire-gcs-compat`,
    [tf]: `fire-fst`,
    [rf]: `fire-fst-compat`,
    [nf]: `fire-vertex`,
    "fire-js": `fire-js`,
    [af]: `fire-js-all`,
  },
  lf = new Map(),
  uf = new Map(),
  df = new Map();
function ff(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    Nd.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n,
    );
  }
}
function pf(e) {
  let t = e.name;
  if (df.has(t))
    return (
      Nd.debug(`There were multiple attempts to register component ${t}.`),
      !1
    );
  df.set(t, e);
  for (let t of lf.values()) ff(t, e);
  for (let t of uf.values()) ff(t, e);
  return !0;
}
function mf(e, t) {
  let n = e.container.getProvider(`heartbeat`).getImmediate({ optional: !0 });
  return (n && n.triggerHeartbeat(), e.container.getProvider(t));
}
function hf(e) {
  return e != null && e.settings !== void 0;
}
var gf = new Pu(`app`, `Firebase`, {
    "no-app": `No Firebase App '{$appName}' has been created - call initializeApp() first`,
    "bad-app-name": `Illegal App name: '{$appName}'`,
    "duplicate-app": `Firebase App named '{$appName}' already exists with different options or config`,
    "app-deleted": `Firebase App named '{$appName}' already deleted`,
    "server-app-deleted": `Firebase Server App has been deleted`,
    "no-options": `Need to provide options, when not being deployed to hosting via source.`,
    "invalid-app-argument": `firebase.{$appName}() takes either no argument or a Firebase App instance.`,
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open": `Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.`,
    "idb-get": `Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.`,
    "idb-set": `Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.`,
    "idb-delete": `Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.`,
    "finalization-registry-not-supported": `FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.`,
    "invalid-server-app-environment": `FirebaseServerApp is not for use in browser environments.`,
  }),
  _f = class {
    constructor(e, t, n) {
      ((this._isDeleted = !1),
        (this._options = { ...e }),
        (this._config = { ...t }),
        (this._name = t.name),
        (this._automaticDataCollectionEnabled =
          t.automaticDataCollectionEnabled),
        (this._container = n),
        this.container.addComponent(new Yu(`app`, () => this, `PUBLIC`)));
    }
    get automaticDataCollectionEnabled() {
      return (this.checkDestroyed(), this._automaticDataCollectionEnabled);
    }
    set automaticDataCollectionEnabled(e) {
      (this.checkDestroyed(), (this._automaticDataCollectionEnabled = e));
    }
    get name() {
      return (this.checkDestroyed(), this._name);
    }
    get options() {
      return (this.checkDestroyed(), this._options);
    }
    get config() {
      return (this.checkDestroyed(), this._config);
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(e) {
      this._isDeleted = e;
    }
    checkDestroyed() {
      if (this.isDeleted)
        throw gf.create(`app-deleted`, { appName: this._name });
    }
  },
  vf = of;
function yf(e, t = {}) {
  let n = e;
  typeof t != `object` && (t = { name: t });
  let r = { name: sf, automaticDataCollectionEnabled: !0, ...t },
    i = r.name;
  if (typeof i != `string` || !i)
    throw gf.create(`bad-app-name`, { appName: String(i) });
  if (((n ||= xu()), !n)) throw gf.create(`no-options`);
  let a = lf.get(i);
  if (a) {
    if (Ru(n, a.options) && Ru(r, a.config)) return a;
    throw gf.create(`duplicate-app`, { appName: i });
  }
  let o = new ed(i);
  for (let e of df.values()) o.addComponent(e);
  let s = new _f(n, r, o);
  return (lf.set(i, s), s);
}
function bf(e = sf) {
  let t = lf.get(e);
  if (!t && e === `[DEFAULT]` && xu()) return yf();
  if (!t) throw gf.create(`no-app`, { appName: e });
  return t;
}
function xf() {
  return Array.from(lf.values());
}
function Sf(e, t, n) {
  let r = cf[e] ?? e;
  n && (r += `-${n}`);
  let i = r.match(/\s|\//),
    a = t.match(/\s|\//);
  if (i || a) {
    let e = [`Unable to register library "${r}" with version "${t}":`];
    (i &&
      e.push(
        `library name "${r}" contains illegal characters (whitespace or "/")`,
      ),
      i && a && e.push(`and`),
      a &&
        e.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`,
        ),
      Nd.warn(e.join(` `)));
    return;
  }
  pf(new Yu(`${r}-version`, () => ({ library: r, version: t }), `VERSION`));
}
var Cf = `firebase-heartbeat-database`,
  wf = 1,
  Tf = `firebase-heartbeat-store`,
  Ef = null;
function Df() {
  return (
    (Ef ||= wd(Cf, wf, {
      upgrade: (e, t) => {
        switch (t) {
          case 0:
            try {
              e.createObjectStore(Tf);
            } catch (e) {
              console.warn(e);
            }
        }
      },
    }).catch((e) => {
      throw gf.create(`idb-open`, { originalErrorMessage: e.message });
    })),
    Ef
  );
}
async function Of(e) {
  try {
    let t = (await Df()).transaction(Tf),
      n = await t.objectStore(Tf).get(Af(e));
    return (await t.done, n);
  } catch (e) {
    if (e instanceof Nu) Nd.warn(e.message);
    else {
      let t = gf.create(`idb-get`, { originalErrorMessage: e?.message });
      Nd.warn(t.message);
    }
  }
}
async function kf(e, t) {
  try {
    let n = (await Df()).transaction(Tf, `readwrite`);
    (await n.objectStore(Tf).put(t, Af(e)), await n.done);
  } catch (e) {
    if (e instanceof Nu) Nd.warn(e.message);
    else {
      let t = gf.create(`idb-set`, { originalErrorMessage: e?.message });
      Nd.warn(t.message);
    }
  }
}
function Af(e) {
  return `${e.name}!${e.options.appId}`;
}
var jf = 1024,
  Mf = 30,
  Nf = class {
    constructor(e) {
      ((this.container = e), (this._heartbeatsCache = null));
      let t = this.container.getProvider(`app`).getImmediate();
      ((this._storage = new If(t)),
        (this._heartbeatsCachePromise = this._storage
          .read()
          .then((e) => ((this._heartbeatsCache = e), e))));
    }
    async triggerHeartbeat() {
      try {
        let e = this.container
            .getProvider(`platform-logger`)
            .getImmediate()
            .getPlatformInfoString(),
          t = Pf();
        if (
          (this._heartbeatsCache?.heartbeats == null &&
            ((this._heartbeatsCache = await this._heartbeatsCachePromise),
            this._heartbeatsCache?.heartbeats == null)) ||
          this._heartbeatsCache.lastSentHeartbeatDate === t ||
          this._heartbeatsCache.heartbeats.some((e) => e.date === t)
        )
          return;
        if (
          (this._heartbeatsCache.heartbeats.push({ date: t, agent: e }),
          this._heartbeatsCache.heartbeats.length > Mf)
        ) {
          let e = Rf(this._heartbeatsCache.heartbeats);
          this._heartbeatsCache.heartbeats.splice(e, 1);
        }
        return this._storage.overwrite(this._heartbeatsCache);
      } catch (e) {
        Nd.warn(e);
      }
    }
    async getHeartbeatsHeader() {
      try {
        if (
          (this._heartbeatsCache === null &&
            (await this._heartbeatsCachePromise),
          this._heartbeatsCache?.heartbeats == null ||
            this._heartbeatsCache.heartbeats.length === 0)
        )
          return ``;
        let e = Pf(),
          { heartbeatsToSend: t, unsentEntries: n } = Ff(
            this._heartbeatsCache.heartbeats,
          ),
          r = pu(JSON.stringify({ version: 2, heartbeats: t }));
        return (
          (this._heartbeatsCache.lastSentHeartbeatDate = e),
          n.length > 0
            ? ((this._heartbeatsCache.heartbeats = n),
              await this._storage.overwrite(this._heartbeatsCache))
            : ((this._heartbeatsCache.heartbeats = []),
              this._storage.overwrite(this._heartbeatsCache)),
          r
        );
      } catch (e) {
        return (Nd.warn(e), ``);
      }
    }
  };
function Pf() {
  return new Date().toISOString().substring(0, 10);
}
function Ff(e, t = jf) {
  let n = [],
    r = e.slice();
  for (let i of e) {
    let e = n.find((e) => e.agent === i.agent);
    if (!e) {
      if ((n.push({ agent: i.agent, dates: [i.date] }), Lf(n) > t)) {
        n.pop();
        break;
      }
    } else if ((e.dates.push(i.date), Lf(n) > t)) {
      e.dates.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
var If = class {
  constructor(e) {
    ((this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()));
  }
  async runIndexedDBEnvironmentCheck() {
    return Au()
      ? ju()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      let e = await Of(this.app);
      return e?.heartbeats ? e : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(e) {
    if (await this._canUseIndexedDBPromise) {
      let t = await this.read();
      return kf(this.app, {
        lastSentHeartbeatDate:
          e.lastSentHeartbeatDate ?? t.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    if (await this._canUseIndexedDBPromise) {
      let t = await this.read();
      return kf(this.app, {
        lastSentHeartbeatDate:
          e.lastSentHeartbeatDate ?? t.lastSentHeartbeatDate,
        heartbeats: [...t.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
};
function Lf(e) {
  return pu(JSON.stringify({ version: 2, heartbeats: e })).length;
}
function Rf(e) {
  if (e.length === 0) return -1;
  let t = 0,
    n = e[0].date;
  for (let r = 1; r < e.length; r++)
    e[r].date < n && ((n = e[r].date), (t = r));
  return t;
}
function zf(e) {
  (pf(new Yu(`platform-logger`, (e) => new kd(e), `PRIVATE`)),
    pf(new Yu(`heartbeat`, (e) => new Nf(e), `PRIVATE`)),
    Sf(jd, Md, e),
    Sf(jd, Md, `esm2020`),
    Sf(`fire-js`, ``));
}
zf(``);
function Bf() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
var Vf = Bf,
  Hf = new Pu(`auth`, `Firebase`, Bf()),
  Uf = new od(`@firebase/auth`);
function Wf(e, ...t) {
  Uf.logLevel <= X.WARN && Uf.warn(`Auth (${vf}): ${e}`, ...t);
}
function Gf(e, ...t) {
  Uf.logLevel <= X.ERROR && Uf.error(`Auth (${vf}): ${e}`, ...t);
}
function Kf(e, ...t) {
  throw Zf(e, ...t);
}
function qf(e, ...t) {
  return Zf(e, ...t);
}
function Jf(e, t, n) {
  return new Pu(`auth`, `Firebase`, { ...Vf(), [t]: n }).create(t, {
    appName: e.name,
  });
}
function Yf(e) {
  return Jf(
    e,
    `operation-not-supported-in-this-environment`,
    `Operations that alter the current user are not supported in conjunction with FirebaseServerApp`,
  );
}
function Xf(e, t, n) {
  let r = n;
  if (!(t instanceof r))
    throw (
      r.name !== t.constructor.name && Kf(e, `argument-error`),
      Jf(
        e,
        `argument-error`,
        `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`,
      )
    );
}
function Zf(e, ...t) {
  if (typeof e != `string`) {
    let n = t[0],
      r = [...t.slice(1)];
    return (r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r));
  }
  return Hf.create(e, ...t);
}
function $(e, t, ...n) {
  if (!e) throw Zf(t, ...n);
}
function Qf(e) {
  let t = `INTERNAL ASSERTION FAILED: ` + e;
  throw (Gf(t), Error(t));
}
function $f(e, t) {
  e || Qf(t);
}
function ep() {
  return (typeof self < `u` && self.location?.href) || ``;
}
function tp() {
  return np() === `http:` || np() === `https:`;
}
function np() {
  return (typeof self < `u` && self.location?.protocol) || null;
}
function rp() {
  return typeof navigator < `u` &&
    navigator &&
    `onLine` in navigator &&
    typeof navigator.onLine == `boolean` &&
    (tp() || Du() || `connection` in navigator)
    ? navigator.onLine
    : !0;
}
function ip() {
  if (typeof navigator > `u`) return null;
  let e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
var ap = class {
  constructor(e, t) {
    ((this.shortDelay = e),
      (this.longDelay = t),
      $f(t > e, `Short delay should be less than long delay!`),
      (this.isMobile = Tu() || Ou()));
  }
  get() {
    return rp()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
};
function op(e, t) {
  $f(e.emulator, `Emulator should always be set here`);
  let { url: n } = e.emulator;
  return t ? `${n}${t.startsWith(`/`) ? t.slice(1) : t}` : n;
}
var sp = class {
    static initialize(e, t, n) {
      ((this.fetchImpl = e),
        t && (this.headersImpl = t),
        n && (this.responseImpl = n));
    }
    static fetch() {
      if (this.fetchImpl) return this.fetchImpl;
      if (typeof self < `u` && `fetch` in self) return self.fetch;
      if (typeof globalThis < `u` && globalThis.fetch) return globalThis.fetch;
      if (typeof fetch < `u`) return fetch;
      Qf(
        `Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`,
      );
    }
    static headers() {
      if (this.headersImpl) return this.headersImpl;
      if (typeof self < `u` && `Headers` in self) return self.Headers;
      if (typeof globalThis < `u` && globalThis.Headers)
        return globalThis.Headers;
      if (typeof Headers < `u`) return Headers;
      Qf(
        `Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`,
      );
    }
    static response() {
      if (this.responseImpl) return this.responseImpl;
      if (typeof self < `u` && `Response` in self) return self.Response;
      if (typeof globalThis < `u` && globalThis.Response)
        return globalThis.Response;
      if (typeof Response < `u`) return Response;
      Qf(
        `Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`,
      );
    }
  },
  cp = {
    CREDENTIAL_MISMATCH: `custom-token-mismatch`,
    MISSING_CUSTOM_TOKEN: `internal-error`,
    INVALID_IDENTIFIER: `invalid-email`,
    MISSING_CONTINUE_URI: `internal-error`,
    INVALID_PASSWORD: `wrong-password`,
    MISSING_PASSWORD: `missing-password`,
    INVALID_LOGIN_CREDENTIALS: `invalid-credential`,
    EMAIL_EXISTS: `email-already-in-use`,
    PASSWORD_LOGIN_DISABLED: `operation-not-allowed`,
    INVALID_IDP_RESPONSE: `invalid-credential`,
    INVALID_PENDING_TOKEN: `invalid-credential`,
    FEDERATED_USER_ID_ALREADY_LINKED: `credential-already-in-use`,
    MISSING_REQ_TYPE: `internal-error`,
    EMAIL_NOT_FOUND: `user-not-found`,
    RESET_PASSWORD_EXCEED_LIMIT: `too-many-requests`,
    EXPIRED_OOB_CODE: `expired-action-code`,
    INVALID_OOB_CODE: `invalid-action-code`,
    MISSING_OOB_CODE: `internal-error`,
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: `requires-recent-login`,
    INVALID_ID_TOKEN: `invalid-user-token`,
    TOKEN_EXPIRED: `user-token-expired`,
    USER_NOT_FOUND: `user-token-expired`,
    TOO_MANY_ATTEMPTS_TRY_LATER: `too-many-requests`,
    PASSWORD_DOES_NOT_MEET_REQUIREMENTS: `password-does-not-meet-requirements`,
    INVALID_CODE: `invalid-verification-code`,
    INVALID_SESSION_INFO: `invalid-verification-id`,
    INVALID_TEMPORARY_PROOF: `invalid-credential`,
    MISSING_SESSION_INFO: `missing-verification-id`,
    SESSION_EXPIRED: `code-expired`,
    MISSING_ANDROID_PACKAGE_NAME: `missing-android-pkg-name`,
    UNAUTHORIZED_DOMAIN: `unauthorized-continue-uri`,
    INVALID_OAUTH_CLIENT_ID: `invalid-oauth-client-id`,
    ADMIN_ONLY_OPERATION: `admin-restricted-operation`,
    INVALID_MFA_PENDING_CREDENTIAL: `invalid-multi-factor-session`,
    MFA_ENROLLMENT_NOT_FOUND: `multi-factor-info-not-found`,
    MISSING_MFA_ENROLLMENT_ID: `missing-multi-factor-info`,
    MISSING_MFA_PENDING_CREDENTIAL: `missing-multi-factor-session`,
    SECOND_FACTOR_EXISTS: `second-factor-already-in-use`,
    SECOND_FACTOR_LIMIT_EXCEEDED: `maximum-second-factor-count-exceeded`,
    BLOCKING_FUNCTION_ERROR_RESPONSE: `internal-error`,
    RECAPTCHA_NOT_ENABLED: `recaptcha-not-enabled`,
    MISSING_RECAPTCHA_TOKEN: `missing-recaptcha-token`,
    INVALID_RECAPTCHA_TOKEN: `invalid-recaptcha-token`,
    INVALID_RECAPTCHA_ACTION: `invalid-recaptcha-action`,
    MISSING_CLIENT_TYPE: `missing-client-type`,
    MISSING_RECAPTCHA_VERSION: `missing-recaptcha-version`,
    INVALID_RECAPTCHA_VERSION: `invalid-recaptcha-version`,
    INVALID_REQ_TYPE: `invalid-req-type`,
  },
  lp = [
    `/v1/accounts:signInWithCustomToken`,
    `/v1/accounts:signInWithEmailLink`,
    `/v1/accounts:signInWithIdp`,
    `/v1/accounts:signInWithPassword`,
    `/v1/accounts:signInWithPhoneNumber`,
    `/v1/token`,
  ],
  up = new ap(3e4, 6e4);
function dp(e, t) {
  return e.tenantId && !t.tenantId ? { ...t, tenantId: e.tenantId } : t;
}
async function fp(e, t, n, r, i = {}) {
  return pp(e, i, async () => {
    let i = {},
      a = {};
    r && (t === `GET` ? (a = r) : (i = { body: JSON.stringify(r) }));
    let o = Bu({ ...a, key: e.config.apiKey }).slice(1),
      s = await e._getAdditionalHeaders();
    ((s[`Content-Type`] = `application/json`),
      e.languageCode && (s[`X-Firebase-Locale`] = e.languageCode));
    let c = { method: t, headers: s, ...i };
    return (
      Eu() || (c.referrerPolicy = `strict-origin-when-cross-origin`),
      e.emulatorConfig &&
        Y(e.emulatorConfig.host) &&
        (c.credentials = `include`),
      sp.fetch()(await hp(e, e.config.apiHost, n, o), c)
    );
  });
}
async function pp(e, t, n) {
  e._canInitEmulator = !1;
  let r = { ...cp, ...t };
  try {
    let t = new _p(e),
      i = await Promise.race([n(), t.promise]);
    t.clearNetworkTimeout();
    let a = await i.json();
    if (`needConfirmation` in a)
      throw vp(e, `account-exists-with-different-credential`, a);
    if (i.ok && !(`errorMessage` in a)) return a;
    {
      let [t, n] = (i.ok ? a.errorMessage : a.error.message).split(` : `);
      if (t === `FEDERATED_USER_ID_ALREADY_LINKED`)
        throw vp(e, `credential-already-in-use`, a);
      if (t === `EMAIL_EXISTS`) throw vp(e, `email-already-in-use`, a);
      if (t === `USER_DISABLED`) throw vp(e, `user-disabled`, a);
      let o = r[t] || t.toLowerCase().replace(/[_\s]+/g, `-`);
      if (n) throw Jf(e, o, n);
      Kf(e, o);
    }
  } catch (t) {
    if (t instanceof Nu) throw t;
    Kf(e, `network-request-failed`, { message: String(t) });
  }
}
async function mp(e, t, n, r, i = {}) {
  let a = await fp(e, t, n, r, i);
  return (
    `mfaPendingCredential` in a &&
      Kf(e, `multi-factor-auth-required`, { _serverResponse: a }),
    a
  );
}
async function hp(e, t, n, r) {
  let i = `${t}${n}?${r}`,
    a = e,
    o = a.config.emulator ? op(e.config, i) : `${e.config.apiScheme}://${i}`;
  return lp.includes(n) &&
    (await a._persistenceManagerAvailable, a._getPersistenceType() === `COOKIE`)
    ? a._getPersistence()._getFinalTarget(o).toString()
    : o;
}
function gp(e) {
  switch (e) {
    case `ENFORCE`:
      return `ENFORCE`;
    case `AUDIT`:
      return `AUDIT`;
    case `OFF`:
      return `OFF`;
    default:
      return `ENFORCEMENT_STATE_UNSPECIFIED`;
  }
}
var _p = class {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(e) {
    ((this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((e, t) => {
        this.timer = setTimeout(
          () => t(qf(this.auth, `network-request-failed`)),
          up.get(),
        );
      })));
  }
};
function vp(e, t, n) {
  let r = { appName: e.name };
  (n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber));
  let i = qf(e, t, r);
  return ((i.customData._tokenResponse = n), i);
}
function yp(e) {
  return e !== void 0 && e.enterprise !== void 0;
}
var bp = class {
  constructor(e) {
    if (
      ((this.siteKey = ``),
      (this.recaptchaEnforcementState = []),
      e.recaptchaKey === void 0)
    )
      throw Error(`recaptchaKey undefined`);
    ((this.siteKey = e.recaptchaKey.split(`/`)[3]),
      (this.recaptchaEnforcementState = e.recaptchaEnforcementState));
  }
  getProviderEnforcementState(e) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (let t of this.recaptchaEnforcementState)
      if (t.provider && t.provider === e) return gp(t.enforcementState);
    return null;
  }
  isProviderEnabled(e) {
    return (
      this.getProviderEnforcementState(e) === `ENFORCE` ||
      this.getProviderEnforcementState(e) === `AUDIT`
    );
  }
  isAnyProviderEnabled() {
    return (
      this.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`) ||
      this.isProviderEnabled(`PHONE_PROVIDER`)
    );
  }
};
async function xp(e, t) {
  return fp(e, `GET`, `/v2/recaptchaConfig`, dp(e, t));
}
async function Sp(e, t) {
  return fp(e, `POST`, `/v1/accounts:delete`, t);
}
async function Cp(e, t) {
  return fp(e, `POST`, `/v1/accounts:lookup`, t);
}
function wp(e) {
  if (e)
    try {
      let t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function Tp(e, t = !1) {
  let n = qu(e),
    r = await n.getIdToken(t),
    i = Dp(r);
  $(i && i.exp && i.auth_time && i.iat, n.auth, `internal-error`);
  let a = typeof i.firebase == `object` ? i.firebase : void 0,
    o = a?.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: wp(Ep(i.auth_time)),
    issuedAtTime: wp(Ep(i.iat)),
    expirationTime: wp(Ep(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: a?.sign_in_second_factor || null,
  };
}
function Ep(e) {
  return Number(e) * 1e3;
}
function Dp(e) {
  let [t, n, r] = e.split(`.`);
  if (t === void 0 || n === void 0 || r === void 0)
    return (Gf(`JWT malformed, contained fewer than 3 sections`), null);
  try {
    let e = mu(n);
    return e
      ? JSON.parse(e)
      : (Gf(`Failed to decode base64 JWT payload`), null);
  } catch (e) {
    return (
      Gf(`Caught error parsing JWT payload as JSON`, e?.toString()),
      null
    );
  }
}
function Op(e) {
  let t = Dp(e);
  return (
    $(t, `internal-error`),
    $(t.exp !== void 0, `internal-error`),
    $(t.iat !== void 0, `internal-error`),
    Number(t.exp) - Number(t.iat)
  );
}
async function kp(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (t) {
    throw (
      t instanceof Nu &&
        Ap(t) &&
        e.auth.currentUser === e &&
        (await e.auth.signOut()),
      t
    );
  }
}
function Ap({ code: e }) {
  return e === `auth/user-disabled` || e === `auth/user-token-expired`;
}
var jp = class {
    constructor(e) {
      ((this.user = e),
        (this.isRunning = !1),
        (this.timerId = null),
        (this.errorBackoff = 3e4));
    }
    _start() {
      this.isRunning || ((this.isRunning = !0), this.schedule());
    }
    _stop() {
      this.isRunning &&
        ((this.isRunning = !1),
        this.timerId !== null && clearTimeout(this.timerId));
    }
    getInterval(e) {
      if (e) {
        let e = this.errorBackoff;
        return ((this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), e);
      } else {
        this.errorBackoff = 3e4;
        let e =
          (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
        return Math.max(0, e);
      }
    }
    schedule(e = !1) {
      if (!this.isRunning) return;
      let t = this.getInterval(e);
      this.timerId = setTimeout(async () => {
        await this.iteration();
      }, t);
    }
    async iteration() {
      try {
        await this.user.getIdToken(!0);
      } catch (e) {
        e?.code === `auth/network-request-failed` && this.schedule(!0);
        return;
      }
      this.schedule();
    }
  },
  Mp = class {
    constructor(e, t) {
      ((this.createdAt = e), (this.lastLoginAt = t), this._initializeTime());
    }
    _initializeTime() {
      ((this.lastSignInTime = wp(this.lastLoginAt)),
        (this.creationTime = wp(this.createdAt)));
    }
    _copy(e) {
      ((this.createdAt = e.createdAt),
        (this.lastLoginAt = e.lastLoginAt),
        this._initializeTime());
    }
    toJSON() {
      return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
    }
  };
async function Np(e) {
  let t = e.auth,
    n = await kp(e, Cp(t, { idToken: await e.getIdToken() }));
  $(n?.users.length, t, `internal-error`);
  let r = n.users[0];
  e._notifyReloadListener(r);
  let i = r.providerUserInfo?.length ? Ip(r.providerUserInfo) : [],
    a = Fp(e.providerData, i),
    o = e.isAnonymous,
    s = !(e.email && r.passwordHash) && !a?.length,
    c = o ? s : !1,
    l = {
      uid: r.localId,
      displayName: r.displayName || null,
      photoURL: r.photoUrl || null,
      email: r.email || null,
      emailVerified: r.emailVerified || !1,
      phoneNumber: r.phoneNumber || null,
      tenantId: r.tenantId || null,
      providerData: a,
      metadata: new Mp(r.createdAt, r.lastLoginAt),
      isAnonymous: c,
    };
  Object.assign(e, l);
}
async function Pp(e) {
  let t = qu(e);
  (await Np(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t));
}
function Fp(e, t) {
  return [
    ...e.filter((e) => !t.some((t) => t.providerId === e.providerId)),
    ...t,
  ];
}
function Ip(e) {
  return e.map(({ providerId: e, ...t }) => ({
    providerId: e,
    uid: t.rawId || ``,
    displayName: t.displayName || null,
    email: t.email || null,
    phoneNumber: t.phoneNumber || null,
    photoURL: t.photoUrl || null,
  }));
}
async function Lp(e, t) {
  let n = await pp(e, {}, async () => {
    let n = Bu({ grant_type: `refresh_token`, refresh_token: t }).slice(1),
      { tokenApiHost: r, apiKey: i } = e.config,
      a = await hp(e, r, `/v1/token`, `key=${i}`),
      o = await e._getAdditionalHeaders();
    o[`Content-Type`] = `application/x-www-form-urlencoded`;
    let s = { method: `POST`, headers: o, body: n };
    return (
      e.emulatorConfig &&
        Y(e.emulatorConfig.host) &&
        (s.credentials = `include`),
      sp.fetch()(a, s)
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
async function Rp(e, t) {
  return fp(e, `POST`, `/v2/accounts:revokeToken`, dp(e, t));
}
var zp = class e {
  constructor() {
    ((this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null));
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    ($(e.idToken, `internal-error`),
      $(e.idToken !== void 0, `internal-error`),
      $(e.refreshToken !== void 0, `internal-error`));
    let t =
      `expiresIn` in e && e.expiresIn !== void 0
        ? Number(e.expiresIn)
        : Op(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
  }
  updateFromIdToken(e) {
    $(e.length !== 0, `internal-error`);
    let t = Op(e);
    this.updateTokensAndExpiration(e, null, t);
  }
  async getToken(e, t = !1) {
    return !t && this.accessToken && !this.isExpired
      ? this.accessToken
      : ($(this.refreshToken, e, `user-token-expired`),
        this.refreshToken
          ? (await this.refresh(e, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, t) {
    let { accessToken: n, refreshToken: r, expiresIn: i } = await Lp(e, t);
    this.updateTokensAndExpiration(n, r, Number(i));
  }
  updateTokensAndExpiration(e, t, n) {
    ((this.refreshToken = t || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + n * 1e3));
  }
  static fromJSON(t, n) {
    let { refreshToken: r, accessToken: i, expirationTime: a } = n,
      o = new e();
    return (
      r &&
        ($(typeof r == `string`, `internal-error`, { appName: t }),
        (o.refreshToken = r)),
      i &&
        ($(typeof i == `string`, `internal-error`, { appName: t }),
        (o.accessToken = i)),
      a &&
        ($(typeof a == `number`, `internal-error`, { appName: t }),
        (o.expirationTime = a)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(e) {
    ((this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime));
  }
  _clone() {
    return Object.assign(new e(), this.toJSON());
  }
  _performRefresh() {
    return Qf(`not implemented`);
  }
};
function Bp(e, t) {
  $(typeof e == `string` || e === void 0, `internal-error`, { appName: t });
}
var Vp = class e {
    constructor({ uid: e, auth: t, stsTokenManager: n, ...r }) {
      ((this.providerId = `firebase`),
        (this.proactiveRefresh = new jp(this)),
        (this.reloadUserInfo = null),
        (this.reloadListener = null),
        (this.uid = e),
        (this.auth = t),
        (this.stsTokenManager = n),
        (this.accessToken = n.accessToken),
        (this.displayName = r.displayName || null),
        (this.email = r.email || null),
        (this.emailVerified = r.emailVerified || !1),
        (this.phoneNumber = r.phoneNumber || null),
        (this.photoURL = r.photoURL || null),
        (this.isAnonymous = r.isAnonymous || !1),
        (this.tenantId = r.tenantId || null),
        (this.providerData = r.providerData ? [...r.providerData] : []),
        (this.metadata = new Mp(
          r.createdAt || void 0,
          r.lastLoginAt || void 0,
        )));
    }
    async getIdToken(e) {
      let t = await kp(this, this.stsTokenManager.getToken(this.auth, e));
      return (
        $(t, this.auth, `internal-error`),
        this.accessToken !== t &&
          ((this.accessToken = t),
          await this.auth._persistUserIfCurrent(this),
          this.auth._notifyListenersIfCurrent(this)),
        t
      );
    }
    getIdTokenResult(e) {
      return Tp(this, e);
    }
    reload() {
      return Pp(this);
    }
    _assign(e) {
      this !== e &&
        ($(this.uid === e.uid, this.auth, `internal-error`),
        (this.displayName = e.displayName),
        (this.photoURL = e.photoURL),
        (this.email = e.email),
        (this.emailVerified = e.emailVerified),
        (this.phoneNumber = e.phoneNumber),
        (this.isAnonymous = e.isAnonymous),
        (this.tenantId = e.tenantId),
        (this.providerData = e.providerData.map((e) => ({ ...e }))),
        this.metadata._copy(e.metadata),
        this.stsTokenManager._assign(e.stsTokenManager));
    }
    _clone(t) {
      let n = new e({
        ...this,
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      });
      return (n.metadata._copy(this.metadata), n);
    }
    _onReload(e) {
      ($(!this.reloadListener, this.auth, `internal-error`),
        (this.reloadListener = e),
        (this.reloadUserInfo &&=
          (this._notifyReloadListener(this.reloadUserInfo), null)));
    }
    _notifyReloadListener(e) {
      this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
    }
    _startProactiveRefresh() {
      this.proactiveRefresh._start();
    }
    _stopProactiveRefresh() {
      this.proactiveRefresh._stop();
    }
    async _updateTokensIfNecessary(e, t = !1) {
      let n = !1;
      (e.idToken &&
        e.idToken !== this.stsTokenManager.accessToken &&
        (this.stsTokenManager.updateFromServerResponse(e), (n = !0)),
        t && (await Np(this)),
        await this.auth._persistUserIfCurrent(this),
        n && this.auth._notifyListenersIfCurrent(this));
    }
    async delete() {
      if (hf(this.auth.app)) return Promise.reject(Yf(this.auth));
      let e = await this.getIdToken();
      return (
        await kp(this, Sp(this.auth, { idToken: e })),
        this.stsTokenManager.clearRefreshToken(),
        this.auth.signOut()
      );
    }
    toJSON() {
      return {
        uid: this.uid,
        email: this.email || void 0,
        emailVerified: this.emailVerified,
        displayName: this.displayName || void 0,
        isAnonymous: this.isAnonymous,
        photoURL: this.photoURL || void 0,
        phoneNumber: this.phoneNumber || void 0,
        tenantId: this.tenantId || void 0,
        providerData: this.providerData.map((e) => ({ ...e })),
        stsTokenManager: this.stsTokenManager.toJSON(),
        _redirectEventId: this._redirectEventId,
        ...this.metadata.toJSON(),
        apiKey: this.auth.config.apiKey,
        appName: this.auth.name,
      };
    }
    get refreshToken() {
      return this.stsTokenManager.refreshToken || ``;
    }
    static _fromJSON(t, n) {
      let r = n.displayName ?? void 0,
        i = n.email ?? void 0,
        a = n.phoneNumber ?? void 0,
        o = n.photoURL ?? void 0,
        s = n.tenantId ?? void 0,
        c = n._redirectEventId ?? void 0,
        l = n.createdAt ?? void 0,
        u = n.lastLoginAt ?? void 0,
        {
          uid: d,
          emailVerified: f,
          isAnonymous: p,
          providerData: m,
          stsTokenManager: h,
        } = n;
      $(d && h, t, `internal-error`);
      let g = zp.fromJSON(this.name, h);
      ($(typeof d == `string`, t, `internal-error`),
        Bp(r, t.name),
        Bp(i, t.name),
        $(typeof f == `boolean`, t, `internal-error`),
        $(typeof p == `boolean`, t, `internal-error`),
        Bp(a, t.name),
        Bp(o, t.name),
        Bp(s, t.name),
        Bp(c, t.name),
        Bp(l, t.name),
        Bp(u, t.name));
      let _ = new e({
        uid: d,
        auth: t,
        email: i,
        emailVerified: f,
        displayName: r,
        isAnonymous: p,
        photoURL: o,
        phoneNumber: a,
        tenantId: s,
        stsTokenManager: g,
        createdAt: l,
        lastLoginAt: u,
      });
      return (
        m && Array.isArray(m) && (_.providerData = m.map((e) => ({ ...e }))),
        c && (_._redirectEventId = c),
        _
      );
    }
    static async _fromIdTokenResponse(t, n, r = !1) {
      let i = new zp();
      i.updateFromServerResponse(n);
      let a = new e({
        uid: n.localId,
        auth: t,
        stsTokenManager: i,
        isAnonymous: r,
      });
      return (await Np(a), a);
    }
    static async _fromGetAccountInfoResponse(t, n, r) {
      let i = n.users[0];
      $(i.localId !== void 0, `internal-error`);
      let a = i.providerUserInfo === void 0 ? [] : Ip(i.providerUserInfo),
        o = !(i.email && i.passwordHash) && !a?.length,
        s = new zp();
      s.updateFromIdToken(r);
      let c = new e({
          uid: i.localId,
          auth: t,
          stsTokenManager: s,
          isAnonymous: o,
        }),
        l = {
          uid: i.localId,
          displayName: i.displayName || null,
          photoURL: i.photoUrl || null,
          email: i.email || null,
          emailVerified: i.emailVerified || !1,
          phoneNumber: i.phoneNumber || null,
          tenantId: i.tenantId || null,
          providerData: a,
          metadata: new Mp(i.createdAt, i.lastLoginAt),
          isAnonymous: !(i.email && i.passwordHash) && !a?.length,
        };
      return (Object.assign(c, l), c);
    }
  },
  Hp = new Map();
function Up(e) {
  $f(e instanceof Function, `Expected a class definition`);
  let t = Hp.get(e);
  return t
    ? ($f(t instanceof e, `Instance stored in cache mismatched with class`), t)
    : ((t = new e()), Hp.set(e, t), t);
}
var Wp = class {
  constructor() {
    ((this.type = `NONE`), (this.storage = {}));
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, t) {
    this.storage[e] = t;
  }
  async _get(e) {
    let t = this.storage[e];
    return t === void 0 ? null : t;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
};
Wp.type = `NONE`;
var Gp = Wp;
function Kp(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
var qp = class e {
  constructor(e, t, n) {
    ((this.persistence = e), (this.auth = t), (this.userKey = n));
    let { config: r, name: i } = this.auth;
    ((this.fullUserKey = Kp(this.userKey, r.apiKey, i)),
      (this.fullPersistenceKey = Kp(`persistence`, r.apiKey, i)),
      (this.boundEventHandler = t._onStorageEvent.bind(t)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler));
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    let e = await this.persistence._get(this.fullUserKey);
    if (!e) return null;
    if (typeof e == `string`) {
      let t = await Cp(this.auth, { idToken: e }).catch(() => void 0);
      return t ? Vp._fromGetAccountInfoResponse(this.auth, t, e) : null;
    }
    return Vp._fromJSON(this.auth, e);
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type,
    );
  }
  async setPersistence(e) {
    if (this.persistence === e) return;
    let t = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = e), t))
      return this.setCurrentUser(t);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = `authUser`) {
    if (!n.length) return new e(Up(Gp), t, r);
    let i = (
        await Promise.all(
          n.map(async (e) => {
            if (await e._isAvailable()) return e;
          }),
        )
      ).filter((e) => e),
      a = i[0] || Up(Gp),
      o = Kp(r, t.config.apiKey, t.name),
      s = null;
    for (let e of n)
      try {
        let n = await e._get(o);
        if (n) {
          let r;
          if (typeof n == `string`) {
            let e = await Cp(t, { idToken: n }).catch(() => void 0);
            if (!e) break;
            r = await Vp._fromGetAccountInfoResponse(t, e, n);
          } else r = Vp._fromJSON(t, n);
          (e !== a && (s = r), (a = e));
          break;
        }
      } catch {}
    let c = i.filter((e) => e._shouldAllowMigration);
    return !a._shouldAllowMigration || !c.length
      ? new e(a, t, r)
      : ((a = c[0]),
        s && (await a._set(o, s.toJSON())),
        await Promise.all(
          n.map(async (e) => {
            if (e !== a)
              try {
                await e._remove(o);
              } catch {}
          }),
        ),
        new e(a, t, r));
  }
};
function Jp(e) {
  let t = e.toLowerCase();
  if (t.includes(`opera/`) || t.includes(`opr/`) || t.includes(`opios/`))
    return `Opera`;
  if (Qp(t)) return `IEMobile`;
  if (t.includes(`msie`) || t.includes(`trident/`)) return `IE`;
  if (t.includes(`edge/`)) return `Edge`;
  if (Yp(t)) return `Firefox`;
  if (t.includes(`silk/`)) return `Silk`;
  if (em(t)) return `Blackberry`;
  if (tm(t)) return `Webos`;
  if (Xp(t)) return `Safari`;
  if ((t.includes(`chrome/`) || Zp(t)) && !t.includes(`edge/`)) return `Chrome`;
  if ($p(t)) return `Android`;
  {
    let t = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
    if (t?.length === 2) return t[1];
  }
  return `Other`;
}
function Yp(e = wu()) {
  return /firefox\//i.test(e);
}
function Xp(e = wu()) {
  let t = e.toLowerCase();
  return (
    t.includes(`safari/`) &&
    !t.includes(`chrome/`) &&
    !t.includes(`crios/`) &&
    !t.includes(`android`)
  );
}
function Zp(e = wu()) {
  return /crios\//i.test(e);
}
function Qp(e = wu()) {
  return /iemobile/i.test(e);
}
function $p(e = wu()) {
  return /android/i.test(e);
}
function em(e = wu()) {
  return /blackberry/i.test(e);
}
function tm(e = wu()) {
  return /webos/i.test(e);
}
function nm(e = wu()) {
  return (
    /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  );
}
function rm(e = wu()) {
  return nm(e) && !!window.navigator?.standalone;
}
function im() {
  return ku() && document.documentMode === 10;
}
function am(e = wu()) {
  return nm(e) || $p(e) || tm(e) || em(e) || /windows phone/i.test(e) || Qp(e);
}
function om(e, t = []) {
  let n;
  switch (e) {
    case `Browser`:
      n = Jp(wu());
      break;
    case `Worker`:
      n = `${Jp(wu())}-${e}`;
      break;
    default:
      n = e;
  }
  let r = t.length ? t.join(`,`) : `FirebaseCore-web`;
  return `${n}/JsCore/${vf}/${r}`;
}
var sm = class {
  constructor(e) {
    ((this.auth = e), (this.queue = []));
  }
  pushCallback(e, t) {
    let n = (t) =>
      new Promise((n, r) => {
        try {
          n(e(t));
        } catch (e) {
          r(e);
        }
      });
    ((n.onAbort = t), this.queue.push(n));
    let r = this.queue.length - 1;
    return () => {
      this.queue[r] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e) return;
    let t = [];
    try {
      for (let n of this.queue) (await n(e), n.onAbort && t.push(n.onAbort));
    } catch (e) {
      t.reverse();
      for (let e of t)
        try {
          e();
        } catch {}
      throw this.auth._errorFactory.create(`login-blocked`, {
        originalMessage: e?.message,
      });
    }
  }
};
async function cm(e, t = {}) {
  return fp(e, `GET`, `/v2/passwordPolicy`, dp(e, t));
}
var lm = 6,
  um = class {
    constructor(e) {
      let t = e.customStrengthOptions;
      ((this.customStrengthOptions = {}),
        (this.customStrengthOptions.minPasswordLength =
          t.minPasswordLength ?? lm),
        t.maxPasswordLength &&
          (this.customStrengthOptions.maxPasswordLength = t.maxPasswordLength),
        t.containsLowercaseCharacter !== void 0 &&
          (this.customStrengthOptions.containsLowercaseLetter =
            t.containsLowercaseCharacter),
        t.containsUppercaseCharacter !== void 0 &&
          (this.customStrengthOptions.containsUppercaseLetter =
            t.containsUppercaseCharacter),
        t.containsNumericCharacter !== void 0 &&
          (this.customStrengthOptions.containsNumericCharacter =
            t.containsNumericCharacter),
        t.containsNonAlphanumericCharacter !== void 0 &&
          (this.customStrengthOptions.containsNonAlphanumericCharacter =
            t.containsNonAlphanumericCharacter),
        (this.enforcementState = e.enforcementState),
        this.enforcementState === `ENFORCEMENT_STATE_UNSPECIFIED` &&
          (this.enforcementState = `OFF`),
        (this.allowedNonAlphanumericCharacters =
          e.allowedNonAlphanumericCharacters?.join(``) ?? ``),
        (this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1),
        (this.schemaVersion = e.schemaVersion));
    }
    validatePassword(e) {
      let t = { isValid: !0, passwordPolicy: this };
      return (
        this.validatePasswordLengthOptions(e, t),
        this.validatePasswordCharacterOptions(e, t),
        (t.isValid &&= t.meetsMinPasswordLength ?? !0),
        (t.isValid &&= t.meetsMaxPasswordLength ?? !0),
        (t.isValid &&= t.containsLowercaseLetter ?? !0),
        (t.isValid &&= t.containsUppercaseLetter ?? !0),
        (t.isValid &&= t.containsNumericCharacter ?? !0),
        (t.isValid &&= t.containsNonAlphanumericCharacter ?? !0),
        t
      );
    }
    validatePasswordLengthOptions(e, t) {
      let n = this.customStrengthOptions.minPasswordLength,
        r = this.customStrengthOptions.maxPasswordLength;
      (n && (t.meetsMinPasswordLength = e.length >= n),
        r && (t.meetsMaxPasswordLength = e.length <= r));
    }
    validatePasswordCharacterOptions(e, t) {
      this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
      let n;
      for (let r = 0; r < e.length; r++)
        ((n = e.charAt(r)),
          this.updatePasswordCharacterOptionsStatuses(
            t,
            n >= `a` && n <= `z`,
            n >= `A` && n <= `Z`,
            n >= `0` && n <= `9`,
            this.allowedNonAlphanumericCharacters.includes(n),
          ));
    }
    updatePasswordCharacterOptionsStatuses(e, t, n, r, i) {
      (this.customStrengthOptions.containsLowercaseLetter &&
        (e.containsLowercaseLetter ||= t),
        this.customStrengthOptions.containsUppercaseLetter &&
          (e.containsUppercaseLetter ||= n),
        this.customStrengthOptions.containsNumericCharacter &&
          (e.containsNumericCharacter ||= r),
        this.customStrengthOptions.containsNonAlphanumericCharacter &&
          (e.containsNonAlphanumericCharacter ||= i));
    }
  },
  dm = class {
    constructor(e, t, n, r) {
      ((this.app = e),
        (this.heartbeatServiceProvider = t),
        (this.appCheckServiceProvider = n),
        (this.config = r),
        (this.currentUser = null),
        (this.emulatorConfig = null),
        (this.operations = Promise.resolve()),
        (this.authStateSubscription = new pm(this)),
        (this.idTokenSubscription = new pm(this)),
        (this.beforeStateQueue = new sm(this)),
        (this.redirectUser = null),
        (this.isProactiveRefreshEnabled = !1),
        (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
        (this._canInitEmulator = !0),
        (this._isInitialized = !1),
        (this._deleted = !1),
        (this._initializationPromise = null),
        (this._popupRedirectResolver = null),
        (this._errorFactory = Hf),
        (this._agentRecaptchaConfig = null),
        (this._tenantRecaptchaConfigs = {}),
        (this._projectPasswordPolicy = null),
        (this._tenantPasswordPolicies = {}),
        (this._resolvePersistenceManagerAvailable = void 0),
        (this.lastNotifiedUid = void 0),
        (this.languageCode = null),
        (this.tenantId = null),
        (this.settings = { appVerificationDisabledForTesting: !1 }),
        (this.frameworks = []),
        (this.name = e.name),
        (this.clientVersion = r.sdkClientVersion),
        (this._persistenceManagerAvailable = new Promise(
          (e) => (this._resolvePersistenceManagerAvailable = e),
        )));
    }
    _initializeWithPersistence(e, t) {
      return (
        t && (this._popupRedirectResolver = Up(t)),
        (this._initializationPromise = this.queue(async () => {
          if (
            !this._deleted &&
            ((this.persistenceManager = await qp.create(this, e)),
            this._resolvePersistenceManagerAvailable?.(),
            !this._deleted)
          ) {
            if (this._popupRedirectResolver?._shouldInitProactively)
              try {
                await this._popupRedirectResolver._initialize(this);
              } catch {}
            (await this.initializeCurrentUser(t),
              (this.lastNotifiedUid = this.currentUser?.uid || null),
              !this._deleted && (this._isInitialized = !0));
          }
        })),
        this._initializationPromise
      );
    }
    async _onStorageEvent() {
      if (this._deleted) return;
      let e = await this.assertedPersistence.getCurrentUser();
      if (!(!this.currentUser && !e)) {
        if (this.currentUser && e && this.currentUser.uid === e.uid) {
          (this._currentUser._assign(e), await this.currentUser.getIdToken());
          return;
        }
        await this._updateCurrentUser(e, !0);
      }
    }
    async initializeCurrentUserFromIdToken(e) {
      try {
        let t = await Cp(this, { idToken: e }),
          n = await Vp._fromGetAccountInfoResponse(this, t, e);
        await this.directlySetCurrentUser(n);
      } catch (e) {
        (console.warn(
          `FirebaseServerApp could not login user with provided authIdToken: `,
          e,
        ),
          await this.directlySetCurrentUser(null));
      }
    }
    async initializeCurrentUser(e) {
      if (hf(this.app)) {
        let e = this.app.settings.authIdToken;
        return e
          ? new Promise((t) => {
              setTimeout(() =>
                this.initializeCurrentUserFromIdToken(e).then(t, t),
              );
            })
          : this.directlySetCurrentUser(null);
      }
      let t = await this.assertedPersistence.getCurrentUser(),
        n = t,
        r = !1;
      if (e && this.config.authDomain) {
        await this.getOrInitRedirectPersistenceManager();
        let t = this.redirectUser?._redirectEventId,
          i = n?._redirectEventId,
          a = await this.tryRedirectSignIn(e);
        (!t || t === i) && a?.user && ((n = a.user), (r = !0));
      }
      if (!n) return this.directlySetCurrentUser(null);
      if (!n._redirectEventId) {
        if (r)
          try {
            await this.beforeStateQueue.runMiddleware(n);
          } catch (e) {
            ((n = t),
              this._popupRedirectResolver._overrideRedirectResult(this, () =>
                Promise.reject(e),
              ));
          }
        return n
          ? this.reloadAndSetCurrentUserOrClear(n)
          : this.directlySetCurrentUser(null);
      }
      return (
        $(this._popupRedirectResolver, this, `argument-error`),
        await this.getOrInitRedirectPersistenceManager(),
        this.redirectUser &&
        this.redirectUser._redirectEventId === n._redirectEventId
          ? this.directlySetCurrentUser(n)
          : this.reloadAndSetCurrentUserOrClear(n)
      );
    }
    async tryRedirectSignIn(e) {
      let t = null;
      try {
        t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
      } catch {
        await this._setRedirectUser(null);
      }
      return t;
    }
    async reloadAndSetCurrentUserOrClear(e) {
      try {
        await Np(e);
      } catch (e) {
        if (e?.code !== `auth/network-request-failed`)
          return this.directlySetCurrentUser(null);
      }
      return this.directlySetCurrentUser(e);
    }
    useDeviceLanguage() {
      this.languageCode = ip();
    }
    async _delete() {
      this._deleted = !0;
    }
    async updateCurrentUser(e) {
      if (hf(this.app)) return Promise.reject(Yf(this));
      let t = e ? qu(e) : null;
      return (
        t &&
          $(
            t.auth.config.apiKey === this.config.apiKey,
            this,
            `invalid-user-token`,
          ),
        this._updateCurrentUser(t && t._clone(this))
      );
    }
    async _updateCurrentUser(e, t = !1) {
      if (!this._deleted)
        return (
          e && $(this.tenantId === e.tenantId, this, `tenant-id-mismatch`),
          t || (await this.beforeStateQueue.runMiddleware(e)),
          this.queue(async () => {
            (await this.directlySetCurrentUser(e), this.notifyAuthListeners());
          })
        );
    }
    async signOut() {
      return hf(this.app)
        ? Promise.reject(Yf(this))
        : (await this.beforeStateQueue.runMiddleware(null),
          (this.redirectPersistenceManager || this._popupRedirectResolver) &&
            (await this._setRedirectUser(null)),
          this._updateCurrentUser(null, !0));
    }
    setPersistence(e) {
      return hf(this.app)
        ? Promise.reject(Yf(this))
        : this.queue(async () => {
            await this.assertedPersistence.setPersistence(Up(e));
          });
    }
    _getRecaptchaConfig() {
      return this.tenantId == null
        ? this._agentRecaptchaConfig
        : this._tenantRecaptchaConfigs[this.tenantId];
    }
    async validatePassword(e) {
      this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
      let t = this._getPasswordPolicyInternal();
      return t.schemaVersion === this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
        ? t.validatePassword(e)
        : Promise.reject(
            this._errorFactory.create(
              `unsupported-password-policy-schema-version`,
              {},
            ),
          );
    }
    _getPasswordPolicyInternal() {
      return this.tenantId === null
        ? this._projectPasswordPolicy
        : this._tenantPasswordPolicies[this.tenantId];
    }
    async _updatePasswordPolicy() {
      let e = new um(await cm(this));
      this.tenantId === null
        ? (this._projectPasswordPolicy = e)
        : (this._tenantPasswordPolicies[this.tenantId] = e);
    }
    _getPersistenceType() {
      return this.assertedPersistence.persistence.type;
    }
    _getPersistence() {
      return this.assertedPersistence.persistence;
    }
    _updateErrorMap(e) {
      this._errorFactory = new Pu(`auth`, `Firebase`, e());
    }
    onAuthStateChanged(e, t, n) {
      return this.registerStateListener(this.authStateSubscription, e, t, n);
    }
    beforeAuthStateChanged(e, t) {
      return this.beforeStateQueue.pushCallback(e, t);
    }
    onIdTokenChanged(e, t, n) {
      return this.registerStateListener(this.idTokenSubscription, e, t, n);
    }
    authStateReady() {
      return new Promise((e, t) => {
        if (this.currentUser) e();
        else {
          let n = this.onAuthStateChanged(() => {
            (n(), e());
          }, t);
        }
      });
    }
    async revokeAccessToken(e) {
      if (this.currentUser) {
        let t = {
          providerId: `apple.com`,
          tokenType: `ACCESS_TOKEN`,
          token: e,
          idToken: await this.currentUser.getIdToken(),
        };
        (this.tenantId != null && (t.tenantId = this.tenantId),
          await Rp(this, t));
      }
    }
    toJSON() {
      return {
        apiKey: this.config.apiKey,
        authDomain: this.config.authDomain,
        appName: this.name,
        currentUser: this._currentUser?.toJSON(),
      };
    }
    async _setRedirectUser(e, t) {
      let n = await this.getOrInitRedirectPersistenceManager(t);
      return e === null ? n.removeCurrentUser() : n.setCurrentUser(e);
    }
    async getOrInitRedirectPersistenceManager(e) {
      if (!this.redirectPersistenceManager) {
        let t = (e && Up(e)) || this._popupRedirectResolver;
        ($(t, this, `argument-error`),
          (this.redirectPersistenceManager = await qp.create(
            this,
            [Up(t._redirectPersistence)],
            `redirectUser`,
          )),
          (this.redirectUser =
            await this.redirectPersistenceManager.getCurrentUser()));
      }
      return this.redirectPersistenceManager;
    }
    async _redirectUserForId(e) {
      return (
        this._isInitialized && (await this.queue(async () => {})),
        this._currentUser?._redirectEventId === e
          ? this._currentUser
          : this.redirectUser?._redirectEventId === e
            ? this.redirectUser
            : null
      );
    }
    async _persistUserIfCurrent(e) {
      if (e === this.currentUser)
        return this.queue(async () => this.directlySetCurrentUser(e));
    }
    _notifyListenersIfCurrent(e) {
      e === this.currentUser && this.notifyAuthListeners();
    }
    _key() {
      return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
    }
    _startProactiveRefresh() {
      ((this.isProactiveRefreshEnabled = !0),
        this.currentUser && this._currentUser._startProactiveRefresh());
    }
    _stopProactiveRefresh() {
      ((this.isProactiveRefreshEnabled = !1),
        this.currentUser && this._currentUser._stopProactiveRefresh());
    }
    get _currentUser() {
      return this.currentUser;
    }
    notifyAuthListeners() {
      if (!this._isInitialized) return;
      this.idTokenSubscription.next(this.currentUser);
      let e = this.currentUser?.uid ?? null;
      this.lastNotifiedUid !== e &&
        ((this.lastNotifiedUid = e),
        this.authStateSubscription.next(this.currentUser));
    }
    registerStateListener(e, t, n, r) {
      if (this._deleted) return () => {};
      let i = typeof t == `function` ? t : t.next.bind(t),
        a = !1,
        o = this._isInitialized
          ? Promise.resolve()
          : this._initializationPromise;
      if (
        ($(o, this, `internal-error`),
        o.then(() => {
          a || i(this.currentUser);
        }),
        typeof t == `function`)
      ) {
        let i = e.addObserver(t, n, r);
        return () => {
          ((a = !0), i());
        };
      } else {
        let n = e.addObserver(t);
        return () => {
          ((a = !0), n());
        };
      }
    }
    async directlySetCurrentUser(e) {
      (this.currentUser &&
        this.currentUser !== e &&
        this._currentUser._stopProactiveRefresh(),
        e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
        (this.currentUser = e),
        e
          ? await this.assertedPersistence.setCurrentUser(e)
          : await this.assertedPersistence.removeCurrentUser());
    }
    queue(e) {
      return ((this.operations = this.operations.then(e, e)), this.operations);
    }
    get assertedPersistence() {
      return (
        $(this.persistenceManager, this, `internal-error`),
        this.persistenceManager
      );
    }
    _logFramework(e) {
      !e ||
        this.frameworks.includes(e) ||
        (this.frameworks.push(e),
        this.frameworks.sort(),
        (this.clientVersion = om(
          this.config.clientPlatform,
          this._getFrameworks(),
        )));
    }
    _getFrameworks() {
      return this.frameworks;
    }
    async _getAdditionalHeaders() {
      let e = { "X-Client-Version": this.clientVersion };
      this.app.options.appId &&
        (e[`X-Firebase-gmpid`] = this.app.options.appId);
      let t = await this.heartbeatServiceProvider
        .getImmediate({ optional: !0 })
        ?.getHeartbeatsHeader();
      t && (e[`X-Firebase-Client`] = t);
      let n = await this._getAppCheckToken();
      return (n && (e[`X-Firebase-AppCheck`] = n), e);
    }
    async _getAppCheckToken() {
      if (hf(this.app) && this.app.settings.appCheckToken)
        return this.app.settings.appCheckToken;
      let e = await this.appCheckServiceProvider
        .getImmediate({ optional: !0 })
        ?.getToken();
      return (
        e?.error && Wf(`Error while retrieving App Check token: ${e.error}`),
        e?.token
      );
    }
  };
function fm(e) {
  return qu(e);
}
var pm = class {
    constructor(e) {
      ((this.auth = e),
        (this.observer = null),
        (this.addObserver = Uu((e) => (this.observer = e))));
    }
    get next() {
      return (
        $(this.observer, this.auth, `internal-error`),
        this.observer.next.bind(this.observer)
      );
    }
  },
  mm = {
    async loadJS() {
      throw Error(`Unable to load external scripts`);
    },
    recaptchaV2Script: ``,
    recaptchaEnterpriseScript: ``,
    gapiScript: ``,
  };
function hm(e) {
  mm = e;
}
function gm(e) {
  return mm.loadJS(e);
}
function _m() {
  return mm.recaptchaEnterpriseScript;
}
function vm() {
  return mm.gapiScript;
}
function ym(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
var bm = class {
    constructor() {
      this.enterprise = new xm();
    }
    ready(e) {
      e();
    }
    execute(e, t) {
      return Promise.resolve(`token`);
    }
    render(e, t) {
      return ``;
    }
  },
  xm = class {
    ready(e) {
      e();
    }
    execute(e, t) {
      return Promise.resolve(`token`);
    }
    render(e, t) {
      return ``;
    }
  },
  Sm = `recaptcha-enterprise`,
  Cm = `NO_RECAPTCHA`,
  wm = `onFirebaseAuthREInstanceReady`,
  Tm = class e {
    constructor(e) {
      ((this.type = Sm), (this.auth = fm(e)));
    }
    async verify(t = `verify`, n = !1) {
      async function r(e) {
        if (!n) {
          if (e.tenantId == null && e._agentRecaptchaConfig != null)
            return e._agentRecaptchaConfig.siteKey;
          if (
            e.tenantId != null &&
            e._tenantRecaptchaConfigs[e.tenantId] !== void 0
          )
            return e._tenantRecaptchaConfigs[e.tenantId].siteKey;
        }
        return new Promise(async (t, n) => {
          xp(e, {
            clientType: `CLIENT_TYPE_WEB`,
            version: `RECAPTCHA_ENTERPRISE`,
          })
            .then((r) => {
              if (r.recaptchaKey === void 0)
                n(Error(`recaptcha Enterprise site key undefined`));
              else {
                let n = new bp(r);
                return (
                  e.tenantId == null
                    ? (e._agentRecaptchaConfig = n)
                    : (e._tenantRecaptchaConfigs[e.tenantId] = n),
                  t(n.siteKey)
                );
              }
            })
            .catch((e) => {
              n(e);
            });
        });
      }
      function i(e, n, r) {
        let i = window.grecaptcha;
        yp(i)
          ? i.enterprise.ready(() => {
              i.enterprise
                .execute(e, { action: t })
                .then((e) => {
                  n(e);
                })
                .catch(() => {
                  n(Cm);
                });
            })
          : r(Error(`No reCAPTCHA enterprise script loaded.`));
      }
      return this.auth.settings.appVerificationDisabledForTesting
        ? new bm().execute(`siteKey`, { action: `verify` })
        : new Promise((t, a) => {
            r(this.auth)
              .then(async (r) => {
                if (!n && yp(window.grecaptcha) && e.scriptInjectionDeferred)
                  (await e.scriptInjectionDeferred.promise, i(r, t, a));
                else {
                  if (typeof window > `u`) {
                    a(Error(`RecaptchaVerifier is only supported in browser`));
                    return;
                  }
                  let n = _m();
                  (n.length !== 0 && (n += r + `&onload=${wm}`),
                    (e.scriptInjectionDeferred = new Cu()),
                    (window[wm] = () => {
                      e.scriptInjectionDeferred?.resolve();
                    }),
                    gm(n)
                      .then(() => e.scriptInjectionDeferred?.promise)
                      .then(() => {
                        i(r, t, a);
                      })
                      .catch((e) => {
                        a(e);
                      }));
                }
              })
              .catch((e) => {
                a(e);
              });
          });
    }
  };
Tm.scriptInjectionDeferred = null;
async function Em(e, t, n, r = !1, i = !1) {
  let a = new Tm(e),
    o;
  if (i) o = Cm;
  else
    try {
      o = await a.verify(n);
    } catch {
      o = await a.verify(n, !0);
    }
  let s = { ...t };
  if (n === `mfaSmsEnrollment` || n === `mfaSmsSignIn`) {
    if (`phoneEnrollmentInfo` in s) {
      let e = s.phoneEnrollmentInfo.phoneNumber,
        t = s.phoneEnrollmentInfo.recaptchaToken;
      Object.assign(s, {
        phoneEnrollmentInfo: {
          phoneNumber: e,
          recaptchaToken: t,
          captchaResponse: o,
          clientType: `CLIENT_TYPE_WEB`,
          recaptchaVersion: `RECAPTCHA_ENTERPRISE`,
        },
      });
    } else if (`phoneSignInInfo` in s) {
      let e = s.phoneSignInInfo.recaptchaToken;
      Object.assign(s, {
        phoneSignInInfo: {
          recaptchaToken: e,
          captchaResponse: o,
          clientType: `CLIENT_TYPE_WEB`,
          recaptchaVersion: `RECAPTCHA_ENTERPRISE`,
        },
      });
    }
    return s;
  }
  return (
    r
      ? Object.assign(s, { captchaResp: o })
      : Object.assign(s, { captchaResponse: o }),
    Object.assign(s, { clientType: `CLIENT_TYPE_WEB` }),
    Object.assign(s, { recaptchaVersion: `RECAPTCHA_ENTERPRISE` }),
    s
  );
}
async function Dm(e, t, n, r, i) {
  return i === `EMAIL_PASSWORD_PROVIDER`
    ? e._getRecaptchaConfig()?.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`)
      ? r(e, await Em(e, t, n, n === `getOobCode`))
      : r(e, t).catch(async (i) =>
          i.code === `auth/missing-recaptcha-token`
            ? (console.log(
                `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`,
              ),
              r(e, await Em(e, t, n, n === `getOobCode`)))
            : Promise.reject(i),
        )
    : i === `PHONE_PROVIDER`
      ? e._getRecaptchaConfig()?.isProviderEnabled(`PHONE_PROVIDER`)
        ? r(e, await Em(e, t, n)).catch(async (i) =>
            e
              ._getRecaptchaConfig()
              ?.getProviderEnforcementState(`PHONE_PROVIDER`) === `AUDIT` &&
            (i.code === `auth/missing-recaptcha-token` ||
              i.code === `auth/invalid-app-credential`)
              ? (console.log(
                  `Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`,
                ),
                r(e, await Em(e, t, n, !1, !0)))
              : Promise.reject(i),
          )
        : r(e, await Em(e, t, n, !1, !0))
      : Promise.reject(i + ` provider is not supported.`);
}
async function Om(e) {
  let t = fm(e),
    n = new bp(
      await xp(t, {
        clientType: `CLIENT_TYPE_WEB`,
        version: `RECAPTCHA_ENTERPRISE`,
      }),
    );
  (t.tenantId == null
    ? (t._agentRecaptchaConfig = n)
    : (t._tenantRecaptchaConfigs[t.tenantId] = n),
    n.isAnyProviderEnabled() && new Tm(t).verify());
}
function km(e, t) {
  let n = mf(e, `auth`);
  if (n.isInitialized()) {
    let e = n.getImmediate();
    if (Ru(n.getOptions(), t ?? {})) return e;
    Kf(e, `already-initialized`);
  }
  return n.initialize({ options: t });
}
function Am(e, t) {
  let n = t?.persistence || [],
    r = (Array.isArray(n) ? n : [n]).map(Up);
  (t?.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(r, t?.popupRedirectResolver));
}
function jm(e, t, n) {
  let r = fm(e);
  $(/^https?:\/\//.test(t), r, `invalid-emulator-scheme`);
  let i = !!n?.disableWarnings,
    a = Mm(t),
    { host: o, port: s } = Nm(t),
    c = s === null ? `` : `:${s}`,
    l = { url: `${a}//${o}${c}/` },
    u = Object.freeze({
      host: o,
      port: s,
      protocol: a.replace(`:`, ``),
      options: Object.freeze({ disableWarnings: i }),
    });
  if (!r._canInitEmulator) {
    ($(r.config.emulator && r.emulatorConfig, r, `emulator-config-failed`),
      $(
        Ru(l, r.config.emulator) && Ru(u, r.emulatorConfig),
        r,
        `emulator-config-failed`,
      ));
    return;
  }
  ((r.config.emulator = l),
    (r.emulatorConfig = u),
    (r.settings.appVerificationDisabledForTesting = !0),
    Y(o) ? Ju(`${a}//${o}${c}`) : i || Fm());
}
function Mm(e) {
  let t = e.indexOf(`:`);
  return t < 0 ? `` : e.substr(0, t + 1);
}
function Nm(e) {
  let t = Mm(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: ``, port: null };
  let r = n[2].split(`@`).pop() || ``,
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    let e = i[1];
    return { host: e, port: Pm(r.substr(e.length + 1)) };
  } else {
    let [e, t] = r.split(`:`);
    return { host: e, port: Pm(t) };
  }
}
function Pm(e) {
  if (!e) return null;
  let t = Number(e);
  return isNaN(t) ? null : t;
}
function Fm() {
  function e() {
    let e = document.createElement(`p`),
      t = e.style;
    ((e.innerText = `Running in emulator mode. Do not use with production credentials.`),
      (t.position = `fixed`),
      (t.width = `100%`),
      (t.backgroundColor = `#ffffff`),
      (t.border = `.1em solid #000000`),
      (t.color = `#b50000`),
      (t.bottom = `0px`),
      (t.left = `0px`),
      (t.margin = `0px`),
      (t.zIndex = `10000`),
      (t.textAlign = `center`),
      e.classList.add(`firebase-emulator-warning`),
      document.body.appendChild(e));
  }
  (typeof console < `u` &&
    typeof console.info == `function` &&
    console.info(
      `WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.`,
    ),
    typeof window < `u` &&
      typeof document < `u` &&
      (document.readyState === `loading`
        ? window.addEventListener(`DOMContentLoaded`, e)
        : e()));
}
var Im = class {
  constructor(e, t) {
    ((this.providerId = e), (this.signInMethod = t));
  }
  toJSON() {
    return Qf(`not implemented`);
  }
  _getIdTokenResponse(e) {
    return Qf(`not implemented`);
  }
  _linkToIdToken(e, t) {
    return Qf(`not implemented`);
  }
  _getReauthenticationResolver(e) {
    return Qf(`not implemented`);
  }
};
async function Lm(e, t) {
  return fp(e, `POST`, `/v1/accounts:signUp`, t);
}
async function Rm(e, t) {
  return mp(e, `POST`, `/v1/accounts:signInWithPassword`, dp(e, t));
}
async function zm(e, t) {
  return mp(e, `POST`, `/v1/accounts:signInWithEmailLink`, dp(e, t));
}
async function Bm(e, t) {
  return mp(e, `POST`, `/v1/accounts:signInWithEmailLink`, dp(e, t));
}
var Vm = class e extends Im {
  constructor(e, t, n, r = null) {
    (super(`password`, n),
      (this._email = e),
      (this._password = t),
      (this._tenantId = r));
  }
  static _fromEmailAndPassword(t, n) {
    return new e(t, n, `password`);
  }
  static _fromEmailAndCode(t, n, r = null) {
    return new e(t, n, `emailLink`, r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(e) {
    let t = typeof e == `string` ? JSON.parse(e) : e;
    if (t?.email && t?.password) {
      if (t.signInMethod === `password`)
        return this._fromEmailAndPassword(t.email, t.password);
      if (t.signInMethod === `emailLink`)
        return this._fromEmailAndCode(t.email, t.password, t.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case `password`:
        return Dm(
          e,
          {
            returnSecureToken: !0,
            email: this._email,
            password: this._password,
            clientType: `CLIENT_TYPE_WEB`,
          },
          `signInWithPassword`,
          Rm,
          `EMAIL_PASSWORD_PROVIDER`,
        );
      case `emailLink`:
        return zm(e, { email: this._email, oobCode: this._password });
      default:
        Kf(e, `internal-error`);
    }
  }
  async _linkToIdToken(e, t) {
    switch (this.signInMethod) {
      case `password`:
        return Dm(
          e,
          {
            idToken: t,
            returnSecureToken: !0,
            email: this._email,
            password: this._password,
            clientType: `CLIENT_TYPE_WEB`,
          },
          `signUpPassword`,
          Lm,
          `EMAIL_PASSWORD_PROVIDER`,
        );
      case `emailLink`:
        return Bm(e, {
          idToken: t,
          email: this._email,
          oobCode: this._password,
        });
      default:
        Kf(e, `internal-error`);
    }
  }
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
};
async function Hm(e, t) {
  return mp(e, `POST`, `/v1/accounts:signInWithIdp`, dp(e, t));
}
var Um = `http://localhost`,
  Wm = class e extends Im {
    constructor() {
      (super(...arguments), (this.pendingToken = null));
    }
    static _fromParams(t) {
      let n = new e(t.providerId, t.signInMethod);
      return (
        t.idToken || t.accessToken
          ? (t.idToken && (n.idToken = t.idToken),
            t.accessToken && (n.accessToken = t.accessToken),
            t.nonce && !t.pendingToken && (n.nonce = t.nonce),
            t.pendingToken && (n.pendingToken = t.pendingToken))
          : t.oauthToken && t.oauthTokenSecret
            ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
            : Kf(`argument-error`),
        n
      );
    }
    toJSON() {
      return {
        idToken: this.idToken,
        accessToken: this.accessToken,
        secret: this.secret,
        nonce: this.nonce,
        pendingToken: this.pendingToken,
        providerId: this.providerId,
        signInMethod: this.signInMethod,
      };
    }
    static fromJSON(t) {
      let {
        providerId: n,
        signInMethod: r,
        ...i
      } = typeof t == `string` ? JSON.parse(t) : t;
      if (!n || !r) return null;
      let a = new e(n, r);
      return (
        (a.idToken = i.idToken || void 0),
        (a.accessToken = i.accessToken || void 0),
        (a.secret = i.secret),
        (a.nonce = i.nonce),
        (a.pendingToken = i.pendingToken || null),
        a
      );
    }
    _getIdTokenResponse(e) {
      return Hm(e, this.buildRequest());
    }
    _linkToIdToken(e, t) {
      let n = this.buildRequest();
      return ((n.idToken = t), Hm(e, n));
    }
    _getReauthenticationResolver(e) {
      let t = this.buildRequest();
      return ((t.autoCreate = !1), Hm(e, t));
    }
    buildRequest() {
      let e = { requestUri: Um, returnSecureToken: !0 };
      if (this.pendingToken) e.pendingToken = this.pendingToken;
      else {
        let t = {};
        (this.idToken && (t.id_token = this.idToken),
          this.accessToken && (t.access_token = this.accessToken),
          this.secret && (t.oauth_token_secret = this.secret),
          (t.providerId = this.providerId),
          this.nonce && !this.pendingToken && (t.nonce = this.nonce),
          (e.postBody = Bu(t)));
      }
      return e;
    }
  };
async function Gm(e, t) {
  return fp(e, `POST`, `/v1/accounts:sendVerificationCode`, dp(e, t));
}
async function Km(e, t) {
  return mp(e, `POST`, `/v1/accounts:signInWithPhoneNumber`, dp(e, t));
}
async function qm(e, t) {
  let n = await mp(e, `POST`, `/v1/accounts:signInWithPhoneNumber`, dp(e, t));
  if (n.temporaryProof)
    throw vp(e, `account-exists-with-different-credential`, n);
  return n;
}
var Jm = { USER_NOT_FOUND: `user-not-found` };
async function Ym(e, t) {
  return mp(
    e,
    `POST`,
    `/v1/accounts:signInWithPhoneNumber`,
    dp(e, { ...t, operation: `REAUTH` }),
    Jm,
  );
}
var Xm = class e extends Im {
  constructor(e) {
    (super(`phone`, `phone`), (this.params = e));
  }
  static _fromVerification(t, n) {
    return new e({ verificationId: t, verificationCode: n });
  }
  static _fromTokenResponse(t, n) {
    return new e({ phoneNumber: t, temporaryProof: n });
  }
  _getIdTokenResponse(e) {
    return Km(e, this._makeVerificationRequest());
  }
  _linkToIdToken(e, t) {
    return qm(e, { idToken: t, ...this._makeVerificationRequest() });
  }
  _getReauthenticationResolver(e) {
    return Ym(e, this._makeVerificationRequest());
  }
  _makeVerificationRequest() {
    let {
      temporaryProof: e,
      phoneNumber: t,
      verificationId: n,
      verificationCode: r,
    } = this.params;
    return e && t
      ? { temporaryProof: e, phoneNumber: t }
      : { sessionInfo: n, code: r };
  }
  toJSON() {
    let e = { providerId: this.providerId };
    return (
      this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber),
      this.params.temporaryProof &&
        (e.temporaryProof = this.params.temporaryProof),
      this.params.verificationCode &&
        (e.verificationCode = this.params.verificationCode),
      this.params.verificationId &&
        (e.verificationId = this.params.verificationId),
      e
    );
  }
  static fromJSON(t) {
    typeof t == `string` && (t = JSON.parse(t));
    let {
      verificationId: n,
      verificationCode: r,
      phoneNumber: i,
      temporaryProof: a,
    } = t;
    return !r && !n && !i && !a
      ? null
      : new e({
          verificationId: n,
          verificationCode: r,
          phoneNumber: i,
          temporaryProof: a,
        });
  }
};
function Zm(e) {
  switch (e) {
    case `recoverEmail`:
      return `RECOVER_EMAIL`;
    case `resetPassword`:
      return `PASSWORD_RESET`;
    case `signIn`:
      return `EMAIL_SIGNIN`;
    case `verifyEmail`:
      return `VERIFY_EMAIL`;
    case `verifyAndChangeEmail`:
      return `VERIFY_AND_CHANGE_EMAIL`;
    case `revertSecondFactorAddition`:
      return `REVERT_SECOND_FACTOR_ADDITION`;
    default:
      return null;
  }
}
function Qm(e) {
  let t = Vu(Hu(e)).link,
    n = t ? Vu(Hu(t)).deep_link_id : null,
    r = Vu(Hu(e)).deep_link_id;
  return (r ? Vu(Hu(r)).link : null) || r || n || t || e;
}
var $m = class e {
    constructor(e) {
      let t = Vu(Hu(e)),
        n = t.apiKey ?? null,
        r = t.oobCode ?? null,
        i = Zm(t.mode ?? null);
      ($(n && r && i, `argument-error`),
        (this.apiKey = n),
        (this.operation = i),
        (this.code = r),
        (this.continueUrl = t.continueUrl ?? null),
        (this.languageCode = t.lang ?? null),
        (this.tenantId = t.tenantId ?? null));
    }
    static parseLink(t) {
      let n = Qm(t);
      try {
        return new e(n);
      } catch {
        return null;
      }
    }
  },
  eh = class e {
    constructor() {
      this.providerId = e.PROVIDER_ID;
    }
    static credential(e, t) {
      return Vm._fromEmailAndPassword(e, t);
    }
    static credentialWithLink(e, t) {
      let n = $m.parseLink(t);
      return (
        $(n, `argument-error`),
        Vm._fromEmailAndCode(e, n.code, n.tenantId)
      );
    }
  };
((eh.PROVIDER_ID = `password`),
  (eh.EMAIL_PASSWORD_SIGN_IN_METHOD = `password`),
  (eh.EMAIL_LINK_SIGN_IN_METHOD = `emailLink`));
var th = class {
    constructor(e) {
      ((this.providerId = e),
        (this.defaultLanguageCode = null),
        (this.customParameters = {}));
    }
    setDefaultLanguage(e) {
      this.defaultLanguageCode = e;
    }
    setCustomParameters(e) {
      return ((this.customParameters = e), this);
    }
    getCustomParameters() {
      return this.customParameters;
    }
  },
  nh = class extends th {
    constructor() {
      (super(...arguments), (this.scopes = []));
    }
    addScope(e) {
      return (this.scopes.includes(e) || this.scopes.push(e), this);
    }
    getScopes() {
      return [...this.scopes];
    }
  },
  rh = class e extends nh {
    constructor() {
      super(`facebook.com`);
    }
    static credential(t) {
      return Wm._fromParams({
        providerId: e.PROVIDER_ID,
        signInMethod: e.FACEBOOK_SIGN_IN_METHOD,
        accessToken: t,
      });
    }
    static credentialFromResult(t) {
      return e.credentialFromTaggedObject(t);
    }
    static credentialFromError(t) {
      return e.credentialFromTaggedObject(t.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
      if (!t || !(`oauthAccessToken` in t) || !t.oauthAccessToken) return null;
      try {
        return e.credential(t.oauthAccessToken);
      } catch {
        return null;
      }
    }
  };
((rh.FACEBOOK_SIGN_IN_METHOD = `facebook.com`),
  (rh.PROVIDER_ID = `facebook.com`));
var ih = class e extends nh {
  constructor() {
    (super(`google.com`), this.addScope(`profile`));
  }
  static credential(t, n) {
    return Wm._fromParams({
      providerId: e.PROVIDER_ID,
      signInMethod: e.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return e.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return e.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    let { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return e.credential(n, r);
    } catch {
      return null;
    }
  }
};
((ih.GOOGLE_SIGN_IN_METHOD = `google.com`), (ih.PROVIDER_ID = `google.com`));
var ah = class e extends nh {
  constructor() {
    super(`github.com`);
  }
  static credential(t) {
    return Wm._fromParams({
      providerId: e.PROVIDER_ID,
      signInMethod: e.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return e.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return e.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !(`oauthAccessToken` in t) || !t.oauthAccessToken) return null;
    try {
      return e.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
};
((ah.GITHUB_SIGN_IN_METHOD = `github.com`), (ah.PROVIDER_ID = `github.com`));
var oh = class e extends nh {
  constructor() {
    super(`twitter.com`);
  }
  static credential(t, n) {
    return Wm._fromParams({
      providerId: e.PROVIDER_ID,
      signInMethod: e.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return e.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return e.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    let { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return e.credential(n, r);
    } catch {
      return null;
    }
  }
};
((oh.TWITTER_SIGN_IN_METHOD = `twitter.com`), (oh.PROVIDER_ID = `twitter.com`));
var sh = class e {
  constructor(e) {
    ((this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType));
  }
  static async _fromIdTokenResponse(t, n, r, i = !1) {
    let a = await Vp._fromIdTokenResponse(t, r, i),
      o = ch(r);
    return new e({
      user: a,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    let i = ch(r);
    return new e({
      user: t,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
};
function ch(e) {
  return e.providerId ? e.providerId : `phoneNumber` in e ? `phone` : null;
}
var lh = class e extends Nu {
  constructor(t, n, r, i) {
    (super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, e.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: t.tenantId ?? void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      }));
  }
  static _fromErrorAndOperation(t, n, r, i) {
    return new e(t, n, r, i);
  }
};
function uh(e, t, n, r) {
  return (
    t === `reauthenticate`
      ? n._getReauthenticationResolver(e)
      : n._getIdTokenResponse(e)
  ).catch((n) => {
    throw n.code === `auth/multi-factor-auth-required`
      ? lh._fromErrorAndOperation(e, n, t, r)
      : n;
  });
}
async function dh(e, t, n = !1) {
  let r = await kp(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return sh._forOperation(e, `link`, r);
}
async function fh(e, t, n = !1) {
  let { auth: r } = e;
  if (hf(r.app)) return Promise.reject(Yf(r));
  let i = `reauthenticate`;
  try {
    let a = await kp(e, uh(r, i, t, e), n);
    $(a.idToken, r, `internal-error`);
    let o = Dp(a.idToken);
    $(o, r, `internal-error`);
    let { sub: s } = o;
    return ($(e.uid === s, r, `user-mismatch`), sh._forOperation(e, i, a));
  } catch (e) {
    throw (e?.code === `auth/user-not-found` && Kf(r, `user-mismatch`), e);
  }
}
async function ph(e, t, n = !1) {
  if (hf(e.app)) return Promise.reject(Yf(e));
  let r = `signIn`,
    i = await uh(e, r, t),
    a = await sh._fromIdTokenResponse(e, r, i);
  return (n || (await e._updateCurrentUser(a.user)), a);
}
function mh(e, t, n, r) {
  return qu(e).onIdTokenChanged(t, n, r);
}
function hh(e, t, n) {
  return qu(e).beforeAuthStateChanged(t, n);
}
function gh(e, t, n, r) {
  return qu(e).onAuthStateChanged(t, n, r);
}
function _h(e) {
  return qu(e).signOut();
}
function vh(e, t) {
  return fp(e, `POST`, `/v2/accounts/mfaEnrollment:start`, dp(e, t));
}
function yh(e, t) {
  return fp(e, `POST`, `/v2/accounts/mfaEnrollment:finalize`, dp(e, t));
}
function bh(e, t) {
  return fp(e, `POST`, `/v2/accounts/mfaEnrollment:start`, dp(e, t));
}
function xh(e, t) {
  return fp(e, `POST`, `/v2/accounts/mfaEnrollment:finalize`, dp(e, t));
}
var Sh = `__sak`,
  Ch = class {
    constructor(e, t) {
      ((this.storageRetriever = e), (this.type = t));
    }
    _isAvailable() {
      try {
        return this.storage
          ? (this.storage.setItem(Sh, `1`),
            this.storage.removeItem(Sh),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      } catch {
        return Promise.resolve(!1);
      }
    }
    _set(e, t) {
      return (this.storage.setItem(e, JSON.stringify(t)), Promise.resolve());
    }
    _get(e) {
      let t = this.storage.getItem(e);
      return Promise.resolve(t ? JSON.parse(t) : null);
    }
    _remove(e) {
      return (this.storage.removeItem(e), Promise.resolve());
    }
    get storage() {
      return this.storageRetriever();
    }
  },
  wh = 1e3,
  Th = 10,
  Eh = class extends Ch {
    constructor() {
      (super(() => window.localStorage, `LOCAL`),
        (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.fallbackToPolling = am()),
        (this._shouldAllowMigration = !0));
    }
    forAllChangedKeys(e) {
      for (let t of Object.keys(this.listeners)) {
        let n = this.storage.getItem(t),
          r = this.localCache[t];
        n !== r && e(t, r, n);
      }
    }
    onStorageEvent(e, t = !1) {
      if (!e.key) {
        this.forAllChangedKeys((e, t, n) => {
          this.notifyListeners(e, n);
        });
        return;
      }
      let n = e.key;
      t ? this.detachListener() : this.stopPolling();
      let r = () => {
          let e = this.storage.getItem(n);
          (!t && this.localCache[n] === e) || this.notifyListeners(n, e);
        },
        i = this.storage.getItem(n);
      im() && i !== e.newValue && e.newValue !== e.oldValue
        ? setTimeout(r, Th)
        : r();
    }
    notifyListeners(e, t) {
      this.localCache[e] = t;
      let n = this.listeners[e];
      if (n) for (let e of Array.from(n)) e(t && JSON.parse(t));
    }
    startPolling() {
      (this.stopPolling(),
        (this.pollTimer = setInterval(() => {
          this.forAllChangedKeys((e, t, n) => {
            this.onStorageEvent(
              new StorageEvent(`storage`, { key: e, oldValue: t, newValue: n }),
              !0,
            );
          });
        }, wh)));
    }
    stopPolling() {
      this.pollTimer &&= (clearInterval(this.pollTimer), null);
    }
    attachListener() {
      window.addEventListener(`storage`, this.boundEventHandler);
    }
    detachListener() {
      window.removeEventListener(`storage`, this.boundEventHandler);
    }
    _addListener(e, t) {
      (Object.keys(this.listeners).length === 0 &&
        (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
        this.listeners[e] ||
          ((this.listeners[e] = new Set()),
          (this.localCache[e] = this.storage.getItem(e))),
        this.listeners[e].add(t));
    }
    _removeListener(e, t) {
      (this.listeners[e] &&
        (this.listeners[e].delete(t),
        this.listeners[e].size === 0 && delete this.listeners[e]),
        Object.keys(this.listeners).length === 0 &&
          (this.detachListener(), this.stopPolling()));
    }
    async _set(e, t) {
      (await super._set(e, t), (this.localCache[e] = JSON.stringify(t)));
    }
    async _get(e) {
      let t = await super._get(e);
      return ((this.localCache[e] = JSON.stringify(t)), t);
    }
    async _remove(e) {
      (await super._remove(e), delete this.localCache[e]);
    }
  };
Eh.type = `LOCAL`;
var Dh = Eh,
  Oh = 1e3;
function kh(e) {
  let t = e.replace(/[\\^$.*+?()[\]{}|]/g, `\\$&`),
    n = RegExp(`${t}=([^;]+)`);
  return document.cookie.match(n)?.[1] ?? null;
}
function Ah(e) {
  return `${window.location.protocol === `http:` ? `__dev_` : `__HOST-`}FIREBASE_${e.split(`:`)[3]}`;
}
var jh = class {
  constructor() {
    ((this.type = `COOKIE`), (this.listenerUnsubscribes = new Map()));
  }
  _getFinalTarget(e) {
    let t = new URL(`${window.location.origin}/__cookies__`);
    return (t.searchParams.set(`finalTarget`, e), t);
  }
  async _isAvailable() {
    return (typeof isSecureContext == `boolean` && !isSecureContext) ||
      typeof navigator > `u` ||
      typeof document > `u`
      ? !1
      : (navigator.cookieEnabled ?? !0);
  }
  async _set(e, t) {}
  async _get(e) {
    if (!this._isAvailable()) return null;
    let t = Ah(e);
    return window.cookieStore
      ? (await window.cookieStore.get(t))?.value
      : kh(t);
  }
  async _remove(e) {
    if (!this._isAvailable() || !(await this._get(e))) return;
    let t = Ah(e);
    ((document.cookie = `${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`),
      await fetch(`/__cookies__`, { method: `DELETE` }).catch(() => void 0));
  }
  _addListener(e, t) {
    if (!this._isAvailable()) return;
    let n = Ah(e);
    if (window.cookieStore) {
      let e = (e) => {
        let r = e.changed.find((e) => e.name === n);
        (r && t(r.value), e.deleted.find((e) => e.name === n) && t(null));
      };
      return (
        this.listenerUnsubscribes.set(t, () =>
          window.cookieStore.removeEventListener(`change`, e),
        ),
        window.cookieStore.addEventListener(`change`, e)
      );
    }
    let r = kh(n),
      i = setInterval(() => {
        let e = kh(n);
        e !== r && (t(e), (r = e));
      }, Oh);
    this.listenerUnsubscribes.set(t, () => clearInterval(i));
  }
  _removeListener(e, t) {
    let n = this.listenerUnsubscribes.get(t);
    n && (n(), this.listenerUnsubscribes.delete(t));
  }
};
jh.type = `COOKIE`;
var Mh = class extends Ch {
  constructor() {
    super(() => window.sessionStorage, `SESSION`);
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
};
Mh.type = `SESSION`;
var Nh = Mh;
function Ph(e) {
  return Promise.all(
    e.map(async (e) => {
      try {
        return { fulfilled: !0, value: await e };
      } catch (e) {
        return { fulfilled: !1, reason: e };
      }
    }),
  );
}
var Fh = class e {
  constructor(e) {
    ((this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this)));
  }
  static _getInstance(t) {
    let n = this.receivers.find((e) => e.isListeningto(t));
    if (n) return n;
    let r = new e(t);
    return (this.receivers.push(r), r);
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  async handleEvent(e) {
    let t = e,
      { eventId: n, eventType: r, data: i } = t.data,
      a = this.handlersMap[r];
    if (!a?.size) return;
    t.ports[0].postMessage({ status: `ack`, eventId: n, eventType: r });
    let o = await Ph(Array.from(a).map(async (e) => e(t.origin, i)));
    t.ports[0].postMessage({
      status: `done`,
      eventId: n,
      eventType: r,
      response: o,
    });
  }
  _subscribe(e, t) {
    (Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener(`message`, this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(t));
  }
  _unsubscribe(e, t) {
    (this.handlersMap[e] && t && this.handlersMap[e].delete(t),
      (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener(
          `message`,
          this.boundEventHandler,
        ));
  }
};
Fh.receivers = [];
function Ih(e = ``, t = 10) {
  let n = ``;
  for (let e = 0; e < t; e++) n += Math.floor(Math.random() * 10);
  return e + n;
}
var Lh = class {
  constructor(e) {
    ((this.target = e), (this.handlers = new Set()));
  }
  removeMessageHandler(e) {
    (e.messageChannel &&
      (e.messageChannel.port1.removeEventListener(`message`, e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e));
  }
  async _send(e, t, n = 50) {
    let r = typeof MessageChannel < `u` ? new MessageChannel() : null;
    if (!r) throw Error(`connection_unavailable`);
    let i, a;
    return new Promise((o, s) => {
      let c = Ih(``, 20);
      r.port1.start();
      let l = setTimeout(() => {
        s(Error(`unsupported_event`));
      }, n);
      ((a = {
        messageChannel: r,
        onMessage(e) {
          let t = e;
          if (t.data.eventId === c)
            switch (t.data.status) {
              case `ack`:
                (clearTimeout(l),
                  (i = setTimeout(() => {
                    s(Error(`timeout`));
                  }, 3e3)));
                break;
              case `done`:
                (clearTimeout(i), o(t.data.response));
                break;
              default:
                (clearTimeout(l),
                  clearTimeout(i),
                  s(Error(`invalid_response`)));
                break;
            }
        },
      }),
        this.handlers.add(a),
        r.port1.addEventListener(`message`, a.onMessage),
        this.target.postMessage({ eventType: e, eventId: c, data: t }, [
          r.port2,
        ]));
    }).finally(() => {
      a && this.removeMessageHandler(a);
    });
  }
};
function Rh() {
  return window;
}
function zh(e) {
  Rh().location.href = e;
}
function Bh() {
  return (
    Rh().WorkerGlobalScope !== void 0 && typeof Rh().importScripts == `function`
  );
}
async function Vh() {
  if (!navigator?.serviceWorker) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Hh() {
  return navigator?.serviceWorker?.controller || null;
}
function Uh() {
  return Bh() ? self : null;
}
var Wh = `firebaseLocalStorageDb`,
  Gh = 1,
  Kh = `firebaseLocalStorage`,
  qh = `fbase_key`,
  Jh = class {
    constructor(e) {
      this.request = e;
    }
    toPromise() {
      return new Promise((e, t) => {
        (this.request.addEventListener(`success`, () => {
          e(this.request.result);
        }),
          this.request.addEventListener(`error`, () => {
            t(this.request.error);
          }));
      });
    }
  };
function Yh(e, t) {
  return e.transaction([Kh], t ? `readwrite` : `readonly`).objectStore(Kh);
}
function Xh() {
  return new Jh(indexedDB.deleteDatabase(Wh)).toPromise();
}
function Zh() {
  let e = indexedDB.open(Wh, Gh);
  return new Promise((t, n) => {
    (e.addEventListener(`error`, () => {
      n(e.error);
    }),
      e.addEventListener(`upgradeneeded`, () => {
        let t = e.result;
        try {
          t.createObjectStore(Kh, { keyPath: qh });
        } catch (e) {
          n(e);
        }
      }),
      e.addEventListener(`success`, async () => {
        let n = e.result;
        n.objectStoreNames.contains(Kh)
          ? t(n)
          : (n.close(), await Xh(), t(await Zh()));
      }));
  });
}
async function Qh(e, t, n) {
  return new Jh(Yh(e, !0).put({ [qh]: t, value: n })).toPromise();
}
async function $h(e, t) {
  let n = await new Jh(Yh(e, !1).get(t)).toPromise();
  return n === void 0 ? null : n.value;
}
function eg(e, t) {
  return new Jh(Yh(e, !0).delete(t)).toPromise();
}
var tg = 800,
  ng = 3,
  rg = class {
    constructor() {
      ((this.type = `LOCAL`),
        (this.dbPromise = null),
        (this._shouldAllowMigration = !0),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.pendingWrites = 0),
        (this.receiver = null),
        (this.sender = null),
        (this.serviceWorkerReceiverAvailable = !1),
        (this.activeServiceWorker = null),
        (this._workerInitializationPromise =
          this.initializeServiceWorkerMessaging().then(
            () => {},
            () => {},
          )));
    }
    async _openDb() {
      return this.dbPromise
        ? this.dbPromise
        : ((this.dbPromise = Zh()),
          this.dbPromise.catch(() => {
            this.dbPromise = null;
          }),
          this.dbPromise);
    }
    async _withRetries(e) {
      let t = 0;
      for (;;)
        try {
          return await e(await this._openDb());
        } catch (e) {
          if (t++ > ng) throw e;
          this.dbPromise &&= ((await this.dbPromise).close(), null);
        }
    }
    async initializeServiceWorkerMessaging() {
      return Bh() ? this.initializeReceiver() : this.initializeSender();
    }
    async initializeReceiver() {
      ((this.receiver = Fh._getInstance(Uh())),
        this.receiver._subscribe(`keyChanged`, async (e, t) => ({
          keyProcessed: (await this._poll()).includes(t.key),
        })),
        this.receiver._subscribe(`ping`, async (e, t) => [`keyChanged`]));
    }
    async initializeSender() {
      if (((this.activeServiceWorker = await Vh()), !this.activeServiceWorker))
        return;
      this.sender = new Lh(this.activeServiceWorker);
      let e = await this.sender._send(`ping`, {}, 800);
      e &&
        e[0]?.fulfilled &&
        e[0]?.value.includes(`keyChanged`) &&
        (this.serviceWorkerReceiverAvailable = !0);
    }
    async notifyServiceWorker(e) {
      if (!(
        !this.sender ||
        !this.activeServiceWorker ||
        Hh() !== this.activeServiceWorker
      ))
        try {
          await this.sender._send(
            `keyChanged`,
            { key: e },
            this.serviceWorkerReceiverAvailable ? 800 : 50,
          );
        } catch {}
    }
    async _isAvailable() {
      try {
        return indexedDB
          ? (await this._withRetries(async (e) => {
              (await Qh(e, Sh, `1`), await eg(e, Sh));
            }),
            !0)
          : !1;
      } catch {}
      return !1;
    }
    async _withPendingWrite(e) {
      this.pendingWrites++;
      try {
        await e();
      } finally {
        this.pendingWrites--;
      }
    }
    async _set(e, t) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((n) => Qh(n, e, t)),
          (this.localCache[e] = t),
          this.notifyServiceWorker(e)
        ),
      );
    }
    async _get(e) {
      let t = await this._withRetries((t) => $h(t, e));
      return ((this.localCache[e] = t), t);
    }
    async _remove(e) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((t) => eg(t, e)),
          delete this.localCache[e],
          this.notifyServiceWorker(e)
        ),
      );
    }
    async _poll() {
      let e = await this._withRetries((e) =>
        new Jh(Yh(e, !1).getAll()).toPromise(),
      );
      if (!e || this.pendingWrites !== 0) return [];
      let t = [],
        n = new Set();
      if (e.length !== 0)
        for (let { fbase_key: r, value: i } of e)
          (n.add(r),
            JSON.stringify(this.localCache[r]) !== JSON.stringify(i) &&
              (this.notifyListeners(r, i), t.push(r)));
      for (let e of Object.keys(this.localCache))
        this.localCache[e] &&
          !n.has(e) &&
          (this.notifyListeners(e, null), t.push(e));
      return t;
    }
    notifyListeners(e, t) {
      this.localCache[e] = t;
      let n = this.listeners[e];
      if (n) for (let e of Array.from(n)) e(t);
    }
    startPolling() {
      (this.stopPolling(),
        (this.pollTimer = setInterval(async () => this._poll(), tg)));
    }
    stopPolling() {
      this.pollTimer &&= (clearInterval(this.pollTimer), null);
    }
    _addListener(e, t) {
      (Object.keys(this.listeners).length === 0 && this.startPolling(),
        this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
        this.listeners[e].add(t));
    }
    _removeListener(e, t) {
      (this.listeners[e] &&
        (this.listeners[e].delete(t),
        this.listeners[e].size === 0 && delete this.listeners[e]),
        Object.keys(this.listeners).length === 0 && this.stopPolling());
    }
  };
rg.type = `LOCAL`;
var ig = rg;
function ag(e, t) {
  return fp(e, `POST`, `/v2/accounts/mfaSignIn:start`, dp(e, t));
}
function og(e, t) {
  return fp(e, `POST`, `/v2/accounts/mfaSignIn:finalize`, dp(e, t));
}
function sg(e, t) {
  return fp(e, `POST`, `/v2/accounts/mfaSignIn:finalize`, dp(e, t));
}
(ym(`rcb`), new ap(3e4, 6e4));
var cg = `recaptcha`;
async function lg(e, t, n) {
  if (!e._getRecaptchaConfig())
    try {
      await Om(e);
    } catch {
      console.log(
        `Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.`,
      );
    }
  try {
    let r;
    if (((r = typeof t == `string` ? { phoneNumber: t } : t), `session` in r)) {
      let t = r.session;
      if (`phoneNumber` in r)
        return (
          $(t.type === `enroll`, e, `internal-error`),
          (
            await Dm(
              e,
              {
                idToken: t.credential,
                phoneEnrollmentInfo: {
                  phoneNumber: r.phoneNumber,
                  clientType: `CLIENT_TYPE_WEB`,
                },
              },
              `mfaSmsEnrollment`,
              async (e, t) =>
                t.phoneEnrollmentInfo.captchaResponse === Cm
                  ? ($(n?.type === cg, e, `argument-error`),
                    vh(e, await ug(e, t, n)))
                  : vh(e, t),
              `PHONE_PROVIDER`,
            ).catch((e) => Promise.reject(e))
          ).phoneSessionInfo.sessionInfo
        );
      {
        $(t.type === `signin`, e, `internal-error`);
        let i = r.multiFactorHint?.uid || r.multiFactorUid;
        return (
          $(i, e, `missing-multi-factor-info`),
          (
            await Dm(
              e,
              {
                mfaPendingCredential: t.credential,
                mfaEnrollmentId: i,
                phoneSignInInfo: { clientType: `CLIENT_TYPE_WEB` },
              },
              `mfaSmsSignIn`,
              async (e, t) =>
                t.phoneSignInInfo.captchaResponse === Cm
                  ? ($(n?.type === cg, e, `argument-error`),
                    ag(e, await ug(e, t, n)))
                  : ag(e, t),
              `PHONE_PROVIDER`,
            ).catch((e) => Promise.reject(e))
          ).phoneResponseInfo.sessionInfo
        );
      }
    } else
      return (
        await Dm(
          e,
          { phoneNumber: r.phoneNumber, clientType: `CLIENT_TYPE_WEB` },
          `sendVerificationCode`,
          async (e, t) =>
            t.captchaResponse === Cm
              ? ($(n?.type === cg, e, `argument-error`),
                Gm(e, await ug(e, t, n)))
              : Gm(e, t),
          `PHONE_PROVIDER`,
        ).catch((e) => Promise.reject(e))
      ).sessionInfo;
  } finally {
    n?._reset();
  }
}
async function ug(e, t, n) {
  $(n.type === cg, e, `argument-error`);
  let r = await n.verify();
  $(typeof r == `string`, e, `argument-error`);
  let i = { ...t };
  if (`phoneEnrollmentInfo` in i) {
    let e = i.phoneEnrollmentInfo.phoneNumber,
      t = i.phoneEnrollmentInfo.captchaResponse,
      n = i.phoneEnrollmentInfo.clientType,
      a = i.phoneEnrollmentInfo.recaptchaVersion;
    return (
      Object.assign(i, {
        phoneEnrollmentInfo: {
          phoneNumber: e,
          recaptchaToken: r,
          captchaResponse: t,
          clientType: n,
          recaptchaVersion: a,
        },
      }),
      i
    );
  } else if (`phoneSignInInfo` in i) {
    let e = i.phoneSignInInfo.captchaResponse,
      t = i.phoneSignInInfo.clientType,
      n = i.phoneSignInInfo.recaptchaVersion;
    return (
      Object.assign(i, {
        phoneSignInInfo: {
          recaptchaToken: r,
          captchaResponse: e,
          clientType: t,
          recaptchaVersion: n,
        },
      }),
      i
    );
  } else return (Object.assign(i, { recaptchaToken: r }), i);
}
var dg = class e {
  constructor(t) {
    ((this.providerId = e.PROVIDER_ID), (this.auth = fm(t)));
  }
  verifyPhoneNumber(e, t) {
    return lg(this.auth, e, qu(t));
  }
  static credential(e, t) {
    return Xm._fromVerification(e, t);
  }
  static credentialFromResult(t) {
    let n = t;
    return e.credentialFromTaggedObject(n);
  }
  static credentialFromError(t) {
    return e.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    let { phoneNumber: t, temporaryProof: n } = e;
    return t && n ? Xm._fromTokenResponse(t, n) : null;
  }
};
((dg.PROVIDER_ID = `phone`), (dg.PHONE_SIGN_IN_METHOD = `phone`));
function fg(e, t) {
  return t
    ? Up(t)
    : ($(e._popupRedirectResolver, e, `argument-error`),
      e._popupRedirectResolver);
}
var pg = class extends Im {
  constructor(e) {
    (super(`custom`, `custom`), (this.params = e));
  }
  _getIdTokenResponse(e) {
    return Hm(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, t) {
    return Hm(e, this._buildIdpRequest(t));
  }
  _getReauthenticationResolver(e) {
    return Hm(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    let t = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return (e && (t.idToken = e), t);
  }
};
function mg(e) {
  return ph(e.auth, new pg(e), e.bypassAuthState);
}
function hg(e) {
  let { auth: t, user: n } = e;
  return ($(n, t, `internal-error`), fh(n, new pg(e), e.bypassAuthState));
}
async function gg(e) {
  let { auth: t, user: n } = e;
  return ($(n, t, `internal-error`), dh(n, new pg(e), e.bypassAuthState));
}
var _g = class {
    constructor(e, t, n, r, i = !1) {
      ((this.auth = e),
        (this.resolver = n),
        (this.user = r),
        (this.bypassAuthState = i),
        (this.pendingPromise = null),
        (this.eventManager = null),
        (this.filter = Array.isArray(t) ? t : [t]));
    }
    execute() {
      return new Promise(async (e, t) => {
        this.pendingPromise = { resolve: e, reject: t };
        try {
          ((this.eventManager = await this.resolver._initialize(this.auth)),
            await this.onExecution(),
            this.eventManager.registerConsumer(this));
        } catch (e) {
          this.reject(e);
        }
      });
    }
    async onAuthEvent(e) {
      let {
        urlResponse: t,
        sessionId: n,
        postBody: r,
        tenantId: i,
        error: a,
        type: o,
      } = e;
      if (a) {
        this.reject(a);
        return;
      }
      let s = {
        auth: this.auth,
        requestUri: t,
        sessionId: n,
        tenantId: i || void 0,
        postBody: r || void 0,
        user: this.user,
        bypassAuthState: this.bypassAuthState,
      };
      try {
        this.resolve(await this.getIdpTask(o)(s));
      } catch (e) {
        this.reject(e);
      }
    }
    onError(e) {
      this.reject(e);
    }
    getIdpTask(e) {
      switch (e) {
        case `signInViaPopup`:
        case `signInViaRedirect`:
          return mg;
        case `linkViaPopup`:
        case `linkViaRedirect`:
          return gg;
        case `reauthViaPopup`:
        case `reauthViaRedirect`:
          return hg;
        default:
          Kf(this.auth, `internal-error`);
      }
    }
    resolve(e) {
      ($f(this.pendingPromise, `Pending promise was never set`),
        this.pendingPromise.resolve(e),
        this.unregisterAndCleanUp());
    }
    reject(e) {
      ($f(this.pendingPromise, `Pending promise was never set`),
        this.pendingPromise.reject(e),
        this.unregisterAndCleanUp());
    }
    unregisterAndCleanUp() {
      (this.eventManager && this.eventManager.unregisterConsumer(this),
        (this.pendingPromise = null),
        this.cleanUp());
    }
  },
  vg = new ap(2e3, 1e4);
async function yg(e, t, n) {
  if (hf(e.app))
    return Promise.reject(qf(e, `operation-not-supported-in-this-environment`));
  let r = fm(e);
  return (
    Xf(e, t, th),
    new bg(r, `signInViaPopup`, t, fg(r, n)).executeNotNull()
  );
}
var bg = class e extends _g {
  constructor(t, n, r, i, a) {
    (super(t, n, i, a),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      e.currentPopupAction && e.currentPopupAction.cancel(),
      (e.currentPopupAction = this));
  }
  async executeNotNull() {
    let e = await this.execute();
    return ($(e, this.auth, `internal-error`), e);
  }
  async onExecution() {
    $f(this.filter.length === 1, `Popup operations only handle one event`);
    let e = Ih();
    ((this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      e,
    )),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((e) => {
        this.reject(e);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (e) => {
        e || this.reject(qf(this.auth, `web-storage-unsupported`));
      }),
      this.pollUserCancellation());
  }
  get eventId() {
    return this.authWindow?.associatedEvent || null;
  }
  cancel() {
    this.reject(qf(this.auth, `cancelled-popup-request`));
  }
  cleanUp() {
    (this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (e.currentPopupAction = null));
  }
  pollUserCancellation() {
    let e = () => {
      if (this.authWindow?.window?.closed) {
        this.pollId = window.setTimeout(() => {
          ((this.pollId = null),
            this.reject(qf(this.auth, `popup-closed-by-user`)));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(e, vg.get());
    };
    e();
  }
};
bg.currentPopupAction = null;
var xg = `pendingRedirect`,
  Sg = new Map(),
  Cg = class extends _g {
    constructor(e, t, n = !1) {
      (super(
        e,
        [
          `signInViaRedirect`,
          `linkViaRedirect`,
          `reauthViaRedirect`,
          `unknown`,
        ],
        t,
        void 0,
        n,
      ),
        (this.eventId = null));
    }
    async execute() {
      let e = Sg.get(this.auth._key());
      if (!e) {
        try {
          let t = (await wg(this.resolver, this.auth))
            ? await super.execute()
            : null;
          e = () => Promise.resolve(t);
        } catch (t) {
          e = () => Promise.reject(t);
        }
        Sg.set(this.auth._key(), e);
      }
      return (
        this.bypassAuthState ||
          Sg.set(this.auth._key(), () => Promise.resolve(null)),
        e()
      );
    }
    async onAuthEvent(e) {
      if (e.type === `signInViaRedirect`) return super.onAuthEvent(e);
      if (e.type === `unknown`) {
        this.resolve(null);
        return;
      }
      if (e.eventId) {
        let t = await this.auth._redirectUserForId(e.eventId);
        if (t) return ((this.user = t), super.onAuthEvent(e));
        this.resolve(null);
      }
    }
    async onExecution() {}
    cleanUp() {}
  };
async function wg(e, t) {
  let n = Dg(t),
    r = Eg(e);
  if (!(await r._isAvailable())) return !1;
  let i = (await r._get(n)) === `true`;
  return (await r._remove(n), i);
}
function Tg(e, t) {
  Sg.set(e._key(), t);
}
function Eg(e) {
  return Up(e._redirectPersistence);
}
function Dg(e) {
  return Kp(xg, e.config.apiKey, e.name);
}
async function Og(e, t, n = !1) {
  if (hf(e.app)) return Promise.reject(Yf(e));
  let r = fm(e),
    i = await new Cg(r, fg(r, t), n).execute();
  return (
    i &&
      !n &&
      (delete i.user._redirectEventId,
      await r._persistUserIfCurrent(i.user),
      await r._setRedirectUser(null, t)),
    i
  );
}
var kg = 600 * 1e3,
  Ag = class {
    constructor(e) {
      ((this.auth = e),
        (this.cachedEventUids = new Set()),
        (this.consumers = new Set()),
        (this.queuedRedirectEvent = null),
        (this.hasHandledPotentialRedirect = !1),
        (this.lastProcessedEventTime = Date.now()));
    }
    registerConsumer(e) {
      (this.consumers.add(e),
        this.queuedRedirectEvent &&
          this.isEventForConsumer(this.queuedRedirectEvent, e) &&
          (this.sendToConsumer(this.queuedRedirectEvent, e),
          this.saveEventToCache(this.queuedRedirectEvent),
          (this.queuedRedirectEvent = null)));
    }
    unregisterConsumer(e) {
      this.consumers.delete(e);
    }
    onEvent(e) {
      if (this.hasEventBeenHandled(e)) return !1;
      let t = !1;
      return (
        this.consumers.forEach((n) => {
          this.isEventForConsumer(e, n) &&
            ((t = !0), this.sendToConsumer(e, n), this.saveEventToCache(e));
        }),
        this.hasHandledPotentialRedirect || !Ng(e)
          ? t
          : ((this.hasHandledPotentialRedirect = !0),
            (t ||= ((this.queuedRedirectEvent = e), !0)),
            t)
      );
    }
    sendToConsumer(e, t) {
      if (e.error && !Mg(e)) {
        let n = e.error.code?.split(`auth/`)[1] || `internal-error`;
        t.onError(qf(this.auth, n));
      } else t.onAuthEvent(e);
    }
    isEventForConsumer(e, t) {
      let n = t.eventId === null || (!!e.eventId && e.eventId === t.eventId);
      return t.filter.includes(e.type) && n;
    }
    hasEventBeenHandled(e) {
      return (
        Date.now() - this.lastProcessedEventTime >= kg &&
          this.cachedEventUids.clear(),
        this.cachedEventUids.has(jg(e))
      );
    }
    saveEventToCache(e) {
      (this.cachedEventUids.add(jg(e)),
        (this.lastProcessedEventTime = Date.now()));
    }
  };
function jg(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId]
    .filter((e) => e)
    .join(`-`);
}
function Mg({ type: e, error: t }) {
  return e === `unknown` && t?.code === `auth/no-auth-event`;
}
function Ng(e) {
  switch (e.type) {
    case `signInViaRedirect`:
    case `linkViaRedirect`:
    case `reauthViaRedirect`:
      return !0;
    case `unknown`:
      return Mg(e);
    default:
      return !1;
  }
}
async function Pg(e, t = {}) {
  return fp(e, `GET`, `/v1/projects`, t);
}
var Fg = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  Ig = /^https?/;
async function Lg(e) {
  if (e.config.emulator) return;
  let { authorizedDomains: t } = await Pg(e);
  for (let e of t)
    try {
      if (Rg(e)) return;
    } catch {}
  Kf(e, `unauthorized-domain`);
}
function Rg(e) {
  let t = ep(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith(`chrome-extension://`)) {
    let i = new URL(e);
    return i.hostname === `` && r === ``
      ? n === `chrome-extension:` &&
          e.replace(`chrome-extension://`, ``) ===
            t.replace(`chrome-extension://`, ``)
      : n === `chrome-extension:` && i.hostname === r;
  }
  if (!Ig.test(n)) return !1;
  if (Fg.test(e)) return r === e;
  let i = e.replace(/\./g, `\\.`);
  return RegExp(`^(.+\\.` + i + `|` + i + `)$`, `i`).test(r);
}
var zg = new ap(3e4, 6e4);
function Bg() {
  let e = Rh().___jsl;
  if (e?.H) {
    for (let t of Object.keys(e.H))
      if (
        ((e.H[t].r = e.H[t].r || []),
        (e.H[t].L = e.H[t].L || []),
        (e.H[t].r = [...e.H[t].L]),
        e.CP)
      )
        for (let t = 0; t < e.CP.length; t++) e.CP[t] = null;
  }
}
function Vg(e) {
  return new Promise((t, n) => {
    function r() {
      (Bg(),
        gapi.load(`gapi.iframes`, {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            (Bg(), n(qf(e, `network-request-failed`)));
          },
          timeout: zg.get(),
        }));
    }
    if (Rh().gapi?.iframes?.Iframe) t(gapi.iframes.getContext());
    else if (Rh().gapi?.load) r();
    else {
      let t = ym(`iframefcb`);
      return (
        (Rh()[t] = () => {
          gapi.load ? r() : n(qf(e, `network-request-failed`));
        }),
        gm(`${vm()}?onload=${t}`).catch((e) => n(e))
      );
    }
  }).catch((e) => {
    throw ((Hg = null), e);
  });
}
var Hg = null;
function Ug(e) {
  return ((Hg ||= Vg(e)), Hg);
}
var Wg = new ap(5e3, 15e3),
  Gg = `__/auth/iframe`,
  Kg = `emulator/auth/iframe`,
  qg = {
    style: { position: `absolute`, top: `-100px`, width: `1px`, height: `1px` },
    "aria-hidden": `true`,
    tabindex: `-1`,
  },
  Jg = new Map([
    [`identitytoolkit.googleapis.com`, `p`],
    [`staging-identitytoolkit.sandbox.googleapis.com`, `s`],
    [`test-identitytoolkit.sandbox.googleapis.com`, `t`],
  ]);
function Yg(e) {
  let t = e.config;
  $(t.authDomain, e, `auth-domain-config-required`);
  let n = t.emulator ? op(t, Kg) : `https://${e.config.authDomain}/${Gg}`,
    r = { apiKey: t.apiKey, appName: e.name, v: vf },
    i = Jg.get(e.config.apiHost);
  i && (r.eid = i);
  let a = e._getFrameworks();
  return (a.length && (r.fw = a.join(`,`)), `${n}?${Bu(r).slice(1)}`);
}
async function Xg(e) {
  let t = await Ug(e),
    n = Rh().gapi;
  return (
    $(n, e, `internal-error`),
    t.open(
      {
        where: document.body,
        url: Yg(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: qg,
        dontclear: !0,
      },
      (t) =>
        new Promise(async (n, r) => {
          await t.restyle({ setHideOnLeave: !1 });
          let i = qf(e, `network-request-failed`),
            a = Rh().setTimeout(() => {
              r(i);
            }, Wg.get());
          function o() {
            (Rh().clearTimeout(a), n(t));
          }
          t.ping(o).then(o, () => {
            r(i);
          });
        }),
    )
  );
}
var Zg = { location: `yes`, resizable: `yes`, statusbar: `yes`, toolbar: `no` },
  Qg = 500,
  $g = 600,
  e_ = `_blank`,
  t_ = `http://localhost`,
  n_ = class {
    constructor(e) {
      ((this.window = e), (this.associatedEvent = null));
    }
    close() {
      if (this.window)
        try {
          this.window.close();
        } catch {}
    }
  };
function r_(e, t, n, r = Qg, i = $g) {
  let a = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString(),
    s = ``,
    c = { ...Zg, width: r.toString(), height: i.toString(), top: a, left: o },
    l = wu().toLowerCase();
  (n && (s = Zp(l) ? e_ : n), Yp(l) && ((t ||= t_), (c.scrollbars = `yes`)));
  let u = Object.entries(c).reduce((e, [t, n]) => `${e}${t}=${n},`, ``);
  if (rm(l) && s !== `_self`) return (i_(t || ``, s), new n_(null));
  let d = window.open(t || ``, s, u);
  $(d, e, `popup-blocked`);
  try {
    d.focus();
  } catch {}
  return new n_(d);
}
function i_(e, t) {
  let n = document.createElement(`a`);
  ((n.href = e), (n.target = t));
  let r = document.createEvent(`MouseEvent`);
  (r.initMouseEvent(
    `click`,
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null,
  ),
    n.dispatchEvent(r));
}
var a_ = `__/auth/handler`,
  o_ = `emulator/auth/handler`,
  s_ = `fac`;
async function c_(e, t, n, r, i, a) {
  ($(e.config.authDomain, e, `auth-domain-config-required`),
    $(e.config.apiKey, e, `invalid-api-key`));
  let o = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: n,
    redirectUrl: r,
    v: vf,
    eventId: i,
  };
  if (t instanceof th) {
    (t.setDefaultLanguage(e.languageCode),
      (o.providerId = t.providerId || ``),
      Lu(t.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(t.getCustomParameters())));
    for (let [e, t] of Object.entries(a || {})) o[e] = t;
  }
  if (t instanceof nh) {
    let e = t.getScopes().filter((e) => e !== ``);
    e.length > 0 && (o.scopes = e.join(`,`));
  }
  e.tenantId && (o.tid = e.tenantId);
  let s = o;
  for (let e of Object.keys(s)) s[e] === void 0 && delete s[e];
  let c = await e._getAppCheckToken(),
    l = c ? `#${s_}=${encodeURIComponent(c)}` : ``;
  return `${l_(e)}?${Bu(s).slice(1)}${l}`;
}
function l_({ config: e }) {
  return e.emulator ? op(e, o_) : `https://${e.authDomain}/${a_}`;
}
var u_ = `webStorageSupport`,
  d_ = class {
    constructor() {
      ((this.eventManagers = {}),
        (this.iframes = {}),
        (this.originValidationPromises = {}),
        (this._redirectPersistence = Nh),
        (this._completeRedirectFn = Og),
        (this._overrideRedirectResult = Tg));
    }
    async _openPopup(e, t, n, r) {
      return (
        $f(
          this.eventManagers[e._key()]?.manager,
          `_initialize() not called before _openPopup()`,
        ),
        r_(e, await c_(e, t, n, ep(), r), Ih())
      );
    }
    async _openRedirect(e, t, n, r) {
      return (
        await this._originValidation(e),
        zh(await c_(e, t, n, ep(), r)),
        new Promise(() => {})
      );
    }
    _initialize(e) {
      let t = e._key();
      if (this.eventManagers[t]) {
        let { manager: e, promise: n } = this.eventManagers[t];
        return e
          ? Promise.resolve(e)
          : ($f(n, `If manager is not set, promise should be`), n);
      }
      let n = this.initAndGetManager(e);
      return (
        (this.eventManagers[t] = { promise: n }),
        n.catch(() => {
          delete this.eventManagers[t];
        }),
        n
      );
    }
    async initAndGetManager(e) {
      let t = await Xg(e),
        n = new Ag(e);
      return (
        t.register(
          `authEvent`,
          (t) => (
            $(t?.authEvent, e, `invalid-auth-event`),
            { status: n.onEvent(t.authEvent) ? `ACK` : `ERROR` }
          ),
          gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        ),
        (this.eventManagers[e._key()] = { manager: n }),
        (this.iframes[e._key()] = t),
        n
      );
    }
    _isIframeWebStorageSupported(e, t) {
      this.iframes[e._key()].send(
        u_,
        { type: u_ },
        (n) => {
          let r = n?.[0]?.[u_];
          (r !== void 0 && t(!!r), Kf(e, `internal-error`));
        },
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      );
    }
    _originValidation(e) {
      let t = e._key();
      return (
        this.originValidationPromises[t] ||
          (this.originValidationPromises[t] = Lg(e)),
        this.originValidationPromises[t]
      );
    }
    get _shouldInitProactively() {
      return am() || Xp() || nm();
    }
  },
  f_ = class {
    constructor(e) {
      this.factorId = e;
    }
    _process(e, t, n) {
      switch (t.type) {
        case `enroll`:
          return this._finalizeEnroll(e, t.credential, n);
        case `signin`:
          return this._finalizeSignIn(e, t.credential);
        default:
          return Qf(`unexpected MultiFactorSessionType`);
      }
    }
  },
  p_ = class e extends f_ {
    constructor(e) {
      (super(`phone`), (this.credential = e));
    }
    static _fromCredential(t) {
      return new e(t);
    }
    _finalizeEnroll(e, t, n) {
      return yh(e, {
        idToken: t,
        displayName: n,
        phoneVerificationInfo: this.credential._makeVerificationRequest(),
      });
    }
    _finalizeSignIn(e, t) {
      return og(e, {
        mfaPendingCredential: t,
        phoneVerificationInfo: this.credential._makeVerificationRequest(),
      });
    }
  },
  m_ = class {
    constructor() {}
    static assertion(e) {
      return p_._fromCredential(e);
    }
  };
m_.FACTOR_ID = `phone`;
var h_ = class {
  static assertionForEnrollment(e, t) {
    return g_._fromSecret(e, t);
  }
  static assertionForSignIn(e, t) {
    return g_._fromEnrollmentId(e, t);
  }
  static async generateSecret(e) {
    let t = e;
    $(t.user?.auth !== void 0, `internal-error`);
    let n = await bh(t.user.auth, {
      idToken: t.credential,
      totpEnrollmentInfo: {},
    });
    return __._fromStartTotpMfaEnrollmentResponse(n, t.user.auth);
  }
};
h_.FACTOR_ID = `totp`;
var g_ = class e extends f_ {
    constructor(e, t, n) {
      (super(`totp`),
        (this.otp = e),
        (this.enrollmentId = t),
        (this.secret = n));
    }
    static _fromSecret(t, n) {
      return new e(n, void 0, t);
    }
    static _fromEnrollmentId(t, n) {
      return new e(n, t);
    }
    async _finalizeEnroll(e, t, n) {
      return (
        $(this.secret !== void 0, e, `argument-error`),
        xh(e, {
          idToken: t,
          displayName: n,
          totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp),
        })
      );
    }
    async _finalizeSignIn(e, t) {
      $(
        this.enrollmentId !== void 0 && this.otp !== void 0,
        e,
        `argument-error`,
      );
      let n = { verificationCode: this.otp };
      return sg(e, {
        mfaPendingCredential: t,
        mfaEnrollmentId: this.enrollmentId,
        totpVerificationInfo: n,
      });
    }
  },
  __ = class e {
    constructor(e, t, n, r, i, a, o) {
      ((this.sessionInfo = a),
        (this.auth = o),
        (this.secretKey = e),
        (this.hashingAlgorithm = t),
        (this.codeLength = n),
        (this.codeIntervalSeconds = r),
        (this.enrollmentCompletionDeadline = i));
    }
    static _fromStartTotpMfaEnrollmentResponse(t, n) {
      return new e(
        t.totpSessionInfo.sharedSecretKey,
        t.totpSessionInfo.hashingAlgorithm,
        t.totpSessionInfo.verificationCodeLength,
        t.totpSessionInfo.periodSec,
        new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),
        t.totpSessionInfo.sessionInfo,
        n,
      );
    }
    _makeTotpVerificationInfo(e) {
      return { sessionInfo: this.sessionInfo, verificationCode: e };
    }
    generateQrCodeUrl(e, t) {
      let n = !1;
      return (
        (v_(e) || v_(t)) && (n = !0),
        n &&
          (v_(e) && (e = this.auth.currentUser?.email || `unknownuser`),
          v_(t) && (t = this.auth.name)),
        `otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`
      );
    }
  };
function v_(e) {
  return e === void 0 || e?.length === 0;
}
var y_ = `@firebase/auth`,
  b_ = `1.13.3`,
  x_ = class {
    constructor(e) {
      ((this.auth = e), (this.internalListeners = new Map()));
    }
    getUid() {
      return (this.assertAuthConfigured(), this.auth.currentUser?.uid || null);
    }
    async getToken(e) {
      return (
        this.assertAuthConfigured(),
        await this.auth._initializationPromise,
        this.auth.currentUser
          ? { accessToken: await this.auth.currentUser.getIdToken(e) }
          : null
      );
    }
    addAuthTokenListener(e) {
      if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
      let t = this.auth.onIdTokenChanged((t) => {
        e(t?.stsTokenManager.accessToken || null);
      });
      (this.internalListeners.set(e, t), this.updateProactiveRefresh());
    }
    removeAuthTokenListener(e) {
      this.assertAuthConfigured();
      let t = this.internalListeners.get(e);
      t &&
        (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
    }
    assertAuthConfigured() {
      $(
        this.auth._initializationPromise,
        `dependent-sdk-initialized-before-auth`,
      );
    }
    updateProactiveRefresh() {
      this.internalListeners.size > 0
        ? this.auth._startProactiveRefresh()
        : this.auth._stopProactiveRefresh();
    }
  };
function S_(e) {
  switch (e) {
    case `Node`:
      return `node`;
    case `ReactNative`:
      return `rn`;
    case `Worker`:
      return `webworker`;
    case `Cordova`:
      return `cordova`;
    case `WebExtension`:
      return `web-extension`;
    default:
      return;
  }
}
function C_(e) {
  (pf(
    new Yu(
      `auth`,
      (t, { options: n }) => {
        let r = t.getProvider(`app`).getImmediate(),
          i = t.getProvider(`heartbeat`),
          a = t.getProvider(`app-check-internal`),
          { apiKey: o, authDomain: s } = r.options;
        $(o && !o.includes(`:`), `invalid-api-key`, { appName: r.name });
        let c = new dm(r, i, a, {
          apiKey: o,
          authDomain: s,
          clientPlatform: e,
          apiHost: `identitytoolkit.googleapis.com`,
          tokenApiHost: `securetoken.googleapis.com`,
          apiScheme: `https`,
          sdkClientVersion: om(e),
        });
        return (Am(c, n), c);
      },
      `PUBLIC`,
    )
      .setInstantiationMode(`EXPLICIT`)
      .setInstanceCreatedCallback((e, t, n) => {
        e.getProvider(`auth-internal`).initialize();
      }),
  ),
    pf(
      new Yu(
        `auth-internal`,
        (e) => ((e) => new x_(e))(fm(e.getProvider(`auth`).getImmediate())),
        `PRIVATE`,
      ).setInstantiationMode(`EXPLICIT`),
    ),
    Sf(y_, b_, S_(e)),
    Sf(y_, b_, `esm2020`));
}
var w_ = Su(`authIdTokenMaxAge`) || 300,
  T_ = null,
  E_ = (e) => async (t) => {
    let n = t && (await t.getIdTokenResult()),
      r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
    if (r && r > w_) return;
    let i = n?.token;
    T_ !== i &&
      ((T_ = i),
      await fetch(e, {
        method: i ? `POST` : `DELETE`,
        headers: i ? { Authorization: `Bearer ${i}` } : {},
      }));
  };
function D_(e = bf()) {
  let t = mf(e, `auth`);
  if (t.isInitialized()) return t.getImmediate();
  let n = km(e, { popupRedirectResolver: d_, persistence: [ig, Dh, Nh] }),
    r = Su(`authTokenSyncURL`);
  if (r && typeof isSecureContext == `boolean` && isSecureContext) {
    let e = new URL(r, location.origin);
    if (location.origin === e.origin) {
      let t = E_(e.toString());
      (hh(n, t, () => t(n.currentUser)), mh(n, (e) => t(e)));
    }
  }
  let i = bu(`auth`);
  return (i && jm(n, `http://${i}`), n);
}
function O_() {
  return document.getElementsByTagName(`head`)?.[0] ?? document;
}
(hm({
  loadJS(e) {
    return new Promise((t, n) => {
      let r = document.createElement(`script`);
      (r.setAttribute(`src`, e),
        (r.onload = t),
        (r.onerror = (e) => {
          let t = qf(`internal-error`);
          ((t.customData = e), n(t));
        }),
        (r.type = `text/javascript`),
        (r.charset = `UTF-8`),
        O_().appendChild(r));
    });
  },
  gapiScript: `https://apis.google.com/js/api.js`,
  recaptchaV2Script: `https://www.google.com/recaptcha/api.js`,
  recaptchaEnterpriseScript: `https://www.google.com/recaptcha/enterprise.js?render=`,
}),
  C_(`Browser`),
  Sf(`firebase`, `12.16.0`, `app`));
var k_ = D_(
    xf().length
      ? bf()
      : yf({
          apiKey: `AIzaSyABQ3oxuUrT6u--xU6_U_BoeqoUNpH9Wak`,
          authDomain: `zionsports-93475.firebaseapp.com`,
          projectId: `zionsports-93475`,
          appId: `1:362542593892:web:9c217b0b52f42053f7ac71`,
        }),
  ),
  A_ = new ih(),
  j_ = (0, z.createContext)(void 0);
function M_({ children: e }) {
  let [t, n] = (0, z.useState)(null),
    [r, i] = (0, z.useState)(!0);
  return (
    (0, z.useEffect)(
      () =>
        gh(k_, (e) => {
          (n(e), i(!1));
        }),
      [],
    ),
    (0, B.jsx)(j_.Provider, {
      value: {
        user: t,
        loading: r,
        signInWithGoogle: async () => {
          await yg(k_, A_);
        },
        logout: async () => {
          await _h(k_);
        },
      },
      children: e,
    })
  );
}
function N_() {
  let e = (0, z.useContext)(j_);
  if (!e) throw Error(`useAuth must be used within AuthProvider`);
  return e;
}
function P_() {
  return (0, B.jsx)(`div`, {
    className: `flex min-h-screen items-center justify-center bg-background px-4`,
    children: (0, B.jsxs)(`div`, {
      className: `max-w-md text-center`,
      children: [
        (0, B.jsx)(`h1`, {
          className: `text-7xl font-bold text-foreground`,
          children: `404`,
        }),
        (0, B.jsx)(`h2`, {
          className: `mt-4 text-xl font-semibold text-foreground`,
          children: `Page not found`,
        }),
        (0, B.jsx)(`p`, {
          className: `mt-2 text-sm text-muted-foreground`,
          children: `The page you're looking for doesn't exist or has been moved.`,
        }),
        (0, B.jsx)(`div`, {
          className: `mt-6`,
          children: (0, B.jsx)(wc, {
            to: `/`,
            className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
            children: `Go home`,
          }),
        }),
      ],
    }),
  });
}
function F_({ error: e, reset: t }) {
  console.error(e);
  let n = As();
  return (
    (0, z.useEffect)(() => {
      ou(e, { boundary: `tanstack_root_error_component` });
    }, [e]),
    (0, B.jsx)(`div`, {
      className: `flex min-h-screen items-center justify-center bg-background px-4`,
      children: (0, B.jsxs)(`div`, {
        className: `max-w-md text-center`,
        children: [
          (0, B.jsx)(`h1`, {
            className: `text-xl font-semibold tracking-tight text-foreground`,
            children: `This page didn't load`,
          }),
          (0, B.jsx)(`p`, {
            className: `mt-2 text-sm text-muted-foreground`,
            children: `Something went wrong on our end. You can try refreshing or head back home.`,
          }),
          (0, B.jsxs)(`div`, {
            className: `mt-6 flex flex-wrap justify-center gap-2`,
            children: [
              (0, B.jsx)(`button`, {
                onClick: () => {
                  (n.invalidate(), t());
                },
                className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
                children: `Try again`,
              }),
              (0, B.jsx)(`a`, {
                href: `/`,
                className: `inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent`,
                children: `Go home`,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var I_ = Oc()({
  head: () => ({
    meta: [
      { charSet: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { title: `Lovable App` },
      { name: `description`, content: `Lovable Generated Project` },
      { name: `author`, content: `Lovable` },
      { property: `og:title`, content: `Lovable App` },
      { property: `og:description`, content: `Lovable Generated Project` },
      { property: `og:type`, content: `website` },
      { name: `twitter:card`, content: `summary_large_image` },
      { name: `twitter:site`, content: `@Lovable` },
    ],
    links: [
      { rel: `stylesheet`, href: au },
      { rel: `icon`, href: `/favicon.ico`, type: `image/x-icon` },
    ],
  }),
  shellComponent: L_,
  component: R_,
  notFoundComponent: P_,
  errorComponent: F_,
});
function L_({ children: e }) {
  return (0, B.jsxs)(`html`, {
    lang: `en`,
    children: [
      (0, B.jsx)(`head`, { children: (0, B.jsx)(nl, {}) }),
      (0, B.jsxs)(`body`, { children: [e, (0, B.jsx)(rl, {})] }),
    ],
  });
}
function R_() {
  let { queryClient: e } = I_.useRouteContext();
  return (0, B.jsx)(iu, {
    client: e,
    children: (0, B.jsx)(M_, { children: (0, B.jsx)(Uc, {}) }),
  });
}
var z_ = `modulepreload`,
  B_ = function (e) {
    return `/` + e;
  },
  V_ = {},
  H_ = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve
          ? import.meta.resolve(e)
          : new URL(e, import.meta.url).href;
      }
      r = o(
        t.map((t) => {
          if (((t = B_(t, n)), (t = s(t)), t in V_)) return;
          V_[t] = !0;
          let r = t.endsWith(`.css`);
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return;
          }
          let i = document.createElement(`link`);
          if (
            ((i.rel = r ? `stylesheet` : z_),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              (i.addEventListener(`load`, e),
                i.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`)),
                ));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  U_ = {
    IndexRoute: jc(`/`)({
      head: () => ({
        meta: [
          { title: `Zion Sports Event Registration` },
          {
            name: `description`,
            content: `Register participants for the community sports day.`,
          },
        ],
      }),
      component: Nc(
        () => H_(() => import(`./routes-B_HoLOBd.js`), []),
        `component`,
      ),
    }).update({ id: `/`, path: `/`, getParentRoute: () => I_ }),
  },
  W_ = I_._addFileChildren(U_),
  G_ = () =>
    Jc({
      routeTree: W_,
      context: { queryClient: new nu() },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    });
async function K_() {
  let e = await G_(),
    t;
  if (ll) {
    let n = await ll.getOptions();
    ((n.serializationAdapters = n.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = n),
      (t = n.serializationAdapters),
      (e.options.defaultSsr = n.defaultSsr));
  } else
    ((t = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: t }));
  return (
    t.push(ls),
    e.options.serializationAdapters &&
      t.push(...e.options.serializationAdapters),
    e.update({ basepath: ``, serializationAdapters: t }),
    e.stores.matchesId.get().length || (await fs(e)),
    e
  );
}
var q_ = K_;
async function J_() {
  let e = await q_();
  return (window.$_TSR?.h(), e);
}
var Y_;
function X_() {
  return (
    (Y_ ||= J_()),
    (0, B.jsx)(xs, {
      promise: Y_,
      children: (e) => (0, B.jsx)(Zc, { router: e }),
    })
  );
}
var Z_ = g();
(0, z.startTransition)(() => {
  (0, Z_.hydrateRoot)(
    document,
    (0, B.jsx)(z.StrictMode, { children: (0, B.jsx)(X_, {}) }),
  );
});
export { u as a, m as i, k_ as n, c as o, ys as r, N_ as t };
