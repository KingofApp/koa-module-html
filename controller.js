(function () {
  'use strict';

  angular
    .module('html', [])
    .controller('HtmlController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location', '$translate'];

  function loadFunction($scope, structureService, $location, $translate) {
    //Register upper level modules
    structureService.registerModule($location, $scope, 'html', $translate.use());
    var lang = $translate.use().replace('_', '-');
    var config = $scope.html.modulescope;

    if (config.useTranslate) {
      $scope.code = $scope.html.modulescopeLang[lang].valueLang;
      $scope.scriptCode = $scope.html.modulescopeLang[lang].scriptCodeLang;
    } else {
      $scope.code = $scope.html.modulescope.value;
      $scope.scriptCode = config.scriptCode;
    }
    
    $scope.styleCode = config.styleCode;
    

  }
}());
