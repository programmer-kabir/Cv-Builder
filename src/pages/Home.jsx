import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import heroLottie from '../assets/lottie/boyTyping.lottie'
import Container from '../components/ui/Container'
const Home = () => {
  return (
    <Container>
      <div className='min-h-screen font-poppins flex flex-col md:flex-row justify-center items-center'>
        <div className='flex-2/5'>
          <h1 class='bg-gradient-to-r  from-gray-900 via-gray-700 font-bold to-gray-600 inline-block text-transparent bg-clip-text text-6xl'>
            Craft Your Professional Story
          </h1>

          <p className='text-base text-gray-500 ml-1'>
            Effortlessly build a compelling CV that showcases your unique skills
            and experience, and opens doors to new opportunities.
          </p>

          <Link className='ml-1' to='/dashboard'>
            <button class='relative inline-block px-4 py-4 font-medium group cursor-grab'>
              <span class='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
              <span class='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
              <span class='relative text-black group-hover:text-white'>
                Start Building Your CV
              </span>
            </button>
          </Link>
        </div>
        <div className='flex-3/5'>
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
