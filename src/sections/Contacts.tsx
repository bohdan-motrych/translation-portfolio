import styles from "./Contacts.module.scss";
import { useTranslation } from "react-i18next";
import { Trans } from 'react-i18next';

function Contacts () {

    const { t } = useTranslation();

    return (
        <section className={styles.contacts} aria-label="Contacts">
            <div id="contacts"></div>
            <p><Trans i18nKey={'contacts.contactMe'} components={{span: <span/>}}/></p>
            <form className={styles.form} name="conctact-form" autoComplete="off" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact-form"/>
                <div className={styles.userData}>
                    <div>
                        <label htmlFor="full-name">{t('contacts.label.name')}</label>
                        <input type="text" id="full-name" name="name" placeholder={t('contacts.placeholder.name')} required/>
                    </div>
                    <div>
                        <label htmlFor="email-address">{t('contacts.label.email')}</label>
                        <input type="email" id="email-address" name="email" placeholder={t('contacts.placeholder.email')} autoComplete="on" required/>
                    </div>
                </div>
                <div className={styles.messageData}>
                    <label htmlFor="message-subject" className={styles.subjectLabel}>{t('contacts.label.subject')}</label>
                    <label htmlFor="message-content">{t('contacts.label.message')}</label>
                    <input type="text" id="message-subject" name="subject" placeholder={t('contacts.placeholder.subject')} className={styles.messageSubject}/>
                    <textarea id="message-content" name="message" placeholder={t('contacts.placeholder.message')} rows={5} required/>
                </div>
                
                <button type="submit" className={styles.button}>{t('contacts.submit')}</button>
            </form>
        </section>
    )
}

export default Contacts