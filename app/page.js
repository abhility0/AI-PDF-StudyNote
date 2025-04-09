"use client"
import Image from "next/image";
import { Button } from "../@/components/ui/button"; // Adjust based on file structure
import { api } from "../convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";



export default function Home() {


    const {user}=useUser();
    const createUser=useMutation(api.user.createUser);

    useEffect (()=>{
      user&&CheckUser ();
    },[user])

    const CheckUser=async()=>{
      const result=await createUser({
        email: user?. primaryEmailAddress?. emailAddress, imageUrl:user?. imageUrl, userName: user?. fullName
      });
    console. log (result);
    }

  return (
    <div>
      <h2> Hello Abhiram</h2>
      <Button>Subscribe</Button>

      <UserButton/>
    </div>
  )
}
