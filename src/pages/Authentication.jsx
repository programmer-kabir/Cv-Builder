import { signInWithGoogle } from '../utils/googleAuth'
import { signInWithGitHub } from '../utils/githubAuth'
import { useAuthStore } from '../store/useAuthStore'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import authenticationLottie from '../assets/lottie/authentication.lottie'
import Container from '../components/ui/Container'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { GithubOutlined, GoogleOutlined } from '@ant-design/icons'
import Navbar from '../components/Navbar'

const Authentication = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate, user])

  return (
    <Container>
      <div className='py-6'>
        <Navbar />
      </div>
      <div className='min-h-[calc(100vh-70px)] font-poppins flex flex-col md:flex-row justify-start md:justify-center items-center'>
        <div className='flex-1 space-y-6 order-2 md:order-1'>
          <h2 className='text-xl'>
            Hi There, <br /> Authenticate Yourself Before Going Further..
          </h2>
          <div>
            <button
              onClick={signInWithGoogle}
              className='relative inline-block px-4 py-4 font-medium group cursor-pointer'
            >
              <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
              <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
              <span className='relative text-black group-hover:text-white'>
                <div className='flex items-center gap-3'>
                  <GoogleOutlined />
                  Sign In With Google
                </div>
              </span>
            </button>
          </div>
          <div>
            <button
              onClick={signInWithGitHub}
              className='relative inline-block px-4 py-4 font-medium group cursor-pointer'
            >
              <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
              <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
              <span className='relative text-black group-hover:text-white'>
                <div className='flex items-center gap-3'>
                  <GithubOutlined />
                  Sign In With Github
                </div>
              </span>
            </button>
          </div>
        </div>
        <div className='md:flex-1 mb-6 md:mb-0 order-1 md:order-2'>
          <DotLottieReact
            width={120}
            height={120}
            src={authenticationLottie}
            loop
            autoplay
          />
        </div>
      </div>
    </Container>
  )
}

export default Authentication
