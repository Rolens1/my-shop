"use server"

import { FormError } from "@/app/common/form-error.interface"
import { fetchLogin } from "@/app/utils/fetch"
import { redirect } from "next/navigation"

export default async function login(
    _prevState : FormError,
    formData: FormData
) {
    const { error } = await fetchLogin("auth/login", formData)
    if(error) return {error}
    redirect('/')
}