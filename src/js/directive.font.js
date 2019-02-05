/* global NAME_FONTSSERVICE */
import template from '../partials/font.html';
import { NAME_FONTSSERVICE } from './helper.defaults.js';

function jdFontDirective (fontsService) {
  return {
    scope: {
      font: '=',
      current: '='
    },
    template: template,
    restrict: 'E',
    replace: true,
    controller: ['$scope', function($scope) {
      fontsService.load($scope.font);
    }]
  };
}
jdFontDirective.$inject = [NAME_FONTSSERVICE];
export { jdFontDirective };
