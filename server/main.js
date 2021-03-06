import { Meteor } from 'meteor/meteor';
Meteor.startup(() => {

  //-------------multimedia------------
  Meteor.publish('cursoimg', function(){
    return imgCurso.find().cursor;
  }),
//---------------/multimedia-------------
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
    },
    "insertchat": function(chatdatos){
      CHAT.insert(chatdatos);
      return true;
    },
    "insertpregunta": function(preguntadatos){
      Pregunta.insert(preguntadatos);
      return true;
    },
    "insertresp": function(respdatos){
      Respuestas.insert(respdatos);
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
  //-------------------------------------------------------------
  Meteor.publishComposite("materialdatos", function(IDPRO){
    return {
      find: function (){
        return Material.find({iduspro: IDPRO});
      },
      children: [{
        find: function(Curso){
          return Meteor.users.find({_id: Curso.idpro});
        }
      },
      {
        find: function(Material){
          return Meteor.users.find({_id: Material.iduspro});
        }
      }]
    }
  });
  //----------------------------------------
  Meteor.publish('temauser', function() {
    return Material.find();
  });
  
  Meteor.publish('materialvideo', function(videoid) {
    return Material.find({_id: videoid});
  });

  /*Meteor.publishComposite("getMSN",function(idUs,idMe){
		return {
			find(){
				return CHAT.find(
					{$or:
						[
							{idSource:idMe,idDestination:idUs},
							{idSource:idUs,idDestination:idMe}
							]});
			},
			children:[
				{
					find(chat){
						return Meteor.users.find({_id:chat.idSource});
					}
					
				},
				{
					find(chat){
						return Meteor.users.find({_id:chat.idDestination});
						
					}
				}
			]
		}
	});*/
  Meteor.publish('michatsms', function() {
    return CHAT.find();
  });
  Meteor.publish('mipregunta', function() {
    return Pregunta.find();
  });
  Meteor.publish('mirespuesta', function() {
    return Respuestas.find();
  });
});
