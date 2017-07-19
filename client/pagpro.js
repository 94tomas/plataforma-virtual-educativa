Template.cursospro.helpers({
  miscreaciones (){
    return Curso.find({idpro: Accounts.user()._id});
    //Meteor.subscribe('micurso', Accounts.user()._id);
  }
});
Template.cursospro.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
});