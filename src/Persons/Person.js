import React from 'react'; // FOR THE JSX

import classes from './Person.css'

const person = (props) => { //ES6 Style. Advantages when using this keyword

    return (

        <div className={classes.Person}>
            <p onClick={props.click}>I am {props.name} who is {props.age}</p>
            {/*<p>{props.children}</p>*/}
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>

    )

};
export default person;