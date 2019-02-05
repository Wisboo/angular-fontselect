/* global NAME_FONTSSERVICE */
import { NAME_FONTSSERVICE } from './helper.defaults.js';

export function jdfsCuratedFontsProvider() {
  var curatedFontKeys = [];

  this.setCuratedFontKeys = function (curatedKeys) {
    curatedFontKeys = curatedKeys;
  };

  function getCuratedFontObjects(fonts, curatedFontKeys) {
    return fonts.filter(function(font) {
      return curatedFontKeys.indexOf(font.provider + '.' + font.key) !== -1;
    }).map(function(font) {
      return angular.copy(font);
    });
  }

  this.$get = [NAME_FONTSSERVICE, function jdfsCuratedFontsFactory(fontService) {
    return getCuratedFontObjects(fontService.getAllFonts(), curatedFontKeys);
  }];
};
