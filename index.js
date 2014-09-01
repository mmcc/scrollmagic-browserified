module.exports = function(jQuery, debug) {
  var ScrollMagic = require('./dist/scrollmagic')(jQuery);

  if (debug) {
    require('./dist/debug')(jQuery);
  }

  return ScrollMagic;
};
