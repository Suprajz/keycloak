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

    console.log(kcContext.locale?.currentLanguageTag);

    const { msg } = i18n;

    const showServerMessage = false; // don't display backend error text
    const title = msg("errorTitle");
    const backToLoginHref = kcContext.client?.baseUrl ?? "#";

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
                {/* {showServerMessage && <p className={kcClsx("kcContentWrapperClass")}>{kcContext.message.summary}</p>} */}

                {/* NO alert, no styling — so it looks exactly like your screenshot */}
                {!showServerMessage && (
                    <div className={kcClsx("kcContentWrapperClass")}>
                        <p>{msg("internalServerError")}</p>

                        <div style={{ marginTop: "1rem" }}>
                            <a href={backToLoginHref}>{msg("backToLogin")}</a>
                        </div>
                    </div>
                )}
            </div>
        </Template>
    );
}
