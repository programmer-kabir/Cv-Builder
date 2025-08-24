import React from 'react'
import { signOutFromGoogle } from '../utils/googleAuth'
import { Breadcrumb, Button } from 'antd'
import { useAuthStore } from '../store/useAuthStore'
import { HomeOutlined, LogoutOutlined } from '@ant-design/icons'
import { Link, NavLink, useLocation } from 'react-router'

const Navbar = () => {
  const { user } = useAuthStore()
  const location = useLocation()
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '')
  const items = [
    {
      title: (
        <NavLink to='/'>
          <HomeOutlined /> HOME
        </NavLink>
      ),
    },
    ...pathSegments.map((segment, index) => {
      const url = `/${pathSegments.slice(0, index + 1).join('/')}`
      return {
        title:
          index === pathSegments.length - 1 ? (
            <NavLink to={url}>{segment.toUpperCase()}</NavLink>
          ) : (
            <Link to={url}>{segment.toUpperCase()}</Link>
          ),
      }
    }),
  ]
  return (
    <div className='flex justify-between items-center'>
      <Breadcrumb items={items} />
      {user && (
        <div className='flex justify-around items-center gap-2'>
          <h1 className='pt-2 text-gray-500 hidden md:flex font-semibold'>
            Welcome, {user.name}
          </h1>
          <img
            src={user.photo}
            referrerPolicy='no-referrer'
            alt='avatar'
            className='w-8 rounded-full hidden md:flex'
          />
          <Button onClick={signOutFromGoogle} danger>
            Logout <LogoutOutlined />
          </Button>
        </div>
      )}
    </div>
  )
}

export default Navbar
