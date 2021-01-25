import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  return (
    <DetailWrapper>
      <img src={props.product.image} alt={props.product.name} />
      <h1>{props.product.name}</h1>
      <p>{props.product.description}</p>
      <p>{props.product.price} BD</p>
      <button onClick={() => props.setProduct(null)}>Go Back</button>
    </DetailWrapper>
  );
};

export default ProductDetail;
