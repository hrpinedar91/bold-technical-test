
import AccountTotal from "@/components/AccountTotal";
import StepperFilters from "@/components/StepperFilters";
import TableContent from "@/components/TableContent";

export default function Home() {

  return (
    <div className="bg-[#f3f3f3] p-8">
      <div className="flex flex-col md:flex-row mt-8 gap-8">
        <AccountTotal />
        <div className="w-full md:w-3/5">
          <StepperFilters />
        </div>
      </div>
      <div className="pt-8">
         <TableContent/>
      </div>  
    </div>
  );
}
