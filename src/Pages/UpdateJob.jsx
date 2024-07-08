import { useLoaderData, useParams ,useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import "../App.css"
import CreatableSelect from 'react-select/creatable';

const UpdateJob = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const {postedBy,employmentType,companyName,jobTitle,skills,companyLogo,minPrice,maxPrice,jobLocation,description,postingDate,salaryType,experienceLevel} = useLoaderData()
    const params = new URLSearchParams(location.search);
    const email = params.get('email');

    const {
        register,
        handleSubmit,reset,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        data.skills = selectedOption
        // console.log(data)
        fetch(`https://dashboard.render.com/web/srv-cq4i2no8fa8c73fpq3e0/update-job/${id}`,
            {
                method:"PATCH",
                headers: {"content-type":"application/json"},
                body:JSON.stringify(data)
            }
        ).then(res => res.json()).then((result) =>{
            console.log(result);
            if(result.acknowledged === true){
                alert("Job Updated Sccessfully!!")
            }
            reset()
            data.skills = null
            navigate(`/my-job?email=${email}`);
        })
    }

    const options = [
        { value: "Javascript", label: "JavaScript" },
        { value: "Python", label: "Python" },
        { value: "Java", label: "Java" },
        { value: "CSharp", label: "C#" },
        { value: "Ruby", label: "Ruby" },
        { value: "PHP", label: "PHP" },
        { value: "CPlusPlus", label: "C++" },
        { value: "Swift", label: "Swift" },
        { value: "GoLang", label: "Go" }
    ];

    const [selectedOption, setSelectedOption] = useState(null)

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Title</label>
                            <input type="text" placeholder="Web developer" {...register("jobTitle")} defaultValue = {jobTitle} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Name</label>
                            <input type="text" placeholder="Ex: Google" {...register("companyName")} defaultValue = {companyName} className='create-job-input' />
                        </div>
                    </div>

                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Minimum Salary</label>
                            <input type="text" placeholder="$20K" {...register("minPrice")} defaultValue = {minPrice} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Maximum Salary</label>
                            <input type="text" placeholder="$120K" {...register("maxPrice")} defaultValue = {maxPrice} className='create-job-input' />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Salary Type</label>
                            <select {...register("salaryType")} className='create-job-input'>
                                <option value={salaryType}>{salaryType}</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Location</label>
                            <input type="text" placeholder="Ex: London" {...register("jobLocation")} defaultValue = {jobLocation} className='create-job-input' />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Posting Date</label>
                            <input type="date" placeholder="mm/dd/yyyy" defaultValue = {postingDate} {...register("postingDate")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Experience level</label>
                            <select {...register("experienceLevel")} className='create-job-input'>
                                <option value={experienceLevel}>{experienceLevel}</option>
                                <option value="No Experience">No Experience</option>
                                <option value="Internship">Internship</option>
                                <option value="Work remotely">Work remotely</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className='block mb-2 text-lg'>Required Skills Set</label>
                        <CreatableSelect
                            onChange={setSelectedOption}
                            defaultValue = {skills}
                            options={options}
                            isMulti
                            className='create-job-input py-4'
                        />
                    </div>

                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company logo here</label>
                            <input type="url" placeholder="Paste your company logo" defaultValue={companyLogo} {...register("companyLogo")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Employement Type</label>
                            <select {...register("employmentType")} className='create-job-input'>
                                <option value={employmentType}>{employmentType}</option>
                                <option value="Full time">Full time</option>
                                <option value="Part time">Part time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>
                    </div>

                    <div className='w-full'>
                    <label className='block mb-2 text-lg'>Add description</label>
                    <textarea value = {description} className='w-full pl-3 py-1.5 focus:outline-none' rows = {6} placeholder="Job description" {...register("description")}/>
                    </div>

                    <div className='w-full'>
                        <label className='block mb-2 text-lg'>Job posted by</label>
                        <input value = {email} disabled = "true" type="email" placeholder="your email" {...register("postedBy")} className='create-job-input' />
                    </div>

                    <input type="submit" className='block mt-12 bg-blue-500 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
                </form>
            </div>
        </div>
  )
}

export default UpdateJob
