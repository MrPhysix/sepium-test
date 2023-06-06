import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../images/arrow.svg';

import styles from './slider-button.module.css';

function SliderButton({ handleClick, direction }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.button}
    >
      <img
        src={Arrow}
        alt="slider arrow"
        className={direction === 'next' ? styles.imgNext : styles.img}
      />
    </button>
  );
}

SliderButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  direction: PropTypes.string,
};

SliderButton.defaultProps = {
  direction: 'prev',
};

export default SliderButton;
