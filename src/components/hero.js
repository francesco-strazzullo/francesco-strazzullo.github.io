import React from "react";
import PropTypes from "prop-types"
import styles from "./hero.module.css"



const Hero = ({ img, title }) => (
    <div className={styles.hero}>
        <figure className={styles.hero__figure}>
            {img}
        </figure>
        <h1 className={styles.hero__title}>
            {title}
        </h1>
    </div>
);

Hero.propTypes = {
    img: PropTypes.node.isRequired,
    title: PropTypes.string,
}

export default Hero;
