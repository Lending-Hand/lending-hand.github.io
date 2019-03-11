var parsedUrl = new URL(window.location.href);
document.getElementById('content').innerHTML = " \
<style> \
	#myInput { \
		width: 100%; \
		font-size: 16px; \
		padding: 12px 20px 12px 40px; \
		border: 1px solid #ddd; \
		margin-bottom: 12px; \
	} \
	#myUL { \
		list-style-type: none; \
		padding: 0; \
		margin: 0; \
	} \
	#myUL li a { \
		border: 1px solid #ddd; \
		margin-top: -1px; \
		background-color: \#444444; \
		padding: 12px; \
		text-decoration: none; \
		font-size: 18px; \
		color: #ffffff; \
		display: block; \
	} \
	#myUL li a:hover:not(.header) { \
		background-color: \#666666; \
	} \
</style> \
<input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for inputs...\"> \
<ul id=\"myUL\"> \
<li><a onclick=\"askAction()\">action</a></li> \
<li><a onclick=\"askContent()\">content</a></li> \
</ul> \
";	
