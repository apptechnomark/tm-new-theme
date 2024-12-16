interface CaseStudyProjectProps {
  logo: string;
  logoDark: string;
  title: string;
  description: string;
  technologies: string[];
  industry: string;
  challenges: string[];
  solutions: string[];
  results: { metric: string; value: string }[];
  videoLink: string;
}

export interface CaseStudyProps {
  content: CaseStudyProjectProps;
}

interface SuccessStoryProps {
  sectionTitle: string;
  titleHighlightWords: string[];
  sectionDesc: string;
  projectList?: CaseStudyProjectProps[];
}

export interface SuccessProps {
  content: SuccessStoryProps;
}

export interface GuaranteeProps {
  content: {
    title: string;
    videoLink?: string;
    sections: Array<{
      title: string;
      description: string;
      count: number;
    }>;
    buttonLabel?: string;
    buttonLink?: string;
  };
}

export interface ClientSpeakProps {
  content: {
    title: string;
    desc?: string;
    sections: Array<{
      videoUrl: string;
      clientNameTitle: string;
      ClientNameDesc: string;
    }>;
    
  };
}
