idmaterial = "";
Template.tema.events({
    'click a' : function(e){
        idmaterial = e.target.name;
        console.log(idmaterial);
    } 
});
Template.temaus.events({
    'click a' : function(e){
        idmaterial = e.target.name;
        console.log(idmaterial);
    } 
});
Template.material.onCreated(function(){
    Meteor.subscribe('materialvideo', idmaterial);
});
Template.material.helpers({
  misvideos (){
    return Material.find({_id: idmaterial});
    //Meteor.subscribe('micurso', Accounts.user()._id);
  }
});