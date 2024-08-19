import React,{useState} from 'react'
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import {Controlled as ControlledEditor} from 'react-codemirror2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt,faExpandAlt} from '@fortawesome/free-solid-svg-icons'



const Editor = (props) => {
  const {
    language,
    displayName,
    value,
    onChange
  }=props

  const [open, setOpen] = useState(true)

  function handleChange(editor,data,value){
    if (onChange) {
      onChange(value);
    }
  }
  return (
    <div className={`Editor-container ${open? '':"collapsed"}`}>
      <div className='Container-title'>{displayName}
        <button onClick={()=>{
          setOpen(o=>!o)
        }}
        type='button'
        className='expand-collapse-btn'
        > <FontAwesomeIcon icon={open? faCompressAlt:faExpandAlt}/>
        </button>
      </div>
      <ControlledEditor onBeforeChange={handleChange}
      value={value}
      className='code-mirror-wrapper'
      options={{
        lineWrapping:true,
        lint:true,
        mode:language,
        theme:"material",
        lineNumbers:true
       } }/>
    </div>
  )
}

export default Editor