import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../store/store'
import { render, screen } from '@testing-library/react'
import Counter from './Counter'
import { renderWithRedux } from '../../tests/helpers/renderWithRedux'
import { renderTestApp } from '../../tests/helpers/renderTestApp'

describe('Counter test', () => {
    test('Test router', async () => {
        // const {getByTestId} = render(
        //     <Provider store={createReduxStore({
        //         counter: {value: 10}
        //     })}>
        //         <Counter />
        //     </Provider>)
        
        // const {getByTestId} = renderWithRedux(<Counter />, {
        //     counter: {value: 10}
        // })
        
        const {getByTestId} = renderTestApp(<Counter />, {
            initialRote: '/',
            initialState: {
                counter: {value: 10}
            }
        })
        
        const increment = getByTestId('inc-btn')
        //screen.debug()
        expect(getByTestId('value-title')).toHaveTextContent('10')
        userEvent.click(increment)
        expect(getByTestId('value-title')).toHaveTextContent('11')
    })
})