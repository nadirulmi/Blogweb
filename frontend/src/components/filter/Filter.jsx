import { getTags } from "../../lib"
import React, { useEffect, useState } from 'react';


export const Filter = ({ filterCategories, selectedCategories }) => {
    const [tags, setTags] = useState([]);
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getTags(); 
          setTags(data);
        } catch (error) {
          console.error('Error al obtener datos:', error.message);
        }
      };
  
      fetchData();
    }, []); 

    const handleTagClick = (tag) => {
        const updatedCategories = selectedCategories.includes(tag)
            ? selectedCategories.filter((category) => category !== tag)
            : tag;

       
        filterCategories(updatedCategories);
    };

    return (
        <div className="flex flex-wrap justify-center items-center">
            {tags?.map((tag, index) => (
                <span
                    key={index}
                    onClick={() => handleTagClick(tag)}
                    className="m-1 p-1 cursor-pointer rounded-md text-white"
                    style={{backgroundColor: "#F68E1E"}}
                >
                    {tag}
                </span>
            ))}
        </div>
    );

}
