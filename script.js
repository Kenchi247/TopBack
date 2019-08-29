$(function(){
	$('#back a').on('click',function(){
		$('body, html').animate({
			scrollTop:0
	},800);
	  return false;
	});
});

$(function(){
	$('.menu-trigger').on('click', function(){
		$(this).toggleClass('active');
		$('#sp-menu').fadeToggle();
		return false;
	});
});

$('#tab-contents .tab[id !="tab1"]').hide();

$('#tab-menu a').on('click', function() {
	$("#tab-contents .tab").hide();
	$("#tab-menu .active").removeClass("active");
	$(this).addClass("active");
	$($(this).attr("href")).show();
	return false;
});
