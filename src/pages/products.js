// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

// specific imports
import { store } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';

// loading is displayed by default, then cleared once loaded
const loading = getElement('.page-loading');

display(store, getElement('.products-container'));

setupSearch(store);
setupCompanies(store);
setupPrice(store);

// once you have gotten the data, set display to none
loading.style.display = 'none';
