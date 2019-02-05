import template from '../partials/meta.html';
var NAME_JDMETA = 'jdMeta';

function jdMetaDirective () {
  return {
    restrict: 'E',
    template: template,
    replace: true
  };
};

export { NAME_JDMETA, jdMetaDirective };
