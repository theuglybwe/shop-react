
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import styled from 'styled-components'

const Container = styled.div`
display: flex;`
const Logo = Styled.h1``;
const Desc = styled.p``;

const SocialContainer = styled.div``;

const SocialIcon = styled.div``;



const Left = styled.div`
flex:1;
`
const Center = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
`

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
            <Center></Center>
            <Right></Right>
        </Container>
    )
}

export default Footer
