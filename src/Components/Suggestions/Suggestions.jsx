import React, { useState, useEffect, CSSProperties } from 'react'
import './Suggestions.css'
import { faker } from '@faker-js/faker';
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function Suggestions(props) {


    const [loading, setloading] = useState(true)
    var img = []
    const [image, setimage] = useState([])
    var sug = []
    const [sugg, setsugg] = useState([])
    const [change, setchange] = useState(1)

    useEffect(() => {

        async function get() {

            for (let c = 0; c < 4; c++) {

                const i = await faker.image.fashion(140, 200)
                img[c] = i;
                const j = await faker.commerce.productName()
                sug[c] = j;

            }

            setsugg(sug)
            // console.log(img);
            setimage(img)

        }
        setloading(true)
        get()
        setloading(false)




    }, [change])



    return (
        <div className='Suggestions'>

            <div className='box'>
                <h3>Latest Trends</h3>

                <div className='details'>
                    {loading ? <ClipLoader color='#000000' loading={loading} cssOverride={override} size={30} /> : props.products ? props.products.slice(0,4).map(e => {

                        return (
                            <div className='img'>
                                <img src={e.image} alt="" />
                                <p>{e.title}</p>
                            </div>
                        )
                    }) : ''}
                </div>

                <h3>Popular Suggestions</h3>
                <div>
                    {loading ? <ClipLoader color='#000000' loading={loading} cssOverride={override} size={30} /> : sugg.map(e => {

                        return (
                            <p>
                                {e}
                            </p>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
