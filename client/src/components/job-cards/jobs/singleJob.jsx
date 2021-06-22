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
