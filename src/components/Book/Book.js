import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

const Book = (props) => {
  const { _id, name, author, description, price, image } = props.book;
  const history = useNavigate();

  const deleteHandler = async () => {
    // const options = { method: 'DELETE', url: `http://localhost:3000/books/${_id}` };

    // axios.request(options).then((response) =>response.data
    //   //console.log(response.data);

    // ).then(()=>history('/books')).catch(function (error) {
    //   console.error(error);
    // });
    await axios
      .delete(`http://localhost:3000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => alert("Book deleted successfully"));
  };

  return (
    <div className="cards">
      <img src={image} alt={name} width="200" height="250" />
      <div className="data">
        <article>By {author} </article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>Rs-{price}</h2>
        <Button LinkComponent={Link} to={`/books/${_id}`}>
          update
        </Button>
        <Button onClick={deleteHandler}> delete</Button>
      </div>
    </div>
  );
};

export default Book;
//LinkComponent={Link} to={`/books/${_id}`}
