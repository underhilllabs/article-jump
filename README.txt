============================
Article Jump
============================

About this module
-----------------

Drupal module to add jQuery functiontionality to scroll from one article to the
next via a hotkey. For instance you can scroll down through a stream of node
teasers by pressing "n" several times. Then scroll back to the previous article
by pressing "p".

The jQuery selector is configurable, so if you have a stream of feed items, you
can add a selector of ".content .feed-items" and users will be able to navigate
that stream by pressing "n" and "p" as well.

Requirements
-------------

This module requires the libraries module and Mousetrap.js, a javascript
library.

Installation
------------

1. Create a libraries directory at: sites/all/libraries/
2. Download and enable http://drupal.org/project/libraries
3. Download Mousetrap.js into sites/all/library/moustrap/
https://raw.github.com/ccampbell/mousetrap/master/mousetrap.min.js
4. Download and enable Article Jump.

Configuration
-------------

On the module's configuration page you can configure the jQuery selectors that 
will be used as the article jumping anchors.
