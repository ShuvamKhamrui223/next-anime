"use server";

import { FIREBASE_DATABASE } from "@/lib/firebase.config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";

// function to add a selected content to watch later
export async function addToWatchLater(formdata: FormData) {
    const userEmail = formdata.get("userEmail") as string;
    const contentId = formdata.get("contentId");
    console.log("server action called", userEmail, contentId);
    try {
        await addDoc(collection(FIREBASE_DATABASE, "users", userEmail, "favourites"), {
            userId: userEmail,
            watch_later: contentId,
        });
        toast.success("added successfully")
    } catch (error) {
        return error
    }
}

export const getSavedByEmail = async (userEmail: string) => {
    try {
        const q = query(collection(FIREBASE_DATABASE, "users"), where("emailId", "==", userEmail))
        const querySnapshot = await getDocs(q)

        return querySnapshot.docs
    } catch (error) {
        console.log(error)
    }
}
