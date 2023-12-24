import React, {useContext} from "react";
import UserContext from "../Context/UserContext";

function Profile() {

    const {user} = useContext(UserContext)
    if(!user) return
    else return (
        <div>
            <h2>Profile</h2>
            welcome {user.username}
            and your password is {user.password}
        </div>
    )
}

export default Profile