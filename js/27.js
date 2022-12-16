// var x = prompt("Enter a string:")
// var c =0;
// for(i=0;i<x.length;i++)
//  {
//    if(x[i] != "a" && x[i]!= "e" && x[i] != "i" && x[i] != "o" && x[i] != "u" )
//    {
// 	   document.write(x[i]);
// 	   c++;
//    }
//  }

var x=parseInt(prompt("enter limit :"));
for(i=0;i<x;i++)
{
	for(j=0;j<x;j++)
	{
		document.write("*" +"&nbsp &nbsp");
		//document.write("*");
		
	}
	document.write("<br>");
}
