import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "./Login.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={classes.loginEmail} placeholder={"Email"} name={"email"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field className={classes.loginPassword} placeholder={"Password"} name={"password"} type={"password"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field className={classes.loginCheckbox} component={Input} name={"rememberMe"} type={"checkbox"}/>
                <div className={classes.loginRemember}>Remember me</div>
            </div>
            <div>
                <button className={classes.loginButton}>login</button>
            </div>
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login' // уникальное строковое имя , что бы стейт различал разные формы
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {//  в formData сидят методы из сабмита которые он получает из библиотеки редакс-форм мы их прокидываем дальше в компоненту
        props.login(formData.email, formData.password, formData.rememderMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1 className={classes.loginTitle}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);