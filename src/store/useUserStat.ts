import {create} from 'zustand';
import axios from 'axios';
import {CallState} from "../types/Types.ts";

interface UserStatsState {
    userCount: number;
    callState: CallState;
    getUserCount: () => Promise<void>;
}

const initialState: UserStatsState = {
    userCount: 0,
    callState: 'Initialized',
    getUserCount: async () => {
    }
}

export const useUserStat = create<UserStatsState>((set) => ({
    ...initialState,
    getUserCount: async () => {
        set({callState: 'Loading'});
        try {
            const response = await axios.get('/api/stat/user');
            set({userCount: response.data.userCount ?? 0, callState: 'OK'});
        } catch (error) {
            console.error('API 호출 실패:', error);
            set({userCount: 0, callState: 'Error'});
        }
    },

    /** user count +1 증가 API 호출 */
    increaseUserCount: async () => {
        set({callState: 'Loading'});
        try {
            const response = await axios.post('/api/stat/user');
            set({userCount: response.data.userCount ?? 0, callState: 'OK'});
        } catch (error) {
            console.error('API 호출 실패:', error);
            set({userCount: 0, callState: 'Error'});
        }
    }
}));
