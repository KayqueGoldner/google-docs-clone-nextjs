export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <p>Presented by [Your Company Name]</p>
      <h2>Introduction</h2>
      <p>[Brief overview of the proposal]</p>
      <h2>Objectives</h2>
      <ul>
        <li>[Objective 1]</li>
        <li>[Objective 2]</li>
      </ul>
      <h2>Conclusion</h2>
      <p>[Closing remarks]</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <p>Prepared for [Client/Stakeholder]</p>
      <h2>Project Overview</h2>
      <p>[Description of the project goals and scope]</p>
      <h2>Timeline</h2>
      <p>[Proposed timeline]</p>
      <h2>Budget</h2>
      <p>[Estimated budget details]</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Company Name]</p>
      <p>[Address]</p>
      <p>[City, State, ZIP]</p>
      <p>[Date]</p>
      <p>[Recipient's Name]</p>
      <p>[Recipient's Company Name]</p>
      <p>[Recipient's Address]</p>
      <p>Dear [Recipient's Name],</p>
      <p>[Body of the letter]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>[Your Name]</h1>
      <p>[Your Contact Information]</p>
      <h2>Professional Summary</h2>
      <p>[Brief summary of your experience and skills]</p>
      <h2>Work Experience</h2>
      <p>[Job Title] - [Company Name]</p>
      <p>[Dates of Employment]</p>
      <p>[Key responsibilities and achievements]</p>
      <h2>Education</h2>
      <p>[Degree] - [Institution Name]</p>
      <p>[Graduation Year]</p>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP]</p>
      <p>[Date]</p>
      <p>[Hiring Manager's Name]</p>
      <p>[Company Name]</p>
      <p>[Company Address]</p>
      <p>Dear [Hiring Manager's Name],</p>
      <p>I am writing to express my interest in the [Position Title] position at [Company Name].</p>
      <p>[Body of the cover letter]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP]</p>
      <p>[Date]</p>
      <p>Dear [Recipient's Name],</p>
      <p>[Body of the letter]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
];
