import React, { useEffect } from 'react'
import { initFirebaseAuth } from '../firebase/firebase.init'
const AuthProvider = ({ children }) => {
  useEffect(() => {
    initFirebaseAuth()
  }, [])
  return <>{children}</>
}

export default AuthProvider
