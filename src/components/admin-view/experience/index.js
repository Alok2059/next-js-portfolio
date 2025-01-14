"use client";

import FormControls from "../form-controls";

const controls = [
  {
    id: "position",
    name: "position",
    placeholder: "Position ",
    type: "text",
    label: "Position",
  },
  {
    id: "company",
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    id: "duration",
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
  {
    id: "location",
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Location",
  },
  {
    id: "jobprofile",
    name: "jobprofile",
    placeholder: "Jobprofile",
    type: "text",
    label: "Jobprofile",
  },
];

export default function AdminExperienceView({
  formData,
  setFormData,
  handleSaveData,
  data,
}) {
  return (
    <div className="w-full">
      <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <div className="mb-10 space-y-6">
          {data && data.length ? (
            data.map((item, index) => (
              <div
                key={index}
                className="bg-[#ffffff] flex flex-col gap-2 p-6 rounded-lg shadow-md border border-green-600 hover:border-green-800 transition duration-300"
              >
                <p className="text-lg font-semibold text-gray-700">
                  Postion: {item.position}
                </p>
                <p className="text-lg text-gray-700">
                  Company: {item.company}
                </p>
                <p className="text-lg  text-gray-700">
                  Duration: {item.duration}{" "}
                </p>
                <p className="text-lg text-gray-700">
                  Location: {item.location}
                </p>
                <p className="text-lg text-gray-700">
                  {item.jobprofile}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No job Experience data Available
            </p>
          )}
        </div>

        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("experience")}
          className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
