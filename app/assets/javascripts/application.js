// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require sugar
//= require prefixfree
//= require chosen
//= require bootstrap
//= require bootstrap/tour
//= require bootstrap/lightbox
//= require bootstrap/fileupload
//= require bootstrap/markdown
//= require tagmanager
//= require_tree .

$(function() {
  $("[data-toggle=tooltip]").tooltip();

  $(".chzn-select").chosen();

  $("#mod_tag_names").tagsManager({
    prefilled: $("#mod_tag_names").val(),
    hiddenTagListName: "mod[tags]"
  });

  $("#craft_tag_names").tagsManager({
    prefilled: $("#craft_tag_names").val(),
    hiddenTagListName: "craft[tags]"
  });
})
