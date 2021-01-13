
function fun(name) {
    console.log(`Hi ${name}! Have fun!`);
}

// const _fun = fun;
// export { _fun as fun };

module.exports.fun = fun;
