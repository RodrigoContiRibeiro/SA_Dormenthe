"use strict";
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:

$_ready(() => {
  // 2. Inside the $_ready function:
  $_('[data-ui="quick-menu"] [data-action="back"]').remove();

  monogatari.init("#monogatari").then(() => {
    // 3. Inside the init function:
    // This will remove the "Back" button from the quick menu
    monogatari.component("quick-menu").removeButton("Back");
    monogatari.component("quick-menu").removeButton("Quit");
    monogatari.component("quick-menu").removeButton("Save");
    monogatari.component("quick-menu").removeButton("Quit");
    monogatari.component("quick-menu").removeButton("Load");

    // This will disable the left key listener to roll back
    monogatari.unregisterListener("back");
    monogatari.unregisterListener("quit");
    monogatari.unregisterListener("save");
    monogatari.unregisterListener("load");
  });
});
