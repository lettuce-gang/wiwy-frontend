import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar.tsx";
import Header from "../components/Header.tsx";
import Book from "../components/Book.tsx";
import styled from "styled-components";
import SelectBox from "../components/SelectBox.tsx";

function Survey() {
  const [step, setStep] = useState(0);
  
  return (
    <Container>
      <Header />
      <ProgressBar step={step + 1} />
      <Book step={step} setStep={setStep} />
      <SelectBox step={step} setStep={setStep}/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  background-image: url("images/test_bg.svg");
`;

export default Survey;
