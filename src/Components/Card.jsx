import React from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiClock, FiCreditCard, FiDollarSign, FiMapPin } from "react-icons/fi"
import '../App.css';

const Card = ({data}) => {
    const {_id,companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,jobLocation,employmentType,postingDate,description} = data;
    const truncateDescription = (desc, wordLimit) => {
        const words = desc.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : desc;
    }
  return (
    <section className='card'>
        <Link to = {`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
            <img src={companyLogo} className = 'company-logo' alt="" />
            <div>
                <h4 className='text-primary mb-1'>
                    {companyName}
                </h4>
                <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
                <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                    <span className='flex items-center gap-2'><FiMapPin/>{jobLocation}</span>
                    <span className='flex items-center gap-2'><FiClock/>{employmentType}</span>
                    <span className='flex items-center gap-2'>₹ {minPrice}K - {maxPrice}K</span>
                    <span className='flex items-center gap-2'><FiCalendar/>{postingDate}</span>
                    <span className='flex items-center gap-2'><FiCreditCard/>{salaryType}</span>
                </div>

                <p className='text-base text-primary/70'>{truncateDescription(description, 20)}</p>
            </div>
        </Link>
    </section>
  )
}

export default Card
