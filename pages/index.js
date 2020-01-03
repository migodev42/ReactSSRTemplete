import { useState, useCallback, useEffect, useMemo } from 'react';

export default function App() {
    const [number, setNumber] = useState(0)
    const [btnDisable, setBtnDisable] = useState(true)

    const onClick = useCallback(() => {
        console.log('click')
        setNumber(number + 1)
    }, [number])

    useEffect(() => {
        console.log('number has changed')
    }, [number])

    useEffect(() => {
        setBtnDisable(false)
    }, [])

    const btn = useMemo(() => {
        return <button onClick={onClick} disabled={btnDisable}>click</button>
    }, [onClick, btnDisable])

    return <div>
        Nextjs hello world
        <div>
            <div>clicked:{number}</div>
            {btn}
        </div>
    </div>
}