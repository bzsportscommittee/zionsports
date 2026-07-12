import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { T as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import {
  a as getApp,
  o as getApps,
  s as initializeApp,
} from "../_libs/@firebase/app+[...].mjs";
import {
  a as signOut,
  i as signInWithPopup,
  n as getAuth,
  r as onAuthStateChanged,
  t as GoogleAuthProvider,
} from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-context-DeDpfuaR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var firebaseAuth = getAuth(
  getApps().length
    ? getApp()
    : initializeApp({
        apiKey: "AIzaSyABQ3oxuUrT6u--xU6_U_BoeqoUNpH9Wak",
        authDomain: "zionsports-93475.firebaseapp.com",
        projectId: "zionsports-93475",
        appId: "1:362542593892:web:9c217b0b52f42053f7ac71",
      }),
);
var googleProvider = new GoogleAuthProvider();
var AuthContext = (0, import_react.createContext)(void 0);
function AuthProvider({ children }) {
  const [user, setUser] = (0, import_react.useState)(null);
  const [loading, setLoading] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    return onAuthStateChanged(firebaseAuth, (u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);
  const signInWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, googleProvider);
  };
  const logout = async () => {
    await signOut(firebaseAuth);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
    value: {
      user,
      loading,
      signInWithGoogle,
      logout,
    },
    children,
  });
}
function useAuth() {
  const ctx = (0, import_react.useContext)(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
//#endregion
export { firebaseAuth as n, useAuth as r, AuthProvider as t };
