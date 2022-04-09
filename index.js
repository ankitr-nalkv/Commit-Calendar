// Import stylesheets
import './style.css';
import { CommitCalendar } from './commit-calendar';
import commitInfo from './commit-data.json';

const calendar = document.querySelector('.calendar');
const items = document.querySelector('.items');
const tooltip = document.querySelector('.tooltip');
const monthsConatiner = document.querySelector('.months');

let cal = new CommitCalendar(calendar, items, tooltip, monthsConatiner);
cal.setCommitData(commitInfo);
cal.init();
