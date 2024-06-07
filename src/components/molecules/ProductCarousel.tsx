/**
 * ProductCarousel.tsx
 * 
 * This file contains the ProductCarousel component of the application.
 * It imports the styles from ProductCarousel.css.
 * 
 * The file defines two interfaces: Product and ProductCarouselProps.
 * 
 * @module ProductCarousel.tsx
 */

import React from 'react';
import '../../assets/styles/ProductCarousel.css';

/**
 * Product interface represents a single product.
 * It includes the id, display title, image URL, price, and URL of the product.
 */
interface Product {
  id: string;
  displayTitle: string;
  imageUrl: string;
  price: string;
  url: string;
}

/**
 * ProductCarouselProps interface represents the props for the ProductCarousel component.
 * It includes an array of products.
 */
interface ProductCarouselProps {
  products: Product[];
}

/**
 * ProductCarousel component displays a carousel of products.
 * It returns a div containing a list of product cards. Each product card includes an image, display title, price, and a link to the product page.
 */
const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  return (
    <div className="product-carousel">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.displayTitle} />
          <div className="product-card-details">
            <p>{product.displayTitle}</p>
            <p>{product.price}</p>
            <a href={product.url} target="_blank" rel="noopener noreferrer">View page</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCarousel;
