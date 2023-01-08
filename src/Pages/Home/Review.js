import React from 'react';

//

const Review = ({review}) => {
    
const {name,comment,rating}=review
    return (
        <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary">{name}</h2>
          <p className='text-secondary'>{comment}</p>
          <p className='font-bold text-secondary'>{rating}</p>
          <div className="rating rating-sm">
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
</div>
        </div>
      </div>
    );
};

export default Review;
