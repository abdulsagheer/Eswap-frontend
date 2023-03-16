import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/Apis";

const initialState = {
	loading: false,
	tokens: null,
	history: null,
	error: null,
};

export const fetchTokens = createAsyncThunk("tokens/fetchTokens", async () => {
	const data = await api.tokens.getAllTokens();
	return data;
});
export const fetchTokenById = createAsyncThunk(
	"tokens/fetchTokenById",
	async (token) => {
		const data = await api.tokens.getTokenByToken(token);
		return data;
	}
);

export const fetchTokenHistory = createAsyncThunk(
	"tokens/fetchPoolHistory",
	async () => {
		const data = await api.tokens.getHistory();
		return data;
	}
);

export const tokenSlice = createSlice({
	name: "tokens",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTokens.pending, (state) => {
				state.loading = true;
				state.tokens = null;
				state.error = null;
			})
			.addCase(fetchTokens.fulfilled, (state, action) => {
				state.loading = false;
				state.tokens = action.payload;
				state.error = null;
			})
			.addCase(fetchTokens.rejected, (state, action) => {
				state.loading = false;
				state.tokens = null;
				state.error = action.error.message;
			})
			.addCase(fetchTokenById.pending, (state) => {
				state.loading = true;
				state.tokens = null;
				state.error = null;
			})
			.addCase(fetchTokenById.fulfilled, (state, action) => {
				state.loading = false;
				state.tokens = action.payload;
				state.error = null;
			})
			.addCase(fetchTokenById.rejected, (state, action) => {
				state.loading = false;
				state.tokens = null;
				state.error = action.error.message;
			})
			.addCase(fetchTokenHistory.pending, (state) => {
				state.loading = true;
				state.history = null;
				state.error = null;
			})
			.addCase(fetchTokenHistory.fulfilled, (state, action) => {
				state.loading = false;
				state.history = action.payload;
				state.error = null;
			})
			.addCase(fetchTokenHistory.rejected, (state, action) => {
				state.loading = false;
				state.history = null;
				state.error = action.error.message;
			});
	},
});

export default tokenSlice.reducer;
