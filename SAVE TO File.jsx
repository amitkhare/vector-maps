function saveTxt(s)
{
    var file = new File();
    var fileNew = file.saveDlg("Save new file");
    fileNew.open("w");
    fileNew.write(s);
    fileNew.close();
}



var main = function(){
     var data = "[";
    alert(app.activeDocument.selection.length);        
    if(app.activeDocument.selection.length > 0){

        for(var i = 0; i < app.activeDocument.selection.length; i++){
        
            var path = app.activeDocument.selection[i];
            var bounds = path.geometricBounds;
            var name = path.name;
            var centerX = (path.left + path.width / 2);
            var centerY = (-path.top + path.height / 2) ;
            var centerZ = 0.25;
            var center = centerX + "," + centerY + "," + centerZ;
            var objString = " { 'AI_Name' : '" + name + "', 'BoxBounds' : '" + bounds + "', 'AI_Center': '" + center + "', 'AI_Width': " + path.width + ", 'AI_Height': " + path.height + " }, "; 
            
            data += objString;
        
        }
        
    }
     data += "]";
     
     //alert(data);    
    saveTxt(data);
 }
main();