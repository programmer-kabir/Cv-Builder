import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  GithubAuthProvider,
} from 'firebase/auth'
import { useAuthStore } from '../store/useAuthStore'

const firebaseConfig = {
  apiKey: 'AIzaSyB9_fZKeYOkECEEUon7Zk1Lj4KkE9ZI2hM',
  authDomain: 'cv-builder-b3011.firebaseapp.com',
  projectId: 'cv-builder-b3011',
  storageBucket: 'cv-builder-b3011.firebasestorage.app',
  messagingSenderId: '239364303260',
  appId: '1:239364303260:web:f2cf02c22e63878da64059',
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
