/**
 * @file
 * Custom javascript for the One-Page Navigation module.
 */

(function($) {
  Backdrop.behaviors.onePageNav = {
    attach: function(context, settings) {

      $(Backdrop.settings.onePageNav.selector).onePageNav({
      	currentClass: Backdrop.settings.onePageNav.currentClass,
      	changeHash: Backdrop.settings.onePageNav.changeHash,
      	scrollSpeed: Backdrop.settings.onePageNav.scrollSpeed,
      	scrollThreshold: Backdrop.settings.onePageNav.scrollThreshold,
      	filter: Backdrop.settings.onePageNav.filter,
      });

    }
  };
})(jQuery);
