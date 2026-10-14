// ============================================================
// data.js — Alle Inhalte der Website "Senioren mit Smartphone"
// ============================================================
//
// FORMATE — Neue Formate hier eintragen; der Rest passt sich automatisch an.
//   label    Text auf dem Öffnen-Button
//   icon     "pdf" | "pptx" | "html" | "video" | "docx" (siehe index.html)
//   neuerTab true = öffnet in neuem Tab/Fenster
//
const FORMATE = {
  pdf:   { label: "PDF öffnen",          icon: "pdf",   neuerTab: true  },
  pptx:  { label: "PowerPoint öffnen",   icon: "pptx",  neuerTab: true  },
  html:  { label: "Präsentation öffnen", icon: "html",  neuerTab: false },
  video: { label: "Video ansehen",        icon: "video", neuerTab: true  },
  docx:  { label: "Word öffnen",          icon: "docx",  neuerTab: true  }
};

// ============================================================
// PRÄSENTATIONEN
// Felder:
//   id           Eindeutige ID (z.B. "p5")
//   datum        Datum im Format "JJJJ-MM-TT"
//   titel        Titel der Präsentation
//   beschreibung Kurzbeschreibung
//   thema        Themenbereich (z.B. "Google Maps", "Sicherheit")
//   kurs         "Montag" | "Mittwoch" | "Beide"
//   kursleiter   Name des Kursleiters
//   schlagworte  Array mit zusätzlichen Suchbegriffen
//   neu          true = zeigt "Neu"-Badge an
//   dateien      Array mit { typ, datei }
//                typ:   Schlüssel aus FORMATE (z.B. "pdf", "pptx")
//                datei: Lokaler Pfad ODER externer Link (OneDrive, Google Drive usw.)
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
  // ----------------------------------------------------------
  tipps: [
    {
      id: "t3",
      titel: "Sichere Passwörter erstellen und merken",
      beschreibung: "Wie Sie starke Passwörter nutzen, ohne sie zu vergessen.",
      inhalt: "Ein sicheres Passwort hat mindestens 12 Zeichen und enthält Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen. Ein guter Trick: Denken Sie sich einen Satz aus, den Sie sich gut merken können, und nehmen Sie den ersten Buchstaben jedes Wortes. Zum Beispiel: \"Mein Hund Bello läuft jeden Tag 3 Runden!\" wird zu \"MHBljT3R!\"",
      kategorie: "Sicherheit"
    },
    {
      id: "t2",
      titel: "Offline-Karten herunterladen",
      beschreibung: "Navigation auch ohne Internetverbindung nutzen.",
      inhalt: "In Google Maps können Sie Karten für bestimmte Gebiete herunterladen. Öffnen Sie Google Maps, tippen Sie auf Ihr Profilbild oben rechts, wählen Sie \"Offline-Karten\" und dann \"Eigene Karte auswählen\". Zoomen Sie auf das gewünschte Gebiet und tippen Sie auf \"Herunterladen\".",
      kategorie: "Google Maps"
    },
    {
      id: "t1",
      titel: "Akkulaufzeit verlängern",
      beschreibung: "Einfache Einstellungen für mehr Akkudauer.",
      inhalt: "Drei einfache Maßnahmen verlängern die Akkulaufzeit spürbar: 1. Bildschirmhelligkeit reduzieren, 2. WLAN und Bluetooth ausschalten, wenn Sie sie nicht brauchen, 3. Hintergrund-Apps schließen. Diese Einstellungen finden Sie alle unter \"Einstellungen\" auf Ihrem Smartphone.",
      kategorie: "Allgemein"
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
