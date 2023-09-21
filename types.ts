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
};

export type SingleBlogType = {
  title: string;
  summary: string;
  description: string;
  categories: string[];
  tags: string[];
  date_created: string;
  date_last_updated: string;
};
export const base_url = "https://stackivy-admin-be.onrender.com";
