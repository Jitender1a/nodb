import React, {Component} from 'react';
import axios from 'axios';

class Api extends Component{
    constructor(){
        super();
        this.state={
            moreMusic:[]
        }
    }

    componentDidMount(){
        axios.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track=drake&api_key=b0feab1f66d5c38fde86a2ce31f31ef4&format=json').then(results=>{
            //console.log(11,results);    
        this.setState({moreMusic:results.data.results.trackmatches.track});
        });
    }


    render(){
       // console.log(this.state.moreMusic)
        return(
            <div>
                {
                this.state.moreMusic.map(track =>{ 
                    return (
                        
                        <div>{track.name}</div>
                    
                    )
                 })
                }
            </div>
        )
    }
    
}
export default Api