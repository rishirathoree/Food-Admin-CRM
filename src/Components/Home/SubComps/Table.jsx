import React, { useState } from "react";
import { Trash, House } from "phosphor-react";
import {Check,X} from 'phosphor-react'
import DeleteModalComponent from "../../common/Modals/DeleteModal";
const Table = () => {

    const generateRandomName = () => {
        const firstNames = ['John', 'Jane', 'Alex', 'Emily', 'Michael', 'Olivia'];
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis'];
      
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      
        return `${randomFirstName} ${randomLastName}`;
      };
      
      const generateRandomReservation = () => {
        const fullName = generateRandomName();
        const roomNumber = Math.floor(Math.random() * 100) + 1;
        const numberOfPeople = Math.floor(Math.random() * 5) + 1
        const money = Math.floor(Math.random() * 1000) + 100;
        const paidAmount = money / 3;
        const status = Math.random() > 0.5 ? 'Paid' : 'Pending'; 
        const checkedIn = Math.random() > 0.7;
        return { fullName, roomNumber, numberOfPeople,paidAmount, money, status, checkedIn };
      };
      
      const generateReservationsArray = (count) => {
        const reservations = [];
        for (let i = 0; i < count; i++) {
            reservations.push(generateRandomReservation());
        }
        return reservations;
      };
      const [reservations,setReservations] = useState(generateReservationsArray(8))
      const [deleteReservationId,setDeleteReservationId] = useState(null)
  return (
    <>
    <div className="m-4 pb-8 space-y-4">
        <p className="font-medium text-[12px]">Today's Checkouts</p>
    <div className=" rounded-lg border-gray-100 border-[1px] overflow-x-auto">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
        <tr className="">
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Sr.No</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Client Name</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Room Number</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left max-w-full">Number of peoples</th>
            <th 
            onClick={()=>{
                console.log('first')
                const sorted = reservations.sort((a,b)=>{
                    return a.money - b.money 
                })
                setReservations(sorted)
            }}
            className="font-semibold cursor-pointer min-w-min py-2 px-4 text-[11px] text-left">Amount</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Paid</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Remaining Amount</th>
            {/* <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Payment Status</th> */}
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Status</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">CTA</th>
          </tr>
        </thead>
        <tbody className="bg-white">

         {reservations.map((reservation, index) => (
             <tr key={index} className="border-y-[1px] hover:bg-gray-100/40 last:border-y-0 border-slate-100">
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{index + 1}</td>
              <td className="font-medium py-2 min-w-min text-center p-4 text-[12px]   flex items-center gap-2">
                {reservation.fullName}
              </td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{reservation.roomNumber}</td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{reservation.numberOfPeople}</td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{reservation.money}</td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{parseInt(reservation.paidAmount)}</td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{parseInt(reservation.money - reservation.paidAmount)}</td>
              {/* <td className={`font-medium py-2 min-w-min flex items-center text-center max-w-max p-4 justify-center text-[12px]`}>
              {
                  reservation.status.toLowerCase() === 'Paid'.toLowerCase() 
                  ?
                    <span className="inline-flex px-3 py-3 border-[1px] border-dashed rounded-lg items-center gap-2"><Check size={12}/></span>
                    :
                    
                    <span className="inline-flex px-3 py-3 border-[1px] border-dashed rounded-lg items-center gap-2"><X size={12}/></span>
                }
                </td> */}
              <td className=" items-center justify-center">
                <label className="relative block items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer hidden" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-500"></div>
                </label>
              </td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">
              <button onClick={()=>{setDeleteReservationId(index)}}><Trash size={20}  className="" /></button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
    </div>
    <DeleteModalComponent onCancel={()=>{setDeleteReservationId(null)}} active={deleteReservationId}
    />
    </>
  )
}

export default Table