import twilio from "twilio";
const accountSid = "ACefa944a4a1306f4addc1be964777709d"
const authToken = "2ddc480aa417d9e8232d956323db18d0"
export const sendSMSToUser = async(number:string , content:string)=>{
    try {
        const client = twilio(accountSid , authToken);
        client.messages.create({
            body:content,
            from:'+15678660363',
            to:number
        })
        console.log('SMS sent successfully')

    } catch (error) {
        console.log(error)
    }

}

