import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartTotalAmount from '../CartTotalAmount'

import './index.css'
import Footer from '../Footer'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const showEmptyView = cartList.length === 0
      return (
        <>
          <Header activeTab="Cart" />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <CartListView />
                <CartTotalAmount />
              </div>
            )}
          </div>
          <Footer />
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
