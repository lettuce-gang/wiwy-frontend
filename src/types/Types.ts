export type CallState = 'Initialized' | 'Loading' | 'Error' | 'OK';

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

export interface ResultDataType {
    [key: string]: ResultType;
}
