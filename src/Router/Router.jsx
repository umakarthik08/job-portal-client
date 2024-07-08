import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Components/Login";
import JobDetails from "../Pages/JobDetails";
import ApplyJob from "../Pages/ApplyJob";
import MyApplications from "../Pages/MyApplications";
import EditApplications from "../Pages/EditApplications";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/post-job",
                element: <CreateJob/>
            },
            {
                path: "/my-job",
                element: <MyJobs/>
            },
            {
                path: "/salary",
                element: <SalaryPage/>
            },
            {
                path: "edit-job/:id",
                element: <UpdateJob/>,
                loader: ({params}) => fetch(`https://dashboard.render.com/web/srv-cq4i2no8fa8c73fpq3e0/all-jobs/${params.id}`)
            },
            {
                path: "edit-application/:id",
                element: <EditApplications/>,
                loader: ({params}) => fetch(`https://dashboard.render.com/web/srv-cq4i2no8fa8c73fpq3e0/all-applications/${params.id}`)
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/job/:id",
                element: <JobDetails/>
            },
            {
                path: "/apply-job",
                element: <ApplyJob/>
            }
            ,{
                path: "/my-applications",
                element: <MyApplications/>
            }
        ]
    },
]);

export default router;