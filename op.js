class Node {
    constructor(data){
        this.value = data;
        this.next = null
    }
}

let head = new Node(1);
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)

head.next = node2;
node2.next = node3;
node3.next = node4;

console.log(head)