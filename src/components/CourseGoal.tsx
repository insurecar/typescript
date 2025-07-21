import { FC, PropsWithChildren } from "react";

// interface CourseGoalProps {
//   title: string;
//   children: React.ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ title, id, onDelete, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
      </div>
      {children}
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
