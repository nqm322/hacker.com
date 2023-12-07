function saveData() {
  let email = document.getElementById("floatingInput").value;
  let password = document.getElementById("floatingPassword").value;

  let userData = {
    email: email,
    password: password,
  };

  fetch("/save-data-endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Ответ сервера:", data);
    })
    .catch((error) => {
      console.error("Ошибка отправки данных на сервер:", error);
    });
}
