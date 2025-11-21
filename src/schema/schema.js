import mongoose from 'mongoose';
const { Schema } = mongoose;

const RcpSchema = new Schema({
   name: String,
  category: String,
  desc: String,
  ingredients: [String],
  steps: [String],
  cookTime: String,
  difficulty: String,
},{
    timestamps:true
});
const Rcp = mongoose.model('Rcp', RcpSchema);




export default Rcp