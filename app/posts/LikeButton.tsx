'use client';

import { useState } from 'react';

interface likeButtonProps {
  id: number;
}

const LikeButton = ({ id }: likeButtonProps) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className='btn'>
      <button onClick={() => setLiked(!liked)}>{liked ? '❤' : '♡'} </button>
    </div>
  );
};
export default LikeButton;
