import './App.css';
import React, { useState, useEffect } from "react";
import logo1 from './logo_standard_en_ligne.svg';
import logo2 from './picto compte.svg';
import logo3 from './picto deco.svg';
import logo4 from './picto credit.svg';
import logo5 from './picto horloge blanc.svg';
import logo6 from './picto mes appels.svg';
import logo7 from './picto reglage.svg';
import logo8 from './picto_boutique.svg';
import logo9 from './picto appel-telephonique blanc.svg';

function App() {

    //const [heure_debut, setHeureDebut] = useState("");
    //const [heure_fin, setHeureFin] = useState("");

    document.title = 'Color Telecom - Accueil'

    return (
    //  <div className="App">
    //      <h1>CRUD APPLICATION</h1>

    //      <div className="form" >
    //          <label>Movie Name:</label>
    //            <input type="text" name="HeureDebut" onChange={(e) => {
    //                setHeureDebut(e.target.value);
    //            }}
    //          />
    //            <label>Review:</label>
    //            <input type="text" name="HeureFin" onChange={(e) => {
    //                setHeureFin(e.target.value);
    //            }}
    //          />
    //          <button>Submit</button>
    //      </div>
        //</div>
        <>
            <html>
            <meta charSet="utf-8" />
              
            <header>
                <div>
                    <span>
                        {" "}
                        Elit Dentaire <br />
                        <img src={logo9} /> 01 76 50 98 99{" "}
                    </span>
                    <span>
                        Forfait 5h <br /> <img src={logo5} />
                        <button className="button1" type="button">
                            {" "}
                        </button>{" "}
                        2min
                    </span>
                 <span>
                        Credit <br /> <img src={logo4} /> 0,00€
                    </span>)
                    <button className="button2" type="button">
                        {" "}
                        Standard ouvert{" "}
                    </button>
                </div>
            </header>
            <div className="">
                <ul className="sidebar">
                    <img
                        className="logo"
                        src={logo1}
                        alt="logo"
                    />
                    <li>
                        <a href="">
                            {" "}
                            <img src={logo6} /> Mes appels
                        </a>
                    </li>
                    <li>
                        <a href="">
                            {" "}
                            <img
                                className=""
                                src={logo7}
                            />{" "}
                            Configuration
                        </a>
                    </li>
                    <li>
                        <a href="">
                            {" "}
                            <img className="" src={logo2} />{" "}
                            Compte
                        </a>
                    </li>
                    <li>
                        <a href="">
                            {" "}
                            <img
                                className=""
                                src={logo8}
                            />{" "}
                            Boutique
                        </a>
                    </li>
                    <li>
                        <a className="deco" href="">
                            {" "}
                            <img
                                className=""
                                src={logo3}
                            />{" "}
                            Deconnexion
                        </a>
                    </li>
                </ul>
            </div>
                <div className="page">
                        <p className="b1">Horaire d'ouverture</p>
                        <p className="b2">Fuseau horaire</p> 
                        <select name="ville" id="ville-select">
                             <option value="paris">Paris</option>
                             <option value="londres">Londres</option>
                             <option value="sao-paulo">Sao Paulo</option>
                    </select>
                </div>
                <div className="bloc">
                    <div className="bloc1">
                        <p>Jours d'ouverture</p>
                        <div class="container">
                            <button class="my-buttons">L</button>
                            <button class="my-buttons">M</button>
                            <button class="my-buttons">M</button>
                            <button class="my-buttons">J</button>
                            <button class="my-buttons">V</button>
                            <button class="my-buttons">S</button>
                            <button class="my-buttons">D</button>
                        </div>
                        <button className="button7" type="button">
                            Reinitialiser
                        </button>
                    </div>
                    <div className="bloc2">
                        <p> Horaires </p>
                    </div>
                </div>
                <div className="options">
                    <button className="button5" type="button">
                        + Ajouter un nouveau creneaux
                    </button>
                    <button className="button6" type="button">
                         Enregistrer
                    </button>
                </div>
            <footer>
                <div>
                    <b>Essai gratuit</b>{" "}
                    <span>30 minutes d'appel restantes dans votre periode d'essai</span>
                    <br />
                    <button className="buttoncircle" type="button">
                        30 min
                    </button>
                    <button className="button4" type="button">
                        {" "}
                        <br />
                    </button>
                    <br />
                    <span className="start_of_line">30 min</span>{" "}
                    <span className="end_of_line">0 min</span>
                </div>
                <button className="button3" type="button">
                    Choisir un plan
                </button>
                    </footer>
            </html>
        </>

    );
}

export default App;
