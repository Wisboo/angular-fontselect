/* global FONTLIST_ENTRY_TYPE_HEADLINE, FONTLIST_ENTRY_TYPE_FONT, FONTLIST_ENTRY_TYPE_TEXT */
var NAME_JDFONTLIST_ENTRY = 'jdFontlistEntry';
import template from '../partials/fontlist-entry.html';
import { FONTLIST_ENTRY_TYPE_HEADLINE, FONTLIST_ENTRY_TYPE_FONT, FONTLIST_ENTRY_TYPE_TEXT } from './helper.defaults.js';

function jdFontlistEntryDirective () {
  return {
    scope: {
      entry: '=',
      current: '='
    },
    restrict: 'E',
    template: template,
    replace: true,
    link: function($scope) {
      $scope.isHeadline = $scope.entry.type === FONTLIST_ENTRY_TYPE_HEADLINE;
      $scope.isFont = $scope.entry.type === FONTLIST_ENTRY_TYPE_FONT;
      $scope.isText = $scope.entry.type === FONTLIST_ENTRY_TYPE_TEXT;
    }
  };
};
export { jdFontlistEntryDirective, NAME_JDFONTLIST_ENTRY };
