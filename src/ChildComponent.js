function ChildComponent(props){
    let name = "Pateriya "
    return (
        <>
        <h3>Child Component </h3>
        <button onClick={()=>props.alert(name)} >Click Me!</button>
        </>
    )
}

export default ChildComponent;
