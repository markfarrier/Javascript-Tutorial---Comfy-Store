import { getStorageItem, setStorageItem } from './utils.js';

let store = getStorageItem('store');

const setupStore = (products) => {
	store = products.map((product) => {
		const {
			id,
			fields: { featured, name, price, company, colors, image: img },
		} = product;
		// since we renamed image in the destructuring we can use image as a const name below
		const image = img[0].thumbnails.large.url;
		return { id, featured, name, price, company, colors, image };
	});
	setStorageItem('store', store);
};

// console.log(store);

const findProduct = (id) => {
	let product = store.find((product) => product.id === id);
	// this assumes a valid id (i.e. that the product of the particular id exists.
	return product;
};

// can add export to the items above instead, but you can equally group them at the bottom
// can do something like "store as" or "setupStore as" if you want to rename

export { store, setupStore, findProduct };
