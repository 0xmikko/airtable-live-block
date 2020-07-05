import React from 'react';
import {Block} from "../../core/block";
import {useBase, useRecords} from "@airtable/blocks/ui";
import {ClientLogoBlock} from "./ClientLogoBlock";


export const ClientLogoBlockTable : React.FC<Block> = ({section, tableId}) => {
    // const base = useBase();
    // const table = base.getTableByIdIfExists(tableId);
    // if (table === null) {
    //     return <div>Table not found</div>
    // }
    //
    // const records = useRecords(table);

    // const data = records.map(r => new ClientLogo(r));
    const data = [
        { image: "https://storage.googleapis.com/airtable-live/clients/1.png" },
        { image: "https://storage.googleapis.com/airtable-live/clients/3.png" },
        { image: "https://storage.googleapis.com/airtable-live/clients/4.png" },
        { image: "https://storage.googleapis.com/airtable-live/clients/6.png" },
    ];

    return <ClientLogoBlock data={data} />

}
