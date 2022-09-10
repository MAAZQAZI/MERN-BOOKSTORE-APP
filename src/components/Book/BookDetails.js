import React,{useState} from "react";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Checkbox,FormControlLabel, FormLabel, TextField, Box,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const axios = require("axios");




const BookDetails = () => {

    const [inputs, setBook] = useState({});
    const history = useNavigate();
    const [availale, setavailale] = useState(false);
    const id=useParams().id;
    const  url= ''+id;

    console.log("new-> "+id);

    useEffect(() => {
        const options = {method: 'GET', url: `http://localhost:3000/books/${id}`};


        const fetchData = async () => {
    
            try{
                axios.request(options).then(function (response) {
                   // console.log(response.data);
                    setBook(response.data);
                    console.log(response.data);
                  }).catch(function (error) {
                    console.error(error);
                  });
               
                
        
            }catch
            (error) {
                console.log("nhi lerha data")
            }
            
        
        }
       
        fetchData();
        
    }, [id]);

    
  
    const updateBookHandler = async() => {
        await axios.put(`http://localhost:3000/books/${id}`, {
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
      console.log(e.target.value+'name'+e.target.name);
    }
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
     console.log(inputs,availale);
      updateBookHandler().then(()=>history("/books"));
    }
   // console.log("I need this one:=> "+inputs);
  return (
    <div>
    <h1>Book Details</h1>
       {inputs && (<form onSubmit={handleSubmit}>
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
        >Update Book</Button>
      </Box>
    </form>)}
    </div>
  )
}

export default BookDetails