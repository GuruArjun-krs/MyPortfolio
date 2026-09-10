import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { LazyLoader } from '../Shared/Components'
import Layout from '../Core/Layout'
import { Pages } from '../Core/Interface'

export const MainRoutes = () => {
    return (
        <Suspense fallback={<LazyLoader />}>
            <Routes>
                <Route element={<Layout />}>
                    {Pages.map((route) => (
                        <Route key={route.name} path={route.path} element={<route.component />} />
                    ))}
                </Route>
            </Routes>
        </Suspense>
    )
}
