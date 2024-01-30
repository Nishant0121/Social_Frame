import{addDoc,collection,serverTimestamp}from "firebase/firestore";
import {db} from "../config/fireconfig"
import {useGetUserInfo} from "./useGetuserinfo"

export const useAddPost=()=>{
    const { userid } = useGetUserInfo();
    const Postref = collection(db, `Post`);

    const addPost=async({title,hashtag,image})=>{
        await addDoc(Postref,{
            userid,
            title,
            hashtag,
            image,
            createAt:serverTimestamp(),
        });
    };
    return {addPost};
}