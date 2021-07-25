/* eslint-disable react/jsx-pascal-case */
import React, {Component} from 'react'
import TaskComponent from './TaskComponent.js';
// import './App.css';//modules
// import Props from './Props.js'
// import Props_2 from './Props_2.js'
import tasksArray from './tasksArray.js'
import Header from './Header.js'

//React app phase 1
// From scratch, initialize the React app
// Render an <Root /> component
// Create the <Root /> component from scratch
// Have the <Root /> component render 3 or 4 checkboxes with 
//paragraphs or spans next to it
// like you're making a todo list with some hard-coded items on it


/*
React app phase 2
Time to have fun styling! But first things first: 

1. Change the input/p combo below 
to be a new component called <TodoItem />. 
<TodoItem /> (for now) will just have 
the same displayed data below (every todo item is the same) 
hardcoded inside of it. (We'll learn soon how to make 
the TodoItem more flexible)
    
2. Style up the page however you want! 
You're welcome to use regular CSS (in the CSS file) 
or inline styles, or both!
*/


//functional component based
class App extends Component{

      constructor(){
        super()
        this.state = {
          tasks: tasksArray
        }
        this.handleChange = this.handleChange.bind(this)
      }

      handleChange(id){

        //setting new state that changes original state 
        //to return a new array of items turned to their opposites 
        //based on a certain condition
        //then a new object is returned.
        this.setState(prevState =>{
          const updatedTasks = prevState.tasks.map(task =>{
            if(task.id === id){
                return{
                  ...task,
                  completed: !task.completed
                }
            }
            return task
          })
          return {tasks: updatedTasks}
        })
      }

      render(){
        const newTaskArray = this.state.tasks.map(propsTask => 
          <TaskComponent
              //props is passed down here
              key = {propsTask.id}

              //a. pattern
    
              //props is passed down here individually

              // within tasksComponent: this.props.completed
            
              
              // within RootComponent: completed = {propsTask.completed}

              // within RootComponent: id = {propsTask.id}

              //b. pattern
    
              //within tasksComponent: this.props.propsObj.item

              //within RootComponent: propsObj = {propsTask}
              propsObj = {propsTask}



              //method lives within the newly added component.
              handleChange = {this.handleChange}
          />
        )
      return (
        <div>
          <Header/>
          <br/>
          <div className = "todo-list">
                
                {newTaskArray}
                {/* <div>
    
                  can pass down props inline
    
                  <Props
                    data = 'some data'
                  />
                  {props.data}
    
                  can pass down props with object literals
                  
                  <Props_2
                    propsObj = {{data_2: 'Addition props data'}}
                  />
    
                  {props.propsObj.data}
                </div> */}
          </div>
        </div>

      );
      }
}
export default App;//modules














