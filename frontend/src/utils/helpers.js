// export const getProductById = async (id) => {
//     const port = 'http://localhost:3001';
//     let url = port + '/products/' + `${id}`;
//     let payload;
     
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             payload = await response.json();
//         } else {
//             throw new Error;
//         }
//     } catch (fetchError) {
//             console.log(fetchError);
//         }
//     };

// export const getProducts = async () => {
//     const port = 'http://localhost:3001';
//     let url = port + '/products' + `${id}`;
//     let payload;

//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             payload = await response.json();
//         } else {
//             throw new Error;
//         }
//         setProduct(payload)
//     } catch (fetchError) {
//         console.log(fetchError)
//     }
// };

// import axios from 'axios';
// import {QueryClientProvider, QueryClient, useQuery, useQueryClient, useMutation} from 'react-query';
// import { api } from './api';

// export const getProductById = async () => {

// }
