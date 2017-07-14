
idmatchat = "";
Template.tema.events({
    'click a' : function(e){
        idmatchat = e.target.name;
        
        console.log(idmatchat);
    } 
});
idmatchat = "";
Template.temaus.events({
    'click a' : function(e){
        idmatchat = e.target.name;
        
        console.log(idmatchat);
    } 
});
Template.chatsms.helpers({
  michat (){
    console.log(CHAT.find());
    return CHAT.find({idDestination: idmatchat});
    //Meteor.subscribe('micurso', Accounts.user()._id);
  },
    idMe: function(){
		console.log(this.idSource);
		console.log(this.idSource == Accounts.user()._id);
		return this.idSource == Accounts.user()._id;
	},
    nombre: function(){
		console.log(this);
		console.log(Meteor.users.findOne({_id:this.idSource}));
		return Meteor.users.findOne({_id:this.idSource});
	}
});
Template.chatsms.onCreated(function(){
    Meteor.subscribe('michatsms');
});
Template.chatsms.onRendered(function() {
	$(".contenedor_chat").resizeDiv(function(num){
		$(".rectangle_hidden_client").animate({scrollTop:num},500);
	});
});
