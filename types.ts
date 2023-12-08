export type StarUpType = {
  additional_email: string;
  advanced_cost_warm_introductions: string;
  amount_invested_by_external_investors: string;
  amount_invested_by_founders: string;
  amount_needed: string;
  amount_needed_next_three_years: string;
  best_way_to_follow_up: string;
  business_plan: {
    file_name: string;
    file_url: string;
  };
  contact_email: string;
  how_did_you_hear_about_us: string;
  id: number | string;
  linkedin_profile: string;
  person_name: string;
  phone: string;
  pitch_deck: {
    file_name: string;
    file_url: string;
  };
  position: string;
  startup_country: string;
  startup_industry: string;
  startup_name: string;
  startup_stage: string;
  startup_website: string;
  whatsapp_phone: string;
};

export type Event = {
  id: number | string;
  title: string;
  image: {
    file_url: string;
    file_name: string;
  };
};
export type EventType = {
  active_event: Event[];
  inactive_event: Event[];
};

export type WebinarType = {
  title: string;
  summary: string;
  webinar_info: {
    date: string;
    time: string;
    location: string;
    speakers: string[];
  };
};

export type SingleWebinarType = {
  id: number | string;
  image: {
    file_url: string;
    file_name: string;
  };
  deleted?: boolean;
} & WebinarType;

export type GroupWebinarType = {
  active_webinar: SingleWebinarType[];
  inactive_webinar: SingleWebinarType[];
};

export type SpeakerType = {
  id: number | string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  linkedin: string;
  instagram: string;
  note: string;
};

export type recent = {
  title: string;
  date_created: string;
};
export type DashboardDataType = {
  total_quote: number;
  total_startup: number;
  total_job_post: number;
  total_webinar: number;
  total_guide: number;
  total_blog: number;
  total_event: number;
  date_last_post_blog: string;
  date_last_post_guide: string;
  date_last_post_webinar: string;
  date_last_post_event: string;
  recent_blogs: recent[];
  recent_webinars: recent[];
  recent_guides: recent[];
  recent_events: recent[];
};

export type recentLogs = {
  ip_address: string;
  message: string;
  date_created: string;
};

export type Speaker = {
  id: string | number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  linkedin: string | null;
  instagram: string | null;
  note: string | null;
};

export type AccountType = {
  account_information: {
    name: string;
    email: string;
    adminInfo: {
      admin_id: string;
      date_created: string;
      date_last_updated: string;
      suspended: boolean;
      last_login: string;
    };
  };
  recent_logs: recentLogs[];
};

export type GuideType = {
  guide_id: string;
  title: string;
  author: string;
  categories: string[];
  tags: string[];
  date_created: string;
};

export type GuideCreateType = {
  title: string;
  summary: string;
  description: string;
  categories: string[];
  tags: string[];
  visibility: string;
  saved: string;
};

export type SingleGuideType = {
  title: string;
  summary: string;
  description: string;
  categories: string[];
  tags: string[];
  date_created: string;
  date_last_updated: string;
  visibility: string;
  saved: string;
  image: {
    file_url: string;
    file_name: string;
  };
};

export type BlogType = {
  blog_id: string;
  title: string;
  author: string;
  categories: string[];
  tags: string[];
  date_created: string;
};

export type BlogCreateType = {
  title: string;
  summary: string;
  description: string;
  categories: string[];
  tags: string[];
  visibility: string;
  saved: string;
};

export type SingleBlogType = {
  title: string;
  summary: string;
  description: string;
  categories: string[];
  tags: string[];
  date_created: string;
  date_last_updated: string;
  visibility: string;
  saved: string;
  image: {
    file_url: string;
    file_name: string;
  };
};

export type QuoteType = {
  quote_id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  products: string[];
  category: string;
  status: string;
  message: string | null;
  feedback: string | null;
};

export type SupportType = {
  id: string | number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  resolved_by_admin: boolean | null;
  date_created: string;
  date_last_updated: string;
};

export type MemberType = {
  admin_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  title: string;
  image: string;
  permissions: string[];
  adminInfo: {
    date_created: string;
    suspended: boolean;
    last_login: string;
  };
};

export type MemberDataType = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  title: string;
  permissions: string[];
};

type appQuestion = {
  question: string;
  compulsory: boolean;
};
type UploadType = {
  file: string;
  compulsory: boolean;
};

export type JobDataType = {
  title: string;
  description: string;
  responsibilities: string[];
  requirements_and_skills: string[];
  job_and_work_place_type: {
    job_type: string;
    work_place_type: string;
  };
  application_questions: appQuestion[];
  uploads: UploadType[];
};

export type SingleJobType = {
  job_post_id: "1a1d7cb5-6ec4-4776-bd49-f99a47df1917";
  title: string;
  description: string;
  responsibilities: string[];
  requirements_and_skills: string[];
  job_and_work_place_type: {
    job_type: string;
    work_place_type: string;
  };
  application_questions: appQuestion[];
  uploads: UploadType[];
  isDeleted: boolean;
};

export type settingType = {
  id: string;
  work_place_type: string;
  deleted: boolean;
  date_created: string;
  date_last_updated: string;
};

export type jobType = {
  id: string;
  job_type: string;
  deleted: boolean;
  date_created: string;
  date_last_updated: string;
};

export type DocumentType = {
  id: string;
  file: string;
  compulsory: boolean;
  deleted: boolean;
  date_created: string;
  date_last_updated: string;
};

export type questionType = {
  id: string;
  question: string;
  compulsory: boolean;
  deleted: boolean;
  date_created: string;
  date_last_updated: string;
};

export type enquiryType = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  destination: string;
  category: string;
  company: string;
  website: string;
  overview: string;
  message: string;
};

export const enquiryData: enquiryType[] = [
  {
    first_name: "Matthew",
    last_name: "Oluwatobi",
    phone: "08156754328",
    email: "Matthew46@gmail.com",
    destination: "Wealth management",
    category: "Personal",
    company: "Yem and Kem linited",
    website: "yemkemlimitedcompany.com",
    overview: "Pharmaceuticals",
    message: "hello world",
  },
  {
    first_name: "Matthew",
    last_name: "Oluwatobi",
    phone: "08156754328",
    email: "Matthew46@gmail.com",
    destination: "Wealth management",
    category: "Personal",
    company: "Yem and Kem linited",
    website: "yemkemlimitedcompany.com",
    overview: "Pharmaceuticals",
    message: "hello world",
  },
  {
    first_name: "Matthew",
    last_name: "Oluwatobi",
    phone: "08156754328",
    email: "Matthew46@gmail.com",
    destination: "Wealth management",
    category: "Personal",
    company: "Yem and Kem linited",
    website: "yemkemlimitedcompany.com",
    overview: "Pharmaceuticals",
    message: "hello world",
  },
  {
    first_name: "Matthew",
    last_name: "Oluwatobi",
    phone: "08156754328",
    email: "Matthew46@gmail.com",
    destination: "Wealth management",
    category: "Personal",
    company: "Yem and Kem linited",
    website: "yemkemlimitedcompany.com",
    overview: "Pharmaceuticals",
    message: "hello world",
  },
  {
    first_name: "Matthew",
    last_name: "Oluwatobi",
    phone: "08156754328",
    email: "Matthew46@gmail.com",
    destination: "Wealth management",
    category: "Personal",
    company: "Yem and Kem linited",
    website: "yemkemlimitedcompany.com",
    overview: "Pharmaceuticals",
    message: "hello world",
  },
  {
    first_name: "Matthew",
    last_name: "Oluwatobi",
    phone: "08156754328",
    email: "Matthew46@gmail.com",
    destination: "Wealth management",
    category: "Personal",
    company: "Yem and Kem linited",
    website: "yemkemlimitedcompany.com",
    overview: "Pharmaceuticals",
    message: "hello world",
  },
];

export const base_url = "https://stackivy-admin-be.onrender.com";
