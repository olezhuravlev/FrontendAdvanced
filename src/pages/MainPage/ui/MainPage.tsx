import * as React from 'react';
import {useTranslation} from "react-i18next";

type Props = {};

export function MainPage(props: Props) {

    const {t} = useTranslation("main");

    return (
        <div>
            {t("main-page-title")}
        </div>
    );
};

export default MainPage;
