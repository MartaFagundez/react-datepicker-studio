import React, { useState } from "react";
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";

import Case from "../components/Case";

const today = new Date(new Date().setHours(0, 0, 0, 0));
const tomorrow = new Date(new Date().setHours(24, 0, 0, 0));

export default function Home() {
  const [startDate, setStartDate] = useState(undefined);
  console.log(startDate);

  return (
    <div className="container-fluid d-flex flex-column align-items-center text-center p-4">
      <h1 className="display-1 mb-4">React Datepicker Studio</h1>

      <div className="container-narrow d-flex justify-content-center mb-4">
        <p className="fs-5-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eius
          enim nisi modi doloremque perferendis sequi repellendus animi
          necessitatibus aspernatur. Nihil voluptatem quisquam ut quis?
        </p>
      </div>

      <div className="d-flex w-100">
        {/* IN INPUT */}
        <div className="d-flex flex-column align-items-center w-100 bg-magnolia px-3 py-5 rounded-start">
          <h2 className="display-6 mb-5">In Input</h2>

          {/* Cases Container */}
          <div className="d-flex flex-wrap justify-content-center gap-5">
            <Case imgUrl="https://picsum.photos/250/300?random=1" />
            <Case imgUrl="https://picsum.photos/250/300?random=2" />
            <Case imgUrl="https://picsum.photos/250/300?random=3" />
            <Case imgUrl="https://picsum.photos/250/300?random=4" />
          </div>
        </div>

        {/* INLINE */}
        <div className="d-flex flex-column align-items-center w-100 bg-seashell px-3 py-5 rounded-end">
          <h2 className="display-6 mb-5">Inline</h2>

          {/* Cases Container */}
          <div className="d-flex flex-wrap justify-content-center gap-5">
            <Case imgUrl="https://picsum.photos/250/300?random=5" />
            <Case imgUrl="https://picsum.photos/250/300?random=6" />
            <Case imgUrl="https://picsum.photos/250/300?random=7" />
            <Case imgUrl="https://picsum.photos/250/300?random=8" />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={today}
          maxDate={new Date(new Date().setMonth(today.getMonth() + 1))}
          // dateFormat={"dd/MM/yy"}
          showTimeSelect
          dateFormat={"Pp"} // Mostrar fecha y hora
          //showTimeSelectOnly
          // dateFormat={"hh:mm aa"} // Mostrar sólo hras, Formato de 12 hs con AM/PM con 2 dígitos para las horas
          // dateFormat={"h:mm aa"} // Mostrar sólo hras, Formato de 12 hs con AM/PM admite 1 dígito para las horas
          // dateFormat={"HH:mm"} // Mostrar sólo hras, Formato de 24 hs sin AM/PM
          timeFormat="HH:mm" // Formato para la lista de horas - Formato de 24 hs sin AM/PM
          timeCaption="Hora"
          timeIntervals={30}
          minTime={new Date(new Date().setHours(9, 0, 0, 0))}
          maxTime={new Date(new Date().setHours(17, 30, 0, 0))}
          placeholderText="Selecciona una fecha"
          isClearable
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          //inline
          locale={es}
          openToDate={tomorrow}
        />
      </div>
    </div>
  );
}
