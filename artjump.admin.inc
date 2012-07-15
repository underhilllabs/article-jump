<?php
/**
 * @file
 * Art Jump module settings UI.
 */

function artjump_admin_settings() {
  $form = array();
  $form['display'] = array(
    '#type' => 'fieldset',
    '#title' => t('jQuery Wrapper Settings'),
  );

  // the artjump jquery selector, ie $('.content article')
  $form['display']['artjump_article_selector'] = array(
    '#type' => 'textfield',
    '#title' => t('Article Jump jQuery Selector'),
    '#default_value' => variable_get('artjump_article_selector', ".content article, .content node-teaser"),
  );

  $form['display']['artjump_pages'] = array(
    '#type' => 'textarea',
    '#title' => t('Pages to Use Article Jump on:'),
    '#default_value' => variable_get('artjump_pages', "<front>"),
  );

  return system_settings_form($form);
}
