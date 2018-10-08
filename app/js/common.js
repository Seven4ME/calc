$(document).ready(function () {
	let valueAmount = $("#ammount").val();

		  $("#term").keyup(function(){
			let valueTerm = $("#term").val();
			if(valueTerm < 31){
				let currentPercentage = 0.01 / 100;
				let percentage = ((valueAmount*10) * ( valueTerm * 10 )*( currentPercentage*10 ))/1000;
				$("#percentage").text(percentage+" грн");
				$(".error").removeClass();
			}else{
				$("#term").addClass("error");
				$("#percentage").text("- -");
			}
			
		})
		.keyup();

		$( "#ammount" ).keyup(function() {
			if($("#ammount").val() < 3001){
				let valueAmount = $("#ammount").val();
				$( "#money" ).text(valueAmount + " грн");
				$(".error").removeClass();
			}else{
				$("#ammount").addClass("error");
				$("#money").text(" - -");
			}
		  })
		  
		  .keyup();
		
});

$("#take__loan").on("click",function(){
	$(".fixed__calculator").css("width","250px");
	$("#take__loan").css("display","none");
	$(".input__ammount").css("display","flex");
	$(".input__term").css("display","flex");
	$(".get__credit").css("display","block");
	$("table").css("display","table");
	$(".close__window").css("display","block");
})
$(".close__window").on("click",function(){
	$(".fixed__calculator").css("width","40px");
	$("#take__loan").css("display","inline");
	$(".input__ammount").css("display","none");
	$(".input__term").css("display","none");
	$(".get__credit").css("display","none");
	$("table").css("display","none");
	$(".close__window").css("display","none");
})