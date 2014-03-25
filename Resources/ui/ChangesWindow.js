function ChangesWindow(){
	var firstColor='#A30000',
		secondColor='#840000',
		textColor='#FFFFFF',
		self = Ti.UI.createWindow({
			backgroundColor: firstColor,
			exitOnClose: true,
			navBarHidden: true
		}),
		//End custom parameters
		WhiteWindow = require('/ui/WhiteWindow'),
		//End requires
		view1 = Ti.UI.createView({
			backgroundColor: 'transparent'
		}),
		text1 = Ti.UI.createLabel({
			color: textColor,
			font: {
				fontSize: 25
			},
			left: 10,
			text: 'Ya puedes ver el detalle de las escuderías',
			top: 30
		}),
		picture1 = Ti.UI.createImageView({
			borderRadius: 20,
			image: '/images/pic1.jpg',
			height: 250
		}),
		view2 = Ti.UI.createView({
			backgroundColor: 'transparent'
		}),
		view3 = Ti.UI.createView({
			backgroundColor: 'transparent'
		}),
		scrollableView = Ti.UI.createScrollableView({
			views: [view1,view2,view3],
			showPagingControl: false
		}),
		endButton = Ti.UI.createButton({
			background: 'transparent',
			bottom: 10,
			color: textColor,
			font: {
				fontSize: 25
			},
			right: 10,
			title: 'Finalizar'
		});

		//Event to endButton
		endButton.addEventListener('click',function(event){
			Ti.App.Properties.setBool('new_installation',false);
			self.close();
			WhiteWindow().open();
		});

		//Adding elements
		view1.add(text1);
		view1.add(picture1);
		view1.add(createNextButton());
		view2.add(createNextButton());
		view2.add(createPreviousButton());
		view3.add(createPreviousButton());
		view3.add(endButton);
		self.add(scrollableView);


		return self;

		function createNextButton(){
			var nextButton = Ti.UI.createButton({
				backgroundColor: 'transparent',
				bottom: 10,
				color: textColor,
				font: {
					fontSize: 25
				},
				right: 10,
				title: 'Siguiente'
			});
			nextButton.addEventListener('click',function(){
				scrollableView.scrollToView(scrollableView.getCurrentPage() + 1);
			});
			return nextButton;
		};
		function createPreviousButton(){
			var previousButton = Ti.UI.createButton({
				backgroundColor: 'transparent',
				bottom: 10,
				color: textColor,
				font: {
					fontSize: 25
				},
				left: 10,
				title: 'Anterior'
			});
			previousButton.addEventListener('click',function(){
				scrollableView.scrollToView(scrollableView.getCurrentPage() - 1);
			});
			return previousButton;
		};
};

module.exports = ChangesWindow;
