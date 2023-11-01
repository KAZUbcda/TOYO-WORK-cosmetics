document.getElementById("button").onclick = function() {
    let get_name = document.getElementById("get_name").value;
    let get_email = document.getElementById("get_email").value;
    let get_password = document.getElementById("get_password").value;
    let get_re_password = document.getElementById("get_re_password").value;

	localStorage.setItem("name", get_name);
   	localStorage.setItem("email", get_email);
   	localStorage.setItem("password", get_password);

	var flag = 0;
    if(get_name.length == 0){flag = 1;}
    if(get_email.length == 0){ flag = 1; }
    if(get_password.length == 0){ flag = 1; }

    if(flag == 1){ alert('必須項目が未記入の箇所があります'); }
	else{
        var regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
        if(regexp.test(get_email) != true){ alert('メールアドレスが形式に沿っていません'); }
		
		var regexp = /^([a-zA-Z0-9]{8,})$/;
        if( regexp.test(get_password) != true ){ alert('パスワードが半角英数8文字以上になっていません'); }
        if( get_password != get_re_password ){ alert('パスワードが再入力時と違っています'); }
	}

};

// データの読み込み
function load() {
   let save_userdata = "";
    if(!localStorage.getItem("name")) {
        save_userdata = "No data";
    } else {
	   	save_userdata = localStorage.getItem("name");
    }

    document.getElementById("set_name").innerHTML = save_userdata;
}


