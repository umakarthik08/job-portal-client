import React from 'react'
import "../App.css"
import InputField from '../Components/InputField'

const Location = ({ handleChange }) => {
    return (
        <div>
            <h4 className='text-lg font-medium'>Location</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span>All
                </label>
                <InputField 
                handleChange={handleChange} 
                value="Bangalore" 
                title="Bangalore" 
                name="test" />
                <InputField 
                handleChange={handleChange} 
                value="Hyderabad" 
                title="Hyderabad" 
                name="test" />
                <InputField 
                handleChange={handleChange} 
                value="Mumbai" 
                title="Mumbai" 
                name="test" />
                <InputField 
                handleChange={handleChange} 
                value="Pune" 
                title="Pune" 
                name="test" />
                <InputField 
                handleChange={handleChange} 
                value="Noida" 
                title="Noida" 
                name="test" />
            </div>
        </div>
    )
}

export default Location
