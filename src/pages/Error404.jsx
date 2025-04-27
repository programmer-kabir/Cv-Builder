import React from 'react'
import NotFoundLottie from '../assets/lottie/404.lottie'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import CustomButton from '../components/ui/CustomButton'
import { Link } from 'react-router'
import Container from '../components/ui/Container'
const Error404 = () => {
  return (
    <Container>
      <div className='flex w-full justify-center items-center min-h-screen'>
        <div className='w-2/5 flex justify-center items-center flex-col'>
          <DotLottieReact
            width={120}
            height={120}
            src={NotFoundLottie}
            loop
            autoplay
          />
          <Link to='/'>
            <CustomButton label='Back To Homepage' />
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Error404
