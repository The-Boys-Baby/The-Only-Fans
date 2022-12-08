export default {
	devHost: 'http://localhost:1337/api/', //jeremy: when render is deployed, change this to render link
	users: 'admin/getUsers',
	profile: `users/me`,
	cart: 'users/:userId/cart',
	checkout: `checkout/submit`, //${checkout(id)}
	register: 'users/register',
	login: 'users/login',
	marketplace: 'products',
	fanDetails: 'products/:productId', // jeremy: needs to be a function
	editFan: 'products/:productId' // jeremy: needs to be a function
}
