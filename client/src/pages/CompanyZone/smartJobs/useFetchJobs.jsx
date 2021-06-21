import { useReducer, useEffect } from "react";
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

const PF = process.env.REACT_APP_PUBLIC_URL;

const BASE_URL = `${PF}?industry=Engineering&industry=Tech&size=Small%20Size&size=Medium%20Size&size=Large%20Size&page=1&descending=true`;

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

export default function useFetchJobs(params, page) {
	console.log(
		"🚀 ~ file: useFetchJobs.jsx ~ line 42 ~ useFetchJobs ~ params",
		params
	);
	const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

	useEffect(() => {
		const cancelToken1 = axios.CancelToken.source();
		dispatch({ type: ACTIONS.MAKE_REQUEST });
		axios
			.get(BASE_URL, {
				cancelToken: cancelToken1.token,
				params: { markdown: true, page: page, ...params },
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
				params: { markdown: true, page: page + 1, ...params },
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
			// cancelToken2.cancel();
		};
	}, [params, page]);

	return state;
}
