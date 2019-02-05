/* global NAME_FONTSSERVICE */
import template from '../partials/font.html';

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
