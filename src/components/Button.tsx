import styled from "styled-components";
import { lighten } from 'polished';

const Button = styled.button<{ backgroundColor?: string }>`
    width: 100%;
    height: 55px;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${props =>
            props.backgroundColor ?? 'black'};
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.4px;
    transition: all 0.1s ease;
    
    &:active {
        transform: scale(0.98);
        background-color: ${props => {
            const color = props.backgroundColor ?? 'black';
            return lighten(0.3, color);
        }};
    }
    
    &:focus {
        outline: none;
    }
`;

export default Button;
