/* eslint-disable react/prop-types */
import Review from './Review';
const ReviewList = ({ reviewList, movieID }) => {
   return (
      <>
         {reviewList
            .filter(movieReview => movieReview.movieID === movieID)
            .reverse()
            .map(movieReview => (
               <Review movieReview={movieReview} key={movieReview.id} />
            ))}
      </>
   );
};

export default ReviewList;
