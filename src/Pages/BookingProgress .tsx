import { useLocation } from "react-router-dom";

const BookingProgress = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const steps = [
    { id: 1, name: "Select Fleet", path: "/select-fleet" },
    { id: 2, name: "Signin", path: "/login" },
    { id: 3, name: "Payment", path: "/payment" },
    { id: 4, name: "Confirmation", path: "/confirm" },
  ];

  const getCurrentStepIndex = () => {
    const currentStep = steps.findIndex((step) => step.path === currentPath);
    return currentStep === -1 ? 0 : currentStep;
  };

  const currentStepIndex = getCurrentStepIndex();

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex w-full border border-gray-300 rounded">
        {steps.map((step, index) => {
          const isActive = index === currentStepIndex;

          return (
            <div
              key={step.id}
              className={`
                flex-1 py-2 px-4 text-center transition-colors duration-300
                ${index === 0 ? "rounded-l" : ""}
                ${index === steps.length - 1 ? "rounded-r" : ""}
                ${
                  isActive ? "bg-blue-200 text-black" : "bg-white text-gray-600"
                }
                ${index !== steps.length - 1 ? "border-r border-gray-300" : ""}
              `}
            >
              <span className="text-sm font-medium">{step.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingProgress;
