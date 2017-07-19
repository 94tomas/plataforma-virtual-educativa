Curso = new Mongo.Collection("curso");
Material = new Mongo.Collection("material");
CHAT = new  Mongo.Collection("chat");
Pregunta = new Mongo.Collection("pregunta");
Respuestas = new Mongo.Collection("respuestas");
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

var PreguntaSchema = new SimpleSchema({
    id_curso: {
        type: String
    },
    id_user: {
        type: String
    },
    fecha: {
        type: Date
    },
    pregunta: {
        type: String
    }
});
Pregunta.attachSchema(PreguntaSchema);

var RespuestasSchema = new SimpleSchema({
    user_id: {
		type:String
	},
	preg_id: {
		type:String
	},
    curso_id: {
		type:String
	},
	fecha: {
		type:Date
	},
	respuesta: {
		type:String
	}
});
Respuestas.attachSchema(RespuestasSchema);

imgCurso = new FilesCollection({
    collectionName: 'imgCurso',
    allowClientCode: false,
    storagePath: '/home/arandopuma/edson/seminario/SEMINARIO/file/imgCurso',
    //downloadRoute: '/home/arandopuma/edson/seminario/SEMINARIO/file/download',
    permissions: 0755,
    cacheControl: 'public, max-age=3153600'
});
