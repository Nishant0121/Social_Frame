export const useGetUserInfo=()=>{
    const {username ,profile ,userid,isauth}=
        JSON.parse(localStorage.getItem("user"))|| {};

        return{username,profile,userid,isauth}
}