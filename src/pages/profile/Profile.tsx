import { Link, useNavigate } from "react-router"; 
import userVector from "../../assets/images/user-vector.avif";
import camera from "../../assets/images/Camera.png";
import { UserRound, ChevronRight, Globe, AppWindow, Lock, LogOut } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { UserContext } from "@/context/UserContextProvider";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";



export default function Profile() {


  const {userInfo ,UpdateUserInfo} = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(userInfo?.user.image);
  const [open, setOpen] = useState(false);
  const navigate=useNavigate()

  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Temporary preview
    }
  };

  const handleSaveImage = async () => {
    const input = document.querySelector('input[type="file"]');
    const file = input?.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
        UpdateUserInfo(formData)
    } 
     setOpen(false); // Close the drawer
  }

  function logout(){
   navigate("/")
  }
  
  return (
    <div className="w-[70%] mx-auto">
      <div className="border-gradient p-[1px] rounded-[12px] mb-8">
        <div className="bg-white p-3 rounded-[12px] flex gap-8 items-center">
          <div>
            <div className="relative border-gradient rounded-full p-[2px] w-30 h-30">
              <img
                src={userInfo?.user.image || userVector}
                alt="user image"
                className="w-full h-full rounded-full"
              />
              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <div className="bg-white w-10 h-10 rounded-full absolute bottom-0 right-0 p-2 cursor-pointer z-10">
                    <img src={camera} alt="add profile image" />
                  </div>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerTitle>Edit Profile</DrawerTitle>
                  <div className="my-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="Preview"
                        className="mt-4 w-32 h-32 rounded-full mx-auto"
                      />
                    )}
                  </div>
                  <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                      <div className="flex gap-4">
                        <Button variant="outline" onClick={() => setOpen(false)}>
                          Cancel
                        </Button>
                        <Button variant="default" onClick={handleSaveImage}>
                          Upload
                        </Button>
                      </div>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-gray-600 text-2xl font-inter capitalize">
              {userInfo?.user.name || "User Name"}
            </p>
            <p className="font-medium text-xl text-[#6B6E80]">
              {userInfo?.user.email || "user@example.com"}
            </p>
          </div>
        </div>
      </div>

      <div className="border-gradient p-[1px] rounded-[12px]">
        <div className="bg-white p-5 rounded-[12px] flex flex-col gap-6">
          <Link to="/userInfo" className="flex w-full justify-between rounded-md p-5 shadow-custom">
            <div className="flex gap-4">
              <UserRound className="w-8 text-gray-700" />
              <div className="font-medium text-gray-900 text-xl">Personal Info</div>
            </div>
            <ChevronRight className="text-gray-700" />
          </Link>
          <Link to="/userBooking" className="flex w-full justify-between rounded-md p-5 shadow-custom">
            <div className="flex gap-4">
              <AppWindow className="w-8 text-gray-700" />
              <div className="font-medium text-gray-900 text-xl">My Booking</div>
            </div>
            <ChevronRight className="text-gray-700" />
          </Link>
          <div className="flex w-full justify-between rounded-md p-6 shadow-custom">
            <div className="flex gap-4">
              <Globe className="w-8 text-gray-700" />
              <div className="font-medium text-gray-900 text-xl">App Language</div>
            </div>
            <ChevronRight className="text-gray-700" />
          </div>
          <Link to="/userAccount" className="flex w-full justify-between rounded-md p-5 shadow-custom">
            <div className="flex gap-4">
              <Lock className="w-8 text-gray-700" />
              <div className="font-medium text-gray-900 text-xl">Account & Security</div>
            </div>
            <ChevronRight className="text-gray-700" />
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="flex w-full justify-between rounded-md p-5 shadow-custom text-[#F52930] cursor-pointer">
                <div className="flex gap-4">
                  <LogOut className="w-8" />
                  <p className="font-medium text-xl">Logout</p>
                </div>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Do You Want to Log Out?</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction
                  className="bg-blue-700 hover:bg-blue-800 w-1/2"
                  onClick={() => logout()}
                >
                  Yes, Log Me Out
                </AlertDialogAction>
                <AlertDialogCancel className="w-1/2">No</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}