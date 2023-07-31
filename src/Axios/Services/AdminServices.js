import { axiosAdminInstance } from "../Instances/Instance";

// get users list
export const getUsers = async() =>{
    try {
        const config = {
            headers:{
                "Content-type":"application/json",
            }
        }
        const response = await axiosAdminInstance.get('users/',config)
        return response.data
    }catch (error){
        console.log(error)
    }
}

// block/unblock users
export const BlockUnblockUsers = async(data) =>{
    try {
        const config = {
            headers:{
                "Content-type":"application/json",
            }
        }
        const response = await axiosAdminInstance.patch('users/',data,config)
        return response.data
    }catch (error){
        console.log(error)
    }
}