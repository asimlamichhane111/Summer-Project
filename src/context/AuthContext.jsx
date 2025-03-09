import { createContext,useState,useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    const navigate=useNavigate();

    useEffect(()=>{
        const token=localStorage.getItem("token");
        const role=localStorage.getItem("role");
        if (token){
            setUser({token,role});
        }
    },[]);
    const login=(token,role)=>{
        localStorage.setItem("token",token);
        localStorage.setItem("role",role);
        if(token){
            setUser({token,role});
        }
        setLoading(false);
        if(role==="owner"){
            navigate("/owner-dashboard");
        }
        else{
            navigate("/home");
        }
    };
    const logout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setUser(null);
        navigate("/login");
    };
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth=()=>useContext(AuthContext);