import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/Apis";

const initialState = {
	loading: false,
	pools: null,
	history: null,
	error: null,
};

export const fetchPools = createAsyncThunk("pools/fetchPools", async () => {
	const data = await api.pools.getAllPools();
	return data;
});
export const fetchPoolById = createAsyncThunk(
	"pools/fetchPoolById",
	async (id) => {
		const data = await api.pools.getPoolById(id);
		return data;
	}
);

export const fetchPoolsHistory = createAsyncThunk(
	"pools/fetchPoolHistory",
	async () => {
		const data = await api.pools.getHistory();
		return data;
	}
);

export const poolSlice = createSlice({
	name: "pools",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPools.pending, (state) => {
				state.loading = true;
				state.pools = null;
				state.error = null;
			})
			.addCase(fetchPools.fulfilled, (state, action) => {
				state.loading = false;
				state.pools = action.payload;
				state.error = null;
			})
			.addCase(fetchPools.rejected, (state, action) => {
				state.loading = false;
				state.pools = null;
				state.error = action.error.message;
			})
			.addCase(fetchPoolById.pending, (state) => {
				state.loading = true;
				state.pools = null;
				state.error = null;
			})
			.addCase(fetchPoolById.fulfilled, (state, action) => {
				state.loading = false;
				state.pools = action.payload;
				state.error = null;
			})
			.addCase(fetchPoolById.rejected, (state, action) => {
				state.loading = false;
				state.pools = null;
				state.error = action.error.message;
			})
			.addCase(fetchPoolsHistory.pending, (state) => {
				state.loading = true;
				state.history = null;
				state.error = null;
			})
			.addCase(fetchPoolsHistory.fulfilled, (state, action) => {
				state.loading = false;
				state.history = action.payload;
				state.error = null;
			})
			.addCase(fetchPoolsHistory.rejected, (state, action) => {
				state.loading = false;
				state.history = null;
				state.error = action.error.message;
			});
	},
});

export default poolSlice.reducer;
