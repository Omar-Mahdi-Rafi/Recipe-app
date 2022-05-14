import React, { useEffect } from "react";
import styled from "styled-components";
import {motion} from 'framer-motion';
import {link} from 'react-router-dom';
import {useParams} from 'react-router-dom';



function Cuisine() {

    const [cuisine, setCuisine] = useState([]);

   const getCuisine = async (name) => {
       const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
       const recipes = await data.json();
       setCuisine(recipes.results);
   }

   useEffect(() => {
       getCuisine('italian')
   }, [])
  return (
    <div>
      

    </div>
  )
}

export default Cuisine;