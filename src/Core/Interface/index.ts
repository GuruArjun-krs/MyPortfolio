import { lazy } from 'react'

const HomePage = lazy(() => import('../../Pages/Home'))

export const Pages = [
    {
        name: 'Home',
        path: '/',
        component: HomePage,
    }
]

export const HeaderTab = [
    {
        id: '#about',
        title: 'About'
    },
    {
        id: '#project',
        title: 'Projects'
    },
    {
        id: '#contact',
        title: 'Contact'
    }
]