import React, { useState } from 'react'
import { useStateprovider } from './context/stateProvider';
const withFilter = (OriginalComponent,name) => {
  // const componentname = OriginalComponent.name;
//  console.log(name.name);
 var componentname=name.name;
 console.log(componentname)
  function NewComponent() {
    // console.log(componentname)
    // const [componentname,setcomponentname]=useState(nameofcomponent.name);
    const [{ brightness=100, opacity=0, blur=0, grayscale=0, sepia=0, invert=0}, dispatch] = useStateprovider();
    const [unit, setunit] = useState(componentname === "Blur" ? "px" : "%");
    var state = (name) => {
      switch (name) {
        case "Brightness":
          return brightness;
        case "Opacity":
          return opacity
        case "Blur":
          return blur
        case "Invert":
          return invert
        case "Sepia":
          return sepia
        case "Grayscale":
          return grayscale
        default:
          return null
      }


    }
    console.log("hey")
    const currentComponent = state(componentname)
    // console.log(currentComponent)
    const [value, setvalue] = useState(state(componentname))

    const [name,setname]=useState(componentname);
    const handleChange = (value) => {
      setvalue(value);
      // const type = 
      // const dispatchname = ;
      
      // const obj = {
      //   type:
      // }
      var statename=componentname.toUpperCase() ;
      // console.log(obj)
      dispatch({
        type:componentname.toUpperCase(),
       [componentname.toLowerCase()]: parseInt(value)
      })
    }
    return <OriginalComponent value={value} handleChange={handleChange} unit={unit} />
  }
  return NewComponent;
}
export default withFilter;

