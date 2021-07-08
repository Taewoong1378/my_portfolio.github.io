$(function(){
	$("#container").addClass("start");
	$("nav li").on("click", function(){
		$("#container").css("max-width", "100%")
		const id=$(this).attr("data-rol");    
		$("nav li").removeClass("on");    
		$(this).addClass("on");    
		$(".content").removeClass("prev this next");     
		$("#" + id).addClass("this").prevAll().addClass("prev");    
		$("#" + id).nextAll().addClass("next");    
	});
	// 로고 클릭 시
	$(".main_page").on("click", function(){
		$("nav li").removeClass("on");
		$(".content").removeClass("prev this next");
	});
	$(".logo_box").on("click", function(){
		$("nav li").removeClass("on");
		$(".content").removeClass("prev this next");
		// $("#container").css("max-width", "1200px");
	});
});