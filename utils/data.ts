export const userQuery = (userID: string) => {
  const query = `*[_type == "user" && _id == '${userID}']`;
  return query;
};
