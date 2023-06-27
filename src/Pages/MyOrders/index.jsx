import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import OrdersCard from '../../Components/OrdersCard';
import { ShoppingCartContext } from '../../Context';

function MyOrders() {
  const {order} = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center flex-col w-[50%] h-[calc(100vh_-_140px)] top-[100px] fixed rounded-br-2xl rounded-bl-2xl 
                      border-t-4 border-t-[#e5d8ff] border-solid  bg-[#ffffff]'>
        <div className='items-center relative mt-4'>
          <p className='text-lg font-medium text-center'>My Orders</p>
        </div>
        {/* Body */}
        <div className='mt-8 px-2 flex-1 overflow-y-scroll '>
          {
            order.map((order, index) => (
              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard
                  dateTime={order.dateTime}
                  totalPrice={order.totalPrice}
                  quantityProducts={order.quantityProducts}
                />
              </Link>
            ))
          }
        </div>
      </div>
    </Layout>
  );
}

export default MyOrders