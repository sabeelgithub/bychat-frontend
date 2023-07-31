import { axiosUserInstance } from "../Instances/Instance";

// Registration
export const Register = async(values) =>{
    try {
        const config = {
            headers:{
                "Content-type":"application/json",
            }
        }
        const response = await axiosUserInstance.post('accounts/register/',values,config)
        return response.data
    }catch (error){
        console.log(error)
    }
}