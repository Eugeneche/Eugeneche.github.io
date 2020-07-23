document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        'format': 'dd-mm-yyyy',
    });
});

let userEmail = getCookie('email');

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/* Только вызываем данные с сервера для показа */

ajax('core/get_user_data.php', undefined, showUserData, { 'email': userEmail });

function showUserData(result) {
    result = JSON.parse(result);

    document.querySelector('#signup-email').outerHTML = `${userEmail}`;
    document.querySelector('#signup-name').value = result.name;
    document.querySelector('#signup-pass').value = result.password;
    document.querySelector('#signup-birthday').value = result.birthday;
    M.updateTextFields();

    /* перебираем текстовые поля и задаем им неактивный статус */

    let t = document.querySelectorAll('input[type="text"]');

    for (let i = 0; i < t.length; i++) {
        t[i].disabled = true;
    }


    document.querySelector(`.sex[value="${result.sex}"]`).outerHTML = `<input type="radio" value="${result.sex}" name="sex" checked class="sex">`;

    /* перебираем радиобаттоны и задаем им неактивный статус */

    let s = document.querySelectorAll('.sex');

    for (let i = 0; i < s.length; i++) {
        s[i].disabled = true;
    }

    /* прячем кнопку подтверждения отправки на сервер */

    document.querySelector('#signup-submit').style.cssText = 'display: none';
}

document.querySelector('#signup-start-update').onclick = function(event) {
    event.preventDefault();
    ajax('core/get_user_data.php', undefined, getUserData, { 'email': userEmail });
}

/* получаем данные с активными полями */

function getUserData(result) {
    result = JSON.parse(result);

    document.querySelector('#signup-name').value = result.name;
    document.querySelector('#signup-pass').value = result.password;
    document.querySelector('#signup-birthday').value = result.birthday;
    M.updateTextFields();

    let t = document.querySelectorAll('input[type="text"]');

    for (let i = 0; i < t.length; i++) {
        t[i].disabled = false;
    }

    /* выводим ранее выбранный радиобаттон */

    document.querySelector(`.sex[value="${result.sex}"]`).outerHTML = `<input type="radio" value="${result.sex}" name="sex" checked class="sex">`;

    /* перебираем радиобаттоны и задаем им активный статус */

    let s = document.querySelectorAll('.sex');

    for (let i = 0; i < s.length; i++) {
        s[i].disabled = false;
    }

    /* выводим кнопку подтверждения отправки на сервер, а кнопку начала изменения данных - прячем */

    document.querySelector('#signup-submit').style.cssText = 'display: block';
    document.querySelector('#signup-start-update').style.cssText = 'display: none';
}

document.querySelector('#signup-submit').onclick = function(event) {
    event.preventDefault();
    let name = document.querySelector('#signup-name').value;
    let pass = document.querySelector('#signup-pass').value;
    let birthday = document.querySelector('#signup-birthday').value;
    let sex = document.querySelectorAll('.sex');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }

    let updatedData = {
        'email': userEmail,
        'name': name,
        'pass': pass,
        'birthday': birthday,
        'sex': sex,
    }

    ajax('core/update_user_data.php', undefined, updateUserData, updatedData);

    function updateUserData(result) {
        if (result == 1) {
            createChips('Ваши данные успешно обновлены!', 'LightGreen', 5000);
        } else {
            createChips('Произошла ошибка обновления, повторите позже.', 'red', 5000);
        }
    }
}

/* -------- logout.js ----------- */

document.querySelector('#logout').onclick = function () {
    var c = document.cookie;
    var d = new Date();
    d.setTime(d.getTime() - (10 * 60 * 1000));
    var expires = d.toUTCString();
    document.cookie = `${c}; expires=${expires}; path=/`;
    location.reload();
}

/* -------- logout.js ----------- */