import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getCartTotal} from "../redux/cartSlice";
import CartComp from "../components/cart/cartComp";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {carts, totalAmount, itemCount} = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}

          <div className="flex items-center justify-end text-xl gap-3">
            Toplam Tutar: <span className="font-bold">{totalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div>Sepette hiç ürün yok...</div>
      )}
    </div>
  );
};

export default Cart;
