idcur = "";
Template.cursos.events({
    'click a' : function(e){
        idcur = e.target.name;
        //console.log(idcur);
    } 
});
Template.preguntas.events({
  "submit form": function(e){
    //console.log(Accounts.user()._id);
    var preguntadatos = {
      id_curso: idcur,
      id_user: Accounts.user()._id,
      fecha: new Date(),
      pregunta: e.target.pregunta.value
    };
    e.target.pregunta.value="";
    e.preventDefault();
    Meteor.call("insertpregunta",preguntadatos, function(err,result){
    });
  }
});