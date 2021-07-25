import React, {Component} from 'react'
import './App.css';

// function TaskComponent(props){
//     const logCheckedTask = () =>{
//         console.log('item completed')
//     }

//     return(
//         <div className="todo-item">
//             <input 
//                 type ='checkbox' 
//                 checked = {props.propsTask.completed}
//                 onChange = {logCheckedTask}
//             />

//             <h1 className = 'heading-color'>

//                 {/* a. pattern*/}

//                 {props.propsTask.task}
//                 {/* propsTask = {propsTask} */}

//                 {/* b. pattern*/}

//                 {/*{props.task}*/}
//                 {/*task = {propsTask.task} */}
//             </h1>

//         </div>
//     )
// }
// export default TaskComponent

/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */

//changing component to a class based component, rendering props
class TaskComponent extends Component{
    //other methods live here

    render(){

        //js & css style objects lives here
        const textStyle = {
            color: 'green',
        }
        const completedStyle = {
            display: 'none'
        }


        return(

            <div className = 'todo-item'>
                {/*this input is passed down props and is allowed to change. */}
                <input 
                    type = 'checkbox'

                    value = 'text'

                    //accesses condition of what ever is completed
                    //component receives props
                    checked = {this.props.propsObj.completed}

                    //applying a method that acts on an objects keyVal/checkboxes.
                    onChange = {
                        //component method receives props
                        ()=> this.props.handleChange(//method performs action on element

                            //component receives props
                            this.props.propsObj.id
                        )
                    }
                />
    
                {/*style change directly on element*/}

                    <input
                        type = 'text'
                        style = {
                            //component receives props; if completed is true apply completed style = none; no text shown
                            this.props.propsObj.completed
                            ? 
                            completedStyle 
                            : 
                            textStyle
                        }
                    />

                    {/* //component receives props */}
                    {/* {this.props.propsTask.text} */}
                    
            </div>
        )
    }
}
export default TaskComponent




