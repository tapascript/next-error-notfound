import { getSession } from "@/lib/auth"

const UserListPage = async () => {
  const session = await getSession();
  console.log(session);
  if (!session) {
    throw new Error("No Session info available");
  }
  return (
    <div>User List Page</div>
  )
}

export default UserListPage