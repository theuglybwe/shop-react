import { Send } from '@material-ui/icons'
import styled from 'styled-components'


const Container = styled.div``
const Title= styled.h1``
const Description= styled.p``
const InputContainer= styled.div``
const Button= styled.button``
const Input = styled.input``


function Newsletter() {
    return (
        <Container>
            <Title></Title>
            <Description></Description>
            <InputContainer>
              <Input />
              <Button>
                  <Send />
              </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
