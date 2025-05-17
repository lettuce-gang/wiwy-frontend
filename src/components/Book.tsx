import clsx from "clsx";
import { useEffect, useState } from "react";
import "./Book.css";
import Page from "./Page";
import { StepInterface } from "./ProgressBar";

const TOTAL_PAGES = 9;

function Book({ step, setStep }: StepInterface) {
  const [open, setOpen] = useState(false);

  const handleClickCover = () => {
    setOpen(prev => !prev);
  };

  const handleClickPage = () => {
    if (step >= TOTAL_PAGES - 1) return;
    setStep(prev => prev + 1);
  };

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
        <div className="cover" onClick={handleClickCover} style={{ zIndex: TOTAL_PAGES + 1 }}></div>

        {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
          <Page isFlipped={i < step} onClick={handleClickPage} zIndex={TOTAL_PAGES + (i < step ? i + 1 : -i)}>
            <h2>Page {i + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil magni laudantium beatae quia. Recusandae, fuga quas
              consectetur perferendis aperiam esse velit veniam ducimus? Quisquam consequatur perferendis quidem quia, recusandae ab!
            </p>
          </Page>
        ))}

        <div className="back-cover"></div>
      </div>
    </>
  );
}

export default Book;
