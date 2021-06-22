import React from "react";
import { List, Avatar } from "antd";

function SingleJob({ job, showDrawer }) {
	const {
		company,
		contents,
		id,
		levels,
		locations,
		name,
		publication_date,
		refs,
		tags,
	} = job;

	return (
		<List
			style={{ width: "500px", height: "200px", margin: "10px" }}
			dataSource={[
				{
					name: company.name,
				},
			]}
			bordered
			renderItem={item => (
				<div className="itemWrapper">
					<List.Item
						key={item.id}
						actions={[
							<a onClick={showDrawer} key={`a-${item.id}`}>
								View Profile
							</a>,
						]}
					>
						<List.Item.Meta
							avatar={
								<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
							}
							title={
								<a
									href={refs.landing_page}
									target="_blank"
									style={{ fontSize: "20px" }}
								>
									{item.name}
								</a>
							}
							description={levels[0].name}
						/>
					</List.Item>
					<List.Item.Meta description={name} className="description" />
				</div>
			)}
		/>
	);
}

export default SingleJob;
// categories: Array(1)
// 0: {name: "Software Engineer"}
// length: 1
// __proto__: Array(0)
// company:
// id: 659
// name: "Facebook"
// short_name: "facebook"
// __proto__: Object
// contents: "<p>Facebook's mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we're building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together. Whether we're creating new products or helping a small business expand its reach, people at Facebook are builders at heart. Our global teams are constantly iterating, solving problems, and working together to empower people around the world to build community and connect in meaningful ways. Together, we can help people build stronger communities - we're just getting started.<br><br><b>Summary</b><br><br>Every month, billions of people access Facebook products using mobile devices from across the world. Our mobile teams constantly push the boundaries of the user experience across all our apps, including Facebook, Instagram, WhatsApp, Messenger, and more, as a leader in an exciting and fast-paced industry that is evolving daily.As our mobile user base grows, we're looking at ways to scale our engineering teams to continue delivering new and innovative products while still moving fast. We're looking for Android NDK Engineers who are passionate about working on client infrastructure that powers all of the products we build across our mobile teams. You will get an opportunity to influence the way we build mobile apps at Facebook. In this role, you will build core Android infrastructure in C++, build awesome new tools that will lead to better efficiency and work on complex system investigations throughout our mobile stack. If you are interested in joining a world-class team of passionate people and industry veterans who like to work hard and play hard, we look forward to hearing from you soon!<br><br><b>Required Skills</b><br><br><ul><li>Lead complex technical or product efforts involving many engineers</li><li>Provide technical guidance and mentorship to peers</li><li>Build client side mobile infrastructure in C++</li><li>Debug app wide issues across Java and C++</li><li>Improve app wide performance and efficiency</li><li>Develop tools for debugging, instrumenting and shipping native code on Android</li></ul><br><br><b>Minimum Qualification</b><br><br><ul><li>5+ years of object-oriented software development experience</li><li>2+ years experience in building infrastructure in C++ using the Android NDK</li><li>2+ years mobile application development experience (Android or iOS)</li><li>Demonstrated experience driving change within an organization and leading complex technical projects</li><li>Experience in understanding code bases, including API design techniques</li><li>Experience in the following technologies:</li><li>Experience with C++ language and related frameworks</li><li>Experience with Multi-Threading and memory management specific to mobile devices</li><li>Experience debugging system issues across languages</li></ul><br><br><b>EOE</b><br><br>Facebook is proud to be an Equal Opportunity and Affirmative Action employer. We do not discriminate based upon race, religion, color, national origin, sex (including pregnancy, childbirth, or related medical conditions), sexual orientation, gender, gender identity, gender expression, transgender status, sexual stereotypes, age, status as a protected veteran, status as an individual with a disability, or other applicable legally protected characteristics. We also consider qualified applicants with criminal histories, consistent with applicable federal, state and local law. Facebook is committed to providing reasonable accommodations for candidates with disabilities in our recruiting process. If you need any assistance or accommodations due to a disability, please let us know at <a href=\"mailto:accommodations-ext@fb.com?Subject=Hello\">accommodations-ext@fb.com</a>.</p>"
// id: 6078632
// levels: Array(1)
// 0: {name: "Senior Level", short_name: "senior"}
// length: 1
// __proto__: Array(0)
// locations: Array(1)
// 0: {name: "New York, NY"}
// length: 1
// __proto__: Array(0)
// model_type: "jobs"
// name: "Android NDK Engineer"
// publication_date: "2021-06-15T11:57:56Z"
// refs:
// landing_page: "https://www.themuse.com/jobs/facebook/android-ndk-engineer-9bb524"
// __proto__: Object
// short_name: "android-ndk-engineer-9bb524"
// tags: Array(1)
// 0: {name: "Fortune 1000", short_name: "fortune-1000-companies"}
// length: 1
// __proto__: Array(0)
// type: "external"
