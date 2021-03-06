// // 一帧16ms
// setInterval(() => {}, 16);

// let tick = () => {
//   setTimeout(tick, 16);
// }

// let tick = () => {
//   let handler = requestAnimationFrame(tick); // 依赖于浏览器帧率（现代浏览器推荐）
//   // cancelAnimationFrame(handler);
// }

const TICK = Symbol('tick'); // symbol唯一性
const TICK_HANDLER = Symbol('tick-handler');
const ANIMATIONS = Symbol('animations');
const START_TIME = Symbol('start-time');
const PAUSE_START = Symbol('pause-start');
const PAUSE_TIME = Symbol('pause-time');

export class Timeline {
  constructor() {
    this.state = 'inited';
    this[ANIMATIONS] = new Set();
    this[START_TIME] = new Map();
  }

  start() {
    if (this.state !== 'inited') {
      return;
    }
    this.state = 'started'; 
    const startTime = Date.now();
    this[PAUSE_TIME] = 0;
    this[TICK] = () => {
      let now = Date.now();
      for (const animation of this[ANIMATIONS]) {
        let t;
        if (this[START_TIME].get(animation) < startTime) {
          t = now - startTime - this[PAUSE_TIME] - animation.delay;
        } else {
          t = now - this[START_TIME].get(animation) - this[PAUSE_TIME] - animation.delay;
        }
        if (animation.duration < t) {
          this[ANIMATIONS].delete(animation);
          t = animation.duration;
        }
        if (t > 0) {
          animation.receiveTime(t);
        }
      }
      this[TICK_HANDLER] = requestAnimationFrame(this[TICK]);
    }
    this[TICK]();
  }

  pause() {
    if (this.state !== 'started') {
      return;
    }
    this.state = 'paused';
    this[PAUSE_START] = Date.now();
    cancelAnimationFrame(this[TICK_HANDLER]);
  }

  resume() {
    if (!this.state !== 'paused') {
      return;
    }
    this.state = 'started';
    this[PAUSE_TIME] += Date.now() - this[PAUSE_START];
    this[TICK]();
  }

  reset() {
    this.pause();
    this[ANIMATIONS] = new Set();
    this[START_TIME] = new Map();
    this[TICK_HANDLER] = null;
    this[PAUSE_TIME] = 0;
    this[PAUSE_START] = 0;
    this.state = 'inited';
  }

  add(animation, startTime = Date.now()) {
    // if (arguments.length < 2) {
    //   addTime = Date.now();
    // }
    this[ANIMATIONS].add(animation);
    this[START_TIME].set(animation, startTime);
  }

  remove(animation) {
  }

  // 播放速率
  // set rate() {}
  // get rate() {}
}

export class Animation {
  constructor(object, property, startValue, endValue, duration, delay, timingFunction, template) {
    this.object = object;
    this.property = property;
    this.startValue = startValue;
    this.endValue = endValue;
    this.duration = duration;
    this.delay = delay;
    this.timingFunction = timingFunction || (v => v);
    this.template = template || (v => v);
  }
  receiveTime(time) {
    const range = this.endValue - this.startValue;
    const progress = this.timingFunction(time / this.duration);
    this.object[this.property] = this.template(this.startValue + range * progress);
  }
}

