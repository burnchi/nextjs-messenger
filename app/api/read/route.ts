import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        
        const users = await prisma.user.findMany()
        console.log(users);
        return NextResponse.json(JSON.stringify(users))
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({})
        
    }
    
}