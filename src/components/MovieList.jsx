import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Movie from './Movie';
import { movieData, reviewData } from '../assets/data/data.jsx';

// Imgage imports
import imgAvengers from '../assets/images/The-Avengers-md.jpg';
import imgInception from '../assets/images/Inception-md.jpg';
import imgInterstellar from '../assets/images/Interstellar-md.jpg';
import imgDarkKnight from '../assets/images/The-Dark-Knight-md.jpg';

function MovieList() {
   //movieList data
   const movieList = movieData;
   movieData[0].image = imgAvengers;
   movieData[1].image = imgInception;
   movieData[2].image = imgInterstellar;
   movieData[3].image = imgDarkKnight;

   //reviewList data [STATE]
   const [reviewList, setReviewList] = useState(reviewData);

   //addNewReview function
   // this function takes an object with the following properties:
   // movieID, author, stars, review
   // and adds it to the reviewList array
   const addNewReview = ({ movieID, author, stars, review }) => {
      // This code sets the ID of the new review to the maximum ID in the list of reviews plus one. This ensures that no two reviews have the same ID.
      const newID = Math.max(...reviewList.map(review => review.id)) + 1;

      // This code creates a new review object with the given parameters, and adds it to the reviews array of the given movie object.
      const newReview = {
         movieID: movieID,
         id: newID,
         author: author,
         stars: stars,
         review: review,
      };
      // console.log(newReview);
      setReviewList([...reviewList, newReview]);
   };

   return (
      <Container className='bg-dark mt-1'>
         <div className='row'>
            {/* Map over the list of Movies and display a Movie Card for each Movie */}
            {movieList.map(movie => (
               <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  image={movie.image}
                  director={movie.director}
                  writer={movie.writer}
                  starring={movie.starring}
                  synopsis={movie.synopsis}
                  rating={movie.rating}
                  reviewList={reviewList}
                  addNewReview={addNewReview}
               />
            ))}
         </div>
      </Container>
   );
}

export default MovieList;
