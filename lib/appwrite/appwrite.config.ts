import * as sdk from "node-appwrite"
import { parseStringify } from "../utils";
export const {PROJECT_ID , NEXT_PUBLIC_ENDPOINT : ENDPOINT , API_KEY} = process.env;
const client = new sdk.Client();
try {
    client.setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!);
    console.log("Appwrite client created successfully.")
} catch (error) {
    console.log(error);
}
export const messaging = new sdk.Messaging(client);

export const sendSMS = async(userId : string , content: string)=>{
    try {
        const message = await messaging.createSms(
            sdk.ID.unique(),
            content,
            [],
            [userId]
        )
        return parseStringify(message)
    } catch (error) {
        console.log(error);
    }
}