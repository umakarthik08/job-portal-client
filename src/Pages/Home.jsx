import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Card from '../Components/Card';
import Job from '../Components/Job';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../Components/Newsletter';


export default function Home() {
  const [selectedCategory,setSelectedCategory] = useState(null);
  const [jobs,setJobs] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const params = new URLSearchParams(location.search);
  const title = params.get('title');

  useEffect(()=>{
    fetch("https://job-portal-server-ua61.onrender.com/all-jobs").then(res =>res.json()).then(data =>{
      setIsLoading(true)
      setJobs(data);
      setIsLoading(false)
    })
},[])

  const [query,setQuery] = useState("");
  const [lcn,setlcn] = useState("");

    const handleInput = (event)=>{
        setQuery(event.target.value)
    }

    const handleInput1 = (event)=>{
      setlcn(event.target.value)
  }
  
  const handleChange = (event) =>{
    setSelectedCategory(event.target.value);
  }

  const filteredItems = jobs.filter((job) =>job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1)*itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex,endIndex};
  }

  const nextPage = () =>{
    if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
      setCurrentPage(currentPage+1);
    }
  }

  const prevPage = () =>{
    if(currentPage > 1){
      setCurrentPage(currentPage-1);
    }
  }

  const handleClick = (event) =>{
    setSelectedCategory(event.target.value);
  }

  const filterData = (jobs,selectedCategory, query) => {
    let filteredJobs = jobs;
    if(query){
      filteredJobs = filteredItems;
    }

    if(lcn) {
      filteredJobs = jobs.filter((job) =>job.jobLocation.toLowerCase().indexOf(lcn.toLowerCase()) !== -1);
    }

    if(title){
      filteredJobs = jobs.filter((job) =>job.jobTitle.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    }

    if (selectedCategory) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType ,postingDate}) => {
        return (
          (jobLocation && jobLocation.toLowerCase() === selectedCategory.toLowerCase()) ||
          (maxPrice && parseInt(maxPrice)*1000 <= parseInt(selectedCategory)) ||
          (salaryType && salaryType.toLowerCase() === selectedCategory.toLowerCase()) ||
          (employmentType && employmentType.toLowerCase() === selectedCategory.toLowerCase()) ||
          (experienceLevel && experienceLevel.toLowerCase() === selectedCategory.toLowerCase()) ||
          (postingDate >= selectedCategory)
        );
      });
    }

    const {startIndex,endIndex} = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex,endIndex);
    return filteredJobs.map((data,i) => <Card key = {i} data = {data} />)
  }
  const result = filterData(jobs,selectedCategory,query);
  
  return (
    <div>
      <Banner query = {query} title={title} lcn = {lcn} handleInput = {handleInput} handleInput1 = {handleInput1} handleClick = {handleClick} />
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 py-12'>
      
      <div className='p-4 bg-white rounded'>
        <Sidebar handleChange={handleChange} handleClick={handleClick}/>
      </div>
      <div className='col-span-2 bg-white p-4 rounded-sm'>{
        isLoading ? (<p className='font-medium'>Loading....</p>) : result.length != 0 ? <Job result={result}/>:
        <>
        <h3 className='text-lg font-bold mb-2'>0 jobs</h3>
        <p>No data found</p>
        </>
      }

      {
        result.length > 0 ? (
          <div className='flex justify-center mt-4 space-x-8'>
            <button onClick={prevPage} disabled={currentPage == 1} className='hover:underline'>Previous</button>
            <span>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
            <button onClick={nextPage} disabled={currentPage == Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
          </div>
        ): ""
      }

        </div>
      <div className='p-4 bg-white rounded'><Newsletter/></div>
      </div>
    </div>
  )
}
