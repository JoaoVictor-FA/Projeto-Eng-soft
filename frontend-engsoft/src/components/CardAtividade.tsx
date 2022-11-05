interface IActivity {
  name: string;
  code: string;
  limitDate: string;
}

export default function CardAtividade({ activity }: { activity: IActivity }) {
  return <div>{activity.name}</div>;
}
