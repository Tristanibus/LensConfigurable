//These are all the functions used by the tree (no need to touch)

function Node(data) {
    this.name = data[0]
    this.id = data[1]
    this.category = data[2]
    this.label = data[3];
    this.subLabels = data[4];
    this.price = data[5];
    // this.data = data;
    this.parent = null;
    this.children = [];
    this.level = 0  //new
}
 
function Tree(data) {
    var node = new Node(data);
    node.level = 1; //n
    this._root = node;

}




 
Tree.prototype.traverseDF = function(callback) {
 
    // this is a recurse and immediately-invoking function
    (function recurse(currentNode) {
        // step 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // step 3
            recurse(currentNode.children[i]);
        }
 
        // step 4
        callback(currentNode);
 
        // step 1
    })(this._root);
 
};



Tree.prototype.traverseBF = function(callback) {
    
    var queue = new Queue();
 
    queue.enqueue(this._root);
 
    currentTree = queue.dequeue();
 
    while(currentTree){
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
 
        callback(currentTree);
        currentTree = queue.dequeue();
    }
};
 
Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};



Tree.prototype.getNodeAndChildren = function (identifier, traversal){
     var output = {};
     var target_node = null,
     callback = function(node){
        // debugger
        if(node.id === identifier){
            target_node = node;
            output['node']= node;
        }
     }
     this.contains(callback, traversal);

     if(target_node){

        var children = target_node.children;
        var children_array = [];
        for(var i = 0; i< children.length; i++){
            children_array.push(children[i]);
        }
        output['children'] = children_array;
        return output;

     }

}

// Tree.prototype.getNode = function (identifier, traversal){
//      var target_node = null,
//      callback = function(node){
//         // debugger
//         if(node.id === identifier){
//             target_node = node;
//         }
//      }
//      this.contains(callback, traversal);
//      if(target_node){
//         return target_node;

//      }
     
// }

 
Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function(node) {
            if(node.id === toData){
                parent = node;
            }

            // if (node.data === toData) {
            //     parent = node;
            // }
        };
 
    this.contains(callback, traversal);
 
    if (parent) {
        parent.children.push(child);
        child.parent = parent;
        child.level = child.parent.level + 1; //n
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};