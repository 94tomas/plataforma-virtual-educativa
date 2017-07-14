Template.formmaterial.onCreated(function(){
    this.cargarimg = new ReactiveVar(false);
    Meteor.subscribe('cursoimg');
});
Template.formmaterial.helpers({
    cargarimg: function(){
        return Template.instance().cargarimg.get();
    }
});
idImgCurso = "";
Template.formmaterial.events({ 
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
                //console.log(idImgCurso);
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
Template.formmaterial.helpers({
    imgDelCurso: function(){
        return imgCurso.findOne({_id: idImgCurso});
    }
});








Template.files.onCreated(function(){
    this.cargarfile = new ReactiveVar(false);
    Meteor.subscribe('cursoimg');
});
Template.files.helpers({
    cargarfile: function(){
        return Template.instance().cargarfile.get();
    }
});
idfile = "";
Template.files.events({ 
    'change #imginput'(e, template){
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            upload = imgCurso.insert({
                file: e.currentTarget.files[0],
                streams: 'dynamic',
                chunkSize: 'dynamic'
            }, false);
            upload.on('start', function(){
                template.cargarfile.set(this);
            });
            upload.on('end', function(error, fileObj){
                idfile = fileObj._id;
                //console.log(idfile);
                if (error){
                    alert(error);
                }
                else{
                    //alert('File "' + fileObj.name + '"carga exitosa')
                }
                template.cargarfile.set(false);
            });
            upload.start();
        }
    }
});
Template.files.helpers({
    imgDelCurso: function(){
        return imgCurso.findOne({_id: idfile});
    }
});