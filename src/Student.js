function Student(props){
    console.log(props);
    return(
        <div style={{background : 'skyblue'}}>
            <p>Student Component with <h1> Props Name :-{ props.name} <br />Email :- {props.email}</h1></p>
           
        </div>
    )
}
export default Student;