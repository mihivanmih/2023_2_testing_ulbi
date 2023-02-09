import React from 'react'
import { renderWithRouter } from '../../tests/helpers/renderWithRouter'
import Navbar from './Navbar'
import userEvent from '@testing-library/user-event'
import { screen, configure } from '@testing-library/react'

describe('Navbar', () => {
    test('test about link', async () => {
        renderWithRouter(<Navbar />)
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })
    
    test('test main link', async () => {
        renderWithRouter(<Navbar />)
        const mainLink = screen.getByTestId('main-link')
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })
    
    test('test users link', async () => {
        renderWithRouter(<Navbar />)
        const usersLink = screen.getByTestId('users-link')
        userEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })
})