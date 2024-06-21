"use client";

import dataProviderNestjsxCrud from "@refinedev/nestjsx-crud";

const API_URL = "https://localhost:3000";

export const dataProvider = dataProviderNestjsxCrud(API_URL);
