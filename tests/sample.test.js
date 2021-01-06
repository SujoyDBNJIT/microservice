const request = require("supertest");
const app = 'http://localhost:7071/api/GetData'

// const data = require('../CustomerData/service')
// const expect = require('chai').expect;
// const request = require('request');

// describe('Status and content', () => {
//     describe('Dummy GET', () => {
//         it('status', done => {
//             const response = await request('http://localhost:7071/api/GetData').get("/");
//             request('http://localhost:7071/api/GetData', (_, response) => {
//                 expect(response.statusCode).to.equal(200)
//                 done()
//             })
//         })

//         // it('content', done => {
//         //     request('http://localhost:7071/api/GetData', (_, response) => {
//         //         expect(JSON.parse(response.body)).to.equal(data)
//         //         done()
//         //     })
            
//         // })
//     })
// })

describe("GET /", () => {
    test("It should respond with an array of CustomerDetails", async () => {
        const response = await request(app).get("/");
        expect(response.body).toEqual([
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

        );
        expect(response.statusCode).toBe(200);
    });
});


