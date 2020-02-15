import React from "react";
import PropTypes from "prop-types"
import styles from "./section.module.css"

const Section = ({ sidebar, hasSidebar, children }) => (
    <div className={styles.section}>
        <div className={`${styles.section__body} ${hasSidebar && styles.section__body__withsidebar}`}>
            {children}
        </div>
        {hasSidebar && <div className={styles.section__sidebar}>
            {sidebar}
        </div>}
    </div>
);

Section.propTypes = {
    sidebar: PropTypes.node,
    children: PropTypes.node.isRequired,
    hasSidebar: PropTypes.bool
}

Section.defaultProps = {
    hasSidebar: false,
    sidebar: null
}

export default Section;
