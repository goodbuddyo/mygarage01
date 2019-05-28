// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage

//= require_tree .


//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require foundation


$(function() {
  $(document).foundation();
});

/*  https://foundation.zurb.com/forum/posts/53729-foundation-method-dont-work-with-webpack */

// Assuming jQuery is loaded as a global $
// See: https://webpack.js.org/plugins/provide-plugin/
// This was the KEY to getting Foundation 6.4 working for me.
Foundation.addToJquery($);

const element = new Reveal($('#element'));
// element.open();
// See: http://foundation.zurb.com/sites/docs/javascript.html


