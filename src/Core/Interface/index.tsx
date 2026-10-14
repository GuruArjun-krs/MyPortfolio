import { lazy } from 'react'
import { GithubIcon, LinkedinIcon } from "@animateicons/react/lucide";

const HomePage = lazy(() => import('../../Pages/Home'))
const ProjectsPage = lazy(() => import('../../Pages/Projects'))

export const Pages = [
    {
        name: 'Home',
        path: '/',
        component: HomePage,
    },
    {
        name: 'Projects',
        path: '/projects',
        component: ProjectsPage,
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

export const ExternalLinks = [
    {
        id: 'linkedin',
        url: 'https://www.linkedin.com/in/guruarjunkrs',
        title: 'LinkedIn',
        icon: <LinkedinIcon size={20} duration={1} color="#777777" />
    },
    {
        id: 'github',
        url: 'https://github.com/GuruArjun-krs',
        title: 'GitHub',
        icon: <GithubIcon size={20} duration={1} color="#777777" />
    }
]