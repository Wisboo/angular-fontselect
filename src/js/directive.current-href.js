/* global NAME_FONTSSERVICE */
import template from '../partials/current-href.html';

function jdFontSelectCurrentHrefDirective (fontsService) {
  return {
    template: template,
    restrict: 'A',
    replace: true,
    controller: ['$scope', function($scope) {
      $scope.urls = fontsService.getImports();
    }]
  };
}
jdFontselectCurrentHref.$inject = [NAME_FONTSSERVICE];
export { jdFontSelectCurrentHrefDirective };
