import { useParams } from "react-router-dom";

function UserProfile(){
    const params = useParams()
    const {name} = params
    return (
        <>
        <h3>This {name}'s Page</h3>
        </>
    )
}

export default UserProfile;
