import React, { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Select } from "antd";
const { Option } = Select;

export default function Job({ job }) {
	const [open, setOpen] = useState(false);
	//   aggregations: {}
	// items_per_page: 20
	// page: 1
	// page_count: 20
	// results: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
	// timed_out: false
	// took: 1
	// total: 397
	// description: "Splice is creating a new way to make music—and making it accessible to all. "
	// id: 11871
	// industries: (2) [{…}, {…}]
	// locations: [{…}]
	// model_type: "companies"
	// name: "Splice"
	// publication_date: "2019-12-13T17:25:41.928011Z"
	// refs: {landing_page: "https://www.themuse.com/companies/splice", jobs_page: "https://www.themuse.com/search/jobs/c-splice", mini_f1_image: "https://pilbox.themuse.com/image.jpg?url=https%3A%…c8c72039cb49c6a09ff913283bdece&h=135&prog=1&w=183", f2_image: "https://assets.themuse.com/uploaded/companies/1187…18a0c31f0ca892638bd913361c99dbcf1088d03928b5555b3", logo_image: "https://assets.themuse.com/uploaded/companies/1187…d19b9a68e138940afd62e2f9336f0465b740bbdce3381b9ef", …}
	// short_name: "splice"
	// size: {name: "Medium Size", short_name: "medium"}
	// tags: []
	// twitter: null
	function handleChange(value) {
		console.log(`selected ${value}`);
	}
	const Selection = () => {
		return (
			<Select
				defaultValue="industries"
				style={{ width: 120 }}
				onChange={handleChange}
			>
				{React.Children.toArray(
					job.industries.map(title => {
						return <Option value={`${title}`}>{`${title.name}`}</Option>;
					})
				)}
			</Select>
		);
	};

	return (
		<Card className="mb-3">
			<Card.Body>
				<div className="d-flex justify-content-between">
					<div>
						<Card.Title>
							{<Selection />}
							<span className="text-muted font-weight-light">{job.name}</span>
						</Card.Title>
						<Card.Subtitle className="text-muted mb-2">
							{new Date(job.publication_date).toLocaleDateString()}
						</Card.Subtitle>
						<Badge variant="secondary" className="mr-2">
							{job.type}
						</Badge>
						<Badge variant="secondary">{job.location}</Badge>
						<div style={{ wordBreak: "break-all" }}>
							<ReactMarkdown source={job.how_to_apply} />
						</div>
					</div>
					<img
						className="d-none d-md-block"
						height="50"
						alt={job.company}
						src={job.company_logo}
					/>
				</div>
				<Card.Text>
					<Button
						onClick={() => setOpen(prevOpen => !prevOpen)}
						variant="primary"
					>
						{open ? "Hide Details" : "View Details"}
					</Button>
				</Card.Text>
				<Collapse in={open}>
					<div className="mt-4">
						<ReactMarkdown source={job.description} />
					</div>
				</Collapse>
			</Card.Body>
		</Card>
	);
}
