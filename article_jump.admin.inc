<?php
/**
 * @file
 * Article Jump module settings UI.
 */

/**
 * Creates module configuration form.
 */
function article_jump_admin_settings() {
  $form = array();
  $form['display'] = array(
    '#type' => 'fieldset',
    '#title' => t('jQuery Wrapper Settings'),
  );

  // The jquery selector, ie $('.content article').
  $form['display']['article_jump_article_selector'] = array(
    '#type' => 'textfield',
    '#title' => t('Article Jump jQuery Selector'),
    '#description' => t("The jQuery Selectors to use. Separate selectors with commas. Do not include quotes."),
    '#default_value' => variable_get('article_jump_article_selector', ".content article, .content node-teaser"),
  );

  // The Scrolling Speed.
  $form['display']['article_jump_scroll_speed'] = array(
    '#type' => 'textfield',
    '#title' => t('Scroll Speed in Milliseconds'),
    '#description' => t("How many milliseconds to scroll to the next article."),
    '#default_value' => variable_get('article_jump_scroll_speed', '500'),
  );

  return system_settings_form($form);
}
