import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function HeaderButtons({ handleClick }) {
  return (
    <section>
      <Button color="secondary" onClick={() => handleClick('/')}>Home</Button>
      <Button color="secondary" onClick={() => handleClick('/experience')}>Experience</Button>
      <Button color="secondary" onClick={() => handleClick('/contact')}>Contact</Button>
    </section>
  )
}

HeaderButtons.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default HeaderButtons;
