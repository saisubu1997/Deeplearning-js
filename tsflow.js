class NeuralNetwork{
constructor(input_nodes,hidden_nodes,output_nodes){
this.input_nodes=input_nodes;
this.hidden_nodes=hidden_nodes;
this.output_nodes=output_nodes;

this.input_weights = tf.randomNormal([this.input_nodes,this.hidden_nodes])
this.output_weights = tf.randomNormal([this.hidden_nodes,this.output_nodes])
}
predict(user_input){
let output;
tf.tidy(()=>{
  let input_layer = tf.tensor(user_input,[1,this.input_nodes]);
  let hidden_layer=  input_layer.matMul(this.input_weights).sigmoid();
  let outputLlayer= hidden_layer.mathMul(this.output_weights).sigmoid();
  output=output_layer.datasync()
});
return output;
}
clone(){
  let clonie = new NeuralNetwork(this.input_nodes,this.hidden_nodes,this.output_nodes)
  clonie.dispose()
  clonie.input_nodes = tf.clone(this.input_weights)
  clonie.output_nodes = tf.clone(this.output_nodes)
  return clonie
}
dispose(){
  this.input_weights.dispose()
  this.input_nodes.dispose()
}
}
