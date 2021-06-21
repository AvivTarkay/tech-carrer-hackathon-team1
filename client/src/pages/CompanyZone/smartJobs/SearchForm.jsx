import { Select } from "antd";

const { Option } = Select;

const children = [];

function handleChange(value) {
	console.log(`selected ${value}`);
}

export default function SearchForm({ params, onParamChange }) {
	return (
		<div className="searchContainer">
			<div className="searchOne">
				<Select
					mode="multiple"
					allowClear
					style={{ width: "100%" }}
					placeholder="Please select"
					defaultValue={["a10", "c12"]}
					onChange={handleChange}
				>
					{children}
				</Select>
			</div>
			<div className="searchTwo">
				<Select
					mode="multiple"
					allowClear
					style={{ width: "100%" }}
					placeholder="Please select"
					defaultValue={["a10", "c12"]}
					onChange={handleChange}
				>
					{children}
				</Select>
			</div>
		</div>
	);
}
