import { render, screen } from '@testing-library/react'
import Users from './Users'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route } from 'react-router-dom'
import App from '../App'
import UserDetaillsPage from '../pages/UserDetaillsPage'
import React from 'react'
import * as PropTypes from 'prop-types'
import AppRouter from '../router/AppRouter'
import { renderWithRouter } from '../tests/helpers/renderWithRouter'

jest.mock('axios')

function Routes(props) {
    return null
}

Routes.propTypes = {children: PropTypes.node}
describe('getData', () => {
    let response
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                }
            ]
        }
    })
    
    afterEach(() => {
        jest.clearAllMocks()
    })
    
    test('USER TEST', async () => {
        axios.get.mockReturnValue(response)
        render(<Users/>)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)
        expect(axios.get).toBeCalledTimes(1)
        screen.debug()
    })
    
    test('test redirect to details page', async () => {
        axios.get.mockReturnValue(response)
        // render(
        //     <MemoryRouter>
        //         <AppRouter />
        //         <Users />
        //     </MemoryRouter>
        // )
        renderWithRouter(<Users />)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)
        userEvent.click(users[0])
        expect(screen.getByTestId('user-page')).toBeInTheDocument()
    })
})