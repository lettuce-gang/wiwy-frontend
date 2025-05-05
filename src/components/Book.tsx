import clsx from "clsx";
import {useState} from 'react';
import './Book.css';
import Page from './Page';

const TOTAL_PAGES = 9;

function Book() {
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(0);

    const handleClickCover = () => {
        setOpen(prev => !prev);
    };

    const handleClickPage = () => {
        if (page >= TOTAL_PAGES - 1) return;
        setPage(prev => prev + 1);
    }

    return (
        <>
            <div className={clsx("book", {open})}>
                <div className="cover" onClick={handleClickCover} style={{zIndex: TOTAL_PAGES + 1}}></div>

                {Array.from({length: TOTAL_PAGES}).map((_, i) => (
                    <Page isFlipped={i < page} onClick={handleClickPage} zIndex={TOTAL_PAGES + (i < page ? i + 1 : -i)}>
                        <h2>Page {i + 1}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil magni laudantium beatae quia.
                            Recusandae, fuga quas consectetur perferendis aperiam esse velit veniam ducimus? Quisquam
                            consequatur perferendis quidem quia, recusandae ab!</p>
                    </Page>
                ))}

                <div className="back-cover"></div>
            </div>
        </>
    )
}

export default Book
