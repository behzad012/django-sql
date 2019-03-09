
$(function(){ 
	$('#slideDots').on('click','.spanDots',showSlide);
	$(".spanDots").first().click();
	$('ul#flexmenu1 li a:eq(0)').scrollSmooth();
	$('ul#flexmenu1 li a:eq(1)').scrollSmooth();
	$('ul#flexmenu1 li a:eq(2)').scrollSmooth();
	$('ul#flexmenu1 li a:eq(3)').scrollSmooth({
		speed:1500
	});
	$('ul#flexmenu1 li a:eq(4)').scrollSmooth({
		speed:1500
	});
	$('.card').hover(function() {
		$(this ).find('.heading').stop().animate({
			left:'0',
			opacity: '1'
		},200);
	  }, function() {
		$(this ).find('.heading').stop().animate({
			left:'-200px',
			opacity: '0'
		},100);
	  }
	);
	focusInput();
	$('ul#specsid').on('click','li',showSpecs);
	if($(window).width()>767){
		$('ul#specsid li').first().click();
	}
	$('.specs-title').click(accordion);
	if($(window).width()<767){
		$('.specs-title').first().click();
	}
	posAnim61= $('#posAnim61').offset().top+100;
	posAnim71= $('#posAnim71').offset().top+10;
	anim61();
	anim71();
	$('.container-icon').on('click',function(){
		$('.container-icon').toggleClass('change');
		$('.menuContainer').stop(true).slideToggle(500);
	});
	$('.mymenu1 li').on('click',function(){
		if((window).outerWidth<767){
			$('.container-icon').click();
		}
	});
	$('#login').click(modal);
	$('.modalImg').click(modalImg);
});

var posAnim61,posAnim71;
var $wHeight=$(window).height();
$(window).scroll(function() {
	var $scrollTop = $(this).scrollTop();
	var $height=$(window).scrollTop()+$wHeight;
    if($scrollTop >= 200) {
      	anim41();
    } else {
      	anim41End();
    }
	if($height >= posAnim61) {
      	anim61();
    } else {
      	anim61End();
    }
	if($height >= posAnim71) {
      	anim71();
    } else {
      	anim71End();
    }
});
$(window).resize(function(){
	posAnim61= $('#posAnim61').offset().top+100;
	if($(window).width()<768){
		$('.specs').fadeOut(100);
	}else{
		$('.specs').first().fadeIn(400);
	}
	$('footer').outerHeight($('#posAnim71').outerHeight());
});


(function ( $ ) {
	$.fn.scrollSmooth = function(options) {
	 	var option = $.extend({
	 	    target: null,
			speed: 800,
			targetOffset: 50
	 	}, options );
		return this.each(function() {
			$(this).on('click',function() {
				var position;
				if(option.target===null){
					if(this.hash){
						position=$(this.hash).offset().top - option.targetOffset;
					}else{
						position=0;
					}
				}else{
					position=$(option.target).first().offset().top - option.targetOffset;
				}
				$('html, body').animate( {
					scrollTop: position
				}, {
					duration: option.speed,
					easing: 'easeInOutQuart'
				} );
//				return false;
			});
		});
	};
}( jQuery ));
jQuery.extend(jQuery.easing, {
	easeInOutQuart: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f + a;
		}
		return -h / 2 * ((f -= 2) * f * f * f - 2) + a;
	}
});
function focusInput() {
	$('input').focus(function(){
		$(this).addClass('focusInput');
	}).blur(function(){
		$(this).removeClass('focusInput');
	});
}

function showSlide(){
	var index;
	$('.content-slides').fadeOut(100);
	$('.spanDots').removeClass('activeDot');
	index=parseInt($(this).attr('name'));
	$(".content-slides").eq(index).fadeIn(600);
	$(this).addClass('activeDot');
	if(index===0){
		anim11();
	}else if(index===1){
		anim21();
	}else if(index===2){
		anim31();
	}
}

function showSpecs(){
	var target;
	target=$(this).attr('name');
	$('ul#specsid li').css({
		color:'',
		backgroundColor:''
	});
	$(this).css({
		color: '#000',
		backgroundColor:'lightgray'
	});
	$('.specs').fadeOut(100);
	$('.'+target).fadeIn(400);
}
function accordion(){
	$("#specs .specs-title").removeClass("mb-0");
	if($(this).next().css('display')==='block'){
		$('#specs .acc-specs').slideUp(500);
		$(this).toggleClass('addminus');
		return;
	}
	$('#specs .acc-specs').slideUp(500);
	$('#specs .addplus').removeClass("addminus");
	$(this).next().slideDown(500);
	$(this).addClass("addminus");
	$(this).addClass("mb-0");
}
function anim11(){
	$('.imgTitle').stop().css({
		left: '-100%',
		opacity: '0'
	});
	$('.animText').children().css({
		left: '100%',
		opacity: '0'
	});
	$('#imgTitle1').stop().animate({
		left: '0',
		opacity: '1'
	},600);
//	$('#amin11').children().each(function(index) {
//		(function(self, i){
//			$(self).stop().animate({
//				left: '0',
//				opacity: '1'
//			},500*(i+1));
//		}(this, index));
//	});
	$('#amin11').children().each(function(index) {
		$(this).stop().animate({
			left: '0',
			opacity: '1'
		},500*(index+1));
	});
}
function anim21(){
	$('.imgTitle').stop().css({
		left: '-100%',
		opacity: '0'
	});
	$('.animText').children().css({
		left: '100%',
		opacity: '0'
	});
	$('#imgTitle2').stop().animate({
		left: '0',
		opacity: '1'
	},600);
	$('#amin21').children().each(function(index) {
		$(this).stop().animate({
			left: '0',
			opacity: '1'
		},500*(index+1));
	});
}
function anim31(){
	$('.imgTitle').stop().css({
		left: '-100%',
		opacity: '0'
	});
	$('.animText').children().css({
		left: '100%',
		opacity: '0'
	});
	$('#imgTitle3').stop().animate({
		left: '0',
		opacity: '1'
	},600);
	$('#amin31').children().each(function(index) {
		$(this).stop().animate({
			left: '0',
			opacity: '1'
		},500*(index+1));
	});
}

var anim41Tag=true;
function anim41(){
	if(anim41Tag){
		anim41Tag=!anim41Tag;
		$('#amin41').stop().animate({
			left:'0',
			opacity: '1'
		},1000);
		$('#amin42').find(':eq(0)').stop().animate({
			left: '0',
			opacity: '1'
		},1000,function(){
			$('#amin42').find(':eq(1)').stop().animate({
			left: '0',
			opacity: '1'
		},500,function(){
			$('#amin42').find(':eq(2)').stop().animate({
			left: '0',
			opacity: '1'
		},500,function(){
			$('#amin42').find(':eq(3)').stop().animate({
			left: '0',
			opacity: '1'
		},500);
		});
		});
		});
	}
}
function anim41End(){
	if(!anim41Tag){
		anim41Tag=!anim41Tag;
		$('#amin41').stop().css({
			left:'-100%',
			opacity: '.3'
		});
		$('#amin42').find('*').stop().css({
			left: '100%',
			opacity: '.0'
		});
	}
}
var anim61Tag=true;
function anim61(){
	if(anim61Tag){
		anim61Tag=!anim61Tag;
		$('#posAnim61').find('input:eq(0)').stop().animate({
			left: '0',
			opacity: '1'
		},600,function(){
			$('#posAnim61').find('input:eq(1)').stop().animate({
				left: '0',
				opacity: '1'
			},500,function(){
				$('#posAnim61').find('textarea').stop().animate({
					left: '0',
					opacity: '1'
				},400,function(){
					$('#posAnim61').find('input:eq(2)').stop().animate({
					left: '0',
					opacity: '1'
				},400);
				});
			});
		});
	}
}
function anim61End(){
	if(!anim61Tag){
		anim61Tag=!anim61Tag;
		$('#posAnim61').find('input').not().stop().css({
			left: '100%',
			opacity: '0'
		});
		$('#posAnim61').find('textarea').stop().css({
			left: '-100%',
			opacity: '0'
		});
	}
}
var anim71Tag=true;
function anim71(){
	if(anim71Tag){
		anim71Tag=!anim71Tag;
		$('#posAnim71').children().stop().animate({
			top: '0',
			opacity: '1'
		},800);
	}
}
function anim71End(){
	if(!anim71Tag){
		anim71Tag=!anim71Tag;
		$('#posAnim71').children().stop().css({
			top: '100%',
			opacity: '.1'
		});
	}
}

function modal(){
	var $modal=$('.modal-cover');
	var w=( $(window).outerWidth()-$modal.find('.m-content').outerWidth() )/2;
	var h=( $(window).outerHeight()-$modal.find('.m-content').outerHeight() )/2;
	if(w<0){w=0;}
	if(h<0){h=0;}
	$modal.stop().css({
		'display':'block',
		left:'0',
		top:'0',
		width:'40px',
		height:'0'
	}).animate({
		height:'100vh'
	},200).animate({
		width:'100vw',
	},600,showContent);
	function showContent(){
		$modal.find('.m-content').stop().css({
			'display':'block',
			left : w+'px'
		}).animate({
			top : h+'px'
		},400,showInputs);
	}
	function showInputs(){
		$modal.find('div').find('input').not('[type="submit"]').first().stop().css({
			display:'block',
			position:'relative',
			right : '-100%'
		}).animate({
			right : '0'
		},300,function(){
			$modal.find('div').find('input').not('[type="submit"]').eq(1).stop().css({
			display:'block',
			position:'relative',
			right : '-100%'
			}).animate({
				right : '0'
			},300,showbuttons);
		});
	}
	function showbuttons(){
		$modal.find('p').stop().fadeIn();
		$modal.find('div').find('.submit').stop().css({
			display:'inline-block',
			position:'relative',
			left : '-100%'
		}).animate({
			left : '0'
		},300);
	}
	$(document).keyup(function(event) {
		if(event.keyCode === 27) {
			$modal.find('*').stop().removeAttr('style');
			$modal.find('*').not('span,h2,form').stop().fadeOut();
			$modal.stop().fadeOut();
		}
	});
	$('.closeModal').click(function(){
		$modal.find('*').stop().removeAttr('style');
		$modal.find('*').not('span,h2,form').stop().fadeOut();
		$modal.stop().fadeOut();
	});
}

function modalImg(){
	var $self=$(this);
	var cover=$('<div/>').addClass('position-fixed userSelect vw-100 vh-100 text-center overflow-hidden').css({
		top: '0',
		left: '0',
		opacity: '0',
		background: 'rgba(0,0,0,.9)'
	});
	var close=$('<span>+</span>').addClass('closeModalImg');
	$(cover).append(close);
	var contentDiv=$('<div/>').addClass('mt-5 mx-auto p-3').css({
		height: '80%',
		width: '80%'
	});
	var img=$('<img>').addClass('img-fluid').css('object-fit','contain');
	$(img).attr('src',function(){
		return $self.data('modalsrc');
	});
	$(contentDiv).append(img);
	var caption=$('<div/>').addClass('text-white p-3').text(function(){
		return $self.data('modalcaption');
	});
	$(contentDiv).append(caption);
	$(cover).append(contentDiv);
	$('body').append(cover);
	$(cover).animate({
		opacity: '1'
	},400);
	$(cover).click(function(){
		$(this).fadeOut(300);
	});
	$(document).keyup(function(event) {
		if(event.keyCode === 27) {
			$(cover).fadeOut(300);
		}
	});
}



