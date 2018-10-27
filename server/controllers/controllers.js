var songs=[
    {
    name:'Add Music',
    id:1
    },
]

var id=2

module.exports={
    getMusic:(req,res)=>{
        res.status(200.).send(songs)
},

 addMusic:(req,res)=>{
     const{name}=req.body
     let newSongs={
         name,
         id
     }
     id+=1
     songs.push(newSongs)
     res.status(200).send(songs)
 },

 deleteMusic:(req,res)=>{
     const{id}=req.params
     let index=songs.findIndex(t=>t.id===+id)
     if(index !==-1){
         songs.splice(index,1)
     }
     res.status(200).send(songs)
 },
 updateMusic:(req,res)=>{
        const{id}=req.params
        const{name}=req.body
        let index=songs.findIndex(t=>t.id===+id)
        if(index !==-1){
            songs[index].name=name
        }
        res.status(200).send(songs)
 },

}

