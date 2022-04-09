// Import stylesheets
import './style.css';
import { CommitCalendar } from './commit-calendar';
import commitInfo from './commit-data.json';

const calendarContainer = document.querySelector('.calendar');
const calendarItems = document.querySelector('.items');
const tooltip = document.querySelector('.tooltip');
const monthsConatiner = document.querySelector('.months');

let cal = new CommitCalendar(
  calendarContainer,
  calendarItems,
  tooltip,
  monthsConatiner
);
cal.setCommitData(commitInfo);
cal.render();
