Template.editarperfil.onRendered(function(){
	$("select").material_select();
	$('.modal').modal();
});
Meteor.subscribe('userData');
Template.editarperfil.helpers({

	username : function(){
		return Accounts.user().username
	},
	email : function(){
		return Accounts.user().emails[0].address
	},
	profileNombre : function(){
		return Accounts.user().profile.Nombre
	},
	profileApellido : function(){
		return Accounts.user().profile.Apellido
	},
	profileCarrera : function(){
		return Accounts.user().profile.Carrera
	},
	foto : function(){
		return Accounts.user().profile.foto
	}
});
Meteor.subscribe('allUsers');
Template.editarperfil.events({
  'submit form': function(e) {
	  console.log(e.target.img2.placeholder);
    e.preventDefault();
    var nick = {
			"username" : e.target.username.value 	
			};
	   var email={
               "email" : e.target.email.value
	   };
	   var carrera={
               "carrera" : e.target.Carrera.value
	   };
	   var nombre={
               "Nombre" : e.target.Nombre.value
	   };
	   var apellido={
               "Apellido" : e.target.Apellido.value
	   };
	   var foto2={
		   		"img2" : e.target.img2.placeholder
	   };
   Meteor.users.update( { _id: Meteor.userId() }, 
   	{ $set: 
	   	{ 'profile.Nombre': nombre.Nombre,
	   	'profile.Apellido': apellido.Apellido, 
	   	'profile.Carrera': carrera.carrera,
	   	'username': nick.username,
	   	'emails': [ { address: email.email} ],
		'profile.foto':  foto2.img2
		}
	}); 
  }
});		




Template.editarperfil.onCreated(function(){
    this.cargarimg = new ReactiveVar(false);
    Meteor.subscribe('cursoimg');
});
Template.editarperfil.helpers({
    cargarimg: function(){
        return Template.instance().cargarimg.get();
    }
});
idImgCurso = "";
Template.editarperfil.events({ 
    'change #imginput'(e, template){
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            upload = imgCurso.insert({
                file: e.currentTarget.files[0],
                streams: 'dynamic',
                chunkSize: 'dynamic'
            }, false);
            upload.on('start', function(){
                template.cargarimg.set(this);
            });
            upload.on('end', function(error, fileObj){
                idImgCurso = fileObj._id;
                //console.log(idImgCurso);
                if (error){
                    alert(error);
                }
                else{
                    //alert('File "' + fileObj.name + '"carga exitosa')
                }
                template.cargarimg.set(false);
            });
            upload.start();
        }
    }
});
Template.editarperfil.helpers({
    imgDelCurso: function(){
        return imgCurso.findOne({_id: idImgCurso});
    }
});	
