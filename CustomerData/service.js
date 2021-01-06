const data = require('./data.js');

module.exports = {
    getCustomerDetails: function (context) {
        try {
            const vacations = data.getCustomerDetails();
            context.res.status(200).json(vacations);
        } catch (error) {
            context.res.status(500).send(error);
        }
    }
};

