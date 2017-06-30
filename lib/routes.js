FlowRouter.route('/',{
    subscriptions: function(params, queryParams){
        this.register("datos", Meteor.subscribe("datos"));
    },
    action: function(params, queryParams){
        var sihay = "";
        if (Curso.find().count() == 0) {
            sihay = "";
        } else {
            sihay = "cursos";
        }
        //console.log(sihay);
        BlazeLayout.render("main", {baner:"baner-nav", content:"sihay"}); 
        $('.modal').modal();   
    }
});

FlowRouter.route('/curso/',{
    action: function(params, queryParams){
        BlazeLayout.render("main", {content:"vercurso"});    
    }
});

FlowRouter.route('/crear_curso/',{
    
    action: function(params, queryParams){
        BlazeLayout.render("main", {content:"crear"});    
    }
});

FlowRouter.route('/crear_curso/form',{
    action: function(params, queryParams){
        BlazeLayout.render("crear", {registrar:"formcurso"});    
    }
});

FlowRouter.route('/editarperfil',{
    action: function(params, queryParams){
        BlazeLayout.render("main", {content:"editarperfil", baner:"baner-nav", cuadro:"cuadro"})    
    }
});

FlowRouter.route('/admin',{
    subscriptions: function(params, queryParams){
        Meteor.subscribe("mostrar");
    },
    action: function(params, queryParams){
        BlazeLayout.render("main", {content:"admin"});
    }
});
//console.log(Roles.userIsInRole("Wm5EoGp9DHtdW2pFJ", 'admin'));
//if (Accounts.user()._id == "Wm5EoGp9DHtdW2pFJ"){
