import { create } from "zustand";

interface UserInfo {
  name: string;
  setName: (input: string) => void;
}

const useUserInfo = create<UserInfo>(set => ({
  name: "",
  setName(input: string) {
    set({ name: input });
  },
}));

export { useUserInfo };
