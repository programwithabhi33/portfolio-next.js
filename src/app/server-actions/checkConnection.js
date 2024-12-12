import { connectToDb } from "@/db/connection";

export const checkConnectionBeforeMakingDBAction = async(callbackFn, ...callbackFnParams)=>{
    await connectToDb();
    let responseData = await callbackFn(...callbackFnParams)
    return responseData;
}