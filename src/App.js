import React, {Component} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Infinity from "./components/Common/Infinity/Infinity";
import store from "./redux/redux-store";
const ProfileBossContainer = React.lazy(() => import('./components/Profile/ProfileContainer/ProfileBossContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        /*if(!this.props.initialized) {
            return <Infinity/>
        }*/

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Route path="/profile/:userId?"
                                   render={() => <ProfileBossContainer/>}/>
                        </React.Suspense>
                        <Route path="/users/"
                               render={() => <UsersContainer/>}/>
                        <Route path="/login/"
                               render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SJSApp;