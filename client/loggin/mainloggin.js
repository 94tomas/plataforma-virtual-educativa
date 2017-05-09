myTemplates = new ReactiveVar();
myTemplates.set("loginForm");
Template.mainloggin.helpers({
	template : function(){
		return myTemplates.get();
	}
});