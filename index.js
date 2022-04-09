// Import stylesheets
import './style.css';
import commitInfo from './commit-data.json';

class CommitCalendar {
  constructor() {
    this.calendar = document.querySelector('.calendar');
    this.items = document.querySelector('.items');
    this.tooltip = document.querySelector('.tooltip');
    this.monthsConatiner = document.querySelector('.months');
    this.timeout;
    this.maxWidth = 1100;
    this.dateNodes = [];
    this.resizeNodes = [];
    this.lastWidth = null;
    this.isMouseOver = false;
    this.focussedDate = 0;
    this.commitData = {
      '2021-01-22': 13,
      '2021-01-23': 6,
      '2021-01-25': 5,
      '2021-01-26': 29,
      '2021-01-27': 2,
      '2021-01-28': 10,
      '2021-01-29': 4,
      '2021-02-01': 12,
      '2021-02-02': 18,
      '2021-02-03': 15,
      '2021-02-04': 9,
      '2021-02-05': 13,
      '2021-02-06': 5,
      '2021-02-08': 1,
      '2021-02-09': 6,
      '2021-02-10': 11,
      '2021-02-11': 16,
      '2021-02-12': 4,
      '2021-02-13': 1,
      '2021-02-16': 11,
      '2021-02-17': 4,
      '2021-02-18': 8,
      '2021-02-19': 9,
      '2021-02-20': 4,
      '2021-02-22': 7,
      '2021-02-23': 17,
      '2021-02-24': 2,
      '2021-02-25': 16,
      '2021-02-26': 5,
      '2021-03-01': 6,
      '2021-03-02': 11,
      '2021-03-03': 7,
      '2021-03-04': 2,
      '2021-03-05': 4,
      '2021-03-10': 4,
      '2021-03-11': 14,
      '2021-03-12': 3,
      '2021-03-13': 10,
      '2021-03-15': 7,
      '2021-03-16': 7,
      '2021-03-17': 7,
      '2021-03-19': 2,
      '2021-03-22': 3,
      '2021-03-23': 18,
      '2021-03-24': 9,
      '2021-03-25': 4,
      '2021-03-26': 7,
      '2021-03-27': 6,
      '2021-03-30': 6,
      '2021-03-31': 16,
      '2021-04-01': 8,
      '2021-04-02': 4,
      '2021-04-05': 2,
      '2021-04-06': 6,
      '2021-04-07': 2,
      '2021-04-08': 5,
      '2021-04-10': 8,
      '2021-04-12': 2,
      '2021-04-13': 2,
      '2021-04-15': 10,
      '2021-04-16': 8,
      '2021-04-20': 4,
      '2021-04-21': 3,
      '2021-04-22': 5,
      '2021-04-23': 18,
      '2021-04-26': 1,
      '2021-04-27': 12,
      '2021-04-28': 3,
      '2021-04-29': 2,
      '2021-04-30': 19,
      '2021-05-01': 4,
      '2021-05-03': 7,
      '2021-05-04': 5,
      '2021-05-05': 9,
      '2021-05-06': 9,
      '2021-05-07': 5,
      '2021-05-11': 6,
      '2021-05-12': 9,
      '2021-05-14': 4,
      '2021-05-17': 4,
      '2021-05-18': 20,
      '2021-05-20': 6,
      '2021-05-21': 7,
      '2021-05-24': 4,
      '2021-05-26': 2,
      '2021-05-27': 6,
      '2021-05-28': 2,
      '2021-05-30': 1,
      '2021-06-01': 7,
      '2021-06-02': 7,
      '2021-06-03': 9,
      '2021-06-04': 8,
      '2021-06-08': 7,
      '2021-06-09': 12,
      '2021-06-10': 2,
      '2021-06-11': 9,
      '2021-06-14': 3,
      '2021-06-18': 6,
      '2021-06-21': 4,
      '2021-06-22': 17,
      '2021-06-24': 22,
      '2021-06-25': 2,
      '2021-06-29': 9,
      '2021-06-30': 4,
      '2021-07-01': 6,
      '2021-07-02': 18,
      '2021-07-07': 2,
      '2021-07-09': 5,
      '2021-07-12': 15,
      '2021-07-13': 1,
      '2021-07-16': 4,
      '2021-07-19': 7,
      '2021-07-20': 6,
      '2021-07-21': 7,
      '2021-07-22': 4,
      '2021-07-23': 11,
      '2021-07-28': 2,
      '2021-07-31': 16,
      '2021-08-03': 21,
      '2021-08-05': 8,
      '2021-08-06': 6,
      '2021-08-07': 2,
      '2021-08-10': 2,
      '2021-08-11': 1,
      '2021-08-12': 4,
      '2021-08-13': 2,
      '2021-08-14': 4,
      '2021-08-17': 4,
      '2021-08-18': 7,
      '2021-08-19': 19,
      '2021-08-20': 2,
      '2021-08-21': 2,
      '2021-08-24': 11,
      '2021-08-26': 2,
      '2021-08-27': 2,
      '2021-08-31': 7,
      '2021-09-01': 4,
      '2021-09-02': 2,
      '2021-09-03': 10,
      '2021-09-09': 3,
      '2021-09-10': 6,
      '2021-09-15': 1,
      '2021-09-17': 12,
      '2021-09-21': 4,
      '2021-09-22': 1,
      '2021-09-23': 2,
      '2021-09-24': 1,
      '2021-09-29': 3,
      '2021-10-01': 2,
      '2021-10-02': 2,
      '2021-10-04': 5,
      '2021-10-07': 6,
      '2021-10-13': 2,
      '2021-10-18': 5,
      '2021-10-20': 4,
      '2021-10-21': 3,
      '2021-10-22': 6,
      '2021-10-26': 2,
      '2021-10-29': 1,
      '2021-10-30': 16,
      '2021-11-01': 2,
      '2021-11-05': 3,
      '2021-11-06': 8,
      '2021-11-09': 4,
      '2021-11-10': 3,
      '2021-11-12': 4,
      '2021-11-13': 2,
      '2021-11-17': 11,
      '2021-11-18': 3,
      '2021-11-19': 9,
      '2021-11-24': 2,
      '2021-12-03': 2,
      '2021-12-08': 6,
      '2021-12-30': 2,
      '2022-01-04': 6,
      '2022-01-05': 2,
      '2022-01-06': 3,
      '2022-01-07': 1,
      '2022-01-10': 7,
      '2022-01-12': 4,
      '2022-01-20': 11,
      '2022-01-22': 2,
    };
    this.keyCode = {
      39: 'right',
      37: 'left',
      38: 'up',
      40: 'down',
      35: 'end',
      36: 'start',
    };
    this.init();
  }
  init() {
    this.createEls();
    this.resizeNodes = this.dateNodes;
    this.lastWidth = this.calendar.clientWidth;
    this.createDayNodes(
      this.dateNodes.slice(this.getNodeSize(this.calendar.clientWidth))
    );

    this.items.addEventListener('keydown', (e) => {
      this.handleFocus(e, this.focussedDate);
    });
    this.items.addEventListener('focusin', (e) => {
      this.isMouseOver = true;
      this.debounce(this.hover, e);
    });
    this.items.addEventListener('focusout', (e) => {
      this.close(e);
    });
    this.items.addEventListener('mouseover', (e) => {
      this.isMouseOver = true;
      this.debounce(this.hover, e);
    });
    this.items.addEventListener('mouseout', (e) => {
      this.close(e);
    });
    this.items.addEventListener('mouseleave', (e) => {
      this.close(e);
    });
    this.tooltip.addEventListener('mouseover', (e) => {
      this.open(e);
    });
    this.tooltip.addEventListener('mouseleave', (e) => {
      this.close(e);
    });
    addEventListener('resize', (e) => {
      this.handleResize(e);
    });
  }
  createEls() {
    let curDateVal = this.addDate(new Date(), 1);
    let lastYear = curDateVal.getFullYear() - 1;
    let curMonth = curDateVal.getMonth() + 1;
    let curDate = curDateVal.getDate();
    let datePtr = this.getFormattedDate(
      new Date(lastYear + '-' + curMonth + '-' + curDate)
    );

    while (datePtr !== this.getFormattedDate(curDateVal)) {
      let item = document.createElement('button');
      item.classList.add('item', 'item' + 1);
      item.dataset.date = datePtr;
      item.setAttribute('aria-label', datePtr);
      item.setAttribute('tabindex', '-1');
      if (!this.commitData.hasOwnProperty(item.dataset.date)) {
        item.classList.add('stale');
      } else if (this.commitData[item.dataset.date] < 10) {
        item.classList.add('l-10');
      } else if (this.commitData[item.dataset.date] < 20) {
        item.classList.add('l-20');
      } else if (this.commitData[item.dataset.date] < 30) {
        item.classList.add('l-30');
      } else {
        item.classList.add('g-30');
      }
      datePtr = this.getFormattedDate(
        this.addDate(this.createDate(datePtr.split('-')), 1)
      );

      this.dateNodes.push(item);
    }
  }
  createMonths(startMonth, endMonth) {
    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    let i = startMonth,
      count = 0;
    this.monthsConatiner.style['grid-template-columns'] =
      'repeat(' + (endMonth + 13 - startMonth) + ', 1fr)';
    while (count < endMonth + 13 - startMonth) {
      let monthEl = document.createElement('div');
      monthEl.textContent = months[i];
      this.monthsConatiner.append(monthEl);
      i = i === 11 ? 0 : i + 1;
      count++;
    }
  }
  getFormattedDate(d) {
    return d.toISOString().split('T')[0];
  }
  createDate([year, month, date]) {
    return new Date(year + '-' + month + '-' + date);
  }
  async hover(e) {
    if (!e.target.classList.contains('item')) return;
    let { left, top } = e.target.getBoundingClientRect();
    // perform fn and set data
    let data = await new Promise((resolve, reject) =>
      resolve(
        (this.commitData[e.target.dataset.date]
          ? this.commitData[e.target.dataset.date]
          : 'No') +
          ' Contributions ' +
          new Date(e.target.dataset.date).toDateString()
      )
    );

    if (innerWidth - 200 < left) {
      left = left - 200;
    }
    if (innerHeight - 40 < top) {
      top = top - 40;
    }
    this.tooltip.style.left = left + 10 + 'px';
    this.tooltip.style.top = top + 10 + 'px';
    this.tooltip.innerHTML = data;
    this.tooltip.classList.add('active');
  }
  close(e) {
    this.isMouseOver = false;
    this.tooltip.classList.remove('active');
  }
  open(e) {
    this.isMouseOver = true;
    this.tooltip.classList.add('active');
  }
  addDate(d, n) {
    d.setDate(d.getDate() + n);
    return new Date(d);
  }
  getNodeSize(curWidth) {
    let nodeSize = Math.floor(
      this.dateNodes.length - (this.dateNodes.length / this.maxWidth) * curWidth
    );
    return nodeSize;
  }
  createDayNodes(nodes) {
    this.items.append(...nodes);
    let firstDate = new Date(this.items.firstElementChild.dataset.date);
    let firstDay = firstDate.getDay() + 1;

    this.createMonths(firstDate.getMonth(), new Date().getMonth());
    this.items.firstElementChild.style.gridRow = firstDay;
    this.items.children[this.focussedDate].setAttribute('tabindex', '0');
  }
  debounce(fn, e) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.isMouseOver && fn.call(this, e);
      clearTimeout(this.timeout);
    }, 500);
  }
  handleResize(e) {
    if (this.calendar.clientWidth < 1100) {
      this.items.innerHTML = '';
      this.monthsConatiner.innerHTML = '';
      this.resizeNodes = this.dateNodes.slice(
        this.getNodeSize(this.calendar.clientWidth)
      );
      this.lastWidth = this.calendar.clientWidth;
      this.focussedDate = 0;
      this.createDayNodes(this.resizeNodes);
    } else {
      if (this.lastWidth < 1100) {
        this.items.innerHTML = '';
        this.monthsConatiner.innerHTML = '';
        this.resizeNodes = this.dateNodes.slice(this.getNodeSize(1100));
        this.lastWidth = this.calendar.clientWidth;
        this.focussedDate = 0;
        this.createDayNodes(this.resizeNodes);
      }
    }
  }
  //Keyboard Navigation
  handleFocus(e, i) {
    const key = this.keyCode[e.keyCode];
    if (key) {
      let curNode = null;
      switch (key) {
        case 'up':
          curNode = i - 1;
          break;
        case 'down':
          curNode = i + 1;
          break;
        case 'left':
          curNode = i - 7;
          break;
        case 'right':
          curNode = i + 7;
          break;
        case 'start':
          curNode = 0;
          break;
        case 'end':
          curNode = this.items.children.length - 1;
          break;
      }
      if (curNode >= 0 && curNode < this.items.children.length) {
        this.items.children[curNode].focus();
        this.items.children[curNode].setAttribute('tabindex', '0');
        this.items.children[this.focussedDate].setAttribute('tabindex', '-1');

        this.focussedDate = curNode;
      }
    }
  }
}
let cal = new CommitCalendar();
