import { ITodoModel } from "@Interfaces";

export interface ITodoComponent {
    todo: ITodoModel;
    onChange?: () => {};
}
