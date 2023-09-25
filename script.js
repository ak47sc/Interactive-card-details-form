const card_nun_field = document.querySelector("#card-no");
const card_num_text = document.querySelector(".card-num");

const card_name_field = document.querySelector("#card-name");
const card_name_text = document.querySelector(".card-name")

const card_mm_field = document.querySelector("#exp-mm");
const card_yy_field = document.querySelector("#exp-yy");
const card_date_text = document.querySelector(".card-date");

const card_cvc_field = document.querySelector("#card-cvc")
const card_cvc_text = document.querySelector(".card-back p")

const errorMessages = document.querySelectorAll("form p");
const confirm_btn = document.querySelector("#submit");

const form_ele = document.querySelector("form");
const success_ele = document.querySelector(".success");

let mm = "00", yy = "00";

card_name_field.addEventListener("input", () => {
    card_name_field.classList.remove("error");
    card_name_text.textContent = card_name_field.value;
    if (card_name_field.value.length == 0) {
        card_name_text.textContent = "Jane Appleseed";
    }
    else {
        errorMessages[0].textContent = "";
    }
});

card_nun_field.addEventListener("input", () => {
    card_nun_field.classList.remove("error");
    card_num_text.textContent = card_nun_field.value;
    if (card_nun_field.value.length == 0) {
        card_num_text.textContent = "0000 0000 0000 0000";
    }
    else if (card_nun_field.value.match(/[a-zA-Z]/g)) {
        card_nun_field.classList.add("error");
        errorMessages[1].textContent = "wrong format , numbers only";

    }
    else if (!card_nun_field.value.match(/\d{4} \d{4} \d{4} \d{4}/g)) {
        card_nun_field.classList.add("error");
        errorMessages[1].textContent = "wrong format";

    }
    else {
        errorMessages[1].textContent = "";
    }
});

card_mm_field.addEventListener("input", () => {
    card_mm_field.classList.remove("error");
    mm = card_mm_field.value;
    card_date_text.textContent = `${mm}/${yy}`;

    if (card_mm_field.value.length == 0) {
        mm = "00";
        card_date_text.textContent = `${mm}/${yy}`;
        errorMessages[2].textContent = "";
    }
    else if (card_mm_field.value.match(/[a-zA-Z]/g)) {
        card_mm_field.classList.add("error");
        errorMessages[2].textContent = "wrong format , numbers only";

    }
    else if (Number.parseInt(card_mm_field.value) > 12 || !card_mm_field.value.match(/\d{2}/g)) {
        card_mm_field.classList.add("error");
        errorMessages[2].textContent = "wrong format";g

    }
    else {
        errorMessages[2].textContent = "";
    }
});

card_yy_field.addEventListener("input", () => {
    card_yy_field.classList.remove("error");
    yy = card_yy_field.value;
    card_date_text.textContent = `${mm}/${yy}`;
    if (card_yy_field.value.length == 0) {
        yy = "00";
        card_date_text.textContent = `${mm}/${yy}`;
        errorMessages[2].textContent = "";
    }
    else if (card_yy_field.value.match(/[a-zA-Z]/g)) {
        card_yy_field.classList.add("error");
        errorMessages[2].textContent = "Numbers only";

    }
    else if (!card_yy_field.value.match(/\d{2}/g)) {
        card_yy_field.classList.add("error");
        errorMessages[2].textContent = "wrong format";

    }
    else {
        errorMessages[2].textContent = "";
    }
});

card_cvc_field.addEventListener("input", () => {
    card_cvc_field.classList.remove("error");
    card_cvc_text.textContent = card_cvc_field.value;
    if (card_cvc_field.value.length == 0) {
        card_cvc_text.textContent = "000";
    }
    else if (card_cvc_field.value.match(/[a-zA-Z]/g)) {
        card_cvc_field.classList.add("error");
        errorMessages[3].textContent = "Numbers only";

    }
    else if (!card_cvc_field.value.match(/\d{3}/g)) {
        card_cvc_field.classList.add("error");
        errorMessages[3].textContent = "wrong format";

    }
    else {
        errorMessages[3].textContent = "";
    }
});

card_name_field.addEventListener("blur", () => {
    if (card_name_field.value.length == 0) {
        card_name_field.classList.add("error");
        errorMessages[0].textContent = "Can't be blank";

    }
});
card_nun_field.addEventListener("blur", () => {
    if (card_nun_field.value.length == 0) {
        card_nun_field.classList.add("error");
        errorMessages[1].textContent = "Can't be blank";

    }
});
card_mm_field.addEventListener("blur", () => {
    if (card_mm_field.value.length == 0) {
        card_mm_field.classList.add("error");
        errorMessages[2].textContent = "Can't be blank";

    }
});
card_yy_field.addEventListener("blur", () => {
    if (card_yy_field.value.length == 0) {
        card_yy_field.classList.add("error");
        errorMessages[2].textContent = "Can't be blank";

    }
});
card_cvc_field.addEventListener("blur", () => {
    if (card_cvc_field.value.length == 0) {
        card_cvc_field.classList.add("error");
        errorMessages[3].textContent = "Can't be blank";

    }
});

confirm_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (card_name_field.value.length == 0) {
        card_name_field.classList.add("error");
        errorMessages[0].textContent = "Can't be blank";
    }
    if (card_nun_field.value.length == 0) {
        card_nun_field.classList.add("error");
        errorMessages[1].textContent = "Can't be blank";
    }
    if (card_mm_field.value.length == 0) {
        card_mm_field.classList.add("error");
        errorMessages[2].textContent = "Can't be blank";
    }
    if (card_yy_field.value.length == 0) {
        card_yy_field.classList.add("error");
        errorMessages[2].textContent = "Can't be blank";
    }
    if (card_cvc_field.value.length == 0) {
        card_cvc_field.classList.add("error");
        errorMessages[3].textContent = "Can't be blank";
    }
    if(document.querySelector(".error")){
        console.log("error");
    }
    else{
        form_ele.classList.toggle("hidden");
        success_ele.classList.toggle("hidden");
    }
});
