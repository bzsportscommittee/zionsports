import {
  initializeApp,
  getApps,
  getApp,
  type FirebaseOptions,
} from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase web config (publishable — safe to commit).
// Replace these values with your project's config from:
// Firebase Console → Project Settings → Your apps → Web app → SDK setup and configuration.
const firebaseConfig: FirebaseOptions = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ??
    "AIzaSyABQ3oxuUrT6u--xU6_U_BoeqoUNpH9Wak",
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ??
    "zionsports-93475.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "zionsports-93475",
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ??
    "1:362542593892:web:9c217b0b52f42053f7ac71",
};

export const firebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
