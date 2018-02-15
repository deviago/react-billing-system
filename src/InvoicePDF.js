import React, { Component } from 'react';
import './styles/css/styles.css';
import './styles/css/fonts.css';
import './styles/css/icons-codes.css';
import logonew from './energicos-logo.png';

import graphic from './styles/assets/img/graphic-key.svg';
import piechart from './styles/assets/img/pie-chart.svg';
import stripe from './styles/assets/img/stripe.png';

export default class InvoicePDF extends Component {
	render() {
		return(
			<section>		
				<div id="genInvoicePDF">
					<button type="button" className="createacc btn closepopup" onClick={this.props.togglePopup}>Close</button>
					<div className="utility-bill-container">
						<div className="utility-bill-content">
							<div className="energicos-logo">
								<img src={logonew} className="logoimg" alt="energicos logo"/>
							</div>
							<div className="key-location">
								Energicos Norddeutschland GmbH |  Franklinstrasse 9-11 | 10587 Berlin
							</div>
							<div className="key-area">
								Kundenname<br/>
								Strasse PLZ,<br/>
								Ort
							</div>
							<div className="address-top">
								<span className="energicos-important"><i className="icon symbol icon-time"></i>Datum :</span>  31.01.2018<br/>
								<span className="energicos-important"><i className="icon symbol icon-users"></i>Ansprechpartner :</span> Birgit Meißner<br/>
								<span className="energicos-important"><i className="icon symbol icon-phone"></i>Telefon :</span> 030/ 520098-122
							</div>

							<div className="energicos_key_components">
								<div className="component">
									<div className="component-header">
										<i className="icon icon-header icon-folder"></i><br/>
										Vertragsnummer
									</div>
									<ul className="items">
										<li className="item last">ENB - 002824</li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header">
										<i className="icon icon-header icon-city"></i><br/>
										Objektnummer
									</div>
									<ul className="items">
										<li className="item last">121345-12</li>
									</ul>
								</div>

								<div className="component">
									<div className="component-header">
										<i className="icon icon-header icon-cabinet"></i><br/>
										Rechungsnummer
									</div>
									<ul className="items">
										<li className="item last">1017W-1215</li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header">
										<i className="icon icon-header icon-calendar"></i><br/>
										Abrechungszeitraum
									</div>
									<ul className="items">
										<li className="item last">01.01 - 31.12.2017</li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header">
										<i className="icon icon-header icon-coins"></i><br/>
										Zahibetrag brutto
									</div>
									<ul className="items">
										<li className="item last">1.5454.70 EUR</li>
									</ul>
								</div>
							</div>
							<div className="energicos-letter">
								<p className="salutation">Sehr geehrter Herr Mustermann,</p>
								<p>für den zurückliegenden Zeitraum berechnen wir Ihnen die im folgenden aufgeführten Entgelte. Die Abrechungsgrundlagen können Sie der beigefügten Aufstellung auf Seite 2 entnehmen.</p>
							</div>

							<div className="energicos_components_cluster">
								<div className="cluster">
									<div className="cluster-header">Position</div>
									<ul className="items">
										<li className="item">Grundkosten</li>
										<li className="item">Heizung/Warmwasser</li>
										<li className="item">Vorauszahlungen gesamt</li>
										<li className="item">Gebuehren</li>
										<li className="item">Gutschriften</li>
										<li className="item">Rabatt</li>
										<li className="item last"><span className="total">Zahlbetrag</span></li>
									</ul>
								</div>
								<div className="cluster">
									<div className="cluster-header">Erlauterung</div>
									<ul className="items">
										<li className="item">Verbrauchskosten</li>
										<li className="item">Verbrauchskosten</li>
										<li className="item"><span className="blank">blank</span></li>
										<li className="item"><span className="blank">blank</span></li>
										<li className="item"><span className="blank">blank</span></li>
										<li className="item"><span className="blank">blank</span></li>
										<li className="item last"><span className="total blank">Zahlberag</span></li>
									</ul>
								</div>
								<div className="cluster">
									<div className="cluster-header">Betrag Netto</div>
									<ul className="items">
										<li className="item">320.57 EUR</li>
										<li className="item">320.57 EUR</li>
										<li className="item">350.00 EUR</li>
										<li className="item">0.00</li>
										<li className="item">0.00</li>
										<li className="item">0.00</li>
										<li className="item last"><span className="total">350.00 EUR</span></li>
									</ul>
								</div>
								<div className="cluster">
									<div className="cluster-header">Umsatzsteuer</div>
									<ul className="items">
										<li className="item">60.91 EUR</li>
										<li className="item">60.91 EUR</li>
										<li className="item">60.91 EUR</li>
										<li className="item">0.00</li>
										<li className="item">0.00</li>
										<li className="item">0.00</li>
										<li className="item last"><span className="total">991.14 EUR</span></li>
									</ul>
								</div>
								<div className="cluster">
									<div className="cluster-header">Steuersatz</div>
									<ul className="items">
										<li className="item">19%</li>
										<li className="item">19%</li>
										<li className="item">19%</li>
										<li className="item">19%</li>
										<li className="item">19%</li>
										<li className="item">19%</li>
										<li className="item last"><span className="total">180.45</span></li>
									</ul>
								</div>
								<div className="cluster">
									<div className="cluster-header">Betrag brutto</div>
									<ul className="items">
										<li className="item">381.48 EUR</li>
										<li className="item">381.48 EUR</li>
										<li className="item">381.48 EUR</li>
										<li className="item">0.00</li>
										<li className="item">0.00</li>
										<li className="item">0.00</li>
										<li className="item last"><span className="total">1,271.35 EUR</span></li>
									</ul>
								</div>
							</div>

							{/*<div class="energicos-letter">
								<p>Wenn Sie uns ein SEPA Mandat erteilt haben, werden wir den Restbetrag von Ihrem Konto innerhalb von 14 Tagen mit der Gläubiger ID DE123356066666655 unter der Referenz {Rechnungsnummer} einziehen. Guthaben werden von uns in diesem Zeitraum auf das uns benannte Konto überwiesen.</p>

								<p>Haben Sie uns bisher keine Einzugsermächtigung erteilt, bitten wir Sie den Rechnungsbetrag innerhalb von 14 Tagen nach Rechnungserhalt zu überweisen.</p>

								<p>Für die folgende Abrechungsperiode 2018 ergibt sich ein montlicher Abschlagsbetrag (inklusive Mehrwertsteuer) von {85,00} EUR ab dem 01.01.2018.</p>

								<p>Wir weisen darauf hin, daß gemäß Energieversorgungsvertrag die Zustimmung zu der vorliegenden Abrechnung als erteilt gilt, falls dieser Abrechung nicht innerhalb einer Frist von vier Wochen ab Rechnungszugang wiedersprochen wird.</p>
							</div>*/}

							<div className="footer-energicos">
								<div className="horizontal-divider"><hr className="energicos-footer-line" /></div>
								<div className="footer-component">
									energicos energy Gmbh<br/>
									Franklinstrasse 9-11<br/>
									10587 Berlin
								</div>

								<div className="footer-component">
									Sitz der Gesellschaft:<br/>
									Berlin Amtsgericht<br/>
									Charlottenburg<br/>
									HRB 180072 B USt-IdNr.:<br/>
									DE813522350
								</div>
								<div className="footer-component">
									Geschäftsführung<br/>
									Dipl.BW (FH) Angelika<br/>
									Hanke<br/>
								</div>

								<div className="footer-component">
									Hypovereinsbank<br/>
									Konto: 2245343<br/>
									IBAN: DE23235434846446554<br/>
									BLZ: 100 500 00
								</div>


								<div className="footer-component">
									Hypovereinsbank<br/>
									Konto: 2245343<br/>
									IBAN: DE23235434846446554<br/>
									BLZ: 100 500 00<br/>
									BIC: HYBNAAHRA
								</div>
							</div>

							<div className="energicos-wave">
								<img src={stripe} alt="stripe" width="350px"/>
							</div>
						</div>
					</div>

					<div className="utility-bill-container">
						<div className="utility-bill-content">
							<div className="energicos-logo">
								<img src={logonew} width="180mm" alt="energicos logo"/>
							</div>
							
							<div className="key-area">
								<p><span className="energicos-important">Kundenname :</span> Max Mustermann<br/>
								<span className="energicos-important">Kundenanschrift :</span> Musterstrasse 25, XXXX Ort<br/>
								<span className="energicos-important">Vertragsnummer :</span> 457553-5<br/>
								<span className="energicos-important">Kunden-email :</span>  client@email.com</p><br/>
								
								<p><span className="energicos-important">Objektnummer :</span> 4545555<br/>
									<span className="energicos-important">Lieferadresse :</span> Musterstrasse 25, XXXX Ort<br/>
									<span className="energicos-important">Rechungsnummer :</span> 1017W470145
								</p>
								
								<p className="current-page">Seite 2 von 4</p>
								
							</div>
							<div className="address-top">
								<span className="energicos-important"><i className="icon symbol icon-time"></i>Datum :</span>  31.01.2018<br/>
								<span className="energicos-important"><i className="icon symbol icon-users"></i>Ansprechpartner :</span> Birgit Meißner<br/>
								<span className="energicos-important"><i className="icon symbol icon-phone"></i>Telefon :</span> 030/ 520098-122
							</div>
							<div className="energicos-content">
								<h5 className="main-title">Verbrauchsermittlung und Rechungspositionen Heizwärme</h5>
								<h6 className="sub-title">Verbräuche im Abrechungszeitraum</h6>
							</div>
							
							<div className="energicos_key_components_6cols">
								<div className="component">
									<div className="component-header2">
										Zähler<br/> 
										Nummer
									</div>
									<ul className="items">
										<li className="item">0012121254</li>
										<li className="item">0012121254</li>
										<li className="item">0012121254</li>
										<li className="item">0012121254</li>
										<li className="item last"><span className="total">Total</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Zeitraum
										<div className="sub-columns">
											<div className="side-1">von</div>
											<div className="side-2">bis</div>
										</div>
									</div>
									<div className="sub-columns">
										<div className="side-1">
											<ul className="items">
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item last"><span className="total blank">blank</span></li>
											</ul>
										</div>
										<div className="side-2">
											<ul className="items">
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item last"><span className="total blank">blank</span></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="component">
									<div className="component-header2">
										Zählerstand
										<div className="sub-columns">
											<div className="side-1">von</div>
											<div className="side-2">bis</div>
										</div>
									</div>
									<div className="sub-columns">
										<div className="side-1">
											<ul className="items">
												<li className="item">152.645</li>
												<li className="item">152.645</li>
												<li className="item">152.645</li>
												<li className="item">152.645</li>
												<li className="item last"><span className="total blank">blank</span></li>
											</ul>
										</div>
										<div className="side-2">
											<ul className="items">
												<li className="item">136.563</li>
												<li className="item">136.563</li>
												<li className="item">136.563</li>
												<li className="item">136.563</li>
												<li className="item last"><span className="total blank">blank</span></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="component">
									<div className="component-header2">
										Verbrauch<br/>
										in kWh
									</div>
									<ul className="items">
										<li className="item">1.527</li>
										<li className="item">1.527</li>
										<li className="item">1.527</li>
										<li className="item">1.527</li>
										<li className="item last"><span className="total">5.752</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Umrechung<br/>
										Faktor
									</div>
									<ul className="items">
										<li className="item">0.001</li>
										<li className="item">0.001</li>
										<li className="item">0.001</li>
										<li className="item">0.001</li>
										<li className="item last"><span className="total blank">blank</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Verbrauch<br/>
										in MWh
									</div>
									<ul className="items">
										<li className="item">1.527</li>
										<li className="item">1.527</li>
										<li className="item">1.527</li>
										<li className="item">1.527</li>
										<li className="item last"><span className="total">5.752</span></li>
									</ul>
								</div>
							</div>
							<div className="energicos-content">
								<h6 className="sub-title">Verbrauchspreise im Abrechungszeitraum</h6>
							</div>
							
							<div className="energicos_key_components_5cols">
								<div className="component">
									<div className="component-header2">
										Zeitraum
										<div className="sub-columns">
											<div className="side-1">von</div>
											<div className="side-2">bis</div>
										</div>
									</div>
									<div className="sub-columns">
										<div className="side-1">
											<ul className="items">
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item last"><span className="total">Total</span></li>
											</ul>
										</div>
										<div className="side-2">
											<ul className="items">
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item last"><span className="total blank">Blank</span></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="component">
									<div className="component-header2">
										Verbrauchsmenge<br/> 
										in MWh
									</div>
									<ul className="items">
										<li className="item">3.520,25</li>
										<li className="item">3.520,25</li>
										<li className="item">3.520,25</li>
										<li className="item">3.520,25</li>
										<li className="item last"><span className="total">5.752</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Abrechungspreis<br/>
										in EUR / MWh
									</div>
									<ul className="items">
										<li className="item">44,45</li>
										<li className="item">44,45</li>
										<li className="item">44,45</li>
										<li className="item">44,45</li>
										<li className="item last"><span className="total">42,15</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Preisänderungs<br/>
										Faktor
									</div>
									<ul className="items">
										<li className="item">1,57</li>
										<li className="item">1,57</li>
										<li className="item">1,57</li>
										<li className="item">1,57</li>
										<li className="item last"><span className="total blank">blank</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Verbrauchskosten<br/>
										netto in EUR
									</div>
									<ul className="items">
										<li className="item">3.587,25</li>
										<li className="item">3.587,25</li>
										<li className="item">3.587,25</li>
										<li className="item">3.587,25</li>
										<li className="item last"><span className="total">5.752</span></li>
									</ul>
								</div>
							</div>
							<div className="energicos-content">
								<h6 className="sub-title">Grundpreise im Abrechungszeitraum</h6>
							</div>			
							<div className="energicos_key_components_5cols">
								<div className="component">
									<div className="component-header2">
										Zeitraum
										<div className="sub-columns">
											<div className="side-1">von</div>
											<div className="side-2">bis</div>
										</div>
									</div>
									<div className="sub-columns">
										<div className="side-1">
											<ul className="items">
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item last"><span className="total">Total</span></li>
											</ul>
										</div>
										<div className="side-2">
											<ul className="items">
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item last"><span className="total blank">Blank</span></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="component">
									<div className="component-header2">
										Verbrauchsmenge<br/> 
										in MWh
									</div>
									<ul className="items">
										<li className="item">3.520,25</li>
										<li className="item">3.520,25</li>
										<li className="item">3.520,25</li>
										<li className="item">3.520,25</li>
										<li className="item last"><span className="total">5.752</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Abrechungspreis<br/>
										in EUR / kw * a
									</div>
									<ul className="items">
										<li className="item">44,45</li>
										<li className="item">44,45</li>
										<li className="item">44,45</li>
										<li className="item">44,45</li>
										<li className="item last"><span className="total">42,15</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Preisänderungs<br/>
										Faktor
									</div>
									<ul className="items">
										<li className="item">1,57</li>
										<li className="item">1,57</li>
										<li className="item">1,57</li>
										<li className="item">1,57</li>
										<li className="item last"><span className="total blank">blank</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Verbrauchskosten<br/>
										netto in EUR
									</div>
									<ul className="items">
										<li className="item">3.587,25</li>
										<li className="item">3.587,25</li>
										<li className="item">3.587,25</li>
										<li className="item">3.587,25</li>
										<li className="item last"><span className="total">5.752</span></li>
									</ul>
								</div>
							</div>
							<div className="footer-energicos">
								<div className="horizontal-divider"><hr className="energicos-footer-line" /></div>
								<div className="footer-component">
									energicos energy Gmbh<br/>
									Franklinstrasse 9-11<br/>
									10587 Berlin
								</div>				
								<div className="footer-component">
									Sitz der Gesellschaft:<br/>
									Berlin Amtsgericht<br/>
									Charlottenburg<br/>
									HRB 180072 B USt-IdNr.:<br/>
									DE813522350
								</div>
								<div className="footer-component">
									Geschäftsführung<br/>
									Dipl.BW (FH) Angelika<br/>
									Hanke<br/>
								</div>				
								<div className="footer-component">
									Hypovereinsbank<br/>
									Konto: 2245343<br/>
									IBAN: DE23235434846446554<br/>
									BLZ: 100 500 00
								</div>				
								<div className="footer-component">
									Hypovereinsbank<br/>
									Konto: 2245343<br/>
									IBAN: DE23235434846446554<br/>
									BLZ: 100 500 00<br/>
									BIC: HYBNAAHRA
								</div>
							</div>
							<div className="energicos-wave">
								<img src={stripe} alt="stripe" width="350px"/>
							</div>			
						</div>
					</div>

					<div className="utility-bill-container">
						<div className="utility-bill-content">
							<div className="energicos-logo">
								<img src={logonew} width="180mm" alt="energicos logo"/>
							</div>		
							<div className="key-area">
								<p><span className="energicos-important">Kundenname :</span> Max Mustermann<br/>
								<span className="energicos-important">Kundenanschrift :</span> Musterstrasse 25, XXXX Ort<br/>
								<span className="energicos-important">Vertragsnummer :</span> 457553-5<br/>
								<span className="energicos-important">Kunden-email :</span>  client@email.com</p><br/>
								
								<p><span className="energicos-important">Objektnummer :</span> 4545555<br/>
									<span className="energicos-important">Lieferadresse :</span> Musterstrasse 25, XXXX Ort<br/>
									<span className="energicos-important">Rechungsnummer :</span> 1017W470145
								</p>			
								<p className="current-page">Seite 3 von 4</p>			
							</div>
							<div className="address-top">
								<span className="energicos-important"><i className="icon symbol icon-time"></i>Datum :</span>  31.01.2018<br/>
								<span className="energicos-important"><i className="icon symbol icon-users"></i>Ansprechpartner :</span> Birgit Meißner<br/>
								<span className="energicos-important"><i className="icon symbol icon-phone"></i>Telefon :</span> 030/ 520098-122
							</div>
							<div className="energicos-content">
								<h5 className="main-title">Verbrauchsermittlung und Rechungspositionen Warmwasser</h5>
								<h6 className="sub-title">Verbräuche Warmwasser im Abrechungszeitraum</h6>
							</div>		
							<div className="energicos_key_components_6cols">
								<div className="component">
									<div className="component-header2">
										Zähler<br/> 
										Nummer
									</div>
									<ul className="items">
										<li className="item">0012121254</li>
										<li className="item">0012121254</li>
										<li className="item">0012121254</li>
										<li className="item">0012121254</li>
										<li className="item last"><span className="total">Total</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Zeitraum
										<div className="sub-columns">
											<div className="side-1">von</div>
											<div className="side-2">bis</div>
										</div>
									</div>
									<div className="sub-columns">
										<div className="side-1">
											<ul className="items">
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item last"><span className="total blank">blank</span></li>
											</ul>
										</div>
										<div className="side-2">
											<ul className="items">
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item last"><span className="total blank">blank</span></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="component">
									<div className="component-header2">
										Zählerstand
										<div className="sub-columns">
											<div className="side-1">von</div>
											<div className="side-2">bis</div>
										</div>
									</div>
									<div className="sub-columns">
										<div className="side-1">
											<ul className="items">
												<li className="item">152.645</li>
												<li className="item">152.645</li>
												<li className="item">152.645</li>
												<li className="item">152.645</li>
												<li className="item last"><span className="total blank">blank</span></li>
											</ul>
										</div>
										<div className="side-2">
											<ul className="items">
												<li className="item">136.563</li>
												<li className="item">136.563</li>
												<li className="item">136.563</li>
												<li className="item">136.563</li>
												<li className="item last"><span className="total blank">blank</span></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="component">
									<div className="component-header2">
										Verbrauch<br/>
										in kWh
									</div>
									<ul className="items">
										<li className="item">1.527</li>
										<li className="item">1.527</li>
										<li className="item">1.527</li>
										<li className="item">1.527</li>
										<li className="item last"><span className="total">5.752</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Umrechung<br/>
										Faktor
									</div>
									<ul className="items">
										<li className="item">0.001</li>
										<li className="item">0.001</li>
										<li className="item">0.001</li>
										<li className="item">0.001</li>
										<li className="item last"><span className="total blank">blank</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Verbrauch<br/>
										in MWh
									</div>
									<ul className="items">
										<li className="item">1.527</li>
										<li className="item">1.527</li>
										<li className="item">1.527</li>
										<li className="item">1.527</li>
										<li className="item last"><span className="total">5.752</span></li>
									</ul>
								</div>
							</div>
							
							<div className="energicos-content">
								<h6 className="sub-title">Verbrauchskosten Warmwasser im Abrechungszeitraum</h6>
							</div>
							
							<div className="energicos_key_components_5cols">
								<div className="component">
									<div className="component-header2">
										Zeitraum
										<div className="sub-columns">
											<div className="side-1">von</div>
											<div className="side-2">bis</div>
										</div>
									</div>
									<div className="sub-columns">
										<div className="side-1">
											<ul className="items">
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item last"><span className="total">Total</span></li>
											</ul>
										</div>
										<div className="side-2">
											<ul className="items">
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item last"><span className="total blank">Blank</span></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="component">
									<div className="component-header2">
										Verbrauchsmenge<br/> 
										in MWh
									</div>
									<ul className="items">
										<li className="item">3.520,25</li>
										<li className="item">3.520,25</li>
										<li className="item">3.520,25</li>
										<li className="item">3.520,25</li>
										<li className="item last"><span className="total">5.752</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Abrechungspreis<br/>
										in EUR / MWh
									</div>
									<ul className="items">
										<li className="item">44,45</li>
										<li className="item">44,45</li>
										<li className="item">44,45</li>
										<li className="item">44,45</li>
										<li className="item last"><span className="total">42,15</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Preisänderungs<br/>
										Faktor
									</div>
									<ul className="items">
										<li className="item">1,57</li>
										<li className="item">1,57</li>
										<li className="item">1,57</li>
										<li className="item">1,57</li>
										<li className="item last"><span className="total blank">blank</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Verbrauchskosten<br/>
										netto in EUR
									</div>
									<ul className="items">
										<li className="item">3.587,25</li>
										<li className="item">3.587,25</li>
										<li className="item">3.587,25</li>
										<li className="item">3.587,25</li>
										<li className="item last"><span className="total">5.752</span></li>
									</ul>
								</div>
							</div>
							
							<div className="energicos-content">
								<h6 className="sub-title">Grundkosten Warmwasser im Abrechungszeitraum</h6>
							</div>		
							<div className="energicos_key_components_5cols">
								<div className="component">
									<div className="component-header2">
										Zeitraum
										<div className="sub-columns">
											<div className="side-1">von</div>
											<div className="side-2">bis</div>
										</div>
									</div>
									<div className="sub-columns">
										<div className="side-1">
											<ul className="items">
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item">01.01.2017</li>
												<li className="item last"><span className="total">Total</span></li>
											</ul>
										</div>
										<div className="side-2">
											<ul className="items">
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item">31.01.2017</li>
												<li className="item last"><span className="total blank">Blank</span></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="component">
									<div className="component-header2">
										Verbrauchsmenge<br/> 
										in MWh
									</div>
									<ul className="items">
										<li className="item">3.520,25</li>
										<li className="item">3.520,25</li>
										<li className="item">3.520,25</li>
										<li className="item">3.520,25</li>
										<li className="item last"><span className="total">5.752</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Abrechungspreis<br/>
										in EUR / kw * a
									</div>
									<ul className="items">
										<li className="item">44,45</li>
										<li className="item">44,45</li>
										<li className="item">44,45</li>
										<li className="item">44,45</li>
										<li className="item last"><span className="total">42,15</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Preisänderungs<br/>
										Faktor
									</div>
									<ul className="items">
										<li className="item">1,57</li>
										<li className="item">1,57</li>
										<li className="item">1,57</li>
										<li className="item">1,57</li>
										<li className="item last"><span className="total blank">blank</span></li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Verbrauchskosten<br/>
										netto in EUR
									</div>
									<ul className="items">
										<li className="item">3.587,25</li>
										<li className="item">3.587,25</li>
										<li className="item">3.587,25</li>
										<li className="item">3.587,25</li>
										<li className="item last"><span className="total">5.752</span></li>
									</ul>
								</div>
							</div>
							
							<div className="footer-energicos">
								<div className="horizontal-divider"><hr className="energicos-footer-line" /></div>
								<div className="footer-component">
									energicos energy Gmbh<br/>
									Franklinstrasse 9-11<br/>
									10587 Berlin
								</div>			
								<div className="footer-component">
									Sitz der Gesellschaft:<br/>
									Berlin Amtsgericht<br/>
									Charlottenburg<br/>
									HRB 180072 B USt-IdNr.:<br/>
									DE813522350
								</div>
								<div className="footer-component">
									Geschäftsführung<br/>
									Dipl.BW (FH) Angelika<br/>
									Hanke<br/>
								</div>			
								<div className="footer-component">
									Hypovereinsbank<br/>
									Konto: 2245343<br/>
									IBAN: DE23235434846446554<br/>
									BLZ: 100 500 00
								</div>			
								<div className="footer-component">
									Hypovereinsbank<br/>
									Konto: 2245343<br/>
									IBAN: DE23235434846446554<br/>
									BLZ: 100 500 00<br/>
									BIC: HYBNAAHRA
								</div>
							</div>
							<div className="energicos-wave">
								<img src={stripe} alt="stripe" width="350px"/>
							</div>		
						</div>
					</div>

					<div className="utility-bill-container">
						<div className="utility-bill-content">
							<div className="energicos-logo">
								<img src={logonew} width="180mm" alt="energicos logo"/>
							</div>
							<div className="key-area">
								<p><span className="energicos-important">Kundenname :</span> Max Mustermann<br/>
								<span className="energicos-important">Kundenanschrift :</span> Musterstrasse 25, XXXX Ort<br/>
								<span className="energicos-important">Vertragsnummer :</span> 457553-5<br/>
								<span className="energicos-important">Kunden-email :</span>  client@email.com</p><br/>
								<p><span className="energicos-important">Objektnummer :</span> 4545555<br/>
									<span className="energicos-important">Lieferadresse :</span> Musterstrasse 25, XXXX Ort<br/>
									<span className="energicos-important">Rechungsnummer :</span> 1017W470145
								</p>
								<p className="current-page">Seite 4 von 4</p>
							</div>
							<div className="address-top">
								<span className="energicos-important"><i className="icon symbol icon-time"></i>Datum :</span>  31.01.2018<br/>
								<span className="energicos-important"><i className="icon symbol icon-users"></i>Ansprechpartner :</span> Birgit Meißner<br/>
								<span className="energicos-important"><i className="icon symbol icon-phone"></i>Telefon :</span> 030/ 520098-122
							</div>
							<div className="energicos-content">
								<h5 className="main-title">Referenzwerte</h5>
							</div>
							<div className="energicos_key_components_4cols">
								<div className="component component-header-blank">
									<ul className="items">
										<li className="item-left">Vebrauch</li>
										<li className="item-left">Energieentgeite</li>
										<li className="item-left">Gaspreis Mittel Jahr</li>
										<li className="item-left last">Verbrauch je m2(Gebaude)</li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Abrechnungsperiode
									</div>
									<ul className="items">
										<li className="item">35,567 MWh</li>
										<li className="item">3,470.56 EUR</li>
										<li className="item">44.50 EUR/MWh</li>
										<li className="item last">105 kWh/m2</li>
									</ul>
								</div>
								<div className="component">
									<div className="component-header2">
										Vorperiode
									</div>
									<ul className="items">
										<li className="item">35,567 MWh</li>
										<li className="item">3,470.56 EUR</li>
										<li className="item">44.50 EUR/MWh</li>
										<li className="item last">105 kWh/m2</li>
									</ul>
								</div>
							</div>

							<div className="energicos-content">
								<div className="energicos-red"></div>
								<h5 className="main-title">Aufteilung Wärme/ Warmwasser</h5>
							</div>
							<div className="energicos_key_components_2cols">
								<div className="side-1-energicos">
									<img src={piechart} width="180px" alt="graphics-key"/>
								</div>

								<div className="side-2-energicos">
									<p className="Aufteilung-spacer">Die Heizkostenverordnung sieht vor, die Kosten für Wärme für Heizzwecke und Warmwasseraufbereitung aufzuteilen. Dazu müssen seit 2013 separate Warmwasserzähler installiert sein. Der Warmwasseranteil sollte nicht höher als 18% der Gesamtwärmekosten liegen. Insbesondere ein Abgleich der Warmwasser-Zirkulationssystems kann hierbei zu erheblichen Einsparungen führen. Wir setzen das gern mit Ihnen zusammen um, sprechen Sie uns bitte an!</p>
								</div>
							</div>
							<div className="energicos-content">
								<div className="energicos-red"></div>
								<h5 className="main-title">Betriebskostenoptimierung</h5>
							</div>

						  	<div className="energicos_key_components_2cols">
								<div className="side-1-energicos">
									<p>Mit der Darstellung der Gebäude Energieeffizienzklassen soll, ähnlich wie bereits bei Haushaltsgeräten üblich, Kauf- oder Mietinteressenten eine schnelle Einordnung des energetischen Zustands des Gebäudes ermöglicht werden.Im Sinne einer maximalen Betriebskostenoptimierung sollten Mieter, Gebäudebesitzer und Energielieferant in dieser Hinsicht an einem Strang ziehen um den Verbrauch des Gebäudes je m2 zu minimieren. Wenn Sie daran interessiert sind, rufen Sie uns bitte an!</p>
								</div>
								<div className="side-2-energicos">
									<img src={graphic} width="360px" alt="graphics-key"/>
							  	</div>
						  	</div>
							<div className="footer-energicos">
								<div className="horizontal-divider"><hr className="energicos-footer-line" /></div>
								<div className="footer-component">
									energicos energy Gmbh<br/>
									Franklinstrasse 9-11<br/>
									10587 Berlin
								</div>
								<div className="footer-component">
									Sitz der Gesellschaft:<br/>
									Berlin Amtsgericht<br/>
									Charlottenburg<br/>
									HRB 180072 B USt-IdNr.:<br/>
									DE813522350
								</div>
								<div className="footer-component">
									Geschäftsführung<br/>
									Dipl.BW (FH) Angelika<br/>
									Hanke<br/>
								</div>
								<div className="footer-component">
									Hypovereinsbank<br/>
									Konto: 2245343<br/>
									IBAN: DE23235434846446554<br/>
									BLZ: 100 500 00
								</div>
								<div className="footer-component">
									Hypovereinsbank<br/>
									Konto: 2245343<br/>
									IBAN: DE23235434846446554<br/>
									BLZ: 100 500 00<br/>
									BIC: HYBNAAHRA
								</div>
							</div>
							<div className="energicos-wave">
								<img src={stripe} alt="stripe" width="350px"/>
							</div>
						</div>
					</div>
				</div>
				<div id="editor"></div>
			</section>
		);
	}
}