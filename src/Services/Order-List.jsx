// import axios from "axios";


// const  OrdersList = async (dispatchData) => {

//     try{
//         const res  = await axios.get("http://13.76.214.165:8001/api/orders?page=1&limit=15&order_status=",
//         {
//             headers : {Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlsiYzQ5MGRmYTgtZWJmMy00NTE5LWI1M2EtZDc1Y2I3NGJlMDUwIiwiVXJ2aXNoIiwiU2hhaCIsInVydmlzaC5zaGFoQHB1c2hwYWsuYWkiXSwiaWF0IjoxNjQ5NzUyODc0LCJleHAiOjE2ODEyODg4NzR9.13UfXk_CVjKSqyC5pq2HgQK6KKI_PPM886C0dZB5CtM"}
//         })
//         dispatchData({type:'ORDERS_LIST',payload:res.data.data})
//         console.log(res.data.data)
//     }catch(err){
//         console.log(err)
//     }
// };
// export{OrdersList}
