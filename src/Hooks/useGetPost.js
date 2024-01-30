import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../config/fireconfig';
import { useGetUserInfo } from './useGetuserinfo';

export const useGetUserPosts = () => {
  const { userid } = useGetUserInfo();

    const getUserPosts = async () => {
        const userPostsRef = collection(db, 'Post');
        const userPostsQuery = query(userPostsRef, where('userid', '==', userid));
        const userPostsSnapshot = await getDocs(userPostsQuery);

        const userPostsData = [];
        userPostsSnapshot.forEach((doc) => {
        const post = { id: doc.id, ...doc.data() };
        userPostsData.push(post);
        });

        return userPostsData;
    };

    const getAllPosts = async () => {
        const allPostsRef = collection(db, 'Post');
        const allPostsSnapshot = await getDocs(allPostsRef);
    
        const allPostsData = [];
        allPostsSnapshot.forEach((doc) => {
          const post = { id: doc.id, ...doc.data() };
          allPostsData.push(post);
        });
    
        return allPostsData;
      };
    
      return { getAllPosts ,getUserPosts };
    



};
