import { Select } from "antd";
const { Option } = Select;

const jobCategory = [
	"Corporate",
	"Data Science",
	"Design",
	"Editor",
	"HR",
	"IT",
	"Marketing",
	"Product",
	"Project Management",
	"Recruiting",
	"Software Engineer",
	"UX",
];
const jobLevel = [
	"Entry Level",
	"Mid Level",
	"Senior Level",
	"management",
	"Internship",
];
const levelList = [];
const companyList = [];

jobCategory.forEach(industry =>
	companyList.push(<Option key={industry}>{industry}</Option>)
);
jobLevel.forEach(company =>
	levelList.push(<Option key={company}>{company}</Option>)
);

export default function SearchForm({ setCategoriesParam, setLevelParam }) {
	function handleChangeCategory(value) {
		setCategoriesParam(value);
	}
	function handleChangeCompany(value) {
		setLevelParam(value);
	}
	return (
		<div className="searchContainer">
			<div className="searchOne">
				<Select
					mode="multiple"
					allowClear
					style={{ width: "100%" }}
					placeholder="Please select"
					defaultValue={"Engineering"}
					onChange={handleChangeCategory}
				>
					{companyList}
				</Select>
			</div>
			<div className="searchTwo">
				<Select
					mode="multiple"
					allowClear
					style={{ width: "100%" }}
					placeholder="Please select"
					defaultValue={"Large Size"}
					onChange={handleChangeCompany}
				>
					{levelList}
				</Select>
			</div>
		</div>
	);
}
