import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post/index';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return <main id="main">
{posts.map((post)=>
     <Post key ={post.postId} post={post} />
)}

  </main>;
}

export default Main;
