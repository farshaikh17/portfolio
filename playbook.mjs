// Keep the controls native so touch and keyboard input work without hydration.
const scenarios = [
  { id: 'book', action: 'Book', event: 'Booking confirmed', date: '14 June · 10:00', reminder: 'Confirmation and reminder queued', check: 'The confirmation uses the appointment date on this opportunity. A second booking for the same person keeps its own schedule.' },
  { id: 'move', action: 'Reschedule', event: 'Booking moved', date: '18 June · 14:00', reminder: 'Old reminder replaced', check: 'The reminder for 14 June is removed. Only the new appointment time appears in the replacement message.' },
  { id: 'cancel', action: 'Cancel', event: 'Booking cancelled', date: 'No upcoming appointment', reminder: 'Upcoming reminder removed', check: 'The cancelled opportunity leaves the reminder sequence. Other bookings for this contact can still send their own reminders.' }
];

export const playbook = `
<section id="playbook" class="section lab">
  <div class="lab-intro">
    <p class="eyebrow">Interaction design · HighLevel</p>
    <h2>One booking, three outcomes.</h2>
    <p>A repeat customer can have several appointments. Try an event on this fictional booking to see how its schedule and messages should change.</p>
    <details><summary>Behind the design</summary><p>I keep the booking reference fixed while the date, stage and messages change together. That makes the effect of each action visible in one place. The controls work by touch or keyboard, and the layout adapts to a narrow screen.</p></details>
  </div>
  <fieldset class="console">
    <legend>Choose a booking event</legend>
    ${scenarios.map((s,i)=>`<input class="event-input" type="radio" name="event" id="event-${s.id}" aria-controls="result-${s.id}" ${i===0?'checked':''}><label for="event-${s.id}">${s.action}</label>`).join('')}
    ${scenarios.map(s=>`<section class="event-result" id="result-${s.id}" aria-label="${s.event}">
      <p class="label">Sample booking / 042</p><h3>${s.event}</h3>
      <dl><div><dt>Appointment</dt><dd>${s.date}</dd></div><div><dt>Messages</dt><dd>${s.reminder}</dd></div></dl>
      <p class="check"><strong>Acceptance check</strong><br>${s.check}</p>
    </section>`).join('')}
  </fieldset>
</section>`;
