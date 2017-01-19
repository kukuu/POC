$(function(){

	$('.accordion-header label').on('click', function(e){
		e.stopPropagation();

		


	});

	$('.accordion-header input').on('change', function(e){
		var $this = $(this),
				header = $this.closest('[data-target]'),
				target = header.data('target');

			

		if($this.is(':checked')){
			$(target).collapse('show');
		} else {
			$(target).collapse('hide');
		}
	});


});;
function detectCSSFeature(featurename){
    var feature = false,
    domPrefixes = 'Webkit Moz ms O'.split(' '),
    elm = document.createElement('div'),
    featurenameCapital = null;

    featurename = featurename.toLowerCase();

    if( elm.style[featurename] !== undefined ) { feature = true; } 

    if( feature === false ) {
        featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);
        for( var i = 0; i < domPrefixes.length; i++ ) {
            if( elm.style[domPrefixes[i] + featurenameCapital ] !== undefined ) {
              feature = true;
              break;
            }
        }
    }
    return feature; 
}

var hasCssTransitionSupport = detectCSSFeature("transition");

$(function(){

	if(!detectCSSFeature('animation')){

        if($('.global-alert').css('animation') === 'none'){
            return;
        }

		$('.global-alert').animate({ opacity: 1 }, 500);

		setTimeout(function(){
			$('.global-alert').animate({ opacity: 1 }, 500, function(){
				$(this).remove();	
			});			
		}, 4000);
	} else {
		$('.global-alert').on('animationend webkitanimationEnd oanimationEnd oanimationend', function(){
			$(this).remove();
		});
	}
	
});;
$(function(){
	$('button[data-href]').click(function(e){
		window.location.href = e.target.dataset.href;
	});
});;
$('.concept-name.jp, .code-name').hide();

$('.button-controls').on('click', '[data-action="addJP"]', function(e){
	var btn = $(e.target);
	btn.attr('data-action', 'hideJP');
	btn.addClass('danger');
	$('.concept-name.jp').show();

	// need to handle language
	btn.text('Remove Japanese Concept Name');
});

$('.button-controls').on('click', '[data-action="hideJP"]', function(e){
	var btn = $(e.target);
	btn.attr('data-action', 'addJP');
	btn.removeClass('danger');
	$('.concept-name.jp').hide();

	// need to handle language
	btn.text('Add Japanese Concept Name');
});

$('.button-controls').on('click', '[data-action="addCN"]', function(e){
	var btn = $(e.target);
	btn.attr('data-action', 'hideCN');
	btn.addClass('danger');
	$('.code-name').show();

	// need to handle language
	btn.text('Remove Codename');
});

$('.button-controls').on('click', '[data-action="hideCN"]', function(e){
	var btn = $(e.target);
	btn.attr('data-action', 'addCN');
	btn.removeClass('danger');
	$('.code-name').hide();

	// need to handle language
	btn.text('Add Codename');
});;
$(function(){

	$('.concept-search-filters, .search-box .close-btn').hide();

	$('.search-results').on('focus', function(){
		$('.concept-search-filters').slideDown();
		$('.search-box .close-btn').show();
	});

	$('.search-box .close-btn').on('click', function(e){
		e.preventDefault();
		$('.concept-search-filters').slideUp();
		$(this).hide();
	});

	$('.search-results').on('keyup', function(e){

		if(e.target.value.length === 5 ){
			// $('.filter-update').show().siblings('.result-label').hide();
			$('.tab-pane.active').addClass('loading');

			setTimeout(function(){
				// $('.filter-update').hide().siblings('.result-label').show();
				$('.tab-pane.active').removeClass('loading');				
			}, 2500);
		}

	});

	$('.dropdown-filters').on('click',function(e){
 		e.stopImmediatePropagation();
	
	});
	$('.filter-btn').on('click',function(e){
		e.preventDefault();
		$(this).closest('.dropdown-menu').addClass('processing');

		setTimeout(function(){
				// $('.filter-update').hide().siblings('.result-label').show();
				$('.dropdown-menu').removeClass('processing');				
			}, 2500);
	});

	$('.dropdown-filters .label').on('click', function(e){
		$(this).toggleClass( 'label-active' );
		var dd = $(this).closest('.dropdown');
		var active = dd.find('.label-active').length;
		dd.find('.filters .badge').text(active); 

	});


});
;
$(function(){

	// drop file events

	$('.dropzone').on('dragover', function(e){
		e.preventDefault();

		if($(this).hasClass('disabled')){
			return;
		}
		$(this).addClass('drop');
	});

	$('.dropzone').on('dragleave', function(e){
		e.preventDefault();

		if($(this).hasClass('disabled')){
			return;
		}
		$(this).removeClass('drop');
	});

	$('.dropzone').on('drop', function(e){
		e.preventDefault();

		if($(this).hasClass('disabled')){
			return;
		}

		if($(this).hasClass('empty')){
			$(this).find('i, span').hide();
		}
		$(this).removeClass('drop empty');
		$(this).append('<div class="btn btn-download processing"><span class="fa fa-file-text-o" aria-hidden="true"></span><button class="fa fa-close btn-close"></button><ul><li>File-name.pdf</li><li>5000.21 kb</li></ul><i class="fa fa-circle-o-notch fa-spin progress-icon"></i></div>');

		setTimeout(function(){
			$('.processing').removeClass('processing');
		}, 1000);
	});

	// stop clicks on the uploaded files fom showing the file picker
	$('.dropzone').on('click', '.btn-download', function(e){
		e.stopImmediatePropagation();
	});

	$('.dropzone').on('click', '.btn-remove', function(e){
		e.stopImmediatePropagation();
		$dz = $(this).closest('.dropzone');
		$dz.find('.btn-download').remove();
		$dz.find('i').show();
		$dz.find('span').css({display: 'block'});
		$dz.addClass('empty');
		
	});

	// Remove a selected file
	$('.dropzone').on('click', '.btn-close', function(e){
		e.stopImmediatePropagation();
		e.preventDefault();
		var $this = $(this),
				$dz = $this.closest('.dropzone'),
				$file = $this.closest('.btn-download');

		$file.remove();

		if(!$dz.find('.btn-download').length){
			$dz.find('i').show();
			$dz.find('span').css({display: 'block'});
			$dz.addClass('empty');
			
		}

	});

	// show filepicker on click
	$('.dropzone').on('click', function(e){

		if($(this).hasClass('disabled')){
			return;
		}
		
		var $target = $(this),
				input = $target.data('input');

		$(input).click();

	});
});;
$(function(){
	if(window.location.pathname !== '/dist/pages/en/concept-detail_edit-platform.html'){
		$('.well').hide();

		$('[data-action="edit-section"]').click(function(e){
			e.preventDefault();
			$(e.target).hide();
			$row = $(this).next('.row');
			$row.find('table').hide();
			$row.find('.well').show();
		});


		$('.well .footer button').click(function(e){
			e.preventDefault();
			$row = $(this).closest('.row');
			$row.find('table').show();
			$row.find('.well').hide();

			$row.prev('[data-action="edit-section"]').show();
		});
	}
});;
$(window).load(function(){
	$('.no-products').height($(window).innerHeight() - $('body').innerHeight());
		
	
});;
// Dummy functionality to trigger enabled/disabled fields

$('.tbl-peripheral-options input[type="checkbox"]').on('change', function(e){
	var target = $(e.target),
			options = target.closest('tr').find('input[type="radio"]');
			
	options.prop('disabled', !target.prop('checked'));
	
	if(!target.prop('checked')){
		options.prop('checked', false);
	}

});;
$(function(){

	$('label[for="SIEA"],label[for="SIEE"],label[for="SIEJA"]').hover(function(){
		var region = $(this).find('input').attr('id').toLowerCase();

		$('g#' + region).addClass('hover');

		$('g#' + region).popover('show')

	}, function(){
		var region = $(this).find('input').attr('id').toLowerCase();
		$('.map-block').removeClass('hover');
		$('g#' + region).popover('hide')
	});

	$('input#SIEA, input#SIEE, input#SIEJA').on('change', function(){
		var region = this.id.toLowerCase();

		if($(this).prop('checked')){
			$('g#' + region).addClass('active');
		} else {
			$('g#' + region).removeClass('active');
		}
	});


	$('g#siea, g#siee, g#sieja').hover(function(){
		var region = this.id.toUpperCase();

		$('label[for="'+ region +'"]').addClass('hover');

	}, function(){
		var region = this.id.toUpperCase();

		$('label[for="'+ region +'"]').removeClass('hover');
	});

	$('g#siea, g#siee, g#sieja').click(function(){

		var region = this.id.toUpperCase(),
				input = $('input#'+ region);

		

		input.prop('checked', !input.prop('checked'));
		input.trigger('change');

	});
});;
$(function(){

	$('.language-select, .multi-select').on('click', '*', function(e){
		e.stopImmediatePropagation();
	});

	$('.language-select input').on('change', function(e){
		
		$('.language-select .counter').text($('.language-select input:checked').length);
	});

	$('.language-select .btn-secondary, .multi-select .btn-secondary').on('click', function(e){
		var checked = $(this).closest('.dropdown').find('input:checked'),
				$this = $(this),
				$btn = $this.closest('.dropdown').find('[data-toggle="dropdown"]'),
				selectedClass = 'selection',
				selectionButtons = '';

		$.each(checked, function(index, el){
			
			selectionButtons += '<span class="label label-selected">' + el.value + ' <i class="fa fa-close" data-action="remove"></i></span>'

		});

		$btn.find('.label').remove();

		if(selectionButtons.length){

			$btn.find('.txt-btn').hide();
			$btn.addClass(selectedClass).append(selectionButtons);
		} else {

			$btn.find('.txt-btn').show();
			$btn.removeClass(selectedClass);
		}


		$(this).closest('.dropdown').removeClass('open');

	});

	$('.dropdown').on('click', '.label-selected', function(e){
		e.stopImmediatePropagation();
	});


	$('.dropdown-toggle').on('click', '.label .fa-close', function(e){
		e.stopPropagation();
		var $this = $(this),
				$dropdown = $this.closest('.dropdown'),
				value = $this.parent().text().trim(),
				isFilled = $this.parent().siblings('.label').length,
				txt = $this.parent().siblings('.txt-btn'),
				$btn = $this.closest('button');

		$this.parent().remove();

		$dropdown.find('input[value="' + value + '"]').prop('checked', false);

		if(!isFilled){
			txt.show();
			$btn.removeClass('selection');
		}

	});

	$('.dropdown .btn-cancel').on('click', function(e){
		$(this).closest('.dropdown').removeClass('open');
	});

});;
$(function(){
	$('.optional-comments').hide();

	$('input[name="occ"], input[name="virtualCurrency"]').on('change', function(){
		if($(this).prop('checked')){
			$(this).closest('.form-group').next('.optional-comments').slideDown();
		}
	});
});;
/**
 * Polyfil to support placeholder text in IE9
 *
 */

jQuery(function() {
	jQuery.support.placeholder = false;
	test = document.createElement('input');
	if('placeholder' in test) jQuery.support.placeholder = true;
});

$(function() {
	if(!$.support.placeholder) { 
	

		$('input[placeholder]').each(function(){
			var _ = $(this);
					placeholder = _.attr('placeholder');
			_.val(placeholder).addClass('hasPlaceholder');

			_.focus(function(){
				if(_.val() == placeholder){
					_.val('');
				}
			})
			.blur(function(){
				if(_.val() == ''){
					_.val(placeholder).addClass('hasPlaceholder');
				} else {
					_.removeClass('hasPlaceholder');
				}
			});

		});

		$('form').submit(function(event){
			
			$('.hasPlaceholder').each(function() { 
				$(this).val(''); 
			});
		});

	}
});;
$(function () {
  $('svg [data-toggle="popover"]').popover({
  	trigger: 'hover',
  	container: 'body'
  });


  $(".interactive-map").on('mousemove', function(e) {

  	var $popover = $('.popover');

   $popover.css({top: e.pageY + 20, left: e.pageX - ($popover.innerWidth() / 2) });

 });

 $('.quarter-picker .icon-calendar').click(function(){
    var $this = $(this);
    $('.popup-calendar.visible').remove();

    if($this.hasClass('active')){
      $this.removeClass('active');
      $('.quarter-picker').removeClass('focus');
      return;      
    }

    $this.addClass('active');
    $('.quarter-picker').removeClass('focus');


    $(this).parent().addClass('focus');

    var $calendar = $('.popup-calendar[data-tabbed="'+ (!$(this).parent().hasClass('date')).toString() +'"]').clone(),
        $input = $this.siblings('input'),
        inputPos = $input.offset(),
        inputH = $input.innerHeight(),
        inputW = $input.innerWidth(),
        leftPos = inputPos.left + (inputW / 2);



    $calendar.addClass('visible'); 



    $calendar.appendTo('body').css({
      top: inputPos.top + inputH + 3,
      left: (leftPos > 0 ? leftPos : 0),
      marginLeft: (($calendar.innerWidth() / 2) > leftPos ? -(leftPos-5) : -($calendar.innerWidth() / 2))
    });

    // console.log(leftPos, $calendar.innerWidth());
    
    $calendar.show();

    $(document).unbind('keyup').keyup(function(e){
      switch(e.keyCode){
        case 13:
        case 27:
          $('.popup-calendar.visible').remove();
          $('.focus').removeClass('focus');
        break;
      }
    });

    $(window).resize(function(){
      inputPos = $input.offset(),
      inputH = $input.innerHeight(),
      inputW = $input.innerWidth(),
      leftPos = inputPos.left + (inputW / 2);

      $calendar.css({
        top: inputPos.top + inputH + 3,
        left: (leftPos > 0 ? leftPos : 0),
        marginLeft: (($calendar.innerWidth() / 2) > leftPos ? -(leftPos-5) : -($calendar.innerWidth() / 2))
      });
    });


  });
  
  $('button.datepicker').click(function(){
    var $this = $(this);
    $('.popup-calendar.visible').remove();

    if($this.hasClass('active')){
      $this.removeClass('active');
      
      return;      
    }

    $this.addClass('active');

    var $calendar = $('.popup-calendar[data-tabbed="'+ (!$(this).hasClass('date')).toString() +'"]').clone(),
        inputPos = $this.offset(),
        inputH = $this.innerHeight(),
        inputW = $this.innerWidth(),
        leftPos = inputPos.left + (inputW / 2);



    $calendar.addClass('visible'); 



    $calendar.appendTo('body').css({
      top: inputPos.top + inputH + 3,
      left: (leftPos > 0 ? leftPos - 50 : 0),
      marginLeft: (($calendar.innerWidth() / 2) > leftPos ? -(leftPos-5) : -($calendar.innerWidth() / 2))
    });
    
    $calendar.show();


    

  });

  $("label[data-toggle], .selectable-container a").popover({
    trigger: 'hover',
    html: true,
    container:".selectable-container"
  });

  $('i[data-toggle="popover"]').popover({
    title: '',
    html: true,
    content: function() {
      // console.log(this.getAttribute('data-html-content'));
      return $(this.getAttribute('data-html-content')).html();
    }
  })

});





;
$(function(){

	var $hidden = $('.form-group.hidden');

	$('input[name="consumable"]').change(function(e){
		

		if(this.value == 1){
			$hidden.removeClass('hidden');
		} else {

			$hidden.addClass('hidden');
		}
	});

});;
/* @version 0.0.1
   @description Changes the padding of .resize depending on the height of the tallest h2
*/	
var classResize = ".resize";

/* @description Loop through the h2's with the class .resize, get the height of the the tallest h2 and store in maxHeight */
function reSize($el){

	var heights = [],
		maxHeight,
		minHeigh,
		pad;

	$el.each(function(){
		$this = $(this);
		heights.push($this.height());
	});

	maxHeight = Math.max.apply(Math, heights);
	minHeight = Math.min.apply(Math, heights);

	pad = maxHeight - minHeight;

	$el.each(function(){
		$this = $(this);
		$this.css('padding-bottom', ($this.height() < maxHeight) ? pad : 0);
	});
}

$( window ).load(function() {
	reSize($(classResize));

	$( window ).resize(function() {
		reSize($(classResize));
	});
});;
$(function(){
	$('.btn-clear').click(function(e){
	  e.stopPropagation();
	  $('input[name="searchList"]').val('');
	  $('.results li').show();
	});


	$('input[name="searchList"]').on('keyup', function(e){
		if(e.target.value.length >= 1){

	  	$('.results li a').each(function(){
	    	var $this = $(this),
	      		text = $this.text();
	          
	      if(!text.toLowerCase().match(e.target.value.toLowerCase())){
	      	
	      	$this.parent().hide();
	      
	      } else {
	      	$this.parent().show();
	      	var re = new RegExp(e.target.value, "g");
	      	$this.html(text.replace(re,"<span class=\"highlight\">"+ e.target.value +"</span>"));

	      }
	      
	    });
	  } else {
	  	$('.results li').show();
	  }
	});

	$('.searchable, .selectable').on('click', '.results a', function(e){
		e.preventDefault();

		var $this = $(this),
				btnID = $this.closest('.searchable').attr('aria-labelledby') || $this.closest('.selectable').attr('aria-labelledby'),
				$btn = $('#' + btnID),
				value = $this.text(),
				maxSelect = $btn.data('max-select');

		if($btn.find('.label').length >= maxSelect){
			$btn.find('.label').remove();
		}
		
		if(maxSelect) {
			if(maxSelect > 1) {
				$btn.find('.txt-btn').hide();
				$btn.addClass('selection');
				$btn.append('<span class="label label-selected">' + value + ' <i class="fa fa-close" data-action="remove"></i></span>');
			} else {
				$btn.find('.txt-btn').text(value).addClass('filled');
			}
		}
	});

	$('.dropdown-toggle').on('click', '.label .fa-close', function(e){
		e.stopPropagation();
		var $this = $(this),
				isFilled = $this.parent().siblings('.label').length,
				txt = $this.parent().siblings('.txt-btn'),
				$btn = $this.closest('button');

		$this.parent().remove();

		if(!isFilled){
			txt.show();
			$btn.removeClass('selection');
		}

	});
});;
$(function(){
	$('.edit-partner, .edit-variant, .btn-action[data-action="edit"]').click(function(e) {
		e.preventDefault();
		var tr = $(e.target).closest("tr");
		tr.addClass("table-edit-selected");
		tr.next("tr").show();
	});

	$('.cancel-edit').click(function(e) {
		e.preventDefault();
		var tr = $(e.target).closest("tr");
		tr.prev().removeClass("table-edit-selected");
		tr.hide();
	});
});


$(function(){
	$('.concept-listing-table.table-striped-editable tr').click(function(){
		if(!$(this).hasClass('table-edit')){
			$(this).toggleClass('table-edit-selected').next("tr").toggle();
		}
	});
});;
$(function () {
  $('i[data-toggle="tooltip"]').tooltip({
  	trigger: 'click'
  });

  $('a[data-toggle="tooltip"], .status[data-toggle="tooltip"], button[data-toggle="tooltip"]').tooltip({
  	trigger: 'hover'
  });

  $('.modal i[data-toggle="tooltip"]').unbind('tooltip');

  $('table i[data-toggle="tooltip"]').hover(function(){
  	$(this).tooltip('show');
  }, function(){
  	$(this).tooltip('hide');
  });

  
});
