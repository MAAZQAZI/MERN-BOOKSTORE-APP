import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Book from './Book'



const  url= 'http://localhost:3000/books';


const fetchBooks = async () => {
    console.log('data fetch first')
    try{
       return await axios.get(url).then((res)=>
       res.data
       );


    }catch
    (error) {
        console.log(error)
    }

}


const Books = () => {

    const [books, setBooks] = useState([])
    
    useEffect(() => {
        fetchBooks().then((data) => setBooks(data.books))
      
    },[]);
   
   console.log(books)
  return (
    <div>
        <h1>All Books are here  </h1>
        
        <ul>
            {books.map((book) => <Book key={book._id} book={book} />)}
        </ul>
    </div>
  )
}

        
export default Books