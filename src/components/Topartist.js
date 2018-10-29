import React, {Component} from 'react';
import axios from 'axios';

class Topartist extends Component{
    constructor(){
        super();
        this.state={
            moreMusic:[]
        }
    }

    componentDidMount(){
        axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=b0feab1f66d5c38fde86a2ce31f31ef4&format=json').then(results=>{
            //console.log(12,results);    
        this.setState({moreMusic:results.data.artists.artist});
        });
    }


    render(){
       // console.log(this.state.moreMusic)
        return(
        <div> <h1 style={{margin:'-7%'}}>Top Artists</h1>
            <div div style={{border:'solid', margin:'10%'}}>
                {
                this.state.moreMusic.map(track =>{ 
                    return (
                        
                        <div>{track.name}</div>
                        
                    
                    )
                 })
                }
            </div>
        </div>
        )
    }
    
}
export default Topartist