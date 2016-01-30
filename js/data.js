/**
 * data javascript file
 * 
 * @author gaorq<goen88@163.com>
 * @since 2015-12-21
 */
 
 var scene_data = {
	 'baner1':{
		org_w:640,
		org_h:1008,
		left:0,
		item:[
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:800,
				h:800,
				src:'images/baner1/sky_bg.png',
				bg_repeat:'repeat-x',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:0,
				top:0,
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:1254,
				h:328,
				src:'images/baner1/cloud.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:-250,
				top:230,
				animate:'baner1-cloud'
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:1569,
				h:189,
				src:'images/baner1/mountain.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:-511,
				top:470,
				animate:'baner1-mountain'
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:54,
				h:350,
				src:'images/baner1/museum_name.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:300,
				top:40,
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:512,
				h:21,
				src:'images/baner1/museun_name_en.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:60,
				top:430,
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:1124,
				h:383,
				src:'images/baner1/museum.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:-296,
				top:544,
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:640,
				h:82,
				bg_color:'#fff',
				left:0,
				top:923,
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:168,
				h:82,
				src:'images/baner1/logo.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:456,
				top:923,
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:60,
				h:60,
				src:'images/baner1/enter_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:222,
				top:824,
				click:function(){gotoScene('baner2','baner1');},
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:180,
				h:180,
				src:'images/baner1/crane.gif',
				bg_repeat:'no-repeat',
				bg_position:'100% 0%',
				bg_size:'100% 100%',
				left:0,
				top:283,
				animate:'baner1-crane'
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:153,
				h:153,
				src:'images/baner1/crane1.gif',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:80,
				top:186,
				animate:'baner1-crane'
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:123,
				h:123,
				src:'images/baner1/crane2.gif',
				bg_repeat:'no-repeat',
				bg_position:'100% 0%',
				bg_size:'100% 100%',
				left:-100,
				top:231,
				animate:'baner1-crane'
			},
		],
	 },
	 'baner2':{
		org_w:2216,
		org_h:1020,
		left:-551,
		item:[
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:270,
				h:224,
				src:'images/baner2/landscape.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:1424,
				top:543,
				animate:'landscape'
			},
			{
				type:'img',
				tag_name:'img',
				is_bg:false,
				is_main:true,
				w:'auto',
				h:'100%',
				src:'images/baner2/baner2-bg_v3.png',
				left:0,
				top:0,
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/enter_right_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:1015,
				top:640,
				click:function(){gotoScene('scene1','baner2');},
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/view-68.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:824,
				top:526,
				click:function(){
				var  _content = '<p><img src="images/baner2/zl_banner_1.png"  style="width:100%;"/></p>';
					_content += '<h3>「瓷上敦煌」</h3>';
					_content+= '<p class="subTitle">展览前言</p>';
					_content+= '<p>“瓷上艺术”历史悠久，为人类文明和艺术作出了独特的贡献，瓷上艺术品也成为世界上最广泛存在且不可或缺的艺术形式之一。今天的中国艺术和思想的多样性再次在“瓷上艺术”中焕发出了旺盛的生命力，是次展览就是重要成果之一。事实上，瓷上艺术已经成长为中国当今最活跃的艺术门类之一</p>';
                    _content+= '<p>此次展览，选取了一系列概括了多种风格及技巧的作品，使观众在视觉上能够领悟作品所带来概念上的冲击及了解所提出的观点：中国文明的核心价值是什么？作品从当下中国人的代表性角度阐述了这个论题，亦成为对当下中国文化现状的评注和记录。因此，是次展览不是多位艺术家的作品辑录，而是一次评注式的概览</p>';
       				_content+= '<p>展览分“过去、现在、未来”三个展厅，您将在其中欣赏到93名中国瓷上艺术家创作的135套（1353件）作品。而促使这些作品产生的其中一项成功要素，是不囿于对传统瓷上艺术的钟爱，以触及中国文化价值核心的命题；另一项则是艺术家与策展人及展览工作人员历时两年之久的通力合作</p>';
					_content+= '<p>能在卢浮宫卡鲁塞尔厅举办是次展览，我们感到十分自豪。此外，谨此多谢王文胜先生的鼎力支持及鼓励，促使展览得以顺利完成，并为中国瓷上艺术与世界文明的交流打下基础。我们亦热切希望法国的观众在欣赏和解读之余，能够分享我们在策划过程中的喜悦</p>';
					_content+= '<p>策展人：过小明丨杜杲丨谢永</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:116,
				h:157,
				src:'images/baner2/left_door.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:1098,
				top:595,
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:116,
				h:157,
				src:'images/baner2/right_door.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:1208,
				top:595,
			},
		]
	 },
	 'baner3':{
		org_w:1426,
		org_h:1008,
		left:-189,
		item:[
			{
				type:'img',
				tag_name:'img',
				is_bg:false,
				is_main:true,
				w:'auto',
				h:'100%',
				src:'images/baner3/baner3-bg.png?123',
				left:0,
				top:0,
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/enter_right_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:554,
				top:630,
				click:function(){gotoScene('scene1','baner3');},
			},
	 	]
	 },
	 'scene1':{
		org_w:4507,
		org_h:1135,
		left:0,
		top:0,
		item:[
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:765,
				h:816,
				src:'images/scene1/scene2-bg.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:400,
				top:0,
				animate:'landscape'
			},
	 		{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:715,
				h:895,
				src:'images/scene1/scene5-bg.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:2526,
				top:100,
				animate:'landscape'
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:644,
				h:341,
				src:'images/scene1/scene_flower1.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:375,
				top:0,
				animate:'scene1-updownFlower'
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:480,
				h:153,
				src:'images/scene1/scene-cloud.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:2526,
				top:100,
				animate:'scene1-cloud'
			},
			{
				type:'img',
				tag_name:'img',
				is_bg:false,
				is_main:true,
				w:'auto',
				h:'100%',
				src:'images/scene1/scene1-bg_v2.png',
				left:0,
				top:0,
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/view-68.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:420,
				top:530,
				click:function(){
				var _content = '<p><img src="images/scene1/zl_banner_2.png"  style="width:100%;"/></p>'; 
					_content += '<h3>京盛线上美术馆闪耀开幕</h3>';
					_content+= '<p class="subTitle">瓷上敦煌群展再现光芒</p>';
					_content+= '<p>95位艺术家、数百件作品、一千多个日日夜夜，瓷上敦煌群展自2014年春在巴黎卢浮宫展之后，那盛景仿佛就在眼前，记忆犹新之余却总也激励我们无畏向前。</p>';
                    _content+= '<p>瓷上敦煌群展做为中国近年最大的一次陶瓷艺术群展，其意义和价值还有待更多、更深入的探讨。巴黎卢浮宫归来，我们的工作并没有完结，如何让更多的人知晓瓷上敦煌群展，如何让展览作品的传播更贴近时代，是我们一直思索和努力的。</p>';
       				_content+= '<p>这次新开幕的线上美术馆是京盛一次意在高远的文化拓展，这是一个新意盎然的开始。在瞬息万变和信息爆炸的移动互联网时代，除了坚守本色，冲浪时代潮流是每一个传统文化领域所必须做出的选择。</p>';
					_content+= '<p>中国正在经历一个由中国制造转为中国智造的时代，文化艺术也成为一种生产力，这个伟大转变的真正完成，非一已之力，也不是某一个行业所能独一完成的。自古以来瓷都景德镇都有一种海纳百川的胸怀，今日我们亦期望打造一个视野开阔、跨界与融合的线上展览平台，不光是瓷上艺术，也包括当代艺术与创意文化。</p>';
					_content+= '<p>我们致力于在全球范围内发现、激励、联合更多的艺术家、文创精英，以陶瓷为介质，创作更多符合时代潮流的作品，使陶瓷文化艺术更好的屹立于世界文化之林，成为中国陶瓷与世界有更多交流和合作的国际平台。</p>';
					_content+= '<p>在京盛线上美术馆这个虚拟空间里，可以看作是一个具有东方美学的梦之意境，它不仅带来超越现实的碰撞之感，也将是一个给人以无限瑕想的艺术新天地……</p>';
					_content+= '<p>为了线上美术馆给大家更好的体验感，为了让每位艺术家的作品都有足够的时间让人品鉴，本次瓷上敦煌线上群展为首期，第二期将在2016年春季推出，欢迎各位同仁、艺术家、观众多提意见，有任何建议和合作意向请与本公司联系。</p>';
					_content+= '<p>京盛线上美术馆<br>2016年1月8日<br><br></p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/edit-btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				display:'none',
				left:600,
				top:650,
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/enter_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:802,
				top:826,
				click:function(){gotoScene('scene2','scene1');},
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/enter_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:2608,
				top:826,
				click:function(){gotoScene('scene4','scene1');},
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/enter_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:3022,
				top:826,
				click:function(){gotoScene('scene6','scene1');},
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:167,
				h:71,
				src:'images/scene1/basement_door_close.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:4139,
				top:785,
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:272,
				h:137,
				src:'images/scene1/basement_door_open_v2.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:4063,
				top:725,
				display:'none',
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/clock.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:4200,
				top:670,
				click:function(){openTheColock();},
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/clock_open.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:4200,
				top:670,
				//click:function(){gotoScene('scene8');},
				display:'none',
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/enter_down_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:4200,
				top:670,
				click:function(){openBasementDoor();},
				display:'none',
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:171,
				h:248,
				src:'images/scene1/cart_door_open.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 100%',
				bg_size:'100% 100%',
				left:4390,
				top:696,
				display:'none',
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/enter_down_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				display:'none',
				left:345,
				top:996,
				click:function(){gotoScene('baner3','scene1',true);},
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:219,
				h:219,
				src:'images/scene1/shop_log.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 100%',
				bg_size:'100% 100%',
				left:4560,
				top:100,
				display:'block',
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:318,
				h:318,
				src:'images/scene1/circle_318_1.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:1826,
				top:78,
				animate:'scene1-rotate'
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:195,
				h:195,
				src:'images/scene1/scene1-flower2-195.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:4068,
				top:446,
				animate:'scene1-rotate'
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:106,
				h:106,
				src:'images/scene1/scene1-flower2-195.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:4228,
				top:406,
				animate:'scene1-rotate'
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:78,
				h:78,
				src:'images/scene1/scene1-flower2-195.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:4168,
				top:366,
				animate:'scene1-rotate'
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:703,
				h:1117,
				src:'images/scene1/bamboo.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:4400,
				top:0,
				animate:'scene1-bamboo'
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/cart-btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:4531,
				top:753,
				click:function(){cartDoorOpen();}
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/enter_left_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:4363,
				top:602,
				click:function(){gotoScene('scene9','scene1');},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:120,
				h:200,
				bg_color:'none',
				left:1079,
				top:512,
				click:function(){
					var _content = '<p><img src="images/works/scene1/046.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Art of Dunhuang (1/2)<br> 敦煌艺术—半身像 </p>';
					_content+= '<p>宁钢<br>男，1961年出生。毕业于武汉理工大学，景德镇陶瓷学院副院长、教授。</p>';
					_content+= '<p>尺寸(cm) / 55×80.5cm <br>瓷板 / 综合装饰</p>';
					exhibitItemShow(_content);
				}
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:116,
				h:107,
				bg_color:'none',
				left:1324,
				top:635,
				click:function(){
					var _content = '<p><img src="images/works/scene1/072.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Lotus appear in heart<br> 心相莲出</p>';
					_content+= '<p>袁俐<br>女，1974年出生。毕业于山东艺术学院，山东艺术学院副教授。</p>';
					_content+= '<p>尺寸(cm) / 5.3h×50.2diameter <br>立件 / 颜色釉(瓷盘)</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:100,
				h:214,
				bg_color:'none',
				left:1488,
				top:510,
				click:function(){
					var _content = '<p><img src="images/works/scene1/014.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Avalokitesvara<br> 观世音</p>';
					_content+= '<p>范敏祺<br>男，1964年出生。毕业于景德镇陶瓷学院，中国陶瓷艺术大师，景德镇陶瓷艺术研究院院长。</p>';
					_content+= '<p>尺寸(cm) / 36×84cm <br>瓷板 / 古彩</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:146,
				h:245,
				bg_color:'none',
				left:1712,
				top:475,
				click:function(){
					var _content = '<p><img src="images/works/scene1/051.jpg?t=1231232321"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Pocerlain Art of Dunhuang<br> 瓷画敦煌</p>';
					_content+= '<p>饶伟华<br>男，1972年出生。毕业于景德镇艺术彩绘专科学校，景德镇市高级工艺美术师。</p>';
					_content+= '<p>尺寸(cm) / 60×100cm / 80×100cm <br>瓷板 / 颜色釉</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:200,
				h:245,
				bg_color:'none',
				left:1876,
				top:475,
				click:function(){
					var _content = '<p><img src="images/works/scene1/051.jpg?t=1231232321"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Pocerlain Art of Dunhuang<br> 瓷画敦煌</p>';
					_content+= '<p>饶伟华<br>男，1972年出生。毕业于景德镇艺术彩绘专科学校，景德镇市高级工艺美术师。</p>';
					_content+= '<p>尺寸(cm) / 60×100cm / 80×100cm <br>瓷板 / 颜色釉</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:146,
				h:245,
				bg_color:'none',
				left:2106,
				top:475,
				click:function(){
					var _content = '<p><img src="images/works/scene1/051.jpg?t=1231232321"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Pocerlain Art of Dunhuang<br> 瓷画敦煌</p>';
					_content+= '<p>饶伟华<br>男，1972年出生。毕业于景德镇艺术彩绘专科学校，景德镇市高级工艺美术师。</p>';
					_content+= '<p>尺寸(cm) / 60×100cm / 80×100cm <br>瓷板 / 颜色釉</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:80,
				h:153,
				bg_color:'none',
				left:1950,
				top:734,
				click:function(){
					var _content = '<p><img src="images/works/scene1/082.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">TRUE NATURE<br> 本真</p>';
					_content+= '<p>赵兰涛<br>男，1978年出生。毕业于景德镇陶瓷学院，景德镇陶瓷学院副教授。</p>';
					_content+= '<p>尺寸(cm) /  31l×20w×63h <br>立件 / 雕塑</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:100,
				h:856,
				bg_color:'none',
				left:2850,
				top:30,
				click:function(){
					var _content = '<p><img src="images/works/scene1/024.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Memory of thousand Buddha<br> 千佛印象</p>';
					_content+= '<p>黄胜<br>男，1969年出生。毕业于景德镇陶瓷学院，景德镇陶瓷学院教授。</p>';
					_content+= '<p>尺寸(cm) / 8l×12.5w×24.5h <br>立件 / 颜色釉（镶器）</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:198,
				h:206,
				bg_color:'none',
				left:2970,
				top:380,
				click:function(){
					var _content = '<p><img src="images/works/scene1/095.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Buddha is the experienced man-1<br> 佛是过来-1</p>';
					_content+= '<p>吴也凡<br>男，1953年出生。毕业于厦门大学，景德镇陶瓷学院教授</p>';
					_content+= '<p>尺寸(cm) / 83x84cm <br>瓷板 / 综合装饰</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:102,
				h:125,
				bg_color:'none',
				left:3210,
				top:740,
				click:function(){
					var _content = '<p><img src="images/works/scene1/066.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Feitian Bodhisattva<br> 飞天</p>';
					_content+= '<p>俞军<br>男，1962年出生。毕业于景德镇陶瓷学院，中国工艺美术大师。</p>';
					_content+= '<p>尺寸(cm) / 36l×16w×50h <br>立件 / 陶艺</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:392,
				h:428,
				bg_color:'none',
				left:3631,
				top:377,
				click:function(){
					var _content = '<p><img src="images/works/scene1/067.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Thousand-hands Bodhisattva Guanyin<br> 千手观音</p>';
					_content+= '<p>余曙亮<br>男，1976年出生。毕业于景德镇学院，景德镇高级工艺美术师。</p>';
					_content+= '<p>尺寸(cm) / 160×180cm <br>瓷板 / 粉彩</p>';
					exhibitItemShow(_content);
				},
			},
	 	]
	 },
	 'scene2':{
		org_w:1090,
		org_h:1094,
		left:0,
		item:[
			{
				type:'img',
				tag_name:'img',
				is_bg:false,
				is_main:true,
				w:'auto',
				h:'100%',
				src:'images/scene2/scene2-bg.png',
				left:0,
				top:0,
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/enter_right_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:168,
				top:576,
				click:function(){gotoScene('scene3','scene2');},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:271,
				h:210,
				bg_color:'none',
				left:337,
				top:522,
				click:function(){
					var _content = '<p><img src="images/works/scene2/088.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Supreme<br> 无上图</p>';
					_content+= '<p>王莹+释妙光<br>王莹,女，1969年出生。毕业于上海大学美术学院，景德镇陶瓷学院副教授。<br>释妙光，男，青云古寺住持。</p>';
					_content+= '<p>尺寸(cm) / 27×111cm <br>瓷板 / 版雕</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:290,
				h:220,
				bg_color:'none',
				left:687,
				top:522,
				click:function(){
					var _content = '<p><img src="images/works/scene2/084.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Dream Back to Dunhuang<br> 东方神韵</p>';
					_content+= '<p>朱斐翡<br>男，1977年出生。毕业于中国美术学院，任教于景德镇陶瓷学院。</p>';
					_content+= '<p>尺寸(cm) / 32×112cm <br>瓷板 / 青花</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:150,
				h:80,
				bg_color:'none',
				left:591,
				top:754,
				click:function(){
					var _content = '<p><img src="images/works/scene2/077.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Circle&Tur<br> 圆·转</p>';
					_content+= '<p>周晓亚<br>男，1963年出生。毕业于中国戏曲学院，中国戏曲学院副教授。</p>';
					_content+= '<p>尺寸(cm) / 24.8h×41.5diameter / 23.5h×41.3diameter <br>立件 / 雕塑</p>';
					exhibitItemShow(_content);
				},
			},
	 ]
   },
   'scene3':{
		org_w:2550,
		org_h:1101,
		left:0,
		item:[
			{
				type:'img',
				tag_name:'img',
				is_bg:false,
				is_main:true,
				w:'auto',
				h:'100%',
				src:'images/scene3/scene3-bg.png',
				left:0,
				top:0,
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:465,
				h:387,
				src:'images/scene3/scene3-tree-l.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:-10,
				top:0,
				animate:'scene3-tree-l'
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:470,
				h:365,
				src:'images/scene3/scene3-tree-r.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:2094,
				top:0,
				animate:'scene3-tree-r'
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:181,
				h:137,
				bg_color:'none',
				left:343,
				top:515,
				click:function(){
					var _content = '<p><img src="images/works/scene3/065.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Impression of Dunhuang<br>敦煌印象</p>';
					_content+= '<p>喻明福<br>男，1966年出生。毕业于景德镇陶瓷学院，江西省工艺美术大师。</p>';
					_content+= '<p>尺寸(cm) / 87×123cm<br>瓷板 / 颜色釉</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:87,
				h:163,
				bg_color:'none',
				left:769,
				top:498,
				click:function(){
					var _content = '<p><img src="images/works/scene3/052.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Sweet Music of Dunhuang<br> 敦煌韵曲</p>';
					_content+= '<p>饶晓晴<br>男，1961年出生。毕业于景德镇陶瓷学院，中国工艺美术大师。</p>';
					_content+= '<p>尺寸(cm) / 57×113cm <br>立件 /  综合装饰（瓷瓶）</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:137,
				h:181,
				bg_color:'none',
				left:1133,
				top:498,
				click:function(){
					var _content = '<p><img src="images/works/scene3/016.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Nine dragons shower<br>九龙灌顶</p>';
					_content+= '<p>方复<br>男，1941年出生。毕业于景德镇陶瓷学院，景德镇陶瓷职工大学教授。</p>';
					_content+= '<p>尺寸(cm) / 57×113cm <br>瓷板 / 古彩</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:315,
				h:196,
				bg_color:'none',
				left:1410,
				top:481,
				click:function(){
					var _content = '<p><img src="images/works/scene3/062.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Dream Dunhuang<br> 梦敦煌</p>';
					_content+= '<p>解强<br>男，1964年出生。毕业于轻工业部广州工艺美术学校，江西省工艺美术大师。</p>';
					_content+= '<p>尺寸(cm) / 73×136cm  <br>瓷板 / 新彩</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:550,
				h:137,
				bg_color:'none',
				left:1790,
				top:645,
				click:function(){
					var _content = '<p><img src="images/works/scene3/047.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">The Impression of Dunhuang<br> 印象敦煌</p>';
					_content+= '<p>彭赞宾<br>男，1974年出生。毕业于景德镇陶瓷学院，任教于景德镇陶瓷学院。</p>';
					_content+= '<p>尺寸(cm) / 44×116.5cm / 41×112m / 40l×6w×11h <br>立件 / 陶艺</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:74,
				h:133,
				bg_color:'none',
				left:2429,
				top:551,
				click:function(){
					var _content = '<p><img src="images/works/scene3/022.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Spiritual Transition<br> 精神变迁</p>';
					_content+= '<p>韩子丰<br>男，1979年出生。内蒙古大学毕业，进修于中央美院国画系，景德镇陶瓷艺术研究院美术馆馆长。</p>';
					_content+= '<p>尺寸(cm) / 63.6×80.8cm <br>瓷板 / 综合彩绘</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:1132,
				h:106,
				bg_color:'none',
				left:213,
				top:755,
				click:function(){
					var _content = '<p><img src="images/works/scene3/055.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Lotus boat<br>莲舟</p>';
					_content+= '<p>邵长宗<br>男，1981年出生。毕业于景德镇陶瓷学院，任教于景德镇陶瓷学院。</p>';
					_content+= '<p>尺寸(cm) / 54l×34w×13.5h<br>立件 / 雕塑</p>';
					exhibitItemShow(_content);
				},
			},
	 ]
   },
   'scene4':{
		org_w:1261,
		org_h:1096,
		left:0,
		item:[
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:715,
				h:895,
				src:'images/scene1/scene5-bg.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:147,
				top:115,
			},
			{
				type:'img',
				tag_name:'img',
				is_bg:false,
				is_main:true,
				w:'auto',
				h:'100%',
				src:'images/scene4/scene4-bg.png',
				left:0,
				top:0,
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/enter_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:285,
				top:939,
				click:function(){gotoScene('scene5','scene4');},
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:361,
				h:361,
				src:'images/scene4/left.gif',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:0,
				top:0,
				animate:''
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:361,
				h:361,
				src:'images/scene4/right.gif',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:880,
				top:740,
				animate:''
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:114,
				h:204,
				bg_color:'none',
				left:100,
				top:517,
				click:function(){
					var _content = '<p><img src="images/works/scene1/030.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Bodhisattva take flower<br> 持花菩萨</p>';
					_content+= '<p>刘莎<br>女，1981年出生。毕业于景德镇陶瓷学院，江西省工艺美术师。</p>';
					_content+= '<p>尺寸(cm) / 30×113cm <br>瓷板 / 综合装饰</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:72,
				h:98,
				bg_color:'none',
				left:570,
				top:657,
				click:function(){
					var _content = '<p><img src="images/works/scene4/074.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Repeat ten thousands chant of Buddha<br> 万念一声佛</p>';
					_content+= '<p>叶文怡<br>女，1978年出生。毕业于广州美术学院，常驻景德镇进行艺术创作。</p>';
					_content+= '<p>尺寸(cm) / 52h×21diameter <br>立件 / 颜色釉（香炉）</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:138,
				h:292,
				bg_color:'none',
				left:700,
				top:467,
				click:function(){
					var _content = '<p><img src="images/works/scene4/028.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Self-free Bodhisattva Guanyin<br> 观自在菩萨</p>';
					_content+= '<p>柯育天<br>男，1969年出生。毕业于中央美术学院，常驻景德镇进行艺术创作。</p>';
					_content+= '<p>尺寸(cm) / 83×172cm <br>瓷板 / 青花</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:114,
				h:204,
				bg_color:'none',
				left:1064,
				top:517,
				click:function(){
					var _content = '<p><img src="images/works/scene4/070.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Namo Earth store Bodhisattiva<br> 南无地藏王菩萨</p>';
					_content+= '<p>杨李英<br>女，1966年出生。毕业于江西师范大学，江西省陶瓷技能大师。</p>';
					_content+= '<p>尺寸(cm) / 100×100cm<br>瓷板 / 墨彩描金</p>';
					exhibitItemShow(_content);
				},
			},	
	 ]
   },
   'scene5':{
		org_w:4488,
		org_h:1105,
		left:0,
		item:[
			{
				type:'img',
				tag_name:'img',
				is_bg:false,
				is_main:true,
				w:'auto',
				h:'100%',
				src:'images/scene5/scene5-bg-v1.jpg',
				left:0,
				top:0,
			},
			/*{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				position:'fixed',
				w:4252,
				h:333,
				src:'images/scene5/scene5-cloud.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:0,
				top:0,
				animate:''
			},*/
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:126,
				h:94,
				bg_color:'none',
				left:208,
				top:496,
				click:function(){
					var _content = '<p><img src="images/works/scene5/081.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Dun Huang<br> 敦煌</p>';
					_content+= '<p>赵传玉<br>男，1964年出生。毕业于中央美院，景德镇陶瓷学院教授。</p>';
					_content+= '<p>尺寸(cm) / 45×90cm <br>瓷板 / 青花</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:134,
				h:112,
				bg_color:'none',
				left:548,
				top:464,
				click:function(){
					var _content = '<p><img src="images/works/scene5/056.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Give Care<br> 垂慈</p>';
					_content+= '<p>涂志浩<br>男，1969年出生。毕业于景德镇陶瓷学院，江西省工艺美术大师。</p>';
					_content+= '<p>尺寸(cm) / 75×64cm<br>瓷板 / 珐华彩</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:266,
				h:136,
				bg_color:'none',
				left:942,
				top:452,
				click:function(){
					var _content = '<p><img src="images/works/scene5/002.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Imaging Zen<br> 禅林漫相</p>';
					_content+= '<p>陈少岳<br>男，1977年出生。毕业于俄罗斯苏里科夫美术学院，常驻景德镇进行艺术创作。</p>';
					_content+= '<p>尺寸(cm) / 154×71.5cm<br>瓷板 / 颜色釉</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:288,
				h:494,
				bg_color:'none',
				left:1452,
				top:400,
				click:function(){
					var _content = '<p><img src="images/works/scene5/078.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">The heart like lotus bloom<br>心似莲花朵朵开</p>';
					_content+= '<p>周玲<br>女，1976年出生。毕业于景德镇陶瓷学院，江西省高级工艺美术师。</p>';
					_content+= '<p>尺寸(cm) / 135l×267w×162h<br>立件 / 雕塑</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:176,
				h:292,
				bg_color:'none',
				left:2026,
				top:366,
				click:function(){
					var _content = '<p><img src="images/works/scene5/039.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Dunhuang<br>敦煌</p>';
					_content+= '<p>李川<br>男，1972年出生。毕业于景德镇陶瓷学院，江西省陶瓷艺术大师。</p>';
					_content+= '<p>尺寸(cm) / 42×173cm<br>瓷板 / 颜色釉</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:344,
				h:194,
				bg_color:'none',
				left:2512,
				top:450,
				click:function(){
					var _content = '<p><img src="images/works/scene5/080.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Realm<br>境界</p>';
					_content+= '<p>赵坤<br>女，1969年出生。毕业于景德镇陶瓷学院，江西省陶瓷艺术大师。</p>';
					_content+= '<p>尺寸(cm) / 40l×25w×64h<br>立件 / 雕塑</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:292,
				h:291,
				bg_color:'none',
				left:2980,
				top:324,
				click:function(){
					var _content = '<p><img src="images/works/scene5/068.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">A dialogue under Puti tree<br>菩提树下的对话</p>';
					_content+= '<p>虞锋波<br>男，1976年出生。毕业于景德镇陶瓷学院，任教于景德镇陶瓷学院。</p>';
					_content+= '<p>尺寸(cm) / 57×112cm / 46h×25diameter<br>瓷板 /综合装饰<br>立件 / 雕塑(综合装饰)</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:438,
				h:248,
				bg_color:'none',
				left:3554,
				top:376,
				click:function(){
					var _content = '<p><img src="images/works/scene5/011.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">The Bodhisattva Guan Yin<br>大慈大悲千手千眼观世音菩萨 救苦救难图</p>';
					_content+= '<p>顾坚<br>男，1967年出生。毕业于景德镇陶瓷职工大学，常驻景德镇进行艺术创作。</p>';
					_content+= '<p>尺寸(cm) / 200×120cm<br>瓷板 / 墨彩描金</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:111,
				h:194,
				bg_color:'none',
				left:4264,
				top:450,
				click:function(){
					var _content = '<p><img src="images/works/scene5/018.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Bodhisattva Siwei<br>思维菩萨</p>';
					_content+= '<p>方康莱<br>男，1964年出生。毕业于广州美术学院，常驻景德镇进行艺术创作。</p>';
					_content+= '<p>尺寸(cm) / 67×87cm<br>瓷板 / 新彩</p>';
					exhibitItemShow(_content);
				},
			},
	 ]
   },
   'scene6':{
		org_w:1699,
		org_h:1126,
		left:-950,
		top:-120,
		item:[
			{
				type:'img',
				tag_name:'img',
				is_bg:false,
				is_main:true,
				w:'auto',
				h:'100%',
				src:'images/scene6/scene6-bg_v2.png',
				left:0,
				top:0,
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:69,
				src:'images/enter_down_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				display:'none',
				left:1227,
				top:785,
				click:function(){gotoScene('scene1','scene6');},
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:68,
				src:'images/enter_left_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:1532,
				top:394,
				click:function(){gotoScene('scene7','scene6');},
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:2204,
				h:1017,
				src:'images/scene6/scene-6-xk.jpg',
				bg_repeat:'repeat-x',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:0,
				top:0,
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:228,
				h:511,
				src:'images/scene6/scene_6_yhy.png',
				bg_repeat:'repeat-x',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:1155,
				top:78,
			},
			
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:181,
				h:153,
				bg_color:'none',
				left:82,
				top:609,
				click:function(){
					var _content = '<p><img src="images/works/scene6/009.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Dunhuang legacy of rhythm<br>敦煌遗韵</p>';
					_content+= '<p>邓和平<br>男，1962年出生。毕业于江西师范大学美术学院，常驻景德镇进行艺术创作。</p>';
					_content+= '<p>尺寸(cm) / 54.5l×12w×40.5h<br>瓷板 / 颜色釉</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:174,
				h:172,
				bg_color:'none',
				left:465,
				top:508,
				click:function(){
					var _content = '<p><img src="images/works/scene6/006.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Zen in gold<br>禅化融金</p>';
					_content+= '<p>曹春生<br>男，1960年出生。毕业于景德镇陶瓷学院美术系，景德镇陶瓷学院教授。</p>';
					_content+= '<p>尺寸(cm) / 32l×13w×19h / 22l×20w×47h <br>立件 / 雕塑</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:194,
				h:199,
				bg_color:'none',
				left:789,
				top:410,
				click:function(){
					var _content = '<p><img src="images/works/scene6/026.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Story of Deer King<br>鹿王本生（镶器）</p>';
					_content+= '<p>江友桥<br>男，1968年出生。毕业于陶瓷职业专科美术学校，常驻景德镇进行艺术创作。</p>';
					_content+= '<p>尺寸(cm) / 40l×40w×63h <br>立件 / 高温颜色釉综合装饰（镶器）</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:250,
				h:531,
				bg_color:'none',
				left:1155,
				top:78,
				click:function(){
					var _content = '<p><img src="images/works/scene6/087.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Flying Dreams<br>飞天梦</p>';
					_content+= '<p>孟福伟<br>男，1976年出生。毕业于中央美术学院，任教景德镇陶瓷学院。</p>';
					_content+= '<p>尺寸(cm) / 112×50cm <br>立件  / 雕塑</p>';
					exhibitItemShow(_content);
				},
			},
	 ]
   },
   'scene7':{
		org_w:3239,
		org_h:1027,
		left:-2820,
		item:[
			{
				type:'img',
				tag_name:'img',
				is_bg:false,
				is_main:true,
				w:'auto',
				h:'100%',
				src:'images/scene7/scene7-bg.jpg',
				left:0,
				top:0,
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:505,
				h:458,
				src:'images/scene7/grass_l.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:-130,
				top:581,
				animate:'scene3-tree-l'
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:540,
				h:458,
				src:'images/scene7/grass_r.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:3180,
				top:581,
				animate:'scene3-tree-r'
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:78,
				h:109,
				bg_color:'none',
				left:109,
				top:353,
				click:function(){
					var _content = '<p><img src="images/works/scene7/035.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Impression of Dunhuang<br>敦煌壁画印象</p>';
					_content+= '<p>李文跃<br>男，1959年出生。毕业于景德镇陶瓷学院，江西陶瓷工艺美院教授，中国工艺美术大师。</p>';
					_content+= '<p>尺寸(cm) / 55.8×60cm <br>瓷板 / 粉彩</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:120,
				h:198,
				bg_color:'none',
				left:407,
				top:283,
				click:function(){
					var _content = '<p><img src="images/works/scene7/083.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Dream Back to Dunhuang<br>梦回敦煌</p>';
					_content+= '<p>赵永丽<br>女，1979年出生。毕业于景德镇陶瓷学院，常驻景德镇进行艺术创作。</p>';
					_content+= '<p>尺寸(cm) / 28×112cm / 28×113cm <br>瓷板 / 颜色釉</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:250,
				h:151,
				bg_color:'none',
				left:809,
				top:311,
				click:function(){
					var _content = '<p><img src="images/works/scene7/063.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Buddha_listen dharma<br>佛 ∙ 听法</p>';
					_content+= '<p>解晓明<br>男，1974年出生。毕业于韩国圆光大学，景德镇陶瓷学院副教授。</p>';
					_content+= '<p>尺寸(cm) / 80×135cm<br>立件 / 浮雕</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:132,
				h:150,
				bg_color:'none',
				left:869,
				top:495,
				click:function(){
					var _content = '<p><img src="images/works/scene7/004.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Ponder over cloud<br>云之思</p>';
					_content+= '<p>陈丽萍<br>女，1971年出生。毕业于中央美术学院。景德镇陶瓷学院教授。</p>';
					_content+= '<p>尺寸(cm) / 40l×29w×78h<br>立件 / 雕塑</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:876,
				h:95,
				bg_color:'none',
				left:1257,
				top:335,
				click:function(){
					var _content = '<p><img src="images/works/scene7/013.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Wisdom<br>慧</p>';
					_content+= '<p>郭爱和<br>男，1964年出生。毕业于洛阳师院，中国陶瓷艺术大师。</p>';
					_content+= '<p>尺寸(cm) / 50×50cm<br>瓷板 / 洛阳三彩 </p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:121,
				h:126,
				bg_color:'none',
				left:2301,
				top:353,
				click:function(){
					var _content = '<p><img src="images/works/scene7/033.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Nine dragons holy cup<br>九龙浴佛尊</p>';
					_content+= '<p>李伟<br>男，1979年出生。毕业于景德镇陶瓷学院，景德镇陶瓷学院副教授。</p>';
					_content+= '<p>尺寸(cm) / 31l×31w×50h<br>立件 / 雕刻（礼器）</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:108,
				h:212,
				bg_color:'none',
				left:2599,
				top:283,
				click:function(){
					var _content = '<p><img src="images/works/scene7/025.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Bodhisattva Guan Yin<br>观音</p>';
					_content+= '<p>黄景藏<br>男，1962年出生。毕业于景德镇陶瓷职业大学，江西省工艺美术大师。</p>';
					_content+= '<p>尺寸(cm) / 57×113cm<br>瓷板 / 高温颜色釉</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:118,
				h:212,
				bg_color:'none',
				left:2899,
				top:283,
				click:function(){
					var _content = '<p><img src="images/works/scene7/094.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">The world is full of love<br>洒向人间都是爱</p>';
					_content+= '<p>王怀俊<br>男，1943年出生。毕业于景德镇陶瓷学院，中国工艺美术大师。</p>';
					_content+= '<p>尺寸(cm) / 112×56cm<br>瓷板 /  粉彩</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:236,
				h:176,
				bg_color:'none',
				left:2845,
				top:528,
				click:function(){
					var _content = '<p><img src="images/works/scene7/092.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Pogoda<br>支提</p>';
					_content+= '<p>谢永<br>男，1978年出生。毕业于云南艺术学院，常驻景德镇进行艺术创作。</p>';
					_content+= '<p>尺寸(cm) / 60h×23.3diameter<br>立件 / 雕塑</p>';
					exhibitItemShow(_content);
				},
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:226,
				h:212,
				bg_color:'none',
				left:3171,
				top:283,
				click:function(){
					var _content = '<p><img src="images/works/scene7/050.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Feitian Bodhisattva<br>飞天(竖向)</p>';
					_content+= '<p>覃福勇<br>男，1977年出生。毕业于景德镇陶瓷学院，任教于景德镇陶瓷学院。</p>';
					_content+= '<p>尺寸(cm) / 57×113cm<br>瓷板 / 浮雕</p>';
					exhibitItemShow(_content);
				},
			},
	 ]
   },
   'scene8':{
		org_w:1476,
		org_h:1071,
		left:-418,
		item:[
			{
				type:'img',
				tag_name:'img',
				is_bg:false,
				is_main:true,
				w:'auto',
				h:'100%',
				src:'images/scene8/scene8-bg.jpg',
				left:0,
				top:0,
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:1476,
				h:1071,
				src:'images/scene8/scene-8-light.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:0,
				top:0,
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:1476,
				h:1071,
				src:'images/scene8/scene-8-layer.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:0,
				top:0,
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:1476,
				h:644,
				src:'images/scene8/flower.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:0,
				top:427,
				animate:'scene8-updownFlower2'
			},
			{
				type:'block',
				tag_name:'div',
				is_main:false,
				w:654,
				h:155,
				bg_color:'none',
				left:415,
				top:478,
				click:function(){
					var _content = '<p><img src="images/works/scene8/029.jpg"  style="width:100%;"/></p>';
					_content+= '<p style="text-transform : uppercase;font-size:18px;">Visalia-dhatu<br>景·界</p>';
					_content+= '<p>康青<br>女，1964年出生。毕业于中国美院，上海大学美术学院副教授。</p>';
					_content+= '<p>尺寸(cm) / 5×3.5cm<br>立件 / 陶艺</p>';
					exhibitItemShow(_content);
				},
			},
	 ]
   },
   'scene9':{
		org_w:640,
		org_h:936,
		left:0,
		item:[
			{
				type:'img',
				tag_name:'img',
				is_bg:false,
				is_main:true,
				w:'auto',
				h:'100%',
				src:'images/scene9/scene9-bg.jpg',
				left:0,
				top:0,
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:68,
				h:69,
				src:'images/scene9/key_btn.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:60,
				top:750,
				click:function(){getTheKey();}
			},
			{
				type:'button',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:108,
				h:143,
				src:'images/scene9/light_dot.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:45,
				top:700,
				click:function(){getTheKey();}
			},
			{
				type:'img',
				tag_name:'div',
				is_bg:true,
				is_main:false,
				w:640,
				h:256,
				src:'images/scene9/flower2.png',
				bg_repeat:'no-repeat',
				bg_position:'0% 0%',
				bg_size:'100% 100%',
				left:0,
				top:700,
				animate:'scene9-updownFlower3'
			},
	 ]
   },
}

