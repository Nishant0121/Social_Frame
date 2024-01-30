import{addDoc,collection,serverTimestamp}from "firebase/firestore";
import {db} from "../config/fireconfig"
import {useGetUserInfo} from "./useGetuserinfo"

export const useAddStory=()=>{
    const { userid } = useGetUserInfo();
  const Storyref = collection(db, `Users/${userid}/Story`);

    const addStory=async({title,hashtag,image})=>{
        await addDoc(Storyref,{
            userid,
            title,
            hashtag,
            image,
            createAt:serverTimestamp(),
        });
    };
    return {addStory};
}