function toggleExpand(id){
  var entry = $("#" +id);
  if(entry.css("display") == "none"){
    entry.css("display", "block");
    entry.parent().find(".collapseIcon").html("-");
    entry.parent().find(".gameHeader").addClass("expanded");
  }
  else{
    entry.css("display", "none");
    entry.parent().find(".collapseIcon").html("+");
    entry.parent().find(".gameHeader").removeClass("expanded");
  }
}
