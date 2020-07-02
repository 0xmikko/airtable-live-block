import React from "react";
import { Item } from "../core/Item";
import {Box} from "@airtable/blocks/ui";
import {SlideIconView} from "./SlideIconView";

export interface SlideDetailsViewProps {
  data: Item[];
}

export const SlidesListView: React.FC<SlideDetailsViewProps> = ({ data }) => {

    const gridRendered : React.ReactElement[] = [];
    for(let i=0; i<data.length / 5; i++) {
        for(let j=0; j<5; j++) {
            const item = data[i*5 + j];
            gridRendered.push(<SlideIconView key={i*5+j} data={item} />);
        }
    }

    return <Box>
        {gridRendered}
    </Box>
};
