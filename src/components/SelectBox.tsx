import React, { useState } from "react";
import styled from "styled-components";
import { questionData } from "../data/questionData";

interface SelectBoxInterface {
    step: number,
    setStep: React.Dispatch<React.SetStateAction<number>>,
}

function SelectBox({ step, setStep }: SelectBoxInterface) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const options = questionData[step] || {};

  const onClickHandler = (idx: number) => {
    setSelectedIdx(idx);
    setTimeout(()=> {
        setSelectedIdx(null);
        setStep(prev => prev + 1);
    },2000)
  };
  return (
    <Wrapper>
      {Object.entries(options).map(([key, text]) => {
        const idx = Number(key) - 1;
        return (
          <Selector
            key={key}
            selected={selectedIdx === idx}
            onClick={() => onClickHandler(idx)}
          >
            {text}
          </Selector>
        );
      })}
    </Wrapper>
  );
}

export default SelectBox;

const Wrapper = styled.div`
  margin: 0px 30px;
  display: flex;
  gap: 14px;
  flex-direction: column;
  width: calc(100% - 60px);
  z-index: 10;
  margin: 33px auto;
`;

const Selector = styled.div<{ selected: boolean }>`
  width: 100%;
  height: 52px;
  border-radius: 10px;
  border: ${({ selected }) =>
    selected
      ? "1.5px solid rgba(255, 255, 255, 0.50)" // 선택된 경우
      : "1px solid rgba(255, 255, 255, 0.08)"}; // 기본
  background: rgba(255, 255, 255, 0.2);
  background-blend-mode: overlay;
`;
