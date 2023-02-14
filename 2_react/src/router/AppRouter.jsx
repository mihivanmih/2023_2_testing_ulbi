import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import Users from '../users/Users'
import UserDetaillsPage from '../pages/UserDetaillsPage'
import ErrorPage from '../pages/ErrorPage'
import HelloWorld from '../pages/HelloWorld'

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage />}/>
            <Route path={'/about'} element={<AboutPage />}/>
            <Route path={'/users'} element={<Users />}/>
            <Route path={'/users/:id'} element={<UserDetaillsPage />}/>
            <Route path={'/hello'} element={<HelloWorld />}/>
            <Route path={'/*'} element={<ErrorPage />}/>
        </Routes>
    )
}

export default AppRouter
