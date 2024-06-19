import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;

`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImgContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [], aoFotoSelecionada }) => { 
    return (
        <>
            <Tags />
            
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImgContainer>
                        {fotos.map(foto => <Imagem
                            aoZoomSolicitado={aoFotoSelecionada} 
                            key={foto.id}
                            foto={foto}/>)
                        }
                    </ImgContainer>
                </SecaoFluida>
                <Populares/>

            </GaleriaContainer>
        </>
    )
}

export default Galeria