import styled from "styled-components"

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px;
    margin-top: 76px;
    background-color: #04244F;
    box-sizing: border-box;
`

const ListaEstilizada = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`

const TextoEstilizado = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

const Rodape = () => {
    return (
        <FooterEstilizado>
            <ListaEstilizada>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/facebook.png" alt="Logo Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/twitter.png" alt="Logo Twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/instagram.png" alt="Logo Instagram" />
                    </a>
                </li>
            </ListaEstilizada>
            <TextoEstilizado>
                Desenvolvido por Alura.
            </TextoEstilizado>
        </FooterEstilizado>
    )
}

export default Rodape