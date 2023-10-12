// ***********************************   Assignment_1   *******************************************//

// Task_1  -->  Create a nodejs app and import express, fs and url module
var express = require("express")
app = express()
var PORT = process.env.PORT || 3000
var fs = require('fs')

app.get('/', (req, res)=>{
  res.send("App Running Successfully")
})

app.listen(PORT,()=>{
  console.log(`App Running on http://localhost:${PORT}`)
})


// Task_2 --> Create a file ‘doc.txt’ add following text in it ‘Products List’
fs.open('document.txt','w',(err,file)=>{
  console.log(err)
})

fs.writeFile('document.txt','Products List',(err) =>console.log(err))


//Task_3 --> Create an endpoint to get the data from the user in query params and create a new file( delete if already there), write the data to it
const app = express();

app.listen(3000);

app.get('/userData', (req, res) => {
    
    const data = req.query.data;

    res.send(`Data => ${data}`);

    if (fs.existsSync('dataFile.txt')) fs.existsSync('dataFile.txt');
    else {
        fs.open('dataFile.txt', 'w', (err, file) => {
            if(err) throw err;
            console.log(err, file)
        });  

        fs.writeFile('dataFile.txt', data , (err, file) => {
            if(err) throw err; 
            console.log(err, file)
        });
    }

});


// Task_4 --> Create an endpoint to get the data from the user in query params and append data to new line in the same file.

app.listen(2020);

app.get('/user1Data', (req, res) => {
    
    const data1 = req.query.data;

    res.send(`Data => ${data1}`);

    fs.open('dataFile.txt', 'a', (err, file) => {
        if(err) throw err;
        console.log(err, file)
    }); 

    fs.appendFile('dataFile.txt', '\n' + data1  , (err, file) => {
        if(err) throw err; 
        console.log(err, file)
    });

});



// Task_6 --> Create a GET endpoint to fetch all active products
app.get('/data', (req, res) => {

  const param = req.params.active
  // console.log(param)

  if (param) {
    const result = data.filter(x => x.active === 'true')
    res.send(result)
  }
})

 // Task_7 --> Create a GET endpoint to fetch product by productName using params only
 app.get('/data/search', (req, res) => {
  let productName = req.query.productName;

    let productData = data.filter( name => name.productName === productName);
    res.send(productData);
})

//Task_8 --> Create a GET endpoint to fetch product by id
app.get('/data/:id', (req, res) => {

  let productData = data.filter( name => name.id === 4);
    res.send(productData);

})

// Task_9 --> Create a GET endpoint to search data based on productName and quantity
app.get('/data/search', (req, res) => {
  const { name } = req.query;
  const { quantity } = Number(req.query);

  if (name && quantity) {
    const result = data.filter(
      x => 
        x.name.toLowerCase().includes(name.toLowerCase()) && (x=> x.quantity === quantity))
        
    res.send(result)
  } else {
    res.send({
      message: 'Invalid Id'
    })
  }
})