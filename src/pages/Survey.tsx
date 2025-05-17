import { useState } from "react";
import ProgressBar from "../components/ProgressBar.tsx";
import Header from "../components/Header.tsx";
import Book from "../components/Book.tsx";
import Container from "../components/Container.tsx";
import SelectBox from "../components/SelectBox.tsx";

function Survey() {
  const [step, setStep] = useState(0);

  return (
    <Container backgroundUrl="/images/bg_blue.svg">
      <Header />
      <ProgressBar step={step + 1} />
      <Book step={step} setStep={setStep} />
      <SelectBox step={step} setStep={setStep}/>
    </Container>
  );
}

export default Survey;
