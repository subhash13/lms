import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { useLocation } from "react-router-dom";

const BookList = () => {
    let location = useLocation()
    let [books,setBooks] = useState([])
    useEffect(() => {
        let fetchBooks = async() =>{
            let response = await fetch("http://localhost:4000/books");
            let data = await response.json();
            setBooks(data);
        }
        fetchBooks();
    },[])

    let handleDelete = (id)=>{
        fetch(`http://localhost:4000/books/${id}` ,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(books)
        })
        window.location.reload() //reloads the page 
    }

    let hide = (id) =>{
        setBooks(books.filter(item => item.id !== id))
    }

    return ( 
        <div className="bookList">
            <h1>Book list</h1>
            <div className="bookList">
                {books.map((data)=>(
                    <Card style={{ width: '16rem',display:"inline-block", margin:"10px 15px" }}>
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{data.author}</Card.Subtitle>
                      { location.pathname == '/admin-portal/book-list' && <Card.Link href="#" onClick={()=>handleDelete(data.id)} className="btn btn-sm btn-danger">Delete</Card.Link>}
                      { location.pathname == '/user-portal/book-list' && <Card.Link href="#" onClick={()=>hide(data.id)} className="btn btn-sm btn-warning">Not interested</Card.Link>}
                    </Card.Body>
                  </Card>
                ))}
            </div>
        </div>
     );
}
 
export default BookList
