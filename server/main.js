import { Meteor } from 'meteor/meteor';
Meteor.startup(() => {

  //-------------------------
  Meteor.publish('cursoimg', function(){
    return imgCurso.find().cursor;
  })

  Meteor.methods({ 
    "insert": function(datos) { 
       Curso.insert(datos);
       return true;
    },
    "update": function(rol){
      Roles.addUsersToRoles(rol, ['profesor']);
      //Roles.removeUsersFromRoles(rol, ['profesor']);
      return true;
    },
    "eliminar": function(rol){
      Roles.removeUsersFromRoles(rol, ['profesor']);
      return true;
    },
    "insertmat": function(datosmat){
      Material.insert(datosmat);
      return true;
    }
  });
  Meteor.publish('datos', function(){
    return Curso.find();
  });
  Meteor.users.allow({
    update() { return true; }
  });
  Meteor.publish("allUsers", function () {
    return Meteor.users.find({});
  });
  Meteor.publish('mostrar', function(){
    return Meteor.users.find();
  });
  Meteor.publish('datosmat', function() {
    return Material.find();
  });
});
