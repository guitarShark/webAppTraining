var app = angular.module("ggrApp", []);

app.controller("homeCtrl", function($scope) {
  $scope.data = getData();
  $scope.isPositive = function(item) {
    return item.class == "positive";
  }
  $scope.toggleExpand = function(game) {
    var entry = $("#" + game.Abbr + "Details");
    if(entry.css("display") == "none"){
      entry.css("display", "block");
      entry.css("border", "none");
      entry.parent().find(".collapseIcon").html("-");
      entry.parent().find(".gameHeader").addClass("expanded");
      entry.find(".detail-item").last().addClass("bottom");
    }
    else{
      entry.css("display", "none");
      entry.parent().find(".collapseIcon").html("+");
      entry.parent().find(".gameHeader").removeClass("expanded");
    }
  }
});
