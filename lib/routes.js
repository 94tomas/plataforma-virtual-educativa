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
        BlazeLayout.render("main", {content:"sihay",baner:"baner-nav"});    
        BlazeLayout.render("main", {baner:"baner-nav", content:"sihay"});    
    }
});

FlowRouter.route('/curso/',{
    action: function(params, queryParams){
        BlazeLayout.render("main", {content:"vercurso"});  
    }
});
FlowRouter.route('/curso/cursoprofesor',{
    action: function(params, queryParams){
        BlazeLayout.render("main", {content:"addcurso"});   
    }
});

FlowRouter.route('/editarperfil',{
    action: function(params, queryParams){
        BlazeLayout.render("main", {content:"editarperfil", baner:"baner-nav"}),
        $('.modal').modal();    
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