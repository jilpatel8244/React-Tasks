function App () {
    let [ count, setCount ] = React.useState(0); 
    return (
        <span onClick={() => {setCount(count+1)}}>Count : {count}</span>
    )
}
