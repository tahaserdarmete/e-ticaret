import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {getDetailProduct} from "../redux/productSlice";
import DetailComp from "../components/detail/detailComp";
import Loading from "../components/loading";

const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {productDetail, productDetailStatus} = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      {productDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
