
const req = new XMLHttpRequest();

req.onload = function () {
    console.log(this);
};

req.onerror = function () {
    console.log('Erro', this);
};

req.open = ('GET', 'https://swapi.dev/api/people/1');{
    console.log('Erro', this);
};