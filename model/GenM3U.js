
const FolderReader = require("./FolderReader");

class GenM3U {
   constructor(){
     this.folderFiles;
     this.nameList;
     this.listLinksM3U = [];
     this.folderreader = new FolderReader();
   }
   
   setFolderFiles(folderfiles){
      this.folderFiles = folderfiles;
   }

   setNameList(namelist){
      this.nameList = namelist;
   }

   generate(){
     this.folderreader.readFolder();
     let listaarchivos = this.folderreader.getFiles();
     
   }

}

module.exports = GenM3U;