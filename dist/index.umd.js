(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.selectFiles = factory());
}(this, (function () { 'use strict';

  /**
   * Creates a virtual file input element (`<input type="file" />`) with options.
   * @param options
   */
  var createInputFile = function (ref) {
    if ( ref === void 0 ) ref = {};
    var accept = ref.accept; if ( accept === void 0 ) accept = '';
    var capture = ref.capture; if ( capture === void 0 ) capture = false;
    var multiple = ref.multiple; if ( multiple === void 0 ) multiple = false;

    var input = document.createElement('input');
    input.type = 'file';
    input.accept = accept;
    input.capture = capture;
    input.multiple = multiple;
    return input;
  };
  /**
   * Virtually creates a file input element (`<input type="file" />`), triggers it
   * and returns selected files.
   *
   * @example
   * selectFiles({ accept: 'image/*', multiple: true }).then(files => {
   *   // ...
   * });
   *
   * @param options
   */


  var selectFiles = function (options) { return new Promise(function (resolve) {
    var input = createInputFile(options);
    input.addEventListener('change', function () { return resolve(input.files || null); });
    setTimeout(function () {
      var event = new MouseEvent('click');
      input.dispatchEvent(event);
    }, 0);
  }); };

  return selectFiles;

})));
//# sourceMappingURL=index.umd.js.map
