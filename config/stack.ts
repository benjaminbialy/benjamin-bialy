import { Colors } from './colors';

export enum Stack {
  // Languages
  typescript,

  // Frontend
  react,
  tailwindCSS,
  nextjs,

  // Backend
  graphql,
  node,

  // Cloud
  supabase,
  gcp,

  // Databases
  firebaseRealtime,
  firebaseFirestore,
  postgres,
}

export const WorkStack = [
  Stack.typescript,
  Stack.tailwindCSS,
  Stack.nextjs,
  Stack.react,
  Stack.gcp,
  Stack.firebaseFirestore,
  Stack.firebaseRealtime,
  Stack.supabase,
  Stack.graphql,
  Stack.postgres,
  Stack.node,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },

  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.tailwindCSS]: {
    value: 'Tailwind CSS',
    color: Colors.web,
  },
  [Stack.nextjs]: {
    value: 'Next.js',
    color: Colors.nextjs,
  },

  [Stack.supabase]: {
    value: 'Supabase',
    color: Colors.supabase,
  },
  [Stack.firebaseFirestore]: {
    value: 'Firebase Cloud Firestore',
    color: Colors.firebaseFirestore,
  },

  [Stack.firebaseRealtime]: {
    value: 'Firebase Realtime Database',
    color: Colors.firebaseRealtime,
  },

  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },

  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },

  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },

  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },

  [Stack.nextjs]: {
    value: 'Next.js',
    color: Colors.nextjs,
  },
};
