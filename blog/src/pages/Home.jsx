import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
        <Container>
          <div className="flex flex-col items-center">
            <div className="p-4 w-full text-center bg-white shadow-lg rounded-lg">
              <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-500 transition duration-300">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 py-8">
      <Container>
        <div className="flex flex-wrap -m-4">
          {posts.map((post) => (
            <div key={post.$id} className="p-4 w-full md:w-1/2 lg:w-1/4">
              <PostCard {...post} className="hover:shadow-xl transition-shadow duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
