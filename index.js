const form = document.querySelector('.form');
const button = document.querySelector('button');
const name_lastNameInput = document.getElementById('name_lastName');
const birthInput = document.getElementById('birth');
const femaleGender = document.getElementById('femaleGender');
const maleGender = document.getElementById('maleGender');
const femaleGenderLabel = document.querySelector('.femaleGender');
const maleGenderLabel = document.querySelector('.maleGender');
const cityInput = document.getElementById('city');
const addressInput = document.getElementById('address');
const inputFlags = document.querySelectorAll('.checkbox input');
const labelFlags = document.querySelectorAll('.checkbox label');

const table = document.querySelector('.block__table');

function clearForm() {
    name_lastNameInput.value = '';
    birthInput.value = '';

    femaleGender.checked = true;

    cityInput.value = '';
    addressInput.value = '';
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    const tr = document.querySelector('.table__body__tr');
    tr.innerHTML = ``;
    const name_lastName = document.createElement('td');
    const birth = document.createElement('td');
    const genderTd = document.createElement('td');
    const city = document.createElement('td');
    const address = document.createElement('td');
    const languages = document.createElement('td');

    name_lastName.innerText = `${name_lastNameInput.value}`;
    birth.innerText = `${birthInput.value}`;

    if(femaleGender.checked) {
        genderTd.innerText = `${femaleGenderLabel.outerText}`;
    }
    if(maleGender.checked) {
        genderTd.innerText = `${maleGenderLabel.outerText}`;
    }

    let count = 0;
    let tdLanguages = '';
    inputFlags.forEach((item) => {
        if(item.checked)
            count++;
    });
    if(count !== 0) {
        inputFlags.forEach((item, i) => {
            if(item.checked) {
                tdLanguages += `${labelFlags[i].outerText}`;
                if (count === 1) {
                    tdLanguages += '.';
                }
                if (count > 1) {
                    tdLanguages += ', ';
                }
                count--;
            }
        });
        languages.innerText = `${tdLanguages}`;
    } else {
        languages.innerText = `Українська`;
    }

    city.innerText = `${cityInput.value}`;
    address.innerText = `${addressInput.value}`;

    tr.append(name_lastName, birth, genderTd, city, address, languages);
    clearForm();

    form.classList.add('hide');
    table.classList.remove('hide');
});

