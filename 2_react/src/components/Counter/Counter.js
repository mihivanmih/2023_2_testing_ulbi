import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue'
import { decrement, increment } from '../../store/reducers/CounterReducer'

const Counter = () => {
    
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)
    
    const onIncrement = () => {
        dispatch(increment(value))
    }
    const onDecrement = () => {
        dispatch(decrement(value))
    }
    
    return (
        <div>
            <h1 data-testid={'value-title'}>{value}</h1>
            <button data-testid={'inc-btn'} onClick={() => onIncrement()}>+1</button>
            <button data-testid={'dec-btn'} onClick={onDecrement}>-1</button>
        </div>
    )
}

export default Counter
