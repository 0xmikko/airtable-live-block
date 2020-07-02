import React from "react";

export interface Item {
    header?: string;
    description?: string;
    images?: string[];
    price?: number;
    offer?: number;
    sizes?: string[];
}
