import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  GithubAuthProvider,
} from 'firebase/auth'
import { useAuthStore } from '../store/useAuthStore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const githubProvider = new GithubAuthProvider()

export const initFirebaseAuth = () => {
  onAuthStateChanged(auth, async user => {
    if (user) {
      const token = await user.getIdToken()
      useAuthStore.getState().login(
        {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        },
        token
      )
    } else {
      useAuthStore.getState().logout()
    }
  })
}
