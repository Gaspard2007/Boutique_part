'use client'
import GridFormation from "@/components/grid-formation";
import GridPosteaLouer from "@/components/grid-postealouer";
import GridServiceSupp from "@/components/grid-services-supp";
import type { NextPage } from "next";

import Link from "next/link";

const Boutique: NextPage = () => {
  
  return (
    <div className="">
      <div>
        <img src="/Header.png" alt="" />
      </div>
      <div>
        <div className="flex justify-center" style={{marginTop:'25px'}}>
          <h1>Nos postes à louer</h1>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <GridPosteaLouer/>
      </div>
       <div className="flex justify-center" style={{marginTop:'40px'}}>
          <h1>Nos formations</h1>
        </div>
        <div className="flex flex-row justify-center">
        <GridFormation/>
      </div>
      <div className="flex justify-center" style={{marginTop:'40px'}}>
          <h1>Nos services supplementaires</h1>
        </div>
        <div className="flex flex-row justify-center">
        <GridServiceSupp/>
      </div>
    </div>
    
  );
};
export default Boutique;
