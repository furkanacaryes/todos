// #region Global Imports
import React, { useState } from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { HomeActions } from "@Actions";
import { Todo } from "@Components";
import "./styles.scss";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage, ReduxNextPageContext, ITodoModel } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = () => {
    const baslangicDegerleri: ITodoModel[] = [
        {
            id: 0,
            name: "React Öğren",
            completed: false,
        },
        {
            id: 1,
            name: "TypeScript Öğren",
            completed: false,
        },
        {
            id: 2,
            name: "Flex Öğren",
            completed: true,
        },
    ];

    const [todos, setTodos] = useState(baslangicDegerleri);

    return (
        <section className="home-page">
            <section className="Todos">
                <div className="form">
                    <input
                        type="text"
                        name="Todo"
                        id="Todo"
                        placeholder="Yapılacak Ekle"
                    />

                    <input type="button" value="Ekle" />
                </div>

                <div className="list">
                    {todos.map(todo => {
                        return <Todo key={todo.id} todo={todo} />;
                    })}
                </div>
            </section>

            <section className="completeds">
                <div className="list">
                    <li>...completeds...</li>
                </div>
            </section>
        </section>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
