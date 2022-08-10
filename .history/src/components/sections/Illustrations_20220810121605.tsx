import Image from "next/image";
import React from "react";

const IllustrationsSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-3">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Image
            src="/assets/images/project.jpg"
            alt=""
            height={1002}
            width={644}
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col">
          <div>
            <Image
              src="/assets/images/project2.jpg"
              alt=""
              height={552}
              width={736}
              className="rounded-3xl"
            />
          </div>
          <div className="flex-1"/>
          <div>
            <Image
              src="/assets/images/project3.jpg"
              alt=""
              height={552}
              width={736}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustrationsSection;
