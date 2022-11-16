import Navbar from "./navbar"
import {Routes,Route} from "react-router-dom"
import AdminHome from "./adminHome";
import BookList from "./bookList";
import UserList from "./userList";
import Addbook from "./addBooks";
import Adduser from "./addUser";

const AdminPortal = (props) => {
    let email = props.data
    return ( 
        <div className="adminPortal">
            <Navbar data={email}/>
            <Routes>
                <Route path="/" element={<AdminHome />}/>
                <Route path="/book-list" element={<BookList />}/>
                <Route path="/user-list" element={<UserList />}/>
                <Route path="/add-user" element={<Adduser />}/>
                <Route path="/add-books" element={<Addbook />}/>
            </Routes>
        </div>
     );
}
 
export default AdminPortal;