import * as React from 'react';
import {useTranslation} from "react-i18next";

type Props = {};

export function AboutPage(props: Props) {

    const {t} = useTranslation("about");

    return (
        <div>
            {t("about")}
        </div>
    );
};

export default AboutPage;
