import { Meteor } from 'meteor/meteor';
import { publishComposite } from 'meteor/reywood:publish-composite';

Meteor.startup(() => {
  // code to run on server at startup


  //-------------
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
});
