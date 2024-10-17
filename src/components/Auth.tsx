import { ChangeEvent } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupType } from "@justfortask67/medium-common";
import { BackendURL } from "../config";
import axios from "axios";



export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [singupinputs, setsignupinputs] = useState<SignupType>({
        email: "",
        password: "",
        name: ""
    })
    async function sendRequest(){
        try{
            const response = await axios.post(`${BackendURL}/api/v1/user/${type ==="signup" ? "signup" : "signin"}`, singupinputs)
            console.log(response.data)
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/blogs")

        }
        catch(err){
            console.log(err);
        }
    }

    return <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
            <div>
                <div className="font-bold text-3xl px-10">
                    Create an account
                </div>
                <div className="text-center mb-8">{type === "signup" ? "Already have an account?" : "Don't have an account?"} <Link to={type === "signup" ? "/signin" : "/signup"} className="underline">{type==="signup" ? "Login" : "Signup"}</Link></div>
                <div></div>
                {type==="signup"? <LabelledInput label="name" placeholder="Enter your userName" onchange={(e) => {
                    // setsignupinputs({
                    //     ...singupinputs,
                    //     name: e.target.value,

                    // })
                    setsignupinputs(c => (
                        {
                            ...c,
                            name: e.target.value,
                        })
                    );
                }} /> : null}
                <LabelledInput label="email" placeholder="Enter your email" type="email" onchange={(e) => {
                    setsignupinputs(c => (
                        {
                            ...c,
                            email: e.target.value,
                        })
                    );
                }} />
                <LabelledInput label="password" placeholder="Enter your password" type="password" onchange={(e) => {
                    setsignupinputs(c => (
                        {
                            ...c,
                            password: e.target.value,
                        })
                    );
                }} />

                <button onClick={sendRequest} type="button" className=" mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{type === "signin" ? "Sign In" : "Sign Up"}</button>
            </div>
        </div>
    </div>
}

interface LabelledInputTypes {
    label: string;
    placeholder: string;
    onchange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onchange, type }: LabelledInputTypes) {
    return <div>
        <div>
            <label className="block mb-2 text-sm font-bold text-gray-900">{label}</label>
            <input onChange={onchange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3" placeholder={placeholder} required />
        </div>
    </div>
}