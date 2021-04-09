
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000Dear&nbsp;&nbsp;DHL", 
				"亲爱的^200邓慧玲<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;九月的记忆回想起来,^300就好像是在盛夏做了一场梦。^200最初只是模糊地记得^600那无尽的蝉鸣和黏腻的湿热感，^600后来我想到了你，^200一切记忆又逐渐清晰了起来。^600有那波光的湖面，^200湖边嬉闹的身影，^200我们的笑声。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以及你附在我耳边的那句：^300<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我爱你，^600所以你不再是一座孤岛。<br><p style='float:right; display:block; width:80px;'>^1000董笑天</p>"],
			typeSpeed: 100,
			backSpeed: 50
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
