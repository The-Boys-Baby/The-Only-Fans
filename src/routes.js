export default {
  devHost: "http://localhost:1337/api/", //jeremy: when render is deployed, change this to render link
  users: "admin/getUsers",
  profile: `users/me`,
  cart: "users/:userId/cart", // jeremy: needs to be a function
  checkout: (userId) => `users/${userId}/checkout`, //${checkout(id)} // jeremy: invoke the function with param to get the value
  register: "users/register",
  login: "users/login",
  marketplace: "products",
  fanDetails: "products/:productId", // jeremy: needs to be a function
  editFan: "products/:productId", // jeremy: needs to be a function
};
