angular.module('article').
	component('article', {
		bindings: { 
			article: '<',
			abstract: '<',
		}, // one way binding with resolve
		templateUrl: 'components/blog/article/article-template.html',
		controller: function($window, MonthsFullNameService, $timeout){
			var that = this;
			this.goBack = function(){
				$window.history.back();					
			}	
			this.getDate = function(x){
				var mo = '' + /[a-zA-Z]+/.exec(x);
				var yr = '' + /^[0-9]+/.exec(x);
				return MonthsFullNameService[mo] + ' ' + yr;
			}
			angular.element( function(){ // equivalenet to document ready
				document.querySelectorAll('.article-abstract')[0].style.cssText += 'max-height: 10000px';	
			});			
		}
});