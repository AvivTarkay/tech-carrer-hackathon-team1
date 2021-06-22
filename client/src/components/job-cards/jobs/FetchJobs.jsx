import { useReducer, useEffect, useState } from "react";
import axios from "axios";
// {
// 		auth: {
// 			label: "Tech-career-jobs",
// 			api_key:
// 				"45b3025889b5f1db6ea3b97b655cf17e37341c83bd5f644a390e31aa821dc911",
// 		},
// 	}
const ACTIONS = {
	MAKE_REQUEST: "make-request",
	GET_DATA: "get-data",
	ERROR: "error",
	UPDATE_HAS_NEXT_PAGE: "update-has-next-page",
};

const PF = process.env.REACT_APP_PUBLIC_JOBS_URL;

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.MAKE_REQUEST:
			return { loading: true, jobs: [] };
		case ACTIONS.GET_DATA:
			return { ...state, loading: false, jobs: action.payload.jobs };
		case ACTIONS.ERROR:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				jobs: [],
			};
		case ACTIONS.UPDATE_HAS_NEXT_PAGE:
			return { ...state, hasNextPage: action.payload.hasNextPage };
		default:
			return state;
	}
}

export default function useFetchJobs(/*companyParams, industryParams*/ page) {
	let BASE_URL =
		"https://www.themuse.com/api/public/jobs?category=Corporate&category=Data%20Science&category=Design&category=Editor&category=HR&category=IT&category=Marketing&category=Product&category=Project%20Management&category=Recruiting&category=Software%20Engineer&category=UX&level=Entry%20Level&level=Mid%20Level&level=Senior%20Level&level=management&level=Internship&page=1&descending=true";

	// const companyObj = {};

	// companyParams.forEach((key, i) => {
	// 	companyObj[`${i}`] = key.replace(/ /g, "%20");
	// });
	// const industry = {};
	// industryParams.forEach((key, i) => {
	// 	industry[`${i}`] = key.replace(/ /g, "%20");
	// });

	const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

	// if (Object.keys(industry).length !== 0) {
	// 	BASE_URL = `${BASE_URL}&industry=${industry[0]}`;
	// 	console.log(BASE_URL);
	// }
	useEffect(() => {
		const cancelToken1 = axios.CancelToken.source();
		dispatch({ type: ACTIONS.MAKE_REQUEST });
		axios
			.get(BASE_URL, {
				cancelToken: cancelToken1.token,
				params: { markdown: true, page: page },
			})
			.then(res => {
				console.log(res.data);
				dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
			})
			.catch(e => {
				if (axios.isCancel(e)) return;
				dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
			});

		const cancelToken2 = axios.CancelToken.source();
		axios
			.get(BASE_URL, {
				cancelToken: cancelToken2.token,
				params: { markdown: true, page: page + 1 },
			})
			.then(res => {
				dispatch({
					type: ACTIONS.UPDATE_HAS_NEXT_PAGE,
					payload: { hasNextPage: res.data.page_count !== 0 },
				});
			})
			.catch(e => {
				if (axios.isCancel(e)) return;
				dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
			});

		return () => {
			cancelToken1.cancel();
			cancelToken2.cancel();
		};
	}, [page, BASE_URL]);

	return state;
}
