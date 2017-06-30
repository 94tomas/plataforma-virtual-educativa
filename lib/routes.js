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
        BlazeLayout.render("main", {content:"editarperfil", baner:"baner-nav"}),
        $('.modal').modal();    
    }
});
FlowRouter.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});
