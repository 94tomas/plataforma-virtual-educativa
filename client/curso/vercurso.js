temausid = "";
Template.cursos.events({ 
    'click a': function(e) { 
         console.log(e.target.name);
         temausid = e.target.name;
         //Materai.find({idcurso: e.target.nem});
    } 
}); 

Template.temaus.onCreated(function(){
    id = Meteor.user()._id;
    console.log(id);
    Meteor.subscribe('temauser');
});
Template.temaus.helpers({
    temaus(){
        return Material.find({idcurso: temausid});
    } 
});
