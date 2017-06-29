Template.editarperfil.onRendered(function(){
	$("select").material_select();
	$('.modal').modal();
});
Meteor.subscribe('userData');
Template.editarperfil.helpers({

	username : function(){
		return Accounts.user().username;
	},
	email : function(){
		return Accounts.user().emails[0].address
	},

	password : function(){
		return Accounts.user().password;
	},
	profileNombre : function(){
		return Accounts.user().profile.Nombre;
	},
	profileApellido : function(){
		return Accounts.user().profile.Apellido;
	},
	profileCarrera : function(){
		return Accounts.user().profile.Carrera;
	}
});

Template.editarperfil.events({
  'submit form': function(e) {
    e.preventDefault();
    var datos = {
			"username" : e.target.username.value,
			"email" : e.target.email.value,
			"profile" : {
				"Nombre" : e.target.Nombre.value,
				"Apellido" : e.target.Apellido.value,
				"Carrera" : e.target.Carrera.value
					}
				};
    
    console.log(datos);
    Meteor.users.update(Meteor.userId(),{$set: {user: datos}});
    
  }
});			
