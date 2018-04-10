// It is called REVEALING CONSTRUCTOR pattern because
// the constructor is revealing its internal capabilities,
// but ONLY TO THE CODE THAT CONSTRUCTS.

// The advantages of this is that only the CONSTRUCTING CODE
// has access to internal resolve and reject functions and once the object is constructed
// it can passed around safely; no other code will be able
// internal reject or resolve and change the internal state

const RevealingConstructor = function(executor) {
    this.status = 'pending';
    this.value = undefined;
    const resolve = val => {
        this.status = 'resolved';
        this.value = val;
    };
    const reject = val => {
        this.status = 'reject';
        this.value = val;
    };
    executor(resolve, reject);
};

let p = new RevealingConstructor(function(res, rej) {
    setTimeout(() => {
        res(10);
    }, 3000);
});

console.log(p);
setTimeout(() => {
    console.log(p);
}, 4000);
