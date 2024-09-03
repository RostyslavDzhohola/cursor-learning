import React from "react";

interface UserInfoDisplayProps {
  userData: {
    name: string;
    email: string;
    companyName: string;
    companySize: string;
  };
  onResubmit: () => void;
}

const UserInfoDisplay: React.FC<UserInfoDisplayProps> = ({
  userData,
  onResubmit,
}) => {
  return (
    <div className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4 font-semibold">Your Information</h2>
      <div className="space-y-2 mb-6">
        <p>
          <span className="font-bold">Name:</span> {userData.name}
        </p>
        <p>
          <span className="font-bold">Email:</span> {userData.email}
        </p>
        <p>
          <span className="font-bold">Company Name:</span>{" "}
          {userData.companyName}
        </p>
        <p>
          <span className="font-bold">Company Size:</span>{" "}
          {userData.companySize}
        </p>
      </div>
      <button
        onClick={onResubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Resubmit
      </button>
    </div>
  );
};

export default UserInfoDisplay;
