import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { workData, educData } from "./careerdata";

const Work = () => {
  return (
    <section>
      <Tabs defaultValue="work">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-900 rounded-lg p-1">
          <TabsTrigger
            value="work"
            className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-[#030712] data-[state=active]:text-gray-900 dark:data-[state=active]:text-white text-gray-500 dark:text-gray-400"
          >
            Work
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-[#030712] data-[state=active]:text-gray-900 dark:data-[state=active]:text-white text-gray-500 dark:text-gray-400"
          >
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="work"
          className="rounded-lg border border-gray-200 dark:border-gray-800 p-6"
        >
          <div className="flex flex-col gap-8">
            {workData.map((job, i) => (
              <div key={i} className="flex gap-4 relative">
                {i !== workData.length - 1 && (
                  <div className="absolute left-5 top-5 bottom-[-52px] w-px bg-gray-200 dark:bg-gray-700" />
                )}

                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 z-10">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-base px-2">
                      {job.company}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-2">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{job.role}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{job.date}</span>
                  </div>
                  <ul className="list-disc ml-4 text-sm px-2">
                    {job.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent
          value="education"
          className="w-full rounded-lg border border-gray-200 dark:border-gray-800 p-6"
        >
          <div className="flex flex-col gap-8">
            {educData.map((school, i) => (
              <div key={i} className="flex gap-4 relative">
                {i !== educData.length - 1 && (
                  <div className="absolute left-5 top-5 bottom-[-52px] w-px bg-gray-200 dark:bg-gray-700" />
                )}

                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 z-10">
                  <img
                    src={school.logo}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-base px-2">
                      {school.alma}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-2">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {school.major}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{school.date}</span>
                  </div>
                  <ul className="list-disc ml-4 text-sm px-2">
                    {school.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Work;
