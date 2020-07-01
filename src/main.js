import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { HungryBear } from './../src/hungrybear.js'



$(document).ready(function () {
  let bear = new HungryBear;
  bear.setHunger();
  
  setInterval(displayTimer, 500);

  function displayTimer() {
  let d = bear.foodLevel;
  console.log(bear.foodLevel);
  $('#timer').text(d);
  }

  $('#restart').click(function() {
    bear.stopHunger();
  });

  $("#feed-the-bear").click(function(event) {
    event.preventDefault();

  });
});