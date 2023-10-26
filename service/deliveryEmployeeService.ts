const axios = require('axios');

module.exports.getDeliveryEmployees = async function() {
    try { 
        const response = await axios.get('http://localhost:8080/api/employee/delivery');

        return response.data;
    }catch(e) {
        throw new Error('Could not get delivery employees');
    }
}