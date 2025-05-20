import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAnnualCashflow } from "@/data/getAnnualCashflows";
import CashflowFilters from "./cashflow-filters";
import { CashflowContent } from "./cashflow-content";
import { getTransactionYearRange } from "@/data/getTransactionYearsRange";

 export default async function Cashflow({ year }: { year: number }) {
  const [cashflow, yearsRange] = await Promise.all([
    getAnnualCashflow(year),
    getTransactionYearRange(),
  ]);

  return (
    <Card className="mb-5">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>Cashflow</span>
          <CashflowFilters year={year} yearsRange={yearsRange} />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-[1fr_250px]">
        <CashflowContent annualCashflow={cashflow} />
      </CardContent>
    </Card>
  );
}