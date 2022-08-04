import { createContext, useContext, useReducer } from "react";
import axios from "axios";


const orderContext = createContext();

const OrderContextProvider = ({ children }) => {

    const updateHandler = (state,{type,payload}) => {
        switch(type) {
            case "ORDERS_LIST":
                return {...state,ordersList:payload};
            
            case "SUMMERY_OF_ORDERS":
                return {...state,ordersSummary:payload};

            case "LAST_7_DAYS_ORDERS":
                return {...state,ordersLast7Days:payload}
            
            default:
                return state;
        }
    }

    const [data, dispatchData] = useReducer(updateHandler,{
        ordersList:[],
        ordersSummary:[],
        ordersLast7Days:{}

    })


    const  OrdersList = async () => {

        try{
            const res  = await axios.get("http://13.76.214.165:8001/api/orders?page=1&limit=15&order_status=",
            {
                headers : {Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlsiYzQ5MGRmYTgtZWJmMy00NTE5LWI1M2EtZDc1Y2I3NGJlMDUwIiwiVXJ2aXNoIiwiU2hhaCIsInVydmlzaC5zaGFoQHB1c2hwYWsuYWkiXSwiaWF0IjoxNjQ5NzUyODc0LCJleHAiOjE2ODEyODg4NzR9.13UfXk_CVjKSqyC5pq2HgQK6KKI_PPM886C0dZB5CtM"}
            })
            dispatchData({type:'ORDERS_LIST',payload:res.data.data})
        }catch(err){
            console.log(err)
        }
    }


const  OrdersSummary = async (dispatch) => {
    try{
        const { data } = await axios.get("http://13.76.214.165:8001/api/analytics/summary",
        {
            headers : {Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlsiYzQ5MGRmYTgtZWJmMy00NTE5LWI1M2EtZDc1Y2I3NGJlMDUwIiwiVXJ2aXNoIiwiU2hhaCIsInVydmlzaC5zaGFoQHB1c2hwYWsuYWkiXSwiaWF0IjoxNjQ5NzUyODc0LCJleHAiOjE2ODEyODg4NzR9.13UfXk_CVjKSqyC5pq2HgQK6KKI_PPM886C0dZB5CtM"}
        });
        dispatchData({type:'SUMMERY_OF_ORDERS',payload:data.data})
    }catch(err){
        console.log(err)
    }
};

const  OrdersLast7Days = async (dispatch) => {
    try{
        const { data } = await axios.get("http://13.76.214.165:8001/api/analytics/last7Days",
        {
            headers : {Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlsiYzQ5MGRmYTgtZWJmMy00NTE5LWI1M2EtZDc1Y2I3NGJlMDUwIiwiVXJ2aXNoIiwiU2hhaCIsInVydmlzaC5zaGFoQHB1c2hwYWsuYWkiXSwiaWF0IjoxNjQ5NzUyODc0LCJleHAiOjE2ODEyODg4NzR9.13UfXk_CVjKSqyC5pq2HgQK6KKI_PPM886C0dZB5CtM"}
        })
        dispatchData({type:'LAST_7_DAYS_ORDERS',payload:data.data})
    }catch(err){
        console.log(err)
    }
};


    return(
        <orderContext.Provider value={{data, dispatchData ,OrdersList,OrdersSummary, OrdersLast7Days}}>
            { children }
        </orderContext.Provider>
    )
}

const useOrder = () => useContext(orderContext);

export{ OrderContextProvider, useOrder}