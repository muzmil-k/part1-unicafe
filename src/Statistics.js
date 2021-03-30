import Statistic from "./Statistic";
const Statistics = ({ good, bad, neutral, all }) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={good * 1 + neutral * 0 + bad * -1} />
        <Statistic text="positive" value={(good / all) * 100 + " %"} />
      </tbody>
    </table>
  );
};
export default Statistics;
