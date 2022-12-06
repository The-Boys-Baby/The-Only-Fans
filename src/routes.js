export default {
  devHost: "http://localhost:1337/api/",
  users: "admin/getUsers",
  profile:`users/me`,
  cart: "users/:userId/cart",
  checkout: (userId) => `users/${userId}/checkout`, //${checkout(id)}
  register: "users/register",
  login: "users/login",
  marketplace: "products",
  fanDetails: "products/:productId",
  editFan: "products/:productId",
};
