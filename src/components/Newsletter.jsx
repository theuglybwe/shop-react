
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

const InputContainer= styled.div`
 width: 50%;
 height: 40px;
 background-color: white;
 display: flex;
 justify-content: space-between;
 border:1px solid lightgray;
`;
const Button= styled.button`
flex:1;
border:none;
background-color:teal;
color: white;`

;
const Input = styled.input`
border: none;
flex:8;
padding-left: 20px;`
;


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








