import styled from 'styled-components'
import { popularProducts, Black, Blue, White } from '../data'
import Product from './Product'
import { useEffect, useState } from 'react'
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState(popularProducts)
    const [filteredProducts, setFilteredProducts] = useState([])
   
    useEffect(() => {
        // if(filters === "Black")
        //    setProducts(Black) 
        // else if(filters === "White")
        //     setProducts(White) 
        // else if(filters === "Color")
        //     setProducts(popularProducts)
        // else
        //      setProducts(Blue)
        (filters === "Color") ? setProducts(popularProducts) : filters === "Black" ? setProducts(Black) :  (filters === "White") ?
        setProducts(White) :  setProducts(Blue)
        console.log(filters)
        
        
         console.log('new products', products)
        // setProducts(`${filters}`)
        // console.log("sau", products)
    }, [filters])
   
    return (
        <Container>
            {products.map(item=>(
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products
