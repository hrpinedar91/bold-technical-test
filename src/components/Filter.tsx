import React from 'react';

type CheckboxProps = {
  id: string,
  label: string,
}

function Checkbox({ id, label }:CheckboxProps) {
  return (
    <div className="text-slate-400 inline-flex items-center gap-1">
      <input type="checkbox" 
        id={`flt-${id}`} 
        className="appearance-none shrink-0 w-3 h-3 border-2 border-cyan-400 rounded-sm
          focus:outline-none m-0 cursor-pointer
          checked:bg-cyan-400 checked:border-0 outline-none
          disabled:border-steel-400 disabled:bg-steel-400"/>
      
      <label htmlFor={`flt-${id}`} className="cursor-pointer">{label}</label>
    </div>
  )
}

export const categories = [
  {
    id: 1,
    type: "drink",
    label: "Drink",
  },{
    id: 2,
    type: "cake",
    label: "Cake",
  }
];

function FilterCategory() {
  return (
    <div className="flex flex-col gap-1">
      {categories.map(category => (
        <Checkbox key={`chk-${category}`} 
          id={category.id.toString()} 
          label={category.label}/>
      ))}
    </div>
  );
}

export default function Filter() {
  return (
    <div className="border border-slate-700/60 bg-slate-800/80 p-2 text-sm rounded-md flex flex-col gap-2 w-28">
      <h3 className="font-semibold text-slate-300">Filter</h3>
      <hr className="border-slate-700"/>
      <FilterCategory/>
    </div>
  );
}