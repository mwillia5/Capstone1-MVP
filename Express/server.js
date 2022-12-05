const express=require("express")
const app=express();
const port=process.env.port || 3001;
const bodyParser=require('body-parser')
const cors= require('cors');

app.use(express.json());
//app.use(bodyParser.json());
app.use(cors());
const customersRoutes=require('./routes/customersRouter');
app.use('/customers',customersRoutes);

const employeesRoutes=require('./routes/employeesRouter');
app.use('/employees',employeesRoutes);

const partsRoutes=require('./routes/partsRouter')
app.use('/parts',partsRoutes);

const quotesRoutes=require('./routes/quotesRouter')
app.use('/quotes',quotesRoutes);

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});