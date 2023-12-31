import { Application, Request, Response } from "express";
import { DeliveryEmployee } from "../model/deliveryEmployee";
import { DeliveryEmployeeRequest } from "../model/deliveryEmployeeRequest";
const deliveryEmployeeService = require('../service/deliveryEmployeeService');


module.exports = function(app: Application) {

    app.get('/deliveryemployees', async (req: Request, res: Response) => {

        let data: DeliveryEmployee[] = [];

        try {
            data = await deliveryEmployeeService.getDeliveryEmployees();

            console.log(data);

        } catch(e) {
            console.error(e);
        }

        res.render('list-delivery-employees', { employees: data });
    })

    app.get('/deliveryemployees/:id', async (req: Request, res: Response) => {
        let data: DeliveryEmployee = new DeliveryEmployee;

        try {
            data = await deliveryEmployeeService.getDeliveryEmployeeById(req.params.id)
      
        } catch (e) {
            console.error(e)
        }

        res.render('view-delivery-employee', { employee: data} )

    })

    app.get('/createdeliveryemployee', async (req: Request, res: Response) => {

        res.render('create-new-delivery-employee');
    })

    app.post('/createdeliveryemployee', async (req: Request, res: Response) => {

        let data: DeliveryEmployeeRequest = req.body
        let id: Number

        try{

            id = await deliveryEmployeeService.createDeliveryEmployee(data);

            res.redirect('/deliveryemployees/'+id);

        } catch(e){

            console.error(e);
            res.locals.errormessage = e.message;
            res.render('create-new-delivery-employee', req.body);

        }

    })

    app.post('/deletedeliveryemployee/', async (req: Request, res: Response) => {
        
   
        try {

            await deliveryEmployeeService.deleteDeliveryEmployee(req.body.deleteDeliveryEmployee);

            res.redirect('/deliveryemployees/');

        }  catch(e) {

            console.error(e);
            res.locals.errormessage = e.message;
            res.render('list-delivery-employees');
            
        }


    })

}