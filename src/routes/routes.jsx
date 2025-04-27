import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import PersonalDetails from '../pages/PersonalDetails'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'
import Academics from '../pages/Academics'
import FinalPreview from '../pages/FinalPreview'
import DashboardLayout from '../layout/DashboardLayout'
import PrivateRoute from './PrivateRoute'
import Login from '../components/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: 'personal-details',
        Component: PersonalDetails,
      },
      {
        path: 'experience',
        Component: Experience,
      },
      {
        path: 'projects',
        Component: Projects,
      },
      {
        path: 'academics',
        Component: Academics,
      },
    ],
  },
  {
    path: 'preview',
    element: (
      <PrivateRoute>
        <FinalPreview />
      </PrivateRoute>
    ),
  },
  {
    path: 'login',
    Component: Login,
  },
])
