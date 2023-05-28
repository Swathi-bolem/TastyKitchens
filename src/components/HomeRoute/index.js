import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Carousel from '../Carousel'
import PopularRestaurants from '../PopularRestaurants'

class HomeRoute extends Component {
  render() {
    return (
      <div>
        <Header activeTabId="Home" />
        <Carousel />
        <PopularRestaurants />
        <Footer />
      </div>
    )
  }
}

export default HomeRoute
