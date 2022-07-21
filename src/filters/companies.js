import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
	// Set filters things such that it returns only the unique values (removes duplicates)
	// also need to convert to an array
	// and add "all"
	let companies = [
		'all',
		...new Set(store.map((product) => product.company)),
	];
	// companies is the data, companiesDOM is the companies element in the DOM
	const companiesDOM = getElement('.companies');
	companiesDOM.innerHTML = companies
		.map((company) => {
			return `<button class="company-btn">${company}</button>`;
		})
		.join('');
	companiesDOM.addEventListener('click', function (e) {
		const element = e.target;
		if (element.classList.contains('company-btn')) {
			let newStore = [];
			if (element.textContent === 'all') {
				newStore = [...store];
			} else {
				newStore = store.filter(
					(product) => product.company === e.target.textContent
				);
			}
			display(newStore, getElement('.products-container'));
		}
	});
};

export default setupCompanies;
