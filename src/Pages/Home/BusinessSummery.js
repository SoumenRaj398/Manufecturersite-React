import React from 'react'

const BusinessSummery = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-20">
        Why You Trust Us?
      </h1>
      <div className="mx-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="text-center">
            <h1 className='mb-8 text-2xl font-bold text-secondary'>About Our Overall Reputation</h1>
          <p>Good Reviews</p>
          <progress
            className="progress progress-secondary w-56"
            value="99"
            max="100"
          ></progress>
          <br />
          <p>Bad Reviews</p>
          <progress
            className="progress progress-secondary w-56"
            value="1"
            max="100"
          ></progress>
          <br />
          <p>Tools Quality</p>
          <progress
            className="progress  progress-secondary w-56"
            value="99"
            max="100"
          ></progress>
          <br />
          <p>Delivered In Time</p>
          <progress
            className="progress  progress-secondary w-56"
            value="100"
            max="100"
          ></progress>
          <br />
          <p>Order cancelled</p>
          <progress
            className="progress  progress-secondary w-56"
            value="1"
            max="100"
          ></progress>
        </div>
        <div className='text-center'>
            <h1 className='text-center text-2xl font-bold mb-16 text-secondary'>Users Expectation</h1>
            <div className="stats stats-vertical lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title">Ordered</div>
    <div className="stat-value text-secondary">31K</div>
    <div className="stat-desc">From 2015 to now</div>
  </div>
    {}
  <div className="stat">
    <div className="stat-title">Company</div>
    <div className="stat-value text-primary">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Site Visit</div>
    <div className="stat-value text-secondary">341K</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
      </div>
    </div>
  )
}

export default BusinessSummery
