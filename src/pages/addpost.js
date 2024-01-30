import {useAddPost} from '../Hooks/useAddpost';
import {useAddStory} from '../Hooks/useAddStory';
import {useGetUserInfo} from '../Hooks/useGetuserinfo';
import { useState } from 'react';



export const AddPost =()=>{


    const {addPost} = useAddPost();
    const {addStory} = useAddStory();
    const {username} = useGetUserInfo();

    const [title,setTitle]=useState('');
    const [hashtag,setHashtag]=useState('');
    const [image,setImage]=useState('');

    const onSumitPost =(e)=>{
        e.preventDefault();
        addPost({title,hashtag,image});

        setTitle('');
        setHashtag('');
    }
    const onSumitStory =(e)=>{
        e.preventDefault();
        addStory({title,hashtag,image});

        setTitle('');
        setHashtag('');
    }

    return(
        <div className="Addpost">
            AddPost
            <form action="" onSubmit={onSumitPost}>
                <h1>${username}</h1>
            <label class="form-label" htmlFor="discription">Discription</label>
              <input class="form-control"  type="text" id="discription" placeholder="Enter Description" value={title} onChange={(e)=>setTitle(e.target.value)} required/>

              <label class="form-label" htmlFor="discription">Discription</label>
              <input class="form-control"  type="text" id="discription" placeholder="Enter Description" value={hashtag} onChange={(e)=>setHashtag(e.target.value)} required/>

              <label class="form-label" htmlFor="discription">Discription</label>
              <input class="form-control"  type="text" id="discription" placeholder="Enter Description" value={image} onChange={(e)=>setImage(e.target.value)} required/>
            
            <button type="submit">submit</button>
            
            </form>
            <form action="" onSubmit={onSumitStory}>
            <label class="form-label" htmlFor="discription">Discription</label>
              <input class="form-control"  type="text" id="discription" placeholder="Enter Description" value={title} onChange={(e)=>setTitle(e.target.value)} required/>

              <label class="form-label" htmlFor="discription">Discription</label>
              <input class="form-control"  type="text" id="discription" placeholder="Enter Description" value={hashtag} onChange={(e)=>setHashtag(e.target.value)} required/>

              <label class="form-label" htmlFor="discription">Discription</label>
              <input class="form-control"  type="text" id="discription" placeholder="Enter Description" value={image} onChange={(e)=>setImage(e.target.value)} required/>
            
            <button type="submit">submit</button>

            </form>
        </div>
    )
}