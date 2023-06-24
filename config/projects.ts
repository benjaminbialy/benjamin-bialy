import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository?: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository?: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'recall',
    slug: 'recall',
    banner: 'https://dentarba.sirv.com/recall-header-image',
    website: 'https://recall-jade.vercel.app',
    description:
      "A Next.js app for learning through flashcards, digital tests and other active recall study techniques. Built using TailwindCSS, Next.js and Firebase Cloud Firestore, it's a fully functioning app with over 1500 happy users.",
    shortDescription:
      'A Next.js app for learning through flashcards, digital tests and other active recall study techniques.',
    stack: [
      Stack.firebaseFirestore,
      Stack.typescript,
      Stack.nextjs,
      Stack.tailwindCSS,
    ],
    dimensions: [360, 640],
    screenshots: [
      'https://dentarba.sirv.com/recall-header-image',
      'https://dentarba.sirv.com/recall-sets',
      'https://dentarba.sirv.com/recall-set',
      'https://dentarba.sirv.com/recall-mc',
      'https://dentarba.sirv.com/recall-new-set',
    ],
    deployment: {
      web: 'https://recall-jade.vercel.app',
    },
    subProjects: [],
  },
];
