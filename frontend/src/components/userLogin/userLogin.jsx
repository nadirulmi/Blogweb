import { useEffect, useState } from "react";
import { getUsers } from "../../lib";

export const UserLogin = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsersData(data);
      } catch (error) {
        console.error("Error al obtener datos:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>Users</h3>
      <div className="">
        {usersData.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between m-20 bg-blue-900 p-5 rounded-lg"
          >
            <div>
              <p className="text-white font-bold">{user.name}</p>
              <button className="bg-blue-100/50 rounded-md px-2 m-2">View profile</button>
            </div>
            <img className="w-28 rounded-full" src={user.image} />
          </div>
        ))}
      </div>
    </div>
  );
};
