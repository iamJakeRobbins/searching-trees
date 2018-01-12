const Node = require('./Node')
const Queue = require('./Queue')

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(data) {
		if(!this.root) {
			this.root = new Node(data)
		} else {
			let currentNode = this.root

			while(true) {
				if(data <= currentNode.data) {
					if(currentNode.left) {
						currentNode = currentNode.left
					} else {
						currentNode.left = new Node(data)
						break
					}
				} else {
					if(currentNode.right) {
						currentNode = currentNode.right
					} else {
						currentNode.right = new Node(data)
						break
					}
				}
			}
		}
	}

	dfs(cb, node=this.root) {
		cb(node.data)
	if(node.left){
		this.dfs(cb, node.left)
	}
	if(node.right){
		this.dfs(cb, node.right)
	}
	 }


    // Write an algorithm using depth first search that will take in a callback function and call it while passing each nodes data starting down the left path
		// Expected order: '25, 15, 17, 197, 97, 9997'


	bfs(cb, node=this.root) {
		const q = []
		q.push(node)
			while (q.length > 0) {
				let current = q.shift()
				cb(current.data)
				if (current.left) q.push(current.left)
				if (current.right) q.push(current.right)
			}
  //
	// 	// Brooks code is below, if uses methods from the Queue.js file---
	// 	// 	const nodes = new Queue()
	// 	// 	nodes.enqueue(node)
	// 	// while (!nodes.isEmpty) {
	// 	// 	node = nodes.dequeue()
	// 	// 	cb(node.data);
	// 	// 	if (node.left) nodes.enqueue(node.left);
	// 	// 	if (node.right) nodes.enqueue(node.right)
  //   //
	// 	// }
	}
}


module.exports = BinarySearchTree
