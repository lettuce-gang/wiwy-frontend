import React, { useState } from "react";
import styled from "styled-components";
import { questionData } from "../data/questionData";

interface SelectBoxInterface {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function SelectBox({ step, setStep }: SelectBoxInterface) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
  const options = questionData[step + 1] || {};

  const onClickHandler = (idx: number) => {
    setSelectedIdx(idx);
    setBtnDisabled(true);
    setTimeout(() => {
      setSelectedIdx(null);
      setStep(prev => prev + 1);
      setBtnDisabled(false);
    }, 2000);
  };
  return (
    <Wrapper>
      {Object.entries(options).map(([key, text]) => {
        const idx = Number(key) - 1;
        return (
          <Selector key={key} selected={selectedIdx === idx} onClick={() => onClickHandler(idx)} disabled={btnDisabled}>
            {text}
          </Selector>
        );
      })}
    </Wrapper>
  );
}

export default SelectBox;

const Wrapper = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
  width: calc(100% - 60px);
  z-index: 10;
  margin: 33px auto;
`;

const Selector = styled.button<{ selected: boolean }>`
  width: 100%;
  height: 52px;
  border-radius: 10px;
  border: ${({ selected }) =>
    selected
      ? "2.5px solid rgba(255, 255, 255, 0.50)" // 선택된 경우
      : "1px solid rgba(255, 255, 255, 0.08)"}; // 기본
  background: rgba(255, 255, 255, 0.2);
  background-blend-mode: overlay;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.15px;

  &:hover {
    border: 2.5px solid rgba(255, 255, 255, 0.5);
  }

  &:active {
    border: 2.5px solid rgba(255, 255, 255, 0.5);
  }

  &:hover {
    ${({ selected }) =>
      selected
        ? "2.5px solid rgba(255, 255, 255, 0.50)"
        : "1px solid rgba(255, 255, 255, 0.08)"};
  }
`;
