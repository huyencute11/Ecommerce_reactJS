import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #4c4c4c;
`
const Left = styled.div`
    flex: 1;
    padding: 20px;
`
const Logo = styled.h1`
    flex: 1;
    display: flex;
    flex-direction: column;
   

`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
`
const SocialIcon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props=>props.color)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    transition: all 1s ease;
    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`


const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8"})}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 100%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ANANAS</Logo>
                <Desc>
                Sáng tạo và lên ý tưởng vào năm 1946, xuất bản lần đầu tiên vào năm 1947 bởi tác giả người Bỉ - Morris (tên đầy đủ là Maurice de Bevère, 1923- 2001). Bộ truyện tranh Lucky Luke được viết theo tiếng Pháp với nội dung kể về những chuyến phiêu lưu của chàng cao bồi Lucky Luke nghèo đơn độc. Với biệt tài “bắn nhanh hơn cái bóng của mình”, anh luôn ra tay giúp người gặp hoạn nạn trên hành trình lang bạt khắp miền Tây nước Mỹ, chẳng ở nơi nào quá lâu.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Tern</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:" 10px", cursor: "pointer"}}/>
                    70 Pham Ngu Lao, Phuong Dakao, quan 1, Tp HCM
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:" 10px", cursor: "pointer"}}/>
                   +84 123 566 788
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:" 10px", cursor: "pointer"}}/>
                    contact@Ananas.com.vn
                </ContactItem>
                <Payment src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Footer.svg"/>
            </Right>
        </Container>
    )
}

export default Footer
