import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import PersonalDetails from '../pages/PersonalDetails'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'
import Academics from '../pages/Academics'
import FinalPreview from '../pages/FinalPreview'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/dashboard',
    Component: Dashboard,
    children: [
      {
        index: true,
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
    Component: FinalPreview,
  },
])
