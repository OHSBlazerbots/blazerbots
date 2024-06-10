//
// Data structure definitions
//
interface MentorProps {
  name: string;
  since: string;
  image?: string;
  role?: string;
  description?: string;
  style?: React.CSSProperties;
}

interface MentorsState {
  mentors: MentorProps[];
}

const makeList = (props: MentorsState) => ({
  ...props,
})

export { makeList }
export type { MentorProps, MentorsState }
