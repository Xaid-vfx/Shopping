import React, { useState, useEffect } from 'react'
import './Filters.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

export default function Filters(props) {

    const [show, setshow] = useState(false)
    const [show1, setshow1] = useState(false)
    const [show2, setshow2] = useState(false)







    function handle() {
        var checkedValue1 = [],min,max;
        var inputElements = document.getElementsByClassName('checkbox1');
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                checkedValue1.push(inputElements[i].value);
            }
        }

        var checkedValue2 = [];
        var inputElements = document.getElementsByClassName('checkbox2');
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                checkedValue2.push(inputElements[i].value);
            }
        }
        
        min = checkedValue2.length ? checkedValue2[0].split('-')[0] : null;
        max = checkedValue2.length ? checkedValue2[checkedValue2.length-1].split('-')[1] : null;
        console.log(min,max);
            
         
        props.showfilters(checkedValue1,min,max)
    }





    return (
        <div className='filter'>
            <div >
                <div className='options'> <p className='filtername'>TYPE</p>
                    <button onClick={() => {
                        if (show)
                            setshow(false);
                        else {
                            setshow(true);
                        }
                    }} className='drop'><FontAwesomeIcon className='iconfilter' icon={faArrowCircleDown} /></button>
                </div>

                {show ? <div className='checkboxes'>
                    <div className='flex'>
                        <input type='checkbox' onClick={() => { handle() }} className='checkbox1' value="men's clothing" /><p>Men</p>
                    </div>
                    <div className='flex'>
                        <input type='checkbox' onClick={() => { handle() }} className='checkbox1' value="women's clothing" /><p>Women</p>
                    </div>
                    <div className='flex'>
                        <input type='checkbox' onClick={() => { handle() }} className='checkbox1' value='jewelery' /><p>Jewelery</p>
                    </div>
                    <div className='flex'>
                        <input type='checkbox' onClick={() => { handle() }} className='checkbox1' value='electronics'/><p>Electronics</p>
                    </div>
                </div> : ''}

            </div>

            <div className='line'></div>

            <div>
                <div className='options'> <p className='filtername'>PRICE</p>
                    <button onClick={() => {
                        if (show1)
                            setshow1(false);
                        else {
                            setshow1(true);
                        }
                    }} className='drop'><FontAwesomeIcon icon={faArrowCircleDown} /></button>
                </div>


                {show1 ? <div className='checkboxes'>
                    <div className='flex'>
                        <input type='checkbox'onClick={() => { handle() }}   className='checkbox2' value='0-50'/><p>$0 - $50</p>
                    </div>
                    <div className='flex'>
                        <input type='checkbox' onClick={() => { handle() }}  className='checkbox2' value='51-100'/><p>$51 - $100</p>
                    </div>
                    <div className='flex'>
                        <input type='checkbox'onClick={() => { handle() }}   className='checkbox2' value='100-1000'/><p>Above $100</p>
                    </div>
                </div> : ''}
            </div>




        </div>
    )
}
