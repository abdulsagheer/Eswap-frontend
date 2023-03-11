import { configureStore } from "@reduxjs/toolkit";
import overviewReducer from "./overview/slice";
import tokensReducer from "./tokens/slice";
import poolsReducer from "./pools/slice";

const store = configureStore({
	reducer: {
		overview: overviewReducer,
		tokens: tokensReducer,
		pools: poolsReducer,
	},
});

export default store;
