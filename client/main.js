(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    

  }); // end of document ready
})(jQuery); // end of jQuery name space

Template.main.helpers({
  username : function(){
    return Accounts.user().username;
  },
  ready: function(){
    return FlowRouter.subsReady("datos");
  },
  elcurso: function(){
    return Curso.find();
  }
});
/*
Template.cursos.onRendered(function() { 
   console.log(Accounts.user()._id) 
   Meteor.subscribe('micurso', Accounts.user()._id);
   console.log(Meteor.subscribe('micurso', Accounts.user()._id));
});
*/
Template.cursospro.helpers({
  miscreaciones (){
    return Curso.find({idpro: Accounts.user()._id});
    //Meteor.subscribe('micurso', Accounts.user()._id);
  }
});

Template.main.events({

	"click #logout" : function(){
		Meteor.logout();
	}
	
});


Template.main.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal').modal();
});

Template.cursos.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
});

Template.crear.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal').modal();
});

Template.cursospro.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
});


Template.main.helpers({
	fotoperfil : function(){
		return Accounts.user().profile.foto
	}
});