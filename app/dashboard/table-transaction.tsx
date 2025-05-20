import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getRecentTransactions } from "@/data/getRecentTransactions";
import { format } from "date-fns";


export default async function TableTransactions() {
  
const transactions = await getRecentTransactions();
  
  return <div>
     {!transactions?.length && (
            <p className="text-center py-10 text-lg text-muted-foreground">
              You have no transaction yet.Start by hitting "Create new" to create your first transaction
            </p>
        )}
        {!!transactions?.length &&
            <Table className="mt-4">
              <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
             <TableBody>
                {transactions.map(transaction => (
                    <TableRow key={transaction.id}>
                    <TableCell>
                        {format(transaction.transactionDate, "do MMM yyyy")}
                    </TableCell>
                    <TableCell>
                        {transaction.description}
                    </TableCell>
                       <TableCell>
                        <Badge className={transaction.transactionType === "income" ? "bg-lime-600": "bg-orange-400"}>
                        {transaction.transactionType}
                        </Badge>
                    </TableCell>
                       <TableCell>
                        {transaction.category}
                    </TableCell>
                    </TableRow>
                ))}
             </TableBody>
            </Table>
        }
  </div>
}
