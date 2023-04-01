import axios from "axios";

export const AxiosRequest = async (methods, url, header, body) => {
	const config = {
		method: methods,
		url,
		headers: header
			? header
			: {
					"Content-Type": "application/json",
			  },
		data: JSON.stringify(body),
	};

	// Axios instance
	return axios(config)
		.then((data) => {
			return data;
		})
		.catch((error) => {
			return error;
		});
};
