import { getUserDetails } from "@/lib/user";

const UserDetailsPage = async ({params: {id}}) => {
  const userDetails = await getUserDetails(id);
  console.log(userDetails);
  return (
    <div>User Details Page</div>
  )
}

export default UserDetailsPage