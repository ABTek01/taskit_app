import React, {Component} from 'react'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3000);
    }


    render(){
        const loadTextStyle = {
            color: 'red',
            textAlign: 'center'
        }
        const appTextStyle = {
            color: 'green',
            textAlign: 'center'
        }
        return(
            <div>
                {/* applying conditional rendering to child component */}
                    {
                    this.state.isLoading 
                        ? 
                        <div style = {{border: 'solid 5px black', backgroundColor: "silver"}}>
                            <h1 style = {loadTextStyle}>
                                Application load in progress...
                            </h1>
                        </div>
                        : 
                        <div style = {{border: 'solid 5px black', backgroundColor: "silver"}}>
                            <h1 style = {appTextStyle}>
                                TaskIt
                            </h1>
                        </div>
                    }
            </div>
        )
    }
}
export default Header
