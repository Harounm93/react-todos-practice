import React from 'react';

import './index.css';

function Post({ post }) {
  const { title, author, text, postId } = post;
  
  return <article id={postId} >
      <h1>{title}</h1>
      <h3>{author}</h3>
      <p>{text}</p>

  </article>;
}

export default Post;

/*
{
  postId: 1,
  title: 'One Of My Favourites',
  date: '12/10/20',
  author: 'Ben Lee',
  text: lorem.generateParagraphs(7),
  highlights: [
    lorem.generateWords(3),
    lorem.generateWords(3),
    lorem.generateWords(3),
  ],
  image: {
    link:
      'https://i.pinimg.com/originals/71/a0/5f/71a05f47b8f449fc231881416bf4bc66.jpg',
    alt: 'A blue-grey pigeon turns to face the camera.',
  },
}


*/
