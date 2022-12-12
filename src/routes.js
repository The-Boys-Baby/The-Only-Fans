export default {
  devHost: "http://localhost:1337/api/",
  profile: "users/:id",
  cart: "users/:userId/cart",
  checkout: (userId) => `users/${userId}/checkout`, //${checkout(id)}
  register: "users/register",
  login: "users/login",
  marketplace: "products",
  fanDetails: "products/:productId",
  editFan: "products/:productId",
};
