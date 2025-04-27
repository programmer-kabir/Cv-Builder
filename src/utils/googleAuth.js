import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../firebase/firebase.init'
import { useAuthStore } from '../store/useAuthStore'

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user
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
  } catch (err) {
    alert(`Something Went Wrong! ${err?.message}`)
    console.error('Google sign-in error:', err)
  }
}

export const signOutFromGoogle = async () => {
  try {
    await signOut(auth)
    useAuthStore.getState().logout()
  } catch (err) {
    alert('GitHub sign-in error:', err)
    console.error('Sign-out error:', err)
  }
}
