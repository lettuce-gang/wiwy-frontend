import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 55px;
    border-radius: 10px;
    background-color: #F2F6F3;
    border: 1.5px solid #E4E4E4;
    outline: none;
    box-sizing: border-box;
    color: #848484;
    text-align: center;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    &::placeholder {
        color: #848484;
    }

    &:focus::placeholder {
        color: transparent;
    }
`;

export default Input;
