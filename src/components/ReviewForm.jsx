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
   const handleClose = () => {
      setNewAuthor('');
      setNewReviewText('');
      setShow(false);
   };
   const handleShow = () => setShow(true);
   const [newRating, setNewRating] = useState(1);

   const handleReviewChange = e => {
      setNewReviewText(e.target.value);
   };
   const handleAuthorChange = e => {
      setNewAuthor(e.target.value);
   };
   const handleRatingChange = rating => {
      console.log(`rating: ${rating}`);
      setNewRating(rating);
   };

   const handleSave = e => {
      e.preventDefault();
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
                  <label htmlFor='author-name'>Your Name</label>
                  <input
                     id='author-name'
                     type='text'
                     placeholder='John Doe'
                     autoFocus
                     className='bg-dark text-warning form-control'
                     value={newAuthor}
                     onChange={handleAuthorChange}
                  />
                  <label htmlFor='new-review'>Your Review</label>
                  <textarea
                     id='new-review'
                     placeholder='Your Review Here'
                     rows='3'
                     className='bg-dark text-warning form-control'
                     value={newReviewText}
                     onChange={handleReviewChange}
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
