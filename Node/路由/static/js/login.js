var login = document.querySelector("#login");
      var loginpost = document.querySelector("#loginpost");
      var username = document.querySelector("#username");
      var password = document.querySelector("#password");

    //   get请求
      login.onclick = () => {
        fetch(
          `/api/login?username=${username.value}&password=${password.value}`
        )
          .then((res) => res.text())
          .then((res) => {
            console.log(res);
          });
      };

    //   post请求
      loginpost.onclick = () => {
        fetch(`/api/loginpost`, {
          method: "POST",
          body: JSON.stringify({
            username: username.value,
            password: password.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.text())
          .then((res) => {
             console.log(res);
          });
      };