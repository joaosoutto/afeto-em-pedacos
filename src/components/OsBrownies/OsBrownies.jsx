import React from 'react';
import Tradicionais from './Tradicionais/Tradicionais';
import Recheados from './Recheados/Recheados';
import Brownelicia from './brownelicias/Brownelicia';
// import Modal from '../Modal/Modal';

const OsBrownies = () => {
  return (
    <div id="brownies">
      {/* <Modal /> */}
    <Tradicionais />
    <Recheados />
    <Brownelicia />
    </div>
  );
};

export default OsBrownies;
