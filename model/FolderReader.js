
const fs = require('fs');

class FolderReader{
   constructor(){
      this.folder = "";
      this.files = [];
   }
   
   setFolder(folder){
     this.folder = folder;
   }

   readFolder(){
    fs.readdir(this.folder, function (err, archivos) {
        if (err) {
            onError(err);
            return;
        }   
        this.files = archivos;
    });
   }

   getFiles(){
     return this.files;
   }

}

module.exports = FolderReader;