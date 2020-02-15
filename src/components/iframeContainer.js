import React from "react";
import PropTypes from "prop-types"
import styles from "./iframeContainer.module.css"


const IframeContainer = ({ children }) => (
    <div className={styles.iframecontainer}>
        {children}
    </div>
);

IframeContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default IframeContainer;
