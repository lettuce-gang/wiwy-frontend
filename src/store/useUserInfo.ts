import {create} from "zustand";

interface UserInfo {
    name: string;
    birthday: Date;
    setName: (input: string) => void;
    setBirthday: (input: Date) => void;
}

const initialState: UserInfo = {
    name: "",
    birthday: new Date(),
    setName: async () => {
    },
    setBirthday: async () => {
    },
}

const useUserInfo = create<UserInfo>(set => ({
    ...initialState,
    setName(input: string) {
        set({name: input});
    },
    setBirthday(input: Date) {
        set({birthday: input});
    }
}));

export {useUserInfo};
