import { Link } from "react-router-dom";

function About(){
    return (
        <>
        <h3>About Page</h3>
        <Link to='/'>Go to Home Page</Link>
        <li><Link to='/user/ashu' >Ashu</Link></li>
        <li><Link to='/user/ravi' >Ravi</Link></li>
        </>
    )
}

export default About;
