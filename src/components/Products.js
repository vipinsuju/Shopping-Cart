import React from 'react'
import styledComponents from 'styled-components'
import Product from "./Product";
import { popularProducts } from "../data";

const Container = styledComponents.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products;