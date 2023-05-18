import { axiosInstance } from ".";
export const GetAllNotifications=async()=>{
    try{
        const response=await axiosInstance.get(`/api/users/get-all-notifications`)
        return response.data

    }catch(error){
        return error.response.data
    }
}
export const MarkAllNotificationsAsRead = async () => {
    console.log(' I am called')
    try {
      const response = await axiosInstance.post(
        `/api/users/mark-all-notifications-as-read`
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };