(function(){
    //Global var with version
    version = '0.2';
	// Open MainWindow
	var ChangesWindow = require('/ui/ChangesWindow'),
        WhiteWindow = require('/ui/WhiteWindow');

	if(Ti.App.Properties.getString('version',0) == version){
        WhiteWindow().open();
    }else{
        ChangesWindow().open();
    }

})();
