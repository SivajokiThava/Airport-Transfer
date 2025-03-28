import {
  useState,
  ReactNode,
  ButtonHTMLAttributes,
  SelectHTMLAttributes,
} from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  className?: string;
}

interface Condition {
  field: string;
  operator: string;
  value: string;
  connector: string;
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded font-medium transition-colors";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Select = ({ children, className = "", ...props }: SelectProps) => (
  <select
    className={`border rounded p-2 bg-white w-full ${className}`}
    {...props}
  >
    {children}
  </select>
);

const NewRule = () => {
  const [conditions, setConditions] = useState<Condition[]>([
    { field: "If Driver", operator: "is", value: "New", connector: "and" },
    { field: "If Trip", operator: "is", value: "Pro", connector: "and" },
    {
      field: "First Trip",
      operator: "On or Before",
      value: "31 Jul 2019",
      connector: "and",
    },
    { field: "Total Trips", operator: "Upto", value: "96", connector: "" },
  ]);

  const addCondition = () => {
    setConditions([
      ...conditions,
      { field: "If Driver", operator: "is", value: "", connector: "and" },
    ]);
  };

  const removeCondition = (index: number) => {
    setConditions(conditions.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg border">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">New Rule</h2>
            <div className="space-x-2">
              <Button>Add rule</Button>
              <Button>Edit</Button>
            </div>
          </div>

          {/* Rule Section */}
          <div className="border rounded-lg p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Rule</h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">
                <label className="min-w-[100px] text-right">Rule Name</label>
                <input
                  type="text"
                  defaultValue="MOT050"
                  className="border rounded p-2 w-64"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="min-w-[100px] text-right">Condition</label>
                <input
                  type="text"
                  defaultValue="If new driver registered through"
                  className="border rounded p-2 w-64"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked />
                <label>Is this rule active</label>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="border rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Action</h3>
              <button
                onClick={addCondition}
                className="text-blue-600 hover:text-blue-700"
              >
                + Add
              </button>
            </div>

            <div className="space-y-3">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center"
                >
                  <Select value={condition.field}>
                    <option>If Driver</option>
                    <option>If Trip</option>
                    <option>First Trip</option>
                    <option>Total Trips</option>
                  </Select>

                  <Select value={condition.operator}>
                    <option>is</option>
                    <option>On or Before</option>
                    <option>Upto</option>
                  </Select>

                  {condition.field === "First Trip" ? (
                    <input
                      type="date"
                      value={condition.value}
                      onChange={(e) => {
                        const newConditions = [...conditions];
                        newConditions[index] = {
                          ...condition,
                          value: e.target.value,
                        };
                        setConditions(newConditions);
                      }}
                      className="border rounded p-2 w-full"
                    />
                  ) : (
                    <Select value={condition.value}>
                      <option>New</option>
                      <option>Pro</option>
                    </Select>
                  )}

                  {index < conditions.length && (
                    <Select value={condition.connector}>
                      <option>and</option>
                      <option>or</option>
                    </Select>
                  )}

                  <button
                    onClick={() => removeCondition(index)}
                    className="text-red-500 hover:text-red-600 justify-self-end"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Section */}
          <div className="space-y-3">
            <div className="border rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium mb-8">Apply</h3>

              <div className="space-y-6">
                <div className="flex items-center pl-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-gray-600">
                    Is Discount Applicable
                  </label>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-4">
                    <label className="min-w-[100px] text-gray-600">
                      Discount Code
                    </label>
                    <Select className="w-64">
                      <option>PROMO15</option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <Button className="w-24">Save</Button>
            <Button variant="outline" className="w-24">
              Cancel
            </Button>
          </div>
          {/* Promo List Section */}
          <div className="border rounded-lg p-4 mb-6">
            <h3 className="text-lg font-medium">Promo List</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRule;
