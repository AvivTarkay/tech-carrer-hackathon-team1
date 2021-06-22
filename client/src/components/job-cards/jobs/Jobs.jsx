import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import useFetchJobs from "./FetchJobs";
import JobsPagination from "../../../pages/CompanyZone/smartJobs/JobsPagination";
import SearchForm from "./SearchForm";
import DrawerItem from "./DrawerItem";
import SingleJob from "./singleJob";
import "antd/dist/antd.css";
import "./style.css";

const Jobs = () => {
	const [toggle, setToggle] = useState(false);
	const [categories, setCategories] = useState([]);
	const [level, setLevel] = useState([]);
	const [page, setPage] = useState(1);

	const { jobs, loading, error, hasNextPage } = useFetchJobs(
		categories,
		level,
		page
	);

	const showDrawer = () => {
		setToggle(toggle => !toggle);
	};

	const onClose = () => {
		setToggle(toggle => !toggle);
	};

	return (
		<React.Fragment>
			<Container className="my-4">
				<h1 className="mb-4">Jobs</h1>
				<SearchForm
					setCategoriesParam={setCategories}
					setLevelParam={setLevel}
				/>
				<JobsPagination
					page={page}
					setPage={setPage}
					hasNextPage={hasNextPage}
				/>

				{loading && <h1>Loading...</h1>}
				{error && <h1>Error. Try Refreshing.</h1>}

				<div className="jobsContainer">
					<div className="wrapper">
						{React.Children.toArray(
							jobs?.results?.map(job => {
								return <SingleJob job={job} showDrawer={showDrawer} />;
							})
						)}
					</div>
				</div>

				<JobsPagination
					page={page}
					setPage={setPage}
					hasNextPage={hasNextPage}
				/>
				{React.Children.toArray(
					jobs?.results?.map(job => {
						return <DrawerItem job={job} onClose={onClose} toggle={toggle} />;
					})
				)}
			</Container>
		</React.Fragment>
	);
};
export default Jobs;

//* results
// categories: Array(1)
// 0: {name: "Software Engineer"}
// length: 1
// __proto__: Array(0)
// company:
// id: 12090
// name: "Amazon"
// short_name: "amazon"
// __proto__: Object
// contents: "<p><b>DESCRIPTION</b><br><br> Passionate about Big Data and Distributed Systems? Interested in building new state-of-the-art products at Petabyte scale? Be part of a team of industry leading experts that operates one of the largest big data analytics systems at Amazon. We own the campaign traffic reporting product for all of advertising and are responsible for end to end processing of impressions, views, and clicks as well as video interaction events and other rich media events in ads. We are applying the latest machine learning and AWS big data technologies available on terabytes of data a day (over 50B new events per day) operating Petabyte size clusters. We constantly invent on our cutting-edge event-driven architectures to stay ahead of growing scale. Our streaming data must always be the fastest, most high-fidelity data as it is both billable as well as critical to checking the heartbeat of a campaign and part of the measure of success for a campaign.<br><br>The charter of this team is focused on harvesting curated traffic events and summarizing them business use cases. In essence this function will ingest and transform ad traffic events and summarizing them into fine-grained aggregates that form the core KPIs for advertising.<br><br>Candidates for this position should be creative, demonstrated leader with superior analytical abilities and a strong drive to deliver results. This opportunity requires deep technical, problem-solving and communication skills.<br><br>Key Responsibilities:<br>•  Define and drive the multi-year vision for a big data processing platform.<br>•  Build, manage, and develop world-class engineers including making hiring recommendations and guiding and mentoring engineers and product and program managers within and outside of the team.<br>•  Deliver robust and scalable solutions toward your vision, invent or incorporate in new technologies when needed.<br>•  Ensure high quality design reviews that meet business and architectural goals and drive critical feedback on architecture and design issues.<br>•  Oversee resource allocation to ensure appropriate business and staff development goals are met.<br>•  Build relationships with software development managers, engineers, product managers and technical program managers across upstream and downstream teams to influence product development for advertising traffic data.<br>•  Participate in strategic planning to achieve technical and business objectives and interact with customers, other leaders, and your team to construct your plan.<br>#madsjobs<br><br> <b>BASIC QUALIFICATIONS</b> <br><br> •  7+ years of relevant engineering experience<br>•  3+ years of people management experience, managing engineers<br>•  Experience in partnering with product and program management teams<br>•  <br> •  Bachelor's degree in Computer Science, or closely related field<br> •  Experience in building scalable systems based on web services<br><br> <b>PREFERRED QUALIFICATIONS </b> <br><br> •  Master's degree in Computer Science, Computer Engineering or related technical discipline<br>•  Knowledge of professional software engineering practices &amp; best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations<br>•  Deep hands-on technical expertise in cloud based distributed software design and development, particularly using AWS services<br>•  Experience with big data technologies including Spark, Lambda, Kinesis, EMR, DynamoDB, Hadoop, Hive, Pig, etc.<br>•  Excellent written and verbal communication skills with the ability to present complex technical information in a clear and concise manner to a variety of audiences.<br><br>Amazon is committed to a diverse and inclusive workplace. Amazon is an equal opportunity employer and does not discriminate on the basis of race, national origin, gender, gender identity, sexual orientation, protected veteran status, disability, age, or other legally protected status. For individuals with disabilities who would like to request an accommodation, please visit https://www.amazon.jobs/en/disability/us.</p>"
// id: 5371639
// levels: Array(1)
// 0: {name: "management", short_name: "management"}
// length: 1
// __proto__: Array(0)
// locations: Array(1)
// 0: {name: "Toronto, Canada"}
// length: 1
// __proto__: Array(0)
// model_type: "jobs"
// name: "Software Development Manager - Big Data"
// publication_date: "2021-06-11T12:05:01Z"
// refs:
// landing_page: "https://www.themuse.com/jobs/amazon/software-development-manager-big-data-a9c4d4"
// __proto__: Object
// short_name: "software-development-manager-big-data-a9c4d4"
// tags: []
// type: "external"
