import { getUserDetails } from "@/lib/user";

import { EnrolledCourses } from "@/components/enrolled-courses";

const UserDetailsPage = async ({params: {id}}) => {
  const userDetails = await getUserDetails(id);
  console.log(userDetails);
  return (
    <div className="p-2">
      <h1 class="text-3xl my-2">User Details Page</h1>
      <p>{userDetails?.name}</p>
      <p>{userDetails?.email}</p>

      <EnrolledCourses id={id}/>
    </div>
  )
}

export default UserDetailsPage