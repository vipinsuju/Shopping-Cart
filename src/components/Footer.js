import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styledComponents from 'styled-components'
import { mobile } from '../Responsive';



const Container = styledComponents.div`
    display:flex;
`;

const Left = styledComponents.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;



const Right = styledComponents.div`
    flex:1;
    padding:20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const Logo = styledComponents.div`
    
`;

const Desc = styledComponents.div`
    margin-bottom:20px;
`;

const SocialContainer = styledComponents.div`
    display:flex;
`;

const Centr = styledComponents.div`
    flex:1;
    padding:20px;
    ${mobile({ display: "none" })}
`;

const SocialIcons = styledComponents.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:15px;
    cursor:pointer;
`;

const Title = styledComponents.h3`
    margin-bottom:30px;

`;

const List = styledComponents.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem = styledComponents.li`
    width:50%;
    margin-bottom:10px;

`;

const ContactItem = styledComponents.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;

const Payment = styledComponents.img`
    width:50%;
`;







const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Desc>

                <SocialContainer>
                    <SocialIcons color='3B5999'>
                        <Facebook />
                    </SocialIcons>

                    <SocialIcons color='E4405F' >
                        <Instagram />
                    </SocialIcons>

                    <SocialIcons color='55ACEE' >
                        <Twitter />
                    </SocialIcons>

                    <SocialIcons color='E60023'  >
                        <Pinterest />
                    </SocialIcons>

                </SocialContainer>
            </Left>

            <Centr>
                <Title>Usefull Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessorries</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                </List>
            </Centr>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <Room  style={{marginRight:"10px"}} />
                    622 Dixie Path , South Tobinchester 98336
                </ContactItem>

                <ContactItem> <Phone style={{marginRight:"10px"}} />
                    +1 234 56 78
                </ContactItem>

                <ContactItem> <MailOutline style={{marginRight:"10px"}} />
                    contact@lama.dev
                </ContactItem>
                <Payment src="https://i.ibb.co./Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
