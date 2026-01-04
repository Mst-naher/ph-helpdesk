import { use, useState } from "react";
import React from 'react';
import Container from './Container';
import Toggle_Btns from './Toggle_Btns';
import CountBox from "./CountBox";
import Card from "./Card";

const IssuesManagement = ({ facePromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  console.log(toggleStatus);
 const initialData = use(facePromise);
//  console.log(initialData);
const[data, setData] = useState(initialData)
// console.log(data)

const filteredData = toggleStatus == "All" ? data : data.filter((element)=>element.status == toggleStatus);


// console.log(toggleStatus, filteredData)
  return (
    <div>
      {/* Box */}
      <CountBox data={data} />
      {/* Toggle buttons */}
      <Toggle_Btns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      />
      {/* Cards */}
      <Container>
        {filteredData.length == 0 ? (
          <h2 className="font-bold text-[35px] text-center mb-9 text-purple-600 text-shadow-2xl">No Data</h2>
        ) : (
          <div className="grid grid-cols-3 gap-[12px] mb-6">
            {filteredData.map((issue, ind) => {
              // console.log(issue);
              return (
                <Card key={ind} issue={issue} data={data} setData={setData} />
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default IssuesManagement;