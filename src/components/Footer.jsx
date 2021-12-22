
import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
${mobile({flexDirection:"column"})}`

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`;

const Left = styled.div`
flex:1;
padding:20px;
`
const SocialContainer = styled.div`
display:flex;
margin:20px;

`;

const SocialIcon = styled.div`
width:40px;
height: 40px;
border-radius:50%;
color: white;`;


const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display:"none"})}
`
const Title = styled.h3``

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;

`

const ListItem = styled.li`
width:50%;
margin-bottom: 10px;`


const Right = styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor:"#fff8f8"})}
`
const ContactItem = styled.div`
margin-bottom: 20px;
display:flex;
align-items: center;
`

const Payment = styled.img`
width: 50%;`;


//Footer change number king
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>UNDYING</Logo>
                <Desc>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque consequuntur a fuga libero excepturi explicabo, illum harum nam tenetur, vero necessitatibus? Tenetur eius illum voluptates, quis voluptatibus ipsum sint voluptatem!
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
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
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>    
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room />Centurion
                </ContactItem>
                <ContactItem><Phone/>0897654321</ContactItem>
                <ContactItem><MailOutline />contact@undying.com</ContactItem>
                <Payment src=""/>
            </Right>
        </Container>
    )
}

export default Footer
