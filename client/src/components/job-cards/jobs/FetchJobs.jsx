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
// &category=Data%20Science level=Entry%20Level
export default function useFetchJobs(categories, level, page) {
	const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

	const companyObj = {};
	categories.forEach((key, i) => {
		companyObj[`${i}`] = key.replace(/ /g, "%20");
	});
	const levelObj = {};
	level.forEach((key, i) => {
		levelObj[`${i}`] = key.replace(/ /g, "%20");
	});

	useEffect(() => {
		let BASE_URL = `${PF}?category=Corporate&page=1&descending=true`;

		categories.forEach(
			value => (BASE_URL = BASE_URL.concat(`&category=${value}`))
		);

		level.forEach(value => (BASE_URL = BASE_URL.concat(`&level=${value}`)));

		const cancelToken1 = axios.CancelToken.source();
		dispatch({ type: ACTIONS.MAKE_REQUEST });
		axios
			.get(BASE_URL, {
				cancelToken: cancelToken1.token,
				params: { markdown: true, page: page },
			})
			.then(res => {
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
	}, [page, categories, level]);

	return state;
}
