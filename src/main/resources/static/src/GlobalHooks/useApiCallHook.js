import React from 'react';
import error from "eslint-plugin-react/lib/util/error.js";

export const UseApiCallHook = {
    get: async (url) => {
        try {
            const response = await fetch(url)

            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData)
            }

            const convertedResponse = await parseResponse(response)
            console.log(convertedResponse);
            return convertedResponse
        } catch (error) {
            console.log(error.message)
        }
    },
    post: async (url, data) => {
        try {
            const response = await fetch(url, {
                method: "POST",

                headers: {
                    "Content-Type": "application/Json"
                },
                credentials: "include",
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData)
            }

            const convertedResponse = await parseResponse(response)
            console.log(convertedResponse);
            return convertedResponse;
        } catch (error) {
            console.log(error)
        }
    },
    put: async (url, data) => {
        try {
            const response = await fetch(url, {
                credentials: "include",
                method: "PUT",
                headers: {
                    "Content-Type": "application/Json"
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData)
            }

            const convertedResponse = await parseResponse(response)
            console.log(convertedResponse);
            return convertedResponse;
        } catch (error) {
            console.log(error)
        }
    }


}
const parseResponse = async (response) => {
    const contentType = response.headers.get("Content-Type");

    if (!response.ok) {
        throw new Error(`Hiba: ${response.status} ${response.statusText}`)

    }
    if (contentType.includes("application/json")) {
        return await response.json();
    } else if (contentType.includes("text/")) {
        return await response.text();
    } else {
        return await response.blob(); // pl. képek vagy fájlok esetén
    }
};


