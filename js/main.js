/**
 * main javascript file
 * 
 * @author gaorq<goen88@163.com>
 * @since 2014-03-20
 */
 
 var _WINDOW_WIDTH = 0;
 var _WINDOW_HEIGHT = 0;

 var _AUDIO = null;
 var _AUDIO_BTN_COLOR = 1; //1-白色；2-灰色
 var _DEFAULT_LAYER_ID='baner1';
 var _RATE_H = 0;
 var _CURENT_SCENE = 'baner1';
 var _LAST_SCENE = '';
 var _HAS_KEY = false; // find the key
 
 
jQuery(document).ready(function() {
   // alert(jQuejry(window).width())
   _AUDIO =  document.getElementById("bg-audio"); //jQuery('#');
   _WINDOW_WIDTH = parseInt(jQuery(window).width());
   _WINDOW_HEIGHT = parseInt(jQuery(document).height());
   //alert(_WINDOW_HEIGHT)
   jQuery(".audio-btn").bind('click',audio_play);
   
   //create_scene('baner1');
   init_data();
   //layerMove();
});


function audio_play(){
	//alert(_AUDIO.paused)
	if(_AUDIO.paused){
		_AUDIO.play();
		//jQuery(".audio-btn").hasClass('')
		if(_AUDIO_BTN_COLOR==1){
			jQuery(".audio-btn").removeClass('audio-btn-gray-open').removeClass('audio-btn-white-open').addClass('audio-btn-white-close');
		}else{
			jQuery(".audio-btn").removeClass('audio-btn-gray-open').removeClass('audio-btn-white-open').addClass('audio-btn-gray-close');
		}
	}else{
		_AUDIO.pause();
		if(_AUDIO_BTN_COLOR==1){
			jQuery(".audio-btn").removeClass('audio-btn-gray-close').removeClass('audio-btn-white-close').addClass('audio-btn-white-open');
		}else{
			jQuery(".audio-btn").removeClass('audio-btn-gray-close').removeClass('audio-btn-white-close').addClass('audio-btn-gray-open');
		}
		
	}
}

function layerMove(){
	jQuery(".container").swipe( {
        //Generic swipe handler for all directions
		triggerOnTouchEnd: true,
		allowPageScroll: "vertical",
        threshold: 10,
        swipeStatus:function(event, phase, direction, distance) {
		  var transformData = $(this).css("-webkit-transform");
		  if(!transformData)transformData = $(this).css("-moz-transform");
		  if(!transformData)transformData = $(this).css("-ms-transform");
		  if(!transformData)transformData = $(this).css("transform");
		  var translateX = 0;
		  var cur_distance = 0; //实际偏移值
		  var duration = 0;
		  var imgObj = jQuery(this).find("img");
		  var maxW = parseInt(imgObj.width());
		  var layerObj = jQuery(this).parent(".layer");
		  if(isNaN(maxW)) return;
		  var is_moved = false;
		  if(transformData){
			  var transformDataArr = transformData.replace(/[\(\)matrix]/g,'').split(',');
			  translateX =  parseInt(transformDataArr[4]);
			  if(isNaN(translateX)) translateX = 0;
		  }
		  
		  if(phase=='move'&&(direction=='left'||direction=='right'))
		  {
			  duration = 0;
			  if (direction == "left") {
				    cur_distance =  parseInt(distance) - parseInt(translateX);
				    if(parseInt(cur_distance)+_WINDOW_WIDTH>=maxW){
						 cur_distance=maxW-_WINDOW_WIDTH;
						 return false;
					}
					is_moved = true;
                    scrollLayer(event,layerObj, distance, duration,true);
              } else if (direction == "right") {
				  	cur_distance =  parseInt(distance) + parseInt(translateX);
				    if(cur_distance>0) {
						distance=0;
						return false;
					}
					is_moved = true;
                    scrollLayer(event,layerObj, - distance, duration,true);
              }
		  }else if (phase == "end") {
			  if(is_moved = false) return;
			  if (direction == "left") {
				    cur_distance =  parseInt(distance) - parseInt(translateX);
				    if(parseInt(cur_distance)+_WINDOW_WIDTH>=maxW) cur_distance=maxW-_WINDOW_WIDTH;
                    scrollLayer(event,this, cur_distance, duration);
              } else if (direction == "right") {
				  	cur_distance =  parseInt(distance) + parseInt(translateX);
				    if(cur_distance>0) cur_distance=0;
                    scrollLayer(event,this, - cur_distance, duration);
              }
			  scrollLayer(event,layerObj, 0, duration,true);
          }
        }
      });
}

function scrollLayer(e,obj,distance, duration,is_layerObj) {
	//console.log(distance);
	var org_top = scene_data[_CURENT_SCENE].top||0; //场景原始偏移
	if(is_layerObj) org_top= 0;
	$(obj).css("transition-duration", (duration / 1000).toFixed(1) + "s");
	$(obj).css("-webkit-transition-duration", (duration / 1000).toFixed(1) + "s");
	//inverse the number we set in the css
	var value = (distance < 0 ? "" : "-")+Math.abs(distance).toString();
	$(obj).css({"transform":"translate("+value+"px,"+(org_top*_RATE_H)+"px)","transform-style": "preserve-3d","backface-visibility":"hidden"});
	$(obj).css({"-webkit-transform":"translate("+value+"px,"+(org_top*_RATE_H)+"px)","-webkit-transform-style": "preserve-3d","-webkit-backface-visibility":"hidden"});
	$(obj).css({"-ms-transform":"translate("+value+"px,"+(org_top*_RATE_H)+"px)","-ms-transform-style": "preserve-3d","-ms-backface-visibility":"hidden"});
	$(obj).css({"-moz-transform":"translate("+value+"px,"+(org_top*_RATE_H)+"px)","-moz-transform-style": "preserve-3d","-moz-backface-visibility":"hidden"});
}




function init_data(){
	for( n in scene_data){
		create_scene(n);
	}
	gotoScene(_DEFAULT_LAYER_ID,'');
}

function create_scene(scene_id){
	var htmlData = '';
	var sceneItems = scene_data[scene_id].item;  //场景数据列表
	var org_w = scene_data[scene_id].org_w; //场景原始宽
	var org_h = scene_data[scene_id].org_h; //场景原始高
	var org_left = scene_data[scene_id].left; //场景原始偏移
	var org_top = scene_data[scene_id].top||0; //场景原始偏移
	var _rate_h = parseFloat(_WINDOW_HEIGHT/ org_h);
	
	var layer = document.createElement('div');
	layer.id = "layer_"+scene_id;
	layer.className="layer";
	var container = document.createElement('div');
	container.id="container_"+scene_id;
	container.className="container";
	container.style.transform = "translate("+(org_left*_rate_h)+"px,"+(org_top*_rate_h)+"px)";
	container.style['-webkit-transform'] = "translate("+(org_left*_rate_h)+"px,"+(org_top*_rate_h)+"px)";
	container.style['-ms-transform'] = "translate("+(org_left*_rate_h)+"px,"+(org_top*_rate_h)+"px)";
	container.style['-moz-transform'] = "translate("+(org_left*_rate_h)+"px,"+(org_top*_rate_h)+"px)";
	layer.appendChild(container);
	for(n in sceneItems){
		var _w = parseInt(sceneItems[n]['w']*_rate_h); 
		var _h = parseInt(sceneItems[n]['h']*_rate_h) ;
		var _left = parseInt(_rate_h*sceneItems[n]['left']);
		var _top = parseInt(_rate_h*sceneItems[n]['top']);	
		var _bg_size = "100% 100%";
		var item_id = "item_"+scene_id+"_"+n;
		if(sceneItems[n]['type']=='img'&&sceneItems[n]['tag_name']=='div'){
			var itemOne = document.createElement('div');
			itemOne.id= item_id;
			itemOne.style.width=_w+"px";
			itemOne.style.height=_h+"px";
			itemOne.style.background = 'url('+sceneItems[n]['src']+') '+sceneItems[n]['bg_position']+' / '+_bg_size+' '+sceneItems[n]['bg_repeat'];
			itemOne.style.top=_top+"px";
			itemOne.style.left=_left+"px";
			if(sceneItems[n]['animate']){
				itemOne.className=sceneItems[n]['animate'];
			}
			if(sceneItems[n]['click']){
				itemOne.addEventListener('touchend',sceneItems[n]['click']);
			}
			if(sceneItems[n]['display']){
				itemOne.style.display=sceneItems[n]['display'];
			}
			if(sceneItems[n]['position']){
				itemOne.style.position=sceneItems[n]['position'];
			}
			
			
			container.appendChild(itemOne);
		}else if(sceneItems[n]['type']=='button'&&sceneItems[n]['tag_name']=='div'){
			var itemOne = document.createElement('div');
			itemOne.id= item_id;
			itemOne.style.width=_w+"px";
			itemOne.style.height=_h+"px";
			itemOne.style.background = ' url('+sceneItems[n]['src']+') '+sceneItems[n]['bg_position']+' / '+_bg_size+' '+sceneItems[n]['bg_repeat'];
			itemOne.style.top=_top+"px";
			itemOne.style.left=_left+"px";
			itemOne.className = "button";
			if(sceneItems[n]['click']){
				itemOne.addEventListener('touchend',sceneItems[n]['click']);
			}
			if(sceneItems[n]['display']){
				itemOne.style.display=sceneItems[n]['display'];
			}
			container.appendChild(itemOne);
		}else if(sceneItems[n]['type']=='block'&&sceneItems[n]['tag_name']=='div'){
			var itemOne = document.createElement('div');
			itemOne.id= item_id;
			itemOne.style.width=_w+"px";
			itemOne.style.height=_h+"px";
			itemOne.style.background = sceneItems[n]['bg_color']; //'red';
			itemOne.style.top=_top+"px";
			itemOne.style.left=_left+"px";
			if(sceneItems[n]['click']){
				itemOne.addEventListener('touchend',sceneItems[n]['click']);
			}
			if(sceneItems[n]['display']){
				itemOne.style.display=sceneItems[n]['display'];
			}
			container.appendChild(itemOne);
		}else if(sceneItems[n]['type']=='img'&&sceneItems[n]['tag_name']=='img'){
			_w = sceneItems[n]['w'] 
			_h = sceneItems[n]['h'] ;
			var itemOne = document.createElement('img');
			itemOne.id= item_id;
			itemOne.style.width=_w;
			itemOne.style.height=_WINDOW_HEIGHT+"px";
			itemOne.src = sceneItems[n]['src'];
			if(sceneItems[n]['click']){
				itemOne.addEventListener('touchend',sceneItems[n]['click']);
			}
			if(sceneItems[n]['display']){
				itemOne.style.display=sceneItems[n]['display'];
			}
			container.appendChild(itemOne);
		}
	}
	document.getElementById("wrap").appendChild(layer);
	
}

function gotoScene(scene_id,last_scene_id,is_return){
	var org_h = scene_data[scene_id].org_h; //场景原始高
	var _rate_h = parseFloat(_WINDOW_HEIGHT/ org_h);
	_RATE_H = _rate_h;
	if(scene_id=='baner1') {
		jQuery(".return-btn").hide();
		_AUDIO_BTN_COLOR = 1;
		if(_AUDIO.paused){
			jQuery(".audio-btn").removeClass('audio-btn-gray-open').removeClass('audio-btn-white-open').addClass('audio-btn-white-close');
		}else{
			jQuery(".audio-btn").removeClass('audio-btn-gray-close').removeClass('audio-btn-white-close').addClass('audio-btn-white-open');
		}
	}else{
		
		_AUDIO_BTN_COLOR = 2;
		if(_AUDIO.paused){
			jQuery(".audio-btn").removeClass('audio-btn-gray-close').removeClass('audio-btn-white-close').addClass('audio-btn-gray-open');
		}else{
			jQuery(".audio-btn").removeClass('audio-btn-gray-open').removeClass('audio-btn-white-open').addClass('audio-btn-gray-close');
		}
	}
	/*if(scene_id != _DEFAULT_LAYER_ID){
		//transform:scale(0.5,2);
		$("#layer_"+_CURENT_SCENE).css("transition-duration", 0.5 + "s");
		////inverse the number we set in the css
		$("#layer_"+_CURENT_SCENE).css("transform", "scale(1,10)");
	}*/
	
	_CURENT_SCENE = scene_id;
	//jQuery(".return-btn").show();
	jQuery(".return-btn").css({width:_rate_h*100,height:_rate_h*40});
	jQuery(".return-btn").hide();
	jQuery('.baner3-brushwood').hide();
	switch(scene_id){
		case 'baner1':{
					if(is_return==true){
						sceneChgAnimate(scene_id,last_scene_id,"",is_return);
					}else{
						jQuery('.layer').hide();
						jQuery('#layer_'+scene_id).show();
					}
				break;
			}
		case 'baner2':{
				sceneChgAnimate(scene_id,last_scene_id,"baner1",is_return);
				break;
			}
		case 'baner3':{
				if(is_return==true){
					sceneChgAnimate(scene_id,last_scene_id,"baner2",is_return);
				}else{
					jQuery(".return-btn").unbind('touchend').bind('touchend',function(){gotoScene('baner2','baner3',true);});
					$("#item_baner2_4,#item_baner2_5").css("transition-duration", "1s");
					$("#item_baner2_4,#item_baner2_5").css("-webkit-transition-duration", "1s");
					var _x1 = parseInt($("#item_baner2_4").css('width'));
					var _x2 = parseInt($("#item_baner2_5").css('width'));
					$("#item_baner2_4").css("transform", "translate(-"+_x1+"px,0)");
					$("#item_baner2_4").css("-webkit-transform", "translate(-"+_x1+"px,0)");
					$("#item_baner2_4").css("-ms-transform", "translate(-"+_x1+"px,0)");
					$("#item_baner2_4").css("-moz-transform", "translate(-"+_x1+"px,0)");
					$("#item_baner2_5").css("transform", "translate("+_x2+"px,0)");
					$("#item_baner2_5").css("-webkit-transform", "translate("+_x2+"px,0)");
					$("#item_baner2_5").css("-ms-transform", "translate("+_x2+"px,0)");
					$("#item_baner2_5").css("-moz-transform", "translate("+_x2+"px,0)");
					//$("#layer_baner2").css("transform","scale(2,2)");
					window.setTimeout(function(){
						//var _left = parseInt($("#item_baner2_4").css('left'))*2;
						//var _top = parseInt($("#item_baner2_4").css('top'))*2;
						var _left = _RATE_H*_WINDOW_WIDTH*1.5;
						var _top = _RATE_H*_WINDOW_HEIGHT*1.5;
						$("#layer_baner2").css({"transition-duration":"1s","transform":"translate(-"+_left+"px,-"+_top+"px) scale(2,2)","opacity":".2"});
						$("#layer_baner2").css({"-webkit-transition-duration":"1s","-webkit-transform":"translate(-"+_left+"px,-"+_top+"px) scale(2,2)","-webkit-opacity":".2"});
						$("#layer_baner2").css({"-ms-transition-duration":"1s","-ms-transform":"translate(-"+_left+"px,-"+_top+"px) scale(2,2)","-ms-opacity":".2"});
						$("#layer_baner2").css({"-moz-transition-duration":"1s","-moz-transform":"translate(-"+_left+"px,-"+_top+"px) scale(2,2)","-moz-opacity":".2"});
						window.setTimeout(function(){
							jQuery('.layer').hide();
							jQuery('#layer_'+scene_id).show();
							
							jQuery('.baner3-brushwood').css({width:(1569*_RATE_H)+'px',height:(189*_RATE_H)+'px',top:(_WINDOW_HEIGHT-(189*_RATE_H))+'px'}).show();
								
							
							//reset
							$("#item_baner2_4,#item_baner2_5").css("transition-duration", "0s");
							$("#item_baner2_4,#item_baner2_5").css("-webkit-transition-duration", "0s");
							$("#item_baner2_4").css("transform", "translate(0px,0)");
							$("#item_baner2_4").css("-webkit-transform", "translate(0px,0)");
							$("#item_baner2_4").css("-ms-transform", "translate(0px,0)");
							$("#item_baner2_4").css("-moz-transform", "translate(0px,0)");
							$("#item_baner2_5").css("transform", "translate(0px,0)");
							$("#item_baner2_5").css("-webkit-transform", "translate(0px,0)");
							$("#item_baner2_5").css("-ms-transform", "translate(0px,0)");
							$("#item_baner2_5").css("-moz-transform", "translate(0px,0)");
							$("#layer_baner2").css({"transition-duration":"0s","transform":"translate(0,0) scale(1,1)","opacity":"1"});
							$("#layer_baner2").css({"-webkit-transition-duration":"0s","-webkit-transform":"translate(0,0) scale(1,1)","-webkit-opacity":"1"});
							$("#layer_baner2").css({"-ms-transition-duration":"0s","-ms-transform":"translate(0,0) scale(1,1)","-ms-opacity":"1"});
							$("#layer_baner2").css({"-moz-transition-duration":"0s","-moz-transform":"translate(0,0) scale(1,1)","-moz-opacity":"1"});
							jQuery(".return-btn").show();
						},1000);
					},1000);
				}
				break;
			}
		case 'scene1':{
				if(is_return==true){
					sceneChgAnimate(scene_id,last_scene_id,"baner2",is_return);
				}else{
					jQuery(".return-btn").unbind('touchend').bind('touchend',function(){gotoScene('baner2','scene1',true);});
					$("#item_baner2_4,#item_baner2_5").css("transition-duration", "1s");
					$("#item_baner2_4,#item_baner2_5").css("-webkit-transition-duration", "1s");
					var _x1 = parseInt($("#item_baner2_4").css('width'));
					var _x2 = parseInt($("#item_baner2_5").css('width'));
					$("#item_baner2_4").css("transform", "translate(-"+_x1+"px,0)");
					$("#item_baner2_4").css("-webkit-transform", "translate(-"+_x1+"px,0)");
					$("#item_baner2_4").css("-ms-transform", "translate(-"+_x1+"px,0)");
					$("#item_baner2_4").css("-moz-transform", "translate(-"+_x1+"px,0)");
					$("#item_baner2_5").css("transform", "translate("+_x2+"px,0)");
					$("#item_baner2_5").css("-webkit-transform", "translate("+_x2+"px,0)");
					$("#item_baner2_5").css("-ms-transform", "translate("+_x2+"px,0)");
					$("#item_baner2_5").css("-moz-transform", "translate("+_x2+"px,0)");
					//$("#layer_baner2").css("transform","scale(2,2)");
					window.setTimeout(function(){
						//var _left = parseInt($("#item_baner2_4").css('left'))*2;
						//var _top = parseInt($("#item_baner2_4").css('top'))*2;
						var _left = _RATE_H*_WINDOW_WIDTH*1.5;
						var _top = _RATE_H*_WINDOW_HEIGHT*1.5;
						$("#layer_baner2").css({"transition-duration":"1s","transform":"translate(-"+_left+"px,-"+_top+"px) scale(2,2)","opacity":".2"});
						$("#layer_baner2").css({"-webkit-transition-duration":"1s","-webkit-transform":"translate(-"+_left+"px,-"+_top+"px) scale(2,2)","-webkit-opacity":".2"});
						$("#layer_baner2").css({"-ms-transition-duration":"1s","-ms-transform":"translate(-"+_left+"px,-"+_top+"px) scale(2,2)","-ms-opacity":".2"});
						$("#layer_baner2").css({"-moz-transition-duration":"1s","-moz-transform":"translate(-"+_left+"px,-"+_top+"px) scale(2,2)","-moz-opacity":".2"});
						window.setTimeout(function(){
							jQuery('.layer').hide();
							jQuery('#layer_'+scene_id).show();
						
							
							//reset
							$("#item_baner2_4,#item_baner2_5").css("transition-duration", "0s");
							$("#item_baner2_4,#item_baner2_5").css("-webkit-transition-duration", "0s");
							$("#item_baner2_4").css("transform", "translate(0px,0)");
							$("#item_baner2_4").css("-webkit-transform", "translate(0px,0)");
							$("#item_baner2_4").css("-ms-transform", "translate(0px,0)");
							$("#item_baner2_4").css("-moz-transform", "translate(0px,0)");
							$("#item_baner2_5").css("transform", "translate(0px,0)");
							$("#item_baner2_5").css("-webkit-transform", "translate(0px,0)");
							$("#item_baner2_5").css("-ms-transform", "translate(0px,0)");
							$("#item_baner2_5").css("-moz-transform", "translate(0px,0)");
							$("#layer_baner2").css({"transition-duration":"0s","transform":"translate(0,0) scale(1,1)","opacity":"1"});
							$("#layer_baner2").css({"-webkit-transition-duration":"0s","-webkit-transform":"translate(0,0) scale(1,1)","-webkit-opacity":"1"});
							$("#layer_baner2").css({"-ms-transition-duration":"0s","-ms-transform":"translate(0,0) scale(1,1)","-ms-opacity":"1"});
							$("#layer_baner2").css({"-moz-transition-duration":"0s","-moz-transform":"translate(0,0) scale(1,1)","-moz-opacity":"1"});
							jQuery(".return-btn").show();
						},1000);
					},1000);	
				}
				
				
				break;
			}
		case 'scene2':{
				sceneChgAnimate(scene_id,last_scene_id,"scene1",is_return);
				break;
			}
		case 'scene3':{
				sceneChgAnimate(scene_id,last_scene_id,"scene1",is_return);
				break;
			}
		case 'scene4':{
				sceneChgAnimate(scene_id,last_scene_id,"scene1",is_return);
				break;
			}
		case 'scene5':{
				sceneChgAnimate(scene_id,last_scene_id,"scene1",is_return);
				break;
			}
		case 'scene6':{
				sceneChgAnimate(scene_id,last_scene_id,"scene1",is_return);
				break;
			}
		case 'scene7':{
				sceneChgAnimate(scene_id,last_scene_id,"scene1",is_return);
				break;
			}
		case 'scene8':{
				sceneChgAnimate(scene_id,last_scene_id,"",is_return);
				break;
			}
		case 'scene9':{
				sceneChgAnimate(scene_id,last_scene_id,"",is_return);
				break;
			}
	}
	_LAST_SCENE = scene_id;
	stopBubble();
}


function sceneChgAnimate(scene_id,last_scene_id,return_scene_id,is_return){
	if(is_return){
		//alert(scene_id+"--"+last_scene_id+"--"+return_scene_id)
		jQuery(".return-btn").unbind('touchend').bind('touchend',function(){gotoScene(return_scene_id,scene_id,true);});
	}else{
		jQuery(".return-btn").unbind('touchend').bind('touchend',function(){gotoScene(last_scene_id,scene_id,true);});
	}
	var _left = _RATE_H*_WINDOW_WIDTH*1.5;
	var _top = _RATE_H*_WINDOW_WIDTH*2;
	$("#layer_"+last_scene_id).css({"transition-duration":"1s","transform":"translate(-"+_left+"px,-"+_top+"px) scale(2,2)","opacity":".2"});
	$("#layer_"+last_scene_id).css({"-webkit-transition-duration":"1s","-webkit-transform":"translate(-"+_left+"px,-"+_top+"px) scale(2,2)","-webkit-opacity":".2"});
	$("#layer_"+last_scene_id).css({"-ms-transition-duration":"1s","-ms-transform":"translate(-"+_left+"px,-"+_top+"px) scale(2,2)","-ms-opacity":".2"});
	$("#layer_"+last_scene_id).css({"-moz-transition-duration":"1s","-moz-transform":"translate(-"+_left+"px,-"+_top+"px) scale(2,2)","-moz-opacity":".2"});
	window.setTimeout(function(){
			jQuery('.layer').hide();
			jQuery('#layer_'+scene_id).show();
			//reset
			$("#layer_"+last_scene_id).css({"transition-duration":"0s","transform":"translate(0px,0px) scale(1,1)","opacity":"1"});
			$("#layer_"+last_scene_id).css({"-webkit-transition-duration":"0s","-webkit-transform":"translate(0px,0px) scale(1,1)","-webkit-opacity":"1"});
			$("#layer_"+last_scene_id).css({"-ms-transition-duration":"0s","-ms-transform":"translate(0px,0px) scale(1,1)","-ms-opacity":"1"});
			$("#layer_"+last_scene_id).css({"-moz-transition-duration":"0s","-moz-transform":"translate(0px,0px) scale(1,1)","-moz-opacity":"1"});
			if(scene_id!='baner1'){
				jQuery(".return-btn").show();
			}
			
			if(scene_id=='scene8'){
				jQuery("#item_scene8_2").show();
				jQuery("#item_scene8_2").addClass('scene8_layer_no');
				window.setTimeout(function(){
					jQuery("#item_scene8_2").removeClass('scene8_layer_no').hide();
				},1000);
				
				window.setTimeout(function(){
					jQuery("#item_scene8_3").removeClass('scene8-updownFlower2');
				},10000);
				
			}
			
			if(scene_id=='scene6'){
				jQuery("#item_scene6_3").css({'height':_WINDOW_HEIGHT+'px',top:(120*_RATE_H)+'px'}).show();
				window.setTimeout(function(){
					jQuery("#item_scene6_3").addClass('scene8_layer_no');
					window.setTimeout(function(){
						jQuery("#item_scene6_3").removeClass('scene8_layer_no').hide();
					},1000);
				},2000);
			}
			jQuery('.scene5-cloud').hide();
			if(scene_id=='scene5'){
				jQuery('.scene5-cloud').css({width:(4252*_RATE_H)+'px',height:(333*_RATE_H)+'px'}).show();
			}
			
			if(scene_id=='baner3'){
			    jQuery('.baner3-brushwood').css({width:(1569*_RATE_H)+'px',height:(189*_RATE_H)+'px',top:(_WINDOW_HEIGHT-(189*_RATE_H))+'px'}).show();
			}
	},1000);
}





function showTxtShadow(){
	jQuery('.textShadow').show();
	jQuery('.textShadow .close').unbind().bind('touchend',hideTxtShadow);
	stopBubble();
}

function hideTxtShadow(){
	jQuery('.textShadow').hide();
	stopBubble();
}

function exhibitItemShow(content){
	var htmlData = '';
	htmlData += '<div class="textShadow exhibitItem" style="display:block;"><div class="bar"></div>';
	htmlData += '<a href="javascript:;" class="close" onclick="exhibitItemHide();" ></a>';
	htmlData += '<div class="content">'+content;
	htmlData += '</div>';
	htmlData += '</div>';
	jQuery('body').append(htmlData);
	stopBubble();
}

function exhibitItemHide(){
	jQuery('.exhibitItem').remove();
	stopBubble();
}



function getTheKey(){
	jQuery("#item_scene9_1").addClass('key_find');
	window.setTimeout(function(){
		_HAS_KEY = true;
		jQuery("#item_scene9_1").hide();
		jQuery("#item_scene9_2").hide();
		alert('钥匙已找到，赶紧去开启地下场景吧');
	},2000);
	
}

function openTheColock(){
	if(_HAS_KEY){
		jQuery("#item_scene1_12,#item_scene1_13").addClass("clock_open");
		window.setTimeout(function(){
			jQuery("#item_scene1_12").hide();
			jQuery("#item_scene1_13").show();
			window.setTimeout(function(){
				jQuery("#item_scene1_13").hide();
				jQuery("#item_scene1_14").show();
			},2000);
		},2000);
	}else{
		alert('请先找到开启地下场景的钥匙！');
	}
}


function openBasementDoor(){
	jQuery("#item_scene1_10").hide();
	jQuery("#item_scene1_11").show();
	window.setTimeout(function(){
		gotoScene('scene8','scene1');
	},200);
}

function cartDoorOpen(){
	window.setTimeout(function(){
		jQuery("#item_scene1_15").show();
		jQuery("#item_scene1_16").hide();
		gotoScene('scene1','scene1');
		window.location.href="http://www.taobao.com";
		window.setTimeout(function(){
			jQuery("#item_scene1_16").hide();
			jQuery("#item_scene1_16").show();
		},3000);
	},200);
}


function stopBubble(){
	var oEvent = window.event || arguments.callee.caller.arguments[0];
	try{
		oEvent.cancelBubble = true;
		oEvent.returnValue = false;
		oEvent.stopPropagation();
		oEvent.preventDefault();
	}catch(err){}
}