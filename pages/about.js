import React from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Button from "@material-ui/core/Button";
import NextLink from "next/link";

export default () => (
  <>
    <div>
      <button>Hello</button>
      <Button variant="contained">Hello</Button>
      <NextLink href="/">Home</NextLink>
    </div>
  </>
);
