import React from 'react'

export default function Counter() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
    <div>
        <h1>Count is {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
    )
}