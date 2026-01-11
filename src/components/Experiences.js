import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { experiences } from "../data";

function Media({mediaName, mediaType}) {
  if (mediaType === "video"){
    return <video className='VideoTag absolute inset-0 w-full h-full object-cover object-center' autoPlay loop muted src={mediaName} type="video/mp4"/>
  }
  
  else{
    return <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={mediaName}/>
  }
}

function Tag({tag}) {
  if(tag === "Tools and Pipeline") {
    return <span class="w3-tag w3-round-large w3-teal ">{tag}</span>
  }
  else if(tag === "Game Development") {
    return <span class="w3-tag w3-round-large w3-blue ">{tag}</span>
  }
  else if(tag === "Illustration") {
    return <span class="w3-tag w3-round-large w3-deep-purple ">{tag}</span>
  }
  else if(tag === "Design") {
    return <span class="w3-tag w3-round-large w3-light-green ">{tag}</span>
  }
  else if(tag === "Front-end Web Development") {
    return <span class="w3-tag w3-round-large w3-indigo ">{tag}</span>
  }
}

export default function Experiences() {
  return (
    <section id="experiences" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Additional Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            More cool things I've made and built!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {experiences.map((experience) => (

            <a
              href={experience.link}
              key={experience.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <Media
                  mediaName={experience.image}
                  mediaType={experience.mediaType}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <Tag
                    tag={experience.tag}
                  />
                  <h2 className="tracking-widest text-lg title-font font-medium text-indigo-300 mb-1">
                    {experience.subtitle}
                  </h2>
                  <h1 className="title-font text-xl font-medium text-white mb-3">
                    {experience.title}
                  </h1>
                  <p className="leading-relaxed">{experience.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );



// export default function Jobs() {
//   return (
//     <section id="jobs" className="text-gray-400 bg-gray-900 body-font">
//       <div className="container px-5 py-10 mx-auto text-center lg:px-40">
//         <div className="flex flex-col w-full mb-20">
//           <CodeIcon className="mx-auto inline-block w-10 mb-4" />
//           <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
//             Work Experience
//           </h1>
//           <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//             Internship and Job Experience
//           </p>
//         </div>
//         <div className="flex flex-wrap -m-4">
//           {/* {jobs.map((job) => (

//             <a
//               key={job.image}
//               className="sm:w-1/2 w-100 p-4">
//               <div className="flex relative">
//                 <Media
//                   mediaName={job.image}
//                   mediaType={job.mediaType}
//                 />
//                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                   <h2 className="tracking-widest text-sm title-font font-medium text-indigo-300 mb-1">
//                     {job.role}
//                   </h2>
//                   <h1 className="title-font text-lg font-medium text-white mb-3">
//                     {job.company}
//                   </h1>
//                   <p className="leading-relaxed">{job.description}</p>
//                 </div>
//               </div>
//             </a>
//           ))} */}
//         </div>
//       </div>
//     </section>
//   );
}