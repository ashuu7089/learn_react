import React, { useState } from "react";

function BottleRen(){
    const [logged, setLogged] = useState(3)


    return(
        <div>
            {logged==1? <h1>Welcome User 1</h1>: logged==2 ? <h1>Welcome User 2</h1>: <h1>Welcome User 3</h1>}
        </div>
    )
}

export default BottleRen;