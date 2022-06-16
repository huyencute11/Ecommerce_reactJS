import { Add, Remove } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import { mobile } from "../responsive";
import { popularProducts } from "../data";
import Cart from "./Cart";
import { CartContext } from "../CartProvider";
import { addToCart } from "../cartReducer";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  overflow: hidden;
  flex-direction: column;
`;
const ItemContainer = styled.div`
  ${"" /* display: flex; */}
  flex: 1;
`;
const WrapperImage = styled.div`
  ${
    "" /* width: 100%;
    height: 100px; */
  }
`;
const Image = styled.img`
  width: 65%;
  height: 60vh;
  object-fit: cover;
  padding-bottom: 20px;
  transform: 1.5s;
  transition: 1.5s ease;
  ${mobile({ height: "40vh", width: "30%" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
  ${mobile({ fontSize: "20px" })}
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  ${mobile({ fontSize: "24px" })}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 30px 0px;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FiterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FiterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FiterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FiterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const WrapperSlider = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
  overflow: hidden;
`;

const SliderImage = styled.div`
  width: 100%;
  height: 100px;
  ${"" /* background-color: red; */}
  display: flex;
`;
const SliderItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;
const Link = styled.a``;
const Product = () => {
  //REDUCER-DISPATCH
  const { dispatch } = useContext(CartContext);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const productDetail = popularProducts.find((element) => element.id == id);
  const [quantityProduct, setQuantityProduct] = useState(1);
  const handleQuantityProduct = (type) => {
    if (type == "dec") {
      if (quantityProduct == 0) setQuantityProduct(0);
      else setQuantityProduct(quantityProduct - 1);
    } else {
      setQuantityProduct(quantityProduct + 1);
    }
  };
  //format price
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 2,
  });
  const addToCartHandler = (productDetail) => {
    dispatch(addToCart(productDetail));
    console.log(CartContext);
  };

  //  horizontal slide transitions between components
  const [image, setImage] = useState(productDetail.img);
  const onImageClick = (img) => {
    setImage(img);
    // console.log(img);
    // console.log(imageRef.current.src);
  };
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <ItemContainer>
            <Image src={image} />
          </ItemContainer>

          <ItemContainer>
            <SliderImage>
              {productDetail.slider.map((img) => (
                <SliderItem src={img} onClick={() => onImageClick(img)} />
              ))}
            </SliderImage>
          </ItemContainer>
        </ImgContainer>
        <InfoContainer>
          <Title>{productDetail.title}</Title>
          <Desc>{productDetail.desc}</Desc>
          <Price>{formatter.format(productDetail.price)}</Price>
          <FilterContainer>
            <Filter>
              <FiterTitle>Color</FiterTitle>
              <FiterColor color="black" />
              <FiterColor color="darkblue" />
              <FiterColor color="gray" />
            </Filter>
            <Filter>
              <FiterTitle>Size</FiterTitle>
              <FiterSize>
                <FiterSizeOption>XS</FiterSizeOption>
                <FiterSizeOption>S</FiterSizeOption>
                <FiterSizeOption>M</FiterSizeOption>
                <FiterSizeOption>L</FiterSizeOption>
                <FiterSizeOption>XL</FiterSizeOption>
              </FiterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => handleQuantityProduct("dec")}
                style={{ cursor: "pointer" }}
              />
              <Amount>{quantityProduct}</Amount>
              <Add
                onClick={() => handleQuantityProduct("inc")}
                style={{ cursor: "pointer" }}
              />
            </AmountContainer>
            <Button onClick={() => addToCartHandler(productDetail)}>
              ADD TO CART
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newletter />
      <Footer />
    </Container>
  );
};

export default Product;
