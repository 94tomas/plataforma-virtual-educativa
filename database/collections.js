Curso = new Mongo.Collection("curso");
var CursoSchema = new SimpleSchema({
    titulo: {
        type: String
    },
    descripcion: {
        type: String
    },
    fecha: {
        type: String
    },
    idpro: {
        type: String
    },
    imgcur: {
        type: String
    }
});
Curso.attachSchema(CursoSchema);

imgCurso = new FilesCollection({
    collectionName: 'imgCurso',
    allowClientCode: false,
    storagePath: '/home/arandopuma/edson/seminario/SEMINARIO/file/imgCurso',
    downloadRoute: '/home/arandopuma/edson/seminario/SEMINARIO/file/download',
    permissions: 0755,
    cacheControl: 'public, max-age=3153600'
});