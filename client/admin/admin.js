Template.admin.helpers({ 
    lista: function() { 
         return Meteor.users.find();
    }  
}); 
Template.admin.events({
    'click a' : function(e){
        var rol = e.target.name;
        //Roles.addUsersToRoles(rol, ['profesor']);
        if (Roles.userIsInRole(rol, 'profesor')) {
            //console.log(e.target.name);
            Meteor.call("eliminar",rol);
        }
        else{
            Meteor.call("update",rol);
            //return true;
        }
    }
     
});