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
let node5 = new Node(5)
let node6 = new Node(6)

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(head)