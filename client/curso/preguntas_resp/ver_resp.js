idpregunta = "";
Template.consultas.events({
    'click a' : function(e){
        idpregunta = e.target.name;
        //console.log(idpregunta);
    }
    
});
idcursooo = "";
Template.cursos.events({
    'click a' : function(e){
        idcursooo = e.target.name;
        //console.log(idcur);
    } 
});
Template.cursospro.events({
    'click a' : function(e){
        idcursooo = e.target.name;
        //console.log(idcur);
    } 
});

Template.verResp.helpers({
    MIresp: function() {
        //console.log(idpregunta);
        ///{preg_id: idpregunta}
        return Respuestas.find({curso_id: idcursooo});
    },
    iddeMe: function(){
		//console.log(this.idSource);
		//console.log(this.idSource == Accounts.user()._id);
		return this.user_id == Accounts.user()._id;
	},
    nombre_resp: function(){
		//console.log(this);
		//console.log(Meteor.users.findOne({_id:this.idSource}));
		return Meteor.users.findOne({_id:this.user_id});
	},
    
});

Template.verResp.onCreated(function(){
    //console.log(idpregunta);
    Meteor.subscribe('mirespuesta');
});