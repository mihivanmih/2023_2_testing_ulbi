import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../router/AppRouter'
import { render } from '@testing-library/react'

export const renderWithRouter = (component, initialRote = '/') => {
    return render(
            <MemoryRouter initialEntries={ [initialRote] }>
                <AppRouter/>
                { component }
            </MemoryRouter>
        )
}