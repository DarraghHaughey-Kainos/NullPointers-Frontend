import { DeliveryEmployee } from "../model/deliveryEmployee";

const axios = require('axios');

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