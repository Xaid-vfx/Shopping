import React, { useState, useRef, useEffect } from 'react'
import Filters from './Components/Filters/Filters';
import Search from './Components/Search/Search'
import Suggestions from './Components/Suggestions/Suggestions'
import Results from './Components/Results/Results';
import {Routes,Route} from 'react-router-dom'
import Image from './Components/Image';

export default function App() {

  const [change, setchange] = useState(0)
  const ref = useRef(null);
  const [products, setproducts] = useState([])
  const [allproducts, setallproducts] = useState([])
  const [show, setshow] = useState(true)
  const [value, setvalue] = useState('')
  const [f1, setf1] = useState([]) 
  const [f2, setf2] = useState([])





  useEffect(() => {
    if (document.activeElement === ref.current && show) {
      const a = document.getElementsByClassName('Suggestions')

      a[0].style.opacity = 1;
      a[0].style.transform = "translateY(0px)"
    }
    else {
      const a = document.getElementsByClassName('Suggestions')
      a[0].style.opacity = 0;
      a[0].style.transform = "translateY(-15px)"

    }
  }, [change]);



  useEffect(() => {

    async function getproducts() {
      const abc = await fetch("https://fakestoreapi.com/products/category/women's clothing").then(res => res.json())
      const a = await fetch("https://fakestoreapi.com/products").then(res => res.json())
      return [abc, a];
    }

    getproducts().then(function (res) {
      setproducts(res[0])
      setallproducts(res[1])

    })

  }, [change])

  function showresults(move){
    if(move == false)
      setshow(move)
    
    document.getElementsByClassName('resultcomp')[0].style.opacity = 1;
    document.getElementsByClassName('resultcomp')[0].style.transform = 'translateX(0px)';
    document.getElementsByClassName('resultcomp')[0].style.transform = 'translateY(0px)';

    document.getElementsByClassName('filters')[0].style.opacity = 1;
    document.getElementsByClassName('filters')[0].style.transform = 'translateX(0px)';

    document.getElementsByClassName('h1')[0].style.opacity = 1;
    document.getElementsByClassName('h1')[0].style.transform = 'translateX(0px)';


  }


  function search(val){
    setvalue(val)
    
    
  }

  function showfilters(f11,min,max){
    setf1(f11);
    setf2([min,max]);
    console.log(f1,f2);
  }






  return (
    <div className='App' onClick={() => { setchange(change + 1) }}>
      <Image/>
      <Search reff={ref} showresults={showresults} search={search}/>
      
      <Suggestions products={products} />
      <h1 className='h1'>Search Results</h1>
      <div className='flexit'>
        <div className='filters'>
          <Filters showfilters={showfilters}/>
        </div>
        
        <div className='resultcomp'>  
        <Results value={value} allproducts={allproducts} f1={f1} f2={f2}/>
        </div>
      </div>
      
    </div>
  )
}


