//variable declaration
var content;

function GetXmlHttpObject()
{
	var xmlHttp = null;
				
	try
	{
		//FireFox, Opera 8.0+, Safari
		xmlHttp = new XMLHttpRequest();
	}
	catch (e)
	{
		//Internet Explorer
		try
		{
			xmlHttp = new ActiveXObject("Maxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

function getSongs()
{
	content = GetXmlHttpObject();
	
	if(content == null)
	{
		alert("Your browser does not support AJAX");
	}
	
		var url = "getSongs.php";
		url = url + "?sid=" + Math.random();
		content.onreadystatechange = stateChanged;
		content.open("GET",url, true);
		content.send(null);
}

function stateChanged()
{
	if (content.readyState == 4 || content.readyState == "Complete")
	{
		document.getElementById('loadPeriodical').innerHTML = content.responseText;
	}
}