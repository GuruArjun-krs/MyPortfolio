import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import ProjectCard1 from '../../Assets/Images/project_card_1.jpg'
import ProjectCard2 from '../../Assets/Images/project_card_2.jpg'
import ProjectCard3 from '../../Assets/Images/project_card_3.jpg'
import ProjectFlowApp from '../../Assets/Images/project_flow_app.jpg'
import PulseAIMobile from '../../Assets/Images/pulse_ai_mobile.jpg'
import SolarARImg from '../../Assets/Images/solar_ar_preview.jpg'
import WearableBLEImg from '../../Assets/Images/wearable_ble_app.jpg'
import GeoFarmImg from '../../Assets/Images/geofarm_map_dashboard.jpg'
import XoxoGlamboxImg from '../../Assets/Images/xoxo_glambox_web.jpg'

export interface ProjectDetail {
    id: number
    title: string
    category: 'mobile' | 'web' | 'freelance' | 'mini'
    categoryLabel: string
    badge?: string
    role: string
    timeline: string
    description: string
    image: string
    techStack: string[]
    points: string[]
    demoUrl?: string
    githubUrl?: string
}

export const allProjects: ProjectDetail[] = [
    // 1. Enexio Connect
    {
        id: 1,
        title: 'Enterprise',
        category: 'mobile',
        categoryLabel: 'Enterprise Mobile · iOS & Android',
        badge: 'Production App',
        role: 'Lead Mobile Engineer',
        timeline: 'Production Suite',
        description:
            'Enterprise workforce mobility and dispatch management suite built for large-scale distributed field operations with real-time telemetry and hierarchical escalation.',
        image: ProjectCard3,
        techStack: ['React Native 0.84', 'Mapbox SDK', 'Firebase Firestore', 'FCM', 'iOS & Android'],
        points: [
            'Led end-to-end mobile engineering of the enterprise workforce application for iOS and Android, focusing on seamless user workflows and robust state architecture.',
            'Integrated Mapbox SDK with background location permissions to deliver accurate, battery-optimized real-time employee tracking and route monitoring across active field shifts.',
            'Implemented in-app real-time messaging using Firebase Firestore and configured Firebase Cloud Messaging (FCM) for automated, high-priority push notifications supporting hierarchy-based escalation protocols.',
            'Built secure authentication flows and multi-tier role-based views (FE, FEH, PM, Admin and so on), enforcing strict authorization boundaries for operational escalation chains.',
            'Profiled bridge transactions and component render trees to eliminate UI jank, successfully deploying stable builds across both the Google Play Store and Apple App Store.',
            'Executed a major React Native upgrade from 0.74 to 0.84, resolving breaking dependency changes, leveraging modern architecture performance gains, and enhancing runtime responsiveness.',
        ],
    },

    // 2. Rengy
    {
        id: 2,
        title: 'SolarAR Vision 3D',
        category: 'mobile',
        categoryLabel: 'AR Mobile App · Solar Technology',
        badge: 'AR Innovation',
        role: 'Mobile & AR Engineer',
        timeline: 'Commercial Solution',
        description:
            'Augmented reality solar simulation platform allowing residential and commercial clients to project and scale 3D solar arrays directly onto rooftops in real time.',
        image: SolarARImg,
        techStack: ['React Native', 'Google Scene Viewer (ARCore)', 'AR Quick Look (ARKit)', 'USDZ & GLB/GLTF', 'Vendor Portal'],
        points: [
            'Implemented an interactive 3D solar preview engine using native device capabilities—leveraging Google Scene Viewer (ARCore) on Android and AR Quick Look (ARKit) on iOS—allowing clients and vendors to project and scale solar panels onto residential and commercial rooftops before installation.',
            'Managed 3D model pipelines, configuring platform-specific asset delivery (USDZ for iOS, GLB/GLTF for Android) to achieve fast model caching and seamless AR intent launching across mobile chipsets.',
            'Engineered an operational vendor module and real-time dashboard to monitor project pipelines, installation milestones, site survey records, and assigned technician workloads.',
            'Built the site inspection and installation tracking workflow, enabling technicians to upload on-site verification data, milestone checklists, and structural roof documentation.',
            'Architected permission-based UI routing and state management to isolate vendor, installer, and administrative interfaces within a single unified codebase.',
        ],
    },

    // 3. Rwalker
    {
        id: 3,
        title: 'BLE Wearable',
        category: 'mobile',
        categoryLabel: 'IoT & Wearables · React Native',
        badge: 'Hardware BLE Bridge',
        role: 'Mobile IoT Engineer',
        timeline: 'Health & Fitness',
        description:
            'Connected health ecosystem synchronizing high-frequency biometrics, heart-rate intervals, and activity progression from smartwatches over Bluetooth Low Energy.',
        image: WearableBLEImg,
        techStack: ['React Native', 'Veepoo Smartwatch SDK', 'Native BLE Bridges', 'Health Telemetry', 'Android Background Sync'],
        points: [
            'Integrated the Veepoo Smartwatch SDK via custom React Native native bridges, establishing resilient Bluetooth Low Energy (BLE) communication channels to scan, pair, and synchronize data with wearable devices.',
            'Architected asynchronous data-sync pipelines to extract and parse daily health telemetry from the watch including step counts, distance traveled, calorie expenditure, and active heart-rate intervals.',
            'Built comprehensive activity monitoring dashboards and interactive progression charts, allowing users to inspect real-time metrics, historical trends, and daily fitness goal completions.',
            'Optimized BLE reconnect routines and native permission flows (Bluetooth, Precise Location, and Background Sync) to minimize battery drain while maintaining background data accuracy across Android.',
        ],
    },

    // 4. Digital Palm .ai -> GeoFarm Intelligence
    {
        id: 4,
        title: 'GeoFarm Intelligence',
        category: 'web',
        categoryLabel: 'GIS & AgTech Platform · Web App',
        badge: 'Enterprise GIS',
        role: 'Frontend Architect',
        timeline: 'Precision Agriculture',
        description:
            'Spatial farm intelligence dashboard combining live vehicle GPS telemetry, multi-boundary polygon rendering, and agricultural yield analytics.',
        image: GeoFarmImg,
        techStack: ['React.js', 'Mapbox GL JS', 'Ant Design', 'Tailwind CSS', 'KML Geometries', 'Pro Tracker API'],
        points: [
            'Bootstrapped the core web application from scratch, designing an enterprise-grade admin dashboard layout by pairing Ant Design components with custom utility styling via Tailwind CSS.',
            'Integrated the Pro Tracker API with Mapbox GL JS to deliver real-time vehicle GPS tracking, dynamic marker smoothing, and historical route playback with directional path visualization.',
            'Parsed and rendered multi-boundary KML farm plots onto custom Mapbox layers, establishing geographic polygon overlays to contextualize regional agricultural zones.',
            'Engineered interactive map overlays and popups displaying yield metrics and operational analytics directly within corresponding farm plot boundaries, improving spatial decision-making for farm supervisors.',
            'Tuned vector layer rendering and data-transformation pipelines to maintain fluid panning and zooming while displaying complex multi-polygon geometries and high-frequency coordinate streams.',
        ],
    },

    // 5. Boom Merchant Web 
    {
        id: 5,
        title: 'Merchant Hub',
        category: 'web',
        categoryLabel: 'E-Commerce Platform · Web Dashboard',
        badge: 'Analytics Engine',
        role: 'Web Application Engineer',
        timeline: 'SaaS Platform',
        description:
            'Comprehensive merchant operations portal featuring live sales analytics, zero-memory-leak inventory CRUD, and dynamic multi-tier shipping zone managers.',
        image: ProjectCard2,
        techStack: ['React.js', 'Chart.js', 'REST Endpoints', 'Tailwind CSS', 'Performance Profiling'],
        points: [
            'Engineered interactive analytics dashboards using Chart.js, profiling and optimizing render cycles to eliminate redundant re-renders when handling high-frequency merchant sales datasets.',
            'Developed comprehensive CRUD operations for merchant inventory, implementing robust cleanup hooks and memory management patterns to resolve unmount memory leaks and lower client-side memory footprint.',
            'Built dynamic profile and multi-tier shipping settings modules, enabling merchants to configure granular destination-based delivery parameters and update credentials via integrated REST endpoints.',
            'Built an adaptive, mobile-first responsive layout across all modules, ensuring consistent usability, touch accessibility, and sub-second UI responsiveness on tablet and smartphone viewports.',
        ],
    },

    // 6. Aadhitya Mobile App
    {
        id: 6,
        title: 'E-commerce app',
        category: 'mobile',
        categoryLabel: 'Social & Media App · iOS & Android',
        badge: '60fps Media Engine',
        role: 'Full Lifecycle Mobile Lead',
        timeline: 'Cross-Platform',
        description:
            'High-velocity social engagement platform featuring 60fps vertical video feeds, spatial friend discovery via interactive map clustering, and localized commerce.',
        image: PulseAIMobile,
        techStack: ['React Native', 'Reels Preload Engine', 'Mapbox Clustering', 'FCM', 'Apple OAuth', 'Localization'],
        points: [
            'Bootstrapped the entire cross-platform mobile application from scratch, configuring scalable folder structures, navigation graphs, dynamic theme systems, and production build pipelines across Android and iOS.',
            'Engineered multi-channel onboarding featuring role-based access control alongside Social Login (Google, Apple OAuth), securing token management and session persistence.',
            'Built high-performance social feeds and a vertical video "Reels" playback module, optimizing viewability windowing, video preloading/caching, and frame rendering to deliver continuous 60fps scrolling.',
            'Implemented interactive location-based friend discovery using map overlays and dynamic marker clustering, allowing users to visualize and connect with nearby friends in real time.',
            'Integrated in-app messaging and synchronized push alert channels via Firebase Cloud Messaging (FCM) to drive engagement across dynamic user interactions (likes, comments, mentions, shares).',
            'Implemented a scalable localization engine for seamless multi-language switching, alongside a localized product listing module for in-app commercial interactions.',
            'Managed the complete native iOS lifecycle within Xcode and App Store Connect, resolving platform-specific gesture collisions, configuring code signing, and ensuring strict compliance with Apple Review Guidelines.',
        ],
    },

    // 7. Uzhavan Connect (B2B)
    {
        id: 7,
        title: 'B2B Marketplace',
        category: 'mobile',
        categoryLabel: 'B2B Marketplace · iOS & Android',
        badge: 'Kotlin Rebuild',
        role: 'Lead Cross-Platform Developer',
        timeline: 'Marketplace',
        description:
            'Ground-up modernization of a legacy Kotlin Android system into an enterprise cross-platform marketplace with tiered volume pricing, catalog caching, and Razorpay checkout.',
        image: ProjectCard1,
        techStack: ['React Native', 'Kotlin (Migration)', 'Razorpay SDK', 'Catalog Caching', 'FCM Alerts'],
        points: [
            'Analyzed and maintained an existing legacy Android app written in Kotlin, successfully spearheading the ground-up rebuild into a scalable, cross-platform React Native application for both iOS and Android.',
            'Architected the core B2B marketplace experience including tiered product listings, catalog caching, multi-item cart management, and seamless order dispatch tracking.',
            'Integrated the Razorpay SDK for secure, low-friction checkout, handling digital payment options (UPI, net banking, cards) alongside automated reconciliation and fallback retry handling.',
            'Implemented Firebase Cloud Messaging (FCM) for automated dispatch updates, status escalations, and transactional order tracking alerts.',
            'Managed end-to-end production releases on both the Google Play Store and Apple App Store, configuring certificates, provisioning profiles, privacy policies, and release tracks.',
        ],
    },

    // 8. Boom Shop App
    {
        id: 8,
        title: 'Mobile E-Commerce',
        category: 'mobile',
        categoryLabel: 'Consumer Shopping · iOS & Android',
        badge: 'Razorpay Payments',
        role: 'Mobile & Release Engineer',
        timeline: 'Direct-to-Consumer',
        description:
            'Consumer retail mobile application with dynamic checkout pipelines supporting card, UPI, and net-banking transactions alongside strict iOS compliance management.',
        image: ProjectFlowApp,
        techStack: ['React Native', 'Razorpay SDK', 'Xcode', 'App Store Connect', 'Apple Privacy Manifests'],
        points: [
            'Integrated the Razorpay SDK within React Native, architecting secure payment intent generation, webhook event validation, and dynamic checkout flows supporting cards, UPI, and net banking.',
            'Managed the end-to-end iOS release lifecycle via Xcode and App Store Connect, configuring code-signing certificates, provisioning profiles, privacy manifests, and App Store compliance guidelines for production approval.',
        ],
    },

    // 9. BlueHired Job Portal
    {
        id: 9,
        title: 'Career Portal',
        category: 'web',
        categoryLabel: 'Recruitment & Job Platform · Web',
        badge: 'Architecture Refactor',
        role: 'Frontend Stabilization Specialist',
        timeline: 'Web Application',
        description:
            'Modularized employment platform refactored from legacy monoliths into atomic components, resolving UI state drifts and zeroing layout shifts across device sizes.',
        image: ProjectCard2,
        techStack: ['React.js', 'State Sync', 'Modular Refactoring', 'Responsive Web', 'Layout Optimization'],
        points: [
            'Spearheaded application maintenance and refactoring, decomposing monolithic legacy components into reusable, modular patterns to improve code readability and maintainability.',
            'Engineered a responsive, adaptive web layout across all primary viewports, eliminating layout shifts and ensuring touch accessibility for mobile and tablet traffic.',
            'Diagnosed and resolved UI state synchronization bugs and layout regressions, streamlining release stabilization and overall user experience.',
        ],
    },

    // 10. My Trainer Pro 
    {
        id: 10,
        title: 'Fitness iOS',
        category: 'mobile',
        categoryLabel: 'Fitness Coaching · Native iOS & RN',
        badge: 'TestFlight Staged Rollout',
        role: 'iOS Stabilization Lead',
        timeline: 'Mobile App',
        description:
            'Personal training and biometric coaching application stabilized for production iOS readiness with strict safe-area constraints and crash diagnostic tuning.',
        image: ProjectCard3,
        techStack: ['React Native', 'Xcode Scheme Management', 'TestFlight Staging', 'Apple Privacy Guidelines'],
        points: [
            'Led end-to-end iOS module stabilization, feature enhancements, and UI parity adjustments, resolving platform-specific rendering anomalies, safe-area constraints, and native layout discrepancies.',
            'Configured native iOS build pipelines within Xcode, establishing clean scheme management, provisioning profiles, distribution certificates, and Apple privacy manifest compliance for production readiness.',
            'Coordinated staged beta releases via TestFlight, analyzing crash logs and diagnostic feedback to resolve critical crashes, race conditions, and memory pressure warnings prior to general availability.',
        ],
    },

    // 11. FREELANCE PROJECT: XOXO Glambox (MUA portfolio)
    {
        id: 11,
        title: 'XOXO Glambox (MUA portfolio)',
        category: 'freelance',
        categoryLabel: 'Freelance Showcase · Web Development',
        badge: 'Freelance Client',
        role: 'Sole Designer & Frontend Developer',
        timeline: 'Client Showcase',
        description:
            'Aesthetic, responsive brand showcase and portfolio website crafted with an elegant, warm aesthetic tailored for high-end bridal beauty and makeup artistry.',
        image: XoxoGlamboxImg,
        techStack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Responsive Layout', 'Vercel'],
        points: [
            'Designed and deployed an aesthetic, responsive brand showcase and portfolio website using React.js, pairing Tailwind CSS with DaisyUI component primitives to craft an elegant, accessible visual theme.',
        ],
    },

    // 12. MINI PROJECT: Tribe blog
    {
        id: 12,
        title: 'Tribe blog',
        category: 'mini',
        categoryLabel: 'Mini Project · Mobile Community',
        badge: 'Mini Project',
        role: 'Personal Exploration',
        timeline: 'Personal Project',
        description:
            'Community blogging mobile app built with cross-platform React Native, real-time Firebase services, and a robust Node.js and MongoDB backend.',
        image: PulseAIMobile,
        techStack: ['React Native', 'Firebase', 'MongoDB', 'Node.js'],
        points: [
            'Engineered a cross-platform mobile community blogging interface with markdown preview support.',
            'Integrated Firebase real-time listeners for live commenting and engagement counts.',
            'Built back-end services with Node.js and MongoDB for scalable article storage and author indexing.',
        ],
    },

    // 13. MINI PROJECT: Tribe chat app
    {
        id: 13,
        title: 'Tribe chat app',
        category: 'mini',
        categoryLabel: 'Mini Project · Real-time Messaging',
        badge: 'Mini Project',
        role: 'Personal Exploration',
        timeline: 'Personal Project',
        description:
            'Instant messaging web application with live user presence indicators, direct messaging channels, and synchronized MongoDB chat history.',
        image: ProjectFlowApp,
        techStack: ['React.js', 'Firebase', 'MongoDB', 'Node.js'],
        points: [
            'Built responsive web messaging client using React.js with active presence detection.',
            'Utilized Firebase real-time sync for sub-second chat updates and typing indicators.',
            'Integrated secure message persistence and conversation threading via Node.js and MongoDB.',
        ],
    },

    // 14. MINI PROJECT: Personal portfolio
    {
        id: 14,
        title: 'Personal portfolio',
        category: 'mini',
        categoryLabel: 'Mini Project · Interactive Portfolio',
        badge: 'Mini Project',
        role: 'Personal Project',
        timeline: 'Continuous',
        description:
            'Modern developer portfolio featuring fluid typography, dynamic motion aesthetics, interactive platform showcases, and tailored dark-emerald palette.',
        image: ProjectCard2,
        techStack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Vite', 'TypeScript'],
        points: [
            'Engineered custom fluid typography scaling that dynamically responds to device viewport widths.',
            'Crafted multi-route architecture with seamless navigation, category filtering, and responsive cards.',
            'Styled with Tailwind CSS and DaisyUI using a curated dark-emerald (#0A6451) aesthetic.',
        ],
    },
]

type FilterCategory = 'all' | 'mobile' | 'web' | 'freelance' | 'mini'

const ProjectsPage: React.FC = () => {
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({})

    const toggleExpand = (id: number) => {
        setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    const filteredProjects = useMemo(() => {
        return allProjects.filter((project) => {
            const matchesCategory =
                selectedCategory === 'all' ? true : project.category === selectedCategory

            const q = searchQuery.toLowerCase().trim()
            if (!q) return matchesCategory

            const matchesSearch =
                project.title.toLowerCase().includes(q) ||
                project.description.toLowerCase().includes(q) ||
                project.techStack.some((tech) => tech.toLowerCase().includes(q)) ||
                project.points.some((pt) => pt.toLowerCase().includes(q))

            return matchesCategory && matchesSearch
        })
    }, [selectedCategory, searchQuery])

    return (
        <div className='min-h-full pb-24 pt-16 sm:pt-20 px-3 sm:px-6 md:px-10 lg:px-14 flex flex-col gap-10 max-w-7xl mx-auto'>
            <div className='flex flex-wrap items-center justify-between gap-4 border-b border-[#0A6451]/15 pb-6'>
                <button
                    onClick={() => navigate('/')}
                    className='group flex items-center gap-2.5 text-[#0A6451] font-primary font-semibold text-sm sm:text-base uppercase tracking-wider transition-colors hover:text-[#040303] cursor-pointer'
                >
                    <span className='w-8 h-8 rounded-full border border-[#0A6451]/30 flex items-center justify-center transition-transform group-hover:-translate-x-1 bg-white shadow-xs'>
                        ←
                    </span>
                    <span>Back to Overview</span>
                </button>

                <div className='flex items-center gap-2 text-xs font-primary font-semibold uppercase tracking-widest text-[#777777]'>
                    <span className='inline-block w-2 h-2 rounded-full bg-[#0A6451] animate-pulse' />
                    <span>Selected Works · {allProjects.length} Projects &amp; Initiatives</span>
                </div>
            </div>

            {/* Header Title Section */}
            <div className='flex flex-col md:flex-row md:items-end justify-between gap-6'>
                <div>
                    <h1 className='font-primary font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#0A6451] uppercase tracking-tight leading-none'>
                        PROJECT ARCHIVE
                    </h1>
                    <p className='mt-3 text-sm sm:text-base md:text-lg text-[#777777] font-primary max-w-2xl leading-relaxed'>
                        Real-world production systems, cross-platform mobile apps (iOS &amp; Android), web platforms, freelance client work, and technical mini-projects.
                    </p>
                </div>

                <div className='relative w-full md:w-80'>
                    <input
                        type='text'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder='Search stack (e.g. Mapbox, Razorpay, BLE)...'
                        className='w-full px-4 py-2.5 pl-10 rounded-full border border-[#0A6451]/25 bg-white text-xs sm:text-sm font-primary focus:outline-none focus:border-[#0A6451] focus:ring-1 focus:ring-[#0A6451] transition-all'
                    />
                    <svg
                        className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777777]'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                    </svg>
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#777777] hover:text-[#040303]'
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            <div className='flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none'>
                {[
                    { id: 'all', label: 'All Projects', count: allProjects.length },
                    { id: 'mobile', label: 'Mobile (React Native)', count: allProjects.filter((p) => p.category === 'mobile').length },
                    { id: 'web', label: 'Web Platforms', count: allProjects.filter((p) => p.category === 'web').length },
                    { id: 'freelance', label: 'Freelance Project', count: allProjects.filter((p) => p.category === 'freelance').length },
                    { id: 'mini', label: 'Mini Projects', count: allProjects.filter((p) => p.category === 'mini').length },
                ].map((tab) => {
                    const active = selectedCategory === tab.id
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedCategory(tab.id as FilterCategory)}
                            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-primary font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                                active
                                    ? 'bg-[#0A6451] text-white shadow-md shadow-[#0A6451]/20 scale-[1.02]'
                                    : 'bg-white border border-[#0A6451]/20 text-[#2d4a45] hover:border-[#0A6451] hover:bg-[#0A6451]/5'
                            }`}
                        >
                            <span>{tab.label}</span>
                            <span
                                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                    active ? 'bg-white/20 text-white' : 'bg-[#0A6451]/10 text-[#0A6451]'
                                }`}
                            >
                                {tab.count}
                            </span>
                        </button>
                    )
                })}
            </div>

            {filteredProjects.length === 0 && (
                <div className='py-20 text-center flex flex-col items-center justify-center bg-white rounded-2xl border border-dashed border-[#0A6451]/30 p-8'>
                    <p className='font-primary text-xl font-bold text-[#0A6451] uppercase tracking-wide'>
                        No matching projects found
                    </p>
                    <p className='font-primary text-sm text-[#777777] mt-1'>
                        Try adjusting your keywords or clearing the filter.
                    </p>
                    <button
                        onClick={() => {
                            setSearchQuery('')
                            setSelectedCategory('all')
                        }}
                        className='mt-4 px-5 py-2 text-xs font-primary uppercase tracking-widest text-white bg-[#0A6451] rounded-full hover:bg-[#07473a]'
                    >
                        Reset filters
                    </button>
                </div>
            )}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
                {filteredProjects.map((project) => {
                    const isExpanded = !!expandedIds[project.id]
                    const visiblePoints = isExpanded ? project.points : project.points.slice(0, 3)

                    return (
                        <article
                            key={project.id}
                            className='group bg-white rounded-2xl border border-black/5 hover:border-[#0A6451]/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden'
                        >
                            <div className='relative w-full aspect-4/3 bg-gray-100 overflow-hidden'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />

                                <div className='absolute top-3 left-3 z-10'>
                                    <span className='bg-white/95 backdrop-blur-xs text-[#0A6451] font-primary font-bold text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-xs border border-white/60'>
                                        {project.categoryLabel}
                                    </span>
                                </div>

                                {project.badge && (
                                    <div className='absolute top-3 right-3 z-10'>
                                        <span className='bg-black/70 backdrop-blur-xs text-white font-primary font-semibold text-[10px] px-2.5 py-1 rounded-full'>
                                            {project.badge}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className='p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4'>
                                <div>
                                    <div className='flex items-baseline justify-between gap-2 mb-1.5'>
                                        <h3 className='font-primary font-bold text-xl sm:text-2xl text-[#040303] group-hover:text-[#0A6451] transition-colors'>
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className='text-xs text-[#777777] font-primary mb-3 leading-relaxed'>
                                        {project.description}
                                    </p>

                                    <div className='space-y-2.5'>
                                        {visiblePoints.map((pt, idx) => (
                                            <div key={idx} className='flex items-start gap-2 text-xs font-primary text-[#2d4a45] leading-relaxed'>
                                                <span className='w-1.5 h-1.5 rounded-full bg-[#0A6451] mt-1.5 shrink-0' />
                                                <span>{pt}</span>
                                            </div>
                                        ))}

                                        {project.points.length > 3 && (
                                            <button
                                                onClick={() => toggleExpand(project.id)}
                                                className='text-[11px] font-primary font-bold text-[#0A6451] uppercase tracking-wider hover:underline pt-1 inline-flex items-center gap-1 cursor-pointer'
                                            >
                                                {isExpanded
                                                    ? 'Show fewer details ↑'
                                                    : `+ ${project.points.length - 3} more technical achievements ↓`}
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className='pt-3 border-t border-gray-100 flex flex-col gap-2.5'>
                                    <div className='flex flex-wrap gap-1.5'>
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className='text-[10px] font-primary font-medium text-[#2d4a45] bg-[#0A6451]/8 px-2 py-0.5 rounded-md'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsPage
