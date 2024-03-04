import { useState } from 'react'
import './App.css'
import {Slider} from "./Components/Slider"
import {Item} from "./Components/Item"
import {filterConf} from "./Utilities/OptionsFilter"
import options from "./Options"
function App() {
  const [imageURL,setImageURL] = useState();
  const [filterOptions,setFilterOptions] = useState(options);
  const [selectedOptionId,setSelectedOptionId] = useState(0);
  let selectedOption = filterOptions[selectedOptionId]

  function changeSetts(event){
    setFilterOptions(currentList=>{
      return currentList.map((elem,index)=>{
        if(!(selectedOption==elem)) return elem
        elem.value = event.target.value
        console.log(elem)
        return elem
      })
    })
  }

  return (
    <div className="container">
      <div className="bg-image" style={{filter:filterConf(filterOptions)}}>
      </div>
      <div className="side-bar">
        {
          options.map((elem,index)=>{
            return (
              <Item onpick={()=>setSelectedOptionId(index)} name={elem.name} key={index} active={index==selectedOptionId}/>
            )
          })
        }
      </div>
      <Slider range={selectedOption.range} onchange={changeSetts} value={selectedOption.value}/>
      <div className="generator">
        <button className='generator-btn'>Random image</button>
      </div>
    </div>
  )
}

export default App
