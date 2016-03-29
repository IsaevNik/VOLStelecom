$(document).ready(function(){
	$(".content").load("main.html");
    $(".main_button").attr("id", "current_page");
    $(".content").attr("id", "main");
});

$(".navigation_item").click(function(){
    $(".navigation_item[id='current_page']").removeAttr("id");
    var page = $("a",this).attr("href");
    var content_id = page.split('.')[0];
    $(".content").attr("id", content_id);
    $(".content").load(page);
    $(this).attr("id", "current_page");
    return false;
});


