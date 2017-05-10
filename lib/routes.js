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
