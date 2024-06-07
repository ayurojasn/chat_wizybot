import React from 'react';
import '../../assets/styles/ProductCarousel.css';

interface Product {
  id: string;
  displayTitle: string;
  imageUrl: string;
  price: string;
  url: string;
}

interface ProductCarouselProps {
  products: Product[];
}

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
