const Events=require('./models');
module.exports={
    eventAll: (req, res)=>Events
        .find().then(all=>console.log(all) || res.json(all))
        .catch(err=>console.log(err)|| res.json(err)),
    eventNew: (req, res) => {
        console.log("entered event controller", req.body);
        Events
        .create(req.body)
        .then(anew=>console.log("created in controller",anew)|| res.json(anew))
        .catch(err=>console.log(err) || res.json(err))
    },
    messageNew:(req,res)=>{
        Events.findByIdAndUpdate(req.params.id, {$push:{messages:req.body}})
            .then(event=>res.json(event))
            .catch(err=>res.json(err))
    },
    eventRemove: (req, res) => Events
        .findByIdAndDelete(req.params.id)
        .then(deleted=>console.log("deleted") ||res.json(deleted))
        .catch(err=>console.log(err) || res.json(err)),
    eventDetails:(req, res) => Events
        .findById(req.params.id).then(one=>console.log(one) || res.json(one))
        .catch(err=>console.log(err) || res.json(err)),
    eventUpdate: (req, res) => Events
        .findByIdAndUpdate(req.params.id,req.body,{new: true, runValidators:true})
        .then(updated =>console.log("updated",updated)||res.json(updated))
        .catch(err=>console.log(err) || res.json(err)),
}