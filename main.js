$(function() {
    'use strict';
    var jList = $('div.js-list');
    var boardCounts = jList.map(function(i, e){
        var jNode = $(e);
        var title = jNode.find(".list-header-name").attr("aria-label");
        var small  = jNode.find('.list-card span[title="小"]').size();
        var middle = jNode.find('.list-card span[title="中"]').size();
        var large = jNode.find('.list-card span[title="大"]').size();
        var danger = jNode.find('.list-card span[title="危険"]').size();

        return {
            "title": title,
            "small": small,
            "middle": middle,
            "large": large,
            "danger": danger,
        };
    })

    console.log(boardCounts);

    $("div .header-user").
        prepend("<a class='header-btn header-timeline'><span class='header-btn-icon icon-lg icon-timeline light'>ス</span></a>")
});
