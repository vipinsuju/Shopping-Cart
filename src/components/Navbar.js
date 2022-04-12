import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { mobile } from "../Responsive";

const Container = styled.div`
    height:60px;
    background-color:#F8F8F8;
    ${mobile({ height: "50px" })}  
`
const Wrapper = styled.div`
    padding:2px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const Center = styled.div`
    flex:1;
    text-align:center;
`
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
    background-color:#F8F8F8;
    color:#F8F8F8;
`
const Input = styled.input`
    border:none;
    ${mobile({ width: "50px" })}
`
const Logo = styled.h1`
    font-weight:bold;
    cursor:pointer;
    ${mobile({ fontSize: "24px" })}
`
const MenuItem = styled.div`
    font-size : 15px;
    cursor : pointer;
    margin-left:25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    
`

const Navbar = () => {
    return (

        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/" style={{ textDecoration: "none", color: 'black' }}  >
                        <Logo>
                            .LAAS.
                        </Logo>
                    </Link>
                </Center>
                <Right>
                    <Link to="/register" style={{ textDecoration: "none", color: 'black' }}  >
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login" style={{ textDecoration: "none", color: 'black' }}  >
                        <MenuItem>SIGN IN</MenuItem>
                    </Link>

                    <MenuItem>
                        <Link to="/Cart" style={{ textDecoration: "none", color: 'black' }}  >
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>

                        </Link>

                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>

    )
}

export default Navbar
