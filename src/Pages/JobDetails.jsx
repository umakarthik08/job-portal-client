import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageHeader from '../Components/PageHeader';
import { FaBriefcase, FaIndianRupeeSign } from 'react-icons/fa6';
import { useAuth0 } from '@auth0/auth0-react';

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState({});
    const [applyState, setApplyState] = useState("Apply");
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const [myAppliedJobs, setMyAppliedJobs] = useState([]);
    const email = user?.email || "umakarthikray@gmail.com";

    useEffect(() => {
        fetch(`https://job-portal-server-ua61.onrender.com/all-jobs/${id}`)
            .then((res) => res.json())
            .then((data) => setJob(data));

        fetch(`https://job-portal-server-ua61.onrender.com/my-applications/${email}`)
            .then((res) => res.json())
            .then((data) => setMyAppliedJobs(data));
    }, [id, email]);

    console.log(email)
    console.log(myAppliedJobs)

    useEffect(() => {
        for (let i = 0; i < myAppliedJobs.length; i++) {
            if (myAppliedJobs[i].companyName === job.companyName) {
                setApplyState("Applied");
                break;
            }
        }
    }, [myAppliedJobs, job.jobTitle]);

    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            <PageHeader title={job.companyName} path={"Job details"} />
            <h3 className="mt-7 text-lg">
                <span className="font-bold">Job Id : </span> {job._id}
            </h3>
            <div className="flex mt-4">
                <span className="mt-1 mr-2">
                    <FaBriefcase />
                </span>
                <h1>{job.jobTitle}</h1>
            </div>
            <div className="flex mt-4">
                <span className="font-bold mt-1 mr-2">
                    <FaIndianRupeeSign />
                </span>
                <h3>
                    {job.minPrice}K - {job.maxPrice}K
                </h3>
            </div>
            <h3 className="mt-4">
                <span className="font-bold">Salary Type : </span> {job.salaryType}
            </h3>
            <h3 className="mt-4">
                <span className="font-bold">Location : </span> {job.jobLocation}
            </h3>
            <h3 className="mt-4">
                <span className="font-bold">Employment Type : </span> {job.employmentType}
            </h3>
            <h3 className="mt-4">
                <span className="font-bold">Experience required : </span> {job.experienceLevel}
            </h3>
            <h3 className="mt-4">
                <span className="font-bold">Posted at : </span> {job.postingDate}
            </h3>
            <h3 className="mt-4">
                <span className="font-bold">Posted by : </span> {job.postedBy}
            </h3>
            <div className="mt-4">
                <h3 className="font-bold">About Us</h3>
                <p>{job.description}</p>
            </div>
            <button
    className="mt-4 bg-blue-900 mb-8 px-8 py-2"
    disabled={applyState === "Applied"}
    onClick={() => {
        if (!isAuthenticated) {
            alert("Please login to apply");
            loginWithRedirect();
        }
    }}
>
    {isAuthenticated ? (
        applyState === "Applied" ? (
            <span className="text-white">{applyState}</span>
        ) : (
            <Link className="text-white" to={`/apply-job?companyName=${job.companyName}&title=${job.jobTitle}&id=${id}`}>
                {applyState}
            </Link>
        )
    ) : (
        <span className="text-white">Apply</span>
    )}
</button>

        </div>
    );
};

export default JobDetails;
