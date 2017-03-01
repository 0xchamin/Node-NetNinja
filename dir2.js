var fs = require('fs');

fs.mkdir('new-stuff-new', function(err, res){
  if(err){
    console.log('error occured');
    return;
  }
  console.log('directory created');
  fs.readFile('readme.txt','utf-8', function(err, data){
    if(err){
      console.log('File read error');
      return;
    }
    fs.writeFile('./new-stuff-new/myFile.txt', 'New Content for File \n'+data+'\n ===');
  //  console.log('Success !!!');
  });

});


fs.unlink('./new-stuff/temp.txt', function(){
  fs.rmdir('new-stuff', function(err, res){
    if(err){
      console.log('directory remove error !!!');
      return;
    }
    console.log('\n\n SUCCESS !!! \n\n')
  });
});
