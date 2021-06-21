import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
// import { Container } from "react-bootstrap";
import Job from "./Job";
import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";

function App() {
	const [params, setParams] = useState({});
	const [page, setPage] = useState(1);

	const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

	function handleParamChange(e) {
		const param = e.target.name;
		const value = e.target.value;
		setPage(1);
		setParams(prevParams => {
			return { ...prevParams, [param]: value };
		});
	}
	console.log("🚀 ~ file: App.js ~ line 12 ~ App ~ jobs", jobs);
	return (
		<Container className="my-4">
			<h1 className="mb-4">Jobs</h1>
			<SearchForm params={params} onParamChange={handleParamChange} />
			<JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
			{loading && <h1>Loading...</h1>}
			{error && <h1>Error. Try Refreshing.</h1>}
			{React.Children.toArray(
				jobs?.results?.map(job => {
					return <Job job={job} />;
				})
			)}
			<JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
		</Container>
	);
}

export default App;
