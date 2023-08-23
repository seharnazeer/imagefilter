const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case "BRIGHTNESS":
            return {
                ...state,
                brightness:action.brightness
            }
        case "OPACITY":
            return {
                    ...state,
                    opacity:action.opacity
            }
        case "BLUR":
            return {
                    ...state,
                    blur:action.blur
            }
        case "SEPIA":
            return {
                ...state,
                sepia:action.sepia
            }
        case "INVERT":
                return {
                    ...state,
                    invert:action.invert
                }
        case "GRAYSCALE":
            return {
                ...state,
                grayscale:action.grayscale
            }
        case 'All':
            return{
                brightness: 100,
                opacity: 100,
                blur: 0,
                grayscale: 0,
                sepia: 0,
                invert: 0
            }
        default :
        return {
            ...state
        }
    }
}
export default reducer;