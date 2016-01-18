/**
@module meumobi-angular-toolkit
@position 0
@description
This is the main angular module of `meumobi-angular-toolkit` framework.
## Usage
Declare it as a dependency for your application:
``` js
angular.module('myApp', ['meumobi-angular-toolkit']);
```
*/
(function() {
	'use strict';

	angular.module('meumobi-angular-toolkit', [
		'meumobi-angular-toolkit.utils',
		'meumobi-angular-toolkit.cordova',
		'meumobi-angular-toolkit.filters'
	]);

}());