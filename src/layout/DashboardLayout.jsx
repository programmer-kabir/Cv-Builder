import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import DashboardSteps from '../components/steps/DashboardSteps'
import StepsNavigation from '../components/steps/StepsNavigation'
import Container from '../components/ui/Container'
import Navbar from '../components/Navbar'

const steps = [
  { title: 'Personal Details', path: '/dashboard/personal-details' },
  { title: 'Experience', path: '/dashboard/experience' },
  { title: 'Projects', path: '/dashboard/projects' },
  { title: 'Academics', path: '/dashboard/academics' },
]

const DashboardLayout = () => {
  const [current, setCurrent] = useState(0)
  const location = useLocation()
  useEffect(() => {
    setCurrent(steps.findIndex(s => s.path === location.pathname))
  }, [location.pathname])

  return (
    <Container>
      <div className='py-6'>
        <Navbar />
      </div>
      {location.pathname !== '/dashboard' && (
        <div className='max-w-3/5 mx-auto py-6'>
          <DashboardSteps current={current} steps={steps} />
        </div>
      )}
      <div className='mt-4 md:mt-6 lg:mt-8 w-full flex justify-center  min-h-[calc(100vh-300px)]'>
        <Outlet />
      </div>
      {location.pathname !== '/dashboard' && (
        <StepsNavigation
          current={current}
          setCurrent={setCurrent}
          steps={steps}
        />
      )}
    </Container>
  )
}
export default DashboardLayout
