import { Switch } from "@/components/ui/switch"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useContext } from "react"
import { UserContext } from "@/context/UserContextProvider"
import { Link, useNavigate } from "react-router"


export default function UserAccount() {

  const {deleteAccount}=useContext(UserContext)

  const navigate=useNavigate()

  async function deleteUserAccount() {
     let response= await deleteAccount()   
     if(response?.data.status){
         navigate("/")
     }
  }

  return (
  <AlertDialog>
     <div className="container mx-auto px-3 lg:px-20">
      <Link to='/profile'>
        <div className="w-14 h-14 bg-gray-100 rounded-full my-10 flex justify-center items-center"><ChevronLeft/></div>
      </Link>
        <div className='border-gradient p-[1px] rounded-md'>
            <div className="bg-white p-5 rounded-md">
                <h2 className='font-medium text-xl text-center pb-12'>Account & Security</h2>
                <div className="grid gap-2">
                  <div className="flex justify-between pb-2">
                    <p className='text-xl font-medium text-gray-900'>Biometric ID</p>
                    <Switch className="cursor-pointer"/>
                  </div>
                  <div className="flex justify-between ">
                    <p className='text-xl font-medium text-gray-900'>Face ID</p>
                    <Switch className="cursor-pointer"/>
                  </div>
                </div>
                <div className="grid gap-4 pt-6">
                  <div className="cursor-pointer flex w-full justify-between items-center rounded-md p-6 shadow-custom">
                    <div className="">
                      <p className="font-medium text-gray-900 text-xl">Device Management</p>
                      <span className='text-gray-600'>Manage your account on the various devices you own.</span>
                   </div>
                   <ChevronRight className="text-gray-700"/>
                  </div>
                  <div className="cursor-pointer flex w-full justify-between items-center rounded-md p-6 shadow-custom">
                    <div className="">
                      <p className="font-medium text-gray-900 text-xl">Deactivate Account</p>
                      <span className='text-gray-600'>Temporarily deactivate your account. Easily reactivate when you're ready.</span>
                   </div>
                   <ChevronRight className="text-gray-700"/>
                  </div>
                  
                   <AlertDialogTrigger asChild>
                    <div className="flex w-full justify-between items-center rounded-md p-6 shadow-custom cursor-pointer">
                      <div className="">
                        <p className="font-medium text-[#F75E64] text-xl">Delete Account</p>
                        <span className='text-gray-600'>Permanently remove your account and data from Tripmate. Proceed with caution.</span>
                     </div>
                     <ChevronRight className="text-gray-700"/>
                    </div>
                   </AlertDialogTrigger>
                </div>
            </div>
        </div>
      </div>
  <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete your account ?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500 hover:bg-red-700" onClick={()=>deleteUserAccount()}>Delete Account</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

