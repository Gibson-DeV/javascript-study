class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addAtTheEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    addAtTheBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    removeFromEnd() {
        if (!this.head) {
            return 'list is empty';
        }

        let current = this.head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        if (previous === null) {
            this.head = null;
        } else {
            previous.next = null;
        }

        return current.data;
    }

    removeFromBeginning() {
        if (!this.head) {
            return 'List is empty';
        }

        const value = this.head.data;
        this.head = this.head.next;

        return value;
    }

    insertAt(data, position) {
        if (position < 0) {
            return 'Invalid position';
        }

        const newNode = new Node(data);

        if (position === 0) {
            this.addAtTheBeginning(data);
            return;
        }

        let current = this.head;
        let previous = null;
        let index = 0;

        while (index < position && current !== null) {
            previous = current;
            current = current.next;
            index++;
        }

        if (index === position) {
            newNode.next = current;
            if (previous !== null) {
                previous.next = newNode;
            } else {
                return 'Invalid index';
            }
        }
    }

    removeAt(position){
        if (position < 0) {
            return 'Invalid index';
        }

        if(position === 0) {
            this.removeFromBeginning();
            return;
        }

        let current = this.head;
        let previous = null;
        let index = 0;

        while(index < position && current !== null) {
            previous = current;
            current = current.next;
            index++;
        }

        if(index === position) {
            if(previous !== null) {
                previous.next = current.next;
            }
            return current.data;
        }
    }

    printAll() {
        if (this.head === null) {
            console.log('list is empty!');
            return;
        }

        let current = this.head;

        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();

list.addAtTheEnd(10);
list.addAtTheEnd(9);
list.addAtTheEnd(8);
list.addAtTheEnd(7);
list.addAtTheEnd(6);
list.addAtTheEnd(5);
list.removeAt(2);
list.printAll();
console.log('------------')
list.insertAt(11,1);
list.printAll();
