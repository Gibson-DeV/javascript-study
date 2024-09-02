class Queue {
    constructor() {
        this.items = [];
        this.count = 0;
        this.head = 0;
    }

    push(data){
        this.items[this.count] = data;
        this.count ++;
    }

    getFront() {
        if(this.count === 0 ) {
            return 'Queue is empty!'
        } else {
            return this.items[this.head]
        }
    }

    getBack(){
        if(this.count === 0 ){
            return 'Queue is empty!'
        } else {
            return this.items[this.count - 1]
        }
    }

    removeFront(){
        if(this.count === 0) {
            return 'Queue is empty!'
        } else {
            const numberFront = this.items[this.head];
            delete this.items[this.head];
            this.head ++;
            this.count--;
            
            return numberFront;
        }
    }
}

const queue = new Queue();

queue.push(5);
queue.push(6);
queue.push(7);

const nF = queue.getFront();
const nB = queue.getBack();
const frontRemovido = queue.removeFront();
console.log(nF);
console.log(nB);
console.log(frontRemovido);
console.log(queue);
console.log(queue.getFront());

