function Summary(props) {
  let { workNum, workYear } = props;

  return (
    <div className="Summery">
      <h2>You have {workNum} periods of work history, </h2>
      <h2>{workYear} years of experience</h2>
    </div>
  );
}

export default Summary;
