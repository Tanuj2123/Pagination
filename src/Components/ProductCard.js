

const ProductCard = ({data}) => {

    const {title,thumbnail} = data;
  return (
    <div className="">
        <img alt="product-img" src={thumbnail}></img>
        <p>{title}</p>
    </div>
  )
}

export default ProductCard