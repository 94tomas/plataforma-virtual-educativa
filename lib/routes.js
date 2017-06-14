FlowRouter.route('/',{
    action: function(params, queryParams){
        var sihay = "";
        if (Curso.find().count() == 0) {
            sihay = "";
        } else {
            sihay = "cursos";
        }
        console.log(sihay);
        BlazeLayout.render("main", {content:"sihay"});    
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
