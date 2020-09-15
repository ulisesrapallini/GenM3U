const GenM3U = require("../model/GenM3U");

let generador = new GenM3U();
generador.setFolderFiles("./peliculas");
generador.generate();