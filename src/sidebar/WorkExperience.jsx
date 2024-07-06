import React from 'react'
import InputField from '../Components/InputField'

const WorkExperience = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className='text-lg font-medium'>Work Experience</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span>Any Experience
                </label>
                <InputField 
                handleChange={handleChange} 
                value="Internship" 
                title="Intership" 
                name="test" />
                <InputField 
                handleChange={handleChange} 
                value="Work remotely" 
                title="Work remotely" 
                name="test" />
                
            </div>
    </div>
  )
}

export default WorkExperience
