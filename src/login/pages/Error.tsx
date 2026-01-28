import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";

export default function ErrorPage(props: PageProps<Extract<KcContext, { pageId: "error.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { msgStr } = i18n;

    // This is your custom translated text:
    // errorTitleHtml OR errorTitle from your i18n dictionary
    const title = msgStr("errorTitleHtml") || msgStr("errorTitle");

    // don't display backend error text
    const showServerMessage = false;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={false}
            displayInfo={false}
            headerNode={title}
        >
            <div id="kc-error-message" style={{ marginTop: "2rem" }}>
                {/* HIDE backend error message completely */}
                {showServerMessage && <p className={kcClsx("kcContentWrapperClass")}>{kcContext.message.summary}</p>}

                {/* NO alert, no styling — so it looks exactly like your screenshot */}
                {!showServerMessage && (
                    <p className={kcClsx("kcContentWrapperClass")} style={{ color: "transparent", height: 0, margin: 0, padding: 0 }}>
                        {/* nothing shown */}
                    </p>
                )}
            </div>
        </Template>
    );
}
