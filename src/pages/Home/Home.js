import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Post from '../../components/Post'
import UsePost from '../../hooks/UsePost'
import UseUser from '../../hooks/UseUser';
import ServerInfo from '../../utils/ServerInfo';

export default function Home() {
  const { posts, setPosts } = UsePost();


  // useEffect(() => {

  // }, [])

  return (
    <main>
      {


        posts.map((post, index) => (
          <Post key={index} post={post} />
        ))


      }


    </main>
  )
}
