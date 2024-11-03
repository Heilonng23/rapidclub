"use client";

import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
   function reset() {
      const form = document.querySelector(".search-form") as HTMLFormElement;

      if (form) form.reset();
      console.log(form);
   }

   return (
      <div className="flex gap-2">
         <Link href="/" className="search-btn text-white ">
            <button className="search-reset" onClick={reset}>
               <X className="size-5" />
            </button>
         </Link>
      </div>
   );
};

export default SearchFormReset;
