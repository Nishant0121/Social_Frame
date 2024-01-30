
import { useNavigate } from 'react-router-dom';
import "./home.css"
import { useState } from 'react';
import { useEffect } from 'react';
import {useGetUserPosts } from '../Hooks/useGetPost';


export const Home = () => {
    const { getUserPosts ,getAllPosts } = useGetUserPosts();
    const [userPosts, setUserPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const userposts = await getUserPosts();
        setUserPosts(userposts);
        };

        fetchData();
    }, [getUserPosts]);


    useEffect(() => {
        const fetchData = async () => {
        const allPosts = await getAllPosts();
        setAllPosts(allPosts);
        };

        fetchData();
    }, [getAllPosts]);
       
      
      

    
    const navigate = useNavigate();

    const GoMessage = async ()=>{
        navigate('/message');
    };
    const GoAddPost = async ()=>{
        navigate('/addpost');
    };


    return(
        <div className="container d-flex ">
            <div className="nav">
                <h3>home</h3>
                <h3>post</h3>
                <h3><button onClick={GoAddPost}>Add Post</button></h3>
                <h3><button onClick={GoMessage}>Message</button></h3>
                <ul>
                        {userPosts.map((post) => (
                        <li key={post.id}>
                            <strong>{post.title}</strong>
                            <p>{post.hashtag}</p>
                            {/* Add other post details as needed */}
                        </li>
                        ))}
                    </ul>
            </div>
            <div className="content">
                <div className="stories">
                    <h3>Stories</h3>
                </div>
                <div>
                    <h2>Your Posts</h2>
                    <ul>
                        {allPosts.map((post) => (
                        <li key={post.id}>
                            <strong>{post.title}</strong>
                            <p>{post.hashtag}</p>
                            {/* Add other post details as needed */}
                        </li>
                        ))}
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};