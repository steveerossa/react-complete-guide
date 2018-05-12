import React, { Component } from 'react';

import cssClasses from './App.css';
import Person from "./Persons/Person";
import ValidationComponent from './Person/Validation';
import CharComponent from './Person/CharComponent';


class App extends Component {
    state = {
        persons: [
            { id: '123', name: 'Max', age: 28 },
            { id: '223', name: 'Manu', age: 29 },
            { id: '323', name: 'Stephanie', age: 41 }
        ],
        otherState: 'OtherValue',
        showPersons: false,
        text: ''
    };

    deletePersonHandler =(personIndex) => {
        //const persons = this.state.persons.splice(); // TO CREATE NEW ARRAY AND NOT JUST POINTER
        const persons = [...this.state.persons]; // SAME AS ABOVE
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        });

    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => person.id === id);
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        // const person = Object.assigh({}, this.state.persons[personIdex]);
        this.setState({
            persons: persons

        });
    };

    togglePersonsHandler = () => {
        const show = this.state.showPersons;
        this.setState({
            showPersons: !show
        });
    };
    handleInput = (event) => {
        this.setState({
            text: event.target.value
        });
    };
    deleteChar =(index) => {
       const textArray = [...this.state.text.split('')];
       textArray.splice(index, 1);
       this.setState({
           text: textArray.join('')
       });


    };
  render() {

      let persons = null;
      let buttonClass = null;
      if (this.state.showPersons) {
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                    return (
                        <Person
                            name= {person.name}
                            age={person.age}
                            click={() => this.deletePersonHandler(index)}
                            changed={(event) => this.nameChangeHandler(event, person.id)}
                            key={person.id} />
                    )
                  })}
              </div>

          );
          buttonClass = cssClasses.Red;
      }

      const assignedClasses = [];
      if (this.state.persons.length <= 2) {
          assignedClasses.push(cssClasses.red);
      }
      if (this.state.persons.length <= 1) {
          assignedClasses.push(cssClasses.bold);
      }

      const chars =  this.state.text.split('').map(
          (char, index) => {
              return (
                  <div className="Validator" key={index}>
                      <CharComponent
                          letter={char}
                          click={() => this.deleteChar(index)}/>
                  </div>
              )
          }
      );

    return (
        <div className={cssClasses.App}>
          <h1>Hi i am a react APP!</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <input onChange={this.handleInput} value={this.state.text}/> &nbsp;
          <button className={buttonClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          { persons }

          <ValidationComponent
              text={this.state.text}/>
          <div >
              { chars }
          </div>
        </div>
        // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Are you still down'))
    );
  }
}

export default App;

const myObj= {
    coolperson :'Michael',
    age: 29,
    favFood: "tacos"
};

Object.entries(myObj).map(([key, value]) => console.log(key, value));
