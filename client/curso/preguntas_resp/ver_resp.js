idpregunta = "";
Template.consultas.events({
    'click a' : function(e){
        idpregunta = e.target.name;
        console.log(idpregunta);
    }
    
});
Template.verResp.onCreated(function(){
    console.log(idpregunta);
    Meteor.subscribe('mirespuesta');
});

Template.verResp.helpers({
    MIresp: function() {
        console.log(idpregunta);
        return Respuestas.find({preg_id: idpregunta});
    }
});
