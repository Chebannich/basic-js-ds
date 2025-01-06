const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this._addNode(this.rootNode, data);
  }

  _addNode(node, data) {
    if(!node) {
      return new Node(data)
    }

    if(data < node.data) {
      node.left = this._addNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._addNode(node.right, data);
    }
    
    return node;
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    return this._findNode(this.rootNode, data)
  }

  _findNode(node, data) {
    if(!node) {
      return null;
    }

    if (data === node.data) {
      return node;
    }

    if (data < node.data) {
      return this._findNode(node.left, data);
    } else {
      return this._findNode(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this._revomeNode(this.rootNode, data)
  }

  _revomeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this._revomeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._revomeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      let minRight = this._findMinNode(node.right);
      node.data = minRight.data;
      node.right = this._revomeNode(node.right, minRight.data)
      return node;
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    return this._findMinNode(this.rootNode).data;
  }

  _findMinNode(node) {
    while (node.left) {
      node = node.left
    }

    return node;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    return this._findMaxNode(this.rootNode).data;
  }

  _findMaxNode(node) {
    while (node.right) {
      node = node.right;
    }

    return node;
  }
}

module.exports = {
  BinarySearchTree
};