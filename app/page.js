import Link from "next/link";

export default function Home() {
  return (
   <div className="flex">
    <Link className="mx-2 underline" href="/courses">Courses</Link>
    <Link className="mx-2 underline" href="/users">Users</Link>
   </div>
  );
}
