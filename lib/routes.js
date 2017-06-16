FlowRouter.route('/',{
    action: function(params, queryParams){
        BlazeLayout.render("main", {content:"cursos",baner:"baner"});    
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
        BlazeLayout.render("main", {content:"editarperfil", baner:"baner-nav", cuadro:"cuadro"}),
        $('.modal').modal();    
    }
});
FlowRouter.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});