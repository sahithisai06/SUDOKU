const obj = {
    name: "JavaScript",
    print: function() {
        console.log(this.name);
    }
};

const fn = obj.print;
console.log(fn);