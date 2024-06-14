import { createContext, useContext } from "react";

export const Cartcontext=createContext({
    items: [],
    total: 0,
    setItems: () => {},
    setTotal: ()=>{},
})

export const Cartprovider= Cartcontext.Provider;


export default function useCart(){
    return useContext(Cartcontext)
}



// import { createContext, useContext } from "react";

// export const Cartcontext=createContext()

// export const Cartprovider= ({children})=>{
//     const [items, setItems] = useState([]);
//     return (
//         <Cartcontext.Provider>
//             {children}
//         </Cartcontext.Provider>
//     )
// };


// export default function useCart(){
//     return useContext(Cartcontext)
// }