import React from 'react';

function ComponentA({ title, userCount }) {
  return (
    <div style={{ border: '5px solid #ed0909', padding: '10px', marginBottom: '10px', backgroundColor: 'lightcoral' }}>
      <h3>Component A</h3>
      <p><strong>Platform:</strong> {title}</p>
      <p><strong>Active Users:</strong> {userCount}</p>
    </div>
  );
}


function ComponentB({ product }) {
  return (
    <div style={{ border: '5px solid #0af865', padding: '10px', marginBottom: '10px', backgroundColor: 'lightyellow' }}>
      <h3>Component B</h3>
      <p><strong>Product Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Status:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
}

function ComponentC({ features }) {
  return (
    <div style={{ border: '5px solid #1a0bf7', padding: '10px', backgroundColor: 'lightgray' }}>
      <h3>Component C</h3>
      <p><strong>Key Features:</strong></p>
      <ul>
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


export default function App() {
  const productData = {
    name: 'Wireless Headphones',
    price: 129,
    inStock: false,
  };

  const featureList = ['Noise Cancellation', '30-Hour Battery', 'Bluetooth 5.3'];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 align="center">Parent Component (App)</h1>
      <ComponentA title="Storefront Dashboard" userCount={450} />
      <ComponentB product={productData} />
      <ComponentC features={featureList} />
    </div>
  );
}