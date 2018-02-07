const mongoose = require('mongoose');

// ----------------------
// FREELANCERS
// ----------------------
const freelancerSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now },
  skills: { type: Array },
  contacts: { type: Array }
})

const projectSchema = new mongoose.Schema({
  name: { type: String },
  owner: { type: String },
  milestones: { type: Array }
})

module.exports = {
  Freelancer: mongoose.model('Freelancer', freelancerSchema),
  Project: mongoose.model('Project', projectSchema)
}
