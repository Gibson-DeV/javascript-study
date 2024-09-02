class Stack {
    constructor() {
        this.count = 0;
        this.items = [];
    }

    push(number) {
        this.items.push(number);
        this.count++;
    }

    pop(){
        const fistNumberInTheStack = this.items.pop();
        this.count--;

        console.log(`Number: ${fistNumberInTheStack} has been removed`)
    }

    clear(){
        this.items = 0;
        this.count = 0;

        console.log('Stack has been cleared')
    }

    peak(){
        return this.items[this.items.length - 1]
    }
}

const stack = new Stack();
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(99);

console.log(stack.peak())


