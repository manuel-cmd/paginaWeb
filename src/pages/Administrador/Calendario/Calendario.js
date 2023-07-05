import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./Calendario.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
  //es: require("date-fns/locale/es"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Seminario",
    start: new Date(2023, 5, 28),
    end: new Date(2023, 5, 28),
    data: {
      type: "Seminario",
    },
  },
  {
    title: "Seminario",
    start: new Date(2023, 6, 5),
    end: new Date(2023, 6, 5),
    data: {
      type: "Seminario",
    },
  },
];

function evento(eventType) {
  switch (eventType) {
    case "Seminario":
      return (
        <div>
          <div>Pon algo mas</div>
          {console.log("hola desde calendario")}
          <a href="google.com">Seminario</a>
        </div>
      );
    default:
      return (
        <div>
          {console.log("hola desde calendario alterno")}
          <a href="">No hay nada</a>
        </div>
      );
  }
}

function components2(i) {
  const eventType = events[i]?.data?.type;
  console.log("events: ", events);
  console.log("events.data: ", eventType);
  switch (eventType) {
    case "Seminario":
      return (
        <div>
          <div>Pon algo mas</div>
          {console.log("hola desde calendario")}
          <a href="google.com">Seminario</a>
        </div>
      );
    default:
      return (
        <div>
          {console.log("hola desde calendario alterno")}
          <a href="google.com">No hay nada</a>
        </div>
      );
  }
  console.log("hola ");
}

const components = {
  event: (props) => {
    console.log("props son: ", props);
    //events.map((item, i) => {
    const eventType = props?.events?.data?.type;
    console.log("events: ", events);
    console.log("events.data: ", events.data);
    console.log("eventType: ", eventType);

    switch (eventType) {
      case "Seminario":
        return (
          <div>
            <div>Pon algo mas</div>
            {console.log("hola desde calendario")}
            <a target="_blank" href="https://meet.google.com/owq-wwrz-wti">
              Seminario
            </a>
          </div>
        );
      default:
        return (
          <div>
            {console.log("hola desde calendario alterno")}
            <a target="_blank" href="https://meet.google.com/owq-wwrz-wti">
              Seminario
            </a>
          </div>
        );
    }
    //});
    console.log("hola ");
  },
};

function Calendario() {
  const [componentes, setComponentes] = useState(components);
  return (
    <div className="App">
      <h1 className="tituloCalendario">Calendario</h1>
      <div></div>
      <Calendar
        className="calendario"
        events={events}
        /*components={events.map((item, i) => {
          components;
        })}*/
        components={components}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default Calendario;
