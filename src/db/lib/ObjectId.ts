import mongoose from "mongoose"

export default function ObjId(id: string) {
    return new mongoose.Types.ObjectId(id)
}