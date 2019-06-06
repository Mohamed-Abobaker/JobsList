// The function below was developed steadily by using TDD methodology, and tests can viewed in spec file.

const findJobOrder = listOfJobs => {
  //The if statement returns a empty string if one is passed in as a parameter.
  if (!listOfJobs || /^\s*$/.test(listOfJobs)) return "";

  const jobOrderArr = [];
  let jobsArr = [];
  let dependenciesArr = [];
  const selfDependError = "Error, job cannot depend on itself.";

  /*The section below splits the input string into an array by new line. Then this array is mapped over and each element is then further split into its separate components (job, arrow & dependency). It then checks to see if the job = dependency and if so returns and error(line 17). Line 12 checks if there are any dependencies and if so pushes them to a dependency array, and the jobs are all pushed to a job array. Thus we have jobsAwaitingDependency array which holds all the full jobs in the required format, and we have a an array with all the job names and an array with all the dependency names.*/

  let jobsAwaitingDependency = listOfJobs.split("\n").map(job => {
    job = job.split(" ").filter(i => i !== "");
    if (job[0] === job[2]) return selfDependError;
    job[2] && dependenciesArr.push(job[2]);
    jobsArr.push(job[0]);
    return job;
  });

  if (jobsAwaitingDependency.includes(selfDependError)) return selfDependError;

  /*This section below is made up of a while loop that runs a for loop until jobsAwaitingDependency array is depleted or an error is detected. The while loop begins by checking if dependenciesArr === jobsArr which would signify circular dependencies (cannot be solved) and returns an error. The for loop is used to loop over the jobsAwaitingDependency, checking each single job (element) individually. If the job does not have a dependency or its dependency has been added to jobOrderArr, the it is added to the jobOrderArr and filtered out of the rest of the working arrays.*/

  while (jobsAwaitingDependency.length > 0) {
    if (jobsArr.sort().join() === dependenciesArr.sort().join()) {
      return "Error, jobs can’t have circular dependencies.";
    }
    for (let i = 0; i < jobsAwaitingDependency.length; i++) {
      let job = jobsAwaitingDependency[i];

      if (job.length < 3 || jobOrderArr.includes(job[2])) {
        jobOrderArr.push(job[0]);
        jobsAwaitingDependency = jobsAwaitingDependency.filter(
          x => x[0] !== job[0]
        );
        jobsArr = jobsArr.filter(c => c !== job[0]);
        dependenciesArr = dependenciesArr.filter(b => b !== job[2]);
      }
    }
  }

  /*if no errors are incurred then the function returns a string of jobs in correct working order.*/

  return jobOrderArr.join(", ");
};

module.exports = { findJobOrder };
