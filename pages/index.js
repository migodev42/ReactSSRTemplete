export default function App(){
    const onClick=()=>{
        console.log('click')
    }
    return <div>
        Nextjs hello world
        <div>
            <button onClick={onClick}>click</button>
        </div>
    </div>
}