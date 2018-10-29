import React, {Component} from 'react';
import axios from 'axios';

class Artist extends Component{
    constructor(){
        super();
        this.state={
            moreMusic:[]
        }
    }

    componentDidMount(){
        axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=Migos&api_key=b0feab1f66d5c38fde86a2ce31f31ef4&format=json').then(results=>{
            var ten=results.data.results.artistmatches.artist
            var item=ten.splice(0,10)
            this.setState({
                moreMusic:item
            })
        //console.log(11,results);    
        /*this.setState({moreMusic:results.data.results.artistmatches.artist});*/
        });
    }


    render(){
       // console.log(this.state.moreMusic)
        return(
        <div> <h1 style={{margin:'-7%'}}> Group: Migos</h1>
            <div style={{border:'solid', margin:'10%'}}>
                {
                this.state.moreMusic.map(artist =>{ 
                    return (
                        
                        <div>{artist.name}</div>
                        
                    
                    )
                 })
                }
            </div>
        </div>
        )
    }
    
}
export default Artist