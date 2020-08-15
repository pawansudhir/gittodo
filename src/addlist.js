import React from 'react';

class Addlist extends React.Component{
    state = {
        id: Math.random(),
        content:null
    }
    handlestate = (e) => {
        this.setState({
         content:e.target.value
        })
        e.preventDefault();
    }

    render(){
        return(
           <div className = "center blue-text">
               
               <form method = "GET" action = "">
               <input type = "text" onChange = {this.handlestate}  placeholder = "Activity" id = "activity"/>
               <input type = "submit" onClick = {(e) => {this.props.handleclickadd(this.state,e)}} value = "add" id = "add" />
               </form>
           </div>
        )
    }
}
export default Addlist;