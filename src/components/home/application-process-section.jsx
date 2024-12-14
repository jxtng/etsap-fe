"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const processList = [
  {
    name: "Fill Application form",
    description: "Fill out the application form with the required information",
  },
  {
    name: "Receive Application Confirmation",
    description: "Receive a Confirmation of your application via email",
  },
  {
    name: "Application Review and Processing",
    description: "Your application will be reviewed and processed promptly.",
  },
  {
    name: "Receive Admission letter & Onboarding Credentials",
    description:
      "Check your email for admission letter, Onboarding details and unique student ID.",
  },
  {
    name: "Begin Your Upskilling Journey",
    description:
      "Complete the onboarding process and start your journey towards upskilling.",
  },
];

const gridShifts = [
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-2",
  "col-start-1",
];

const ApplicationProcessSection = () => {
  const [bgAttachment, setBgAttachment] = useState("scroll");

  return (
    <section className="application-process flex flex-col gap-6 bg-neutral-100">
      <div className="container mx-auto">
        <h2>Application Process</h2>
      </div>

      <div className="section-escape grid grid-cols-2 grid-flow-col gap-4">
        <motion.div className="img-wrapper overflow-hidden w-full h-[550px]">
          <img
            src="/images/application-process.png"
            alt="Application Process Image"
            className="w-full h-full object-cover rounded-e-full"
          />
        </motion.div>
        <ul className="info self-center grid grid-cols-12 gap-4 pr-8">
          {processList.map(({ name, description }, index) => (
            <motion.li
              key={name}
              className={cn(
                "col-span-9 grid grid-cols-6 grid-flow-col gap-4 my-2 rounded-md p-4 bg-neutral-200",
                gridShifts[index]
              )}
              initial="hide"
              whileHover="show"
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="number col-span-1 size-8 flex justify-center items-center rounded-full shrink-0 bg-slate-950 text-white">
                {index + 1}
              </div>
              <div className="self-center col-span-5">
                <h4 className="">{name}</h4>
                <motion.p
                  variants={{
                    show: { height: "auto", visibility: "visible" },
                    hide: { height: 0, visibility: "hidden" },
                  }}
                  className="transition-transform m-0 overflow-hidden origin-top duration-500"
                >
                  {description}
                </motion.p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
      <Button className="mx-auto container max-w-[700px] md:p-6" asChild>
        <Link href="/register">Apply Now</Link>
      </Button>
    </section>
  );
};

export default ApplicationProcessSection;
