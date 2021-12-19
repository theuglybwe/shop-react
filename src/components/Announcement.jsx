import styled from "styled-components"

const Cointainer = styled.div`
 height:30px;
 background-color: black;
 color:white;
 display: flex;
 align-items: center;
 font-size: 14px;
 font-weight: 500;
`

const Announcement = () => {
    return (
        <Cointainer>
            Free shipping for orders over R500
        </Cointainer>
    )
}

export default Announcement

