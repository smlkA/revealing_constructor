class RevealingConstructor {
    constructor(executor) {
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
    }
}

let p = new RevealingConstructor(function(res, rej) {
    setTimeout(() => {
        res(10);
    }, 3000);
});

console.log(p);
setTimeout(() => {
    console.log(p);
}, 4000);
