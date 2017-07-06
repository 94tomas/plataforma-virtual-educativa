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
    }
});
Curso.attachSchema(CursoSchema);

