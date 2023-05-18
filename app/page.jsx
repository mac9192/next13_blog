 
import FeaturedPosts  from '@sections/FeaturedPosts';

import { getPosts } from '@services/index';
import PostCard from '@components/PostCard'
import Categories from '@components/Categories'
import PostWidget from '@components/PostWidget'
import Header from '@components/Header'
import { use } from "react"



const postsPromise = getPosts()

export default async function Home() {
 
  const posts = await(postsPromise)
 const value = false
  return (
    <>
  <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard  exact = {false} key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
    </>
  
  );
}

// Fetch data at build time

