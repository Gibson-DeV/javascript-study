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

    append(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(data) {
        if (this.head !== null && this.head.data === data) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            while (current != null && current.next != null && current.next.data != data) {
                current = current.next;
            }
            if (current && current.next) {
                current.next = current.next.next;
            }
        }
    }

    print() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();

list.append(10);
list.append(80);
list.append(90);
list.append(110);
list.append(40);
list.append(30);
list.append(20);

list.print();

list.remove(110);

list.print();
