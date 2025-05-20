import {useEffect, useState} from "react";
import styled from "styled-components";
import Container from "../../components/Container.tsx";
import Header from "../../components/Header.tsx";
import Button from "../../components/Button.tsx";
import Input from "../../components/Input.tsx";
import {useUserStat} from "../../store/useUserStat.ts";
import {useUserInfo} from "../../store/useUserInfo.ts";
import {addCommaToNumberText} from "../../utils/textUtils.ts";

const IntroSection = styled.div`
    margin-top: 82px;
    width: 280px;
    height: 430px;
`;

const IntroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const InputSection = styled.div`
    width: 80%;
    margin: 36px auto 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const FooterText = styled.p`
    margin: 20px auto 0;
    color: rgba(255, 255, 255, 0.80);
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

function IntroName() {
    const [name, setName] = useState("");
    const userInfo = useUserInfo();
    const userStat = useUserStat();

    useEffect(() => {
        userStat.getUserCount();
    }, [])

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value?.slice(0, 5));
    };

    const handleSubmit = () => {
        const submittedName = name.trim();
        if (submittedName) {
            userInfo.setName(submittedName);
        } else {
            alert("이름을 입력해주세요.");
        }
    };

    return (
        <Container backgroundUrl="/images/background/green.png">
            <Header/>
            <IntroSection>
                <IntroImage src="/images/assets/intro_1.png"/>
            </IntroSection>

            <InputSection>
                <Input type="text" placeholder="이름을 입력해주세요" value={name} onChange={handleNameChange}/>
                <Button onClick={handleSubmit}>시작하기</Button>
            </InputSection>

            {userStat.callState === 'OK' && (
                <FooterText>
                    지금까지 <b>{addCommaToNumberText(userStat.userCount)}명</b>이 어린 시절을 확인했어요!
                </FooterText>
            )}
        </Container>
    );
}

export default IntroName;
