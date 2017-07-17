Template.chat.onRendered(function(){
	//function test(){
	//	console.log(" "+$("#contenedor").height());
	//}
	//setInterval(test,20);
	$("#contenedor").resizeDiv(function(num){
		$(".rectangle_hidden").animate({scrollTop:num},500);
	});
});
idcanal = "";
Template.tema.events({
    'click a' : function(e){
        idcanal = e.target.name;
        
        //console.log(idcanal);
    } 
});
Template.temaus.events({
    'click a' : function(e){
        idcanal = e.target.name;
        
        //console.log(idcanal);
    } 
});

Template.chat.events({
  "submit form": function(e){
    var chatdatos = {
      idSource: Accounts.user()._id,
      idDestination: idcanal,
      date: new Date(),
      message: e.target.sms.value
    };
    e.target.sms.value="";
    e.preventDefault();
    Meteor.call("insertchat",chatdatos, function(err,result){
    });
    //Curso.insert(datos);
    //e.target.titulo.value = "";
    //e.target.descripcion.value = "";
    //e.target.fecha.value = "";
    //return false;
    //e.preventDefault();
  }
});
