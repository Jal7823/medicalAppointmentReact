import { configureStore } from '@reduxjs/toolkit';
import {userSlice} from '../utils/slices'

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
});
