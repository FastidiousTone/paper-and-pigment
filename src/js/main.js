import '../css/styles.css';

// variables

const addToBag = document.querySelector('[data-action="add-to-bag"]');

const quantityCount = document.querySelector('.quantity-count');

const quantityControl = document.querySelector('.quantity-control');

const product = {
	id: 'markers',
	name: 'Botanical marker set',
	priceCents: 2400,
	quantity: 0,
};

// functions

addToBag.addEventListener('click', () => {
	product.quantity += 1;
	quantityCount.textContent = product.quantity;

	// Inside the listener: updates the quantity and switches controls after a click.

	if (product.quantity === 0) {
		addToBag.hidden = false;
		quantityControl.hidden = true;
	} else {
		addToBag.hidden = true;
		quantityControl.hidden = false;
	}
});

// callbacks

// Outside the listener: sets the initial appearance on page load.

addToBag.hidden = false;
quantityControl.hidden = true;
