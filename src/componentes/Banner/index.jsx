import styled from "styled-components";


const FiguraEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    display: flex;
    flex-grow: 1;
    background-repeat: no-repeat;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`
const TituloEstilizado = styled.h1`
    color: #fff;
    font-size: 40px;
    max-width: 300px;
    font-weight: 400;
    line-height: 48px;
    padding: 0 64px;
`


const Banner = ({texto, backgroundImage}) => {
    return (<FiguraEstilizada $backgroundImage={backgroundImage}>
        <TituloEstilizado>{texto}</TituloEstilizado>
    </FiguraEstilizada>)
}

export default Banner