import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/SingleJobCustomTab";
import trash from "../assets/trash.png";
import pen from "../assets/edit-2.png";
import { Separator } from "@/components/ui/separator";

function SingleJobTab() {
  return (
    <div className="rounded-[8px]  border-[1px] border-[#F3F4F6] mb-10">
      <Tabs defaultValue="jobtitle" className="py-5 overflow-auto ">
        <div className="flex justify-between items-center border-b-[1px] border-[#F3F4F6]">
          <TabsList className="flex gap-2 justify-start ">
            <TabsTrigger
              value="jobtitle"
              className="text-[14px] py-4 leading-5"
            >
              Job Title
            </TabsTrigger>
            <TabsTrigger
              value="description"
              className="text-[13px] py-4 leading-5"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="responsibilities"
              className="text-[13px] py-4 leading-5"
            >
              Responsibilities
            </TabsTrigger>
            <TabsTrigger value="req" className="text-[13px] py-4 leading-5">
              Requirements and Skills
            </TabsTrigger>
            <TabsTrigger value="jobtype" className="text-[13px] py-4 leading-5">
              JobType/Work Place Type
            </TabsTrigger>
            <TabsTrigger value="appq" className="text-[13px] py-4 leading-5">
              Application Questions
            </TabsTrigger>
            <TabsTrigger value="upload" className="text-[13px] py-4 leading-5">
              Upload
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-5 pr-5">
            <div className="flex gap-2 items-center">
              <img src={trash} alt="trash icon" className="w-4 h-4 mb-1" />
              <span className="font-bold">Delete</span>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={pen} alt="trash icon" className="w-4 h-4 mb-1" />
                <span className="font-bold">Edit </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 px-5">
          <TabsContent value="jobtitle" className="pb-2">
            Product Designer
          </TabsContent>
          <TabsContent value="description" className="pb-2">
            <p className="mb-6 text-[#6B7280]">
              We are looking for a PRODUCT DESIGNER to turn our software into
              easy-to-use products for our organization. PRODUCT DESIGNER
              responsibilities include gathering user requirements, designing
              graphic elements and building navigation components.
            </p>
            <p className="text-[#6B7280]">
              To be successful in this role, you should have experience with
              design software and wireframe tools. If you also have a portfolio
              of professional design projects that includes work with web/mobile
              applications, we’d like to meet you. Ultimately, you’ll create
              both functional and appealing features that address our clients’
              needs and help us grow our customer base.
            </p>
          </TabsContent>
          <TabsContent value="responsibilities" className="pb-2">
            <li className="list">
              <span>
                Gather and evaluate user requirements in collaboration with
                product managers and engineers
              </span>
            </li>

            <li className="list">
              <span>
                Illustrate design ideas using storyboards, process flows and
                sitemaps
              </span>
            </li>

            <li className="list">
              <span>
                Design graphic user interface elements, like menus, tabs and
                widgets
              </span>
            </li>

            <li className="list">
              <span>Build page navigation buttons and search fields</span>
            </li>

            <li className="list">
              <span>
                Develop UI mockups and prototypes that clearly illustrate how
                sites function and look like
              </span>
            </li>

            <li className="list">
              <span>
                Create original graphic designs (e.g. images, sketches and
                tables)
              </span>
            </li>

            <li className="list">
              <span>
                Prepare and present rough drafts to internal teams and key
                stakeholders
              </span>
            </li>

            <li className="list">
              <span>
                Identify and troubleshoot UX problems (e.g. responsiveness)
              </span>
            </li>
            <li className="list">
              <span>Conduct layout adjustments based on user feedback</span>
            </li>
            <li className="list">
              <span>Adhere to style standards on fonts, colors and images</span>
            </li>
            <li className="list">
              <span>Gather specific requirements and suggest solutions</span>
            </li>

            <li className="list">
              <span>Write unit and UI tests to identify malfunctions</span>
            </li>
            <li className="list">
              <span>
                Liaise with Product development team to plan new features
              </span>
            </li>
            <li className="list">
              <span>
                Ensure new and legacy applications meet quality standard
              </span>
            </li>
            <li className="list">
              <span>
                Write high quality source code to program complete applications
                within deadlines
              </span>
            </li>
            <li className="list">
              <span>
                Evaluate existing applications to reprogram, update and add new
                features
              </span>
            </li>
            <li className="list">
              <span>Design mobile-based features</span>
            </li>
            <li className="list">
              <span>
                Ensure high quality graphic standards and brand consistency
              </span>
            </li>
            <li className="list">
              <span>Logo Designs</span>
            </li>
            <li className="list">
              <span>Stay up-to-date on emerging technologies</span>
            </li>
          </TabsContent>
          <TabsContent value="req" className="pb-2">
            <li className="list">
              <span>
                Develop UI mockups and prototypes that clearly illustrate how
                sites function and look like
              </span>
            </li>

            <li className="list">
              <span>
                Create original graphic designs (e.g. images, sketches and
                tables)
              </span>
            </li>

            <li className="list">
              <span>
                Prepare and present rough drafts to internal teams and key
                stakeholders
              </span>
            </li>

            <li className="list">
              <span>
                Identify and troubleshoot UX problems (e.g. responsiveness)
              </span>
            </li>
            <li className="list">
              <span>Conduct layout adjustments based on user feedback</span>
            </li>
            <li className="list">
              <span>Adhere to style standards on fonts, colors and images</span>
            </li>
            <li className="list">
              <span>Gather specific requirements and suggest solutions</span>
            </li>

            <li className="list">
              <span>Write unit and UI tests to identify malfunctions</span>
            </li>
            <li className="list">
              <span>
                Liaise with Product development team to plan new features
              </span>
            </li>
            <li className="list">
              <span>
                Ensure new and legacy applications meet quality standard
              </span>
            </li>
            <li className="list">
              <span>
                Write high quality source code to program complete applications
                within deadlines
              </span>
            </li>
            <li className="list">
              <span>
                Evaluate existing applications to reprogram, update and add new
                features
              </span>
            </li>
            <li className="list">
              <span>Design mobile-based features</span>
            </li>
            <li className="list">
              <span>
                Ensure high quality graphic standards and brand consistency
              </span>
            </li>
            <li className="list">
              <span>Logo Designs</span>
            </li>
            <li className="list">
              <span>Stay up-to-date on emerging technologies</span>
            </li>
          </TabsContent>

          <TabsContent
            value="jobtype"
            className="flex space-x-6 items-center pb-2"
          >
            <div className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] w-[323px] h-[106px]">
              <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                Job Type
              </h1>
              <h2 className="font-bold">Fulltime</h2>
            </div>

            <div className="h-[106px] w-[1px] bg-[#F6F7F8]" />
            <div className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] w-[323px] h-[106px]">
              <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                Work Place Type
              </h1>
              <h2 className="font-bold">Remote</h2>
            </div>
          </TabsContent>
          <TabsContent value="appq" className="pb-3 h-full">
            <div className="grid md:grid-cols-3 gap-9 ">
              <div className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Q1
                </h1>
                <h2 className="font-bold">
                  Full Name{" "}
                  <span className="text-[#D1D5DB] ml-2">(Compulsory)</span>
                </h2>
              </div>
              <div className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Q2
                </h1>
                <h2 className="font-bold">
                  Last Name{" "}
                  <span className="text-[#D1D5DB] ml-2">(Compulsory)</span>
                </h2>
              </div>

              <div className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Q3
                </h1>
                <h2 className="font-bold">
                  Email{" "}
                  <span className="text-[#D1D5DB] ml-2">(Compulsory)</span>
                </h2>
              </div>
              <div className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Q4
                </h1>
                <h2 className="font-bold">
                  Phone Number{" "}
                  <span className="text-[#D1D5DB] ml-2">(Compulsory)</span>
                </h2>
              </div>
              <div className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Q5
                </h1>
                <h2 className="font-bold">
                  WebSite/Portfolio link{" "}
                  <span className="text-[#D1D5DB] ml-2">(Compulsory)</span>
                </h2>
              </div>
              <div className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Q6
                </h1>
                <h2 className="font-bold">Linkedin Profile</h2>
              </div>
              <div className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Q7
                </h1>
                <h2 className="font-bold">
                  Work Type{" "}
                  <span className="text-[#D1D5DB] ml-2">(Compulsory)</span>
                </h2>
              </div>
              <div className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Q8
                </h1>
                <h2 className="font-bold">Able to start immediately</h2>
              </div>
            </div>

            <Separator orientation="vertical" className="bg-red-900 h-full" />
          </TabsContent>
          <TabsContent value="upload">uploads</TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default SingleJobTab;
