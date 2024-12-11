import { connectToDb } from "@/db/connection";

export const checkConnectionBeforeMakingDBAction = async(callbackFn)=>{
    await connectToDb();
    let responseData = await callbackFn()
    return responseData;
}