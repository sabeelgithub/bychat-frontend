import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import banner from '../Assets/register.avif'
import { useFormik } from 'formik'
import { registrationSchema } from '../Validation/registrationValidation'
import { toast } from 'react-toastify';
import { Register } from '../Axios/Services/CommenServices'



function RegisterForm() {

    const navigate = useNavigate()

    const onSubmit = async()=>{
        try{
            const response = await Register(values)
            if (response){
                if (response.status === 201){
                    toast.success(response?.message)
                    navigate('/login')
                }
                else if(response.status === 500){
                    if (response.error?.email && response.error.email[0] === "user with this email address already exists."){
                        toast.error('This Email is Already Registered')
                    }
                    else if (response.error?.mobile && response.error.mobile[0] === "user with this mobile already exists."){
                        toast.error('This Mobile  number is Already Registered')
                    }
                } else {
                    toast.error('something went wrong')
                }
            }
        }
        catch (error){
            console.log(error.message)
        }
    }

    // formik 
    const { values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
        initialValues: {
        username: "",
        specification:"",
        mobile: "",
        email: "",
        password: "",
        confirm_password: "",
        },
        validationSchema: registrationSchema,
        onSubmit,
    })


    return (
        <div className=' md:flex w-full h-full'>
        <div className=' md:w-1/2 mt-7 mb-7 sm:w-full h-[30rem] p-2 flex justify-center '>

        <img src={banner} alt="" className='h-full '/>
        </div>
       
        <div className="md:h-[30rem] flex justify-center md:px-5 mt-7 mb-7  md:w-1/2  bg-white">
        <div className="
flex flex-col
bg-orange-300
shadow-md
px-4

sm:px-6
md:px-0
lg:px-10
md:my-1
py-6
rounded-3xl
w-96
md:w-[35rem]
md:h-[31rem]
">

            <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                Join us Now
            </div>
           
            <div className="mt-10 ">
                <form action="#" className='w-full' onSubmit={handleSubmit} encType="multipart/form-data">
                <div className='md:flex justify-center gap-5'>
                        <div className="flex flex-col mb-5">
                        <label htmlFor="username" className="mb-1 text-xs tracking-wide text-gray-600">Username:</label>
                        <div className="relative">
                            <div className="
        inline-flex
        items-center
        justify-center
        absolute
        left-0
        top-0
        h-full
        w-10
        text-gray-400
        ">
                                <i className="fas fa-user text-blue-500" />
                            </div>
                            <input id="username" type="username" name="username" 
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                             className="
        text-sm
        placeholder-gray-500
        pl-10
        pr-4
        rounded-2xl
        border border-gray-400
        w-full
        py-2
        focus:outline-none focus:border-blue-400
        " placeholder="Enter your name" />
        {errors.username && touched.username && (
            <p className="text-red-600">{errors.username}</p>
          )}
                        </div>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="specification" className="mb-1 text-xs tracking-wide text-gray-600">Specification:</label>
                        <div className="relative">
                            <div className="
        inline-flex
        items-center
        justify-center
        absolute
        left-0
        top-0
        h-full
        w-10
        text-gray-400
        ">
                                <i className="fas fa-user text-blue-500" />
                            </div>
                            <input id="specification" type="specification" name="specification"
                            value={values.specification}
                            onChange={handleChange}
                            onBlur={handleBlur}
                             className="
        text-sm
        placeholder-gray-500
        pl-10
        pr-4
        rounded-2xl
        border border-gray-400
        w-full
        py-2
        focus:outline-none focus:border-blue-400
        " placeholder="Enter your Profession" />
        {errors.specification && touched.specification && (
            <p className="text-red-600">{errors.specification}</p>
          )}
                        </div>
                    </div>
                </div>
                   
                <div className='md:flex justify-center gap-5'>
                
                   <div className="flex flex-col mb-5">
                        <label htmlFor="mobile" className="mb-1 text-xs tracking-wide text-gray-600">Mobile :</label>
                        <div className="relative">
                            <div className="
        inline-flex
        items-center
        justify-center
        absolute
        left-0
        top-0
        h-full
        w-10
        text-gray-400
        ">
                                <i className="fas fa-user text-blue-500" />
                            </div>
                            <input id="mobile" type="mobile" name="mobile"
                            value={values.mobile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                             className="
                            
        text-sm
        placeholder-gray-500
        pl-10
        pr-4
        rounded-2xl
        border border-gray-400
        w-full
        py-2
        focus:outline-none focus:border-blue-400
        " placeholder="Enter your mobile" />
        {errors.mobile && touched.mobile && (
            <p className="text-red-600">{errors.mobile}</p>
          )}
                        </div>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">E-Mail Address:</label>
                        <div className="relative">
                            <div className="
        inline-flex
        items-center
        justify-center
        absolute
        left-0
        top-0
        h-full
        w-10
        text-gray-400
        ">
                                <i className="fas fa-at text-blue-500" />
                            </div>
                            <input id="email" type="email" name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                             className="
        text-sm
        placeholder-gray-500
        pl-10
        pr-4
        rounded-2xl
        border border-gray-400
        w-full
        py-2
        focus:outline-none focus:border-blue-400
        " placeholder="Enter your email" />
        {errors.email && touched.email && (
            <p className="text-red-600">{errors.email}</p>
          )}
                        </div>
                    </div>
                </div>
                    
            <div className='md:flex justify-center gap-5'>
            <div className="flex flex-col mb-6">
                        <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                        <div className="relative">
                            <div className="
        inline-flex
        items-center
        justify-center
        absolute
        left-0
        top-0
        h-full
        w-10
        text-gray-400
        ">
                                <span>
                                    <i className="fas fa-lock text-blue-500" />
                                </span>
                            </div>
                            <input id="password" type="password" name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                             className="
        text-sm
        placeholder-gray-500
        pl-10
        pr-4
        rounded-2xl
        border border-gray-400
        w-full
        py-2
        focus:outline-none focus:border-blue-400
        " placeholder="Enter your password" />
        {errors.password && touched.password && (
            <p className="text-red-600">{errors.password}</p>
          )}
                        </div>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label htmlFor="confirm_password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Confirm Password:</label>
                        <div className="relative">
                            <div className="
        inline-flex
        items-center
        justify-center
        absolute
        left-0
        top-0
        h-full
        w-10
        text-gray-400
        ">
                                <span>
                                    <i className="fas fa-lock text-blue-500" />
                                </span>
                            </div>
                            <input id="confirm_password" type="confirm_password" name="confirm_password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                             className="
        text-sm
        placeholder-gray-500
        pl-10
        pr-4
        rounded-2xl
        border border-gray-400
        w-full
        py-2
        focus:outline-none focus:border-blue-400
        " placeholder="Confirm your password" />
        {errors.confirm_password && touched.confirm_password && (
            <p className="text-red-600">{errors.confirm_password}</p>
          )}
                        </div>
                    </div>
            </div>
                    
                    <div className="flex w-full justify-center">
                        <button type="submit" className="
                                flex
                                mt-2
                                items-center
                                justify-center
                                focus:outline-none
                                text-white text-sm
                                sm:text-base
                                bg-blue-500
                                hover:bg-blue-600
                                rounded-2xl
                                py-2
                                w-full
                                md:w-1/2

                                transition
                                duration-150
                                ease-in
                            ">
                            <span className="mr-2 uppercase">Sign Up</span>
                            <span>
                                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>
                <div className="flex justify-center items-center mt-6 md:mt-3">
                <a href="#" target="_blank" className="
                inline-flex
                items-center
                text-gray-700
                font-medium
                text-xs text-center
                ">
                    <p  className="ml-2">Already have an account?
                    </p></a><Link to="/login" className="text-xs ml-2 text-blue-500 font-semibold">Login here</Link>
            </div>
               
            </div>
       
        </div>
       
    </div>
   
        
           

        </div>
    )
}

export default RegisterForm