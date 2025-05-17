import clsx from "clsx";
import {ReactNode} from "react";
import './Page.css';

interface PageProps {
    isFlipped: boolean;
    children: ReactNode;
    zIndex: number;
}

function Page({isFlipped, children, zIndex}: PageProps) {
    return (
        <div className={clsx(`page`, {flipped: isFlipped})} style={{zIndex}} >
            <div className="front-page">
                {children}
            </div>
            <div className="back-page">
                {/* <p>back page</p> */}
            </div>
        </div>
    );
}

export default Page;
