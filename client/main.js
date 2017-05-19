(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    

  }); // end of document ready
})(jQuery); // end of jQuery name space

Template.main.events({
	"click #login" : function(){
		$(".panelForm").css("opacity",1);
	},
	"click #logout" : function(){
		Meteor.logout();
	}
	
})


Template.main.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
});

Template.cursos.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
});

Template.crear.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
});

Template.formcurso.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
});