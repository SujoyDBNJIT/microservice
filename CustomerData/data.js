const CustomerData = {
    CustomerDetails: [
        {

            Member_id: 1,
            Provider_id: 'sd789',
            DrugCode: 'moderna007',
            BenefitTyoe: 'insured',
            TotalCost: 6000
        },
        {
            Member_id: 2,
            Provider_id: 'rt383',
            DrugCode: 'moderna786',
            BenefitTyoe: 'partial_insured',
            TotalCost: 2000
        },
        {
            Member_id: 3,
            Provider_id: 'dhs29',
            DrugCode: 'pfizer007',
            BenefitTyoe: 'insured',
            TotalCost: 8000
        },
        {
            Member_id: 4,
            Provider_id: 'ks885',
            DrugCode: 'pfizer786',
            BenefitTyoe: 'insured',
            TotalCost: 3000
        }
    ]
   
};

module.exports = {
    getCustomerDetails: function (context) {
        return CustomerData.CustomerDetails;
    }
};
