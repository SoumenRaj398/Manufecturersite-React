import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-12'>Customer Reviews</h2>
<div className='grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-12'>
    {
        reviews.map(review=><Review
        key={review._id}
        review={review}
        />)
    }
</div>
        </div>
    );
};

export default Reviews;