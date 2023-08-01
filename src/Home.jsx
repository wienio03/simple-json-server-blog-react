import useFetch from './useFetch';
import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
    
   const { data, isPending, error } = useFetch('http://localhost:8000/blogs');  
    //use of dependency array as second argument in useEffect
    //dont hard code each div!
    //instead figure out a way to cycle through array and output them
    //then it doesnt matter how many array elements there are (if for example u add elements)
    return(
        <div className="home">
        {error && <p>{error}</p>}
        {data && <BlogList blogs={data} title="All Blogs" ></BlogList>}
        {isPending && <h1>Loading...</h1>}
        </div>          
    );


}
export default Home;
