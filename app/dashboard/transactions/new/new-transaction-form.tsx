"use client"

import TransactionForm, {transactionFormSchema} from "@/components/transaction-form"
import { Category } from "@/types/Category"
import { format } from "date-fns"
import { z } from "zod"
import { createTransaction } from "./actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function NewTransacitonForm({
    categories
}: {
    categories: Category[]
}){
    const router = useRouter();
    const handleSubmit = async (data:z.infer<typeof transactionFormSchema>) => {
        const result = await createTransaction({
            amount:data.amount,
            transactionDate:format(data.transactionDate,"yyyy-MM-dd"),
            categoryId:data.categoryId,
            description:data.description,
        });
        if(result.error){
          toast.warning(result.message);
          return;
        }
        
        toast.success("Toast created succesfully");

        router.push(`/dashboard/transactions?month=${data.transactionDate.getMonth() + 1}&year=${data.transactionDate.getFullYear()}`)

        console.log(result.id);
    }; 
return (
    <TransactionForm onSubmit={handleSubmit} categories={categories}/>
)
}