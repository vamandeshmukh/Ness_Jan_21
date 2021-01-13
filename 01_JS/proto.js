// prototype inheritance in JS 
// prototype 

// let obj = { id: 101, name: 'Hari', phones: { home: 1010, office: 2020 } };

// let fun = function () {
//     this.a = 10;
//     this.b = 20;
// }

// let f1 = new fun();

// fun.prototype.a = 5;
// fun.prototype.b = 6;

// console.log(f1.a);
// console.log(fun.a);

class Parent {
    // members 1 
}
class Child extends Parent {
    // ... members 1 
    // members 2 
}

let set = new Set();

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

console.log(rabbit.__proto__);


// in JS object 




'This is my name.'

    `This is ${aaa} name.`








async function create(req, res, next) {

    try {
        const issuerService = issuerServiceFactory(req.claims.id, req.claims.keyStorageToken);

        let existingIssuer = await issuerService.findAll({
            nameEqual: req.body.name
        });
        existingIssuer = existingIssuer[0];

        if (existingIssuer) {
            throw createHttpError(409, `Issuer with name ${req.body.name} already exists`);
        }

        const issuer = await issuerService.create({
            name: req.body.name,
            country: req.body.country
        });
        return res.json(issuer);
    } catch (err) {
        return next(err);
    }
}

async function getIssuer(req, res, next) {
    try {
        const issuerService = issuerServiceFactory(req.claims.id, req.claims.keyStorageToken);
        const issuer = await issuerService.findOrError(req.params.id);

        return res.json(issuer);
    } catch (err) {
        return next(err);
    }
}

async function getIssuers(req, res, next) {
    try {
        const params = req.query;

        await policy.addIssuers(req.claims.id, params, 'id');

        params









