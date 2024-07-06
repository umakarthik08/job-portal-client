import React from 'react'
import Button from './Button'
import InputField from '../Components/InputField'

const Salary = ({handleChange,handleClick}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <div className='mb-4'>
        <Button onClickHandler={handleClick} value="" title = "Hourly"/>
        <Button onClickHandler={handleClick} value="Monthly" title = "Monthly"/>
        <Button onClickHandler={handleClick} value="Yearly" title = "Yearly"/>
      </div>

      <div>
      <h4 className='text-lg font-medium'>Salary</h4>
      <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span>All
                </label>
                <InputField 
                handleChange={handleChange} 
                value={30000}
                title="< 30000" 
                name="test" />
                <InputField 
                handleChange={handleChange} 
                value={50000}
                title="< 50000" 
                name="test" />
                <InputField 
                handleChange={handleChange} 
                value={80000}
                title="< 80000" 
                name="test" />
                <InputField 
                handleChange={handleChange} 
                value={100000}
                title="< 100000" 
                name="test" />
            </div>
      </div>
    </div>
  )
}

export default Salary
