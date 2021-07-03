import React from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default () => (
  <>
    <div>
      <button>Hello</button>
    </div>
    <FullCalendar
      plugins={[interactionPlugin, timeGridPlugin]}
      initialView="timeGridWeek"
      nowIndicator={true}
      editable={true}
      initialEvents={[{ title: "nice event", start: new Date() }]}
    />
  </>
);
