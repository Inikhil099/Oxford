import React from "react";

function Footer() {
  return (
    <div className="my-5 rounded-md w-full mx-auto p-4 text-sm font-sans bg-white">
      <div className="flex justify-between items-start mb-4">
        <div className="text-right text-sm font-medium">
          The decision of the Institute regarding the selection / rejection of
          the Applicant shall be final and no queries will be entertained
        </div>
      </div>
      <div className="mt-4 font-semibold">
        Please Note :
        <div className="font-normal ml-4">
          1) This card is to be presented at the written test venue.
        </div>
      </div>
      <div className="mt-2 text-right text-sm">
        <span className="font-medium">Ref. No. :</span> 202410/10001-12000/20
        Book
      </div>
    </div>
  );
}

export default Footer;
