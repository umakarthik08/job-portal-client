import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';
import "../App.css"

const ApplyJob = () => {
    const {
        register,
        handleSubmit,reset,
        watch,
        formState: { errors },
    } = useForm()

    const params = new URLSearchParams(location.search);
    const title = params.get('title');
    const jobId = params.get('id');
    const companyName = params.get('companyName')

    const onSubmit = (data) => {
        data.skills = selectedOption
        data.colleges = selectedClg
        data.fieldOfStudy = selectedFs
        data.date = new Date().toISOString().split('T')[0]
        console.log(data)
        fetch("https://job-portal-server-w1dw.onrender.com/apply-job",
            {
                method:"POST",
                headers: {"content-type":"application/json"},
                body:JSON.stringify(data)
            }
        ).then(res => res.json()).then((result) =>{
            console.log(result);
            if(result.acknowledged === true){
                alert("Job Applied Sccessfully!!")
            }
            reset()
            data.skills = null
        })
        console.log(data)
    }

    const colleges = [
        { value: "IIT Bombay", label: "IIT Bombay" },
        { value: "IIT Delhi", label: "IIT Delhi" },
        { value: "IIT Madras", label: "IIT Madras" },
        { value: "IIT Kanpur", label: "IIT Kanpur" },
        { value: "IIT Kharagpur", label: "IIT Kharagpur" },
        { value: "IIT Roorkee", label: "IIT Roorkee" },
        { value: "IIT Guwahati", label: "IIT Guwahati" },
        { value: "IIT Hyderabad", label: "IIT Hyderabad" },
        { value: "IIT Ropar", label: "IIT Ropar" },
        { value: "IIT Bhubaneswar", label: "IIT Bhubaneswar" },
        { value: "IIT Gandhinagar", label: "IIT Gandhinagar" },
        { value: "IIT Jodhpur", label: "IIT Jodhpur" },
        { value: "IIT Patna", label: "IIT Patna" },
        { value: "IIT Indore", label: "IIT Indore" },
        { value: "IIT Mandi", label: "IIT Mandi" },
        { value: "IIT (BHU) Varanasi", label: "IIT (BHU) Varanasi" },
        { value: "IIT Palakkad", label: "IIT Palakkad" },
        { value: "IIT Tirupati", label: "IIT Tirupati" },
        { value: "IIT Dhanbad", label: "IIT Dhanbad" },
        { value: "IIT Bhilai", label: "IIT Bhilai" },
        { value: "IIT Goa", label: "IIT Goa" },
        { value: "IIT Jammu", label: "IIT Jammu" },
        { value: "IIT Dharwad", label: "IIT Dharwad" },
        { value: "NIT Warangal", label: "NIT Warangal" },
        { value: "NIT Tiruchirappalli", label: "NIT Tiruchirappalli" },
        { value: "NIT Surathkal", label: "NIT Surathkal" },
        { value: "NIT Calicut", label: "NIT Calicut" },
        { value: "NIT Rourkela", label: "NIT Rourkela" },
        { value: "NIT Kurukshetra", label: "NIT Kurukshetra" },
        { value: "NIT Durgapur", label: "NIT Durgapur" },
        { value: "NIT Jamshedpur", label: "NIT Jamshedpur" },
        { value: "NIT Hamirpur", label: "NIT Hamirpur" },
        { value: "NIT Jaipur", label: "NIT Jaipur" },
        { value: "NIT Nagpur", label: "NIT Nagpur" },
        { value: "NIT Allahabad", label: "NIT Allahabad" },
        { value: "NIT Bhopal", label: "NIT Bhopal" },
        { value: "NIT Silchar", label: "NIT Silchar" },
        { value: "NIT Srinagar", label: "NIT Srinagar" },
        { value: "NIT Surat", label: "NIT Surat" },
        { value: "NIT Patna", label: "NIT Patna" },
        { value: "NIT Raipur", label: "NIT Raipur" },
        { value: "NIT Agartala", label: "NIT Agartala" },
        { value: "NIT Goa", label: "NIT Goa" },
        { value: "NIT Manipur", label: "NIT Manipur" },
        { value: "NIT Meghalaya", label: "NIT Meghalaya" },
        { value: "NIT Mizoram", label: "NIT Mizoram" },
        { value: "NIT Nagaland", label: "NIT Nagaland" },
        { value: "NIT Puducherry", label: "NIT Puducherry" },
        { value: "NIT Sikkim", label: "NIT Sikkim" },
        { value: "NIT Arunachal Pradesh", label: "NIT Arunachal Pradesh" },
        { value: "NIT Delhi", label: "NIT Delhi" },
        { value: "NIT Uttarakhand", label: "NIT Uttarakhand" },
        { value: "IIIT Delhi", label: "IIIT Delhi" },
        { value: "IIIT Hyderabad", label: "IIIT Hyderabad" },
        { value: "IIIT Bangalore", label: "IIIT Bangalore" },
        { value: "IIIT Allahabad", label: "IIIT Allahabad" },
        { value: "IIIT Gwalior", label: "IIIT Gwalior" },
        { value: "IIIT Jabalpur", label: "IIIT Jabalpur" },
        { value: "IIIT Kancheepuram (Chennai)", label: "IIIT Kancheepuram (Chennai)" },
        { value: "IIIT Kottayam", label: "IIIT Kottayam" },
        { value: "IIIT Lucknow", label: "IIIT Lucknow" },
        { value: "IIIT Pune", label: "IIIT Pune" },
        { value: "IIIT Kota", label: "IIIT Kota" },
        { value: "IIIT Vadodara", label: "IIIT Vadodara" },
        { value: "BITS Pilani", label: "BITS Pilani" },
        { value: "DTU (Delhi Technological University)", label: "DTU (Delhi Technological University)" },
        { value: "NSIT (Netaji Subhas University of Technology, Delhi)", label: "NSIT (Netaji Subhas University of Technology, Delhi)" },
        { value: "PEC Chandigarh (Punjab Engineering College)", label: "PEC Chandigarh (Punjab Engineering College)" },
        { value: "ISM Dhanbad (Indian School of Mines)", label: "ISM Dhanbad (Indian School of Mines)" },
        { value: "BIT Mesra (Birla Institute of Technology)", label: "BIT Mesra (Birla Institute of Technology)" },
        { value: "NITIE Mumbai (National Institute of Industrial Engineering)", label: "NITIE Mumbai (National Institute of Industrial Engineering)" },
        { value: "NIT Trichy (National Institute of Technology)", label: "NIT Trichy (National Institute of Technology)" },
        { value: "VNIT Nagpur (Visvesvaraya National Institute of Technology)", label: "VNIT Nagpur (Visvesvaraya National Institute of Technology)" },
        { value: "IIEST Shibpur (Indian Institute of Engineering Science and Technology)", label: "IIEST Shibpur (Indian Institute of Engineering Science and Technology)" },
        { value: "COEP Pune (College of Engineering, Pune)", label: "COEP Pune (College of Engineering, Pune)" },
        { value: "Jadavpur University, Faculty of Engineering & Technology", label: "Jadavpur University, Faculty of Engineering & Technology" }
      ];

      const fieldOfStudy = [
        { value: "ComputerScience", label: "Computer Science" },
        { value: "ElectricalEngineering", label: "Electrical Engineering" },
        { value: "MechanicalEngineering", label: "Mechanical Engineering" },
        { value: "CivilEngineering", label: "Civil Engineering" },
        { value: "ChemicalEngineering", label: "Chemical Engineering" },
        { value: "Biotechnology", label: "Biotechnology" },
        { value: "AerospaceEngineering", label: "Aerospace Engineering" },
        { value: "ElectronicsEngineering", label: "Electronics Engineering" },
        { value: "InformationTechnology", label: "Information Technology" },
        { value: "Mathematics", label: "Mathematics" },
        { value: "Physics", label: "Physics" },
        { value: "Chemistry", label: "Chemistry" },
        { value: "EnvironmentalEngineering", label: "Environmental Engineering" },
        { value: "MaterialsScience", label: "Materials Science" },
        { value: "IndustrialEngineering", label: "Industrial Engineering" },
        { value: "Bioinformatics", label: "Bioinformatics" },
        { value: "Nanotechnology", label: "Nanotechnology" },
        { value: "Robotics", label: "Robotics" },
        { value: "TelecommunicationEngineering", label: "Telecommunication Engineering" },
        { value: "DataScience", label: "Data Science" }
      ];
      
      

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
    const [selectedClg,setSelectedClg] = useState(null)
    const [selectedFs,setSelectedFs] = useState(null)

    console.log(watch("example"))
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Title</label>
                            <input type="text" placeholder="Web developer" {...register("jobTitle")} value = {title}  className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Name</label>
                            <input type="text" {...register("companyName")} value = {companyName}  className='create-job-input' />
                        </div>
                    </div>

                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>First Name</label>
                            <input type="text" placeholder="Alex" {...register("firstName")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Last Name</label>
                            <input type="text" placeholder="John" {...register("lastName")} className='create-job-input' />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Email address</label>
                            <input type="email" placeholder="Ex: alexjohn@gmail.com" {...register("email")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Phone number</label>
                            <input type="text" placeholder="Ex: XXXXX XXXXX" {...register("phnNumber")} className='create-job-input' />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Name of your institution</label>
                        <CreatableSelect
                            defaultValue={selectedClg}
                            onChange={setSelectedClg}
                            options={colleges}
                            className='create-job-input py-4'
                        />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Major/Field of Study</label>
                        <CreatableSelect
                            defaultValue={selectedFs}
                            onChange={setSelectedFs}
                            options={fieldOfStudy}
                            className='create-job-input py-4'
                        />
                        </div>
                    </div>

                    <div>
                        <label className='block mb-2 text-lg'>Your Skills Set</label>
                        <CreatableSelect
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                            className='create-job-input py-4'
                        />
                    </div>

                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Graduation Date</label>
                            <input type="date" placeholder="Paste your company logo" {...register("graduationDate")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Your LinkedIn profile</label>
                        <input type="text" placeholder="Paste your company logo" {...register("linkedIn")} className='create-job-input' />
                        </div>
                    </div>

                    <div className='w-full'>
                    <label className='block mb-2 text-lg'>Add your Cover letter</label>
                    <textarea className='w-full pl-3 py-1.5 focus:outline-none' rows = {14} placeholder="Add your cover letter" {...register("coverletter")}/>
                    </div>

                    <div className='w-full'>
                        <label className='block mb-2 text-lg'>Your Resume</label>
                        <input type="file" placeholder="Upload your Resume" {...register("resume")} className='create-job-input' />
                    </div>

                    <input type="submit" className='block mt-12 bg-blue-500 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
                </form>
            </div>
        </div>
    )
}

export default ApplyJob
