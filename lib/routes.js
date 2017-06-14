FlowRouter.route('/',{
    action: function(params, queryParams){
        BlazeLayout.render("main", {content:"cursos"});    
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
