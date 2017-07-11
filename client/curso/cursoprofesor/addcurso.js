Template.addcurso.onRendered(function(){
    $('.modal').modal();
});
Template.formmaterial.events({
  "submit form": function(e){
    var datosmat = {
      tema: e.target.tema.value,
      detalle: e.target.detalle.value
    };
    Meteor.call("insertmat",datosmat, function(err,result){
    });
    //Curso.insert(datos);
    //e.target.titulo.value = "";
    //e.target.descripcion.value = "";
    //e.target.fecha.value = "";
    //return false;
  }
});
Template.addcurso.onCreated(function(){
    Meteor.subscribe('datosmat');
});
Template.tema.helpers({
    materiales(){
        return Material.find();
    } 
});