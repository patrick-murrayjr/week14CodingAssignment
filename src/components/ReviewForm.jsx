/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ReviewList from './ReviewList';
import StarRating from './StarRating';

function ReviewForm({ reviewList, movieID, addNewReview }) {
   const [show, setShow] = useState(false);
   const [newAuthor, setNewAuthor] = useState('');
   const [newReviewText, setNewReviewText] = useState('');
   const [newRating, setNewRating] = useState(1);
   const [validName, setValidName] = useState(false); // for form validation
   const [validReview, setValidReview] = useState(false); // for form validation
   const [isFormDisabled, setisFormDisabled] = useState(false); // for disable form after submitting

   // This function is used to close the modal and reset all the fields in the modal to their default values.
   const handleClose = () => {
      setNewAuthor('');
      setNewReviewText('');
      setValidName(false);
      setValidReview(false);
      setShow(false);
   };
   // This function is used to open the modal and re-enable the form.
   const handleShow = () => {
      setShow(true);
      //re-enable the form
      setisFormDisabled(false);
   };

   // This function is used to handle changes to the review text field.
   const handleReviewChange = e => {
      validateReview(e);
      setNewReviewText(e.target.value);
   };
   // This function is used to handle changes to the author name field.
   const handleAuthorChange = e => {
      validateName(e);
      setNewAuthor(e.target.value);
   };
   // This function is used to handle changes to the star rating field.
   const handleRatingChange = rating => {
      // console.log(`rating: ${rating}`);
      setNewRating(rating);
   };
   // This function is used to validate the author name field.
   const validateName = e => {
      if (e.target.value.length == 0) {
         setValidName(false);
      } else {
         setValidName(true);
      }
   };
   // This function is used to validate the review text field.
   const validateReview = e => {
      if (e.target.value.length == 0) {
         setValidReview(false);
      } else {
         setValidReview(true);
      }
   };
   // This function is used to handle the save button click.
   const handleSave = e => {
      e.preventDefault();

      // This code is used to check if the author and review text are valid. If they are, then the code will make a new review.

      if (newAuthor.length === 0 || newReviewText.length === 0) {
         return;
      }

      // This code adds a new review to the list of reviews for a movie. It finds the maximum ID of any review in the list and adds 1 to that to get the ID for the new review. It then creates a new review object with the movieID, ID, author, stars, and review text. It then adds this new review object to the review list.

      const newID = Math.max(...reviewList.map(review => review.id)) + 1;
      const newReviewObj = {
         movieID: movieID,
         id: newID,
         author: newAuthor,
         stars: newRating,
         review: newReviewText,
      };
      addNewReview(newReviewObj);
      setNewAuthor('');
      setNewReviewText('');
      setValidName(false);
      setValidReview(false);
      // disable the form
      setisFormDisabled(true);
   };

   return (
      <>
         <Button className='mt-4 mb-3' variant='outline-warning' onClick={handleShow}>
            Reviews
         </Button>

         <Modal
            size='lg'
            show={show}
            onHide={handleClose}
            backdrop='static'
            keyboard={false}
            scrollable={true}
            data-bs-theme='dark'>
            <Modal.Header
               className='bg-dark border border-0 text-warning'
               closeVariant={'white'}
               closeButton>
               <Modal.Title>Leave a Review</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-dark text-warning'>
               {/* REVIEW-FORM */}
               <Form className='border-bottom'>
                  <label htmlFor='author-name'>
                     Your Name
                     {!validName ? (
                        <span className='fst-italic fw-light text-danger'>
                           {' '}
                           Please enter Name.
                        </span>
                     ) : (
                        <span></span>
                     )}
                  </label>
                  <input
                     disabled={isFormDisabled}
                     id='author-name'
                     type='text'
                     placeholder='John Doe'
                     autoFocus
                     className='bg-dark text-warning form-control'
                     value={newAuthor}
                     onChange={handleAuthorChange}
                     required
                  />
                  <label htmlFor='new-review'>
                     Your Review
                     {!validReview ? (
                        <span className='fst-italic fw-light text-danger'>
                           {' '}
                           Please enter Review.
                        </span>
                     ) : (
                        <span></span>
                     )}
                  </label>

                  <textarea
                     disabled={isFormDisabled}
                     id='new-review'
                     placeholder='Your Review Here'
                     rows='3'
                     className='bg-dark text-warning form-control'
                     value={newReviewText}
                     onChange={handleReviewChange}
                     required
                  />
                  <Form.Group className='mb-3' controlId='starRating'>
                     <Form.Label>Your Rating</Form.Label>
                     <StarRating changeRating={handleRatingChange} />
                  </Form.Group>
                  <div className='d-flex justify-content-end mb-3'>
                     <Button
                        className='ms-3 btn'
                        variant='outline-warning'
                        onClick={handleClose}>
                        Close
                     </Button>
                     <button
                        disabled={isFormDisabled}
                        id='save-review'
                        className='ms-3 btn btn-outline-warning'
                        type='submit'
                        onClick={handleSave}>
                        Save Review
                     </button>
                  </div>
               </Form>
               {/* REVIEW-LIST */}
               <ReviewList reviewList={reviewList} movieID={movieID} />
               <div className='d-flex justify-content-end'>
                  <Button
                     className='ms-3 btn'
                     variant='outline-warning'
                     onClick={handleClose}>
                     Close
                  </Button>
               </div>
            </Modal.Body>
         </Modal>
      </>
   );
}

export default ReviewForm;
