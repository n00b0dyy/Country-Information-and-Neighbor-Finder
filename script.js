'use strict';

const _btn = document.querySelector('.btn-country');
const _cContainer = document.querySelector('.countries');
const _input = document.querySelector('.input-country');

const _req = fetch(`https://restcountries.com/v2/name/poland`);
console.log(_req);

const _rC = function (_d, _cN = '') {
  const _h = `
  <article class="country ${_cN}">
    <img class="country__img" src="${_d.flag}" />
    <div class="country__data">
      <h3 class="country__name">${_d.name}</h3>
      <h4 class="country__region">${_d.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +_d.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${_d.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${_d.currencies[0].name}</p>
    </div>
  </article>`;

  _cContainer.insertAdjacentHTML('beforeend', _h);

  _cContainer.style.opacity = 1;
};

const _rE = function (_m) {
  const _eC = document.createElement('div');
  _eC.className = 'error-container';
  _eC.textContent = _m;

  document.body.prepend(_eC);
  setTimeout(() => {
    _eC.remove();
  }, 1500);
};

const _gCD = function (_c) {
  _cContainer.innerHTML = '';

  fetch(`https://restcountries.com/v2/name/${_c}`)
    .then(_res => {
      if (!_res.ok) throw new Error(`Country not found (${_res.status})`);
      return _res.json();
    })
    .then(_d => {
      _rC(_d[0]);
      const _b = _d[0].borders;
      if (!_b?.length) throw new Error('No neighbours found!');
      const _rN = _b[Math.floor(Math.random() * _b.length)];
      return fetch(`https://restcountries.com/v2/alpha/${_rN}`);
    })
    .then(_res => {
      if (!_res.ok) throw new Error(`Neighbour not found (${_res.status})`);
      return _res.json();
    })
    .then(_d => _rC(_d, 'neighbour'))
    .catch(_err => _rE(_err.message));
};

_btn.addEventListener('click', () => {
  const _country = _input.value.trim();
  if (_country) {
    _gCD(_country);
  } else {
    _rE('Please enter a valid country name');
  }
});

_input.addEventListener('input', () => {
  const _country = _input.value.trim();

  const validPattern = /^[a-zA-Z-' ]*$/;

  if (!validPattern.test(_country)) {
    _rE('You can not use this character');
    _input.value = _country.replace(/[^a-zA-Z-' ]/g, '');
  }
});

_input.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const _country = _input.value.trim();

    if (!_country) {
      _rE('Please enter a country name');
    } else {
      _gCD(_country);
    }
  }
});
