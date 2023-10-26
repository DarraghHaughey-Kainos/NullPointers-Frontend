// import product class
import { DeliveryEmployeeUpdateRequest } from "../model/deliveryEmployeeUpdateRequest";

// validate product method checks data user has entered is valid to update delivery employee
module.exports.validateDeliveryEmployeeUpdate = function (deliveryEmployee: DeliveryEmployeeUpdateRequest): string {

    if(deliveryEmployee.salary < 0){
            return "Salary cannot be less than zero";
    }

    if(deliveryEmployee.bankAccountNumber.length != 8){
            return "Bank account number must be 8 characters";
    }

    // if all validator checks pass, return null
    return null;
}