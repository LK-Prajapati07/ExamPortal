import api from "./axios"

export const login =async(payload)=>{
    try {
        const res=await api.post("/api/auth/create-user",payload)
        return res
    } catch (error) {
        console.log("Error occure in project ",error)
    }

}

export const logout =async(payload)=>{
    try {
        const res=await api.post("/api/auth/logout",payload)
        return res
    } catch (error) {
        console.log("Error occure in project ",error)
    }

}



export const getCurrentUser =async()=>{
    try {
        const res=await api.get("/api/auth/me")
        return res
    } catch (error) {
        console.log("Error occure in project ",error)
    }

}


export const aiapiconnect=async(payload)=>{
    try {
        const res=await api.post("/api/ai/generate-questions",payload)
        return res
    } catch (error) {
        console.log("Error occure ",error)
    }
}