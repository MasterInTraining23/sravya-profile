var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'html')));
app.use(express.static(path.join(__dirname, 'pics')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'html/sravya_profile.html'));
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname, 'html/sravya_profile.html'));
});

app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname, 'html/contact.html'));
});

app.get('/honors',function(req,res){
  res.sendFile(path.join(__dirname, 'html/honors.html'));
});

app.get('/leadership',function(req,res){
  res.sendFile(path.join(__dirname, 'html/leadership.html'));
});

app.get('/research',function(req,res){
  res.sendFile(path.join(__dirname, 'html/research.html'));
});

app.get('/scholarship_consulting',function(req,res){
  res.sendFile(path.join(__dirname, 'html/scholarship_consulting.html'));
});

app.get('/test_prep',function(req,res){
  res.sendFile(path.join(__dirname, 'html/test_prep.html'));
});

app.get('/work_experience',function(req,res){
  res.sendFile(path.join(__dirname, 'html/work_experience.html'));
});

var port = 3000;
app.listen(port);

console.log(__dirname);

console.log("Server running at http://localhost:%d", port);