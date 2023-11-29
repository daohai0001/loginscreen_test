//Nhập bất kì đều vào được

function login(e){
    event.preventDefault();
    var username = document.getElementById("field_username").value;
    var password = document.getElementById("field_password").value;
    var user = {
        username: username,
        password: password
    }
    var json =JSON.stringify(user);
    localStorage.setItem(user, json)
   

    if (username == null)
    {
        alert("Vui lòng nhập tên tài khoản hoặc mật khẩu")
    }
    else if(user!=null)
    {
        alert("Đăng nhập thành công");
        window.location.href="wellcome.html";

}
}


//Trường hợp đúng tài khoản mật khẩu mới có thể đăng nhập được 
// function login(e){
//     event.preventDefault();
//     var username = document.getElementById("field_username").value;
//     var password = document.getElementById("field_password").value;
//     var user1 = localStorage.getItem(username)
//     var data = JSON.parse(user1)

//     if (user1 == null)
//     {
//         alert("Vui lòng nhập tên tài khoản hoặc mật khẩu")
//     }
//     else if(username == data.username && password == data.password)
//     {
//         alert("Đăng nhập thành công");
//         window.location.href="wellcome.html";
//     }
//     else 
//     {
//         alert ("Đăng nhập không thành công")
//     } 
// }

