"use server";

import { Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { appwriteConfig } from "../appwrite/config";

// ** Create account follow**
// 1. User enters full name and email
// 2. Check if the user already exist using the email
// 3. Send OTP to user's email
// 4. This will send a secret key for creating a session.
// 5. Create a new user document if the user is a new user
// 6. Return the user's accountId that will be used to complete the login
// 7. Verify OTP and authenticate to login

const getUserByEmail = async (email: string) =>{
    const {databases} = await createAdminClient()

    const result = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        [Query.equal("email", [email])],

    )

    return result.total > 0 ? result.documents[0] : null;
}

const sendEmailOTP = async ({email} : {email: string}) => {
    const {account} = await createAdminClient();

    try{
        const session = await account.createEmailToken(ID.unique(),) catch(error) {
            
        }
    }
}

const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
    const existingUser = await getUserByEmail(email)

    const accountId = await sendEmailOTP({email})
};
