import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetail, getComments } from "../../lib";

export const Detail = () => {
  const [postData, setPostData] = useState([]);
  const [comments, setComments] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDetail(id);
        const datacomments = await getComments(id);
        setPostData(data);
        setComments(datacomments);
      } catch (error) {
        console.error("Error al obtener datos:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-14">
      <h1 className="text-4xl m-8">{postData.text}</h1>
      <div className="flex justify-center items-center m-4">
        <img className="w-2/4 rounded-md shadow-xl" src={postData.image} />
        <p className="p-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt
          quis beatae, velit quidem eveniet ipsa nulla aliquid cumque labore
          pariatur modi voluptatibus praesentium recusandae culpa error expedita
          sapiente eum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Soluta sunt quis beatae, velit quidem eveniet ipsa nulla aliquid
          cumque labore pariatur modi voluptatibus praesentium recusandae culpa
          error expedita sapiente eum.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Soluta sunt quis beatae, velit quidem eveniet ipsa
          nulla aliquid cumque labore pariatur modi voluptatibus praesentium
          recusandae culpa error expedita sapiente eum.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Soluta sunt quis beatae, velit
          quidem eveniet ipsa nulla aliquid cumque labore pariatur modi
          voluptatibus praesentium recusandae culpa error expedita sapiente eum.
        </p>
      </div>
      {comments.length === 0 ? (
        <span className="m-5 bg-gray-800/40 w-3/5 text-white  rounded-lg">
          No hay comentarios aún
        </span>
      ) : (
        <div className="m-4 flex flex-wrap justify-center items-center ">

          {comments.map((comment, index) => (
            <div className="flex flex-col w-60 h-40 items-center bg-white m-4 rounded-lg shadow-orange-800/20 shadow-lg">
              <p className="m-3 underline underline-offset-8 decoration-orange-700" key={index}>
                {comment.message}
              </p>
              <div className="flex items-center gap-6 m-2">
              <p>{comment.owner.firstName}</p>
              <img src={comment.owner.picture} className="rounded-lg" />
                </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/">
        <button className="m-6 border-2 border-gray-400/30 bg-gray-300 py-1 px-10 rounded-lg hover:bg-gray-600 hover:text-white">
          Volver
        </button>
      </Link>
    </div>
  );
};
