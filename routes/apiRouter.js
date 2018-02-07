let Router = require('express').Router;
const apiRouter = Router();
let helpers = require('../config/helpers.js');

var Freelancer = require('../db/schema.js').Freelancer;
var Project = require('../db/schema.js').Project;

  
  apiRouter
    .post('/register', function(req, res) {
      var fl = new Freelancer(req.body);
      fl.save().then(() => {
        console.log('new freelancer saved to database')
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
    })

    .get('/freelancers', function(req, res) {
      Freelancer.find().then((freelancerList) => {
        res.json(freelancerList)
      });
    })

    .get('/freelancers/:skills', (req, res) => {
      var skillsArray = req.params.skills;
      console.log(skillsArray)
      Freelancer.find({ skills: skillsArray }).then((freelancersBySkill) => {
        res.json(freelancersBySkill)
      })
    })

    .delete('/freelancers/:id', function(req, res) {
      Freelancer.remove({_id: req.params.id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: "freelancer deleted by ID",
          _id: req.params.id
        });
      });
    })
      
      
    .post('/projects', (req, res) => {
      var p = new Project(req.body);
      p.save().then(() => {
        console.log('saved project to DB');
      })
      .catch(err => {
        res.status(400).send("project not saved due to an error")
      });
    })

    .get('/projects', (req, res) => {
      Project.find().then((projectList) => {
        console.log(projectList)
        res.json(projectList)
      });
    })
    
      
      

   

//   apiRouter
//     .get('/users/:_id', function(req, res){
//       User.findById(req.params._id, "-password", function(err, record){
//         if(err || !record ) return res.json(err) 
//         res.json(record)
//       })
//     })
//     .put('/users/:_id', function(req, res){

//       User.findByIdAndUpdate(req.params._id, req.body, function(err, record){
//           if (err) {
//             res.status(500).send(err)
//           }
//           else if (!record) {
//             res.status(400).send('no record found with that id')
//           }
//           else {
//             res.json(Object.assign({},req.body,record))
//           }
//       })
//     })

//     .delete('/users/:_id', function(req, res){
//       User.remove({ _id: req.params._id}, (err) => {
//         if(err) return res.json(err)
//         res.json({
//           msg: `record ${req.params._id} successfully deleted`,
//           _id: req.params._id
//         })
//       })  
//     })

//     // Routes for a Model(resource) should have this structure


module.exports = apiRouter