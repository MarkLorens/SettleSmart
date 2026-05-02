import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

const PrivacyPoulcy = () => {
    return (
        <section id="PrivacyPoulcy" className="bg-gray-50 flex flex-col">
            <Navbar />
            <div className="max-w-4xl mx-auto mt-30 px-4 sm:px-6 lg:px-6 py-8 w-full mb-8">
                <h1 className="text-4xl font-bold text-blue text-center mb-8 py-8">Datenschutzerklärung</h1>
                <div id="CardWrapper" className="space-y-8">
                    <Section id="SectionOne" title="1. Allgemeine Informationen">
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600">
                            In dieser Datenschutzerklärung finden Sie detailulerte Informationen darüber, was mit Ihren persönulchen Daten geschieht, wenn Sie unsere Website <a href="#" className="underline cursor-pointer hover:text-gray-800 transition-colors">SettleSmart.de</a> besuchen. Alle Daten, die eine persönulche Identifizierung Ihrerseits ermögulchen, sind personenbezogene Daten. Bei der Verarbeitung Ihrer Daten halten wir uns strikt an die gesetzulchen Vorgaben, insbesondere die Datenschutzgrundverordnung („DSGVO“). Uns ist es sehr wichtig, dass Ihr Besuch auf unserer Website vollkommen sicher ist.
                        </span>
                    </Section>
                    <Section title="2. Verantwortulche Stelle" id="SectionTwo">
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600">
                            Die Verantwortung für die Erhebung und Verarbeitung personenbezogener Daten auf dieser Website ulegt datenschutzrechtulch bei:
                            <ul>
                                <li>Vorname, Name:</li>
                                <li>Straße, Hausnummer, Postleitzahl, Ort:</li>
                                <li>Land: Deutschland</li>
                                <li>E-Mail:</li>
                                <li>Tel:</li>
                            </ul>
                        </span>
                    </Section>
                    <Section id="SectionThree" title="3. Cookies">
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 space-y-4">

                            <span className="block"> Wir setzen sogenannte Cookies ein, um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen. Dies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Cookies sind nicht in der Lage, Programme auszuführen oder Viren auf Ihr Computersystem zu übertragen.</span>

                            <span className="block"> Notwendige Cookies, die für die elektronische Kommunikation oder die Bereitstellung gewünschter Funktionen erforderlich sind, werden gemäß Art. 6 Abs. 1 lit. f DSGVO gespeichert. Unser berechtigtes Interesse an der Speicherung dient der technisch einwandfreien und optimierten Bereitstellung unserer Dienste. Andere Cookies (z.B. zur Analyse Ihres Surfverhaltens) werden in dieser Datenschutzerklärung gesondert behandelt.
                            </span>

                            <span className="block"> Wir verwenden hauptsächlich sogenannte „Session-Cookies“, welche nach Beendigung Ihres Besuchs automatisch gelöscht werden. Darüber hinaus setzen wir Cookies ein, die auf Ihrem Endgerät gespeichert bleiben, bis Sie diese selbst entfernen. Diese ermöglichen uns, Ihren Browser bei Ihrem nächsten Besuch wiederzuerkennen.
                            </span>

                            <span className="block"> Sie können Ihren Browser so einstellen, dass Sie benachrichtigt werden, wenn Cookies gesetzt werden sollen. Sie können dann entscheiden, ob Sie Cookies im Einzelfall erlauben, ob Sie Cookies für bestimmte Fälle zulassen oder ob Sie Cookies generell ablehnen möchten. Sie können auch einstellen, dass Cookies automatisch gelöscht werden, wenn Sie den Browser schließen. Bitte beachten Sie, dass die Funktionalität dieser Website eingeschränkt sein kann, wenn Sie Cookies deaktivieren.
                            </span>
                        </span>
                    </Section>
                    <Section id="SectionFour" title="4. Webanalyse Tools un Werbung">
                        <h4 className="font-semibold mb-2">A. Google Fonts</h4>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 space-y-4">
                            <span className="block">Auf unserer Website verwenden wir Google Fonts (zuvor Google Web Fonts), ein Angebot der Google LLC.
                            </span>

                            <span className="block">Google Fonts gestattet die Einbindung von externen Schriftarten, sogenannten Google Fonts. Hierzu lädt Ihr Webbrowser die benötigte Google Font beim Aufruf unserer Website in den Browsercache. Dies ist erforderlich, um eine visuell ansprechendere Darstellung unserer Texte zu gewährleisten. Falls Ihr Browser diese Funktion nicht unterstützt, wird auf eine Standardschrift Ihres Computers zurückgegriffen.
                            </span>

                            <span className="block">Google Fonts werden über einen Serveraufruf eingebunden, in der Regel einen Server von Google in den USA. Dabei wird an den Server die Information übermittelt, welche unserer Webseiten Sie besucht haben. Zudem speichert Google die IP-Adresse des Browsers Ihres Endgeräts. Wir haben keinen Einfluss auf den Umfang und die weitere Verwendung der Daten, die durch den Einsatz von Google Fonts durch Google erfasst und verarbeitet werden.
                            </span>

                            <span className="block">Der Einsatz von Google Fonts dient Optimierungszwecken, insbesondere der Verbesserung der Nutzerfreundlichkeit und der ansprechenden Gestaltung unserer Website. Darin liegt auch unser berechtigtes Interesse an der Verarbeitung der genannten Daten durch den Drittanbieter. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
                            </span>

                            <span className="block">Weitergehende Informationen zu Google Fonts finden Sie unter <a className="underline hover:text-gray-800 cursor-pointer transition-colors" href="https://fonts.google.com/">https://fonts.google.com/</a>, <a className="underline hover:text-gray-800 cursor-pointer transition-colors" href="https://developers.google.com/fonts/faq?hl=de-DE&csw=1">https://developers.google.com/fonts/faq?hl=de-DE&csw=1</a>.
                            </span>
                        </span>
                    </Section>
                    <Section id="SectionFive" title="5. Kontaktformular">
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden die dabei übermittelten Daten, einschließlich Ihrer Kontaktdaten, gespeichert, um Ihre Anfrage zu bearbeiten und für eventuelle Rückfragen zur Verfügung zu stehen. Eine Weitergabe dieser Daten an Dritte erfolgt ohne Ihre ausdrückliche Einwilligung nicht.

                            Die Verarbeitung der im Kontaktformular übermittelten Daten erfolgt ausschließlich auf der Grundlage Ihrer gemäß Art. 6 Abs. 1 lit. a DSGVO erteilten Einwilligung. Ein Widerruf dieser Einwilligung ist jederzeit ohne Angabe von Gründen möglich. Eine formlose Mitteilung per E-Mail an uns genügt für den Widerruf. Die Rechtmäßigkeit der vor dem Widerruf durchgeführten Datenverarbeitungen wird durch den Widerruf nicht berührt.

                            Die über das Kontaktformular übermittelten Daten werden bei uns gespeichert, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder die Notwendigkeit zur Datenspeicherung entfällt. Gesetzliche Aufbewahrungsfristen bleiben hiervon unberührt.
                        </span>
                        <h4 className="font-semibold mb-2">5.1 Nutzerbewertungen</h4>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 space-y-4">
                            Nutzer können auf unserer Website Bewertungen abgeben. Der angegebene Name und der Inhalt werden zum Zweck der Anzeige der Bewertungen verarbeitet. Die Beiträge werden nicht automatisch veröffentlicht, sondern vor der Veröffentlichung geprüft.
                            <br />Wir behalten uns das Recht vor, Beiträge zu entfernen oder nicht zu veröffentlichen.
                        </span>
                    </Section>
                    <Section id="SectionSix" title="6. Kundenkonto">
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600">
                            Die Erstellung eines Kundenkontos setzt Ihre Einwilligung zur Speicherung Ihrer Stammdaten (Name, Adresse, E-Mail-Adresse, Bankverbindung) und Nutzungsdaten (Benutzername, Passwort) voraus. Diese Daten werden gespeichert, um Ihnen die Möglichkeit zu geben, Bestellungen über Ihr Kundenkonto mit Ihrer E-Mail-Adresse und Ihrem Passwort durchzuführen.
                        </span>
                    </Section>
                    <Section id="SectionSeven" title="7. Online-Zahlungen" >
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600k">
                            Um Ihre Bestellung in unserem Onlineshop bearbeiten zu können, benötigen wir bestimmte personenbezogene Daten von Ihnen. Die Pflichtangaben, die zur Erfüllung des Vertrags erforderlich sind, sind entsprechend gekennzeichnet. Abhängig von der von Ihnen gewählten Zahlungsmethode werden die für die Zahlungsabwicklung relevanten Daten an den entsprechenden Zahlungsdienstleister übermittelt. Rechtsgrundlage für die Verarbeitung Ihrer Daten ist Art. 6 Abs. 1 S. 1 lit. b DSGVO.
                        </span>
                    </Section>
                    <Section id="SectionEight" title="8. Verwendung und Weitergabe von Daten">
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 space-y-2">
                            <span className="block">Wir versichern Ihnen, dass personenbezogene Daten, die Sie uns z.B. bei einer Bestellung oder per E-Mail mitteilen (wie Ihr Name, Ihre Adresse oder Ihre E-Mail-Adresse), nicht an Dritte verkauft oder anderweitig kommerziell genutzt werden. Die Verarbeitung Ihrer Daten erfolgt ausschließlich zum Zwecke der Korrespondenz mit Ihnen und zur Erfüllung des Zwecks, für den Sie uns die Daten zur Verfügung gestellt haben. Im Rahmen der Zahlungsabwicklung werden Ihre Zahlungsdaten an das beauftragte Kreditinstitut weitergeleitet.
                            </span>

                            <span className="block">Die bei Ihrem Besuch unserer Website automatisch erhobenen Daten werden ausschließlich für die oben genannten Zwecke verwendet. Eine anderweitige Nutzung der Daten erfolgt nicht.</span>

                            <span className="block">Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir geben Ihre Daten daher grundsätzlich nicht an Dritte weiter, es sei denn, eine gesetzliche Verpflichtung zur Weitergabe besteht oder Sie uns Ihre ausdrückliche Einwilligung erteilt haben.</span>
                        </span>
                    </Section>
                    <Section id="SectionNine" title="9. Verschlüsselung (SSL/TLS)">
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 space-y-2">
                            <span className="block">Unsere Website verwendet eine SSL- bzw. TLS-Verschlüsselung, um die Sicherheit und den Schutz der Übertragung von vertraulichen Inhalten zu gewährleisten. Dies betrifft insbesondere Bestellungen oder -Anfragen, die Sie als Seitenbesucher an uns als Betreiber der Website senden. Eine verschlüsselte Verbindung ist durch das „https://" in der Adresszeile Ihres Browsers sowie das Schloss-Symbol in Ihrer Browserzeile erkennbar.
                            </span>

                            <span className="block">Die Aktivierung der SSL- bzw. TLS-Verschlüsselung bewirkt, dass die von Ihnen an uns gesendeten Daten nicht von unbefugten Dritten mitgelesen werden können.</span>
                        </span>
                    </Section>
                    <Section id="SectionTen" title="10. Speicherdauer">
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600">
                            Die Speicherung Ihrer personenbezogenen Daten, die Sie uns über unsere Website übermitteln, erfolgt nur für die Dauer, die zur Erreichung des jeweiligen Zwecks der Datenverarbeitung notwendig ist. In Übereinstimmung mit handels- und steuerrechtlichen Aufbewahrungspflichten kann die Speicherung bestimmter Daten jedoch bis zu 10 Jahre dauern.
                        </span>
                    </Section>
                    <Section id="SectionEleven" title="11. Ihre Datenschutzrechte">
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Als betroffene Person der Datenverarbeitung haben Sie, in Übereinstimmung mit den gesetzlichen Bestimmungen, die folgenden Rechte gegenüber dem Verantwortlichen bezüglich Ihrer personenbezogenen Daten:
                        </span>
                        <h4 className="font-semibold mb-2">A. Widerrufscrecht</h4>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Viele Datenverarbeitungen sind nur mit Ihrer ausdrücklichen Zustimmung möglich. Wenn die Verarbeitung Ihrer Daten auf Ihrer Einwilligung basiert, haben Sie das Recht, diese Einwilligung gemäß Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft zu widerrufen. Die Rechtmäßigkeit der Datenverarbeitung, die bis zum Widerruf auf der Grundlage Ihrer Einwilligung erfolgt ist, bleibt davon unberührt. Die Speicherung der Daten für Abrechnungs- und Buchhaltungszwecke wird von einem Widerruf nicht beeinflusst.
                        </span>
                        <h4 className="font-semibold mb-2">B. Auskunftsrecht</h4>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Gemäß Art. 15 DSGVO haben Sie das Recht, von uns eine Bestätigung darüber zu verlangen, ob wir Ihre personenbezogenen Daten verarbeiten. Ist dies der Fall, so haben Sie Anspruch auf Auskunft über diese Daten, einschließlich der Verarbeitungszwecke, der Kategorien der verarbeiteten Daten, der Empfänger oder Kategorien von Empfängern, gegenüber denen die Daten offengelegt wurden oder werden, die geplante Speicherdauer bzw. die Kriterien für deren Festlegung, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung, Beschwerde bei einer Aufsichtsbehörde, die Herkunft der Daten, sofern diese nicht bei Ihnen erhoben wurden, das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftige Informationen über die involvierte Logik sowie die Sie betreffende Tragweite und die angestrebten Auswirkungen einer solchen Verarbeitung, sowie Ihr Recht auf Unterrichtung, welche Garantien gemäß Art. 46 DSGVO bei Weiterleitung Ihrer Daten in Drittländer bestehen.
                        </span>
                        <h4 className="font-semibold mb-2">C. Recht auf Berichtigung</h4>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Sie haben das Recht, jederzeit gemäß Art. 16 DSGVO die Korrektur unrichtiger personenbezogener Daten, die Sie betreffen, und/oder die Ergänzung Ihrer unvollständigen Daten von uns zu verlangen.
                        </span>
                        <h4 className="font-semibold mb-2">D. Recht auf Löschung</h4>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Sie haben das Recht, gemäß Art. 17 DSGVO die Löschung Ihrer personenbezogenen Daten zu verlangen, wenn einer der folgenden Gründe vorliegt:
                        </span>
                        <span className="text-sm font-light tracking-tight leading-relaxed text-gray-600 italic space-y-2 block mb-2 mx-auto max-w-3xl">
                            <span className="block">
                                a. Ihre personenbezogenen Daten werden nicht mehr für die Zwecke benötigt, für die sie erhoben oder anderweitig verarbeitet wurden.
                            </span>
                            <span className="block">
                                b. Sie widerrufen Ihre Zustimmung, die die Verarbeitung gemäß Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO legitimierte, und es besteht keine andere Rechtsgrundlage für die Verarbeitung.
                            </span>
                            <span className="block">
                                c.  Sie widersprechen der Verarbeitung gemäß Art. 21 Abs. 1 DSGVO und es gibt keine zwingenden schutzwürdigen Gründe für die Verarbeitung, oder Sie widersprechen der Verarbeitung gemäß Art. 21 Abs. 2 DSGVO.
                            </span>
                            <span className="block">
                                d. Es liegt eine unrechtmäßige Verarbeitung der personenbezogenen Daten vor.
                            </span>
                            <span className="block">
                                e. Wir sind aufgrund einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht des Mitgliedstaates, dem wir unterliegen, zur Löschung der personenbezogenen Daten verpflichtet.
                            </span>
                            <span className="block">
                                f. Die Erhebung der personenbezogenen Daten erfolgte im Zusammenhang mit der Bereitstellung von Diensten der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO.</span>
                        </span>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Unter folgenden Umständen kann dieses Recht eingeschränkt sein, wenn die Verarbeitung unerlässlich ist:
                        </span>
                        <span className="text-sm font-light tracking-tight leading-relaxed text-gray-600 italic space-y-2 block mb-2 mx-auto max-w-3xl">
                            <span className="block">
                                a. um einer rechtlichen Verpflichtung nachzukommen, die die Verarbeitung nach dem Recht der Union oder des Mitgliedstaates, dem wir unterliegen, erfordert, oder um eine Aufgabe im öffentlichen Interesse oder in Ausübung öffentlicher Gewalt wahrzunehmen;
                            </span>
                            <span className="block">
                                b. zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder des Mitgliedstaates, dem wir unterliegen, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die uns übertragen wurde;
                            </span>
                            <span className="block">
                                c. aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO;
                            </span>
                            <span className="block">
                                d. für Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gemäß Art. 89 Abs. 1 DSGVO, die im öffentlichen Interesse liegen, sofern die Wahrung der Rechte der betroffenen Person die Ziele dieser Verarbeitung unmöglich machen oder ernsthaft beeinträchtigen würde; oder
                            </span>
                            <span className="block">
                                e. zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                            </span>
                        </span>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 block mb-2">
                            Sollten wir Ihre personenbezogenen Daten öffentlich gemacht haben und gemäß den vorherigen Bestimmungen zu deren Löschung verpflichtet sein, so ergreifen wir unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um die für die Datenverarbeitung Verantwortlichen, die diese Daten verarbeiten, darüber in Kenntnis zu setzen, dass Sie als betroffene Person die Löschung aller Links zu Ihren personenbezogenen Daten oder von Kopien oder Replikationen dieser Daten verlangt haben.
                        </span>
                        <h4 className="font-semibold mb-2">E. Recht auf Einschränkung der Verarbeitung</h4>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Gemäß Art. 18 DSGVO haben Sie das Recht, die Einschränkung der Verarbeitung (Sperrung) Ihrer personenbezogenen Daten zu verlangen. Um dieses Recht auszuüben, können Sie sich jederzeit an uns wenden. Die Kontaktdaten finden Sie im Impressum. Eine Einschränkung der Verarbeitung kann in folgenden Fällen verlangt werden:
                        </span>
                        <span className="text-sm font-light tracking-tight leading-relaxed text-gray-600 italic space-y-2 block mb-2 mx-auto max-w-3xl">
                            <span className="block">
                                a. Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                            </span>
                            <span className="block">
                                b. Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                            </span>
                            <span className="block">
                                c. Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                            </span>
                            <span className="block">
                                d. Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                            </span>
                        </span>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Nach einer Einschränkung der Verarbeitung Ihrer personenbezogenen Daten dürfen diese grundsätzlich nur noch mit Ihrer Einwilligung verarbeitet werden. Ausnahmen gelten für bestimmte, gesetzlich definierte Fälle, wie beispielsweise zur Geltendmachung von Rechtsansprüchen oder zum Schutz öffentlicher Interessen.
                        </span>
                        <h4 className="font-semibold mb-2">F. Recht auf Unterrichtung</h4>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Sollten Sie von Ihrem Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten Gebrauch machen, sind wir gemäß Art. 19 DSGVO verpflichtet, alle Empfänger, denen die Daten offengelegt wurden, darüber zu informieren. Dies gilt nur dann nicht, wenn sich die Mitteilung als unmöglich erweist oder mit einem unverhältnismäßigen Aufwand verbunden ist. Auf Ihren Wunsch hin teilen wir Ihnen die Empfänger Ihrer Daten mit.
                        </span>
                        <h4 className="font-semibold mb-2">G. Schutz vor automatisierten Entscheidungen (Profiling)</h4>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Gemäß Art. 22 DSGVO haben Sie das Recht, nicht einer ausschließlich auf automatisierter Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt.
                        </span>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Dies gilt nicht, wenn die Entscheidung
                        </span>
                        <span className="text-sm font-light tracking-tight leading-relaxed text-gray-600 italic space-y-2 block mb-2 mx-auto max-w-3xl">
                            <span className="block">
                                a. für den Abschluss oder die Erfüllung eines Vertrags zwischen Ihnen und uns notwendig ist,
                            </span>
                            <span className="block">
                                b. gemäß Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Vorschriften angemessene Maßnahmen zur Wahrung Ihrer Rechte, Freiheiten und berechtigten Interessen enthalten oder
                            </span>
                            <span className="block">
                                c. mit Ihrer ausdrücklichen Zustimmung erfolgt ist.
                            </span>
                        </span>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Die Entscheidungen in den unter (a) bis (c) genannten Fällen dürfen jedoch nicht auf besonderen Kategorien personenbezogener Daten im Sinne von Art. 9 Abs. 1 DSGVO beruhen, es sei denn, Art. 9 Abs. 2 lit. a oder lit. g findet Anwendung und es wurden geeignete Maßnahmen zum Schutz der Rechte und Freiheiten sowie Ihrer berechtigten Interessen getroffen.
                        </span>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            In den unter (a) und (c) genannten Fällen ergreifen wir angemessene Maßnahmen, um Ihre Rechte und Freiheiten sowie Ihre berechtigten Interessen zu schützen. Dazu gehört mindestens das Recht, ein menschliches Eingreifen durch den Verantwortlichen zu verlangen, Ihren eigenen Standpunkt darzulegen und die Entscheidung anzufechten.
                        </span>
                        <h4 className="font-semibold mb-2">H. Recht auf Datenübertragbarkeit</h4>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            m Falle einer Verarbeitung Ihrer personenbezogenen Daten, die auf Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 lit. b DSGVO beruht und mithilfe automatisierter Verfahren erfolgt, haben Sie nach Art. 20 DSGVO das Recht, Ihre uns bereitgestellten Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und diese an einen anderen Verantwortlichen zu übermitteln oder die Übermittlung durch uns an einen anderen Verantwortlichen zu verlangen, sofern dies technisch realisierbar ist.
                        </span>
                        <h4 className="font-semibold mb-2">I. Widerspruchsrecht</h4>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Wenn wir Ihre personenbezogenen Daten auf Grundlage einer Interessenabwägung gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeiten, steht Ihnen das Recht zu, aus Gründen, die sich aus Ihrer persönlichen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung einzulegen; dies gilt auch für ein darauf basierendes Profiling. Die jeweils geltende Rechtsgrundlage für die Verarbeitung können Sie dieser Datenschutzerklärung entnehmen. Im Falle eines Widerspruchs werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung ist für die Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich (Widerspruch gemäß Art. 21 Abs. 1 DSGVO).
                        </span>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Im Falle der Verarbeitung Ihrer personenbezogenen Daten zum Zwecke der Direktwerbung sind Sie berechtigt, jederzeit Widerspruch gegen diese Verarbeitung einzulegen; dies gilt auch für das Profiling, sofern es mit solcher Direktwerbung in Verbindung steht. Im Falle eines Widerspruchs werden Ihre personenbezogenen Daten nicht mehr für Direktwerbungszwecke verwendet (Widerspruch gemäß Art. 21 Abs. 2 DSGVO).
                        </span>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            In Bezug auf die Nutzung von Diensten der Informationsgesellschaft haben Sie, ungeachtet der Richtlinie 2002/58/EG, die Möglichkeit, Ihr Widerspruchsrecht mittels automatisierter Verfahren, unter Anwendung technischer Spezifikationen, auszuüben.
                        </span>
                        <h4 className="font-semibold mb-2">J. Beschwerderecht bei der zuständigen Aufsichtsbehörde gemäß Art. 77 DSGVO</h4>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Im Falle von Verstößen gegen die Bestimmungen der DSGVO steht den betroffenen Personen ein Recht zur Beschwerde bei einer zuständigen Aufsichtsbehörde zu. Die Beschwerde kann insbesondere in dem Mitgliedstaat, in dem die betroffene Person ihren gewöhnlichen Aufenthalt, ihren Arbeitsplatz hat oder in dem der Ort des mutmaßlichen Verstoßes liegt, eingelegt werden. Das Beschwerderecht nach dieser Bestimmung besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                        </span>
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 mb-2 block">
                            Unsere zuständige Aufsichtsbehörde ist:
                        </span>
                    </Section>
                    <Section id="SectionTwelve" title="12 Gültigkeit und Änderung dieser Datenschutzerklärung">
                        <span className="text-lg font-light tracking-tight leading-relaxed text-gray-600 space-y-2">
                            <span className="block">Diese Datenschutzerklärung tritt am _________ in Kraft. Wir behalten uns vor, diese Erklärung bei Bedarf und unter Einhaltung der geltenden Datenschutzgesetze zu ändern. Dies kann beispielsweise erforderlich sein, um neuen rechtlichen Anforderungen gerecht zu werden oder um Änderungen an unserer Website oder neuen, über unsere Website angebotenen Diensten zu berücksichtigen. Die jeweils aktuelle Version der Datenschutzerklärung, die zum Zeitpunkt Ihres Besuchs auf unserer Website abrufbar ist, ist bindend.
                            </span>

                            <span className="block">m Falle von Änderungen an dieser Datenschutzerklärung werden wir diese auf dieser Seite veröffentlichen, um Sie umfassend darüber zu informieren, welche personenbezogenen Daten wir erfassen, wie wir sie verarbeiten und unter welchen Bedingungen wir sie gegebenenfalls weitergeben.</span>
                        </span>
                    </Section>
                </div>
            </div>
            {/* <Footer /> */}
        </section>
    );
}

export default PrivacyPoulcy;