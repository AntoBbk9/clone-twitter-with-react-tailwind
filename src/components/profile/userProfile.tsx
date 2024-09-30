import { FaArrowLeft } from "react-icons/fa";
import Button from "../button/button";

function UserProfile() {
  const getUserData = (username) => {
    const users = [
      {
        username: "antobbk9",
        handle:"",
        avatar: "",
        bio:"",
        tweets:[
          {
            id:1, content: "",
          }]
      },
    ]
    return users.find(user => user.username === username);
  }
  return (
    <div className="w-full sm:w-[40rem]">
      <FaArrowLeft />
      <Button color="white" size="secondary">Follow</Button>
    </div>
  )
}

export default UserProfile