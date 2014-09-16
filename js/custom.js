$(document).ready(function(){

try{
	
		oDD = $(".dd").msDropDown({mainCSS : 'dd2'});
			
			
		
	}
	catch (e) {
		// TODO: handle exception
	}
	$('#left-panel ul li').children('ul').hide();
	 
	
	$('#left-panel ul li').click(function(){
		$('#left-panel ul li').removeClass('selected').children('ul').hide();
		$(this).addClass('selected').children('ul').show();
		$('#left-panel ul li ul li').removeClass('active');
		$('#left-panel ul li.sub-menu ul li:first').addClass('active');
		$('#left-panel ul li.sub-menu2 ul li:first').addClass('active');
		
		
		return false;

	});
	$('#left-panel ul li ul li').click(function(){
		$('#left-panel ul li ul li').removeClass('active');
		$(this).addClass('active').parent().parent().addClass('selected').children('ul').show();
		return false;

	});
	
	$('.box-status a').hover(function (e) {
		$('.linktitle').css({top: e.pageY+15 , left: e.pageX-45 , display:'block'});
	}, function () {
		$('.linktitle').css({ display:'none'});
	});
	$(document).on('click','.bubble-hdr',function(){
		if ($(this).find('.min-ico').is(':visible'))
	{
		$(this).addClass('expand-hdr').removeClass('min-hdr');
		$('.upload-bubble').css('width','218');
		$('.bubble-body').hide();
		$('.min-ico').hide();
		$('.plus-ico').show();
		
	}
	else{
	
		$(this).addClass('min-hdr').removeClass('expand-hdr');
		$('.upload-bubble').css('width','auto');
		$('.bubble-body').show();
		$('.plus-ico').hide();
		$('.min-ico').show();
	
	}
	
	
	});	
	/* custom checkbox */
 
 	 $(".custom-check").click(function() {
    if($(this).parent().find('input[type="checkbox"]').is(":checked"))
	{
    $(this).prev().addClass("chk-checked").removeClass("chk-normal");
	$(this).next().addClass("bold");
  
    } else {
    $(this).prev().addClass("chk-normal").removeClass("chk-checked");
	$(this).next().removeClass("bold");
   
} 

});

 /* custom checkbox */
 /* radio custom starts */


	 $(".custom-radio").click(function() {
    if($(this).parent().find('input[type="radio"]').is(":checked"))
	{
    $(this).prev().addClass("radio-checked").removeClass("radio-unchecked");
   $(this).closest('div').prevAll().find('input').prev().removeClass("radio-checked").addClass("radio-unchecked");
    $(this).closest('div').nextAll().find('input').prev().removeClass("radio-checked").addClass("radio-unchecked");
  
    } else {
    $(this).prev().addClass("radio-unchecked").removeClass("radio-checked");
   
} 

});

/* radio custom ends */
 $('.delete-task').click(function(){
	$('#delete-task').show();
	$('.black-overlay').show();
});
$('.delete-attr').click(function(e){

	$('#delete-hazard').show();
	$('.black-overlay').show();
	$('#delete-hazard').css('top','500px');
	e.preventDefault();
});
$('.delete-attr').click(function(e){

	$('#delete-control').show();
	$('.black-overlay').show();
	$('#delete-control').css('top','700px');
	e.preventDefault();
});
$('.add-hazard-btn').click(function(e){

	window.location="hazards.html";	
	
});
	$(document).on('click','.collapsible-cntnt-header',function(e){
	$(this).parent().next('tr.collapsible-cntnt-body').show();
	$(this).removeClass('collapsible-cntnt-header').addClass('active');
	e.stopPropagation();
});
	$(document).on('click','.collapsible-cntnt-header-1',function(e){
	$(this).parent().next('tr.collapsible-cntnt-body').show();
	$(this).removeClass('collapsible-cntnt-header').addClass('active-1');
	e.stopPropagation();
});
	$(document).on('click','.active-1',function(){
	$(this).parent().next('tr.collapsible-cntnt-body').hide();
	$(this).removeClass('active-1').addClass('collapsible-cntnt-header-1');
});

	$(document).on('click','.active',function(){
	$(this).parent().next('tr.collapsible-cntnt-body').hide();
	$(this).removeClass('active').addClass('collapsible-cntnt-header');
});
	$(document).on('click','.collapsible-cntnt-header-2',function(e){
	$(this).parent().next('tr.collapsible-cntnt-body').show();
	$(this).removeClass('collapsible-cntnt-header').addClass('active-2');
	e.stopPropagation();
});
	$(document).on('click','.active-2',function(){
	$(this).parent().next('tr.collapsible-cntnt-body').hide();
	$(this).removeClass('active-2').addClass('collapsible-cntnt-header-2');
});
$(document).on('click','.collapsible-cntnt-header-3',function(e){
	$(this).parent().next('.collapsible-cntnt-body').show();
	$(this).removeClass('collapsible-cntnt-header').addClass('active-3');
	e.stopPropagation();
});
	$(document).on('click','.active-3',function(){
	$(this).parent().next('.collapsible-cntnt-body').hide();
	$(this).removeClass('active-3').addClass('collapsible-cntnt-header-3');
});
$('.add-hazard').click(function(){

	$('#add-hazard').show();
	$('.black-overlay').show();
	
});
$('#archivejobortask-button').click(function(){

	$('#archive').show();
	$('.black-overlay').show();
	
});
$('.add-controls').click(function(){

	$('#add-controls').show();
	$('.black-overlay').show();
	
});

$(document).on('click','input.assign',function(){
	$('.add-control').toggle();
	$('.assign-as-task').toggle();
	
	
});
 $(".assign").click(function() {
    if($(this).parent().find('input[type="checkbox"]').is(":checked"))
	{
	$(this).next().removeClass('grey-txt');
    $('.add-control').show();
	$('.assign-as-task').hide();
  
    } else {
   
	$(this).next().addClass('grey-txt');
	 $('.add-control').hide();
	$('.assign-as-task').show();
   
} 

});
 $(".assign-click").click(function() {
    if($(this).parent().find('input[type="checkbox"]').is(":checked"))
	{
    $('.save-btn').hide();
	$('.assign-save').show();
	$('.delete').addClass('discard-delete');
  
    } else {
   
	
	 $('.save-btn').show();
	$('.assign-save').hide();
	$('.delete').removeClass('discard-delete');
   
} 
});

$(document).on('click','.discard-delete',function(){
	$('#discard-delete').show();
	$('.save-btn').show();
	$('.assign-save').hide();
	$('.black-overlay').show();
	
});

$(document).on('click','.edit-task',function(){
	$('#edit-task').show();
	$('#view-edit-list').show();
	$('.black-overlay').show();
	
});
$(document).on('click','.unassign',function(){
	$('#unassign').show();
	$('.black-overlay').show();
	
});
$('.assign-as-task-1').click(function(e){

	window.location="associated-hazards.html";	
	
});


$(document).on('click','.assign-as-task',function(){
	$('#add-controls').hide();
	$('#assign-as-task').show();
	$('.black-overlay').show();
	
	
});

$('.all-controls').click(function(){
	$(this).addClass('txt-link-active');
	$(this).prevAll().removeClass('txt-link-active');
	$(this).nextAll().removeClass('txt-link-active');
	$('.all-control-wrapper').show();
	$('.control-type-wrapper').hide();
	$('.associated-hazards-wrapper').hide();
});
$('.control-types').click(function(){
	$(this).addClass('txt-link-active');
	$(this).prevAll().removeClass('txt-link-active');
	$(this).nextAll().removeClass('txt-link-active');
	$('.all-control-wrapper').hide();
	$('.control-type-wrapper').show();
	$('.associated-hazards-wrapper').hide();
});
$('.associated-hazards').click(function(){
	$(this).addClass('txt-link-active');
	$(this).prevAll().removeClass('txt-link-active');
	$(this).nextAll().removeClass('txt-link-active');
	$('.all-control-wrapper').hide();
	$('.control-type-wrapper').hide();
	$('.associated-hazards-wrapper').show();
});
 $('.modal-popup-close,.close-btn,.add-task,.close-schedule,.close-reschedule,.close-add-case').click(function(){

	$('.modal-white-content').hide();
	$('.black-overlay').hide();
	});
	$('.save-changes').click(function(){
		$('#view-edit-list').show();
	
	});

	$('#established-proposed_msa_0').click(function(){
		$('.wrapper').next().find('input').attr('disabled',true);
		$('.wrapper').next().find('span.check-txt').addClass('grey-txt');
	});
	$('#established-proposed_msa_1').click(function(){
		$('.wrapper').next().find('input').attr('disabled',false);
		$('.wrapper').next().find('span.grey-txt').removeClass('grey-txt');
	});


	$('.wrapper-click input').click(function(){

	if($(this).is(":checked")){
	
		$('#established-proposed_titletext').text('Assigned');
		 
		}
		else
		$('#established-proposed_titletext').text('Proposed');
		
	});
	$('.add-task').click(function(){

	$('#add-task').show();
	$('.black-overlay').show();
	
});
/* $("#origin").sortable({connectWith: "#drop"});
$("#drop").sortable({connectWith: "#origin"});
 */
 /* multiselect */
			$('body').on('click','.ms-choice',function(){

		if(!drop_down_selected){
			$('.ms-drop').find('input[type="checkbox"]').addClass('styled custom-check');
			$("<span ></span>").insertBefore('input[type="checkbox"]').addClass('chk-normal styled-span');
		}
		
		drop_down_selected = 1;
		
	});
		$('body').on('click','.custom-check',function(){
		if($(this).parent().parent().hasClass('ms-select-all') ){
			$.each($(this).parent().parent().parent().children(),function(key,value){
			if($(this).parent().find('input[type="checkbox"]').is(":checked"))
			{
				$(value).find('span.styled-span').addClass('chk-checked').removeClass("chk-normal");
				$(this).parent().find('.option-label').addClass('font-bold');
				}
			else
			{
				$(value).find('span.styled-span').addClass('chk-normal').removeClass("chk-checked");
				$(this).parent().find('.option-label').removeClass('font-bold');
				}
			});
		}
		if($(this).parent().find('input[type="checkbox"]').is(":checked"))
		{
			$(this).prev().addClass("chk-checked").removeClass("chk-normal");
			$(this).parent().find('.option-label').addClass('font-bold');
		  
		} 
		else 
		{
			$(this).prev().addClass("chk-normal").removeClass("chk-checked");
			$(this).parent().find('.option-label').removeClass('font-bold');
		} 
		
	});
	
   
	$("document").click
(
  function(e)
  {
    if(e.target.className !== "ms-drop")
    {
      $(".ms-drop").hide();
    }
  }
);
 /* multiselect ends */
 	$( ".list-info" ).mouseout(function() {
		$(this).parent().find('.list-info-wrapper').hide();
	}).mouseover(function() {
		$(this).parent().find('.list-info-wrapper').show();
	});
	$('.drop-div').click(function(){
		$(this).parent().find('.select-attrib-list,.select-attrib-list-1').toggle();
		
	});
		$( ".list-info" ).mouseout(function() {
		$(this).parent().find('.list-info-wrapper').hide();
	}).mouseover(function() {
		$(this).parent().find('.list-info-wrapper').show();
	});
	
	$( ".list-info-txt" ).mouseover(function(j) {
		$( ".list-info-wrapper" ).hide();
		j.stopPropagation();
	});
	$('.select-attrib-list li').click(function(g){
		
		$(this).closest('tr').prevAll().find('.select-attrib-list').hide();
		$(this).parent().hide();
		g.stopPropagation();
	});

$(document).mouseup(function(e){
    if($( e.target ).parent( '.select-attrib-list' ).length == 0 ) {
        $('.select-attrib-list').hide();
    }
});

});

