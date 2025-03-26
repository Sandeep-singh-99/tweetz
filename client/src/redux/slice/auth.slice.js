import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const isCheckAuth = createAsyncThunk("auth/checkAuth", async (_, thunkApi) => {
    try {
        const response = await fetch("http://localhost:5000/api/auth/check-auth", {
            credentials: "include"
        })

        const data = await response.json();

        if (!response.ok) {
            return thunkApi.rejectWithValue(data.error);
        }

        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

const authSlice = new createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null
    },

    extraReducers: (builder) => {
        builder.addCase(isCheckAuth.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        builder.addCase(isCheckAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        })

        builder.addCase(isCheckAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
            state.user = null;
        })
    },

    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },

        // checkAuth: (state, action) => {
        //     state.isAuthenticated = true;
        //     state.user = action.payload;
        // },

        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { login, logout, setLoading, setError } = authSlice.actions;

export default authSlice.reducer;