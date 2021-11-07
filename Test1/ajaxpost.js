/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-11-06 20:33:51
 * @modify date 2021-11-07 20:43:06
 * @desc [Form submit event - on clicking the submit button]
 */
/**
 * submit button click call the handleSubmit.
 *  
 */
window.onload = function(){  
  var formElement = document.getElementById("log_form");
  formElement.addEventListener('submit',function (event){
    event.preventDefault();
    handleSubmit();
  })
}
/**
 * handleSubmit - method send the request with the data (user input) as JSON  to the given end point and validate  and return the response as ErrCode.
 * if  ErrCode is 0 (success), redirect to the given URL
 * if ErrCode is 1 (failed) , display the failed response in the user browser.
 */
const handleSubmit = () =>{
  
  const reqURL = "https://xcifytest.azurewebsites.net/home/login";
  const redirectURL = "https://xcifytest.azurewebsites.net/home/helloworld";

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const error_message = document.getElementById("err_message");

  const reqBody = {
    UserName: username,
    Password: password
  }
  $.ajax({
    type: "POST",
    url: reqURL,
    data: reqBody, 
    dataType: "json",
    success: function (data) {
      if (data.ErrCode){
        error_message.style.display="block";
      }
      else{
        window.location.replace(redirectURL);
      }
    }
  });

}