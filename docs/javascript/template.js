function menu(){

    var html = "";
    html += '<nav>';
	html +=		'<ul id="main">';
	html +=		'<li>HOME</li>';
	html +=		'<li>ABOUT</li>';
	html +=		'<li>WORK';
	html +=		'<ul class="drop">';
	html +=		        		'<div>';
	html +=		        			'<li>I always think of you</li>';
	html +=		        		'</div>';
	html +=		      		'</ul>';
	html +=		    	'</li>';
	html +=			'<li>BIOGRAPHY</li>';
	html +=			'<li>CONTACT</li>';
	html +=			'<div id="marker"></div>';
	html +=		'</ul>';
	html +=	'</nav>';
   
    document.write(html);
}