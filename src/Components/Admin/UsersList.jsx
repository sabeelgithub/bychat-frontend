import React from 'react'
import { BlockUnblockUsers } from '../../Axios/Services/AdminServices'
import { toast } from 'react-toastify';

function UsersList({users,refresh,SetRefresh}) {


    const fetchItem = async(id,status)=>{
        const data = {
            id:id,
            status:status
        }
        const response = await BlockUnblockUsers(data)
        if (response){
            if(response?.status===200){
                toast.success(response?.message)
                SetRefresh(!refresh)
                
            } else if(response?.status===208){
              toast.error(response.error)

            } else  {
                toast.error('something went wrong')
            }
        }
    }

  return (
    <>
     
   <section className="antialiased bg-white text-gray-600 h-full mt-20 ">
  <div className="flex flex-col justify-center h-full">
    {/* Table */}
    {users?.length === 0 ? <div className='text-center font-extrabold text-lg'>No users</div>: 
    <div className="w-full max-w-2xl mx-auto bg-gray-100 shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Users</h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">S.no</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Username</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Mobile</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Specification</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
            {users?.length !==0 && users?.map((item,index)=>{
                return (
                    <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
            
                    <div className="font-medium text-gray-800">{index+1}</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
            
                    <div className="font-medium text-gray-800">{item?.username}</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">{item?.email}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-green-500">{item?.mobile}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">{item?.specification}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
               {item.is_block === false ?  <div className="text-lg text-center"><button onClick={()=>{
                fetchItem(item?.id,item.is_block)
               }} className='bg-red-500 rounded-xl text-white w-14 h-8 text-sm'>Block</button></div> :  <div className="text-lg text-center"><button onClick={()=>{
                fetchItem(item?.id,item.is_block)
               }}  className='bg-yellow-500 rounded-xl w-14 h-8 text-white text-sm'>Unblock</button></div>}    
                </td>
              </tr>)
            }) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    }
    
  </div>
</section>


    </>
  )
}

export default UsersList