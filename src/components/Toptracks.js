import React, {Component} from 'react';
import axios from 'axios';

class Toptracks extends Component{
    constructor(){
        super();
        this.state={
            moreMusic:[]
        }
    }

    componentDidMount(){
        axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=b0feab1f66d5c38fde86a2ce31f31ef4&format=json').then(results=>{
            var ten=results.data.tracks.track
            var item=ten.splice(0,10);
            this.setState({
                moreMusic:item
            })
        //console.log(12,results);    
        /*this.setState({moreMusic:results.data.tracks.track});*/
        });
    }


    render(){
       // console.log(this.state.moreMusic)
        return(
        <div> <h1 style={{margin:'5%'}}>Top Tracks</h1>
            <div div style={{border:'solid', margin:'10%'}}>
                {
                this.state.moreMusic.map(track =>{ 
                    return ( 
                        <div> 
                        {track.name} 
                        </div>
                    )
                 })
                }
            </div>
        </div>
        )
    }
    
}
export default Toptracks