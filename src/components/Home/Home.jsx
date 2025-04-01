import React, { useState } from "react";

// 分離組件，提高可讀性
const EducationItem = ({ logoText, period, institution, degree, achievements, projects }) => (
  <div className="relative">
    <div className="absolute -left-10 w-8 h-8 rounded-full bg-red-700 flex items-center justify-center text-white">
      {logoText}
    </div>

    <div className="space-y-2">
      <div className="text-gray-400">{period}</div>
      <h3 className="text-2xl font-bold">{institution}</h3>
      <div className="text-gray-400 text-lg">{degree}</div>
      
      {achievements && (
        <ul className="space-y-2 mt-4 text-gray-400">
          {achievements.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      )}

      {projects && (
        <div className="flex gap-4 mt-4">
          {projects.map((project, index) => (
            <button 
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100"
            >
              <span>🌐</span>
              {project}
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
);

const WorkItem = ({ logoText, logoColor, period, position, company, duties }) => (
  <div className="relative">
    <div className={`absolute -left-10 w-8 h-8 rounded-full ${logoColor} flex items-center justify-center text-white`}>
      {logoText}
    </div>

    <div className="space-y-2">
      <div className="text-gray-400">{period}</div>
      <h3 className="text-2xl font-bold">{position}</h3>
      <div className="text-gray-400 text-lg">{company}</div>
      
      {duties && (
        <ul className="space-y-2 mt-4 text-gray-400">
          {duties.map((duty, index) => (
            <li key={index}>• {duty}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export const Home = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-gray-900 text-white">
      <div className="space-y-8">
        <h1 className="text-2xl font-bold">Hi kenley here 👋</h1>
        
        <div className="space-y-4">
          <div className="text-xl">
            I'm a mobile application developer with 5 years of experience 🚀
          </div>
          <div className="text-xl">
            Using Kotlin, Java, Dart and Swift. Reach out if you'd like to learn more!
          </div>
        </div>

        <div className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Resume</h2>
          
          {/* Tabs Navigation */}
          <div className="flex mb-8">
            <button 
              className={`px-6 py-2 transition-colors ${
                activeTab === "work" 
                  ? "bg-gray-800 rounded-lg text-white" 
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("work")}
            >
              Work
            </button>
            <button 
              className={`px-6 py-2 transition-colors ${
                activeTab === "education" 
                  ? "bg-gray-800 rounded-lg text-white" 
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>

          {/* Timeline Content */}
          <div className="relative pl-8 border-l-2 border-gray-700 space-y-12">
            {activeTab === "education" && (
              <>
                <EducationItem 
                  logoText="CU"
                  institution="Coventry University"
                  degree="BS in Computer Science"
                  projects={["Final Year Project", "2nd Year Project"]}
                />
                
                <EducationItem 
                  logoText="IVE"
                  institution="Hong Kong Institute of Vocational Education"
                  degree="Higher Disploma in Software Engineering"
                />
              </>
            )}
              
            {activeTab === "work" && (
              <>
                <WorkItem 
                  logoText="HKET"
                  logoColor="bg-blue-600"
                  period="Dec 2022 - Mar 2023"
                  position="Senior Developer"
                  company="Hong Kong Economic Times Limited"
                  duties={[
                    "Develop Mobile App with Financial & Lifestyle feature with 100,000+ users base",
                    "Implemented the Android Jetpack including Hilt, Room, Coroutines and Flow to simplify the development process"
                  ]}
                />
                
                <WorkItem 
                  logoText="Chief"
                  logoColor="bg-green-600"
                  period="Sep 2021 - Nov 2022"
                  position="Senior Mobile Apps Developer"
                  company="Chief Securities Limited"
                  duties={[
                    "Develop and maintain a mobile application for the financial trading platform",
                    "In order to capture UI issues, employ snapshot testing to observe any visual alterations in both the user interface and data"
                  ]}
                />

<WorkItem 
                  logoText="Ztore"
                  logoColor="bg-green-600"
                  period="Aug 2018 - Sep 2021"
                  position="Senior Mobile Apps Developer"
                  company="Ztore HK Limited"
                  duties={[
                    "Develop a logistics application (LMS) using Flutter and a Self-pickup application (SPU) using Kotlin independently",
                    "Responsible for managing the publishing multiple platform (Google play store, Apple play store) and using GitHub tools to manage version control of the mobile applications"
                  ]}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};