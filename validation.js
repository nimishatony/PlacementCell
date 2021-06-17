function valied()
{
  /* Name filed validation*/
    var Name=document.myform.name.value;
    if (Name==null || Name=="") //to chech the field is black or not
    {  
      alert("Name can't be blank");
      document.myform.name.focus(); //focus the curser on the next field
      return false;  
    }
  /* Address validation */
    var Address=document.getElementById("address").value; //geting the value by id given in the field
    if (Address==null || Address=="")
    {  
      alert("Address can't be blank"); 
      document.myform.address.focus(); 
      return false; 
    }
  /* Gender validation */
    var Gender=document.myform.gender.value;
    if (Gender==null || Gender=="")
    {  
      alert("Gender can't be blank");  
      document.myform.address.focus();
      return false;  
    }
  /* Age field validation */
    var Age=document.getElementById("age").value;
    if (Age==null || Age=="")
    {  
      alert("Age can't be blank");  
      return false; 
    }
  /* phone number valiation */
    var Phone = document.myform.phone.value;
    var phonelength = Phone.length;
    if(Phone=="")
    {
      alert("please Enter the Contact Number");
      document.myform.phone.focus();
      return false;
    }
    if(phonelength!=10) //to check the input contain 10 digits(contact must contain only 10 digits)
    {
      alert("please Enter a valied Contact Number");
      document.myform.phone.focus();
      return false;
    }
    if(isNaN(Phone)) //to check the input contain only numbers
    {
      alert("please Enter only digits");
      document.myform.phone.focus();
      return false;
    }
  /* Email validation */
    var Email=document.myform.email.value;
    if (Email==null || Email=="")
    {  
      alert("Email can't be blank"); 
      document.myform.email.focus();
      return false;  
    } 
  /* Upload field validation */
    var Resume=document.myform.upload.value;
    if (Resume==null || Resume=="")
    {  
      alert("Please Upload Your Resume");  
      document.myform.upload.focus();
      return false;  
    }
  // Select (Qualificaton) field validation
  /* Select your option(Qualificatons are displayed in options)*/
    var Qualification=document.myform.qualification.value;
    if (Qualification==null || Qualification=="")
    {  
      alert("Please Select Your Qualification"); 
      document.myform.qualification.focus(); 
      return false;  
    }
  /* Password field validation */
    var Password=document.myform.password.value;
    if (Password==null || Password=="")
    {  
      alert("Password can't be blank");
      document.myform.password.focus();  
      return false;  
    }
    var Repassword=document.myform.repassword.value;
    if (Repassword==null || Repassword=="")
    {  
      alert("Please renter your password");
      document.myform.repassword.focus();  
      return false;  
    }
}
/* Email Validation */
function emailval()
{
  var Email=document.myform.email.value;
  var emailval=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(Email.match(emailval))
  {
    document.myform.email.focus();
    return true; 
  } 
  else
  {
    alert("Enter a valied email address"); 
    document.myform.email.focus();
    return false;
  }
}
//Password Validation
function passwordval()
{
  var Password=document.myform.password.value;
  var passwordval=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; /* To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character */
  if(Password.match(passwordval))
  {
    document.myform.password.focus();
    return true; 
  } 
  else
  {
    alert("Must contain at least one number and one uppercase and lowercase letter, and at least 8 to maximum 15 characters"); 
    document.myform.password.focus();
    return false;
  }
}
/* Password Testing */
function match()
{
  var firstpassword=document.myform.password.value;  
  var secondpassword=document.myform.repassword.value;  
  if(firstpassword==secondpassword)
  {  
    return true;  
  }  
  else
  {  
    alert("password must be same!");  
    return false;  
  } 
} 