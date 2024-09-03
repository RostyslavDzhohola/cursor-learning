import { useState } from "react";

interface OnboardingModalProps {
  onComplete: (userData: {
    name: string;
    email: string;
    companyName: string;
    companySize: string;
  }) => void;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    companyName: "",
    companySize: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else onComplete(userData);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-gray-800 text-gray-100 p-8 rounded-lg w-96 shadow-lg">
        <h2 className="text-2xl mb-4 font-semibold">
          Welcome to Cursor Composer
        </h2>
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          {step === 1 && (
            <>
              <div className="mb-2">
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  autoComplete="off"
                  className="w-full p-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  autoComplete="off"
                  className="w-full p-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}
          {step === 2 && (
            <div className="mb-4">
              <input
                type="text"
                name="companyName"
                value={userData.companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
                autoComplete="off"
                className="w-full p-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          {step === 3 && (
            <div className="mb-4">
              <input
                type="number"
                name="companySize"
                value={userData.companySize}
                onChange={handleInputChange}
                placeholder="Company Size"
                autoComplete="off"
                className="w-full p-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </form>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          {step === 3 ? "Complete" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default OnboardingModal;
