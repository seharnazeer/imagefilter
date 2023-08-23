import React, { useRef, useState } from 'react'
import { Filters } from './index'
import { BsFillBrightnessHighFill, BsCloudUploadFill } from "react-icons/bs"
import { TbBlur, TbScale } from "react-icons/tb"
import { ImCross } from "react-icons/im"
import { MdOpacity, MdInvertColors, MdFilterBAndW } from "react-icons/md"
import { useStateprovider } from '../components/context/stateProvider'
export const FilterWindow = () => {
  const [{ brightness, opacity, blur, grayscale, sepia, invert },dispatch] = useStateprovider();
  console.log(brightness,opacity,blur,grayscale);
  const [requiredfilter, setfilter] = useState("");
  const [imageurl, setimage] = useState("")
  const [imagename, setimagename] = useState("");
  const ref = useRef();
  const handleChange = (file) => {
    setimagename(file.name)
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.addEventListener("load", (e) => {
      setimage(e.target.result)
    })
  }
  const handleSave = () => {
    if (ref.current) {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      canvas.width = ref.current.naturalWidth;
      canvas.height = ref.current.naturalHeight;
      ctx.filter = `brightness(${brightness}%) opacity(${opacity}%) sepia(${sepia}%) invert(${invert}%) grayscale(${grayscale}%) blur(${blur}px)`;
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.drawImage(ref.current, canvas.width / 2, -canvas.height / 2, -canvas.width, canvas.height)
      // document.body.appendChild(canvas)
      const link = document.createElement("a")
      link.download = imagename;
      link.href = canvas.toDataURL();
      link.click();
      dispatch({
        type:'All'
      })
    }
  }
  return (
    <div className='upper-filter'>
      <div className='filter-icons'>
        <div onClick={() => setfilter("brightness")}>
          <BsFillBrightnessHighFill />
          <h6>brightness</h6>
        </div>
        <div onClick={() => setfilter("blur")}>
          <TbBlur />
          <h6>blur</h6></div>
        <div onClick={() => setfilter("opacity")}>
          <MdOpacity />
          <h6>opacity</h6></div>
        <div onClick={() => setfilter("grayscale")}>
          <TbScale />
          <h6>grayscale</h6></div>
        <div onClick={() => setfilter("invert")}><MdInvertColors />
          <h6>invert</h6></div>
        <div onClick={() => setfilter("sepia")}><MdFilterBAndW />
          <h6>sepia</h6></div>
      </div>
      <div className='image-slider'>
        {
          imageurl === "" ? <div className='upload'>
            <label className='file-label' for="image"><span className='upload-icon'><BsCloudUploadFill /></span>Select Image</label>
            <input type="file" name="image" id="image" accept="image/*" onChange={({ target: { files } }) => handleChange(files[0])} />
          </div> :
            <div className='div-show-image'>
              <img className='upload' ref={ref}
                style={{ filter: `brightness(${brightness}%) opacity(${opacity}%) sepia(${sepia}%) invert(${invert}%) grayscale(${grayscale}%) blur(${blur}px)` }}
                src={imageurl} alt="images-to-filter"/>
              <Filters requiredfilter={requiredfilter} />
              <p>{requiredfilter}</p>
              <div className='buttons'>
                <button><ImCross id="cross-icon" onClick={() => {setimage("");
              dispatch({
                type:'All'
              })}} /></button>
                <button onClick={handleSave}>Save Image</button>
              </div>
            </div>
        }



      </div>
    </div>
  )
}
