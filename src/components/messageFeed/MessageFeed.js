import React from "react";
import DataService from '../components/DataService'


class Messages extends React.Component {
   
      
    constructor(props){
      super(props)
      
        
      
      this.state = {
        
        messeges:[],
        
          
        
         
        
      }
      this.client = new DataService()
    }
    componentDidMount(){
        this.client.getMessages().then(messeges => {
          console.log(messeges)
        })
        
        
      }
    render(){
        return(


        )
    }
}