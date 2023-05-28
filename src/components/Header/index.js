import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'

import Cookies from 'js-cookie'

import './index.css'

import Logo from '../Images/Website login page logo.png'

class Header extends Component {
  state = {
    showNavItems: false,
  }

  toggleNavItems = () => {
    this.setState(preState => ({
      showNavItems: !preState.showNavItems,
    }))
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  renderNavItemsContainer = mobileView => (
    <ul className={`nav-items-container${mobileView}`}>
      <li className="nav-item">
        <Link className={this.getActiveClassName('/')} to="/">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link className={this.getActiveClassName('/cart')} to="/cart">
          Cart
        </Link>
      </li>

      <li className="nav-item">
        <button
          className="logout-button"
          type="button"
          onClick={this.onClickLogout}
        >
          Logout
        </button>
      </li>

      <button
        className="nav-button"
        type="button"
        onClick={this.toggleNavItems}
      >
        <AiFillCloseCircle className="close-icon" />
      </button>
    </ul>
  )

  getActiveClassName = path => {
    const {match} = this.props
    const currentPath = match.path
    if (currentPath === path) {
      return 'nav-item-active-link'
    }
    return 'nav-item-link'
  }

  render() {
    const {showNavItems} = this.state

    return (
      <nav className="navbar">
        <div className="logo-hamburger-container">
          <Link className="website-logo-container" to="/">
            <img className="website-logo" src={Logo} alt="website logo" />
            <h1 className="website-title">Tasty Kitchens</h1>
          </Link>

          <button
            type="button"
            className="nav-button"
            onClick={this.toggleNavItems}
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        </div>
        {this.renderNavItemsContainer('')}
        {showNavItems && this.renderNavItemsContainer('-mobile-view')}
      </nav>
    )
  }
}

export default withRouter(Header)
