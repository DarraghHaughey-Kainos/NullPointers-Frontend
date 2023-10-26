import { DeliveryEmployeeUpdateRequest } from "../model/deliveryEmployeeUpdateRequest";
// import order validator
const deliveryEmployeeUpdateValidator = require("../validator/DeliveryEmployeeUpdateRequestValidator");
const axios = require('axios');

module.exports.getDeliveryEmployees = async function() {
    try { 
        const response = await axios.get('http://localhost:8080/api/employee/delivery');

        return response.data;
    }catch(e) {
        throw new Error('Could not get delivery employees');
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