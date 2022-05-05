import React from 'react'

const Rating = ({children}) => { 

    let value = Math.round(children)
    let stars = value

    if (value === 0){
        stars = <h6>☆☆☆☆☆</h6>
    }
    if (value === 1){
        stars = <h5>★☆☆☆☆</h5>
    }
    if (value === 2){
        stars = <h4>★★☆☆☆</h4>
    }
    if (value === 3){
        stars = <h3>★★★☆☆</h3>
    }
    if (value === 4){
        stars = <h2>★★★★☆</h2>
    }
    if (value === 5){
        stars = <h1>★★★★★</h1>
    }


    return (
        <div className="card">
           {stars}
        </div>

    )
}
// let wholeNum = Math.round(props.children)
// let fullStar = '★';
// let emptyStar = '☆';

// let stars = fullStar.repeat(wholeNum);
//stars += emptyStar.repeat(5- wholeNum)








export default Rating