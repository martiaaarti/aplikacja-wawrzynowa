import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCog, faCaretRight, faCaretDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export const setupFontAwesome = () => {
library.add(faFacebook, faYoutube, faCog, faCaretRight, faCaretDown, faArrowLeft)  
};