import styled from 'styled-components'
import tags from './tags.json'

const SubTituloEstilizado = styled.h2`
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 400;
    width: 219px;
    gap: 17px;
`

const TagsEstilizadas = styled.button`
    color: #FFF;
    font-size: 24px;
    border-radius: 10px;
    background: rgba(217, 217, 217, 0.30);
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const TagsContainer = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 56px;
    margin-bottom: 13px;
`

const Tags = () => {
    return <>
        <TagsContainer>
        <SubTituloEstilizado>Busque por tags:</SubTituloEstilizado>
            {tags.map(tag => <TagsEstilizadas key={tag.id}>{tag.titulo}</TagsEstilizadas>)}
        </TagsContainer>
    </>
}

export default Tags

{/* <button key={tag.id}>{tag.titulo}</button> */}