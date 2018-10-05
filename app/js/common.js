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
				$( "#money" ).text( valueAmount+" грн" );
				$(".error").removeClass();
			}else{
				$("#ammount").addClass("error");
				$("#money").text(" - -");
			}
		  })
		  .keyup();
});


