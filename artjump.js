(function() {
// define an array of articles and the current article index
jQuery(function() {
    my_select = Drupal.settings.artjump.my_selector || ".content article, .content node-teaser";
    arts = jQuery(my_select);
    idx = 0;

});

// Bind "n" to scroll window to the next article header
Mousetrap.bind('n', function() {
    idx++;
    if(idx == arts.length) {
        //window.location=jQuery(".pager-next > a")[0].href;
        idx=0;
        // or if h
        // or idx = idx-1
    }
    jQuery('html,body').animate({
        scrollTop:(jQuery(arts[idx]).offset().top - 100)
    }, 500);
});
// Bind "p" to scroll window to the previous article header
Mousetrap.bind('p', function() {
    idx--;
    if(idx < 0) {
        // loop around to end??
        //idx=arts.length-1;
        idx=0;
    }
    jQuery('html,body').animate({
        scrollTop:(jQuery(arts[idx]).offset().top - 100)
    }, 500);
});
}());
