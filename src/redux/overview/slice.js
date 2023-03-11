import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/Apis";

const initialState = {
	loading: false,
	overview: null,
	history: null,
	error: null,
};

export const fetchOverview = createAsyncThunk(
	"overview/fetchOverview",
	async () => {
		const data = await api.overview.getAllOverview();
		return data;
	}
);

export const fetchOverviewHistory = createAsyncThunk(
	"overview/fetchOverviewHistory",
	async () => {
		const data = await api.overview.getHistory();
		return data;
	}
);

export const overviewSlice = createSlice({
	name: "overview",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOverview.pending, (state) => {
				state.loading = true;
				state.overview = null;
				state.error = null;
			})
			.addCase(fetchOverview.fulfilled, (state, action) => {
				state.loading = false;
				state.overview = action.payload;
				state.error = null;
			})
			.addCase(fetchOverview.rejected, (state, action) => {
				state.loading = false;
				state.overview = null;
				state.error = action.error.message;
			})
			.addCase(fetchOverviewHistory.pending, (state) => {
				state.loading = true;
				state.history = null;
				state.error = null;
			})
			.addCase(fetchOverviewHistory.fulfilled, (state, action) => {
				state.loading = false;
				state.history = action.payload;
				state.error = null;
			})
			.addCase(fetchOverviewHistory.rejected, (state, action) => {
				state.loading = false;
				state.history = null;
				state.error = action.error.message;
			});
	},
});

export default overviewSlice.reducer;
