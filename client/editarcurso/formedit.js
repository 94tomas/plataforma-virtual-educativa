idmate = "";
Template.cursospro.events({ 
    'click a': function(e) { 
         //console.log(e.target.name);
         idmate = e.target.name;
         //Materai.find({idcurso: e.target.nem});
    } 
}); 