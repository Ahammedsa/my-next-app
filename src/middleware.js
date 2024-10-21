import { NextResponse } from 'next/server';
import React from 'react';
const user = true ;
const coo = "next-superhero"
export  const middleware = (request) => {
    const cookies  = request.cookies.get("token")
    if(!cookies || cookies.value !== coo){
        return NextResponse.redirect(new URL("/login" , request.url))
    }
    return  NextResponse.next()
};

export const config = {
    matcher : ['/dashboard' , '/services']
}