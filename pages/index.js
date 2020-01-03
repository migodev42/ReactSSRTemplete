import { useState, useCallback } from 'react';

export default function App() {
    const [number, setNumber] = useState(0)
    const onClick = useCallback(() => {
        console.log('click')
        setNumber(number + 1)
    }, [number])
    return <div>
        Nextjs hello world
        <div>
            <div>clicked:{number}</div>
            <button onClick={onClick}>click</button>
        </div>
    </div>
}