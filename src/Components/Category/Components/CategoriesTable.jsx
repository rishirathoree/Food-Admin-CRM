import React, { useEffect, useState } from "react";
import { Trash, Pen } from "phosphor-react";
import DeleteModal from "../../Common/Modals/DeleteModal";
import EmptyTableComponents from "../../Common/ErrorComponents/EmptyTableComponents";
import TableLoadingShimmer from "../../Common/ErrorComponents/TableLoadingShimmer";

const CategoriesTable = ({ Categories }) => {

  const { pending, data, error } = Categories

  const [CategoriesList, setCategoriesList] = useState(data)

  useEffect(() => { setCategoriesList(data) }, [data])

  const [DeleteModalId, setDeleteModalId] = useState(null)

  return (
    <>
      {pending
      ? 
      <TableLoadingShimmer />
      :
      CategoriesList.length > 0 ?
      (
      <div className="p-4 space-y-4">
          <div className=" rounded-lg border-gray-200 border-[1px] overflow-x-auto">
            <table className="border-collapse table-auto w-full text-sm">
              <thead>
                <tr className="">
                  <th className="font-semibold min-w-min py-4 px-4 text-[11px] text-left">
                    Sr.No
                  </th>
                  <th className="font-semibold min-w-min py-4 px-4 text-[11px] text-left">
                    Cuisine Name
                  </th>
                  <th className="font-semibold min-w-min py-4 px-4 text-[11px] text-left">
                    Status
                  </th>
                  <th className="font-semibold min-w-min py-4 px-4 text-[11px] text-left">
                    Call to actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {CategoriesList.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-y-[1px] last:border-y-0 border-slate-200"
                  >
                    <td className="font-medium py-4 min-w-min text-left max-w-max p-4 text-[12px] ">
                      {index + 1}
                    </td>
                    <td className="font-medium py-4 min-w-min text-center p-4 text-[12px]   flex items-center gap-2">
                      {item.name}
                    </td>
                    <td className="items-center justify-center">
                      <label className="relative block items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer hidden" />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black/50"></div>
                      </label>
                    </td>
                    <td className="font-medium py-4 min-w-min text-center max-w-max p-4 text-[12px] flex items-center justify-center">
                      <span className="space-x-4">
                        <button>
                          <Pen size={20} className="" />
                        </button>
                        <button>
                          <Trash onClick={() => { setDeleteModalId(1) }} size={20} className="" />
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
      )
      :
      <EmptyTableComponents />
      }

      <DeleteModal
        forModal={'cuisine'}
        active={DeleteModalId}
        onClose={() => { setDeleteModalId(null) }}
      />
    </>
  );
};

export default CategoriesTable;
