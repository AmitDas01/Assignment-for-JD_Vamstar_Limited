<script type="text/javascript">

	var span_data = document.getElementsByClassName("lbl-licitacao");
	// Publication Date (create CSS selectors)
	var publication_date = span_data[0].innerText;
	// Bidding Date (create CSS selectors)
	var bidding_date = span_data[5].innerText;
	// Object (create CSS selectors)
	var object_title = span_data[1].innerText;
	//All links related to this particular tender (create CSS selectors)
	var obj_data = document.getElementsByTagName('p')[0].innerText;
	var links = document.getElementsByClassName("field field--name-field-icone field--type-image field--label-hidden field__item")[0].firstElementChild.href;

	
	document.write("The data is given below : ");
	document.write("\n");
	// Printing Output of Publication Date
	document.write(publication_date.toString());
	document.write("\n");
	// Printing Output of Bidding Date
	document.write(bidding_date.toString());
	document.write("\n");
	// Printing Output of Object
	document.write(object_title.toString() + " " + obj_data.toString());
	document.write("\n");
	// Printing Output of Links
	document.write("The links are: " + links.toString());

</script>