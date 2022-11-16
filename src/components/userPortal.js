import Navbar from "./navbar"
import {Routes,Route} from "react-router-dom"
import UserHome from "./userHome";
import BookList from "./bookList";
import UserNav from "./userNav";

const AdminPortal = (props) => {
    let email = props.data
    return ( 
        <div className="adminPortal">
            <UserNav/>
            <Routes>
                <Route path="/" element={<UserHome />}/>
                <Route path="/book-list" element={<BookList />}/>
            </Routes>
        </div>
     );
}
 
export default AdminPortal;