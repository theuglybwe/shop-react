
import { Send } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
height:60vh;
background-color: #fcf5f5;
display:flex;
align-content: center;
`;

const Title= styled.h1``;
const Description= styled.p``;
const InputContainer= styled.div``;
const Button= styled.button``;
const Input = styled.input``;


const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite products</Description>
            <InputContainer>
              <Input placeholder="Your email"/>
              <Button>
                  <Send />
              </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter








