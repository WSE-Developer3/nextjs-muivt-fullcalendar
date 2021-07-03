import React from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Button from "@material-ui/core/Button";
import NextLink from "next/link";
import Link from "../src/Link";
import "tailwindcss/tailwind.css";

export default () => (
  <>
    <div>
      <button>Hello</button>
      <Button variant="contained">Hello</Button>
      <Link href="/about">About</Link>
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
