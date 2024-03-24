import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import '../pages/style.css'
import './style.css';
import CartContext from '../CartContext';

const CartDetail = () => {
  const { id } = useParams();
  const { data, error, loading } = useAxios(`products/${id}`);
  const { addCard } = useContext(CartContext)
  const addToCart = () => {
    toast.success('Added to cart!', { autoClose: 2000, position: "top-right", });
  };

  return (
    <div>
      {data && (
        loading ? (
          <span class="loader" ></span>
        ) : (
          <div className='container py-4'>
            <div className="d-flex gap-5">
              <div className="images">
                <img className='head_img' src={data.thumbnail} alt="" />
                <div className='d-flex tow justify-content-between '>
                  {data && data.images && data.images[1] && (
                    <img src={data.images[1]} alt="" />
                  )}
                  {data && data.images && data.images[2] && (
                    <img src={data.images[2]} alt="" />
                  )}
                </div>
              </div>
              <div className="products__info w-100">
                <h2>{data.title}</h2>
                <div className='circle my-3'></div>
                <p className='fs-5'>{data.description}</p>
                <div className="brands">
                  <p>Rating: <span>{data.rating}</span></p>
                  <p>|</p>
                  <p>Brand: <span>{data.brand}</span></p>
                  <p>|</p>
                  <p>Category: <span>{data.category}</span></p>
                </div>
                <div className="price">
                  <h5 className='my-3'>Price: ${data.price}</h5>
                </div>
                <button onClick={() => addCard({ data, id })}
                  className='btn btn-primary py-3 mt-3 fs-5 d-flex align-items-center gap-3'
                  onClickCapture={addToCart}
                >
                  <HiOutlineShoppingCart />
                  <span>Add To Cart</span>
                </button>
              </div>
            </div>
          </div>
        )
      )}

      <ToastContainer />
    </div>
  );
};

export default CartDetail;
