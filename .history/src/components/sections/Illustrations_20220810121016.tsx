import Image from "next/image";
import React from "react";

const IllustrationsSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-3">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Image
            src="/assets/images/project.jpeg"
            alt=""
            height={1002}
            width={644}
          />
        </div>
        <div className="flex flex-col">
          <div>
            <Image
              src="/assets/images/project2.jpeg"
              alt=""
              height={552}
              width={736}
            />
          </div>
          <div className="flex-1"/>
          <div>
            <Image
              src="/assets/images/project3.jpeg"
              alt=""
              height={552}
              width={736}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustrationsSection;
