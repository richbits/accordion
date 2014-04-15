(function() {
  $(document).ready(function() {
    $("#cat_selection").liteAccordion({
      firstSlide: $('div#cat_selection>ol li').length,
      containerWidth: 300,
      containerHeight: 32,
      headerWidth: 30,
      activateOn: "mouseover"
    });
   
  });

}).call(this);
