import React from 'react';
import styled from 'styled-components';

const Product = styled.div`
   padding: ${(props) => props.padding};
   background-color: ${(props) => props.backgroundColor};
   border: 1px solid black;
   border-radius: 1rem;
   text-align: center;
   font-weight: bold;
   font-size: 2rem;
   color: white;
`

const Wrapper = styled.div`
   displayl: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: flex-start;
   padding: 1rem;
   background-color: lightgrey;
`

const productItems = [
   {
      label: "삼성 TV",
      padding: "1rem",
      backgroundColor: "red",
   },
   {
      label: "LG TV",
      padding: "3rem",
      backgroundColor: "blue",
   },
   {
      label: "샤오미 TV",
      padding: "2rem",
      backgroundColor: "green",
   }
]

const Products = () => {
   return (
      <Wrapper>
         {
            productItems.map(item => {
               return (
                  <Product
                     padding = {item.padding}
                     backgroundColor = {item.backgroundColor}
                  >
                     {item.label}
                  </Product>
               )
            })
         }
      </Wrapper>
   )
}

export default Products