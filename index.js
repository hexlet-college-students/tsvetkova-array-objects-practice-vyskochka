// task 1
const tableParsing = (str) => {
  const apps = str.trim().split('\n').splice(1, 100);
  const playMarket = apps.map((app) => app.split(';')[2]);
  const appStore = apps.map((app) => app.split(';')[3]);
  const maxRaitPlay = `${Math.max(...playMarket)}`;
  const maxRaitApp = `${Math.max(...appStore)}`;
  const search = apps.map((app) => app.split(';')).filter((arr) => arr.includes(maxRaitApp) && arr.includes(maxRaitPlay)).flat();
  console.log(`General top messenger: ${search[0]}, Owner: ${search[1]}`);
};

// task 2
const candidateAssessment = (/* content */) => {

};

// task 3
const actorRating = (/* content */) => {

};

export { tableParsing, candidateAssessment, actorRating };
