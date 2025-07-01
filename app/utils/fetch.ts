
import { API_URL } from "../constants/api"
import { getErrorMessage } from "./errors"
import { redirect } from "next/navigation"

export const post = async (path : string, formData: FormData) => {
    const res = await fetch(`${API_URL}/${path}`, {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(Object.fromEntries(formData))
        })

        const parsedRes = await res.json()
        if(!res.ok) {
            
            return { error : getErrorMessage(parsedRes)}
        }

        return {error: ""}
}
export const fetchLogin = async (path : string, formData: FormData) => {
    const res = await fetch(`${API_URL}/${path}`, {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(Object.fromEntries(formData))
        })

        const parsedRes = await res.json()
        if(!res.ok) {
            
            return { error : getErrorMessage(parsedRes)}
        }

        redirect('/')
}