import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../Components/PageHeader';
import { } from "react-icons/fi"
import { FaBriefcase, FaIndianRupeeSign } from 'react-icons/fa6';
import ApplyJob from './ApplyJob';

const JobDetails = () => {
    const { id} = useParams();
    const [job, setJobs] = useState([])
    const [applyState, setApplyState] = useState("Apply")
    useEffect(() => {
        fetch(`https://dashboard.render.com/web/srv-cq4i2no8fa8c73fpq3e0/all-jobs/${id}`).then(res => res.json()).then(data => setJobs(data))
    }, [])

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <PageHeader title={job.companyName} path={"Job details"} />
            <h3 className='mt-7 text-lg'><span className='font-bold'>Job Id : </span> {job._id}</h3>
            <div className='flex mt-4'>
                <span className='mt-1 mr-2'><FaBriefcase /></span><h1>{job.jobTitle}</h1>
            </div>
            <div className='flex mt-4'>
                <span className='font-bold mt-1 mr-2'><FaIndianRupeeSign /> </span><h3>{job.minPrice}K - {job.maxPrice}K</h3>
            </div>
            <h3 className='mt-4'><span className='font-bold'>Salary Type : </span> {job.salaryType}</h3>
            <h3 className='mt-4'><span className='font-bold'>Location : </span> {job.jobLocation}</h3>
            <h3 className='mt-4'><span className='font-bold'>Employment Type : </span> {job.employmentType}</h3>
            <h3 className='mt-4'><span className='font-bold'>Experience required : </span> {job.experienceLevel}</h3>
            <h3 className='mt-4'><span className='font-bold'>Posted at : </span> {job.postingDate}</h3>
            <h3 className='mt-4'><span className='font-bold'>Posted by : </span> {job.postedBy}</h3>
            <div className='mt-4'>
                <h3 className='font-bold'>About Us</h3>
                <p>{job.description}</p>
            </div>
            <button className='mt-4 bg-blue-900 mb-8 900 px-8 py-2'>
                <Link className = "text-white" to= {`/apply-job?companyName=${job.companyName}&title=${job.jobTitle}&id=${id}`}>{applyState}</Link>
            </button>
        </div>
    )
}

export default JobDetails
