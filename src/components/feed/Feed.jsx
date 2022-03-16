import Share from '../share/share'
import Post from '../post/Post'
import { useEffect, useState } from "react";
import axios from "axios";
import './feed.css'

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = username
      ? await axios.get("posts/profile/"+username)
      : await axios.get("posts/timeline/621c04de5e871c3f811821cb");
                                              
    setPosts(res.data)};
    fetchPosts();
  },[username]);

  return (
    <div className="feed">
    <div className="feedWrapper">
    <Share />
     {posts.map((p) => (
      <Post key={p._id} post={p}/>
    ))} 
  </div>
  </div>
  );
}