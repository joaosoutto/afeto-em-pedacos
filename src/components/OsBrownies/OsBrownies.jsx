import React from 'react';
import Tradicionais from './Tradicionais/Tradicionais';
import Recheados from './Recheados/Recheados';
import Brownelicia from './brownelicias/Brownelicia';

const OsBrownies = () => {
  return (
    <div id="brownies">
    <Tradicionais />
    <Recheados />
    <Brownelicia />
    </div>
  );
};

export default OsBrownies;
