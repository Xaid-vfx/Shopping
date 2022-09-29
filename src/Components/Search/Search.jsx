import React , {useState, useEffect} from 'react'
import './Search.css'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Search(props) {
  const [move, setmove] = useState(false)
  const [value, setvalue] = useState('')

  useEffect(() => {
    
    if(move){
      document.getElementsByClassName('search')[0].style.padding = '3vh';
      document.getElementsByClassName('App')[0].style.background = "#fff";
      document.getElementById('search').style.border="1px solid"

      const a = document.getElementsByClassName('Suggestions')

      a[0].style.opacity = 0;
      a[0].style.transform = "translateY(-15px)"
    }
  
  }, [move])
  

  return (
    <div className='search'>
        
        <input ref={props.reff} onClick={()=>{document.getElementsByClassName('resultcomp')[0].style.display = 'block'}}  onChange={(e)=>{
          props.search(e.target.value);
          setmove(true);
          props.showresults(move);
          }} id='search' type="text" placeholder='Search for Jacket ..'/>
        <FontAwesomeIcon className='icon' icon={faSearch}/>
        
    </div>
  )
}
