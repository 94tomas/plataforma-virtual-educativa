Template.registerForm.onRendered(function(){
	$("select").material_select();
});
Template.registerForm.events({
	"click #return" : function(){
		myTemplates.set("loginForm");
	},
	"click #close" : function(){
		$(".panelForm").css("opacity",0);
	},
	"submit form" : function(e){
		var user = {
			"username" : e.target.username.value,
			"email" : e.target.email.value,
			"password" : e.target.password.value,
			"profile" : {
				"Nombre" : e.target.country.value
				
				},
				"profile" : {
				
				"Apellido" : e.target.country.value
			
				},
				"profile" : {
		
				"Carrera" : e.target.country.value
				}
			};
			
			Accounts.createUser(user, function(e){
				if(e == undefined) {
					$(".panelForm").css("opacity",0);				
			
					Meteor.loginWithPassword(user.username,user.password);	
				}
				
			});
			return false;
	}
})

