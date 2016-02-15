export class ActivityService {
  constructor() {
    this.activities = [];
  }

  generatePid() {
    return Math.random();
  }

  getActivities() {
    return this.activities;
  }

  start(activity) {
    this.activities.push(activity.pid);
  }

  end(activity) {
    const index = this.activities.indexOf(activity.pid);

    if (index > -1) {
      this.activities.splice(index, 1);
    }
  }
}

export default new ActivityService();
