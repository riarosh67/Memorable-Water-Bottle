import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    const {name,img,price,seller} = bottle;
    return (
        <div className="bottle">
            <h2>Bottle: {name} </h2>
            <img src={img} alt="" />
            <h5>Price: {price} </h5>
            <p>Seller Name: {seller} </p>
            <button onClick={()=>handleAddToCart(bottle) }>Buy Now</button>
        </div>
    );
};

export default Bottle;