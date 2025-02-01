import { NextRequest , NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id:"rzp_test_jMva8zQWeo0B4w",
    key_secret:"p9Qnt0TfrgvTaCfEUHp6vuQD"
});
export async function POST(request  :NextRequest){
    try {
        const order = await razorpay.orders.create({
            amount:100*100,
            currency:"INR",
            receipt:"receipt_" + Math.random().toString(36).substring(7),
        })
        return NextResponse.json({orderId: order.id} , {status:200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error:"Error Creating Order"
        } , {status:500})
    }
}