import React, { useEffect, useState } from 'react';
import { getPost } from "../../lib";
import { Card } from '../card/Card';
import { Filter } from '../filter/Filter';

export const Myblog = () => {
  const [postData, setPostData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filterCategories = (categories) => {
    setSelectedCategories(categories);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPost();
        setPostData(data);
      } catch (error) {
        console.error('Error al obtener datos:', error.message);
      }
    };

    fetchData();
  }, []);

  const filteredPosts = postData.filter(post => {
    if (selectedCategories.length === 0) {
      return true; 
    }
    
    return post.tags.some(tag => selectedCategories.includes(tag));
  });

  return (
    <div>
      <h1 className='text-8xl mt-14 mb-8'>Blog Infobae</h1>
      <Filter filterCategories={filterCategories} selectedCategories={selectedCategories} />
      <div className='flex flex-wrap justify-center items-center'>
        {filteredPosts.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            user={post.user}
            image={post.image}
            tags={post.tags.map((tag, index) => (
              <p key={index} className=' m-1 p-1'>
                {tag}
              </p>
            ))}
          />
        ))}
      </div>
    </div>
  );
}