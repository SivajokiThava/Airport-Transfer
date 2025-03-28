import { useState } from "react";
import Button from "../../../Components/Button";

interface PromoData {
  promoCode: string;
  category: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  isMultiple: boolean;
}

const PromoRule = () => {
  const [promoType, setPromoType] = useState<"auto" | "manual">("auto");
  const [promoMode, setPromoMode] = useState<"single" | "multiple">("single");
  const [isActive, setIsActive] = useState(false);

  // Sample data for promo list
  const [promoList] = useState<PromoData[]>([
    {
      promoCode: "0001",
      category: "test",
      startDate: "01-01-2025",
      endDate: "1-01-2025",
      isActive: true,
      isMultiple: false,
    },
    {
      promoCode: "0001",
      category: "test",
      startDate: "01-01-2025",
      endDate: "1-01-2025",
      isActive: true,
      isMultiple: false,
    },
    {
      promoCode: "0001",
      category: "test",
      startDate: "01-01-2025",
      endDate: "1-01-2025",
      isActive: true,
      isMultiple: true,
    },
  ]);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Promo</h2>
        <Button>New Promo</Button>
      </div>

      {/* Promo Form Section */}
      <div className="border rounded-lg p-6 mb-6">
        <div className="space-y-6">
          {/* Radio Group for Auto/Manual */}
          <div className="flex justify-center space-x-12">
            <label className="flex items-center">
              <input
                type="radio"
                checked={promoType === "auto"}
                onChange={() => setPromoType("auto")}
                className="mr-2"
              />
              Auto Generate
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={promoType === "manual"}
                onChange={() => setPromoType("manual")}
                className="mr-2"
              />
              Manual
            </label>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-[200px_1fr] gap-y-4 items-center max-w-2xl mx-auto">
            <label>Promo Code</label>
            <input type="text" className="border rounded p-2" />

            <label>Condition</label>
            <div className="flex space-x-4">
              <input type="text" className="border rounded p-2 flex-grow" />
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="mr-2"
                />
                Is Active
              </label>
            </div>

            <label>Category</label>
            <select className="border rounded p-2">
              <option value="">Select</option>
            </select>

            <label>Start Date</label>
            <div className="flex space-x-8">
              <input type="date" className="border rounded p-2" />
              <label>End Date</label>
              <input type="date" className="border rounded p-2" />
            </div>

            {/* Radio Group for Single/Multiple */}
            <div className="col-span-2 flex justify-center space-x-12 mt-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={promoMode === "single"}
                  onChange={() => setPromoMode("single")}
                  className="mr-2"
                />
                Single
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={promoMode === "multiple"}
                  onChange={() => setPromoMode("multiple")}
                  className="mr-2"
                />
                Multiple
              </label>
            </div>

            {/* Multiple Mode Fields */}
            {promoMode === "multiple" && (
              <>
                <label>Master Promo</label>
                <input type="text" className="border rounded p-2" />

                <label>Rule</label>
                <select className="border rounded p-2">
                  <option value="">Customer</option>
                  <option>Promo 1</option>
                  <option>Promo 2</option>
                  <option>Promo 3</option>
                </select>

                <label>Count</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="border rounded p-2 w-24"
                    defaultValue="PROMO"
                  />
                  <Button>
                    <span>🚀</span>
                    <span>Generate</span>
                  </Button>
                  <button className="text-blue-500">✕</button>
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="px-6 py-2 border rounded-md">Create</button>
            <button className="px-6 py-2 border rounded-md">Cancel</button>
          </div>
        </div>
      </div>

      {/* Promo List Section */}
      <div className="border rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Promo List</h3>
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="p-2">Promo Code</th>
              <th className="p-2">Category</th>
              <th className="p-2">Start Date</th>
              <th className="p-2">End Date</th>
              <th className="p-2">Is Active</th>
              <th className="p-2">Is Multiple</th>
              <th className="p-2"></th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {promoList.map((promo, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{promo.promoCode}</td>
                <td className="p-2">{promo.category}</td>
                <td className="p-2">{promo.startDate}</td>
                <td className="p-2">{promo.endDate}</td>
                <td className="p-2">{promo.isActive ? "Yes" : "No"}</td>
                <td className="p-2">{promo.isMultiple ? "Yes" : "No"}</td>
                <td className="p-2">
                  {promo.isMultiple && (
                    <span className="text-blue-500">•••</span>
                  )}
                </td>
                <td className="p-2 space-x-2">
                  <button className="text-blue-500">↻</button>
                  <button className="text-red-500">🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromoRule;
