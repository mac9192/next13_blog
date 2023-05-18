import React from 'react';
 
import getCategories from '@services/index'
import {getCategoryPost} from '@services/index'
import PostCard from '@components/PostCard'
import Categories from '@components/Categories'
 




const CategoryPost = async ({ params }) => {

    const posts = await getCategoryPost(params.slug)
 
     
     

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;



// Fetch data at build time
//export async function getStaticProps({ params }) {
 // const posts = await getCategoryPost(params.slug);

  //return {
  //  props: { posts },
  //};
//}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
//export async function getStaticPaths() {
 // const categories = await getCategories();
 // return {
   // paths: categories.map(({ slug }) => ({ params: { slug } })),
   // fallback: true,
  //};
//}