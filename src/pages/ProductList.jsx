import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newletter from "../components/Newletter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import {mobile} from "../responsive"
import { useLocation } from "react-router-dom";
import {useState} from 'react'

const Container = styled.div``


const Title = styled.h1`
    margin: 20px;
`


const FilterContainer = styled.div`
    display: flex;
    justify-content: space-around;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ display: "flex", flexDirection: "column"})}

`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px"})}
`
const Select = styled.select`
    padding: 8px;
    margin-right: 20px;
    ${mobile({margin: "8px 0px", width: "100%"})}
`
const Option = styled.option`
`
const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState("Color")
    const [sort, setSort] = useState("Newest")
    console.log(filters)
    const handleFilter = (e) =>{
       const value = e.target.value
       setFilters(value)
    }
    const handleSize = (e) =>{
       //...
     }
    return (
        <Container>
            <Annoucement/>
            <Navbar/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select name="color" onChange={handleFilter}>
                        <Option selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleSize}>
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products: </FilterText>
                <Select onChange={e=>setSort(e.target.value)}>
                        <Option value= "newest">Newest</Option>
                        <Option value= "asc">Price (asc)</Option>
                        <Option value= "desc">Price (desc)</Option>
                </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
