/* jshint unused: false, -W079 */
import 'angular';
import '../less/fontselect.less';
import { jdFontselectConfig, NAME_FONTSSERVICE } from './helper.defaults.js';
import { FontsService } from './service.fonts.js';
import { jdfsCuratedFontsProvider } from './provider.curatedFonts.js';
import './helper.functions.js';
import './helper.google-font-categories.js';
import { startFromFilter } from './filter.start-from.js';
import { stackSeachFilter } from './filter.stack-search.js';
import { hasAllSubsetsFilter } from './filter.has-all-subsets.js';
import { fuzzySearchFilter } from './filter.fuzzy-search.js';
import { jdfsWebFontFactory } from './factory.webfont.js';
import { NAME_JDMETA, jdMetaDirective } from './directive.meta.js';
import { jdFontSelectDirective } from './directive.fontselect.js';
import { jdFontlistDirective, NAME_JDFONTLIST } from './directive.fontlist.js';
import { NAME_JDFONTLIST_ENTRY, jdFontlistEntryDirective } from './directive.fontlist-entry.js';
import { jdFontDirective } from './directive.font.js';
import { jdFontSelectCurrentHrefDirective } from './directive.current-href.js';

var fontselectModule = angular.module('jdFontselect', [])
                              .provider('jdfsCuratedFonts', jdfsCuratedFontsProvider)
                              .factory('jdfsWebFont', jdfsWebFontFactory)
                              .constant('jdFontselectConfig', jdFontselectConfig)
                              .service(NAME_FONTSSERVICE, FontsService)
                              .filter('startFrom', startFromFilter)
                              .filter('stackSearch', stackSeachFilter)
                              .filter('hasAllSubsets', hasAllSubsetsFilter)
                              .filter('fuzzySearch', fuzzySearchFilter)
                              .directive(NAME_JDMETA, jdMetaDirective)
                              .directive('jdFontselect', jdFontSelectDirective)
                              .directive(NAME_JDFONTLIST, jdFontlistDirective)
                              .directive(NAME_JDFONTLIST_ENTRY, jdFontlistEntryDirective)
                              .directive('jdFont', jdFontDirective)
                              .directive('jdFontselectCurrentHref', jdFontSelectCurrentHrefDirective);
