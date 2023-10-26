import { Application, Request, Response } from "express";
import { DeliveryEmployee } from "../model/deliveryEmployee";
import { DeliveryEmployeeUpdateRequest } from "../model/deliveryEmployeeUpdateRequest";
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

    // get delivery employee update page
    app.get('/updatedeliveryemployee/:id', async(req: Request, res: Response) =>{

        // create empty array to add returned data
        let data = DeliveryEmployee;

        try{
            // call to service class to get del employee by id
            data = await deliveryEmployeeService.getDeliveryEmployeeById(req.params.id);
        } catch(e){
            console.error(e);
        }

        // render view-order page, passing in data returned from api
        res.render('update-delivery-employee', {deliveryEmployee: data})
    })


    // // update delivery employee
    // app.put('/updatedeliveryemployee/{id}', async(req: Request, res: Response) =>{

    //     let data: DeliveryEmployeeUpdateRequest = req.body;




    // })



}