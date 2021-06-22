import { Select } from "antd";
const { Option } = Select;

const industries = [
	"Client Services",
	"Engineering",
	"Media",
	"Tech",
	"Social Media",
	"Government",
	"Finance",
];
const companySize = ["Small Size", "Large Size", "Medium Size"];
const industryList = [];
const companyList = [];

industries.forEach(industry =>
	industryList.push(<Option key={industry}>{industry}</Option>)
);
companySize.forEach(company =>
	companyList.push(<Option key={company}>{company}</Option>)
);

export default function SearchForm({ setCompanyParams, setIndustryParams }) {
	function handleChangeIndustry(value) {
		setIndustryParams(value);
	}
	function handleChangeCompany(value) {
		setCompanyParams(value);
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
					onChange={handleChangeIndustry}
				>
					{industryList}
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
					{companyList}
				</Select>
			</div>
		</div>
	);
}
