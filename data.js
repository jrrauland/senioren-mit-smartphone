// ============================================================
// data.js — Alle Inhalte der Website "Senioren mit Smartphone"
// ============================================================
//
// FORMATE — Neue Formate hier eintragen; der Rest passt sich automatisch an.
const FORMATE = {
  pdf:   { label: "PDF öffnen",          icon: "pdf",   neuerTab: true  },
  pptx:  { label: "PowerPoint ansehen",  icon: "pptx",  neuerTab: true  },
  html:  { label: "Präsentation öffnen", icon: "html",  neuerTab: false },
  video: { label: "Video ansehen",        icon: "video", neuerTab: true  },
  docx:  { label: "Word öffnen",          icon: "docx",  neuerTab: true  }
};

// ============================================================
// PRÄSENTATIONEN
// Felder:
//   id, datum, titel, beschreibung, thema
//   kurs         "Montag" | "Mittwoch" | "Beide"
//   kursleiter   Name des Kursleiters
//   schlagworte  Array mit Suchbegriffen
//   neu          true = "Neu"-Badge
//   dateien      Array mit { typ, datei }
//                datei: Pfad relativ zum Repo-Root, z.B. "praesentationen/woche1.pdf"
// ============================================================
const SITE_DATA = {

  praesentationen: [
    {
      id: "p4",
      datum: "2025-06-12",
      titel: "Google Maps: Navigation & Orte finden",
      beschreibung: "Wie Sie mit Google Maps Adressen suchen, Routen planen und sich auch ohne Internetverbindung zurechtfinden.",
      thema: "Google Maps",
      kurs: "Mittwoch",
      kursleiter: "Maria Müller",
      schlagworte: ["navigation", "karten", "offline", "route"],
      neu: true,
      dateien: [
        { typ: "pdf",  datei: "praesentationen/woche4.pdf"  },
        { typ: "pptx", datei: "praesentationen/woche4.pptx" }
      ]
    },
    {
      id: "p3",
      datum: "2025-06-05",
      titel: "Sicherheit & Datenschutz im Alltag",
      beschreibung: "Sichere Passwörter, Erkennung von Betrugsversuchen und wie Sie Ihre persönlichen Daten schützen.",
      thema: "Sicherheit",
      kurs: "Montag",
      kursleiter: "Hans Schmidt",
      schlagworte: ["passwort", "betrug", "datenschutz", "phishing"],
      neu: false,
      dateien: [
        { typ: "pdf",  datei: "praesentationen/woche3.pdf"  },
        { typ: "pptx", datei: "praesentationen/woche3.pptx" }
      ]
    },
    {
      id: "p2",
      datum: "2025-05-29",
      titel: "Starthilfe-App: Erste Schritte",
      beschreibung: "Einführung in die Starthilfe-App und wie Sie damit selbstständig üben können.",
      thema: "Starthilfe",
      kurs: "Beide",
      kursleiter: "Maria Müller",
      schlagworte: ["app", "üben", "einsteiger", "starthilfe"],
      neu: false,
      dateien: [
        { typ: "pdf",  datei: "praesentationen/woche2.pdf"  },
        { typ: "pptx", datei: "praesentationen/woche2.pptx" }
      ]
    },
    {
      id: "p0",
      datum: "",
      archiv: true,
      titel: "Einführung: Was ist ein Smartphone?",
      beschreibung: "Eine allgemeine Einführung in Smartphones — Aufbau, Betriebssysteme und grundlegende Begriffe.",
      thema: "Grundlagen",
      kurs: "Beide",
      kursleiter: "Hans Schmidt",
      schlagworte: ["einführung", "grundlagen", "betriebssystem", "android", "iphone"],
      neu: false,
      dateien: [
        { typ: "pdf",  datei: "praesentationen/einfuehrung.pdf"  },
        { typ: "pptx", datei: "praesentationen/einfuehrung.pptx" }
      ]
    },
    {
      id: "p1",
      datum: "2025-05-22",
      titel: "Willkommen: Ihr Smartphone kennenlernen",
      beschreibung: "Ein erster Überblick: Tasten, Bildschirm, Einstellungen und die wichtigsten Gesten.",
      thema: "Grundlagen",
      kurs: "Beide",
      kursleiter: "Hans Schmidt",
      schlagworte: ["grundlagen", "tasten", "gesten", "einstellungen"],
      neu: false,
      dateien: [
        { typ: "pdf",  datei: "praesentationen/woche1.pdf"  },
        { typ: "pptx", datei: "praesentationen/woche1.pptx" }
      ]
    }
  ],

  // ----------------------------------------------------------
  // TIPPS & TRICKS
  // Felder: id, titel, beschreibung, inhalt, kategorie
  // bilder (optional): Array mit { datei, beschriftung }
  //   datei:        Pfad relativ zum Repo-Root, z.B. "bilder/tipp-passwort.jpg"
  //   beschriftung: Optionaler Beschriftungstext unter dem Bild
  // ----------------------------------------------------------
  tipps: [
    {
      id: "t3",
      titel: "Sichere Passwörter erstellen und merken",
      beschreibung: "Wie Sie starke Passwörter nutzen, ohne sie zu vergessen.",
      kategorie: "Sicherheit",
      // Markdown: **fett**, *kursiv*, Listen, ![Beschriftung](bildpfad "Titel unter Bild")
      inhalt: `Ein sicheres Passwort hat mindestens **12 Zeichen** und enthält:

- Groß- und Kleinbuchstaben
- Zahlen
- Sonderzeichen (z.B. !, ?, #)

![Beispiel eines sicheren Passworts](bilder/tipp-passwort-beispiel.jpg "Beispiel: So sieht ein sicheres Passwort aus")

**Guter Trick:** Denken Sie sich einen Satz aus, den Sie sich gut merken können, und nehmen Sie den ersten Buchstaben jedes Wortes.

*Beispiel:* "Mein Hund Bello läuft jeden Tag 3 Runden!" wird zu **MHBljT3R!**

![Passwort-Einstellungen auf dem Smartphone](bilder/tipp-passwort-einstellungen.jpg "Wo Sie die Passwort-Einstellungen finden")`
    },
    {
      id: "t2",
      titel: "Offline-Karten herunterladen",
      beschreibung: "Navigation auch ohne Internetverbindung nutzen.",
      kategorie: "Google Maps",
      inhalt: `In Google Maps können Sie Karten für bestimmte Gebiete herunterladen und **auch ohne Internet** nutzen.

![Offline-Karten in Google Maps](bilder/tipp-maps-offline.jpg "So laden Sie Karten für die Offline-Nutzung herunter")

**So geht's:**

1. Öffnen Sie **Google Maps**
2. Tippen Sie auf Ihr **Profilbild** oben rechts
3. Wählen Sie **Offline-Karten**
4. Tippen Sie auf **Eigene Karte auswählen**
5. Zoomen Sie auf das gewünschte Gebiet
6. Tippen Sie auf **Herunterladen**`
    },
    {
      id: "t1",
      titel: "Akkulaufzeit verlängern",
      beschreibung: "Einfache Einstellungen für mehr Akkudauer.",
      kategorie: "Allgemein",
      inhalt: `Drei einfache Maßnahmen verlängern die Akkulaufzeit spürbar:

1. **Bildschirmhelligkeit reduzieren** — der Bildschirm verbraucht am meisten Strom
2. **WLAN und Bluetooth ausschalten** — wenn Sie sie gerade nicht brauchen
3. **Hintergrund-Apps schließen** — Apps, die Sie nicht nutzen, im Hintergrund beenden

Diese Einstellungen finden Sie alle unter **Einstellungen** auf Ihrem Smartphone.`
    }
  ],

  // ----------------------------------------------------------
  // LINKS & RESSOURCEN
  // ----------------------------------------------------------
  links: [
    {
      id: "l5",
      name: "BSI für Bürger",
      url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/verbraucherinnen-und-verbraucher_node.html",
      beschreibung: "Sicherheitstipps vom Bundesamt für Sicherheit in der Informationstechnik.",
      kategorie: "Sicherheit"
    },
    {
      id: "l4",
      name: "Starthilfe-App",
      url: "https://www.starthilfe-app.de",
      beschreibung: "Offizielle Website der Starthilfe-App für Smartphone-Einsteiger.",
      kategorie: "Starthilfe-App"
    },
    {
      id: "l3",
      name: "Google Maps Hilfe",
      url: "https://support.google.com/maps",
      beschreibung: "Offizielle Hilfeseiten zu Google Maps auf Deutsch.",
      kategorie: "Navigation"
    },
    {
      id: "l2",
      name: "Verbraucherzentrale: Smartphone-Sicherheit",
      url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/smartphone-sicherheit",
      beschreibung: "Unabhängige Tipps zum sicheren Umgang mit dem Smartphone.",
      kategorie: "Sicherheit"
    },
    {
      id: "l1",
      name: "KI einfach erklärt (BR)",
      url: "https://www.br.de/nachrichten/netzwelt/kuenstliche-intelligenz-einfach-erklaert",
      beschreibung: "Verständliche Einführung in Künstliche Intelligenz vom Bayerischen Rundfunk.",
      kategorie: "Künstliche Intelligenz"
    }
  ]
};
