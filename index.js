$("#signupform").submit(function(event){
    event.preventDefault();
    var datatopost=$(this).serializeArray();
    console.log(datatopost);
    $.ajax({
        url:"sign.php",
        type:"post",
        data: datatopost,
        error:function(){
        alert("Eroor");
    }
    })
});