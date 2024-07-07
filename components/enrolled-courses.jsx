
import { getEnrolledCourses } from "@/lib/user"

export const EnrolledCourses = async ({id}) => {
  const entolledCourses = await getEnrolledCourses(id);

  console.log(entolledCourses);

  return (
    <ul className="m-2 border border-red-400 p-2">
      Enrolled Courses
      {entolledCourses.map(entolledCourse => (
        <li key={entolledCourse.id}>{entolledCourse?.name}</li>
      ))}
      
    </ul>
  )
}