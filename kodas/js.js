//solid navbar

window.onscroll = function(){
  var top = window.scrollY;
  if (top > 50) {
    document.getElementById("navbar").classList.add('active')
  }
  else{
    document.getElementById("navbar").classList.remove('active')
  }
}

function billingFunction(){
	
	
	if (document.getElementById('same').checked){
		
		document.getElementById('billingName').value = document.getElementById("shippingName").value;
		document.getElementById('billingZip').value= document.getElementById("shippingZip").value;
		
	}
	else{
		document.getElementById('billingName').value="";
		document.getElementById('billingZip').value="";
	}
}


function upDate(previewPic){
  var src = previewPic.getAttribute( "src" );
  var alt = previewPic.getAttribute( "alt" );
  document.getElementById('image').style.backgroundImage = "url('" + src + "')";
  document.getElementById('image').innerHTML = alt;
}
 
function unDo(previewPic){
 document.getElementById('image').innerHTML='Užvesti pelytę ant paveikslėlio';
 document.getElementById('image').style.backgroundImage = "url('')";
}