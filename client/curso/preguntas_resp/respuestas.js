idpreg = "";
Template.consultas.events({
    'click a' : function(e){
        idpreg = e.target.name;
        //console.log(idpreg);
    } 
});
idcurs = "";
Template.cursos.events({
    'click a' : function(e){
        idcurs = e.target.name;
        //console.log(idcur);
    } 
});
Template.cursospro.events({
    'click a' : function(e){
        idcurs = e.target.name;
        //console.log(idcur);
    } 
});
Template.respuesta.events({
  "submit form": function(e){
    //console.log(idpreg);
    var respdatos = {
      user_id: Accounts.user()._id,
      preg_id: idpreg,
      curso_id: idcurs,
      fecha: new Date(),
      respuesta: e.target.respuesta.value
    };
    e.target.respuesta.value="";
    e.preventDefault();
    Meteor.call("insertresp",respdatos, function(err,result){
    });
  }
});