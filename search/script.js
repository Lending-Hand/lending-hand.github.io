var parsedUrl = new URL(window.location.href);
document.getElementById('content').innerHTML = " \
<style> \
	#items { \
		list-style-type: none; \
		padding: 0; \
		margin: 0; \
	} \
	#items li a { \
		border: 1px solid #328de3; \
		margin-top: -1px; \
		background-color: #ffffff; \
		padding: 12px; \
		text-decoration: none; \
		font-size: 18px; \
		color: #000000; \
		display: block; \
	} \
	#items li a:hover { \
		background-color: #328de3; \
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
