import { Application, Request, Response } from "express";
import { DeliveryEmployee } from "../model/deliveryEmployee";
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



}