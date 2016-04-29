var main = function(){
	$('.equipment_list_item').click(function(){
			$(".arrow",this).toggleClass("arrow_up");
			$(".title",this).toggleClass("current_equipment_list_item");
			$(".equipment_items",this).slideToggle(400);
	});
}
$(document).ready(main);