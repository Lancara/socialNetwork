// штука для Textarea в form
import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}) => {

    const hasError = meta.touched && meta.error;
    //в методе meta есть свойства touched (показывает тыкнули на поле или нет)
    // error показывает есть ошибка или нет , и если поле трогали и есть ошибка (не чего не ввели )
    // то подсветиться красным и показать сообщение meta.error (в нем сидит текст ошибки)
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>  {/*при ошибке виведет className*/}
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}   {/*при ошибке виведет meta.error (в нем сидит текст ошибки)*/}
        </div>
    )
}

export const Textarea = (props) => {// Textarea получился неким контейнером  над форм контрол, поэтому передаем пропсы return <FormControl {...props}
    const {input, meta, child, ...restProps} = props;// берем єто из пропс
    return <FormControl {...props} > <textarea {...input} {...restProps}/></FormControl>// отрисовываем форм контрол и передаем деструктурированный инпут и респПропс
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl  {...props}> <input {...input} {...restProps} /> </FormControl>
}

export const createField = (placeholder, name, validators, component, props ={}, text = " " ) =>(
    <div>
    <Field placeholder={placeholder} name={name}
           validate={validators}
           component={component}
        {...props}
    />{text}
    </div>
)
