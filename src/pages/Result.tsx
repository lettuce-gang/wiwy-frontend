import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ResultData, ResultType } from '../data/ResultData';
import { getPostPosition } from '../utils/textUtils';
import Container from "../components/Container.tsx";

const ResultCard = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/images/bg_orange.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  border-radius: 12px;
  margin-top: 10px; // 상단 여백 추가

  @media screen and (max-width: 479px) {
    width: 100%;
    padding: 20px 0;
    margin-top: 0; // 모바일에서는 상단 여백 제거
  }
`;

interface ResultImageProps {
  image: string;
}

const ResultImage = styled.div<ResultImageProps>`
  width: 90%;  // 너비를 90%로 줄여서 양옆 여백 확보
  max-width: 450px;
  aspect-ratio: 9/16;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  margin: 0 auto;  // 중앙 정렬

  @media screen and (max-width: 479px) {
    width: 85%;  // 모바일에서는 더 좁게
    border-radius: 12px;  // 모바일에서도 border-radius 유지
    margin: 0 auto;
  }
`;

const NameDescription = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: #FFED2C;
  font-size: 1.2rem;
  margin-bottom: 16px;
  font-family: Pretendard;
`;

const DownloadButton = styled.button`
    width: 100%;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 0.7rem;
    font-family: 'Pretendard-Regular';
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;

    &:before {
        content: '';
        width: 15px;
        height: 15px;
        background-image: url('/images/icon/download_button.svg');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
`;

const ContentSection = styled.div`
  width: 90%;  // ResultCard와 동일한 너비로 설정
  max-width: 450px;
  margin: 20px auto 0;
  color: white;
  font-family: 'Pretendard-Regular';

  @media screen and (max-width: 479px) {
    width: 85%;  // 모바일에서는 더 좁게
  }
`;

const SectionTitle = styled.div`
  margin-bottom: 6px;
  font-family: Pretendard;
  color: #FFF;
  font-size: 15px;
  font-style: normal;
  line-height: normal;
  display: flex;
  align-items: center;
`;

const TitleImage = styled.img`
  height: 19px;
  width: auto;
`;

const SectionSubTitle = styled.div`
  margin-left: 20px;
  color: #FFF;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.15px;
`;

const SectionContent = styled.div`
  margin-top: 7px;
  margin-bottom: 33px;
  margin-left: 20px;
  color: rgba(255, 255, 255, 0.80);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 153.846% */
  letter-spacing: -0.13px;
`;

const FeatureContent = styled(SectionContent)`
  margin-left: 5px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;  // bullet point와 텍스트 사이 간격
`;

const ButtonIcon = styled.img`
  height: 20px;
  width: auto;
  margin-left: 6px;
  display: inline-block;
  vertical-align: middle;
`;

const ShareIcon = styled(ButtonIcon)`
  transform: rotate(90deg);
`;

const ButtonContainer = styled.div`
  width: 90%;  // ResultCard와 동일한 너비로 설정
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px auto;  // 상하 여백 추가, 좌우 auto로 중앙 정렬

  @media screen and (max-width: 479px) {
    width: 85%;  // 모바일에서는 더 좁게
  }
`;

const ActionButton = styled.button<{ isShare?: boolean }>`
  width: 100%;
  padding: 15px 0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.isShare ? '#F35400' : 'black'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #FFF;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Toast = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 0.9rem;
    z-index: 1000;
    font-family: 'Pretendard-Regular';
`;

function Result() {
    const resultCardRef = useRef<HTMLDivElement>(null);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [resultData, setResultData] = useState<ResultType | null>(null);
    const [userName, setUserName] = useState<string>('');
    const [showCopyToast, setShowCopyToast] = useState(false);

    useEffect(() => {
        // URL에서 type과 name 파라미터 가져오기
        const type = searchParams.get('type');
        const name = searchParams.get('name');

        // 파라미터가 없거나 유효하지 않은 경우 처리
        if (!type || !ResultData[type]) {
            navigate('/'); // 메인 페이지로 리다이렉트
            return;
        }

        // 데이터 설정
        setResultData(ResultData[type]);
        setUserName(name || '');

        // 페이지 최상단으로 스크롤
        window.scrollTo(0, 0);
    }, [searchParams, navigate]);

    // resultData가 없는 경우 로딩 표시
    if (!resultData) {
        return <div>Loading...</div>;
    }

    const handleDownload = async () => {
        if (!resultCardRef.current) return;

        try {
            // 이미지 캡처
            const canvas = await html2canvas(resultCardRef.current, {
                scale: 2, // 고화질을 위해 2배 크기로 렌더링
                useCORS: true, // 외부 이미지 허용
                allowTaint: true, // 외부 이미지 허용
                backgroundColor: null,
                logging: false,
            });

            // 캔버스를 이미지로 변환
            const image = canvas.toDataURL('image/png', 1.0);

            // 다운로드 링크 생성
            const link = document.createElement('a');
            link.href = image;
            link.download = 'result-image.png';

            // 다운로드 트리거
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('이미지 저장 중 오류가 발생했습니다:', error);
        }
    };

    const handleRetry = () => {
        navigate('/');
    };

    const handleShare = async () => {
        const currentUrl = window.location.href;

        // Check if Web Share API is supported (mainly mobile devices)
        if (navigator.share) {
            try {
                await navigator.share({
                    title: '나의 성향 테스트 결과',
                    text: `${userName}님의 성향 테스트 결과를 확인해보세요!`,
                    url: currentUrl
                });
            } catch (error) {
                console.error('공유하기 실패:', error);
            }
        } else {
            // Fallback for desktop: copy URL to clipboard
            try {
                await navigator.clipboard.writeText(currentUrl);
                setShowCopyToast(true);
                setTimeout(() => setShowCopyToast(false), 2000);
            } catch (error) {
                console.error('URL 복사 실패:', error);
            }
        }
    };

    return (
        <Container backgroundUrl="/images/background/orange.svg">
            <ResultCard ref={resultCardRef}>
                <NameDescription>
                    {userName}{getPostPosition(userName)}
                </NameDescription>
                <ResultImage image={resultData.image} />
            </ResultCard>
            <DownloadButton onClick={handleDownload}>
                꾹 눌러 이미지를 저장해주세요!
            </DownloadButton>

            <ContentSection>
                <SectionTitle>
                    <TitleImage src="/images/icon/feature_title.svg" alt="특징" />
                </SectionTitle>
                <FeatureContent>
                    {resultData.features.map((feature: string, index: number) => (
                        <FeatureItem key={index}>
                            <span>•</span>
                            <span>{feature}</span>
                        </FeatureItem>
                    ))}
                </FeatureContent>

                <SectionTitle>
                    <TitleImage src="/images/icon/bestFriend_title.svg" alt="찰떡 친구" />
                </SectionTitle>
                <SectionSubTitle>
                    {resultData.bestFriend.title}
                </SectionSubTitle>
                <SectionContent>
                    {resultData.bestFriend.description.map((desc: string, index: number) => (
                        <div key={index}>{desc}</div>
                    ))}
                </SectionContent>

                <SectionTitle>
                    <TitleImage src="/images/icon/worstFriend_title.svg" alt="상극 친구" />
                </SectionTitle>
                <SectionSubTitle>
                    {resultData.worstFriend.title}
                </SectionSubTitle>
                <SectionContent>
                    {resultData.worstFriend.description.map((desc: string, index: number) => (
                        <div key={index}>{desc}</div>
                    ))}
                </SectionContent>
            </ContentSection>

            <ButtonContainer>
                <ActionButton onClick={handleShare}>
                    공유하기
                    <ShareIcon src="/images/icon/share.png" alt="공유하기" />
                </ActionButton>
                <ActionButton isShare onClick={handleRetry}>
                    다시하기
                    <ButtonIcon src="/images/icon/retry.png" alt="다시하기" />
                </ActionButton>
            </ButtonContainer>

            {showCopyToast && (
                <Toast>URL이 복사되었습니다!</Toast>
            )}
        </Container>
    );
}

export default Result;
