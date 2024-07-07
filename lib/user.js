'server-only';

export function getUserDetails(id) {
  //throw new Error(`Error fetching user with id ${id}. Server error.`);

  return {
    "name": "Alexander",
    "email": "alex@emil.com",
  }
}

export function getEnrolledCourses(id) {
  //throw new Error(`Error fetching enrollment info for id ${id}. Server error.`);

  return [
    {id: "001", name: "JavaScript"}, 
    {id: "002", name: "Python"}, 
    {id: "003", name: "Artificial Intelligence"}
  ];
}