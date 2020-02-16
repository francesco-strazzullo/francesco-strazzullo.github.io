import React from "react";
import PropTypes from "prop-types"
import styles from "./button.module.css"

const Button = ({ label, onClickCallback, Icon, isClear = false }) => (
    <button className={isClear ? `${styles.button} ${styles.button__clear}` : `${styles.button}`} onClick={onClickCallback}>
        {Icon && <Icon />}
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string,
    onClickCallback: PropTypes.func,
    Icon: PropTypes.any
}

export default Button;
