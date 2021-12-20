import styled from "styled-components"
import { Categories } from "../data"
import CategoryItem from "./CategoryItem"

const Container =styled.div`
display:flex;
padding:20px;
justify-content: space-between;
`


const Categories = () => {
    return (
        <Container>
           {Categories.map(item=>(
               <CategoryItem item={item} key={item.id}/>
           ))} 
        </Container>
    )
}

export default Categories
