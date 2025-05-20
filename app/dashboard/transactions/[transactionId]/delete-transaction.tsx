"use client"

import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
     AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2Icon } from "lucide-react"
import { deleteTransaction } from "./actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function DeleteTransactionDialog({
    transactionId,
    transactionDate
}: {
    transactionId: number,
    transactionDate: string
}){
    
    const router = useRouter();
    const handleDeleteConfirm = async () => {
    const result = await deleteTransaction(transactionId)
 
    if(result?.error){
        toast(result.error);
    return;
    }

     const [year,month] = transactionDate.split("-")

     toast("Transaction deleted Successfully");
     router.push(`/dashboard/transactions?month=${month}&year=${year}`)

   }
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Button variant="destructive" size="icon">
               <Trash2Icon />
                </Button>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot ve undone. This transaction will be permanently deleted.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                        <Button onClick={handleDeleteConfirm} variant="destructive" className="cursor-pointer">Delete</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogTrigger>
        </AlertDialog>
    )

}