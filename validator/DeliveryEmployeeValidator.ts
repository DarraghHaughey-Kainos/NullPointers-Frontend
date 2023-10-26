import { DeliveryEmployeeRequest } from "../model/deliveryEmployeeRequest";

export function validateEmployee(deliveryEmployeeRequest: DeliveryEmployeeRequest): string {

    if(deliveryEmployeeRequest.salary < 0){
        return "Salary cannot be less than zero";
    }

    if(deliveryEmployeeRequest.bankAccountNumber.length != 8){
        return "Bank account number length must be 8";
    }

    if(deliveryEmployeeRequest.niNumber.length != 9){
        return "National insurance number length must be 9";
    }

    return ""

}