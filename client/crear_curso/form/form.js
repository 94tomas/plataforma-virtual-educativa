Template.formcurso.onCreated(function(){
    this.cargarimg = new ReactiveVar(false);
    Meteor.subscribe('cursoimg');
});
Template.formcurso.helpers({
    cargarimg: function(){
        return Template.instance().cargarimg.get();
    }
});
idImgCurso = "";
Template.formcurso.events({ 
    'change #imginput'(e, template){
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            upload = imgCurso.insert({
                file: e.currentTarget.files[0],
                streams: 'dynamic',
                chunkSize: 'dynamic'
            }, false);
            upload.on('start', function(){
                template.cargarimg.set(this);
            });
            upload.on('end', function(error, fileObj){
                idImgCurso = fileObj._id;
                console.log(idImgCurso);
                if (error){
                    alert(error);
                }
                else{
                    //alert('File "' + fileObj.name + '"carga exitosa')
                }
                template.cargarimg.set(false);
            });
            upload.start();
        }
    }
});
Template.formcurso.helpers({
    imgDelCurso: function(){
        return imgCurso.findOne({_id: idImgCurso});
    }
});