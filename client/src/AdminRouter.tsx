import React from "react";
//Admin page
import AdminPage from "./pages/admin-page";
//Home page
import Home from "./pages/home-page/Home";
//HR page
import Student from "./components/student-cards/studentCards/Student";
import SpecificStudent from "./components/specificStudent/SpecificStudent";
import HrRegisterForm from "./pages/hr-page/Hr-Register";
import Jobs from "../src/components/job-cards/jobs/Jobs";
import StuSteps from "./components/steps/StuSteps";
import StudentPersonal from "./pages/personal-page/StudentPersonal";
import JobEditPage from "./pages/CompanyZone/JobEditPage";

import { Switch, Route } from "react-router-dom";
import AddJob from "./pages/CompanyZone/AddJob";
import Companies from "./pages/CompanyZone/smartJobs/Companies";

function AdminRouter() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/hr">
				<Companies />
			</Route>
			<Route path="/JobEditPage">
				<JobEditPage />
			</Route>
			<Route path="/addNewJob">
				<AddJob />
			</Route>
			<Route path="/signUp/hr/:token/:id">
				<HrRegisterForm />
			</Route>
			<Route path="/recruiter">
				<Jobs />
			</Route>
			<Route path="/student">
				<Student />
			</Route>
			<Route path="/studentPage/:id">
				<SpecificStudent />
			</Route>
			<Route path="/signUp/student/:token/:id">
				<StuSteps />
			</Route>
			<Route path="/admin">
				<AdminPage />
			</Route>
			<Route path="/privatestudent">
				<StudentPersonal />
			</Route>
		</Switch>
	);
}

export default AdminRouter;
