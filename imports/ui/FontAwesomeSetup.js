import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faYoutube, faCog)

export const setupFontAwesome = () => {[
  <FontAwesomeIcon icon={['fab', 'facebook']} />,
  <FontAwesomeIcon icon={['fab', 'youtube']} />,
  <FontAwesomeIcon icon="cog" />  
]};