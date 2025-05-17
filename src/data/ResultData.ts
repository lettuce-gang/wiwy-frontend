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
            "에너지 과다 탑재형 인간",
            "눈치보다 심장이 먼저 반응함"
        ],
        bestFriend: {
            title: "말 없는데 은근 바쁜 사람",
            description: [
                "내가 뛰면, 걔는 조용히 정리함.",
                "말없이도 팀워크 최고임ㅋㅋ"
            ]
        },
        worstFriend: {
            title: "말하지 않아도 알고 있는 사람",
            description: [
                "나는 에너지 폭발인데, 걘 이미 모든 걸 예측 중...",
                "폭주하다 눈치에 급브레이크 걸림ㅋㅋ"
            ]
        }
    },
    // 다른 타입들도 여기에 추가...
    han: {
        image: '/images/result_test_old.png',
        features: [
            "분위기 지휘하는 웃음대장",
            "웃기다 보면 중심에 서 있음"
        ],
        bestFriend: {
            title: "말하지 않아도 알고 있는 사람",
            description: [
                "내가 떠들면 걘 조용히 돕는다. 찰떡 케미"
            ]
        },
        worstFriend: {
            title: "조용히 있다가 시선 강탈하는 사람",
            description: [
                "내가 분위기 띄웠는데 얘한테 관심 다 뺏김. 속터짐 ㅋㅋ"
            ]
        }
    },
    hvm: {
        image: '/images/result_test.png',
        features: [
            "수다에 진심인 에너지 제조기",
            "센스도 웃음도 많음"
        ],
        bestFriend: {
            title: " 움찔하다가 결국 움직이는 사람",
            description: [
                "내가 '가자!' 하면 얘가 딱 맞춰서 '응!' 해줌.",
                "생각은 많지만 결국 움직여주는 최고의 짝꿍"
            ]
        },
        worstFriend: {
            title: "혼자 알아채고 킥킥 웃는 사람",
            description: [
                "아무 말도 안 해… 나만 말하니까 민망함;;"
            ]
        }
    },
    hvn: {
        image: '/images/result_test.png',
        features: [
            "침묵 속 관심꾼",
            "행동은 느리지만 은근히 정확함"
        ],
        bestFriend: {
            title: "움찔하다가 결국 움직이는 사람",
            description: [
                "같이 말 안 해도 무드 맞음. 속으로 다 공유됨"
            ]
        },
        worstFriend: {
            title: "말 없는데 은근 바쁜 사람",
            description: [
                "나는 속으로 신나고 있는데, 얘는 말 없이 실천함.",
                "둘 다 말 없어서 아무 일도 안 생김ㅋㅋ"
            ]
        }
    },
    lam: {
        image: '/images/result_test.png',
        features: [
            "조용한데 손은 바쁜 사람",
            "시끄러운 와중에도 할 일 다 함 "
        ],
        bestFriend: {
            title: "눈치 없이 제일 신난 사람",
            description: [
                "얘가 앞에서 질주하면 나는 옆에서 조용히 정리해줌. 궁합 최고!"
            ]
        },
        worstFriend: {
            title: "혼자 알아채고 킥킥 웃는 사람",
            description: [
                "난 일하고 싶은데 얘는 자꾸 눈치만 봄… ",
                "혼자 다 한 느낌이라 살짝 외로움ㅋㅋ"
            ]
        }
    },
    lan: {
        image: '/images/result_test.png',
        features: [
            "고민은 길지만 결국 움직임",
            "나름의 템포로 조용히 합류하는 사람"
        ],
        bestFriend: {
            title: "혼자 알아채고 킥킥 웃는 사람",
            description: [
                "서로 소리 내진 않지만, 공기 타고 전달됨. 말 없이도 통하는 편안함."
            ]
        },
        worstFriend: {
            title: "눈치 없이 제일 신난 사람",
            description: [
                "나는 고민 중인데 얘는 벌써 사고침.",
                "따라가기도 전에 끝남ㅋㅋ"
            ]
        }
    },
    lvn: {
        image: '/images/result_test.png',
        features: [
            "입은 닫고 눈은 활짝",
            "분위기 파악 Lv.99"
        ],
        bestFriend: {
            title: "가만히 있다가 갑자기 날뛰는 사람",
            description: [
                "저 친구는 진행하고 나는 조용히 조율. 완전 상생!"
            ]
        },
        worstFriend: {
            title: "분위기 주도하는 리액션 천재",
            description: [
                "얘는 말 많고 웃기려 하고, 나는 이미 출발.",
                "주도권 놓고 충돌 잦음ㅋㅋ"
            ]
        }
    },
    lvm: {
        image: '/images/result_test.png',
        features: [
            "침묵 속 관심꾼",
            "눈빛 하나로 세상 다 읽음"
        ],
        bestFriend: {
            title: "분위기 주도하는 리액션 천재",
            description: [
                "얘는 계속 말하고 난 그냥 알아서 처리함.",
                "콤비처럼 움직이지만 속도 차는 있음!"
            ]
        },
        worstFriend: {
            title: "눈치 없이 제일 신난 사람",  
            description: [
                "나는 이미 예상했는데 얘는 계속 움직임.",
                "눈치 싸움 끝에 그냥 지쳐서 무시함ㅋㅋ" 
            ]
        }
    },
};

export type ResultKey = keyof typeof ResultData; 