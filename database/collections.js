Curso = new Mongo.Collection("curso");
Material = new Mongo.Collection("material");
CHAT = new  Mongo.Collection("chat");
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

var chatSchema = new SimpleSchema({
	idSource: {
		type:String
	},
	idDestination: {
		type:String
	},
	date: {
		type:Date
	},
	message: {
		type:String
	}
});
CHAT.attachSchema(chatSchema)

var MaterialSchema = new SimpleSchema({
    tema: {
        type: String
    },
    detalle: {
        type: String
    },
    idcurso: {
        type: String
    },
    iduspro: {
        type: String
    },
    linkvideo: {
        type: String
    },
    files: {
        type: String
    }
});
Material.attachSchema(MaterialSchema);


imgCurso = new FilesCollection({
    collectionName: 'imgCurso',
    allowClientCode: false,
    storagePath: '/home/arandopuma/edson/seminario/SEMINARIO/file/imgCurso',
    downloadRoute: '/home/arandopuma/edson/seminario/SEMINARIO/file/download',
    permissions: 0755,
    cacheControl: 'public, max-age=3153600'
});
