
import React from 'react'
import Brightness from "../components/Brightness";
import Opacity from "../components/Opacity";
import Blur from '../components/Blur';
import Sepia from '../components/Sepia';
import Invert from '../components/Invert';
import Grayscale from '../components/Grayscale';
export const Filters = ({requiredfilter}) => {
  console.log(requiredfilter)
    if (requiredfilter ==="brightness"){
      return <Brightness />
    }
    else if(requiredfilter ==="blur"){
      return <Blur />
    }
    else if(requiredfilter ==="opacity"){
      return <Opacity />
    }
    else if(requiredfilter ==="invert"){
      return <Invert />
    }
    else if(requiredfilter ==="grayscale"){
      return <Grayscale />
    }
    else if(requiredfilter ==="sepia"){
      return <Sepia />
    }
}