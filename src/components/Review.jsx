/* eslint-disable react/prop-types */
function Review({ movieReview }) {
   // This function takes a number of stars and returns a string of stars to display for the review.
   const displayStars = stars => {
      let starString = '';
      for (let i = 0; i < stars; i++) {
         starString += '⭐';
      }
      return starString;
   };

   return (
      <div className='review'>
         <p>
            {movieReview.review}
            <br />
            {displayStars(movieReview.stars)}
            <br />
            <span className=' mt-1 fw-lighter fst-italic'>
               {'~'}
               {movieReview.author}
            </span>
         </p>
         <hr></hr>
      </div>
   );
}

export default Review;
