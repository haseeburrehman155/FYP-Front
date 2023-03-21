import Navbar from "../Common/navbar";
import Users from "./UserAdd";

function UserMainPage(){
    return <div className="app>">
        {Navbar()}
        {Users()}
    </div>
}

export default UserMainPage;