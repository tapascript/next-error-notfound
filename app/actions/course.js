"use server"

export async function downloadCourse(courseId) {
  console.log("downloading course");
  //const courseId = formData.get('courseId');
  try {
   if (!courseId) throw new Error("Please enter a course id");

   // ... rest of the code to download the course

   return "success";

  } catch(err) {
    throw new Error(err.message);
  }
}