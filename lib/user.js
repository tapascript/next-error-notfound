'server-only';

export function getUserDetails(id) {
  throw new Error(`Error fetching user with id ${id}. Server error.`);
}