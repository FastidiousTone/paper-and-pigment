# JavaScript Process

## Step #1:

- Create variable to hold the first Add to bag button.
- create an click EventListener and console log when the button is clicked.

```js
// Remember, when targeting an attribute, you will have to place it within [attr property, attr name ] brackets
const addToBag = document.querySelector('[data-action="add-to-bag"]');

addToBag.addEventListener('click', () => {
	console.log(typeof product.priceCents);
});
```

## Step #2:

- Represent one product in JavaScript.

```js
// Below is an object literal.

const product = {
	id: 'markers',
	name: 'Botanical marker set',
	priceCents: 2400,
	quantity: 0,
};

// Then I console logged using the typeof property to get the product.priceCents type.

addToBag.addEventListener('click', () => {
	console.log(typeof product.priceCents);
});

//  Increase quantity in js before updating the page.
```

### Addition Assitgnment (+-)

- The addition assignment (+=) operator performs addition (which is either numeric addition or string concatenation) on the two operands and assigns the result to the left operand.

Syntax

x += y

Description

x += y is equivalent to x = x + y, except that the expression x is only evaluated once.

```js
// Longhand
x = x + y;

// Shorthand using Addition Assignment
x += y;
```

Examples

```js
// Addition assignment using numbers

let bar = 5;
bar += 2; // 7

// Other non-string, non-BigInt values are coerced to numbers:

let baz = true;
baz += 1; // 2
baz += false; // 2

// Addition assignment using BigInts

let x = 1n;
x += 2n; // 3n

x += 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// Addition assignment using strings

let foo = 'foo';
foo += false; // "foofalse"
foo += 'bar'; // "foofalsebar"

let bar = 5;
bar += 'foo'; // "5foo"
```

```js
// Solution:

addToBag.addEventListener('click', () => {
	product.quantity += 1;

	console.log(product.quantity);
});
```

```js
import '../css/styles.css';

// variables

const addToBag = document.querySelector('[data-action="add-to-bag"]');

const increaseButton = document.querySelector('[data-action="increase"]');

const decreaseButton = document.querySelector('[data-action="decrease"]');

const quantityCount = document.querySelector('.quantity-count');

const quantityControl = document.querySelector('.quantity-control');

// const product = {
// 	id: 'markers',
// 	name: 'Botanical marker set',
// 	priceCents: 2400,
// 	quantity: 0,
// };

const product = {
	id: 'markers',
	name: 'Botanical marker set',
	priceCents: 2400,
	quantity: 0,
};

const products = [
	{
		id: 'markers',
		name: 'Botanical marker set',
		priceCents: 2400,
		quantity: 0,
	},
	{
		id: 'sketchbook',
		name: 'Everyday sketchbook',
		priceCents: 1800,
		quantity: 0,
	},
];

console.log(products[0]);

// Event Listeners

addToBag.addEventListener('click', () => {
	product.quantity += 1;
	updateProductDisplay();
});

// Increase button
increaseButton.addEventListener('click', () => {
	product.quantity += 1;
	quantityCount.textContent = product.quantity;
});

updateProductDisplay();

// Decrease button
decreaseButton.addEventListener('click', () => {
	product.quantity -= 1;
	quantityCount.textContent = product.quantity;

	// if (product.quantity === 0) {
	// 	addToBag.hidden = false;
	// 	quantityControl.hidden = true;
	// }
});

updateProductDisplay();

// Functions

function updateProductDisplay() {
	quantityCount.textContent = product.quantity;
	if (product.quantity === 0) {
		addToBag.hidden = false;
		quantityControl.hidden = true;
	} else {
		addToBag.hidden = true;
		quantityControl.hidden = false;
	}
}

// callbacks

updateProductDisplay();

// Outside the listener: sets the initial appearance on page load.

addToBag.hidden = false;
quantityControl.hidden = true;
```
