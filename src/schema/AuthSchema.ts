import * as z from "zod"


export const registerSchema = z.object({
    fullname : z.string({required_error: "name required true"}).min(3, {message: "fullname must be 3 charector"}).max(20, {message:"full name is too log"}),
    username: z.string({required_error: "user name is required"}).min(3, {message :"usename must be 3 charector"}).max(10, "username is too long"),
    email: z.string({required_error: "email is required"}).email({message: "email is invalid"}),
    password: z.string({required_error: "password is required"}).min(8, {message: "password must be 8 charector"}),

}) 

export const signinrSchema = z.object({
    username: z.string({required_error: "user name is required"}).min(3, {message :"usename must be 3 charector"}).max(10, "username is too long").optional(),
    email: z.string({required_error: "email is required"}).email({message: "email is invalid"}).optional(),
    password: z.string({required_error: "password is required"}).min(8, {message: "password must be 8 charector"}),

}) 


export const verifyOtp = z.object({
    otp: z.number({required_error:"otp is required"}).min(4, "otp minimum 4 digit")
})
