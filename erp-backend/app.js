var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var customersRouter = require('./routes/getCustomers');
var employeesRouter = require('./routes/getEmployees');
var tasksRouter = require('./routes/getTasks');
var ProductsRouter = require('./routes/getProducts');
var VendorsRouter = require('./routes/getVendors');
var RawMaterialsRouter = require('./routes/getRawMaterials');
var OrdersRouter = require('./routes/getOrders');
var InventoryRouter = require('./routes/getInventory');
var AddVendorRouter = require('./routes/addvendors');
var GetMaterialsRouter = require('./routes/getMaterials');
var GetProductRatingsRouter = require('./routes/getProductRating');
var AddEmployeeRouter = require('./routes/addemployee');
var AddTaskRouter=require('./routes/addtask');
var AddProductRouter=require('./routes/addproduct');
var AddProductRatingRouter=require('./routes/addProductRating');
var AddRawMaterialRouter=require('./routes/addRawMaterial');
var DeleteEmployeeRouter=require('./routes/deleteemployee');
var DeleteVendorRouter=require('./routes/deletevendor');
var DeleteTaskRouter=require('./routes/deletetask');
var DeleteProductRouter=require('./routes/deleteproduct');
var UpdateEmployeeRouter=require('./routes/updateemployee');
var UpdateTaskRouter=require('./routes/updatetasks');
var UpdateProductRouter=require('./routes/updateproduct');
var UpdateVendorRouter=require('./routes/updatevendor');
var UpdateOrderRouter=require('./routes/updateOrder');
var UpdateProductRatingRouter=require('./routes/updateProductRating');
var LoginAuthenticationRouter=require('./routes/loginAuthentication');
var ResetRolesRouter=require('./routes/resetRoles');
var DashboardUserCheckRouter=require('./routes/dashboardUserCheck');
var SetRolesRouter=require('./routes/setRole');
var DeleteRatingRouter=require('./routes/deleteRating');
var RequestRawMaterialsRouter=require('./routes/requestRawMaterials');
var GetRequestsRouter=require('./routes/getRequests');
var UpdateRequestsRouter=require('./routes/updateRequests');
const database = require("./database/ERP");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/getCustomers', customersRouter);
app.use('/getEmployees', employeesRouter);
app.use('/getTasks', tasksRouter);
app.use('/getProducts', ProductsRouter);
app.use('/getVendors', VendorsRouter);
app.use('/getOrders', OrdersRouter);
app.use('/getInventory', InventoryRouter);
app.use('/getRawMaterials', RawMaterialsRouter);
app.use('/getMaterials', GetMaterialsRouter);
app.use('/getProductRating', GetProductRatingsRouter);
app.use('/addvendors',AddVendorRouter);
app.use('/addemployee', AddEmployeeRouter);
app.use('/addProductRating', AddProductRatingRouter);
app.use('/addtask', AddTaskRouter);
app.use('/addproduct', AddProductRouter);
app.use('/addRawMaterial', AddRawMaterialRouter);
app.use('/deleteemployee', DeleteEmployeeRouter); 
app.use('/deletevendor', DeleteVendorRouter);
app.use('/deleteproduct', DeleteProductRouter);
app.use('/deletetask', DeleteTaskRouter);
app.use('/updateemployee', UpdateEmployeeRouter);
app.use('/updatetasks', UpdateTaskRouter);
app.use('/updateproduct', UpdateProductRouter);
app.use('/updatevendor', UpdateVendorRouter);
app.use('/updateOrder', UpdateOrderRouter);
app.use('/updateProductRating', UpdateProductRatingRouter);
app.use('/loginAuthentication', LoginAuthenticationRouter);
app.use('/resetRoles', ResetRolesRouter);
app.use('/dashboardUserCheck', DashboardUserCheckRouter);
app.use('/setRole', SetRolesRouter);
app.use('/deleteRating', DeleteRatingRouter);
app.use('/getRequests', GetRequestsRouter);
app.use('/requestRawMaterials', RequestRawMaterialsRouter);
app.use('/updateRequests', UpdateRequestsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;