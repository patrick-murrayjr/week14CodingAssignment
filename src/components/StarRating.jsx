/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const StarRating = props => {
   const [rating, setRating] = useState(null); // for the star rating
   const [hover, setHover] = useState(null); // for the hover effect

   return (
      <div>
         {[...Array(5)].map((_star, index) => {
            const ratingValue = index + 1;
            return (
               <label key={index}>
                  <input
                     type='radio'
                     name='rating'
                     value={ratingValue}
                     onClick={() => {
                        setRating(ratingValue);
                        console.log(ratingValue);
                        console.log(props.changeRating);
                        props.changeRating(ratingValue);
                     }}
                  />
                  <FaStar
                     className='star'
                     color={ratingValue <= (hover || rating) ? '#ffc107' : 'gray'}
                     size={20}
                     onMouseEnter={() => setHover(ratingValue)}
                     onMouseLeave={() => setHover(null)}
                  />
               </label>
            );
         })}
         {rating && <p>You rated this movie {rating} stars.</p>}
      </div>
   );
};
export default StarRating;
