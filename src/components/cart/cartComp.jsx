import {useDispatch} from "react-redux";
import {removeFromCart} from "../../redux/cartSlice";

const CartComp = ({cart}) => {
  const dispatch = useDispatch();

  return (
    <div className="my-10 py-5 flex items-center justify-between border-b">
      <img className="w-[150px] h-[150px]" src={cart.image} alt={cart.title} />
      <div className="w-[350px]">
        <div className="font-bold flex-wrap">{cart?.title}</div>
      </div>

      <div>
        {cart?.price} TL ({cart?.quantity} Ad)
      </div>

      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white w-[100px] h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-red-700"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
