import { Link } from '@material-ui/core'
// import { Facebook, Instagram, YouTube, MailOutline, Phone, Pinterest, Room, Twitter} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile, tablet} from "../responsive"

const Container = styled.div`
   
    background-color: #4c4c4c;
`
const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 60px 0 10px 0;
`
const Left = styled.div`
    flex: 1;
    padding: 0 20px;
    ${mobile, tablet({ display: "none"})}
    ${'' /* ${tablet({ display: "none"})} */}
`
const Image = styled.img`
    width: 100%;
    align-items: center;
`
const SearchContent = styled.div`
    align-items: center;
    text-align: center;
    padding: 10px;
    background-color: #f15e2c;
`
const Search = styled.a`
    border-radius: 0px;
    background-color: #f15e2c;
    border: #f15e2c 1px solid;
    color: #fff;
    font-size: 23px;
    width: 279px;
    height: 40px;
    cursor: pointer;
`
const Right = styled.div`
    flex: 4;
    padding: 20px;
`
const Title = styled.h4`
    color: #fff;
    font-size: 23px;
    text-transform: uppercase;
    margin-bottom: 20px;
    &:hover{
        cursor: pointer;
    }
`
const SectionContent = styled.div`
    display: flex;
    margin-bottom: 20px;
    flex-wrap: wrap;
`
const ContentItem = styled.div`
    position: relative;
   width: 25%;
   ${mobile, tablet({  width: "50%", paddingBottom: "20px"}
    
   )}
   ${'' /* padding: 0 10px; */}
`
const List = styled.ul`
    padding-left: 0px;
`
const ListItem = styled.li`
    list-style: none;
    padding-bottom: 6px;
    &:hover{
        cursor: pointer;
    }
`
const Item = styled.a`
    color: #cccccc;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
    font-weight: 100;
    &:hover{
        color: #f15e2c;
    }
`
const SectionSocial = styled.div`
    display: flex;
    margin-bottom: 20px;
    flex-wrap: wrap;
`
const SocialItem = styled.div`
    position: relative;
    width: 25%;
    ${mobile, tablet({  width: "100%", paddingBottom: "20px"})}
`
const ListIcon = styled.div`
    display: flex;
`
const LinkIcon = styled.a``
const Icon = styled.img`
    vertical-align: middle;
    padding-right: 20px;
`
const FormGroup = styled.div`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
`
const Input = styled.input`
    display: block;
    width: 60%;
    height: 24px;
    padding: 6px 12px;
    margin-right: 4px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    ${'' /* border-radius: 4px; */}
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    &:focus{
        border-color: #66afe9;
        outline: 0;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
    }
`
const Subcribe = styled.a`
    cursor: pointer;
`
const SubIng = styled.img`
    height: 40px;
`
const Logo = styled.img`
    width: 60%;
    object-fit: contain;
    ${mobile, tablet({  display: "none"})}
`
const Footer = () => {
    return (
        <Container>
           <Row>
           <Left>
                <Image src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Store.svg'/>
                <SearchContent>
                     <Search>TÌM CỬA HÀNG</Search>
                </SearchContent>
            </Left>
               
            <Right>
                <SectionContent>
                    <ContentItem>
                        <Title>Sản phẩm</Title>
                        <List>
                            <ListItem>
                                <Item>Giày nam</Item>
                            </ListItem>
                            <ListItem>
                                <Item>Giày nữ</Item>
                            </ListItem>
                            <ListItem>
                                <Item>Thời trang & phụ kiện</Item>
                            </ListItem>
                            <ListItem>
                                <Item>Sale-off</Item>
                            </ListItem>
                        </List>
                    </ContentItem>
                    <ContentItem>
                        <Title>Về công ty</Title>
                        <List>
                            <ListItem>
                                <Item>Tuyển dụng</Item>
                            </ListItem>
                            <ListItem>
                                <Item>Liên hệ nhựng quyền</Item>
                            </ListItem>
                            <ListItem>
                                <Item>Về Ananas</Item>
                            </ListItem>
                        </List>
                    </ContentItem>
                    <ContentItem>
                        <Title>Hỗ trợ</Title>
                        <List>
                            <ListItem>
                                <Item>FAQs</Item>
                            </ListItem>
                            <ListItem>
                                <Item>Bảo mật thông tin</Item>
                            </ListItem>
                            <ListItem>
                                <Item>Chính sách chung</Item>
                            </ListItem>
                            <ListItem>
                                <Item>Tra cứu đơn hàng</Item>
                            </ListItem>
                        </List>
                    </ContentItem>
                    <ContentItem>
                        <Title>Liên hệ</Title>
                        <List>
                            <ListItem>
                                <Item>Email góp ý</Item>
                            </ListItem>
                            <ListItem>
                                <Item>Hotline</Item>
                            </ListItem>
                            <ListItem>
                                <Item>0123 456 678</Item>
                            </ListItem>
                        </List>
                    </ContentItem>
                </SectionContent>
                <SectionSocial >
                    <SocialItem className='social'>
                        <Title style={{cursor: 'unset'}}>ANANAS SOCIAL</Title>
                        <ListIcon>
                       
                            <LinkIcon href='https://www.facebook.com/Ananas.vietnam/'>
                                 <Icon src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_facebook.svg'/>
                            </LinkIcon>
                            <LinkIcon href='https://www.instagram.com/ananasvn/'>
                               <Icon src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_instagram.svg'/>
                            </LinkIcon>
                            <LinkIcon href='https://www.youtube.com/discoveryou'>
                               <Icon src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_youtube.svg'/>
                            </LinkIcon>
                        </ListIcon>
                        
                    </SocialItem>
                    <SocialItem className='social'>
                        <Title style={{cursor: 'unset'}}>đăng kí nhận mail</Title>
                        <FormGroup>
                            <Input type='email'/>
                            <Subcribe>
                                 <SubIng src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/arrow_right.jpg'/>
                            </Subcribe>
                        </FormGroup>
                       
                    </SocialItem>
                    <ContentItem style={{width: "50%", textAlign: "center"}}>
                       <Logo src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Footer.svg'/>
                    </ContentItem>
                </SectionSocial>
                
            </Right>
           </Row>
          
        </Container>
    )
}

export default Footer
