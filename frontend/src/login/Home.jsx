
export const Home = (props) => {
  
    console.log(props.login.displayName)
    const logout = () =>{
        localStorage.clear()
        window.location.pathname = "/";
    }
  return (
    <div className="flex items-center">
        
        <img className='rounded-full w-9 m-1' src={props.login.photoURL}/>
        <div className='gap-8 flex items-center'>
        <h1 className='text-white'>{props.login.displayName}</h1>
        
        <button onClick={logout} className='bg-gray-600 px-2 py-1 rounded text-white'>Logout</button>
        </div>
    </div>
  )
}
