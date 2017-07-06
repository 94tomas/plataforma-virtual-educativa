Template.addcurso.helpers({
  videoFile() {
    return Videos.findOne();
  }
});
Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

