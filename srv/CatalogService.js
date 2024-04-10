const cds = require('@sap/cds');
const { SalesOrderApi } = require('./sales-order-api/OP_API_SALES_ORDER_SRV_0001/SalesOrderApi');

module.exports = cds.service.impl(async function(srv){

    const { MySalesOrder } = this.entities;

    var getAllSalesOrder = async function(){

        const { opApiSalesOrderSrv0001  } = require('./sales-order-api/OP_API_SALES_ORDER_SRV_0001/service')
        const { salesOrderApi } = opApiSalesOrderSrv0001()

        const dataSalesData = await SalesOrderApi.requestBuilder().getAll().top(5)
        .select(
            salesOrderApi.schema.SALES_ORDER_TYPE,
            salesOrderApi.schema.SALES_ORGANIZATION,
            salesOrderApi.schema.TO_ITEM
        )
        
        .execute({

            // destinationName : "S4HANA"

            "url":"http://103.207..........",
            "username":"",
            "password":""
        })

        return dataSalesData;
        
    }

    srv.on( 'READ', MySalesOrder , async(req) => {
        // return [{
        //     SalesOrder : 10

        // }]

        return await getAllSalesOrder().then(
            salesOrderTable => {
                var aRecord = [];

                console.log(salesOrderTable)

                salesOrderTable.forEach(element => {
                    
                    var item = {};
                    item.SalesOrder = element.salesOrder;
                    item.SalesOrganization = element.SalesOrganization;
                    item.SalesOrder = element.salesOrder;
                    item.SalesOrder = element.salesOrder;
                    if (element.toItem[0]) {
                        item.Material = element.toItem[0].material;
                       
                    }else{

                    }
                    
                   
                    aRecord.push(item)

                });

                return aRecord;

            }
        )
    })
})