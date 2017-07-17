idcurs = "";
Template.cursos.events({
    'click a' : function(e){
        idcurs = e.target.name;
        //console.log(idcurs);
    } 
});
Template.consultas.onCreated(function(){
    Meteor.subscribe('mipregunta');
});
Template.consultas.helpers({
    MIpregunta: function() {
        return Pregunta.find({id_curso: idcurs});
    },
    nombre_preg: function(){
		//console.log(this);
		//console.log(Meteor.users.findOne({_id:this.idSource}));
		return Meteor.users.findOne({_id:this.id_user});
	},
    idmio: function(){
		//console.log(this.idSource);
		//console.log(this.idSource == Accounts.user()._id);
		return this.id_user == Accounts.user()._id;
	},
});