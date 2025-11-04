namespace SolarSystem {
    export type Datapair = { key: string, value: string };
    export interface Info { title?: string, infotext?: string, data?: Datapair[] };


    export class Infobox {
        public info?: Info;
        public position?: Vector2;

        public static generate(_info: Info, _position: Vector2): void {
            const table = document.createElement("table");
            table.classList.add("info-popup");

            const header = document.createElement("tr");
            const headerCell = document.createElement("th");
            headerCell.colSpan = 2;
            if (_info.title) {
                headerCell.textContent = _info.title;
            }
            else{
                headerCell.textContent = "Unknown";
            }
            header.appendChild(headerCell);
            table.appendChild(header);

            if (_info.infotext) {
                const descRow = document.createElement("tr");
                const descCell = document.createElement("td");
                descCell.colSpan = 2;
                headerCell.textContent = _info.infotext;
                descRow.appendChild(descCell);
                table.appendChild(descRow);
            }

            for (const [key, value] of Object.entries(_info.data || {})) {
                const row = document.createElement("tr");
                const keyCell = document.createElement("td");
                const valueCell = document.createElement("td");

                keyCell.textContent = key;
                valueCell.textContent = String(value);

                row.appendChild(keyCell);
                row.appendChild(valueCell);
                table.appendChild(row);
            }

            table.style.position = "absolute";
            table.style.left = `${_position.x}px`;
            table.style.top = `${_position.y}px`;

            document.body.appendChild(table);

        }

    }
}