import "./style.css";
import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";
import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";

function Companies() {
	const [companyParams, setCompanyParams] = useState([]);
	const [industryParams, setIndustryParams] = useState([]);
	const [page, setPage] = useState(1);

	const { jobs, loading, error, hasNextPage } = useFetchJobs(
		companyParams,
		industryParams,
		page
	);

	return (
		<Container className="my-4">
			<h1 className="mb-4">Companies</h1>
			<h3 style={{ fontWeight: "lighter" }}>Total Companies: {jobs.total}</h3>
			<SearchForm
				setCompanyParams={setCompanyParams}
				setIndustryParams={setIndustryParams}
			/>
			<JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
			<div className="cardsWrapper">
				{loading && <h1>Loading...</h1>}
				{error && <h1>Error. Try Refreshing.</h1>}
				{React.Children.toArray(
					jobs?.results?.map(job => {
						return <Job job={job} />;
					})
				)}
			</div>
			<JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
		</Container>
	);
}

export default Companies;
