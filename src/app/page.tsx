
import AccountTotal from "@/components/AccountTotal";
import StepperFilters from "@/components/StepperFilters";
import TableContent from "@/components/TableContent";
import { Filter } from "lucide-react";
// import { transactions } from '@/config/transactions';
import FilterSection from '@/components/FilterSection';


export default function Home() {


  


  return (
    <div className="bg-[#f3f3f3] h-screen p-8">
      <div className="flex mt-8 gap-8">

        <AccountTotal />
        <div className="w-3/5">
          <StepperFilters />
        </div>
      </div>
      <div className="pt-8">
         <TableContent range="Septiembre" />
      </div>


      {/* <FilterSection /> */}


  
    </div>
  );
}
