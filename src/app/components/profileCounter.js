import React from "react";
import image from "../../assets/user.png";

const ProfileCounter = () => {
  const profiles = [
    { size: "400/400" },
    { size: "400/400" },
    { size: "400/400" },
    { size: "400/400" },
    { size: "400/400" },
  ];

  return (
    <div className="overflow-hidden flex  justify-center mt-2">
      <div className="flex -space-x-3 -ml-2">
        {" "}
        {/* Negative margin to create cut effect */}
        {profiles.map((profile, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Profile ${index + 1}`}
            className="w-8 h-8 rounded-full border-2  border-white object-cover"
          />
        ))}
        {/* Count indicator */}
        <div className="w-auto h-8 -ml-3 px-3 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white">
          <span className="text-sm font-medium text-blue-600">1,234+</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCounter;
