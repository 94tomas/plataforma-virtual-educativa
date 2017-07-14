Template.addcurso.onRendered(function(){
    $('.modal').modal();
});
variable = "";
Template.cursospro.events({
    'click a' : function(e){
        variable = e.target.name;
        console.log(variable);
    } 
});

Template.formmaterial.events({
  "submit form": function(e){
    var datosmat = {
      tema: e.target.tema.value,
      detalle: e.target.detalle.value,
      idcurso: variable,
      iduspro: Accounts.user()._id,
      linkvideo: e.target.video.placeholder,
      files: e.target.file.placeholder
    };
    Meteor.call("insertmat",datosmat, function(err,result){
    });
  }
});
id = "";
Template.tema.onCreated(function(){
    id = Meteor.user()._id;
    console.log(id);
    Meteor.subscribe('materialdatos', id);
});
Template.tema.helpers({
    materiales(){
        return Material.find({iduspro: id});
    }
});