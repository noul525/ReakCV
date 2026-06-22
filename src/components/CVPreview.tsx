import React from 'react';
import { CVData } from '../types';

export default function CVPreview({ data }: { data: CVData }) {
  return (
    <div className="flex w-full h-full bg-white relative font-sans">
      {/* Left Sidebar */}
      <div className="w-[35%] bg-black text-white p-8 pt-[260px] flex flex-col gap-10 relative z-10 min-h-full">
        <div className="space-y-1 mt-6">
          <p className="text-[13px] tracking-wide text-gray-300">{data.personalInfo.location}</p>
          <p className="text-[13px] tracking-wide text-gray-300">{data.personalInfo.email}</p>
          <p className="text-[13px] tracking-wide text-gray-300">{data.personalInfo.phone}</p>
        </div>

        {data.languages && data.languages.length > 0 && (
          <div>
            <h2 className="text-[1.1rem] font-bold tracking-widest mb-4 uppercase">LANGUAGE</h2>
            <div className="flex flex-col gap-1.5">
              {data.languages.map((lang, i) => (
                <p key={i} className="text-[13px] text-gray-300 tracking-wide">{lang}</p>
              ))}
            </div>
          </div>
        )}

        {data.skills && data.skills.length > 0 && (
          <div>
            <h2 className="text-[1.1rem] font-bold tracking-widest mb-4 uppercase">SKILLS</h2>
            <div className="flex flex-col gap-2.5">
              {data.skills.map((skill, i) => (
                <p key={i} className="text-[13px] text-gray-300 tracking-wide">{skill}</p>
              ))}
            </div>
          </div>
        )}

        {data.personalStrengths && data.personalStrengths.length > 0 && (
          <div>
            <h2 className="text-[1.1rem] leading-tight font-bold tracking-widest mb-4 uppercase">PERSONAL<br/>STRENGTH</h2>
            <div className="flex flex-col gap-2.5">
              {data.personalStrengths.map((str, i) => (
                <p key={i} className="text-[13px] text-gray-300 tracking-wide">{str}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Top Avatar positioned over left column */}
      <div className="absolute top-[3rem] left-12 w-[180px] h-[180px] rounded-full z-20 shadow-xl bg-gray-200 border-4 border-white flex items-center justify-center text-gray-500">
        <span className="text-[5rem] font-bold tracking-tight text-black">ST</span>
      </div>

      {/* Right Content */}
      <div className="w-[65%] text-black p-12 pt-[100px] flex flex-col gap-10">
        <h1 className="text-[3.5rem] leading-[1.05] font-black uppercase tracking-tight">
          {data.personalInfo.fullName.split(' ').map((name, i) => (
            <React.Fragment key={i}>
              {name}<br/>
            </React.Fragment>
          ))}
        </h1>

        {data.profile && (
          <div>
            <h2 className="text-[1.35rem] font-extrabold uppercase mb-4 tracking-wide">PROFILE</h2>
            <p className="text-[14px] leading-relaxed text-gray-800">
              {data.profile}
            </p>
          </div>
        )}

        {data.experience && data.experience.length > 0 && (
          <div>
            <h2 className="text-[1.35rem] font-extrabold uppercase mb-5 tracking-wide">RELEVANT EXPERIENCE</h2>
            <div className="flex flex-col gap-6">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <h3 className="font-bold text-[15px] mb-2">{exp.title}</h3>
                  <p className="text-[14px] leading-relaxed whitespace-pre-wrap text-gray-800">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.education && data.education.length > 0 && (
          <div>
            <h2 className="text-[1.35rem] font-extrabold uppercase mb-5 tracking-wide">EDUCATION</h2>
            <div className="flex flex-col gap-3">
              {data.education.map(edu => (
                <p key={edu.id} className="text-[14px] text-gray-800">
                  {edu.description}
                </p>
              ))}
            </div>
          </div>
        )}

        {data.interests && data.interests.length > 0 && (
          <div>
            <h2 className="text-[1.35rem] font-extrabold uppercase mb-4 tracking-wide">INTEREST</h2>
            <div className="flex flex-col gap-1.5">
              {data.interests.map((int, i) => (
                <p key={i} className="text-[14px] text-gray-800">{int}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
