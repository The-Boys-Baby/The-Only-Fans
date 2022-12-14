export default {
  devHost: "http://localhost:1337/api/",
  users: "admin/getUsers",
  profile:`users/me`,
  cart: "users/:userId/cart",
  checkout: `checkout/submit`, //${checkout(id)}
  register: "users/register",
  login: "users/login",
  marketplace: "products",
  createProduct: "admin/createproduct",
  fanDetails: "products/:productId",
  editFan: "products/:productId",
};
