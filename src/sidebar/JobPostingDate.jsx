import React from 'react'
import InputField from '../Components/InputField'


const dt = new Date();
const twentyFourHoursAgo = new Date(dt - (24 * 60 * 60 * 1000))
const threeDaysAgo = new Date(dt - (3 * 24 * 60 * 60 * 1000))
const weekAgo = new Date(dt - (7 * 24 * 60 * 60 * 1000))
const monthAgo = new Date(dt - (30 * 24 * 60 * 60 * 1000))
const yearAgo = new Date(dt - (365 * 24 * 60 * 60 * 1000))


const strtwentyFourHoursAgo = twentyFourHoursAgo.toLocaleString().slice(0, 10);
const strthreeDaysAgo = threeDaysAgo.toISOString().slice(0, 10);
const strweekAgo = weekAgo.toISOString().slice(0, 10);
const strmonthAgo = monthAgo.toISOString().slice(0, 10);
const stryearAgo = yearAgo.toISOString().slice(0, 10);

const JobPostingDate = ({ handleChange, handleClick }) => {
    return (
        <div>
            <div>
                <h4 className='text-lg font-medium'>Date of Posting</h4>
            </div>
            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span>All
                </label>
                <InputField
                    handleChange={handleChange}
                    value={strtwentyFourHoursAgo}
                    title="Last 24 hours"
                    name="test" />
                <InputField
                    handleChange={handleChange}
                    value={strthreeDaysAgo}
                    title="Last 3 days"
                    name="test" />
                <InputField
                    handleChange={handleChange}
                    value={strweekAgo}
                    title="Last Week"
                    name="test" />
                <InputField
                    handleChange={handleChange}
                    value={strmonthAgo}
                    title="Last Month"
                    name="test" />
                <InputField
                    handleChange={handleChange}
                    value={stryearAgo}
                    title="Last Year"
                    name="test" />
            </div>
        </div>
    )
}

export default JobPostingDate
