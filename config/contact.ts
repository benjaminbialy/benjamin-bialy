export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  email = 'email',
  upwork = 'upwork',
}

export interface Contact {
  site: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  site: 'benjaminbialy.vercel.app',
  links: {
    github: 'https://github.com/benjaminbialy',
    linkedin: 'https://linkedin.com/in/benjaminbialy',
    email: 'mailto:benjaminbialy@gmail.com',
    upwork: 'https://www.upwork.com/freelancers/~010e8c3f713dce417d',
  },
};
