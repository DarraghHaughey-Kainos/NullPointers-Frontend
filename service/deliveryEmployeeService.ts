import { DeliveryEmployeeRequest } from "../model/deliveryEmployeeRequest";
const axios = require('axios');
import validator = require("../validator/DeliveryEmployeeValidator");

module.exports.getDeliveryEmployees = async function() {
    try { 
        const response = await axios.get('http://localhost:8080/api/employee/delivery');

        return response.data;
    }catch(e) {
        throw new Error('Could not get delivery employees');
    }
}

module.exports.createDeliveryEmployee = async function (deliveryEmployee: DeliveryEmployeeRequest): Promise<Number> {

    
    const error: string = validator.validateEmployee(deliveryEmployee);

    if (error) {
        throw new Error(error)
    }
    
    try{

        console.log(deliveryEmployee);
        const response = await axios.post('http://localhost:8080/api/employee/delivery', deliveryEmployee);

        return response.data

    }catch(e){
        throw new Error("Could not make delivery employee")
    }
}