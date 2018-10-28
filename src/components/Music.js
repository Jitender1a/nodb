import React, {Component} from 'react'
import Header from './Header'
import axios from 'axios'
import EditMusic from './EditMusic'

class Music extends Component{
        constructor(){
            super()
            this.state={
                Music:[],
                input:''
                 
            }
            this.handleChange=this.handleChange.bind(this)
            this.addMusic=this.addMusic.bind(this)
            this.deleteMusic=this.deleteMusic.bind(this)
            this.updateMusic=this.updateMusic.bind(this)
            
        }

        componentDidMount(){
            axios.get('/api/music').then(results=>{
                this.setState({Music:results.data})//console.log('movies',results)
            })
        }

        handleChange(e){// works with the value input 
            this.setState({input:e.target.value})
        }
    
        addMusic(){ // add new movies to the list 
            axios.post('/api/music',{name:this.state.input}).then(results =>{
                this.setState({Music:results.data})
            })
        }
         deleteMusic(id){
             axios.delete(`/api/music/${id}`).then(results=>{
                 this.setState({Music:results.data})
             })
         }
         
         updateMusic=(Music)=>{
             this.setState({Music})
         }


    

    
    
    
    

    render(){
            let Music=this.state.Music.map(MusicE=>{
                return (
                    <EditMusic
                    key={MusicE.id}
                    MusicE={MusicE}
                    deleteMusic={this.deleteMusic}
                    updateMusic={this.updateMusic}/>
                )
            })
        
        return(
            <div>
                 <Header/>
            <div>
               <form onSubmit={this.addMusic}>
               <input value={this.state.input} placeholder='Add Songs To Favorites' type='text' onChange={this.handleChange} style={{padding:'1%'}}/>
               <button style={{marginLeft:'1%',background:'white',padding:'10px'}}> Add</button>
               </form>
              </div>
                {Music}
            </div>
        )
    }


}
export default Music 