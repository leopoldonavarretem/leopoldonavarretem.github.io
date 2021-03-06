//Imports
import * as PATHS from "../utils/paths";

//import pages
import Aboutme from "../pages/Aboutme"


function routes(props) {
  return [
    {
      path: PATHS.HOME,
      element: <>Home</>,
    },

    {
      path: PATHS.PORTFOLIO,
      element: <>Portfolio</>,
    },

    {
      path: PATHS.ABOUTME,
      element: <Aboutme/>
    },

    {
      path: PATHS.CONTACT,
      element: <>Contact</>,
    },
  ];
}

export default routes;
