import { DetailWrapper } from "../styles";
import DeleteButtonDetailed from "./buttons/DeleteButtonDetailed";

const ProductDetail = (props) => {
  const product = props.product;

  const handleDelete = (productId) => {
    props.deleteProduct(productId);
    props.setProduct(null);
  };

  return (
    <DetailWrapper>
      <br />
      <img src={props.product.image} alt={props.product.name} />
      <h1>{props.product.name}</h1>
      <p>{props.product.description}</p>
      <p>{props.product.price} BD</p>
      <button onClick={() => props.setProduct(null)}>Go Back</button>
      <DeleteButtonDetailed
        productId={product.id}
        deleteProduct={handleDelete}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
