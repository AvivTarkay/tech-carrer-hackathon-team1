import React from "react";
import { Drawer, List, Avatar, Divider, Col, Row } from "antd";

// categories: Array(1)
// 0: {name: "Software Engineer"}
// length: 1
// __proto__: Array(0)
// company: {id: 12090, short_name: "amazon", name: "Amazon"}
// contents: "<p><b>DESCRIPTION</b><br><br> EC2, a part of Amazon Web Services, is a fast-growing business within Amazon that provides cost effective easy to use cloud computing resources to businesses of all sizes around the world. With AWS, you can requisition compute power, storage, databases, and many other services  paying as you go for only the resources you need.<br><br>This role is in EC2 Capacity Lifecycle. We are responsible for writing software for perfecting capacity elasticity science, delivering the best possible instance lifecycle experience considering optimum hardware and software configurations, managing our ever-growing multi-billion-dollar in-fleet hardware for most optimum utilization, and expanding the AWS footprint in many new regions every quarter.<br><br>Within Capacity Lifecycle this team owns developing services and features to make sure the capacity footprint meets the forecasted demand of the world's largest fleet of compute resources, and the delivery of APIs to expose capacity balancing features to the rest of the capacity organization. This role will require working closely with subject matter experts and other engineering teams to ensure capacity footprint is balanced across all our offerings to meet the forecasted customer demand using optimization and ML based approaches.<br><br>Responsibilities will include significant hands-on software development, designing, coding, building software services to support the scale out of the team's services, and working with other senior engineers and AWS service teams to integrate capacity insights with automation and improve service scalability and performance. You will use statistical and analytic methods to systemize the identification of bottlenecks, root causing issues and orchestrating actions across our capacity management infrastructure to remediate issues. You will have a major influence in coaching others across the organization, in collaboration with software development teams, as well as leading local development to improve operational excellence.<br><br>Successful candidates will be well versed in automation, system design and remediation, technical leadership, and collaboration. We are looking for people that are self-motivated, able to deal with the ambiguity between technical and business trade-offs, and interested in innovating on highly scalable distributed systems problems. You are a team player. You will be working daily with your team members to manage product releases and day-to-day development activities. You'll be expected to help mentor other engineers, participate in designing new software, do code reviews, and most importantly ship code!<br><br>Inclusive Team Culture<br>Here at AWS, we embrace our differences. We are committed to furthering our culture of inclusion. We have ten employee-led affinity groups, reaching 40,000 employees in over 190 chapters globally. We have innovative benefit offerings, and host annual and ongoing learning experiences, including our Conversations on Race and Ethnicity (CORE) and AmazeCon (gender diversity) conferences. Amazon's culture of inclusion is reinforced within our 14 Leadership Principles, which remind team members to seek diverse perspectives, learn and be curious, and earn trust.<br><br>Work/Life Balance<br>Our team puts a high value on work-life balance. It isn't about how many hours you spend at home or at work; it's about the flow you establish that brings energy to both parts of your life. We believe striking the right balance between your personal and professional life is critical to life-long happiness and fulfillment. We offer flexibility in working hours and encourage you to find your own balance between your work and personal lives.<br><br>Mentorship &amp; Career Growth<br>Our team is dedicated to supporting new members. We have a broad mix of experience levels and tenures, and we're building an environment that celebrates knowledge sharing and mentorship. Our senior members enjoy one-on-one mentoring and thorough, but kind, code reviews. We care about your career growth and strive to assign projects based on what will help each team member develop into a better-rounded engineer and enable them to take on more complex tasks in the future<br><br>If this sounds intriguing consider joining our team. You will enjoy great benefits, a work environment with an innovation culture, and exciting opportunities to make history, have great fun and be part of the fastest-growing technology company on earth.<br><br> <b>BASIC QUALIFICATIONS</b> <br><br> •  4+ years of professional software development experience<br>•  3+ years of programming experience with at least one modern language such as Java, C++, or C# including object-oriented design<br>•  2+ years of experience contributing to the architecture and design (architecture, design patterns, reliability and scaling) of new and current systems<br>•  3+ years of non-internship professional software development experience.<br>•  Programming experience with at least one modern language such as Java, C++, or C# including object-oriented design.<br>•  1+ years of experience contributing to the architecture and design (architecture, design patterns, reliability and scaling) of new and current systems.<br><br> <b>PREFERRED QUALIFICATIONS </b> <br><br> •  Masters or PhD degree, further education or similar experience in any related computer science or engineering field<br>•  5+ years of hands-on experience with two or more general purpose OO programming languages including but not limited to: Java, C#, C/C++, Ruby<br>•  Interest and ability to learn other coding languages as required<br>•  Experience working on at least any of following two areas: large-scale distributed application development, machine learning, Unix/Linux environments, and deep-dive root-cause problem identification<br><br>Amazon is committed to a diverse and inclusive workplace. Amazon is an equal opportunity employer and does not discriminate on the basis of race, national origin, gender, gender identity, sexual orientation, protected veteran status, disability, age, or other legally protected status. For individuals with disabilities who would like to request an accommodation, please visit https://www.amazon.jobs/en/disability/us.</p>"
// id: 4940006
// levels: Array(1)
// 0: {name: "Senior Level", short_name: "senior"}
// length: 1
// __proto__: Array(0)
// locations: Array(1)
// 0: {name: "Seattle, WA"}
// length: 1
// __proto__: Array(0)
// model_type: "jobs"
// name: "Senior Software Development Engineer"
// publication_date: "2021-06-11T12:07:17Z"
// refs:
// landing_page: "https://www.themuse.com/jobs/amazon/senior-software-development-engineer-61f553"
// __proto__: Object
// short_name: "senior-software-development-engineer-61f553"
// tags: Array(0)
// length: 0
// __proto__: Array(0)
// type: "external"
// __proto__: Object

function DrawerItem({ job, onClose, toggle }) {
	console.log("🚀 ~ file: Drawer.jsx ~ line 4 ~ Drawer ~ job", job);
	const {
		categories,
		company,
		levels,
		locations,
		publication_date,
		refs,
	} = job;

	const DescriptionItem = ({ title, content }) => (
		<div className="site-description-item-profile-wrapper">
			<p className="site-description-item-profile-p-label">{title}:</p>
			{content}
		</div>
	);
	return (
		<Drawer
			width={640}
			placement="left"
			closable={false}
			onClose={onClose}
			visible={toggle}
		>
			<p className="site-description-item-profile-p">Company :{company.name}</p>
			<Row>
				<Col span={12}>
					<DescriptionItem title="Position" content={categories[0].name} />
				</Col>
				<Col span={12}>
					<DescriptionItem title="Level" content={levels[0].name} />
				</Col>
			</Row>
			<Row>
				<Col span={12}>
					<DescriptionItem title="Published" content={publication_date} />
				</Col>
				<Col span={12}>
					<DescriptionItem title="Location" content={locations[0].name} />
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<DescriptionItem
						title="Skills"
						content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
					/>
				</Col>
			</Row>
			<Divider />
			<p className="site-description-item-profile-p">Contacts</p>
			<Row>
				<Col span={12}>
					<DescriptionItem title="Email" content="AntDesign@example.com" />
				</Col>
				<Col span={12}>
					<DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<DescriptionItem
						title="Github"
						content={<a href={refs.landing_page}>Visit Site</a>}
					/>
				</Col>
			</Row>
		</Drawer>
	);
}

export default DrawerItem;
