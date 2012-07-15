(function() {
  // define an array of articles and the current article index
  jQuery(function() {
      my_select = Drupal.settings.artjump.my_selector || ".content article, .content node-teaser";
      my_speed = Drupal.settings.artjump.scroll_speed || '500';
      arts = jQuery(my_select);
      idx = 0;
  });

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
}());
