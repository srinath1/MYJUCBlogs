import { axiosInstance } from ".";
export const RegisterUser=async(payload)=>{
    try{
        const response=await axiosInstance.post('/api/users/register',payload)
        return response.data
    }catch(error){
        throw error || error.response.data
    }

}
export const LoginUser=async(payload)=>{
    try{
        const response=await axiosInstance.post('/api/users/login',payload)
        return response.data
    }catch(error){
        throw error || error.response.data
    }

}

export const GetUser=async()=>{
    try{
        const response=await axiosInstance.get('/api/users/getUser')
        return response.data

    }catch(error){
        throw error || error.response.data


    }

}

export const SearchUsers=async(searchText)=>{
    try{
        const response=await axiosInstance.post(`/api/users/search-users/`,{searchText})
return response.data
    }catch(error){
        throw error || error.response.data


    }
}