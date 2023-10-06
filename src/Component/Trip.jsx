import React from 'react'
import './Tripstyle.css'
import TripData from './TripData'

const Trip = () => {
  return (
    <>
    <div className="trip">
        <h1>Recent Trip</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, labore.</p>
    </div>
    <div className="tripcard">
        <TripData 
        image='https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
        heading='Indonesia'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita architecto possimus ipsam aperiam omnis dolor perspiciatis unde nisi fuga.'
        />

        <TripData 
        image='https://images.unsplash.com/photo-1566914447826-bf04e54bf1be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80'
        heading='Malaysia'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita architecto possimus ipsam aperiam omnis dolor perspiciatis unde nisi fuga.'
        />

        <TripData 
        image='https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
        heading='Dubai'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita architecto possimus ipsam aperiam omnis dolor perspiciatis unde nisi fuga.'
        />

    </div>
    </>
  )
}

export default Trip