import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function HeaderButtons({ handleClick }) {
  return (
    <section>
      <Button onClick={() => handleClick('/')}>Home</Button>
      <Button onClick={() => handleClick('/experience')}>Experience</Button>
      <Button onClick={() => handleClick('/contact')}>Contact</Button>
    </section>
  )
}

HeaderButtons.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default HeaderButtons;
