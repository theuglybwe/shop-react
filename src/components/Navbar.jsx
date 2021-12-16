import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

//backtics here
const Container = styled.div`
 height:60px;
 background-color: black;
`
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content: space-between;
`

const Left=styled.div`
flex:1;
display:flex
align-items:center`

const Language = styled.span`
font-size:14;
cursor:pointer;
`
const SearchContainer= styled.div`
border: 1px soild lightgrey;
diplay:flex;
align-items:center
`
const Center=styled.div`
flex:1;
`
const Right=styled.div`
flex:1;
`



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        input
                        <Search/>
                    </SearchContainer>
                </Left>
                <Center>Center</Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
