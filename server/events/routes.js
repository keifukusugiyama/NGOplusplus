const controller=require('./controller');
module.exports=function(app){
    app
    .get('/api/events', controller.eventAll)
    .post('/api/events', controller.eventNew)
    .get('/api/events/:id', controller.eventDetails)
    .put('/api/events/:id', controller.eventUpdate)
    .delete('/api/events/:id', controller.eventRemove)
}