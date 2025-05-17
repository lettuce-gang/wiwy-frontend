import React, { useState } from 'react';
import styled from "styled-components";

function ProgressBar() {
    const [progressValue, setProgressValue] = useState(0);
    return (
        <Container>
            <progress value={progressValue}/>
            <button onClick={() => setProgressValue(prev => prev + 1)}>늘리기</button>
        </Container>
    );
}

export default ProgressBar;

const Container = styled.div`
    width: 100%;
    height: 3px;
`

