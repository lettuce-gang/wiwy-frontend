export interface ResultType {
    image: string;
    features: string[];
    bestFriend: {
        title: string;
        description: string[];
    };
    worstFriend: {
        title: string;
        description: string[];
    };
}

interface ResultDataType {
    [key: string]: ResultType;
}

export const ResultData: ResultDataType = {
    ham: {
        image: '/images/result_test.png',
        features: [
            "시동 걸리면 멈출 줄 모름",
            "가슴이 시키는 대로 움직이는 본능형"
        ],
        bestFriend: {
            title: "말 없는데 은근 바쁜 사람",
            description: [
                "내가 막 질주해도, 옆에서 조용히 맞춰주는 느낌. 서로 말 없이 움직여도 호흡은 척척!"
            ]
        },
        worstFriend: {
            title: "말하지 않아도 알고 있는 사람",
            description: [
                "나는 에너지 폭발인데, 걘 이미 모든 걸 예측 중... 폭주하다 눈치에 급브레이크 걸림ㅋㅋ"
            ]
        }
    },
    // 다른 타입들도 여기에 추가...
    han: {
        image: '/images/result_test_old.png',
        features: [
            "시동 걸리면 멈출 줄 모름",
            "가슴이 시키는 대로 움직이는 본능형"
        ],
        bestFriend: {
            title: "말 없는데 은근 바쁜 사람",
            description: [
                "내가 막 질주해도, 옆에서 조용히 맞춰주는 느낌. 서로 말 없이 움직여도 호흡은 척척!"
            ]
        },
        worstFriend: {
            title: "말하지 않아도 알고 있는 사람",
            description: [
                "나는 에너지 폭발인데, 걘 이미 모든 걸 예측 중... 폭주하다 눈치에 급브레이크 걸림ㅋㅋ"
            ]
        }
    },
};

export type ResultKey = keyof typeof ResultData; 