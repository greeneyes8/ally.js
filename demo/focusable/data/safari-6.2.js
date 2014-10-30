define(function defineDemoFocusableSafari6(require) {
  'use strict';

  // The contents of this file have been collected by running focusable/index.html

  return {
    "platform": {
      "description": "Safari 6.2 on OS X 10.8.5",
      "layout": "WebKit",
      "manufacturer": null,
      "name": "Safari",
      "prerelease": null,
      "product": null,
      "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/600.1.17 (KHTML, like Gecko) Version/6.2 Safari/537.85.10",
      "version": "6.2",
      "os": {
        "architecture": 32,
        "family": "OS X",
        "version": "10.8.5"
      }
    },
    "focusable": [
      "BODY",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=radio]",
      "select",
      "textarea",
      "button[type=button]",
      "a[href]",
      "a[href=\"\"]",
      "area[href].upper",
      "area[href].lower",
      "a:has([ismap])",
      "iframe",
      "audio[controls]",
      "video[controls]",
      "embed",
      "keygen",
      "svg a[xlink|href]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "fieldset[tabindex=0][disabled]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tr td a",
      "table tr{collapse} td a{visible}"
    ],
    "focusEvents": [
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=radio]",
      "select",
      "textarea",
      "button[type=button]",
      "input[type=text]",
      "a[href]",
      "a[href=\"\"]",
      "area[href].upper",
      "area[href].lower",
      "a:has([ismap])",
      "iframe",
      "audio[controls]",
      "video[controls]",
      "embed",
      "keygen",
      "svg",
      "svg a[xlink|href]",
      "svg a[xlink|href] text",
      "svg text",
      "svg rect",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "fieldset[tabindex=0][disabled]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tr td a",
      "table tr{collapse} td a{visible}"
    ],
    "focusRedirection": [
      "label[for=\"label-target\"] --- input[type=text]"
    ],
    "noFocusMethod": [],
    "tabOrder": [
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=radio]",
      "select",
      "textarea",
      "button[type=button]",
      "area[href].upper",
      "area[href].lower",
      "iframe",
      "audio[controls]",
      "video[controls]",
      "keygen",
      "svg",
      "svg a[xlink|href] text",
      "svg text",
      "svg rect",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=0]",
      "fieldset[tabindex=0][disabled]"
    ],
    "a11y": {
      "focusable": [
        "BODY",
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=radio]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "a:has([ismap])",
        "iframe",
        "audio[controls]",
        "video[controls]",
        "embed",
        "keygen",
        "svg a[xlink|href]",
        "[contenteditable]:empty",
        "[contenteditable]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tr td a",
        "table tr{collapse} td a{visible}"
      ],
      "tabOrder": null
    },
    "jquery": {
      "focusable": [
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=radio]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "a:has([ismap])",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "table tr td a",
        "table tr{collapse} td a",
        "table tr{collapse} td a{visible}"
      ],
      "tabOrder": null
    }
  };
});