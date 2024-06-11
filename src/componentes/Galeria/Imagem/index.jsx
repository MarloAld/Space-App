import styled from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const FigureEstilizado = styled.figure`
    width: ${(props) => (props.$expandida ? '90%':'460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const IconesAjustados = styled.img`
    max-width:24px;
    max-height:24px;
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Imagem = ({foto, expandida = false}) => {
    return (
        <FigureEstilizado $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.titulo} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <Rodape>
                    <h4>{foto.fonte}</h4>
                    <BotaoIcone>
                        <IconesAjustados src="/icones/favorite_outline.png" alt="Favoritar imagem"/>
                    </BotaoIcone>
                    {!expandida && <BotaoIcone aria-hidden={expandida}>
                        <IconesAjustados src="/icones/open_in_full.png" alt="Maximizar imagem"/>
                    </BotaoIcone>}
                </Rodape>
            </figcaption>
        </FigureEstilizado>
    )
}

export default Imagem