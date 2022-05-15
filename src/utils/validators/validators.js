import classes from "./Validators.module.css";

export const required = (value) => {
    if (value) return undefined;

    return <div className={classes.validators}>Field is required</div>;
}

export const maxLengthCreator = (maxLength) => (value) => {
    if ( value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}
