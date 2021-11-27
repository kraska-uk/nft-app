import { createMedia } from '@artsy/fresnel';



const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
    //xl: 1192,
  },
});


export default function useMedia() {
  return { MediaContextProvider, Media };
}

