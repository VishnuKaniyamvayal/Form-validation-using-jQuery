$(document).ready(function(){

	// adding a custom method for validating only letters in name section 
	jQuery.validator.addMethod("lettersonly", function(value, element) 
	{
return this.optional(element) || /^[a-z," ",A-Z]+$/i.test(value);
}, "Letters and spaces only please"); 
	$("#student_registration_form").validate({
		rules:{
			first_name:{
				lettersonly:true,
				required:true,
				maxlength:120,
			},
			last_name:{
				maxlength:120,
				number:false,
			},
			age:{
				required:true,
				number:true,
			},
			register_number:{
				number:true,
				required:true,
				maxlength:12,
				minlength:12,
			},
			email:{
				required:true,
				email:true,
			},
			phone_number:{
				required:true,
				number:true,
				maxlength:10,
				minlength:10,
			},
			program:{
				required:true,

			},
			address:{
				required:true,

			},
			pincode:{
				required:true,
				maxlength:6,
				minlength:6,
				number:true
			},
			family_income:{
				number:true,
			},
			radio:{
				required:true,
			},
			height:{
				number:true,
				maxlength:3,
			},
			weight:{
				number:true,
				maxlength:3,
			},
			agree_terms:{
				required:true,
			}



		},
		messages:{
			first_name:{
				required:"Please Enter Your First Name",
				maxlength:"Maxlength exceededs",
			},
			last_name:{
				maxlength:"Character limit exceded",
			},
			age:{
				required:"Please Enter Your Age",
				number:"Age should only contain numbers",
			},
			register_number:{
				required:"Please Enter your Reg.No",
				maxlength:"Reg.No should contain Exactly 12 digits",
				minlength:"Reg.No should contain Exactly 12 digits",
			},
			email:{
				required:"PLease Enter Your Number",
				email:"Enter a valid Email",
			},
			phone_number:{
				required:"Please Enter your Phone Number",
				number:"Number can only contain digits",
				maxlength:"phone number can only contain 10 digits",
				minlength:"phone number can only contain 10 digits",
			},
			program:{
				required:"Select any one Program",

			},
			address:{
				required:"Please Enter Your Address",
			},
			pincode:{
				required:"Please Enter your Pincode",
				maxlength:"6 digits required",
				minlength:"6 digits required",
				number:"Enter a valid pincode"
			},
			family_income:{
				number:"Enter a valid amount",
			},
			height:{
				number:"Enter a valid Digit",
				maxlength:"invalid height value",
			},
			weight:{
				number:"Enter a valid Digit",
				maxlength:"invalid weight value",
			},
			agree_terms:{
				required:"",
			}


		},
		// function to place the error label  element after the main label
		// function helps in ui layout error
		errorPlacement: function(error, element) 
        {
            if ( element.is(":radio" || ":checkbox") ) 
            {
                error.appendTo(element.parents('#gender') )
                error.appendTo(element.parents('#terms') );
            }
            else 
            { // This is the default behavior
                error.insertAfter( element );
            }
        },

        
	})

// function to change button color 


$('input:checkbox').change(function(){
    if($(this).is(":checked")) { // if the agree terms checkbox is checked color is blue
        $('#submit_button').addClass("btn-primary");
        $('#submit_button').removeClass("btn-secondary");
    } else { // else the color is gray
        $('#submit_button').addClass("btn-secondary");
        $('#submit_button').removeClass("btn-primary");
    }
})


})