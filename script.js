// Tambahkan kode JavaScript kalian di file ini

// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name: name,
    city: city,
    email: email,
    zipCode: zipCode,
    status: status,
  };
}

function isNumber(input) {
  return !isNaN(input);
}

function checkboxIsChecked() {
  const statusCheckbox = document.getElementById("status");
  return statusCheckbox.checked;
}

function validateFormData(formData) {
  if (!formData) {
    return false;
  }

  if (!isNumber(formData.zipCode)) {
    return false;
  }

  if (!checkboxIsChecked()) {
    return false;
  }

  return true;
}

function submit() {
  const formData = handleGetFormData();

  if (validateFormData(formData)) {
    document.getElementById("warning").textContent = "";
    // Lakukan proses submit form di sini
  } else {
    document.getElementById("warning").textContent =
      "Periksa form anda sekali lagi";
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});
