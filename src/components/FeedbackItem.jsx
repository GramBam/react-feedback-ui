import { useState } from 'react';

function FeedbackItem() {

  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is a feedback item!');

  const handleClick = () => {
    setRating(rating + 110);
    setText('Rating is: ' + rating.toString());
  }

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem
