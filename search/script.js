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
	#items { \
		list-style-type: none; \
		padding: 0; \
		margin: 0; \
	} \
	#items li a { \
		border: 1px solid #ddd; \
		margin-top: -1px; \
		background-color: \#444444; \
		padding: 12px; \
		text-decoration: none; \
		font-size: 18px; \
		color: #ffffff; \
		display: block; \
	} \
	#items li a:hover { \
		background-color: \#666666; \
	} \
</style> \
<ul id=\"items\"> \
	<li><a>Item 1</a></li> \
	<li><a>Item 2</a></li> \
</ul> \
";

function refineSearch() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("items");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
