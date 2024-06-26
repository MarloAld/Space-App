import styled from "styled-components"

const ItemListaEstilizado = styled.li`
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9' };
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular' };
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: 400;
    line-height: 29px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 22px;
`

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
    return <ItemListaEstilizado $ativo={ativo}>
        <img src={ativo ? iconeAtivo : iconeInativo} alt="Ícone"/>
        {children}
    </ItemListaEstilizado>
}

export default ItemNavegacao