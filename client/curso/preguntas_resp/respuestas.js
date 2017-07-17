idpreg = "";
Template.consultas.events({
    'click a' : function(e){
        idpreg = e.target.name;
        //console.log(idpreg);
    } 
});

Template.respuesta.events({
  "submit form": function(e){
    console.log(Accounts.user()._id);
    var respdatos = {
      user_id: Accounts.user()._id,
      preg_id: idpreg,
      fecha: new Date(),
      respuesta: e.target.respuesta.value
    };
    e.target.respuesta.value="";
    e.preventDefault();
    Meteor.call("insertresp",respdatos, function(err,result){
    });
  }
});