import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';


// eslint-disable-next-line no-unused-vars
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';

import { path } from '../utils'

import Home from '../components/HomePage/Home'
// eslint-disable-next-line no-unused-vars
// import Login from '../routes/Login';
// import Header from './Header/Header';
// import System from '../routes/System';
import './App.scss';
import { CustomToastCloseButton } from '../components/CustomToast';
import ConfirmModal from '../components/ConfirmModal';
import adminService from '../services/adminService';
import AppBar from '../components/layout/Appbar';
import Footer from '../components/layout/Footer';
import About from '../components/layout/About/About'
import Blogs from '../components/layout/Blogs/Blogs';
import Contact from '../components/layout/Contact/Contact';
import Ourstore from '../components/Product/Ourstore';
import SingleProduct from '../components/Product/SingleProduct';
import Login from '../components/Auth/Login';
import ForgotPassword from '../components/Auth/ForgotPassword';
import Signup from '../components/Auth/Signup';
import Resetpass from '../components/Auth/Resetpass';
import PrivacyPolicy from '../components/Policy/PrivacyPolicy';
import RefundPolicy from '../components/Policy/RefundPolicy';
import ShippingPolicy from '../components/Policy/ShippingPolicy';
import TermAndCondition from '../components/Policy/TermAndCondition';
import Cart from '../components/ProductCart/Cart';
import Checkout from '../components/ProductCart/Checkout';
class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    async componentDidMount() {
        const products = await adminService.handlerGetAllProduct();
        setTimeout(() => {
            console.log(products);
        }, 3000);
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">
                        <ConfirmModal />
                        {this.props.isLoggedIn && <AppBar />}
                        <span className="content-container">
                            <Switch>
                                {/* <Route path={path.HOME} exact component={(Home)} />
                                <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                <Route path={path.SYSTEM} component={userIsAuthenticated(System)} /> */}
                                <Route path={path.HOME} exact component={(Home)} />
                                <Route path="/about" component={(About)} />
                                <Route path="/blog" component={(Blogs)} />
                                <Route path="/contact" component={(Contact)} />
                                <Route path="/products" component={(Ourstore)} />
                                <Route path="/product/:id" component={(SingleProduct)} />
                                <Route path="/login" component={(Login)} />
                                <Route path="/signup" component={(Signup)} />
                                <Route path="/forgotpassword" component={(ForgotPassword)} />
                                <Route path="/reset-password" component={(Resetpass)} />

                                <Route path="/privacy-policy" component={(PrivacyPolicy)} />
                                <Route path="/refund-policy" component={(RefundPolicy)} />
                                <Route path="/shipping-policy" component={(ShippingPolicy)} />
                                <Route path="/term-and-condition" component={(TermAndCondition)} />

                                <Route path="/cart" component={(Cart)} />
                                <Route path="/checkout" component={(Checkout)} />

                            </Switch>
                        </span>

                        <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        />
                    </div>
                    <Footer />
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);