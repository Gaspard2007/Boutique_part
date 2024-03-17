'use client'
import type { NextPage } from "next";
import PropositionLocation from "@/components/proposition-location"
const PanierFormation:NextPage = () => {
  return (
    <div>
        <div className="flex justify-center"><img src="/2023-12-cropped-1.png" alt="" /></div>
        <h1 className="flex justify-center">Panier</h1>
        <br />
        <h3 className="flex justify-center">IL NE VOUS MANQUE RIEN ?</h3>
        <br />
        <div className="flex justify-center">
          <div className="flex flex-col">
        <PropositionLocation/>
        <br />
        <br />
        <PropositionLocation/>
        <br /><br />
        <PropositionLocation/>
        </div>
        </div>
    </div>
  )
}

export default PanierFormation
