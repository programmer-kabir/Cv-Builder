import React from 'react'
import { Link } from 'react-router'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import heroLottie from '../assets/lottie/boyTyping.lottie'
import Container from '../components/ui/Container'
import { ToolFilled } from '@ant-design/icons'
import CustomButton from '../components/ui/CustomButton'
const Home = () => {
  return (
    <Container>
      <div className='min-h-screen font-poppins flex flex-col md:flex-row justify-center items-center'>
        <div className='flex-2/5 order-2 md:order-1'>
          <h1 className='bg-gradient-to-r  from-gray-900 via-gray-700 font-bold to-gray-600 inline-block text-transparent bg-clip-text text-6xl'>
            Craft Your Professional Story
          </h1>

          <p className='text-base text-gray-500 ml-1'>
            Effortlessly build a compelling CV that showcases your unique skills
            and experience, and opens doors to new opportunities.
          </p>

          <Link className='ml-1' to='/dashboard'>
            <CustomButton
              label='Start Building Your CV'
              icon={<ToolFilled />}
              styles='py-5 px-6'
            />
          </Link>
        </div>
        <div className='flex-3/5 order-1 md:order-2'>
          <DotLottieReact
            width={120}
            height={120}
            src={heroLottie}
            loop
            autoplay
          />
        </div>
      </div>
    </Container>
  )
}

export default Home
