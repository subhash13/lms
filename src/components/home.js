import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <section className="home">
            <h1>Home page</h1>
            <Link to="/admin-login">Admin</Link>
            <Link to="/user-login">User</Link>
        </section>
     );
}
 
export default Home;