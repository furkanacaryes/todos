/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-else-return */
import React, { FunctionComponent, useState } from "react";
import "./styles.scss";

interface IDoldurcukProps {
    dolu: boolean;
    onChange: (yeniDeger: boolean) => void;
}

export const Doldurcuk: FunctionComponent<IDoldurcukProps> = props => {
    const { dolu, onChange } = props;

    const [doluluk, doluluguTanimla] = useState(dolu);

    const dinamikStilVer = () => {
        if (doluluk) {
            return "doldurcuk dolu";
        } else {
            return "doldurcuk";
        }
    };

    const tik = () => {
        onChange(!doluluk);
        doluluguTanimla(!doluluk);
    };

    return <div className={dinamikStilVer()} onClick={tik} />;

    // KISA
    // return <div className={`doldurcuk ${dolu ? "dolu" : "dolu-degil"}`} />;
};
