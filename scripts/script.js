$(document).ready(function(){
	$("#student_registration_form").validate({
		rules:{
			first_name:{
				required:true,
				maxlength:120,
			},
			last_name:{
				maxlength:120,
			},
			age:{
				required:true,
				number:true,
			},
			register_number:{
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

			}


		},
		messages:{
			first_name:{
				required:"Please Enter Your First Name",
				maxlength:120,
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

			}
			address:{
				required:"Please Enter Your Address"
			}

		}
	})
})