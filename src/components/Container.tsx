import styled from "styled-components";

const Container = styled.div<{ backgroundUrl: string }>`
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  background-image: url(${(props) => props.backgroundUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 44px 20px; // 상단 패딩 더 늘림
  overflow-y: auto;
  box-sizing: border-box; // 박스 사이징 추가

  /* Mobile (0px ~ 479px) */
  @media screen and (max-width: 479px) {
    width: 100%;
    padding: 40px 20px 20px; // 상단 패딩 더 늘림
    height: auto;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  /* Tablet (480px ~ 767px) */
  @media screen and (min-width: 480px) {
    width: 480px;
    padding: 40px 0 20px; // 상단 패딩 더 늘림
  }

  /* Desktop (768px ~ ) */
  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 40px 0 20px; // 상단 패딩 더 늘림
  }
`;

export default Container;
