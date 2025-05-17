import styled from "styled-components";

export interface StepInterface {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export interface ProgressBarInterface {
  step: number;
}

function ProgressBar({ step }: ProgressBarInterface) {
  return <Progress value={step} max={9} />;
}

export default ProgressBar;

const Progress = styled.progress`
  width: 100%;
  height: 3px;
  margin-bottom: 44px;
  appearance: none;
  background-color: rgba(255, 255, 255, 0.25);

  /* WebKit (Chrome, Safari) 언더바 */
  &::-webkit-progress-bar {
    background-color: rgba(255, 255, 255, 0.25);
  }
  /* WebKit 채워진 바 + 애니메이션 */
  &::-webkit-progress-value {
    background-color: #fff;
    transition: width 0.7s ease;
  }

  /* Firefox 채워진 바 + 애니메이션 */
  &::-moz-progress-bar {
    background-color: #fff;
    transition: width 0.7s ease;
  }
`;
