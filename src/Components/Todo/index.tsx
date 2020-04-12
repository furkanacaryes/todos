import React, { FunctionComponent } from "react";
import { Doldurcuk } from "@Components";
import { ITodoComponent } from "./TodoComponent";

export const Todo: FunctionComponent<ITodoComponent> = props => {
    const { todo } = props;

    return (
        <li>
            <Doldurcuk
                dolu={todo.completed}
                onChange={yeniDeger => {
                    console.log("Degisen Todo:");
                    console.table(todo);

                    todo.completed = yeniDeger;

                    console.log("Su sekilde guncellendi:");
                    console.table(todo);
                }}
            />
            <span>{todo.name}</span>
        </li>
    );
};
