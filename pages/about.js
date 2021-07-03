import React from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Button from "@material-ui/core/Button";
import Link from "../src/Link";
import NextLink from "next/link";

export default () => (
  <>
    <div>
      <button>Hello</button>
      <Button variant="contained">Hello</Button>
      <Link href="/">Home</Link>
    </div>
  </>
);
