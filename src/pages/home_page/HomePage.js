import i18next from "../../i18next";

const { t }  = i18next;

export default function HomePage(){
    return <div>
        {t("hello_world")}
    </div>;
}