import React from 'react'
import {doctors} from '../assets/assets'

const TopDoctors = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl text-bold'>Top Doctors to Book</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div>
            {doctors.slice(0,10).map((item, index)=>(
                <div>
                    <img src={item.image} alt="doctor-image" />
                    <div>
                        <div>
                            <p></p><p>Available</p>
                        </div>
                        <p>{item.name}</p>
                        <p>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button>more</button>
    </div>
  )
}

export default TopDoctors