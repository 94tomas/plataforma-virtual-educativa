 
idpregunta = new ReactiveVar();
Template.consultas.events({
    'click a' : function(e){
        idpregunta.set(e.target.name);
        console.log(idpregunta);
    }
    
});
Template.verResp.onCreated(function(){
    Meteor.subscribe('mirespuesta');
});

Template.verResp.helpers({
    MIresp: function() {
        return Respuestas.find({preg_id: idpregunta.get()});
    },
    nombreresp: function(){
		//console.log(this);
		//console.log(Meteor.users.findOne({_id:this.idSource}));
		return Meteor.users.findOne({_id:this.user_id});
	}
});