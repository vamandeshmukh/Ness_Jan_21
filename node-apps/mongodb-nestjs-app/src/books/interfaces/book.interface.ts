import { Document } from "mongoose";
export interface Book extends Document {
    title: string;
    author: string;
    category?: string;
}




