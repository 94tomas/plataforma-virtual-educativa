Template.formcurso.events({
  "submit form": function(e){
    console.log(e.target.img.placeholder);
    var datos = {
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
      fecha: e.target.fecha.value,
      idpro: Accounts.user()._id,
      imgcur: e.target.img.placeholder
    };
    Meteor.call("insert",datos, function(err,result){
    });
    //Curso.insert(datos);
    //e.target.titulo.value = "";
    //e.target.descripcion.value = "";
    //e.target.fecha.value = "";
    //return false;
  }
});