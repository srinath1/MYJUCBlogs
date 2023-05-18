import {axiosInstance} from '.'
export const addNewBlog=async(payload)=>{

    try{
        const response=await axiosInstance.post('/api/blogs/add-blog',payload)
        return response.data

    }catch(error){
        throw error || error.response.data

    }
}
export const GetAllBlogs = async () => {
    try {
      const response = await axiosInstance.get("/api/blogs/get-all-blogs");
      return response.data;
    } catch (error) {
      throw error || error.response.data;
    }
  };
export const getBlogById=async(id)=>{

    try{
        const response=await axiosInstance.get(`/api/blogs/get-blog-by-id/${id}`)
        return response.data

    }catch(error){
        throw error || error.response.data

    }
}
export const UpdateBlog = async (payload) => {
    try {
      const response = await axiosInstance.put(
        `/api/blogs/update-blog/${payload._id}`,
        payload
      );
      return response.data;
    } catch (error) {
      throw error || error.response.data;
    }
  };
  
  // delete blog
  export const DeleteBlog = async (id) => {
    try {
      const response = await axiosInstance.delete(`/api/blogs/delete-blog/${id}`);
      return response.data;
    } catch (error) {
      throw error || error.response.data;
    }
  };
  export const GetAllCommentsOfBlog = async (id) => {
    try {
      const response = await axiosInstance.get(
        `/api/blog-actions/get-all-comments-of-blog/${id}`
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };
  export const GetAllBlogsByUser=async()=>{
    try{
      const response=await axiosInstance.get('/api/blogs/get-all-blogs-by-user')
      return response.data

    }catch(error){
      throw error || error.response.data

    }
  }

  export const GetAllBlogsLikedByUser=async()=>{
    try{
      const response=await axiosInstance.get(`/api/blogs/get-all-blogs-liked-by-user`)
      return response.data
    }catch(err){
      throw err || err.response.data
    }
  }
  export const GetAllBlogsByCommentedByUser = async () => {
    try {
      const response = await axiosInstance.get(
        "/api/blogs/get-all-blogs-by-commented-by-user"
      );
      return response.data;
    } catch (error) {
      throw error || error.response.data;
    }
  }
  export const GetAllBlogsBySharedByUser = async () => {
    try {
      const response = await axiosInstance.get(
        "/api/blogs/get-all-blogs-by-shared-by-user"
      );
      return response.data;
    } catch (error) {
      throw error || error.response.data;
    }
  }
  export const GetAllBlogsBySharedToUser = async () => {
    try {
      const response = await axiosInstance.get(
        "/api/blogs/get-all-blogs-shared-to-user"
      );
      return response.data;
    } catch (error) {
      throw error || error.response.data;
    }
  }