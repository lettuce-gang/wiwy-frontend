import clsx from "clsx";
import { useEffect, useState } from "react";
import "./Book.css";
import Page from "./Page";
import { StepInterface } from "./ProgressBar";

const TOTAL_PAGES = 9;

function Book({ step }: StepInterface) {
  const [open, setOpen] = useState(false);

  const handleClickCover = () => {
    setOpen(prev => !prev);
  };

  // const handleClickPage = () => {
  //   if (step >= TOTAL_PAGES - 1) return;
  //   setStep(prev => prev + 1);
  // };

  useEffect(() => {
    setOpen(false);

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className={clsx("book", { open })}>
        <div className="cover" onClick={handleClickCover} style={{ zIndex: TOTAL_PAGES + 1 }}>
          <span className="name">이승현</span>
        </div>

        {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
          <Page isFlipped={i < step}  zIndex={TOTAL_PAGES + (i < step ? i + 1 : -i)}>
            <img src={`/images/survey/survey_${i+1}.png`} />
            <span className="year">1923</span>
            <span className="month">02</span>
            <span className="day">18</span>
            <span className="week">월</span>
          </Page>
        ))}

        <div className="back-cover"></div>
      </div>
    </>
  );
}

export default Book;
