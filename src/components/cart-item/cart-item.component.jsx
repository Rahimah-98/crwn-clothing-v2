import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, imgUrl, price, quantity } = cartItem;
  const totalPrice = quantity * price;

  return (
    <div className='cart-item-container'>
      <img src={imgUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} * ${price} = ${totalPrice}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
