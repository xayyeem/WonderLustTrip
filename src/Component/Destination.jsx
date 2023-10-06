import React from 'react'
import './Destinationstyle.css'
import DestinationData from './DestinationData'
const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular destination</h1>
      <p>your destination is here</p>

      <DestinationData 
      className='first-des'
      heading="taal volcano"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, animi ab esse pariatur nobis commodi vitae accusantium deleniti eaque, nostrum omnis maiores voluptatum quae quos dolores labore quam magnam asperiores laborum, provident ullam fugit? Voluptatem reprehenderit incidunt ea nobis ipsam."
      img1='https://images.unsplash.com/photo-1621420561012-1adfa8e6bc2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFhbCUyMHZvbGNhbm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
      img2='https://images.unsplash.com/photo-1564221778350-e9c052164a57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1370&q=80'
      />

<DestinationData 
  className='first-des-reverse'
      heading="Paris"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, animi ab esse pariatur nobis commodi vitae accusantium deleniti eaque, nostrum omnis maiores voluptatum quae quos dolores labore quam magnam asperiores laborum, provident ullam fugit? Voluptatem reprehenderit incidunt ea nobis ipsam."
      img1='https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80 '
      img2='https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80'
/>
      
    </div>
  )
}

export default Destination