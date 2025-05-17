import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <BackBtn src="/images/icon_back.svg" width={7.5} height={15} />
      <Title src="/images/title.svg" width={143} height={15} />
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.img`
  max-width: 100%;
  height: auto;
`;

const BackBtn = styled.img`
  position: absolute;
  cursor: pointer;
  left: 20px;
`;
