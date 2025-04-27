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
        <div className='w-full pt-12'>
          <DashboardSteps current={current} steps={steps} />
        </div>
      )}
      <div className='w-full'>
        <Outlet />
      </div>
      {location.pathname !== '/dashboard' && (
        <div className='pb-12'>
          <StepsNavigation
            current={current}
            setCurrent={setCurrent}
            steps={steps}
          />
        </div>
      )}
    </Container>
  )
}
export default DashboardLayout
