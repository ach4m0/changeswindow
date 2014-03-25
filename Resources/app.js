(function(){
	// Open MainWindow
	var ChangesWindow = require('/ui/ChangesWindow'),
        WhiteWindow = require('/ui/WhiteWindow');

	if(Ti.App.Properties.getBool('new_installation',true)){
        ChangesWindow().open();
    }else{
        WhiteWindow().open();
    }

})();
