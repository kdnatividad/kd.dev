import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import agwebworx from "../assets/agwebworx.webp";
import deped from "../assets/deped.webp";
import jnc from "../assets/jnc.webp";
import eviva from "../assets/eviva.webp";
import wedodigital from "../assets/wedodigital.webp";
import blogtec from "../assets/blogtec.webp";
const workData = [
  {
    company: "AG WebWorx",
    role: "WordPress Developer, Project Manager",
    date: "March 2020 - Present",
    logo: agwebworx,
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    company: "JNC Sports PH",
    role: "Manager, Creative Director",
    date: "August 2023 - Nov 2025",
    logo: jnc,
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    company: "BlogTec",
    role: "Content Management Specialist",
    date: "Nov 2022 - Jul 2023 (Contract)",
    logo: blogtec,
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    company: "Department of Education, Tuguegarao",
    role: "Developer, Team Leader, Intern  (OJT)",
    date: "March 2023 - May 2023",
    logo: deped,
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    company: "Eviva Media",
    role: "WordPress Developer  (Part-Time)",
    date: "March 2021 - 2022",
    logo: eviva,
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    company: "We Do Digital (Intern)",
    role: "WordPress Developer",
    date: "March 2020 - 2021",
    logo: wedodigital,
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
];

const Work = () => {
  return (
    <section>
      <Tabs defaultValue="work">
        <TabsList className="grid w-full grid-cols-2 bg-gray-900 rounded-lg p-1">
          <TabsTrigger
            value="work"
            className="rounded-md data-[state=active]:bg-[#030712] data-[state=active]:text-white text-gray-400"
          >
            Work
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="rounded-md data-[state=active]:bg-[#030712] data-[state=active]:text-white text-gray-400"
          >
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="work"
          className="w-full rounded-lg border border-gray-800 p-6"
        >
          <div className="flex flex-col gap-8">
            {workData.map((job, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-700 bg-gray-800">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-base">{job.company}</span>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="text-gray-400 text-sm">{job.role}</span>
                    <span className="text-gray-400 text-sm">{job.date}</span>
                  </div>

                  <ul className="list-disc ml-4 text-sm">
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
          className="rounded-lg border border-gray-800 p-6"
        >
          {/* education entries */}
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Work;
