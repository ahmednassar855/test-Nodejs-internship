import axios from "axios"
import { currencyModel } from "../dbConnection/model/currencyModel.js";

export const getData = async (req, res) => {
    // try {
    //     const {data} = await axios.get('https://api.wazirx.com/api/v2/tickers' ,{
    //         headers: {
    //           'Content-Type': ['application/json', 'charset=utf-8'],
    //         },
    //       });
    //       console.log(data );
    //     // let data = JSON.parse(response)
    //     res.render('index.ejs', data  )


    // } catch (error) {
    //     console.error(error);
    // }
    // console.log(response);
    await axios.get('https://api.wazirx.com/api/v2/tickers', {
        headers: {
            'Content-Type': ['application/json', 'charset=utf-8'],
        },
    })
        .then(response => {
            const dataAsArray = Object.entries(response.data);
            console.log(dataAsArray);
            res.render('index.ejs', { dataAsArray })

        })
        .catch(error => {
            console.error(error);
        });
}

export  const fetchData = async(req , res) => {

    let deletAll = await currencyModel.deleteMany({})
    console.log(deletAll);
   

    await axios.get('https://api.wazirx.com/api/v2/tickers', {
        headers: {
            'Content-Type': ['application/json', 'charset=utf-8'],
        },
    })
        .then( async response => {
            let dataAsArray = Object.entries(response.data);
            let newData = { 
                'element' : '',
                'name' : '',
                'last' : '',
                'buy' : '',
                'sell' : '',
                'volume' : '',
                'base_unit' : '',
             }
             for (let index = 0; index < 10; index++) {
                let element = dataAsArray[index][0];
                let name = dataAsArray[index][1].name;
                let last = dataAsArray[index][1].last;        
                let buy = dataAsArray[index][1].buy;        
                let sell = dataAsArray[index][1].sell;        
                let volume = dataAsArray[index][1].volume;        
                let base_unit  = dataAsArray[index][1].base_unit ;        
        
                newData.element = element;
                newData.name = name;
                newData.last = last;
                newData.buy = buy;
                newData.sell = sell;
                newData.volume = volume;
                newData.base_unit = base_unit;
                

                let result = await currencyModel.insertMany(newData)
            }
            let data = await currencyModel.find({})
            console.log(data[0]);
            res.render('index.ejs' , {data})
            
            // return dataAsArray;
        })
        .catch(error => {
            console.error(error);
        });
}
