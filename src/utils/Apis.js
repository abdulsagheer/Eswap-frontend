import { AxiosRequest } from "./ApiCall";

const baseUrl = import.meta.env.VITE_SERVER_URL;
console.log(import.meta.env.VITE_SERVER_URL);

export const api = {
	overview: {
		getAllOverview: async () => {
			const { data } = await AxiosRequest("GET", `${baseUrl}/overview`);
			return data;
		},
		getHistory: async () => {
			const { data } = await AxiosRequest(
				"GET",
				`${baseUrl}/overview/history/600`
			);
			return data;
		},
	},
	tokens: {
		getAllTokens: async () => {
			const { data } = await AxiosRequest("GET", `${baseUrl}/tokens/all`);
			return data;
		},
		getTokenByToken: async (token) => {
			const { data } = await AxiosRequest("GET", `${baseUrl}/tokens/${token}`);
			return data;
		},
		getHistory: async () => {
			const { data } = await AxiosRequest(
				"GET",
				`${baseUrl}/token/history/CMDX/600`
			);
			return data;
		},
	},
	pools: {
		getAllPools: async () => {
			const { data } = await AxiosRequest("GET", `${baseUrl}/pairs/all`);
			return data;
		},
		getPoolById: async (id) => {
			const { data } = await AxiosRequest("GET", `${baseUrl}/pairs/${id}`);
			return data;
		},
		getHistory: async () => {
			const { data } = await AxiosRequest(
				"GET",
				`${baseUrl}/pair/history/CMDX-ATOM/600`
			);
			return data;
		},
	},
};
