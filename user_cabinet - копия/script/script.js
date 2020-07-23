document.querySelector('#signup-submit').onclick = function(event) {
    event.preventDefault();
    let name = document.querySelector('#signup-name').value;
    let pass = document.querySelector('#signup-pass').value;
    let email = document.querySelector('#signup-email').value;
    let birthday = document.querySelector('#signup-birthday').value;
    let sex = document.querySelectorAll('.sex');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }
    let data = {
        "name": name,
        "pass": pass,
        "email": email,
        "birthday": birthday,
        "sex": sex,
    }

    ajax('core/signup.php', 'POST', signup, data);

    function signup(result) {
        console.log(result);
        if (result == 2) {
            createChips('Заполните поля!', 'yellow', 3000);
            document.querySelector('.chips-field').style.zIndex = '99999';
        } else if (result == 1) {
            createChips('Успех. Теперь можно войти!', 'LightGreen', 3000);
            closeModal();
        } else {
            createChips('Ошибка, повторите регистрацию позже!', 'red', 5000);
            document.querySelector('.chips-field').style.zIndex = '99999';
        }
    }
}

document.querySelector('#login-submit').onclick = function(event) {
    event.preventDefault();
    let pass = document.querySelector('#login-pass').value;
    let email = document.querySelector('#login-email').value;

    let data = {
        "pass": pass,
        "email": email
    }

    ajax('core/login.php', 'POST', login, data);

    function login(result) {
        if (result == 2) {
            createChips('Заполните поля!', 'yellow', 3000);
            document.querySelector('.chips-field').style.zIndex = '99999';
        } else if (result == 0) {
            createChips('Пользователь не найден!', 'red', 3000);
            document.querySelector('.chips-field').style.zIndex = '99999';
        } else {
            result = JSON.parse(result);
            var d = new Date();
            d.setTime(d.getTime() + (10 * 60 * 1000));
            var expires = d.toUTCString();
            document.cookie = `email=${result.email}; expires=${expires}; path=/`;
            location.href = "cabinet.php";
        }
    }
}

/* --------- main.js --------- */

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        'format': 'dd-mm-yyyy',
    });
});

document.querySelectorAll('.modal-show').forEach(function(element) {
    element.onclick = showModal;
});

document.querySelectorAll('.modal-project-close').forEach(function(element) {
    //закрываем окно на кнопке закрыть
    element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function(element) {
    //закрываем окно на клике в области серой
    element.onclick = closeModal;
});

function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function(event) {
        //закрываем окно на кнопку Esc
        if (event.keyCode == 27) closeModal();
    }
}

function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach(function(element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;
}

document.querySelector('#log-in .modal-project').onclick = function(event) {
    event.stopPropagation();
}

document.querySelector('#sign-up .modal-project').onclick = function(event) {
    event.stopPropagation();
}

document.querySelector('.read-rules').onclick = function() {
    document.querySelector('.form-slider').style.marginLeft = '-345px';
}

document.querySelector('.read-rules-back').onclick = function() {
    document.querySelector('.form-slider').style.marginLeft = '0';
}

document.querySelector('#agree-rules').onchange = function() {
    if (this.checked) {
        document.querySelector('#signup-submit').classList.remove('disabled');
    } else {
        document.querySelector('#signup-submit').classList.add('disabled');
    }
}

/* --------- main.js --------- */