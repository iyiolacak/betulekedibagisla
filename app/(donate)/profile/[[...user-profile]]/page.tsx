import { UserProfile } from "@clerk/nextjs";
 
const UserProfilePage = () => (
    <>
    <div className="w-full h-full flex justify-center items-center p-4">
  <UserProfile path="/profile" routing="path" />
    </div>
  </>
  )
 
export default UserProfilePage;