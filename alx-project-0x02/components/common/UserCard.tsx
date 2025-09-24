import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white mb-4">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-600 text-sm mt-2">
        {address.suite}, {address.street}, {address.city} - {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;