/* global NAME_FONTSSERVICE */
import template from '../partials/current-href.html';
import { NAME_FONTSSERVICE } from './helper.defaults.js';

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
jdFontSelectCurrentHrefDirective.$inject = [NAME_FONTSSERVICE];
export { jdFontSelectCurrentHrefDirective };
