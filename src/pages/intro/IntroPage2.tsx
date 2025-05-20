import styled from "styled-components";
import Container from "../../components/Container.tsx";
import Header from "../../components/Header.tsx";

const NoiseOverlay = styled.div`
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 600%;
    height: 600%;
    background-image: repeating-conic-gradient(#666 0 0.00001%,#0000 0 0.00002%);
    background-position: center;
    animation: bg-animation .10s linear infinite;
    opacity: .2;
    visibility: visible;

    @keyframes bg-animation {
        from {
            background-size: 50% 50%;
        }
        to {
            background-size: 50% 43.6%;
        }
    }
`;

function IntroPage2() {

    return (
        <Container backgroundUrl="/images/assets/intro_2.png">
            <Header/>
            <NoiseOverlay />
        </Container>
    );
}

export default IntroPage2;
