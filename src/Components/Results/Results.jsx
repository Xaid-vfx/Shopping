import React ,{useState}from 'react'
import Card from './Card/Card'
import './Results.css'


export default function Results(props) {
    
    return (
        <div className='Results'>
            
            {props.allproducts ? props.allproducts.map(e => {

                if (e.title.toUpperCase().includes(props.value.toUpperCase()))

                    if ((props.f1.length !=0 ?  ((e.category==props.f1[0]) || (e.category==props.f1[1]) || (e.category==props.f1[2]) || (e.category==props.f1[3])) : true) && (props.f2[0] ? (e.price > props.f2[0] && e.price < props.f2[1]) : true) )
                        {return <Card product={e} key={e.id}/>}


            }) : ''}
        </div>
    )
}
