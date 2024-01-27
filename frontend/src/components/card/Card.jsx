import { Link } from "react-router-dom";
export const Card = ({ id, user, image, tags }) => {

  return (
    <div key={id} className='flex flex-col justify-center items-center rounded-md m-4 p-4 bg-black shadow-md shadow-slate-800'>
      <h3 className="text-white mb-4">{user}</h3>
      <img className=' h-72' src={image} alt={`Post ${id}`} style={{width: 320}} />
      <p className='flex flex-wrap text-white'>{tags}</p>
      <Link to={`/detail/${id}`}>
        <button className='m-2 bg-blue-300 rounded-md px-2'>Ver detalles</button>
      </Link>
    </div>
  );
};
