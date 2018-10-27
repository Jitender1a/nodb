import React, {Component} from 'react'
import axios from 'axios'

class EditMusic extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            showEdit:false
        }
        this.handleNameChange=this.handleNameChange.bind(this)
    }

    componentDidMount(){
        this.setState({name:this.props.MusicE.name})
    }

    handleNameChange(e){
        this.setState({name:e.target.value})
    }

    handleEdit=()=>{
        axios.put(`/api/music/${this.props.MusicE.id}`,{name:this.state.name}).then(results=>{
            this.props.updateMusic(results.data)
            this.showEdit()
        })
    }

    showEdit=()=>{
        this.setState({showEdit: !this.state.showEdit})
    }
   

    render(){
        return(
            <div>
                { 
                    this.state.showEdit ?
                    (
                        <div>
                          <input value={this.state.name} type='text' onChange={this.handleNameChange}/>
                          <br/>
                          <br/>
                          <button onClick={this.handleEdit}>Update</button>
                          <button onClick={this.showEdit}>Cancel</button>
                        </div>
                    ):
                    (
                    <div>
                      <p>{this.props.MusicE.name}</p>
                      <button onClick={this.showEdit}>Edit</button>
                      <button onClick={()=>this.props.deleteMusic(this.props.MusicE.id)}>Delete</button>
                   </div>
                    )
                }
            </div>
        )
    }
}
export default EditMusic
