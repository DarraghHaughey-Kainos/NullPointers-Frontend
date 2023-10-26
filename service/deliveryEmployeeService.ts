import { DeliveryEmployeeUpdateRequest } from "../model/deliveryEmployeeUpdateRequest";
// import order validator
const deliveryEmployeeUpdateValidator = require("../validator/DeliveryEmployeeUpdateRequestValidator");
import { DeliveryEmployee } from "../model/deliveryEmployee";
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


module.exports.getDeliveryEmployeeById = async function(id: number): Promise<DeliveryEmployee> {
    try {
        const response = await axios.get('http://localhost:8080/api/employee/delivery/' + id);

        return response.data;

    } catch (e) {
        throw new Error('Could not find employee');
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


// // request get order by id from api
// module.exports.updateDeliveryEmployee = async function (id: number, deliveryEmployee: DeliveryEmployeeUpdateRequest): Promise<string> {

//     const error: string = deliveryEmployeeUpdateValidator.validateDeliveryEmployeeUpdate(deliveryEmployee);

//     // if error is not null i.e. a validation failed, throw new Error
//     if (error) {
//         throw new Error(error) // pass in error message from validator
//     }

//     try {
//         // call on api to update delivery employee
//         const response = await axios.put(`http://localhost:8080/api/employee/updatedelivery/${id}`, id, deliveryEmployee)
//         return response.data
//     } catch(e){
//         throw new Error('could not update delivery employee')
//     }
// }
    
