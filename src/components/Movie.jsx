/* eslint-disable react/prop-types */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ReviewForm from './ReviewForm';

function Movie({
   id,
   image,
   title,
   director,
   writer,
   starring,
   synopsis,
   rating,
   reviewList,
   addNewReview,
}) {
   // this function takes a movieID and returns the average rating for that movie
   function getaverageRating(movieID) {
      let totalStars = 0;
      const filteredList = reviewList.filter(review => review.movieID === movieID);
      for (let i = 0; i < filteredList.length; i++) {
         totalStars += filteredList[i].stars;
      }

      //This code checks the length of the filtered list and if it is empty, then the string 'No Reviews Yet' is returned.

      if (filteredList.length === 0) {
         return 'No Reviews Yet';
      }
      return (Math.round((totalStars / filteredList.length) * 10) / 10).toFixed(1);
   }
   return (
      <Col className='col-12 col-md-6 col-xl-4 col-xxl-3 bg-dark mb-4'>
         <Card className='bg-secondary h-100 rounded border border-warning'>
            <Card.Body className='bg-dark text-light rounded border border-danger m-4'>
               <Card.Title className='text-warning fw-bold fs-4 mb-4'>{title}</Card.Title>
               <img src={image} alt='movie poster' className='img-fluid poster' />

               {/* REVIEW-MODAL*/}
               <div className='d-grid gap-2'>
                  <ReviewForm
                     reviewList={reviewList}
                     movieID={id}
                     addNewReview={addNewReview}
                  />
               </div>

               {/* MOVIE-INFORMATION*/}
               <Card.Subtitle className='fw-light fst-italic mb-3'>
                  {synopsis}
               </Card.Subtitle>
               <Card.Text className='fw-bold'>
                  Avg Audience Score:{' '}
                  <span className='fw-bold text-warning'>{getaverageRating(id)}</span>
               </Card.Text>
               <Card.Text className='fw-bold'>
                  Rated: <span className='fw-lighter text-warning'>{rating}</span>
               </Card.Text>
               <Card.Text className='fw-bold'>
                  Directed by: <span className='fw-lighter text-warning'>{director}</span>
               </Card.Text>
               <Card.Text className='fw-bold'>
                  Written by: <span className='fw-lighter text-warning'>{writer}</span>
               </Card.Text>
               <Card.Text className='fw-bold'>
                  Starring: <span className='fw-lighter text-warning'>{starring}</span>
               </Card.Text>
            </Card.Body>
         </Card>
      </Col>
   );
}
export default Movie;
