import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type CvFile = {
  file: string;
  compulsory: boolean;
};
type DocFile = {
  file: string;
  compulsory: boolean;
};

interface JobDataType {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (desc: string) => void;
  responsibilities: string;
  setResponsibilities: (res: string) => void;
  requirements_and_skills: string;
  setRequirements_and_skills: (req: string) => void;
  job_and_work_place_type: {
    jobType: string;
    workPlaceType: string;
  };
  setJob: (job: string) => void;
  setWork: (work: string) => void;
  // // application_questions: {},
  uploads: [CvFile, DocFile];
  setCvUpload: (filename: string) => void;
  setCvCompulsory: (comp: boolean) => void;
  setDocUpload: (filename: string) => void;
  setDocCompulsory: (comp: boolean) => void;
}

export const useJobDataHook = create<JobDataType>()(
  devtools(
    persist(
      (set) => ({
        title: "",
        setTitle: (title) => set({ title: title }),
        description: "",
        setDescription: (desc) => set({ description: desc }),
        responsibilities: "",
        setResponsibilities: (res) => set({ responsibilities: res }),
        requirements_and_skills: "",
        setRequirements_and_skills: (req) =>
          set({ requirements_and_skills: req }),
        job_and_work_place_type: {
          jobType: "Job Type",
          workPlaceType: "Work Place Type",
        },
        setJob: (job) =>
          set((state) => ({
            job_and_work_place_type: {
              jobType: job,
              workPlaceType: state.job_and_work_place_type.workPlaceType,
            },
          })),
        setWork: (work) =>
          set((state) => ({
            job_and_work_place_type: {
              jobType: state.job_and_work_place_type.jobType,
              workPlaceType: work,
            },
          })),
        uploads: [
          {
            file: "CV",
            compulsory: false,
          },
          {
            file: "Document",
            compulsory: false,
          },
        ],
        setCvUpload: (filename) =>
          set((state) => ({
            uploads: [
              {
                file: filename,
                compulsory: state.uploads[0].compulsory,
              },
              {
                file: state.uploads[1].file,
                compulsory: state.uploads[1].compulsory,
              },
            ],
          })),
        setCvCompulsory: (comp) =>
          set((state) => ({
            uploads: [
              {
                file: state.uploads[0].file,
                compulsory: comp,
              },
              {
                file: state.uploads[1].file,
                compulsory: state.uploads[1].compulsory,
              },
            ],
          })),
        setDocUpload: (filename) =>
          set((state) => ({
            uploads: [
              {
                file: state.uploads[0].file,
                compulsory: state.uploads[0].compulsory,
              },
              {
                file: filename,
                compulsory: state.uploads[1].compulsory,
              },
            ],
          })),
        setDocCompulsory: (comp) =>
          set((state) => ({
            uploads: [
              {
                file: state.uploads[0].file,
                compulsory: state.uploads[0].compulsory,
              },
              {
                file: state.uploads[1].file,
                compulsory: comp,
              },
            ],
          })),
      }),
      {
        name: "Job-data", // unique name
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
    )
  )
);
