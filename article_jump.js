/**
 * @file
 * Attaches behaviors for the Article Jump module.
 */

Drupal.behaviors.article_jump = {
    attach: function(context, settings) {
      my_select = Drupal.settings.article_jump.my_selector;
      my_speed = Drupal.settings.article_jump.scroll_speed;
      arts = jQuery(my_select);
      idx = -1;

      // Bind "n" to scroll window to the next article header
      Mousetrap.bind("n", function() {
          idx++;
          if(idx == arts.length) {
              idx=0;
          }
          jQuery('html,body').animate({
              scrollTop:(jQuery(arts[idx]).offset().top - 100)
          }, my_speed);
      });

      // Bind "p" to scroll window to the previous article header
      Mousetrap.bind("p", function() {
          idx--;
          if(idx < 0) {
              idx=0;
          }
          jQuery('html,body').animate({
              scrollTop:(jQuery(arts[idx]).offset().top - 100)
          }, my_speed);
      });
    }
};
