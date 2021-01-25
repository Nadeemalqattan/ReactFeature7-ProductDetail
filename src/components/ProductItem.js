// Styling
import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;
  const handleDelete = () => {
    alert(`Delete cookieId: ${product.id}`);
  };
  return (
    <ProductWrapper>
      <button onClick={handleDelete}>Delete</button>
      <img
        onClick={() => props.setProduct(product)}
        alt={product.name}
        src={product.image}
      />
      <p>{product.name}</p>
      <p className="product-price">{product.price} BD</p>
    </ProductWrapper>
  );
};

export default ProductItem;
