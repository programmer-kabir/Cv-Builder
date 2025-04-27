import { signInWithPopup } from 'firebase/auth'
import { auth, githubProvider } from '../firebase/firebase.init'
import { useAuthStore } from '../store/useAuthStore'

export const signInWithGitHub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider)
    const user = result.user
    const token = await user.getIdToken()

    useAuthStore.getState().login(
      {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid,
        provider: 'github',
      },
      token
    )
  } catch (err) {
    console.error('GitHub sign-in error:', err)
  }
}
