import { Card, Avatar } from "antd";

const { Meta } = Card;

export default function Job({ job }) {
	// description: "Splice is creating a new way to make music—and making it accessible to all. "
	// id: 11871
	// industries: (2) [{…}, {…}]
	// locations: [{…}]
	// model_type: "companies"
	// name: "Splice"
	// publication_date: "2019-12-13T17:25:41.928011Z"
	// refs:
	// f1_image: "https://assets.themuse.com/uploaded/companies/11871/about_modules/91366/f2ff9259-e438-4f37-846a-cda44ed8285b.jpg?v=6096c3b9cbeee1865db8d30d1cc6f31e5fc8c72039cb49c6a09ff913283bdece"
	// f2_image: "https://assets.themuse.com/uploaded/companies/11871/about_modules/91366/c289a674-4180-41e2-8498-8d7f44459113.jpg?v=1384709e7be6e9518a0c31f0ca892638bd913361c99dbcf1088d03928b5555b3"
	// f3_image: "https://assets.themuse.com/uploaded/companies/11871/about_modules/91366/ee8f2baa-c130-4342-b697-d73790aff2a0.jpg?v=bf71fc3bc25b12dd91a96128c50c8ccefbea1fb88bcd1b0f0d2877e6d6d51441"
	// jobs_page: "https://www.themuse.com/search/jobs/c-splice"
	// landing_page: "https://www.themuse.com/companies/splice"
	// logo_image: "https://assets.themuse.com/uploaded/companies/11871/small_logo.png?v=d1635a0c6a20856d19b9a68e138940afd62e2f9336f0465b740bbdce3381b9ef"
	// mini_f1_image: "https://pilbox.themuse.com/image.jpg?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fcompanies%2F11871%2Fabout_modules%2F91366%2Ff2ff9259-e438-4f37-846a-cda44ed8285b.jpg%3Fv%3D6096c3b9cbeee1865db8d30d1cc6f31e5fc8c72039cb49c6a09ff913283bdece&h=135&prog=1&w=183"
	// __proto__: Object
	// short_name: "splice"
	// size: {name: "Medium Size", short_name: "medium"}
	// tags: []
	// twitter: null

	return (
		<Card
			className="companyCard"
			style={{ width: 250 }}
			cover={<img alt="example" src={job?.refs?.mini_f1_image} />}
		>
			<Meta
				avatar={<Avatar src={job?.refs?.logo_image} />}
				title={job?.short_name}
			/>
			<a href={job?.refs?.landing_page} target="_blank">
				Visit Company
			</a>
		</Card>
	);
}
