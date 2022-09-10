import React,{useState} from "react";
import {Checkbox,FormControlLabel, FormLabel, TextField, Box,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

const AddBook = () => {
  const history = useNavigate();
  const [availale, setavailale] = useState(false);
  const [inputs, setBook] = useState({
    name: "",
    author:"",
    price:"",
    description:"",
   // available:false,
    image:""



  });

  const addBookHandler = async() => {
      await axios.post("http://localhost:3000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        price: Number(inputs.price),
        description: String(inputs.description),
        available: Boolean(availale),
        image: String(inputs.image)

      }).then(res => res.data);
        

  }
  const handlechange = (e) => {
    setBook((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
      }));
    //console.log(e.target.value+'name'+e.target.name);
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs,availale);
    addBookHandler().then(()=>history("/books"));
  }
  return (

   

    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        //justifyContent={"center"}
        maxWidth={700}
        margin="auto"
        marginTop={10}
        alignSelf={"center"}
        marginLeft={'auto'}
        marginRight={'auto'}
      >
        <FormLabel>Name</FormLabel>
        <TextField value={inputs.name} onChange={handlechange} margin="normal" fullWidth variant="outlined" name="name" />
        <FormLabel>Author</FormLabel>
        <TextField value={inputs.author} onChange={handlechange} margin="normal" fullWidth variant="outlined" name="author" />
        <FormLabel>Price</FormLabel>
        <TextField value={inputs.price} onChange={handlechange} type="number" margin="normal" fullWidth variant="outlined" name="price" />
        <FormLabel>Description</FormLabel>
        <TextField
        value={inputs.description} onChange={handlechange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        
         <FormLabel>Image link</FormLabel>
        <TextField
        value={inputs.image} onChange={handlechange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel value={inputs.available}  control={<Checkbox checked={availale} onChange={()=>setavailale(!availale)} />} label="Available" />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          margin="normal"
          fullWidth
        >Add Book</Button>
      </Box>
    </form>
  );
};

export default AddBook;
